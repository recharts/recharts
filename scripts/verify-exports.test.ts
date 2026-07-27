import { Node, Project, Symbol, SyntaxKind, Type, SymbolFlags } from 'ts-morph';
import { describe, it, expect } from 'vitest';
import { resolve } from 'path';
import { assertNotNull } from '../test/helper/assertNotNull';

const PROJECT_ROOT = resolve(__dirname, '..');
const TS_CONFIG_PATH = resolve(PROJECT_ROOT, 'tsconfig.json');
const SRC_INDEX_PATH = resolve(PROJECT_ROOT, 'src/index.ts');

// Types that we explicitly want to ban from public API
const FORBIDDEN_TYPES = new Set(['RechartsRootState']);

// BFS/DFS Traversal
// validationErrors will collect strings describing problems
const missingExports: string[] = [];
const forbiddenExports: string[] = [];
const visitedSymbols = new Map<string, boolean>();

// Create a valid vitest test suite
describe('Public API Exports', () => {
  // Initialize project once
  const project = new Project({
    tsConfigFilePath: TS_CONFIG_PATH,
  });

  // We need to resolve everything relative to the project to match correctly
  const srcIndex = project.getSourceFileOrThrow(SRC_INDEX_PATH);

  // Get all exported declarations from index.ts to know what IS exported
  const exportedSymbols = new Set<Symbol>();
  const exportedDeclarations = srcIndex.getExportedDeclarations();
  for (const decls of exportedDeclarations.values()) {
    for (const decl of decls) {
      const symbol = decl.getSymbol();
      if (symbol) {
        exportedSymbols.add(symbol);
        // Also add aliased symbol if likely
        const aliased = symbol.getAliasedSymbol();
        if (aliased) {
          exportedSymbols.add(aliased);
        }
      }
    }
  }

  // Helper to get unique ID for a symbol to avoid cycles
  function getSymbolId(symbol: Symbol): string {
    // Name + declaration location is usually unique enough for this purpose
    const decl = symbol.getDeclarations()[0];
    if (!decl) return symbol.getName();
    return `${decl.getSourceFile().getFilePath()}:${decl.getStart()}`;
  }

  function isExported(symbol: Symbol): boolean {
    const name = symbol.getName();

    // Check by name first. This covers cases where an internal interface is exported via a type alias of the same name.
    if (exportedDeclarations.has(name)) {
      return true;
    }

    const declarations = symbol.getDeclarations();
    if (declarations.length === 0) {
      return true;
    }

    const declaration = declarations[0];
    assertNotNull(declaration);
    const declarationPath = declaration.getSourceFile().getFilePath();
    const declarationStart = declaration.getStart();

    for (const exportedSymbol of exportedSymbols) {
      if (symbol === exportedSymbol) {
        return true;
      }

      const exportedDeclarationsOfSymbol = exportedSymbol.getDeclarations();
      if (
        exportedDeclarationsOfSymbol.some(
          exportedDeclaration =>
            exportedDeclaration.getSourceFile().getFilePath() === declarationPath &&
            exportedDeclaration.getStart() === declarationStart,
        )
      ) {
        return true;
      }

      const aliased = exportedSymbol.getAliasedSymbol();
      if (
        aliased === symbol ||
        aliased
          ?.getDeclarations()
          .some(
            aliasedDeclaration =>
              aliasedDeclaration.getSourceFile().getFilePath() === declarationPath &&
              aliasedDeclaration.getStart() === declarationStart,
          )
      ) {
        return true;
      }
    }

    return false;
  }

  function verifySymbolExport(symbol: Symbol, trace: string): void {
    const name = symbol.getName();
    const declarations = symbol.getDeclarations();
    const isInSrc = declarations.some(declaration => {
      const filePath = declaration.getSourceFile().getFilePath();
      return filePath.includes('/src/') && !filePath.includes('node_modules');
    });

    if (!isInSrc) {
      return;
    }

    if (FORBIDDEN_TYPES.has(name)) {
      forbiddenExports.push(`Forbidden type "${name}" is reachable via: ${trace}`);
    }

    const isNamedType =
      symbol.getFlags() & (SymbolFlags.Class | SymbolFlags.Interface | SymbolFlags.TypeAlias | SymbolFlags.Enum);
    if (isNamedType && !(symbol.getFlags() & SymbolFlags.TypeParameter) && !isExported(symbol)) {
      missingExports.push(
        `Type "${name}" (flags: ${symbol.getFlags()}) is reachable via: ${trace} but not exported from index.ts`,
      );
    }
  }

  function verifyTypeReferences(declaration: Node, trace: string, checkConstituents: boolean): void {
    if (!checkConstituents || !Node.isTyped(declaration)) {
      return;
    }

    const typeNode = declaration.getTypeNode();
    if (!typeNode) {
      return;
    }

    if (!Node.isTypeReference(typeNode)) {
      return;
    }

    const symbol = typeNode.getTypeName().getSymbol();
    const referencedSymbol = symbol?.getAliasedSymbol() || symbol;
    const referencedDeclaration = referencedSymbol?.getDeclarations()[0];
    if (
      referencedSymbol &&
      referencedSymbol.getFlags() & SymbolFlags.TypeAlias &&
      referencedDeclaration &&
      Node.isTypeAliasDeclaration(referencedDeclaration) &&
      referencedDeclaration.getTypeNode().isKind(SyntaxKind.UnionType)
    ) {
      verifySymbolExport(referencedSymbol, trace);
    }
  }

  // We need a queue for BFS: { type, trace, checkSelf, checkConstituents }
  type QueueItem = {
    type: Type;
    trace: string; // e.g. "Tooltip -> props -> payloadUniqBy"
    checkSelf: boolean; // Should we strictly check if THIS type is exported?
    checkConstituents: boolean; // Should we traverse children/members as visible/public?
  };

  /**
   * Traverses a type and adds its specific constituent parts to the queue.
   *
   * Strategy:
   * - **Strong Reachability (`checkConstituents: true`)**: Types reached via Properties, Unions, Function Params/Returns.
   *   These types are "direct" dependencies and MUST be exported if they are named types.
   * - **Intersection Parts**: We treat the *parts* of an intersection as `checkSelf: false` (don't force export of the mixin itself),
   *   BUT `checkConstituents: inherit` (if the parent was strong, the mixin's members are visible, so traverse strongly).
   */
  function processType(type: Type, trace: string, queue: QueueItem[], checkSelf: boolean, checkConstituents: boolean) {
    // 1. Check if type is forbidden or missing export
    const symbol = type.getSymbol() || type.getAliasSymbol();

    if (symbol) {
      const symId = getSymbolId(symbol);
      const wasVisitedStrongly = visitedSymbols.get(symId) === true;
      const wasVisitedWeakly = visitedSymbols.has(symId);

      // Optimization: If already visited strongly, no need to do anything.
      if (wasVisitedStrongly) {
        return;
      }

      // If visiting weakly and already visited (weakly or strongly), skip.
      if (!checkConstituents && wasVisitedWeakly) {
        return;
      }

      // Mark visited status
      // We track "Strong Visit" based on checkConstituents (are we in a public subtree?)
      visitedSymbols.set(symId, checkConstituents || wasVisitedStrongly);

      if (checkSelf) {
        verifySymbolExport(symbol, trace);
      }

      // Loop over members
      const members = symbol.getMembers();
      for (const member of members) {
        // Only public members
        const decl = member.getDeclarations()[0];
        if (decl) {
          verifyTypeReferences(decl, `${trace} -> member: ${member.getName()}`, checkConstituents);
        }
        const memberType = member.getTypeAtLocation(decl || srcIndex);
        const memberName = member.getName();

        queue.push({
          type: memberType,
          trace: `${trace} -> member: ${memberName}`,
          checkSelf: checkConstituents, // Members of a public type must be public
          checkConstituents, // Continue recursion strength
        });
      }
    }

    // 2. Deconstruct the type to find more reachable types

    // Union: Strong (Members of a union are alternatives, user needs them) -> Inherit
    if (type.isUnion()) {
      const parts = type.getUnionTypes();
      for (const part of parts) {
        queue.push({
          type: part,
          trace: `${trace} (union part)`,
          checkSelf: checkConstituents, // If union is required, parts are required
          checkConstituents, // Inherit
        });
      }
    }

    // Intersection: PARTS are Internal mixins usually, but their CONTENT is public.
    if (type.isIntersection()) {
      const parts = type.getIntersectionTypes();
      for (const part of parts) {
        queue.push({
          type: part,
          trace: `${trace} (intersection part)`,
          checkSelf: false, // Don't require the Mixin Type itself to be exported
          checkConstituents, // BUT require its contents to be valid if we are in a strong path
        });
      }
    }

    // Array
    if (type.isArray()) {
      const elemType = type.getArrayElementType();
      if (elemType) {
        queue.push({
          type: elemType,
          trace: `${trace} (array element)`,
          checkSelf: checkConstituents, // If array is public, element is public
          checkConstituents, // Inherit
        });
      }
    }

    // Type Arguments (Generics)
    const typeArgs = type.getTypeArguments();
    for (const arg of typeArgs) {
      queue.push({
        type: arg,
        trace: `${trace} <generic arg>`,
        checkSelf: checkConstituents,
        checkConstituents,
      });
    }

    // Call Signatures (Functions)
    const callSigs = type.getCallSignatures();
    for (const sig of callSigs) {
      queue.push({
        type: sig.getReturnType(),
        trace: `${trace} -> returnType`,
        checkSelf: checkConstituents,
        checkConstituents,
      });
      for (const param of sig.getParameters()) {
        const paramType = param.getTypeAtLocation(sig.getDeclaration());
        queue.push({
          type: paramType,
          trace: `${trace} -> param: ${param.getName()}`,
          checkSelf: checkConstituents,
          checkConstituents,
        });
      }
    }

    // Properties (for object types)
    if (!symbol) {
      const props = type.getProperties();
      for (const prop of props) {
        const declaration = prop.getDeclarations()[0];
        if (declaration) {
          verifyTypeReferences(declaration, `${trace} -> prop: ${prop.getName()}`, checkConstituents);
        }
        const propType = prop.getTypeAtLocation(srcIndex);
        queue.push({
          type: propType,
          trace: `${trace} -> prop: ${prop.getName()}`,
          checkSelf: checkConstituents,
          checkConstituents,
        });
      }
    }
  }

  // --- EXECUTE BFS TRAVERSAL (Runs once during test collection) ---
  const queue: QueueItem[] = [];

  // Seed queue with all exported symbols
  for (const [name, decls] of exportedDeclarations) {
    for (const decl of decls) {
      const type: Type = decl.getType();
      queue.push({
        type,
        trace: `Export: ${name}`,
        checkSelf: true, // Exports are definitely public
        checkConstituents: true, // And their children are public
      });
    }
  }

  // Run BFS
  let i = 0;
  const MAX_ITERATIONS = 20000;
  while (queue.length > 0 && i < MAX_ITERATIONS) {
    const item = queue.shift();
    if (item) {
      processType(item.type, item.trace, queue, item.checkSelf, item.checkConstituents);
    }
    i++;
  }

  it('should not export forbidden types', () => {
    expect(forbiddenExports).toEqual([]);
  });

  it('should export all reachable types (strong reachability)', () => {
    expect(missingExports).toEqual([]);
  });
});

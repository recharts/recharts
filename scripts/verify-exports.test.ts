import { Project, Symbol, Type, SymbolFlags } from 'ts-morph';
import { describe, it, expect } from 'vitest';
import { resolve } from 'path';

const PROJECT_ROOT = resolve(__dirname, '..');
const TS_CONFIG_PATH = resolve(PROJECT_ROOT, 'tsconfig.json');
const SRC_INDEX_PATH = resolve(PROJECT_ROOT, 'src/index.ts');

// Types that we explicitly want to ban from public API
const FORBIDDEN_TYPES = new Set(['RechartsRootState']);

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

  // BFS/DFS Traversal
  // validationErrors will collect strings describing problems
  const missingExports: string[] = [];
  const forbiddenExports: string[] = [];
  const visitedSymbols = new Map<string, boolean>();

  // We need a queue for BFS: { type, trace, checkExport }
  type QueueItem = {
    type: Type;
    trace: string; // e.g. "Tooltip -> props -> payloadUniqBy"
    checkExport: boolean;
  };

  /**
   * Traverses a type and adds its specific constituent parts to the queue.
   *
   * Strategy:
   * - **Strong Reachability (`checkExport: true`)**: Types reached via Properties, Unions, Function Params/Returns.
   *   These types are "direct" dependencies and MUST be exported if they are named types.
   * - **Weak Reachability (`checkExport: false`)**: Types reached via Intersections.
   *   These are often internal mixins (e.g. `DOMAttributesWithProps`) and do NOT strictly need to be exported.
   *   If a type is reached ONLY via weak paths, we ignore missing exports.
   *   If a type is reached via a strong path later, we "upgrade" it and check exports.
   */
  function processType(type: Type, trace: string, queue: QueueItem[], checkExport: boolean) {
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
      if (!checkExport && wasVisitedWeakly) {
        return;
      }

      // Mark visited status
      // If checkExport is true, we mark as true (strong visit).
      // If checkExport is false, we mark as false (weak visit) ONLY if not already true.
      visitedSymbols.set(symId, checkExport || wasVisitedStrongly);

      const name = symbol.getName();
      const decls = symbol.getDeclarations();

      // Only care about types explicitly defined in this project's src/
      // Ignore node_modules, and ignore built-in types (no declarations usually or in lib.d.ts)
      const isInSrc = decls.some(d => {
        const filePath = d.getSourceFile().getFilePath();
        return filePath.includes('/src/') && !filePath.includes('node_modules');
      });

      if (isInSrc) {
        // Check Forbidden (Always check forbidden, even if weak reachability - we don't want to leak internals ever)
        if (FORBIDDEN_TYPES.has(name)) {
          forbiddenExports.push(`Forbidden type "${name}" is reachable via: ${trace}`);
        }

        // Check Missing Export (Only if strong reachability)
        if (checkExport) {
          // We check if this symbol (or its alias) is in the exportedSymbols set
          // We only enforce named exports (Classes, Interfaces, Type Aliases, Enums)
          const isNamedType =
            symbol.getFlags() & (SymbolFlags.Class | SymbolFlags.Interface | SymbolFlags.TypeAlias | SymbolFlags.Enum);

          if (isNamedType) {
            // Check if it is exported.
            let isExported = false;

            // 1. Check by Name (Fastest & fixes SurfaceProps false positive)
            // If index.ts exports a symbol with the same name, we accept it.
            // This covers cases where an internal interface (SurfaceProps) is exported via a type alias of the same name.
            if (exportedDeclarations.has(name)) {
              isExported = true;
            }

            // 2. Declaration Check (for aliases with different names)
            if (!isExported) {
              const declsToCheck = symbol.getDeclarations();
              if (declsToCheck.length > 0) {
                const declPath = declsToCheck[0].getSourceFile().getFilePath();
                const declStart = declsToCheck[0].getStart();

                for (const exportedSym of exportedSymbols) {
                  if (symbol === exportedSym) {
                    isExported = true;
                    break;
                  }
                  const exportedDecls = exportedSym.getDeclarations();
                  for (const ed of exportedDecls) {
                    if (ed.getSourceFile().getFilePath() === declPath && ed.getStart() === declStart) {
                      isExported = true;
                      break;
                    }
                  }
                  if (isExported) break;

                  const aliased = exportedSym.getAliasedSymbol();
                  if (aliased) {
                    if (symbol === aliased) {
                      isExported = true;
                      break;
                    }
                    const aliasedDecls = aliased.getDeclarations();
                    for (const ad of aliasedDecls) {
                      if (ad.getSourceFile().getFilePath() === declPath && ad.getStart() === declStart) {
                        isExported = true;
                        break;
                      }
                    }
                  }
                  if (isExported) break;
                }
              } else {
                // Assume exported/safe if no declarations found
                isExported = true;
              }
            }

            if (!isExported) {
              // Ignore TypeParameters (Generics)
              if (!(symbol.getFlags() & SymbolFlags.TypeParameter)) {
                missingExports.push(
                  `Type "${name}" (flags: ${symbol.getFlags()}) is reachable via: ${trace} but not exported from index.ts`,
                );
              }
            }
          }
        }
      }

      // Loop over members
      const members = symbol.getMembers();
      for (const member of members) {
        // Only public members
        const decl = member.getDeclarations()[0];
        const memberType = member.getTypeAtLocation(decl || srcIndex);
        const memberName = member.getName();

        queue.push({
          type: memberType,
          trace: `${trace} -> member: ${memberName}`,
          checkExport, // Inherit strength
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
          checkExport, // Inherit
        });
      }
    }

    // Intersection: Weak (Members are mixins, user might not need them directly) -> Always False
    if (type.isIntersection()) {
      const parts = type.getIntersectionTypes();
      for (const part of parts) {
        queue.push({
          type: part,
          trace: `${trace} (intersection part)`,
          checkExport: false, // WEAK REACHABILITY
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
          checkExport, // Inherit
        });
      }
    }

    // Type Arguments (Generics)
    const typeArgs = type.getTypeArguments();
    for (const arg of typeArgs) {
      queue.push({
        type: arg,
        trace: `${trace} <generic arg>`,
        checkExport, // Inherit
      });
    }

    // Call Signatures (Functions)
    const callSigs = type.getCallSignatures();
    for (const sig of callSigs) {
      queue.push({
        type: sig.getReturnType(),
        trace: `${trace} -> returnType`,
        checkExport, // Inherit
      });
      for (const param of sig.getParameters()) {
        const paramType = param.getTypeAtLocation(sig.getDeclaration());
        queue.push({
          type: paramType,
          trace: `${trace} -> param: ${param.getName()}`,
          checkExport, // Inherit
        });
      }
    }

    // Properties (for object types)
    if (!symbol) {
      const props = type.getProperties();
      for (const prop of props) {
        const propType = prop.getTypeAtLocation(srcIndex);
        queue.push({
          type: propType,
          trace: `${trace} -> prop: ${prop.getName()}`,
          checkExport, // Inherit
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
        checkExport: true, // Initial exports are Strong
      });
    }
  }

  // Run BFS
  let i = 0;
  const MAX_ITERATIONS = 20000;
  while (queue.length > 0 && i < MAX_ITERATIONS) {
    const item = queue.shift();
    if (item) {
      processType(item.type, item.trace, queue, item.checkExport);
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

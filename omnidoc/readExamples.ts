import {
  Project,
  SyntaxKind,
  Node,
  SourceFile,
  ObjectLiteralExpression,
  JsxOpeningElement,
  JsxSelfClosingElement,
} from 'ts-morph';

export interface ExampleResult {
  name: string;
  url: string;
}

export function unwrapObjectLiteralExpression(node: Node | undefined): ObjectLiteralExpression | undefined {
  if (!node) {
    return undefined;
  }

  if (Node.isObjectLiteralExpression(node)) {
    return node;
  }

  if (Node.isSatisfiesExpression(node) || Node.isAsExpression(node) || Node.isParenthesizedExpression(node)) {
    return unwrapObjectLiteralExpression(node.getExpression());
  }

  return undefined;
}

export class ExampleReader {
  private project: Project;

  private fileToExamples: Map<string, ExampleResult[]> = new Map();

  private initialized = false;

  constructor() {
    this.project = new Project({
      tsConfigFilePath: 'tsconfig.json',
    });
    this.initialize();
  }

  public getExamples(componentName: string, propName?: string): ExampleResult[] {
    const results = new Map<string, ExampleResult>();
    const cleanName = componentName.trim();

    this.fileToExamples.forEach((exList, filePath) => {
      const sourceFile = this.project.getSourceFile(filePath);
      if (!sourceFile) return;

      if (!this.isComponentUsed(sourceFile, cleanName)) return;

      if (propName && !this.isPropUsed(sourceFile, cleanName, propName)) return;

      exList.forEach(ex => results.set(ex.url, ex));
    });

    return Array.from(results.values());
  }

  private initialize() {
    if (this.initialized) {
      return;
    }
    // Add all relevant files
    this.project.addSourceFilesAtPaths(['www/src/docs/exampleComponents/**/*.{ts,tsx}']);

    this.buildUrlMap();
    this.initialized = true;
  }

  private buildUrlMap() {
    // Parse www/src/docs/exampleComponents/index.ts
    const exampleComponentsIndex = this.project.getSourceFile('www/src/docs/exampleComponents/index.ts');
    if (exampleComponentsIndex) {
      this.processExampleComponentsIndex(exampleComponentsIndex);
    }
  }

  private processExampleComponentsIndex(sourceFile: SourceFile) {
    const allExamplesExport = sourceFile.getVariableDeclaration('allExamples');
    if (!allExamplesExport) return;

    const initializer = unwrapObjectLiteralExpression(allExamplesExport.getInitializer());
    if (!initializer) return;

    initializer.getProperties().forEach(prop => {
      if (Node.isPropertyAssignment(prop)) {
        // e.g. AreaChart: { examples: areaChartExamples ... }
        // We want to process `areaChartExamples`
        const objectLiteral = unwrapObjectLiteralExpression(prop.getInitializer());
        if (objectLiteral) {
          const examplesProp = objectLiteral.getProperty('examples');
          if (examplesProp && Node.isPropertyAssignment(examplesProp)) {
            const examplesIdentifier = examplesProp.getInitializerIfKind(SyntaxKind.Identifier);
            if (examplesIdentifier) {
              const examplesName = examplesIdentifier.getText();
              const definitions = examplesIdentifier.getDefinitions();
              if (definitions.length > 0) {
                const def = definitions[0];
                const declaration = def?.getDeclarationNode();
                if (declaration) {
                  const declSourceFile = declaration.getSourceFile();
                  if (declSourceFile !== sourceFile && Node.isVariableDeclaration(declaration)) {
                    // It is defined in another file, process it there
                    this.processExampleMap(declSourceFile, declaration.getName());
                  } else if (Node.isImportSpecifier(declaration)) {
                    // Sometimes it points to the import specifier
                    const importDecl = declaration.getImportDeclaration();
                    const moduleSpecifier = importDecl.getModuleSpecifierSourceFile();
                    if (moduleSpecifier) {
                      this.processExampleMap(moduleSpecifier, examplesName);
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  private processExampleMap(sourceFile: SourceFile, exportName: string) {
    const variableDecl = sourceFile.getVariableDeclaration(exportName);
    if (!variableDecl) return;

    const initializer = unwrapObjectLiteralExpression(variableDecl.getInitializer());
    if (!initializer) return;

    initializer.getProperties().forEach(prop => {
      if (Node.isPropertyAssignment(prop)) {
        const exampleName = prop.getName(); // e.g. SimpleAreaChart
        const exampleObj = unwrapObjectLiteralExpression(prop.getInitializer());
        if (exampleObj) {
          const componentProp = exampleObj.getProperty('Component');
          if (componentProp && Node.isPropertyAssignment(componentProp)) {
            const componentIdentifier = componentProp.getInitializerIfKind(SyntaxKind.Identifier);
            if (componentIdentifier) {
              // Find where this component is defined/imported
              const definitions = componentIdentifier.getDefinitions();
              if (definitions.length > 0) {
                const def = definitions[0];
                const declaration = def?.getDeclarationNode();
                let componentSourceFile: SourceFile | undefined;

                if (declaration && Node.isImportSpecifier(declaration)) {
                  componentSourceFile = declaration.getImportDeclaration().getModuleSpecifierSourceFile();
                } else if (
                  declaration &&
                  (Node.isFunctionDeclaration(declaration) || Node.isVariableDeclaration(declaration))
                ) {
                  componentSourceFile = declaration.getSourceFile();
                }

                if (componentSourceFile) {
                  const filePath = componentSourceFile.getFilePath();
                  const url = `/examples/${exampleName}/`;

                  // Try to find 'name' property in the object literal
                  let name = exampleName;
                  const nameProp = exampleObj.getProperty('name');
                  if (nameProp && Node.isPropertyAssignment(nameProp)) {
                    const nameInitializer = nameProp.getInitializerIfKind(SyntaxKind.StringLiteral);
                    if (nameInitializer) {
                      name = nameInitializer.getLiteralValue();
                    }
                  }

                  if (!this.fileToExamples.has(filePath)) {
                    this.fileToExamples.set(filePath, []);
                  }
                  this.fileToExamples.get(filePath)!.push({ name, url });
                }
              }
            }
          }
        }
      }
    });
  }

  private isComponentUsed(sourceFile: SourceFile, componentName: string): boolean {
    // Check imports
    const imports = sourceFile.getImportDeclarations();
    for (const importDecl of imports) {
      const namedImports = importDecl.getNamedImports();
      for (const namedImport of namedImports) {
        if (namedImport.getName() === componentName) {
          return true;
        }
      }
    }
    return false;
  }

  private isPropUsed(sourceFile: SourceFile, componentName: string, propName: string): boolean {
    // Find all JSX elements matching componentName
    // We need to resolve local name if aliased
    let localName = componentName;
    const imports = sourceFile.getImportDeclarations();
    for (const importDecl of imports) {
      const namedImports = importDecl.getNamedImports();
      for (const namedImport of namedImports) {
        if (namedImport.getName() === componentName) {
          const alias = namedImport.getAliasNode();
          if (alias) {
            localName = alias.getText();
          }
          break;
        }
      }
    }

    const jsxElements = sourceFile.getDescendantsOfKind(SyntaxKind.JsxOpeningElement);
    const jsxSelfClosingElements = sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement);

    const checkAttributes = (node: JsxOpeningElement | JsxSelfClosingElement) => {
      if (node.getTagNameNode().getText() === localName) {
        // Special handling for children
        if (propName === 'children') {
          // Check if it's an attribute (rare but possible)
          if (node.getAttribute('children')) return true;

          // If it's an opening element, check if the parent JsxElement has children
          if (Node.isJsxOpeningElement(node)) {
            const jsxElement = node.getParentIfKind(SyntaxKind.JsxElement);
            if (jsxElement) {
              const children = jsxElement.getJsxChildren();
              // Filter out empty text nodes (whitespace)
              const hasRealChildren = children.some(child => {
                if (Node.isJsxText(child)) {
                  return child.getText().trim().length > 0;
                }
                return true;
              });
              if (hasRealChildren) return true;
            }
          }
          return false;
        }

        const attr = node.getAttribute(propName);
        return !!attr;
      }
      return false;
    };

    for (const el of jsxElements) {
      if (checkAttributes(el)) return true;
    }
    for (const el of jsxSelfClosingElements) {
      if (checkAttributes(el)) return true;
    }

    return false;
  }
}

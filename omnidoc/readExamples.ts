import { Project, SyntaxKind, Node, SourceFile, JsxOpeningElement, JsxSelfClosingElement } from 'ts-morph';

export interface ExampleResult {
  name: string;
  url: string;
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
    const explicitExamples = new Map<string, ExampleResult>();
    const implicitExamples = new Map<string, ExampleResult>();

    this.fileToExamples.forEach((exList, filePath) => {
      const sourceFile = this.project.getSourceFile(filePath);
      if (!sourceFile) return;

      // Check for component usage
      const explicitMatches = exList.filter(ex => ex.url === `/api/${componentName}/`);
      const isExplicitApiExample = explicitMatches.length > 0;

      if (isExplicitApiExample) {
        if (propName) {
          if (this.isPropUsed(sourceFile, componentName, propName)) {
            explicitMatches.forEach(ex => explicitExamples.set(ex.url, ex));
          }
        } else {
          explicitMatches.forEach(ex => explicitExamples.set(ex.url, ex));
        }
      }

      if (this.isComponentUsed(sourceFile, componentName)) {
        // Implicit usage - add to implicit examples
        // But filter out API examples that are NOT for this component
        // i.e. if ex.url starts with /api/, it must match /api/${componentName}/

        const filteredList = exList.filter(ex => {
          if (ex.url.startsWith('/api/')) {
            return ex.url === `/api/${componentName}/`;
          }
          return true; // Keep non-API examples (e.g. /examples/...)
        });

        // If propName is specified, check for prop usage
        if (propName) {
          if (this.isPropUsed(sourceFile, componentName, propName)) {
            filteredList.forEach(ex => implicitExamples.set(ex.url, ex));
          }
        } else {
          filteredList.forEach(ex => implicitExamples.set(ex.url, ex));
        }
      }
    });

    // Merge implicit into explicit, preferring explicit when URLs collide
    // (explicit examples are set first, then we only add implicit if URL not present)
    explicitExamples.forEach((ex, url) => implicitExamples.set(url, ex));
    return Array.from(implicitExamples.values());
  }

  private initialize() {
    if (this.initialized) {
      return;
    }
    // Add all relevant files
    this.project.addSourceFilesAtPaths([
      'www/src/docs/exampleComponents/**/*.{ts,tsx}',
      'www/src/docs/apiExamples/**/*.{ts,tsx}',
    ]);

    this.buildUrlMap();
    this.initialized = true;
  }

  private buildUrlMap() {
    // 1. Parse www/src/docs/exampleComponents/index.ts
    const exampleComponentsIndex = this.project.getSourceFile('www/src/docs/exampleComponents/index.ts');
    if (exampleComponentsIndex) {
      this.processExampleComponentsIndex(exampleComponentsIndex);
    }

    // 2. Parse www/src/docs/apiExamples/index.tsx
    const apiExamplesIndex = this.project.getSourceFile('www/src/docs/apiExamples/index.tsx');
    if (apiExamplesIndex) {
      this.processApiExamplesIndex(apiExamplesIndex);
    }
  }

  private processExampleComponentsIndex(sourceFile: SourceFile) {
    const allExamplesExport = sourceFile.getVariableDeclaration('allExamples');
    if (!allExamplesExport) return;

    const initializer = allExamplesExport.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!initializer) return;

    initializer.getProperties().forEach(prop => {
      if (Node.isPropertyAssignment(prop)) {
        // e.g. AreaChart: { examples: areaChartExamples ... }
        // We want to process `areaChartExamples`
        const objectLiteral = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
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

    const initializer = variableDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!initializer) return;

    initializer.getProperties().forEach(prop => {
      if (Node.isPropertyAssignment(prop)) {
        const exampleName = prop.getName(); // e.g. SimpleAreaChart
        const exampleObj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
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

  private processApiExamplesIndex(sourceFile: SourceFile) {
    const allApiExamplesExport = sourceFile.getVariableDeclaration('allApiExamples');
    if (!allApiExamplesExport) return;

    const initializer = allApiExamplesExport.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!initializer) return;

    initializer.getProperties().forEach(prop => {
      if (Node.isPropertyAssignment(prop)) {
        const componentName = prop.getName(); // e.g. AreaChart
        const url = `/api/${componentName}/`;

        const examplesIdentifier = prop.getInitializerIfKind(SyntaxKind.Identifier);
        if (examplesIdentifier) {
          const definitions = examplesIdentifier.getDefinitions();
          if (definitions.length > 0) {
            const def = definitions[0];
            const declaration = def?.getDeclarationNode();
            if (declaration) {
              const declSourceFile = declaration.getSourceFile();
              if (declSourceFile !== sourceFile && Node.isVariableDeclaration(declaration)) {
                this.processApiExampleArray(declSourceFile, declaration.getName(), url);
              } else if (Node.isImportSpecifier(declaration)) {
                const importDecl = declaration.getImportDeclaration();
                const moduleSpecifier = importDecl.getModuleSpecifierSourceFile();
                if (moduleSpecifier) {
                  this.processApiExampleArray(moduleSpecifier, declaration.getName(), url);
                }
              }
            }
          }
        }
      }
    });
  }

  private processApiExampleArray(sourceFile: SourceFile, exportName: string, url: string) {
    const variableDecl = sourceFile.getVariableDeclaration(exportName);
    if (!variableDecl) return;

    const initializer = variableDecl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (!initializer) return;

    initializer.getElements().forEach(element => {
      if (Node.isObjectLiteralExpression(element)) {
        const componentProp = element.getProperty('Component');
        if (componentProp && Node.isPropertyAssignment(componentProp)) {
          const componentIdentifier = componentProp.getInitializerIfKind(SyntaxKind.Identifier);
          if (componentIdentifier) {
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

                // Try to find 'name' property in the object literal
                let name = 'Example';
                if (Node.isObjectLiteralExpression(element)) {
                  const nameProp = element.getProperty('name');
                  if (nameProp && Node.isPropertyAssignment(nameProp)) {
                    const nameInitializer = nameProp.getInitializerIfKind(SyntaxKind.StringLiteral);
                    if (nameInitializer) {
                      name = nameInitializer.getLiteralValue();
                    }
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

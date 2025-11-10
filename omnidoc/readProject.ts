/**
 * @fileOverview reads props from the source code using ts-morph
 */
import { ExportedDeclarations, Project, SymbolFlags, Type } from 'ts-morph';
import { DocReader } from './DocReader';

export class ProjectDocReader implements DocReader {
  private project: Project;

  constructor() {
    this.project = new Project({
      tsConfigFilePath: 'tsconfig.json',
    });
  }

  getPublicSymbolNames(kind?: SymbolFlags): ReadonlyArray<string> {
    const sourceFile = this.project.getSourceFileOrThrow('src/index.ts');
    const exportedDeclarations = sourceFile.getExportedDeclarations();

    const names: string[] = [];

    for (const [name, declarations] of exportedDeclarations) {
      // Skip default exports
      if (name === 'default') continue;

      for (const declaration of declarations) {
        const symbol = declaration.getSymbol();
        if (!symbol) continue;

        // If no kind filter specified, include all
        if (kind === undefined) {
          names.push(name);
          break;
        }

        // Filter by symbol flags (kind)
        const flags = symbol.getFlags();
        if ((flags & kind) !== 0) {
          names.push(name);
          break;
        }
      }
    }

    return names.sort((a, b) => a.localeCompare(b));
  }

  getPublicComponentNames(): ReadonlyArray<string> {
    return this.getPublicSymbolNames().filter(name => {
      // Exclude hooks (start with 'use')
      if (name.startsWith('use')) {
        return false;
      }
      // Exclude utility functions
      if (name === 'getNiceTickValues') {
        return false;
      }
      // Exclude type-only exports (they end with 'Props', 'Type', etc.)
      // Actually, we want to keep components even if their name suggests type
      // So we'll be conservative and only filter by 'use' prefix
      return true;
    });
  }

  private getComponentDeclaration(component: string): ExportedDeclarations {
    const sourceFile = this.project.getSourceFileOrThrow('src/index.ts');
    const exportedDeclarations = sourceFile.getExportedDeclarations();

    const declarations = exportedDeclarations.get(component);
    if (!declarations || declarations.length === 0) {
      throw new Error(`Unknown component ${component}`);
    }

    return declarations[0];
  }

  private getComponentType(component: string): Type {
    const declaration = this.getComponentDeclaration(component);

    return declaration.getType();
  }

  /**
   * This returns properties of a symbol. So if you pass a React component, you get back React lifecycle methods,
   * and displayName.
   * @param component
   */
  getPropertiesOf(component: string): string[] | undefined {
    const type = this.getComponentType(component);

    const properties = type.getProperties();
    return properties.map(p => p.getName());
  }

  private collectPropertiesFromType(type: Type, visited = new Set<Type>()): ReadonlyArray<string> {
    // Prevent infinite recursion
    if (visited.has(type)) {
      return [];
    }
    visited.add(type);

    const properties: string[] = [];

    // Handle intersection types - we need to extract only the component-specific props
    if (type.isIntersection()) {
      for (const intersectionType of type.getIntersectionTypes()) {
        const aliasSymbol = intersectionType.getAliasSymbol();
        if (aliasSymbol) {
          const fqn = aliasSymbol.getFullyQualifiedName();
          if (fqn === 'Partial') {
            properties.push(...this.collectPropertiesFromType(intersectionType.getAliasTypeArguments()[0], visited));
          }
          continue;
        }
        const typeText = intersectionType.getText();

        // Skip SVGProps types (both direct and wrapped in Omit)
        if (typeText.includes('SVGProps<') || (typeText.startsWith('Omit<') && typeText.includes('SVGProps'))) {
          continue;
        }

        properties.push(...this.collectPropertiesFromType(intersectionType, visited));
      }
      return properties.sort((a, b) => a.localeCompare(b));
    }

    // Get direct properties
    const typeProperties = type.getProperties();
    for (const prop of typeProperties) {
      const propName = prop.getName();
      // Skip built-in React properties and methods
      if (
        !propName.startsWith('UNSAFE_') &&
        propName !== 'constructor' &&
        propName !== 'context' &&
        propName !== 'props' &&
        propName !== 'refs' &&
        propName !== 'state' &&
        propName !== 'contextType' &&
        propName !== 'defaultProps' &&
        propName !== 'displayName' &&
        propName !== 'componentDidCatch' &&
        propName !== 'componentDidMount' &&
        propName !== 'componentDidUpdate' &&
        propName !== 'componentWillMount' &&
        propName !== 'componentWillReceiveProps' &&
        propName !== 'componentWillUnmount' &&
        propName !== 'componentWillUpdate' &&
        propName !== 'forceUpdate' &&
        propName !== 'getSnapshotBeforeUpdate' &&
        propName !== 'render' &&
        propName !== 'setState' &&
        propName !== 'shouldComponentUpdate'
      ) {
        properties.push(propName);
      }
    }

    return properties;
  }

  private extractSVGElementFromType(type: Type): string | null {
    // Handle intersection types
    if (type.isIntersection()) {
      for (const intersectionType of type.getIntersectionTypes()) {
        const result = this.extractSVGElementFromType(intersectionType);
        if (result) return result;
      }
    }

    // Check if this is a type reference
    const typeNode = type.getSymbol()?.getDeclarations()?.[0];
    if (typeNode) {
      const typeText = type.getText();

      // Look for SVGProps<SVGXxxElement> pattern
      const svgPropsMatch = typeText.match(/SVGProps<(SVG\w+Element)>/);
      if (svgPropsMatch) {
        return svgPropsMatch[1];
      }

      // Look for Omit<SVGProps<SVGXxxElement>, ...> pattern
      const omitMatch = typeText.match(/Omit<[^,]*SVGProps<(SVG\w+Element)>/);
      if (omitMatch) {
        return omitMatch[1];
      }
    }

    return null;
  }

  /**
   * Get type arguments of a component type, e.g., for ComponentType<Props>, returns Props type.
   * @param type
   * @private
   */
  private getTypeArgumentsOfComponentType(type: Type): Type {
    // Try to get type arguments (for ComponentType<Props>)
    const aliasTypeArgs = type.getAliasTypeArguments();
    if (aliasTypeArgs.length > 0) {
      // For ComponentType<Props>, the first alias type argument is the Props type
      return aliasTypeArgs[0];
    }
    throw new Error(`Expected to find type arguments for type ${type}, but found none.`);
  }

  private getTypeArgumentOfFunctionCallSignature(declaration: ExportedDeclarations): Type {
    const type = declaration.getType();
    // Try to get call signatures (for function components)
    const callSignatures = type.getCallSignatures();

    // If no call signatures, try construct signatures (for ComponentType/class components)
    if (callSignatures.length === 0) {
      const constructSignatures = type.getConstructSignatures();
      if (constructSignatures.length > 0) {
        // For class components, get props from constructor parameter
        const firstSignature = constructSignatures[0];
        const parameters = firstSignature.getParameters();
        if (parameters.length > 0) {
          const firstParameter = parameters[0];
          return firstParameter.getTypeAtLocation(declaration);
        }
      }

      // Try to get type arguments (for ComponentType<Props>)
      const typeArguments = type.getTypeArguments();
      if (typeArguments.length > 0) {
        // For ComponentType<Props>, the first type argument is the Props type
        return typeArguments[0];
      }

      // As a last resort, try to get the props property from React component types
      const propsProperty = type.getProperty('props');
      if (propsProperty) {
        return propsProperty.getTypeAtLocation(declaration);
      }

      throw new Error(`Expected to find at least one call signature for declaration ${declaration}, but found none.`);
    }
    const firstSignature = callSignatures[0];
    const parameters = firstSignature.getParameters();
    if (parameters.length === 0) {
      throw new Error(`Expected to find at least one parameter for declaration ${declaration}, but found none.`);
    }

    const firstParameter = parameters[0];
    return firstParameter.getTypeAtLocation(declaration);
  }

  private getPropsType(component: string): Type {
    const declaration = this.getComponentDeclaration(component);
    const type = declaration.getType();

    // If this is a type alias (like ComponentType), resolve the alias
    const aliasSymbol = type.getAliasSymbol();
    if (aliasSymbol) {
      return this.getTypeArgumentsOfComponentType(type);
    }
    // Otherwise, try to get the type from function call signatures
    return this.getTypeArgumentOfFunctionCallSignature(declaration);
  }

  getRechartsPropsOf(component: string): ReadonlyArray<string> {
    const paramType = this.getPropsType(component);
    return this.collectPropertiesFromType(paramType);
  }

  getAllPropsOf(component: string): ReadonlyArray<string> {
    const paramType = this.getPropsType(component);
    const properties: string[] = [];
    const visited = new Set<Type>();

    if (paramType.isIntersection()) {
      for (const intersectionType of paramType.getIntersectionTypes()) {
        const typeText = intersectionType.getText();

        if (typeText.includes('SVGProps<') || (typeText.startsWith('Omit<') && typeText.includes('SVGProps'))) {
          properties.push(...this.collectPropertiesFromType(intersectionType, visited));
        } else {
          properties.push(...this.collectPropertiesFromType(intersectionType, visited));
        }
      }
    } else {
      properties.push(...this.collectPropertiesFromType(paramType, visited));
    }

    return properties.sort((a, b) => a.localeCompare(b));
  }

  getSVGParentOf(component: string): string | null {
    const paramType = this.getPropsType(component);
    return this.extractSVGElementFromType(paramType);
  }
}

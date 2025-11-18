/**
 * @fileOverview reads props from the source code using ts-morph
 */
import { ExportedDeclarations, Node, Project, Symbol as TsMorphSymbol, SymbolFlags, Type } from 'ts-morph';
import { DefaultValue, DocReader } from './DocReader';
import { componentMetaMap } from './componentsAndDefaultPropsMap';

type PropOrigin = 'recharts' | 'dom' | 'other';

type PropMeta = {
  /**
   * The name is not unique! Both Recharts and DOM props can and do have the same name.
   */
  name: string;
  origin: PropOrigin;
  defaultValueFromObject: DefaultValue;
  defaultValueFromJSDoc: DefaultValue;
};

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
    return this.getPublicSymbolNames(SymbolFlags.Variable).filter(name => {
      // Exclude hooks (start with 'use')
      if (name.startsWith('use')) {
        return false;
      }
      // Exclude known utilities
      if (['getNiceTickValues', 'DefaultZIndexes', 'Global'].includes(name)) {
        return false;
      }
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
  getPropertiesOf(component: string): ReadonlyArray<string> | undefined {
    const type = this.getComponentType(component);

    const properties = type.getProperties();
    return properties.map(p => p.getName());
  }

  private getDeclarationOrigin(declaration: Node): PropOrigin {
    const sourceFile = declaration.getSourceFile();
    const filePath = sourceFile.getFilePath();
    const normalizedPath = filePath.replace(/\\/g, '/');

    if (normalizedPath.includes('node_modules/@types/react')) {
      return 'dom';
    }
    if (normalizedPath.includes('/src/')) {
      return 'recharts';
    }
    return 'other';
  }

  private getDefaultValueFromJSDoc(prop: TsMorphSymbol): DefaultValue {
    const tags = prop.getJsDocTags();
    for (const tag of tags) {
      if (tag.getName() === 'default' || tag.getName() === 'defaultValue') {
        const text = tag.getText();
        if (text && text.length > 0) {
          return { type: 'known', value: text.map(t => t.text).join(' ') };
        }
        return { type: 'known', value: undefined };
      }
    }
    // absence of @default tag doesn't mean there is no default value - it may be defined in defaultProps and undocumented
    return { type: 'unreadable' };
  }

  private getDefaultValueFromObject(component: string, propName: string): DefaultValue {
    const defaultValueObject = componentMetaMap[component]?.defaultProps;
    if (defaultValueObject == null) {
      return { type: 'unreadable' };
    }
    if (propName in defaultValueObject) {
      const value = defaultValueObject[propName];
      return { type: 'known', value };
    }
    return { type: 'none' };
  }

  private collectPropertiesFromType(componentName: string, type: Type): ReadonlyArray<PropMeta> {
    const properties: PropMeta[] = [];

    // Get direct properties
    const typeProperties = type.getProperties();
    for (const prop of typeProperties) {
      const propName = prop.getName();
      // Skip built-in React properties and methods
      if (
        !(
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
        )
      ) {
        continue;
      }

      // Check where this property is declared
      const declarations = prop.getDeclarations();
      if (declarations.length === 0) {
        properties.push({
          name: propName,
          origin: 'other',
          defaultValueFromObject: { type: 'unreadable' },
          defaultValueFromJSDoc: { type: 'unreadable' },
        });
        continue;
      }

      declarations.forEach(declaration => {
        const origin = this.getDeclarationOrigin(declaration);
        const propMeta: PropMeta = {
          name: propName,
          origin,
          defaultValueFromObject:
            origin === 'recharts' ? this.getDefaultValueFromObject(componentName, propName) : { type: 'unreadable' },
          defaultValueFromJSDoc: this.getDefaultValueFromJSDoc(prop),
        };

        properties.push(propMeta);
      });
    }

    return properties;
  }

  getPropMeta(component: string, prop: string): ReadonlyArray<PropMeta> {
    const paramType = this.getPropsType(component);
    const properties = this.collectPropertiesFromType(component, paramType);
    return properties.filter(p => p.name === prop);
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
    throw new Error(`Expected to find type arguments for type ${type.getText()}, but found none.`);
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

      throw new Error(
        `Expected to find at least one call signature for declaration ${declaration.getText()}, but found none.`,
      );
    }
    const firstSignature = callSignatures[0];
    const parameters = firstSignature.getParameters();
    if (parameters.length === 0) {
      throw new Error(
        `Expected to find at least one parameter for declaration ${declaration.getText()}, but found none.`,
      );
    }

    const firstParameter = parameters[0];
    return firstParameter.getTypeAtLocation(declaration);
  }

  private getPropsType(component: string): Type {
    const declaration = this.getComponentDeclaration(component);
    const type = declaration.getType();

    const symbolName = type.getSymbol()?.getName();
    if (symbolName === 'ForwardRefExoticComponent' || symbolName === 'MemoExoticComponent') {
      // Wrapped component, unwrap it
      return type.getTypeArguments()[0];
    }

    // If this is a type alias (like ComponentType), resolve the alias
    const aliasSymbol = type.getAliasSymbol();
    if (aliasSymbol) {
      return this.getTypeArgumentsOfComponentType(type);
    }
    // Otherwise, try to get the type from function call signatures
    return this.getTypeArgumentOfFunctionCallSignature(declaration);
  }

  getDefaultValueOf(component: string, prop: string): DefaultValue {
    return this.getPropMeta(component, prop).reduce(
      (acc: DefaultValue, meta: PropMeta): DefaultValue => {
        /*
         * Here we intentionally prioritize default value from object over JSDoc,
         * because JSDoc may be missing or outdated.
         * Sometimes JSDoc in the react TS types is also present, and also a string
         * - so we prefer the actual defaultProps value from the source code.
         */
        if (meta.defaultValueFromObject.type !== 'unreadable') {
          return meta.defaultValueFromObject;
        }
        if (acc.type === 'known' || acc.type === 'none') {
          return acc;
        }
        if (meta.defaultValueFromJSDoc.type !== 'unreadable') {
          return meta.defaultValueFromJSDoc;
        }
        return acc;
      },
      { type: 'unreadable' },
    );
  }

  private metaToNames(propMeta: ReadonlyArray<PropMeta>): ReadonlyArray<string> {
    return Array.from(new Set(propMeta.map(p => p.name))).sort((a, b) => a.localeCompare(b));
  }

  getRechartsPropsOf(component: string): ReadonlyArray<string> {
    const paramType = this.getPropsType(component);
    return this.metaToNames(this.collectPropertiesFromType(component, paramType).filter(p => p.origin === 'recharts'));
  }

  getAllPropsOf(component: string): ReadonlyArray<string> {
    const paramType = this.getPropsType(component);
    return this.metaToNames(this.collectPropertiesFromType(component, paramType));
  }

  getSVGParentOf(component: string): string | null {
    const paramType = this.getPropsType(component);
    return this.extractSVGElementFromType(paramType);
  }
}

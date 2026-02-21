/**
 * @fileOverview reads props from the source code using ts-morph
 */
import {
  ExportedDeclarations,
  JSDocableNode,
  JSDocTagInfo,
  Node,
  Project,
  Symbol as TsMorphSymbol,
  SymbolFlags,
  Type,
} from 'ts-morph';
import { isReactComponent } from './isReactComponent';
import { DefaultValue, DocReader } from './DocReader';
import { componentMetaMap } from './componentsAndDefaultPropsMap';

type PropOrigin = 'recharts' | 'dom' | 'other';

export type JSDocMeta = {
  text?: string;
  /**
   * Can't store these in a map because there can be multiple tags with the same name (e.g., @example)
   * These tuples are (tag name, tag text). Some tags may have undefined text, like for example `@private` or `@inline`.
   */
  tags: ReadonlyArray<[string, string | undefined]>;
};

export function getTagText(jsDoc: JSDocMeta | undefined, tagName: string): { text: string | undefined } | undefined {
  if (jsDoc == null) {
    return undefined;
  }
  for (const [name, text] of jsDoc.tags) {
    if (name === tagName) {
      return { text };
    }
  }
  return undefined;
}

/**
 * Get all tags with a specific name (useful for tags that can appear multiple times like @example, @consumes, @provides)
 */
export function getAllTagTexts(jsDoc: JSDocMeta | undefined, tagName: string): ReadonlyArray<string> {
  if (jsDoc == null) {
    return [];
  }
  const results: string[] = [];
  for (const [name, text] of jsDoc.tags) {
    if (name === tagName && text !== undefined && text.trim() !== '') {
      results.push(text.trim());
    }
  }
  return results;
}

type PropMeta = {
  /**
   * The name is not unique! Both Recharts and DOM props can and do have the same name.
   */
  name: string;
  origin: PropOrigin;
  /**
   * The normalized path of the source file where this prop is declared.
   */
  normalizedPath: string;
  defaultValueFromObject: DefaultValue;
  defaultValueFromJSDoc: DefaultValue;
  jsDoc: JSDocMeta | undefined;
  isRequired: boolean;
};

export class ProjectDocReader implements DocReader {
  private project: Project;

  private propCache: Map<string, ReadonlyArray<PropMeta>> = new Map();

  private symbolNamesCache: ReadonlyArray<string> | null = null;

  private componentNamesCache: ReadonlyArray<string> | null = null;

  constructor() {
    this.project = new Project({
      tsConfigFilePath: 'tsconfig.json',
    });
  }

  getPublicSymbolNames(kind?: SymbolFlags): ReadonlyArray<string> {
    if (kind === undefined && this.symbolNamesCache) {
      return this.symbolNamesCache;
    }

    const sourceFile = this.project.getSourceFileOrThrow('src/index.ts');
    const exportedDeclarations = sourceFile.getExportedDeclarations();

    const names: string[] = [];

    for (const [name, declarations] of exportedDeclarations) {
      // Skip default exports
      if (name === 'default') continue;

      for (const declaration of declarations) {
        const symbol = declaration.getSymbol();
        if (!symbol) continue; // Should not happen

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

    const result = names.sort((a, b) => a.localeCompare(b));
    if (kind === undefined) {
      this.symbolNamesCache = result;
    }
    return result;
  }

  getPublicComponentNames(): ReadonlyArray<string> {
    if (this.componentNamesCache) {
      return this.componentNamesCache;
    }
    const result = this.getPublicSymbolNames(SymbolFlags.Variable | SymbolFlags.Function).filter(isReactComponent);
    this.componentNamesCache = result;
    return result;
  }

  getAllRuntimeExportedNames(): ReadonlyArray<string> {
    return this.getPublicSymbolNames(SymbolFlags.Variable | SymbolFlags.Function);
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

  private collectPropertiesFromType(componentName: string, type: Type | undefined): ReadonlyArray<PropMeta> {
    const properties: PropMeta[] = [];

    if (!type) {
      return properties;
    }

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
      const declarations: Node[] = prop.getDeclarations();
      if (declarations.length === 0) {
        properties.push({
          name: propName,
          origin: 'other',
          normalizedPath: 'unknown',
          defaultValueFromObject: { type: 'unreadable' },
          defaultValueFromJSDoc: { type: 'unreadable' },
          jsDoc: undefined,
          isRequired: false,
        });
        continue;
      }

      declarations.forEach(declaration => {
        const origin = this.getDeclarationOrigin(declaration);
        const sourceFile = declaration.getSourceFile();
        const filePath = sourceFile.getFilePath();
        const normalizedPath = filePath.replace(/\\/g, '/');
        const propMeta: PropMeta = {
          name: propName,
          origin,
          normalizedPath,
          defaultValueFromObject:
            origin === 'recharts' ? this.getDefaultValueFromObject(componentName, propName) : { type: 'unreadable' },
          defaultValueFromJSDoc: this.getDefaultValueFromJSDoc(prop),
          jsDoc: this.getJsDocMeta(declaration),
          isRequired: !prop.hasFlags(SymbolFlags.Optional),
        };

        properties.push(propMeta);
      });
    }

    return properties;
  }

  private collectArgumentsFromHook(componentName: string): ReadonlyArray<PropMeta> {
    try {
      const declaration = this.getComponentDeclaration(componentName);
      const type = declaration.getType();
      const callSignatures = type.getCallSignatures();

      if (callSignatures.length === 0) {
        return [];
      }

      const signature = callSignatures[0];
      const parameters = signature.getParameters();
      const functionJsDoc = this.getJsDocMeta(declaration);

      const properties: PropMeta[] = [];

      parameters.forEach(paramSymbol => {
        const propName = paramSymbol.getName();
        const decls = paramSymbol.getDeclarations();
        if (decls.length === 0) return;

        const paramDecl = decls[0];
        const origin = this.getDeclarationOrigin(paramDecl);
        const sourceFile = paramDecl.getSourceFile();
        const normalizedPath = sourceFile.getFilePath().replace(/\\/g, '/');

        let defaultValueFromObject: DefaultValue = { type: 'unreadable' };
        let isRequired = true;

        if (Node.isParameterDeclaration(paramDecl)) {
          const initializer = paramDecl.getInitializer();
          if (initializer) {
            defaultValueFromObject = { type: 'known', value: initializer.getText() };
            isRequired = false;
          }
          if (paramDecl.isOptional()) {
            isRequired = false;
          }
        }

        let jsDoc: JSDocMeta | undefined;
        // Try to find on parameter itself
        const paramOwnDocs = this.getJsDocMeta(paramDecl);
        if (paramOwnDocs.text) {
          jsDoc = paramOwnDocs;
        } else {
          // Look in function JSDoc @param
          const paramTag = functionJsDoc.tags.find(
            t => t[0] === 'param' && (t[1]?.startsWith(`${propName} `) || t[1] === propName),
          );
          if (paramTag && paramTag[1]) {
            // strip name
            // e.g. "xAxisId The id..." -> "The id..."
            const text = paramTag[1].substring(propName.length).trim();
            // Remove hyphen if present " - The id..."
            const cleanText = text.replace(/^-\s*/, '');
            jsDoc = {
              text: cleanText,
              tags: [],
            };
          }
        }

        properties.push({
          name: propName,
          origin,
          normalizedPath,
          defaultValueFromObject,
          defaultValueFromJSDoc: { type: 'unreadable' },
          jsDoc,
          isRequired,
        });
      });

      return properties;
    } catch (e) {
      console.error(`Error collecting arguments for hook ${componentName}`, e);
      return [];
    }
  }

  private getCachedProps(component: string): ReadonlyArray<PropMeta> {
    if (this.propCache.has(component)) {
      return this.propCache.get(component)!;
    }

    if (!isReactComponent(component)) {
      const props = this.collectArgumentsFromHook(component);
      this.propCache.set(component, props);
      return props;
    }

    const paramType = this.getPropsType(component);
    const props = this.collectPropertiesFromType(component, paramType);
    this.propCache.set(component, props);
    return props;
  }

  getPropMeta(component: string, prop: string): ReadonlyArray<PropMeta> {
    const properties = this.getCachedProps(component);
    return properties.filter(p => p.name === prop);
  }

  private extractSVGElementFromType(type: Type | undefined): string | null {
    if (!type) {
      return null;
    }
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

  private getTypeArgumentOfFunctionCallSignature(declaration: ExportedDeclarations): Type | undefined {
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

      // Some of our exports are not functions or components
      return undefined;
    }
    const firstSignature = callSignatures[0];
    const parameters = firstSignature?.getParameters();
    if (parameters?.length === 0) {
      return undefined;
    }

    const firstParameter = parameters[0];
    return firstParameter?.getTypeAtLocation(declaration);
  }

  private getPropsType(component: string): Type | undefined {
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

  getDefaultValueOf(component: string, prop: string, includeJSDoc: boolean = true): DefaultValue {
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
        if (includeJSDoc) {
          if (meta.defaultValueFromJSDoc.type !== 'unreadable') {
            return meta.defaultValueFromJSDoc;
          }
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
    const props = this.getCachedProps(component);
    return this.metaToNames(props.filter(p => p.origin === 'recharts'));
  }

  getAllPropsOf(component: string): ReadonlyArray<string> {
    return this.metaToNames(this.getCachedProps(component));
  }

  getSVGParentOf(component: string): string | null {
    const paramType = this.getPropsType(component);
    return this.extractSVGElementFromType(paramType);
  }

  getCommentOf(component: string, prop: string): string | undefined {
    try {
      const propMeta: ReadonlyArray<PropMeta> = this.getPropMeta(component, prop);
      if (propMeta.length === 0) {
        return undefined;
      }

      // Try to find a Recharts prop first (prefer our own documentation)
      const rechartsProp = propMeta.filter(p => p.origin === 'recharts');
      // iterate through recharts declarations first, if one of them has comment then return that
      for (const rp of rechartsProp) {
        const comment = this.getCommentOfPropMeta(rp);
        if (comment) {
          return comment;
        }
      }

      // Fallback to the first available prop (could be DOM or other)
      for (const p of propMeta) {
        const comment = this.getCommentOfPropMeta(p);
        if (comment) {
          return comment;
        }
      }

      // no luck.
      return undefined;
    } catch {
      // Component or prop doesn't exist
      return undefined;
    }
  }

  private getCommentOfPropMeta(prop: PropMeta | undefined): string | undefined {
    if (prop == null || prop.jsDoc == null) {
      return undefined;
    }
    // Look for a description tag in jsdoc, or use the general comment
    return getTagText(prop.jsDoc, 'description')?.text || getTagText(prop.jsDoc, 'desc')?.text || prop.jsDoc.text;
  }

  getTextOfTag(tag: JSDocTagInfo | undefined): string | undefined {
    if (!tag) {
      return undefined;
    }
    const text = tag.getText();
    if (text && text.length > 0) {
      return text
        .map(t => t.text)
        .join(' ')
        .trim();
    }
    return undefined;
  }

  private extractTypeInfo(type: Type, declaration: Node): { names: string[]; isInline: boolean } {
    let isInline = false;
    let names: string[] = [type.getText()];

    let aliasSymbol = type.getAliasSymbol();
    if (!aliasSymbol && type.isUnion()) {
      aliasSymbol = type.getNonNullableType().getAliasSymbol();
    }

    if (!aliasSymbol && (Node.isPropertySignature(declaration) || Node.isParameterDeclaration(declaration))) {
      const typeNode =
        Node.isPropertySignature(declaration) || Node.isParameterDeclaration(declaration)
          ? (declaration as any).getTypeNode() // casting because both have getTypeNode
          : undefined;

      if (typeNode) {
        const nodeType = typeNode.getType();
        aliasSymbol = nodeType.getAliasSymbol();
      }
    }

    if (aliasSymbol) {
      const jsDocTags = aliasSymbol.getJsDocTags();
      const hasInlineTag = jsDocTags.some(t => t.getName() === 'inline');

      if (hasInlineTag) {
        isInline = true;
        if (type.isUnion()) {
          const parts = type.getUnionTypes();
          names = parts
            .map(part => {
              if (part.getAliasSymbol() === aliasSymbol) {
                if (part.isUnion()) {
                  return part.getUnionTypes().map(t => t.getText());
                }
                const declarations2 = aliasSymbol.getDeclarations();
                const declaration0 = declarations2[0];
                if (declarations2.length > 0 && Node.isTypeAliasDeclaration(declaration0)) {
                  return declaration0.getTypeNode()?.getText() ?? part.getText();
                }
              }
              return part.getText();
            })
            .flat();
        }
      }
    }

    if (type.isUnion() && !isInline) {
      const isReactNode =
        aliasSymbol?.getName() === 'ReactNode' && aliasSymbol.getDeclarations()[0]?.getSourceFile().isInNodeModules();
      if (isReactNode) {
        names = ['ReactNode'];
      } else {
        names = type.getUnionTypes().map(t => t.getText());
      }
    }

    names = names.filter(n => n !== 'undefined');

    if (names.length === 2 && names.includes('true') && names.includes('false')) {
      names = ['boolean'];
    }

    return { names, isInline };
  }

  getTypeOf(component: string, prop: string): { names: string[]; isInline: boolean } | undefined {
    try {
      if (!isReactComponent(component)) {
        const declaration = this.getComponentDeclaration(component);
        const type = declaration.getType();
        const signature = type.getCallSignatures()[0];
        if (!signature) return undefined;
        const param = signature.getParameters().find(p => p.getName() === prop);
        if (!param) return undefined;
        const decl = param.getDeclarations()[0];
        if (!decl) return undefined;
        return this.extractTypeInfo(decl.getType(), decl);
      }

      const paramType = this.getPropsType(component);
      const properties = paramType.getProperties();
      const property = properties.find(p => p.getName() === prop);

      if (!property) {
        return undefined;
      }

      const declarations = property.getDeclarations();
      if (declarations.length === 0) {
        return undefined;
      }

      const declaration = declarations[0];
      const type = declaration.getType();

      return this.extractTypeInfo(type, declaration);
    } catch {
      return undefined;
    }
  }

  isOptionalProp(component: string, prop: string): boolean {
    try {
      const paramType = this.getPropMeta(component, prop);
      const isRequired = paramType.some(p => p.isRequired);
      // if at least one declaration says required, treat as required
      return !isRequired;
    } catch {
      return false;
    }
  }

  /**
   * Sometimes the declaration points to an export, or an alias.
   * This method will attempt to find a JSDocableNode in the declaration chain.
   */
  private getJsDocableDeclaration(declaration: Node): JSDocableNode | undefined {
    if (Node.isJSDocable(declaration)) {
      return declaration;
    }
    // If the declaration itself is not JSDocable, try to get JSDoc from the symbol's declarations
    const symbol = declaration.getSymbol();
    if (symbol) {
      const declarations = symbol.getDeclarations();
      for (const decl of declarations) {
        if (decl !== declaration) {
          const jsDocableDecl = this.getJsDocableDeclaration(decl);
          if (jsDocableDecl) {
            return jsDocableDecl;
          }
        }

        // For VariableDeclaration, check the parent VariableStatement
        if (Node.isVariableDeclaration(decl)) {
          const parent = decl.getParent();
          if (parent) {
            const parentJsDoc = this.getJsDocableDeclaration(parent);
            if (parentJsDoc) {
              return parentJsDoc;
            }
            const grandparent = parent.getParent();
            if (grandparent) {
              const grandparentJsDoc = this.getJsDocableDeclaration(grandparent);
              if (grandparentJsDoc) {
                return grandparentJsDoc;
              }
            }
          }
        }
      }
    }
    return undefined;
  }

  private getJSDocFromDeclaration(declaration: JSDocableNode): string | undefined {
    const jsDocNodes = declaration.getJsDocs();
    if (jsDocNodes.length > 0) {
      return jsDocNodes[0].getDescription().trim();
    }
    return undefined;
  }

  private getJsDocMeta(declaration: Node): JSDocMeta {
    const docableDeclaration: JSDocableNode | undefined = this.getJsDocableDeclaration(declaration);
    if (!docableDeclaration) {
      return { text: undefined, tags: [] };
    }
    const text = this.getJSDocFromDeclaration(docableDeclaration);
    const tags: Array<[string, string | undefined]> = [];
    declaration
      .getSymbol()
      ?.getJsDocTags()
      .forEach(tag => {
        const tagName = tag.getName();
        const tagText = this.getTextOfTag(tag);
        tags.push([tagName, tagText]);
      });
    return {
      text,
      tags,
    };
  }

  /**
   * Get the JSDoc metadata for a component itself (not its props)
   */
  getComponentJsDocMeta(component: string): JSDocMeta | undefined {
    try {
      const declaration = this.getComponentDeclaration(component);
      return this.getJsDocMeta(declaration);
    } catch {
      return undefined;
    }
  }

  /**
   * Get all @example tags for a prop
   */
  getExamplesOf(component: string, prop: string): ReadonlyArray<string> {
    try {
      const propMeta: ReadonlyArray<PropMeta> = this.getPropMeta(component, prop);
      if (propMeta.length === 0) {
        return [];
      }

      const examples: string[] = [];

      // Try to find examples from Recharts props first (prefer our own documentation)
      const rechartsProp = propMeta.filter(p => p.origin === 'recharts');
      for (const rp of rechartsProp) {
        if (rp.jsDoc) {
          const exampleTags = rp.jsDoc.tags
            .filter(([key]) => key === 'example')
            .map(([, value]) => value)
            .filter((value): value is string => value !== undefined && value.trim() !== '');
          examples.push(...exampleTags);
        }
      }

      // Fallback to other prop declarations if no Recharts examples found
      if (examples.length === 0) {
        for (const p of propMeta) {
          if (p.jsDoc) {
            const exampleTags = p.jsDoc.tags
              .filter(([key]) => key === 'example')
              .map(([, value]) => value)
              .filter((value): value is string => value !== undefined && value.trim() !== '');
            examples.push(...exampleTags);
          }
        }
      }

      return examples;
    } catch {
      return [];
    }
  }

  getReturnTypeOf(component: string): { names: string[]; isInline: boolean } | undefined {
    try {
      const declaration = this.getComponentDeclaration(component);
      const type = declaration.getType();
      const callSignatures = type.getCallSignatures();

      if (callSignatures.length === 0) {
        return undefined;
      }

      const returnType = callSignatures[0].getReturnType();
      let names: string[] = [returnType.getText()];
      const isInline = false;

      if (returnType.isUnion()) {
        names = returnType.getUnionTypes().map(t => t.getText());
      }

      // Coalesce boolean
      if (names.length === 2 && names.includes('true') && names.includes('false')) {
        names = ['boolean'];
      }

      return { names, isInline };
    } catch {
      return undefined;
    }
  }
}

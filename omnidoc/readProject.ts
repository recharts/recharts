/**
 * @fileOverview reads props from the source code using ts-morph
 */
import { ExportedDeclarations, Project, SymbolFlags, Type } from 'ts-morph';

let project: Project;

function initializeProject() {
  if (project != null) {
    return project;
  }

  project = new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

  return project;
}

export function getPublicSymbolNames(kind?: SymbolFlags): string[] {
  const proj = initializeProject();
  const sourceFile = proj.getSourceFileOrThrow('src/index.ts');
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

function getComponentDeclaration(component: string): ExportedDeclarations {
  const proj = initializeProject();
  const sourceFile = proj.getSourceFileOrThrow('src/index.ts');
  const exportedDeclarations = sourceFile.getExportedDeclarations();

  const declarations = exportedDeclarations.get(component);
  if (!declarations || declarations.length === 0) {
    throw new Error(`Unknown component ${component}`);
  }

  return declarations[0];
}

function getComponentType(component: string): Type {
  const declaration = getComponentDeclaration(component);

  return declaration.getType();
}

/**
 * This returns properties of a symbol. So if you pass a React component, you get back React lifecycle methods,
 * and displayName.
 * @param component
 */
export function getPropertiesOf(component: string): string[] | undefined {
  const type = getComponentType(component);

  const properties = type.getProperties();
  return properties.map(p => p.getName());
}

function collectPropertiesFromType(type: Type, visited = new Set<Type>()): string[] {
  // Prevent infinite recursion
  if (visited.has(type)) {
    return [];
  }
  visited.add(type);

  const properties: string[] = [];

  // Handle intersection types - we need to extract only the component-specific props
  if (type.isIntersection()) {
    for (const intersectionType of type.getIntersectionTypes()) {
      const typeText = intersectionType.getText();

      // Skip SVGProps types (both direct and wrapped in Omit)
      if (typeText.includes('SVGProps<') || (typeText.startsWith('Omit<') && typeText.includes('SVGProps'))) {
        continue;
      }

      properties.push(...collectPropertiesFromType(intersectionType, visited));
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

function extractSVGElementFromType(type: Type): string | null {
  // Handle intersection types
  if (type.isIntersection()) {
    for (const intersectionType of type.getIntersectionTypes()) {
      const result = extractSVGElementFromType(intersectionType);
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

function getFirstParamType(component: string): Type {
  const declaration = getComponentDeclaration(component);
  const type = declaration.getType();

  // Get call signatures (for function components)
  const callSignatures = type.getCallSignatures();
  if (callSignatures.length === 0) {
    throw new Error(`Expected to find at least one call signature for component ${component}, but found none.`);
  }

  const firstSignature = callSignatures[0];
  const parameters = firstSignature.getParameters();
  if (parameters.length === 0) {
    throw new Error(`Expected to find at least one parameter for component ${component}, but found none.`);
  }

  const firstParameter = parameters[0];
  return firstParameter.getTypeAtLocation(declaration);
}

export function getPropsOf(component: string): string[] {
  const paramType = getFirstParamType(component);
  return collectPropertiesFromType(paramType);
}

export function getSVGParentOf(component: string): string | null {
  const paramType = getFirstParamType(component);
  return extractSVGElementFromType(paramType);
}

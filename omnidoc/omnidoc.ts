import { Application, DeclarationReflection, ProjectReflection, ReflectionKind, SignatureReflection } from 'typedoc';

let project: ProjectReflection;

async function initializeTypedoc() {
  if (project != null) {
    return project;
  }

  const app = await Application.bootstrapWithPlugins({
    entryPoints: ['src/index.ts'],
  });

  const p = await app.convert();
  if (!p) {
    throw new Error('Failed to convert project with TypeDoc');
  }

  project = p;
  return project;
}

async function getDeclarations(kind?: ReflectionKind) {
  const output = await initializeTypedoc();
  const declarations: ReadonlyArray<DeclarationReflection> | undefined = output.children;
  if (declarations == null) {
    throw new Error('Failed to read typedoc declarations');
  }
  return kind == null ? declarations : declarations.filter(declaration => declaration.kind === kind);
}

export async function getPublicSymbolNames(kind?: ReflectionKind) {
  const filtered = await getDeclarations(kind);
  return filtered.map(c => c.name);
}

async function getDeclaration(component: string): Promise<DeclarationReflection> {
  const declarations = await getDeclarations();
  const dec = declarations.filter(d => d.name === component);
  if (dec == null) {
    throw new Error(`Unknown component ${component}`);
  }
  if (dec.length > 1) {
    throw new Error(`Found multiple (${dec.length}) components with the same name: ${component}`);
  }
  return dec[0];
}

/**
 * This returns properties of a symbol. So if you pass a React component, you get back React lifecycle methods,
 * and displayName.
 * @param component
 */
export async function getPropertiesOf(component: string) {
  const declaration = await getDeclaration(component);
  return declaration.children?.map(c => c.name);
}

async function getSignatureOf(component: string): Promise<SignatureReflection | undefined> {
  const declaration = await getDeclaration(component);
  return declaration.signatures?.[0];
}

async function getChildById(target: number) {
  const declarations = await getDeclarations();
  return declarations.find(d => d.id === target);
}

export async function getPropsOf(component: string) {
  const signature = await getSignatureOf(component);
  const firstParameter = signature?.parameters?.[0];
  if (firstParameter?.type?.type !== 'reference') {
    throw new Error(`Expected to see a reference type, instead got ${firstParameter?.type?.type}`);
  }
  return getChildById(firstParameter.type.target);
}

import {
  Application,
  DeclarationReflection,
  makeRecursiveVisitor,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  SignatureReflection,
  SomeType,
} from 'typedoc';
import { ReflectionVisitor } from 'typedoc/dist/lib/models/Reflection';

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

async function getSignatureOf(component: string): Promise<SignatureReflection | undefined> {
  const declaration = await getDeclaration(component);
  return declaration.signatures?.[0];
}

/**
 * Visitor-based implementation of getPropsOf.
 * This approach uses TypeDoc's visitor pattern to traverse types and reflections.
 */
export async function getPropsOfWithVisitor(component: string): Promise<string[]> {
  const signature = await getSignatureOf(component);
  const firstParameter = signature?.parameters?.[0];
  if (firstParameter == null) {
    throw new Error(`Expected to find at least one parameter for component ${component}, but found none.`);
  }
  if (firstParameter.type == null) {
    throw new Error(`Expected that all parameters have types, but found none for first parameter of ${component}`);
  }

  const propertyNames: string[] = [];

  // Create a type visitor that collects property names
  const typeVisitor = makeRecursiveVisitor({
    reference(type) {
      // When we encounter a reference type, visit its reflection
      if (type.reflection != null) {
        type.reflection.visit(reflectionVisitor);
      }
      return;
    },
    intersection(type) {
      // For intersection types, visit each type in the intersection
      type.types.forEach(t => t.visit(typeVisitor));
      return;
    },
    reflection(type) {
      // For reflection types, visit the declaration
      if (type.declaration != null) {
        type.declaration.visit(reflectionVisitor);
      }
      return;
    },
  });

  // Create a reflection visitor that collects property names
  const reflectionVisitor: ReflectionVisitor = {
    declaration(reflection) {
      const decl = reflection as DeclarationReflection;

      // If this declaration has a type (e.g., type alias), visit the type
      if (decl.type != null) {
        decl.type.visit(typeVisitor);
        return;
      }

      // If it has children, those are the properties we want
      if (decl.children != null) {
        for (const child of decl.children) {
          propertyNames.push(child.name);
        }
        return;
      }
    },
    // We don't need to handle these for our use case, but they're required by the interface
    param() {},
    signature() {},
    project() {},
    reference() {},
    typeParam() {},
    document() {},
  };

  // Start the visitor traversal
  firstParameter.type.visit(typeVisitor);

  return propertyNames;
}

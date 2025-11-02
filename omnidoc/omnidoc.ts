import {
  Application,
  ArrayType,
  ConditionalType,
  DeclarationReflection,
  IndexedAccessType,
  InferredType,
  LiteralType,
  makeRecursiveVisitor,
  MappedType,
  NamedTupleMember,
  OptionalType,
  PredicateType,
  ProjectReflection,
  QueryType,
  ReferenceType,
  Reflection,
  ReflectionKind,
  RestType,
  SignatureReflection,
  SomeType,
  TemplateLiteralType,
  TraverseProperty,
  TupleType,
  TypeOperatorType,
  TypeVisitor,
  UnionType,
  UnknownType,
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

const result: string[] = [];

const reflectionVisitor: ReflectionVisitor = {
  declaration: reflection => {
    console.log('found declaration reflection', reflection.name, reflection.children?.length, 'kind:', reflection.kind);
    console.log(
      '  comment tags:',
      reflection.comment?.blockTags?.map(t => t.tag),
    );
    console.log('  modifier tags:', reflection.comment?.modifierTags);
    console.log('  flags:', Object.keys(reflection.flags || {}));
    // if this declaration has a type, visit it
    if (reflection.type != null) {
      console.log('  has type:', reflection.type.type);
      reflection.type.visit(typeVisitor);
      // return here early otherwise we'll double count properties
      // return;
    }
    // if this declaration has children, store them - they are the properties we need
    if (reflection.children != null) {
      reflection.children.forEach(child => {
        console.log('found child declaration', child.name);
        result.push(child.name);
      });
    }
  },
  param: reflection => {
    console.log('found param reflection', reflection);
  },
  signature: reflection => {
    console.log('found signature reflection', reflection);
  },
  project: reflection => {
    console.log('found project reflection', reflection);
  },
  reference: reflection => {
    console.log('found reference reflection', reflection);
    reflection.getTargetReflectionDeep().visit(reflectionVisitor);
  },
  typeParam: reflection => {
    console.log('found type param reflection', reflection);
  },
  document: reflection => {
    console.log('found document reflection', reflection);
  },
};

const typeVisitor: TypeVisitor = {
  intrinsic: type => {
    console.log('found intrinsic type', type);
  },
  intersection: type => {
    console.log('found type intersection with', type.types.length, 'types');
    type.types.forEach((t, i) => {
      console.log(
        `  type[${i}]:`,
        t.type,
        t.type === 'reference' ? t.name : '',
        t.type === 'reflection' ? `children:${t.declaration?.children?.length}` : '',
      );
    });
    /*
     * For intersection types like: Omit<SVGProps<...>, 'viewBox'> & ReferenceLineProps
     *
     * Due to the @inline directive on ReferenceLineProps, TypeDoc inlines the interface
     * directly into the intersection. So instead of keeping it as a reference, TypeDoc
     * embeds it as a reflection type with all properties.
     *
     * The intersection becomes:
     *   types[0]: reference to Omit<SVGProps<...>, 'viewBox'>  (SVG properties)
     *   types[1]: reflection type with 11 children (ReferenceLineProps properties inlined)
     *
     * We only visit types[1] because:
     * - types[0] contains SVG attributes we don't need
     * - types[1] is the inlined interface with exactly the component properties we want
     *
     * If we visited both or used forEach, we'd process the properties twice.
     */
    type.types.forEach(t => t.visit(typeVisitor));
    // type.types[1].visit(typeVisitor);
  },
  reference: type => {
    console.log('found type reference', type.name, type.declaration);
    if (type.name === 'ReferenceLineProps') {
      debugger;
    }
    const { reflection } = type;
    if (reflection?.package === 'typescript') {
      console.log('skipping typescript built-in type', type.name);
      return;
    }
    if (reflection != null) {
      reflection.visit(reflectionVisitor);
    }
  },
  reflection: type => {
    console.log('found type reflection', type.declaration.name);
    const { declaration } = type;
    if (declaration != null) {
      declaration.visit(reflectionVisitor);
    }
  },
  array(type: ArrayType): void {},
  conditional(type: ConditionalType): void {},
  indexedAccess(type: IndexedAccessType): void {},
  inferred(type: InferredType): void {},
  literal(type: LiteralType): void {},
  mapped(type: MappedType): void {},
  optional(type: OptionalType): void {},
  predicate(type: PredicateType): void {},
  query(type: QueryType): void {},
  rest(type: RestType): void {},
  templateLiteral(type: TemplateLiteralType): void {},
  tuple(type: TupleType): void {},
  namedTupleMember(type: NamedTupleMember): void {},
  typeOperator(type: TypeOperatorType): void {},
  union(type: UnionType): void {},
  unknown(type: UnknownType): void {},
};

export async function getPropsOf(component: string): Promise<string[]> {
  const signature = await getSignatureOf(component);
  const firstParameter = signature?.parameters?.[0];
  if (firstParameter == null) {
    throw new Error(`Expected to find at least one parameter for component ${component}, but found none.`);
  }
  if (firstParameter.type == null) {
    throw new Error(`Expected that all parameters have types, but found none for first parameter of ${component}`);
  }

  // Clear the result array before visiting
  result.length = 0;

  firstParameter.type.visit(typeVisitor);

  return result;
}

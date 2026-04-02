import { Project } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

const sourceFile = project.getSourceFileOrThrow('src/index.ts');
const exportedDeclarations = sourceFile.getExportedDeclarations();

// Check Layer which uses forwardRef
const layerDecls = exportedDeclarations.get('Layer');
if (layerDecls && layerDecls.length > 0) {
  const decl = layerDecls[0];
  const type = decl.getType();
  console.log('Layer symbol name:', type.getSymbol()?.getName());
  console.log('Layer alias symbol:', type.getAliasSymbol()?.getName());
  console.log('Layer type args:', type.getTypeArguments().length);
  console.log('Layer alias type args:', type.getAliasTypeArguments().length);
  if (type.getTypeArguments().length > 0) {
    console.log('Layer type arg[0]:', type.getTypeArguments()[0].getText().substring(0, 100));
    console.log('Layer type arg[0] props:', type.getTypeArguments()[0].getProperties().length);
  }
  if (type.getAliasTypeArguments().length > 0) {
    console.log('Layer alias type arg[0]:', type.getAliasTypeArguments()[0].getText().substring(0, 100));
    console.log('Layer alias type arg[0] props:', type.getAliasTypeArguments()[0].getProperties().length);
  }
}

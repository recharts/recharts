# Omnidoc - Documentation Consistency Tools

This folder contains tools for managing and maintaining documentation consistency across the Recharts project.

## Tools

### Documentation Consistency Tests (`omnidoc.spec.ts`)

Automated tests that verify documentation is synchronized across:
- TypeScript source code comments
- API documentation in `www/src/docs/api`
- Storybook documentation

Run with:
```shell
npm run test-omnidoc
```

### API Documentation Generator (`generateApiDoc.ts`)

Auto-generates API documentation files from TypeScript source code. This tool:
- Reads TypeScript comments and type definitions from source code
- Generates API documentation in the `www/src/docs/api` folder
- Only generates `en-US` descriptions (from TypeScript docs)
- Always overwrites existing files (no merging)

#### Usage

Generate documentation for specific components:
```shell
npm run omnidoc [component1] [component2] ...
```

Generate documentation for all allowlisted components:
```shell
npm run omnidoc
```

Examples:
```shell
npm run omnidoc
npm run omnidoc CartesianGrid
npm run omnidoc XAxis YAxis ZAxis
```

#### Allow-listed Components

The `ALLOWLISTED_COMPONENTS` array in `generateApiDoc.ts` contains components that are ready for auto-generation. You can still generate documentation for components not in this list by passing them as command-line arguments.

#### After Generation

After generating API documentation:
1. Review the generated files for correctness
2. Update `www/src/docs/api/index.ts` to import and export the new API docs
3. Run `npm run test-omnidoc` to verify consistency
4. Optional: add new API examples in appropriate subfolder in `www/src/docs/apiExamples`
5. Optional: add the new component to appropriate category in `www/src/docs/apiCates.ts`
6. Commit the changes

## Architecture

### Readers

- **ProjectDocReader** (`readProject.ts`): Reads documentation from TypeScript source code using ts-morph
- **ApiDocReader** (`readApiDoc.ts`): Reads documentation from the website's API docs
- **StorybookDocReader** (`readStorybookDoc.ts`): Reads documentation from Storybook stories

All readers implement the `DocReader` interface defined in `DocReader.ts`.

### Utilities

- **componentsAndDefaultPropsMap.ts**: Manual mapping of component default props
- **componentsWithInconsistentCommentsInApiDoc.ts**: Temporary list of components with known inconsistencies
- **util/**: Helper functions for text normalization and diffing

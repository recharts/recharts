import { describe, it, expect } from 'vitest';
import { ProjectDocReader } from './readProject';
import { ApiDocReader } from './readApiDoc';
import { StorybookDocReader } from './readStorybookDoc';

describe('omnidoc - documentation consistency', () => {
  const projectReader = new ProjectDocReader();
  const apiDocReader = new ApiDocReader();
  const storybookReader = new StorybookDocReader();

  it('all API doc symbols must exist in the project', () => {
    const projectSymbols = new Set(projectReader.getPublicSymbolNames());
    const apiDocSymbols = apiDocReader.getPublicSymbolNames();

    const missingInProject: string[] = [];

    for (const symbol of apiDocSymbols) {
      if (!projectSymbols.has(symbol)) {
        missingInProject.push(symbol);
      }
    }

    if (missingInProject.length > 0) {
      console.error(
        `Found ${missingInProject.length} symbol(s) documented in API docs but not exported from the project:`,
        missingInProject,
      );
    }

    expect(missingInProject).toEqual([]);
  });

  it('all Storybook symbols must exist in the project', () => {
    const projectSymbols = new Set(projectReader.getPublicSymbolNames());
    const storybookSymbols = storybookReader.getPublicSymbolNames();

    const missingInProject: string[] = [];

    for (const symbol of storybookSymbols) {
      if (!projectSymbols.has(symbol)) {
        missingInProject.push(symbol);
      }
    }

    if (missingInProject.length > 0) {
      console.error(
        `Found ${missingInProject.length} symbol(s) documented in Storybook but not exported from the project:`,
        missingInProject,
      );
    }

    expect(missingInProject).toEqual([]);
  });
});

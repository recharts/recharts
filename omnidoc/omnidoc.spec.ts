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

  it('all API doc props must exist in the project', () => {
    const apiDocSymbols = apiDocReader.getPublicComponentNames();
    const missingProps: Array<{ component: string; prop: string }> = [];

    for (const component of apiDocSymbols) {
      const apiDocProps = apiDocReader.getRechartsPropsOf(component);
      /*
       * Here we intentionally get all props including SVG inherited ones.
       * It's okay to document SVG props on recharts website!
       */
      const projectProps = new Set(projectReader.getAllPropsOf(component));

      for (const prop of apiDocProps) {
        if (!projectProps.has(prop)) {
          missingProps.push({ component, prop });
        }
      }
    }

    if (missingProps.length > 0) {
      console.error(
        `Found ${missingProps.length} prop(s) documented in API docs but not exported from the project:`,
        missingProps,
      );
    }

    expect(missingProps).toMatchInlineSnapshot(`
      [
        {
          "component": "ScatterChart",
          "prop": "onMouseOver",
        },
        {
          "component": "ScatterChart",
          "prop": "onMouseOut",
        },
        {
          "component": "Sankey",
          "prop": "linkWidth",
        },
        {
          "component": "Sankey",
          "prop": "sourceX",
        },
        {
          "component": "Sankey",
          "prop": "sourceY",
        },
        {
          "component": "Sankey",
          "prop": "sourceControlX",
        },
        {
          "component": "Sankey",
          "prop": "targetControlX",
        },
        {
          "component": "RadialBar",
          "prop": "maxAngle",
        },
        {
          "component": "RadialBar",
          "prop": "minAngle",
        },
      ]
    `);
  });

  it('all Storybook props must exist in the project', () => {
    const storybookSymbols = storybookReader.getPublicComponentNames();
    const missingProps: Array<{ component: string; prop: string }> = [];

    for (const component of storybookSymbols) {
      const storybookProps = storybookReader.getRechartsPropsOf(component);
      /*
       * Here we intentionally get all props including SVG inherited ones.
       * It's okay to document SVG props on storybook!
       */
      const projectProps = new Set(projectReader.getAllPropsOf(component));

      for (const prop of storybookProps) {
        if (!projectProps.has(prop)) {
          missingProps.push({ component, prop });
        }
      }
    }

    if (missingProps.length > 0) {
      console.error(
        `Found ${missingProps.length} prop(s) documented in Storybook but not exported from the project:`,
        missingProps,
      );
    }

    expect(missingProps).toMatchInlineSnapshot(`
      [
        {
          "component": "Cell",
          "prop": "onPointerEnterCapture",
        },
        {
          "component": "Cell",
          "prop": "onPointerLeaveCapture",
        },
        {
          "component": "PieChart",
          "prop": "activeShape",
        },
        {
          "component": "SunburstChart",
          "prop": "margin",
        },
        {
          "component": "Trapezoid",
          "prop": "isAnimationActive",
        },
      ]
    `);
  });
});

import { describe, it, expect } from 'vitest';
import { ProjectDocReader } from './readProject';
import { ApiDocReader } from './readApiDoc';
import { StorybookDocReader } from './readStorybookDoc';
import { DefaultValue } from './DocReader';
import { isNotNil } from '../src/util/DataUtils';

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
    const missingProps: Array<string> = [];

    for (const component of apiDocSymbols) {
      const apiDocProps = apiDocReader.getRechartsPropsOf(component);
      /*
       * Here we intentionally get all props including SVG inherited ones.
       * It's okay to document SVG props on recharts website!
       */
      const projectProps = new Set(projectReader.getAllPropsOf(component));

      for (const prop of apiDocProps) {
        if (!projectProps.has(prop)) {
          missingProps.push(
            `Component "${component}" has documented prop "${prop}" but that does not exist in the project.`,
          );
        }
      }
    }

    expect(missingProps).toEqual([]);
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

    expect(missingProps).toEqual([]);
  });

  describe('default props consistency', () => {
    function stripQuotes(str: unknown) {
      if (typeof str === 'string') {
        return str.replace(/^['"]|['"]$/g, '');
      }
      return str;
    }

    function compareValues(val1: unknown, val2: unknown) {
      return stripQuotes(val1) === stripQuotes(val2);
    }

    function compareDefaultValues(
      documentedDefaultValue: DefaultValue,
      actualDefaultValue: DefaultValue,
    ): string | null {
      if (documentedDefaultValue.type === 'unreadable' || actualDefaultValue.type === 'unreadable') {
        return null;
      }
      if (documentedDefaultValue.type === 'known' && actualDefaultValue.type === 'known') {
        if (!compareValues(documentedDefaultValue.value, actualDefaultValue.value)) {
          return `Documented default value "${documentedDefaultValue.value}", but actually in project it is "${actualDefaultValue.value}"`;
        }
        return null;
      }
      if (documentedDefaultValue.type === 'none' && actualDefaultValue.type !== 'none') {
        return `Default value exists but it is not documented`;
      }
      if (documentedDefaultValue.type !== 'none' && actualDefaultValue.type === 'none') {
        return `Documented default value, but actually none exists in the project`;
      }
      return null;
    }

    test('if a component has default props in the API, then that default value must be the same as in the project', () => {
      const apiDocSymbols = apiDocReader.getPublicComponentNames();
      const missingDefaultProps: string[] = [];

      for (const component of apiDocSymbols) {
        const allProps = apiDocReader.getRechartsPropsOf(component);
        for (const prop of allProps) {
          const apiDefaultProp = apiDocReader.getDefaultValueOf(component, prop);
          const projectDefaultProp = projectReader.getDefaultValueOf(component, prop);
          const problem = compareDefaultValues(apiDefaultProp, projectDefaultProp);
          if (problem) {
            missingDefaultProps.push(`Component "${component}", prop "${prop}": ${problem}`);
          }
        }
      }

      expect(missingDefaultProps).toMatchInlineSnapshot(`
        [
          "Component "Area", prop "type": Documented default value, but actually none exists in the project",
          "Component "Area", prop "label": Documented default value, but actually none exists in the project",
          "Component "Area", prop "layout": Documented default value, but actually none exists in the project",
          "Component "Area", prop "baseLine": Documented default value, but actually none exists in the project",
          "Component "Area", prop "stackId": Documented default value, but actually none exists in the project",
          "Component "Area", prop "unit": Documented default value, but actually none exists in the project",
          "Component "Area", prop "name": Documented default value, but actually none exists in the project",
          "Component "Area", prop "isAnimationActive": Documented default value "true in CSR, and false in SSR", but actually in project it is "true"",
          "Component "Area", prop "animationBegin": Documented default value "0", but actually in project it is "0"",
          "Component "Area", prop "animationDuration": Documented default value "1500", but actually in project it is "1500"",
          "Component "Area", prop "id": Documented default value, but actually none exists in the project",
          "Component "Text", prop "angle": Documented default value, but actually none exists in the project",
          "Component "ReferenceLine", prop "x": Documented default value, but actually none exists in the project",
          "Component "ReferenceLine", prop "y": Documented default value, but actually none exists in the project",
          "Component "ReferenceLine", prop "label": Documented default value, but actually none exists in the project",
          "Component "ReferenceLine", prop "segment": Documented default value, but actually none exists in the project",
        ]
      `);
    });

    test('if a component has default props in Storybook, it should also have them in the project', () => {
      const storybookSymbols = storybookReader.getPublicComponentNames();
      const missingDefaultProps: string[] = [];

      for (const component of storybookSymbols) {
        const allProps = storybookReader.getRechartsPropsOf(component);
        for (const prop of allProps) {
          const storybookDefaultProp = storybookReader.getDefaultValueOf(component, prop);
          const projectDefaultProp = projectReader.getDefaultValueOf(component, prop);
          const problem = compareDefaultValues(storybookDefaultProp, projectDefaultProp);
          if (problem) {
            missingDefaultProps.push(`Component "${component}", prop "${prop}": ${problem}`);
          }
        }
      }

      expect(missingDefaultProps).toMatchInlineSnapshot(`
        [
          "Component "Area", prop "activeDot": Default value exists but it is not documented",
          "Component "Area", prop "animationBegin": Documented default value "0", but actually in project it is "0"",
          "Component "Area", prop "animationDuration": Default value exists but it is not documented",
          "Component "Area", prop "animationEasing": Default value exists but it is not documented",
          "Component "Area", prop "connectNulls": Documented default value "false", but actually in project it is "false"",
          "Component "Area", prop "dot": Default value exists but it is not documented",
          "Component "Area", prop "hide": Documented default value "false", but actually in project it is "false"",
          "Component "Area", prop "isAnimationActive": Documented default value "true", but actually in project it is "true"",
          "Component "Area", prop "legendType": Default value exists but it is not documented",
          "Component "Area", prop "xAxisId": Default value exists but it is not documented",
          "Component "Area", prop "yAxisId": Default value exists but it is not documented",
          "Component "Label", prop "zIndex": Default value exists but it is not documented",
          "Component "ReferenceLine", prop "position": Default value exists but it is not documented",
          "Component "ReferenceLine", prop "xAxisId": Default value exists but it is not documented",
          "Component "ReferenceLine", prop "yAxisId": Default value exists but it is not documented",
          "Component "Text", prop "breakAll": Documented default value "true", but actually in project it is "false"",
          "Component "Text", prop "lineHeight": Default value exists but it is not documented",
          "Component "Text", prop "scaleToFit": Documented default value "false", but actually in project it is "false"",
          "Component "Treemap", prop "type": Default value exists but it is not documented",
        ]
      `);
    });

    test('if a prop is documented with a @default tag, it should match the actual default prop in the project', () => {
      const projectComponents = projectReader.getPublicComponentNames();
      const result: Array<string> = [];

      for (const component of projectComponents) {
        const allProps = projectReader.getRechartsPropsOf(component);
        for (const prop of allProps) {
          const propMeta = projectReader.getPropMeta(component, prop);
          const problems = propMeta
            .map(meta => {
              return compareDefaultValues(meta.defaultValueFromJSDoc, meta.defaultValueFromObject);
            })
            .filter(isNotNil)
            .map(description => `Component "${component}", prop "${prop}": ${description}`);
          if (problems) {
            result.push(...problems);
          }
        }
      }

      expect(result).toEqual([]);
    });
  });

  describe.todo('the type definition of each prop should be consistent between API docs, Storybook, and the project');
});

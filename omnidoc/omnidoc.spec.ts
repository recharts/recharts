import { describe, it, expect, test } from 'vitest';
import { shallowEqual } from 'react-redux';
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
    function stringify(value: unknown): string {
      if (typeof value === 'string') {
        return value;
      }
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }

    function stringifyDefaultValue(defaultValue: DefaultValue): DefaultValue {
      if (defaultValue.type === 'known') {
        return {
          type: 'known',
          value: stringify(defaultValue.value),
        };
      }
      return defaultValue;
    }

    function stripQuotes(str: unknown) {
      if (typeof str === 'string') {
        return str.replace(/^['"]|['"]$/g, '');
      }
      return stringify(str);
    }

    function compareValues(val1: unknown, val2: unknown) {
      if (typeof val1 === 'object' && typeof val2 === 'object') {
        return shallowEqual(val1, val2);
      }
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
          return `Documented default value "${documentedDefaultValue.value}" [${typeof documentedDefaultValue.value}], but actually in project it is "${stringify(actualDefaultValue.value)}" [${typeof actualDefaultValue.value}]`;
        }
        return null;
      }
      if (documentedDefaultValue.type === 'none' && actualDefaultValue.type !== 'none') {
        return `Default value is ${actualDefaultValue.value} but it is not documented`;
      }
      if (documentedDefaultValue.type !== 'none' && actualDefaultValue.type === 'none') {
        return `Documented default value ${documentedDefaultValue.value}, but actually none exists in the project`;
      }
      return null;
    }

    test.each(apiDocReader.getPublicComponentNames())(
      'if %s has default props in the API, then that default value must be the same as in the project',
      component => {
        const allProps = apiDocReader.getRechartsPropsOf(component);
        const missingDefaultProps: string[] = [];

        for (const prop of allProps) {
          const apiDefaultProp = apiDocReader.getDefaultValueOf(component, prop);
          const projectDefaultProp = projectReader.getDefaultValueOf(component, prop);
          const problem = compareDefaultValues(apiDefaultProp, projectDefaultProp);
          if (problem) {
            missingDefaultProps.push(`Component "${component}", prop "${prop}": ${problem}`);
          }
        }

        expect(missingDefaultProps).toEqual([]);
      },
    );

    test.each(storybookReader.getPublicComponentNames())(
      'if %s has default props in Storybook, it should also have them in the project',
      component => {
        const allProps = storybookReader.getRechartsPropsOf(component);
        const missingDefaultProps: string[] = [];

        for (const prop of allProps) {
          const storybookDefaultProp = storybookReader.getDefaultValueOf(component, prop);
          const projectDefaultProp = projectReader.getDefaultValueOf(component, prop);
          const problem = compareDefaultValues(
            /*
             * Storybook types demand that all default values are strings
             * so let's convert everything to string for comparison.
             * https://storybook.js.org/docs/api/arg-types#tabledefaultvalue
             */
            stringifyDefaultValue(storybookDefaultProp),
            stringifyDefaultValue(projectDefaultProp),
          );
          if (problem) {
            missingDefaultProps.push(`Component "${component}", prop "${prop}": ${problem}`);
          }
        }

        expect(missingDefaultProps).toEqual([]);
      },
    );

    test.each(projectReader.getPublicComponentNames())(
      'if a %s prop is documented with a @default tag, it should match the actual default prop in the project',
      component => {
        const result: Array<string> = [];

        const allProps = projectReader.getRechartsPropsOf(component);
        for (const prop of allProps) {
          const propMeta = projectReader.getPropMeta(component, prop);
          const problems = propMeta
            .map(meta => {
              /*
               * Because everything coming out of the JSDoc is a string,
               * we need to convert the actual default value to string for comparison.
               */
              return compareDefaultValues(
                meta.defaultValueFromJSDoc,
                stringifyDefaultValue(meta.defaultValueFromObject),
              );
            })
            .filter(isNotNil)
            .map(description => `Component "${component}", prop "${prop}": ${description}`);
          if (problems) {
            result.push(...problems);
          }
        }

        expect(result).toEqual([]);
      },
    );
  });

  describe.todo('the type definition of each prop should be consistent between API docs, Storybook, and the project');
});

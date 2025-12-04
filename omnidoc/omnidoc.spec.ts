import { describe, it, expect, test } from 'vitest';
import { shallowEqual } from 'react-redux';
import { diffChars } from 'diff';
import { ProjectDocReader } from './readProject';
import { ApiDocReader } from './readApiDoc';
import { StorybookDocReader } from './readStorybookDoc';
import { DefaultValue } from './DocReader';
import { isNotNil } from '../src/util/DataUtils';

/**
 * Normalize text for fuzzy comparison by:
 * - Converting to lowercase
 * - Removing extra whitespace (including newlines)
 * - Trimming leading/trailing whitespace
 */
function normalizeText(text: string | undefined): string {
  if (!text) {
    return '';
  }
  return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

/**
 * Calculate similarity score between two strings using Levenshtein distance.
 * Returns a score between 0 (completely different) and 1 (identical).
 * @param str1
 * @param str2
 */
function calculateSimilarityScore(str1: string | undefined, str2: string | undefined): number {
  if (str1 === undefined && str2 === undefined) {
    return 1;
  }
  if (str1 === undefined || str2 === undefined) {
    return 0;
  }

  const normalized1 = normalizeText(str1);
  const normalized2 = normalizeText(str2);

  if (normalized1 === normalized2) {
    return 1;
  }

  // Levenshtein distance calculation
  const matrix: number[][] = [];
  const len1 = normalized1.length;
  const len2 = normalized2.length;

  if (len1 === 0) return len2 === 0 ? 1 : 0;
  if (len2 === 0) return 0;

  // Initialize matrix
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = normalized1[i - 1] === normalized2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost, // substitution
      );
    }
  }

  const distance = matrix[len1][len2];
  const maxLength = Math.max(len1, len2);
  return 1 - distance / maxLength;
}

/**
 * Uses the 'diff' library to produce a colored diff between two strings.
 * The diff highlights additions in green and deletions in red.
 *
 * Returns undefined if there are no differences.
 * @param expected
 * @param actual
 */
function coloredDiff(expected: string | undefined, actual: string | undefined): string | undefined {
  if (expected === undefined && actual === undefined) {
    return undefined;
  }
  if (expected === undefined) {
    return `${actual}`;
  }
  if (actual === undefined) {
    return `${expected}`;
  }
  const normalizedExpected = normalizeText(expected);
  const normalizedActual = normalizeText(actual);
  if (normalizedExpected === normalizedActual) {
    return undefined;
  }
  const diff = diffChars(normalizedExpected, normalizedActual);
  const hasDifferences = diff.some(part => part.added || part.removed);
  if (!hasDifferences) {
    return undefined;
  }
  let result = '';
  for (const part of diff) {
    let colorStart = '';
    let colorEnd = '';
    if (part.added) {
      colorStart = '+++';
      colorEnd = '<<<';
    } else if (part.removed) {
      colorStart = '---';
      colorEnd = '<<<';
    }
    result += colorStart + part.value + colorEnd;
  }
  return result;
}

describe('omnidoc - documentation consistency', () => {
  const projectReader = new ProjectDocReader();
  const apiDocReader = new ApiDocReader();
  const storybookReader = new StorybookDocReader();

  describe('confusing defaults', () => {
    /*
     * These are string values that look like primitives,
     * but are actually strings.
     * They behave differently than the actual primitives!
     * For example, a default value of 'false' (string) will render the literal string "false",
     * but the primitive false will render nothing.
     * Never use these as default values!
     *
     * '0' is here as well because the default Axis id is `0` (number), not `'0'` (string).
     * Passing a string '0' may match to non-existent axis, causing confusion.
     */
    const bannedValues: ReadonlyArray<unknown> = ['null', 'undefined', 'NaN', '[]', '{}', 'true', 'false', '0'];

    describe('never use primitives as strings, always use booleans', () => {
      describe('in project', () => {
        test.each(projectReader.getPublicComponentNames())('%s', component => {
          const problematicProps: Array<{ component: string; prop: string; defaultValue: unknown }> = [];
          const allProps = projectReader.getRechartsPropsOf(component);
          for (const prop of allProps) {
            /*
             * Because everything coming out of JSDoc is inevitably a string,
             * we ignore JSDoc here as the type definition is not reliable.
             */
            const defaultValue = projectReader.getDefaultValueOf(component, prop, false);
            if (defaultValue.type === 'known') {
              if (bannedValues.includes(defaultValue.value)) {
                problematicProps.push({ component, prop, defaultValue: defaultValue.value });
              }
            }
          }
          expect(problematicProps).toEqual([]);
        });
      });

      describe('API docs', () => {
        test.each(apiDocReader.getPublicComponentNames())('%s', component => {
          const problematicProps: Array<{ component: string; prop: string; defaultValue: unknown }> = [];
          const allProps = apiDocReader.getRechartsPropsOf(component);
          for (const prop of allProps) {
            const defaultValue = apiDocReader.getDefaultValueOf(component, prop);
            if (defaultValue.type === 'known') {
              if (bannedValues.includes(defaultValue.value)) {
                problematicProps.push({ component, prop, defaultValue: defaultValue.value });
              }
            }
          }
          expect(problematicProps).toEqual([]);
        });
      });

      describe('Storybook', () => {
        test.each(storybookReader.getPublicComponentNames())('%s', component => {
          const problematicProps: Array<{ component: string; prop: string; defaultValue: unknown }> = [];
          const allProps = storybookReader.getRechartsPropsOf(component);
          for (const prop of allProps) {
            const defaultValue = storybookReader.getDefaultValueOf(component, prop);
            if (defaultValue.type === 'known') {
              if (bannedValues.includes(defaultValue.value)) {
                problematicProps.push({ component, prop, defaultValue: defaultValue.value });
              }
            }
          }
          expect(problematicProps).toEqual([]);
        });
      });
    });
  });

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
             * Storybook types demand that all default values are strings.
             * https://storybook.js.org/docs/api/arg-types#tabledefaultvalue
             * This however causes problems because `'false'` (string) is indeed very different from `false` (boolean).
             * So here let's make sure to compare the actual values,
             * even though it goes against Storybook's type definition.
             */
            storybookDefaultProp,
            projectDefaultProp,
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

  /**
   * This list is temporary - these components have known inconsistencies,
   * and we are fixing them. This list will shrink over time as we fix the comments one component at a time.
   */
  const componentsWithInconsistentCommentsInApiDoc = [
    'CartesianAxis',
    'CartesianGrid',
    'Cell',
    'ComposedChart',
    'Cross',
    'Curve',
    'Customized',
    'Dot',
    'ErrorBar',
    'Funnel',
    'FunnelChart',
    'Label',
    'LabelList',
    'Legend',
    'Line',
    'LineChart',
    'Pie',
    'PieChart',
    'PolarAngleAxis',
    'PolarGrid',
    'PolarRadiusAxis',
    'Polygon',
    'Radar',
    'RadarChart',
    'RadialBar',
    'RadialBarChart',
    'Rectangle',
    'ReferenceArea',
    'ReferenceDot',
    'ReferenceLine',
    'ResponsiveContainer',
    'Sankey',
    'Scatter',
    'ScatterChart',
    'Sector',
    'Text',
    'Tooltip',
    'Trapezoid',
    'Treemap',
    'XAxis',
    'YAxis',
    'ZAxis',
  ];

  describe('comment/documentation consistency', () => {
    /**
     * Check if two comments are similar enough.
     * Returns true if both are empty/null, or if normalized texts match.
     */
    function areCommentsSimilar(comment1: string | undefined, comment2: string | undefined): boolean {
      const norm1 = normalizeText(comment1);
      const norm2 = normalizeText(comment2);

      // Both empty is considered similar
      if (norm1 === '' && norm2 === '') {
        return true;
      }

      // If one is empty and the other is not, they're different
      if (norm1 === '' || norm2 === '') {
        return false;
      }

      return norm1 === norm2;
    }

    test.each(
      apiDocReader.getPublicComponentNames().filter(name => !componentsWithInconsistentCommentsInApiDoc.includes(name)),
    )('if %s has comments in API docs, they should match the project comments', component => {
      const allProps = apiDocReader.getAllPropsOf(component);

      const inconsistentComments: string[] = [];

      for (const prop of allProps) {
        const apiComment = apiDocReader.getCommentOf(component, prop);
        const projectComment = projectReader.getCommentOf(component, prop);

        // Skip if both are null/empty - that's consistent
        if (!apiComment && !projectComment) {
          continue;
        }

        const difference = coloredDiff(apiComment, projectComment);

        if (difference) {
          inconsistentComments.push(`Component "${component}", prop "${prop}" diff:\n${difference}`);
        }
      }

      expect(inconsistentComments).toEqual([]);
    });

    /**
     * This list is temporary - these components have known inconsistencies,
     * and we are fixing them. This list will shrink over time as we fix the comments one component at a time.
     */
    const componentsWithInconsistentCommentsInStorybook = [
      'Area',
      'AreaChart',
      'Bar',
      'BarChart',
      'Brush',
      'CartesianAxis',
      'CartesianGrid',
      'Cell',
      'ComposedChart',
      'Cross',
      'Curve',
      'Dot',
      'ErrorBar',
      'Funnel',
      'FunnelChart',
      'Label',
      'LabelList',
      'Legend',
      'Line',
      'LineChart',
      'Pie',
      'PieChart',
      'PolarAngleAxis',
      'PolarGrid',
      'PolarRadiusAxis',
      'Polygon',
      'Radar',
      'RadarChart',
      'RadialBar',
      'RadialBarChart',
      'Rectangle',
      'ReferenceArea',
      'ReferenceDot',
      'ReferenceLine',
      'Sankey',
      'Scatter',
      'ScatterChart',
      'Sector',
      'SunburstChart',
      'Text',
      'Tooltip',
      'Trapezoid',
      'Treemap',
      'XAxis',
      'YAxis',
      'ZAxis',
    ];

    test.each(
      storybookReader
        .getPublicComponentNames()
        .filter(name => !componentsWithInconsistentCommentsInStorybook.includes(name)),
    )('if %s has comments in Storybook, they should match the project comments', component => {
      const allProps = storybookReader.getRechartsPropsOf(component);
      const inconsistentComments: string[] = [];

      for (const prop of allProps) {
        const storybookComment = storybookReader.getCommentOf(component, prop);
        const projectComment = projectReader.getCommentOf(component, prop);

        // Skip if both are null/empty - that's consistent
        if (!storybookComment && !projectComment) {
          continue;
        }

        if (!areCommentsSimilar(storybookComment, projectComment)) {
          inconsistentComments.push(
            `Component "${component}", prop "${prop}":\n` +
              `  Storybook: ${storybookComment || '(none)'}\n` +
              `  Project:   ${projectComment || '(none)'}`,
          );
        }
      }

      expect(inconsistentComments).toEqual([]);
    });

    /**
     * This list is temporary - these components have known inconsistencies,
     * and we are fixing them. This list will shrink over time as we fix the comments one component at a time.
     */
    const componentsWithInconsistentCommentsInApiDocAndStorybook = [
      'Area',
      'AreaChart',
      'Bar',
      'BarChart',
      'Brush',
      'CartesianGrid',
      'Cell',
      'ComposedChart',
      'Curve',
      'Dot',
      'Funnel',
      'FunnelChart',
      'Label',
      'LabelList',
      'Legend',
      'Line',
      'LineChart',
      'Pie',
      'PieChart',
      'PolarAngleAxis',
      'PolarGrid',
      'PolarRadiusAxis',
      'Polygon',
      'Radar',
      'RadarChart',
      'RadialBar',
      'RadialBarChart',
      'Rectangle',
      'ReferenceArea',
      'ReferenceDot',
      'ReferenceLine',
      'Sankey',
      'Scatter',
      'ScatterChart',
      'Sector',
      'Text',
      'Tooltip',
      'Trapezoid',
      'Treemap',
      'XAxis',
      'YAxis',
      'ZAxis',
    ];

    test.each(
      apiDocReader
        .getPublicComponentNames()
        .filter(name => !componentsWithInconsistentCommentsInApiDocAndStorybook.includes(name)),
    )('if %s has comments in both API docs and Storybook, they should match', component => {
      const apiProps = new Set(apiDocReader.getRechartsPropsOf(component));
      const storybookProps = new Set(storybookReader.getRechartsPropsOf(component));

      // Find common props
      const commonProps = Array.from(apiProps).filter(prop => storybookProps.has(prop));
      const inconsistentComments: string[] = [];

      for (const prop of commonProps) {
        const apiComment = apiDocReader.getCommentOf(component, prop);
        const storybookComment = storybookReader.getCommentOf(component, prop);

        // Skip if both are null/empty - that's consistent
        if (!apiComment && !storybookComment) {
          continue;
        }

        if (!areCommentsSimilar(apiComment, storybookComment)) {
          inconsistentComments.push(
            `Component "${component}", prop "${prop}":\n` +
              `  API doc:   ${apiComment || '(none)'}\n` +
              `  Storybook: ${storybookComment || '(none)'}`,
          );
        }
      }

      expect(inconsistentComments).toEqual([]);
    });
  });

  describe('cross-component prop consistency', () => {
    /**
     * Adjustable similarity threshold (0-1 scale)
     * - 0.0 = completely different
     * - 1.0 = identical
     * - 0.7 = recommended default (allows for some variation while catching major inconsistencies)
     *
     * This test compares JSDoc comments for props that are shared across multiple components.
     * For example, both Area and Bar have a `dataKey` prop - their comments should be similar.
     *
     * The similarity score is calculated using Levenshtein distance algorithm, which measures
     * the minimum number of single-character edits needed to transform one string into another.
     *
     * To adjust the strictness:
     * - Increase the threshold (e.g., 0.8) to catch only very different comments
     * - Decrease the threshold (e.g., 0.5) to catch more variations
     */
    const SIMILARITY_THRESHOLD = 0.7;

    /**
     * Some props are legit different across components due to their unique context/use case.
     * We can list those exceptions here to skip them in the test.
     */
    type CommentSimilarityException = {
      component: string;
      prop: string;
      reason: string;
    };

    /**
     * List of known exceptions where prop comments are intentionally different.
     * This list is permanent.
     * Only add new items here if there is a semantically valid reason to have different comments.
     * Do not use this as a workaround for inconsistent documentation!
     */
    const exceptions: ReadonlyArray<CommentSimilarityException> = [
      {
        component: 'ResponsiveContainer',
        prop: 'children',
        reason: 'discusses rendering multiple charts inside the container',
      },
      {
        component: 'Text',
        prop: 'children',
        reason: 'Text has special rules for children',
      },
      {
        component: 'Brush',
        prop: 'height',
        reason: 'Brush height is always in pixels',
      },
      {
        component: 'Brush',
        prop: 'width',
        reason: 'Brush width defaults to chart width if not specified, also it is in pixels',
      },
    ];

    // Build the prop-to-components map once for all tests
    const projectComponents = projectReader.getPublicComponentNames();
    const propToComponents = new Map<string, Array<{ component: string; comment: string | undefined }>>();

    for (const component of projectComponents) {
      if (componentsWithInconsistentCommentsInApiDoc.includes(component)) {
        // temporarily skip components with known inconsistencies
        continue;
      }
      const props = projectReader.getRechartsPropsOf(component);
      for (const prop of props) {
        if (exceptions.some(ex => ex.component === component && ex.prop === prop)) {
          continue;
        }
        const comment = projectReader.getCommentOf(component, prop);
        if (!propToComponents.has(prop)) {
          propToComponents.set(prop, []);
        }
        propToComponents.get(prop)!.push({ component, comment });
      }
    }

    // Filter to only props shared by multiple components with at least 2 comments
    const sharedPropsWithComments = Array.from(propToComponents.entries())
      .filter(([, components]) => {
        const componentsWithComments = components.filter(({ comment }) => comment && comment.trim() !== '');
        return componentsWithComments.length >= 2;
      })
      .map(([propName]) => propName);

    describe.each(sharedPropsWithComments)('shared prop "%s" should have similar JSDoc comments', propName => {
      const components = propToComponents.get(propName)!;
      const componentNames = components.map(c => c.component).join(', ');
      test(`across components ${componentNames}`, () => {
        const componentsWithComments = components.filter(({ comment }) => comment && comment.trim() !== '');

        const inconsistencies: string[] = [];

        // Compare all pairs of components with this prop
        for (let i = 0; i < componentsWithComments.length; i++) {
          for (let j = i + 1; j < componentsWithComments.length; j++) {
            const component1 = componentsWithComments[i];
            const component2 = componentsWithComments[j];

            const similarity = calculateSimilarityScore(component1.comment, component2.comment);

            if (similarity < SIMILARITY_THRESHOLD) {
              const diff = coloredDiff(component1.comment, component2.comment);
              inconsistencies.push(
                `Components "${component1.component}" and "${component2.component}":\n` +
                  `  ${component1.component}: ${component1.comment}\n` +
                  `  ${component2.component}: ${component2.comment}\n` +
                  `  Similarity: ${(similarity * 100).toFixed(1)}% (threshold: ${(SIMILARITY_THRESHOLD * 100).toFixed(1)}%)\n${
                    diff ? `  Diff: ${diff}\n` : ''
                  }`,
              );
            }
          }
        }

        if (inconsistencies.length > 0) {
          console.error(
            `Found ${inconsistencies.length} inconsistency(ies) for prop "${propName}":\n${inconsistencies.join('\n')}`,
          );
        }

        expect(inconsistencies).toEqual([]);
      });
    });
  });

  describe.todo('the type definition of each prop should be consistent between API docs, Storybook, and the project');
});

import { describe, expect, test } from 'vitest';
import { calculateSimilarityScore } from './util/calculateSimilarityScore';
import { coloredDiff } from './util/coloredDiff';
import { ProjectDocReader } from './readProject';
import { componentsWithInconsistentCommentsInApiDoc } from './componentsWithInconsistentCommentsInApiDoc';
import { commentSimilarityExceptions, CommentSimilarityGroup } from './commentSimilarityExceptions';
import { assertNotNull } from '../test/helper/assertNotNull';

describe('cross-component prop consistency', () => {
  const projectReader = new ProjectDocReader();

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

  // Build the prop-to-components map once for all tests
  const projectComponents = projectReader.getPublicComponentNames();
  const propToComponents = new Map<
    string,
    Array<{ component: string; propName: string; comment: string | undefined }>
  >();

  for (const component of projectComponents) {
    if (componentsWithInconsistentCommentsInApiDoc.includes(component)) {
      // temporarily skip components with known inconsistencies
      continue;
    }
    const props = projectReader.getRechartsPropsOf(component);
    for (const prop of props) {
      const exceptionIndex = commentSimilarityExceptions.findIndex(
        (group: CommentSimilarityGroup) =>
          (group.components.includes(component) || group.components.includes('*')) && group.props.includes(prop),
      );

      let key = prop;
      if (exceptionIndex > -1) {
        const exception = commentSimilarityExceptions[exceptionIndex];
        assertNotNull(exception);
        if (exception.components.includes('*')) {
          continue;
        }
        key = `${prop} (group: ${exceptionIndex}: ${exception.components.join(', ')})`;
      }

      const comment = projectReader.getCommentOf(component, prop);
      if (!propToComponents.has(key)) {
        propToComponents.set(key, []);
      }
      propToComponents.get(key)!.push({ component, comment, propName: prop });
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
    const components = propToComponents.get(propName);
    if (components == null) {
      throw new Error(`No components found for prop "${propName}"`);
    }
    const componentNames = components.map(c => c.component).join(', ');
    test(`across components ${componentNames}`, () => {
      const componentsWithComments = components.filter(({ comment }) => comment && comment.trim() !== '');

      const inconsistencies: string[] = [];

      // Compare all pairs of components with this prop
      for (let i = 0; i < componentsWithComments.length; i++) {
        for (let j = i + 1; j < componentsWithComments.length; j++) {
          const component1 = componentsWithComments[i];
          assertNotNull(component1);
          const component2 = componentsWithComments[j];
          assertNotNull(component2);

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

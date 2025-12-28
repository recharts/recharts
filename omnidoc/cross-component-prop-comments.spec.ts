import { describe, expect, test } from 'vitest';
import { calculateSimilarityScore } from './util/calculateSimilarityScore';
import { coloredDiff } from './util/coloredDiff';
import { ProjectDocReader } from './readProject';
import { componentsWithInconsistentCommentsInApiDoc } from './componentsWithInconsistentCommentsInApiDoc';

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

  /**
   * Some props are legit different across components due to their unique context/use case.
   * We can list those exceptions here to skip them in the test.
   */
  type CommentSimilarityException = {
    components: ReadonlyArray<string>;
    props: ReadonlyArray<string>;
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
      components: ['*'],
      props: ['children'],
      reason: 'Children comments vary widely based on component purpose',
    },
    {
      components: ['*'],
      props: ['hide'],
      reason: 'multiple components have hide, the behaviour is different for each',
    },
    {
      components: ['Brush', 'CartesianGrid', 'Cross', 'Legend', 'XAxis', 'YAxis', 'Rectangle', 'ErrorBar'],
      props: ['width', 'height'],
      reason: 'Many components assign different meanings to width/height',
    },
    {
      components: ['Cross', 'ReferenceDot', 'ReferenceLine'],
      props: ['x', 'y'],
      reason: `Cross and ReferenceDot positions define the center,
      which is different from other components where x/y coordinates define the top-left corner.
      This prop should better be named "cx", "cy" instead.`,
    },
    {
      components: ['Rectangle'],
      props: ['x', 'y'],
      reason: 'x and y in Rectangle are required, unlike Brush where they are calculated internally.',
    },
    {
      components: ['Curve'],
      props: ['layout'],
      reason: 'Curve layout means something else than the chart layout.',
    },
    {
      components: ['DefaultLegendContent', 'Legend'],
      props: ['layout'],
      reason: 'Legend layout means something else than the chart layout.',
    },
    {
      components: ['BarStack'],
      props: ['stackId'],
      reason: 'This sets stackId for all Bars inside the BarStack and so it has different description.',
    },
    {
      components: ['BarStack'],
      props: ['radius'],
      reason: 'Applies radius to all Bars inside the BarStack, different context than usual',
    },
    {
      components: ['Label', 'LabelList'],
      props: ['id'],
      reason: 'These ids are not generated automatically, unlike most other components',
    },
    {
      components: ['LabelList'],
      props: ['dataKey'],
      reason: 'LabelList dataKey has special complications compared to other components',
    },
    {
      components: ['Text'],
      props: ['width'],
      reason: 'has extra details on automated wrapping',
    },
    {
      components: ['ErrorBar'],
      props: ['dataKey'],
      reason: 'has extra information about error bar data structure',
    },
    {
      components: ['Scatter'],
      props: ['shape'],
      // https://github.com/recharts/recharts/issues/1753
      reason: 'unlike other graphical items, Scatter shape allows a string option for predefined shapes',
    },
    {
      components: ['Pie'],
      props: ['label'],
      reason: 'Pie has a custom label implementation',
    },
    {
      components: ['Dot', 'SunburstChart', 'PolarAngleAxis', 'PolarGrid'],
      props: ['cx', 'cy'],
      reason: 'These components do not support percentages unlike other components',
    },
    {
      components: ['Pie'],
      props: ['shape'],
      reason: 'Pie shape receives activeIndex prop but other components do not',
    },
    {
      components: ['Label'],
      props: ['content'],
      reason: 'In other components, content is called N times. In Label, content is called once.',
    },
    {
      components: ['*'],
      props: ['type'],
      reason: 'We have "type" in axes, and "type" in curves, with different meanings',
    },
    {
      components: ['PolarAngleAxis', 'PolarRadiusAxis'],
      props: ['radius'],
      reason:
        'Radius in polar charts means radius from center, unlike cartesian context where it means radius of the corner',
    },
    {
      components: ['PolarGrid'],
      props: ['innerRadius', 'outerRadius'],
      reason: 'Unlike other components, this can not be a percentage string',
    },
    {
      components: ['PolarRadiusAxis'],
      props: ['angle'],
      reason:
        'PolarRadiusAxis angle means rotation of the whole axis, unlike other components where it means rotation of text',
    },
    {
      components: ['PolarAngleAxis'],
      props: ['ticks'],
      reason: 'PolarAngleAxis ticks are different type for some reason, unlike other axis components',
    },
    {
      components: ['PolarRadiusAxis', 'PolarAngleAxis', 'XAxis', 'YAxis', 'ZAxis'],
      props: ['label'],
      reason: 'Axis label renders one element, graphical items label render one per data point',
    },
    {
      components: ['PolarRadiusAxis', 'PolarAngleAxis', 'XAxis', 'YAxis', 'ZAxis'],
      props: ['name'],
      reason: 'name does similar thing but from different point of view in axes vs graphical items',
    },
    {
      components: ['XAxis'],
      props: ['xAxisId'],
      reason: 'Axis ID describes the axis itself, not a relation to other components',
    },
    {
      components: ['YAxis'],
      props: ['yAxisId'],
      reason: 'Axis ID describes the axis itself, not a relation to other components',
    },
    {
      components: ['ZAxis'],
      props: ['zAxisId'],
      reason: 'Axis ID describes the axis itself, not a relation to other components',
    },
    {
      components: ['PolarAngleAxis'],
      props: ['axisLine'],
      reason: 'Unlike other axes, PolarAngleAxis.axisLine does not accept a boolean value',
    },
    {
      components: ['Area', 'Bar', 'Line', 'Scatter', 'Radar', 'RadialBar', 'Pie'],
      props: ['label'],
      reason:
        'label in graphical elements describes multiple labels, unlike axes and reference elements which describe a single label.',
    },
    {
      components: ['ReferenceLine'],
      props: ['position'],
      reason: `ReferenceLine.position describes position relative to the band category,
      unlike other components where position describes placement in the chart's coordinate system.`,
    },
  ];

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
      if (
        exceptions.some(
          ex => (ex.components.includes(component) || ex.components.includes('*')) && ex.props.includes(prop),
        )
      ) {
        continue;
      }
      const comment = projectReader.getCommentOf(component, prop);
      if (!propToComponents.has(prop)) {
        propToComponents.set(prop, []);
      }
      propToComponents.get(prop)!.push({ component, comment, propName: prop });
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
    const components = propToComponents.get(propName)?.filter(({ propName: p }) => p === propName);
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

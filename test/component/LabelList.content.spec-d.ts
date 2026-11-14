import { describe, it, expectTypeOf } from 'vitest';
import { type LabelListProps, type LabelProps } from '../../src';

type LabelListContentFunction = Extract<NonNullable<LabelListProps['content']>, (props: LabelProps) => unknown>;

/**
 * `dataKey` can return an array or an object. The content callback's `value`
 * has to accept that without a narrowing cast.
 * https://github.com/recharts/recharts/issues/5849
 */
describe('LabelList content value', () => {
  it('is any, so arrays and objects from dataKey need no narrowing', () => {
    expectTypeOf<Parameters<LabelListContentFunction>[0]['value']>().toBeAny();

    const renderCustomizedLabel = (props: LabelProps) => {
      const { value } = props;
      return `${value[0]} ${value[1]} ${value.name}`;
    };

    const content: LabelListContentFunction = renderCustomizedLabel;
    expectTypeOf(content).parameters.toEqualTypeOf<[LabelProps]>();
  });
});

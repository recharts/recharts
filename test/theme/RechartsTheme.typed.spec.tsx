import * as React from 'react';
import type { CSSProperties, HTMLAttributes, SVGProps } from 'react';
import { describe, it } from 'vitest';
import { Text } from '../../src';
import type { RechartsTheme, TextProps } from '../../src';
import { assertType } from '../helper/assertType';

type Typography = NonNullable<RechartsTheme['typography']>;

describe('RechartsTheme typography types', () => {
  it('is usable as CSS, HTML, SVG, and Text props', () => {
    const typography: Typography = {
      alignmentBaseline: 'middle',
      backgroundColor: 'transparent',
      color: 'rebeccapurple',
      fontFamily: 'sans-serif',
      fontSize: 16,
      fontWeight: 'bold',
      maxLines: 2,
      textAnchor: 'middle',
    };

    assertType<CSSProperties>(typography);
    assertType<HTMLAttributes<HTMLDivElement>['style']>(typography);
    assertType<SVGProps<SVGTextElement>>(typography);
    assertType<TextProps>(typography);
    assertType(<div style={typography} />);
    assertType(<text {...typography} />);
    assertType(<Text {...typography}>text</Text>);
  });

  it('rejects CSS values that are not valid SVG or Text props', () => {
    const svgIncompatibleTypography: Typography = {
      // @ts-expect-error - SVG text elements do not accept this CSS-only global value.
      alignmentBaseline: '-moz-initial',
    };
    const textAnchorIncompatibleTypography: Typography = {
      // @ts-expect-error - Recharts Text does not support this CSS global value.
      textAnchor: 'initial',
    };
    const maxLinesIncompatibleTypography: Typography = {
      // @ts-expect-error - Recharts Text expects a numeric line limit.
      maxLines: 'none',
    };

    assertType<Typography>(svgIncompatibleTypography);
    assertType<Typography>(textAnchorIncompatibleTypography);
    assertType<Typography>(maxLinesIncompatibleTypography);
  });
});

import { describe, expect, it } from 'vitest';
import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import {
  Curve,
  Dot,
  Polygon,
  RechartsFill,
  RechartsFillDefinitionProps,
  Rectangle,
  Sector,
  Symbols,
  Trapezoid,
  pattern,
  patterns,
} from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

const fillObject: RechartsFill = { color: 'blue', definition: pattern(patterns.dots) };
const points = [
  { x: 0, y: 0 },
  { x: 10, y: 10 },
  { x: 20, y: 0 },
];

/**
 * Each case: the shape name, how to render it with a fill, and the selector of the element that paints.
 */
const shapes: ReadonlyArray<[string, (fill: string | RechartsFill) => ReactElement, string]> = [
  ['Rectangle', fill => <Rectangle x={0} y={0} width={10} height={10} fill={fill} />, 'svg > path'],
  [
    'Sector',
    fill => <Sector cx={50} cy={50} outerRadius={20} startAngle={0} endAngle={90} fill={fill} />,
    'svg > path',
  ],
  [
    'Trapezoid',
    fill => <Trapezoid x={0} y={0} upperWidth={10} lowerWidth={20} height={10} fill={fill} />,
    'path.recharts-trapezoid',
  ],
  ['Polygon', fill => <Polygon points={points} fill={fill} />, 'svg > path'],
  ['Symbols', fill => <Symbols cx={10} cy={10} type="star" fill={fill} />, 'svg > path'],
  ['Curve', fill => <Curve points={points} fill={fill} />, 'svg > path'],
  ['Dot', fill => <Dot cx={10} cy={10} r={5} fill={fill} />, 'svg > circle'],
];

describe('shapes with a fill object', () => {
  it.each(shapes)('%s should paint with its own definition', (_name, renderShape, selector) => {
    const { container } = render(<svg>{renderShape(fillObject)}</svg>);

    const shape = container.querySelector(selector);
    assertNotNull(shape);
    const match = shape.getAttribute('fill')?.match(/^url\(#(.+)\)$/);
    assertNotNull(match);
    const patternElement = container.querySelector(`pattern[id="${match[1]}"]`);
    assertNotNull(patternElement);
    expect(patternElement.querySelector('rect')).toHaveAttribute('fill', 'blue');
  });

  it.each(shapes)('%s should keep working with a color string', (_name, renderShape, selector) => {
    const { container } = render(<svg>{renderShape('red')}</svg>);

    expect(container.querySelector(selector)).toHaveAttribute('fill', 'red');
    expect(container.querySelector('defs')).not.toBeInTheDocument();
  });

  it('should give the definition the size of a Rectangle, Dot, Trapezoid, or Symbols as bounds', () => {
    const received: Array<RechartsFillDefinitionProps['bounds']> = [];
    function RecordBounds({ id, bounds }: RechartsFillDefinitionProps) {
      received.push(bounds);
      return <linearGradient id={id} />;
    }
    const fill: RechartsFill = { color: 'blue', definition: RecordBounds };
    render(
      <svg>
        <Rectangle x={0} y={0} width={40} height={-20} fill={fill} />
        <Dot cx={10} cy={10} r={5} fill={fill} />
        <Trapezoid x={0} y={0} upperWidth={10} lowerWidth={30} height={15} fill={fill} />
        <Symbols cx={10} cy={10} size={100} fill={fill} />
      </svg>,
    );

    expect(received).toEqual([
      { width: 40, height: 20 },
      { width: 10, height: 10 },
      { width: 30, height: 15 },
      { width: 10, height: 10 },
    ]);
  });
});

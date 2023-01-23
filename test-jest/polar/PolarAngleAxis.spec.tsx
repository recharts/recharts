import React from 'react';
import { render } from '@testing-library/react';
import { Surface, PolarAngleAxis } from '../../src';
import { TickItem } from '../../src/util/types';

describe('<PolarAngleAxis />', () => {
  const ticks = [{ value: 10 }, { value: 1000 }, { value: 20 }, { value: 40 }, { value: 90 }];

  test('Renders 5 ticks in when ticks is not empty', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis cx={250} cy={250} radius={50} ticks={ticks as TickItem[]} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-angle-axis-tick')).toHaveLength(ticks.length);
  });

  test('Renders 5 ticks in when tick is set to be a react element', () => {
    const Tick = (props: any) => {
      const { x, y } = props;
      return (
        <text x={x} y={y} className="customized-tick">
          test
        </text>
      );
    };
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis cx={250} cy={250} radius={50} tick={<Tick />} ticks={ticks as TickItem[]} />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-tick')).toHaveLength(ticks.length);
  });

  test('Renders 5 ticks in when tick is set to be a function', () => {
    const Tick = (props: any) => {
      const { x, y } = props;
      return (
        <text x={x} y={y} className="customized-tick">
          test
        </text>
      );
    };
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis cx={250} cy={250} radius={50} tick={Tick} ticks={ticks as TickItem[]} axisLineType="circle" />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-tick')).toHaveLength(ticks.length);
  });

  test("Don't Renders any ticks in when ticks is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis cx={250} cy={250} radius={50} ticks={[]} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-angle-axis-tick')).toHaveLength(0);
  });
});

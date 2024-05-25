import React from 'react';
import { render, screen } from '@testing-library/react';
import { Surface, PolarAngleAxis, RadarChart, Radar, RadialBarChart, RadialBar } from '../../src';
import { TickItem } from '../../src/util/types';
import { exampleRadarData } from '../_data';
import { pageData } from '../../storybook/stories/data/Page';

describe('<PolarAngleAxis />', () => {
  const ticks: ReadonlyArray<TickItem> = [
    { coordinate: 10 },
    { coordinate: 1000 },
    { coordinate: 20 },
    { coordinate: 40 },
    { coordinate: 90 },
  ];

  test('Renders 5 ticks when ticks are not empty', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis cx={250} cy={250} radius={50} ticks={ticks} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-angle-axis-tick')).toHaveLength(ticks.length);
  });

  test('Renders 5 ticks when tick is set to be a react element', () => {
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
        <PolarAngleAxis cx={250} cy={250} radius={50} tick={<Tick />} ticks={ticks} />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-tick')).toHaveLength(ticks.length);
  });

  test('Renders 5 ticks when tick is set to be a function', () => {
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

  test("Don't render any ticks in when ticks is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis cx={250} cy={250} radius={50} ticks={[]} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-angle-axis-tick')).toHaveLength(0);
  });

  describe('Compatible charts', () => {
    test('Renders polar angle axis with RadarChart', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis dataKey="value" />
        </RadarChart>,
      );

      expect(screen.getByText('420')).toBeInTheDocument();
      expect(container.querySelectorAll('.recharts-polar-angle-axis-tick')).toHaveLength(8);
    });

    test('Renders polar angle axis with RadialBarChart', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={pageData}>
          <RadialBar dataKey="uv" />
          <PolarAngleAxis />
        </RadialBarChart>,
      );

      expect(screen.getByText('700')).toBeInTheDocument();
      expect(container.querySelectorAll('.recharts-polar-angle-axis-tick')).toHaveLength(9);
    });
  });
});

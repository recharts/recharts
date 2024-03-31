import React from 'react';
import { render, screen } from '@testing-library/react';
import { exampleRadarData } from '../_data';
import { Surface, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart } from '../../src';
import { TickItem } from '../../src/util/types';
import { pageData } from '../../storybook/stories/data/Page';

describe('<PolarRadiusAxis />', () => {
  const ticks: TickItem[] = [
    { coordinate: 10 },
    { coordinate: 1000 },
    { coordinate: 20 },
    { coordinate: 40 },
    { coordinate: 90 },
  ];

  test('Renders 5 ticks when orientation is set to be middle', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis orientation="middle" cx={250} cy={250} ticks={ticks} label="test" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-radius-axis-tick')).toHaveLength(5);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  test('Renders 5 ticks when orientation is set to be left', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis orientation="left" cx={250} cy={250} ticks={ticks} label="test" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-radius-axis-tick')).toHaveLength(5);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  test('Renders 5 ticks when tick is set to be a function', () => {
    const renderTick = (props: any) => {
      const { payload, x, y } = props;

      return (
        <text x={x} y={y} className="customized-tick">
          {payload.value}
        </text>
      );
    };
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis
          orientation="left"
          cx={250}
          cy={250}
          ticks={ticks as TickItem[]}
          label="test"
          tick={renderTick}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-tick')).toHaveLength(5);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  test('Renders 5 ticks when tick is set to be a react element', () => {
    const Tick = (props: any) => {
      const { payload, x, y } = props;

      return (
        <text x={x} y={y} className="customized-tick">
          {payload.value}
        </text>
      );
    };
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis
          orientation="left"
          cx={250}
          cy={250}
          ticks={ticks as TickItem[]}
          label="test"
          tick={<Tick />}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-tick')).toHaveLength(5);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  test('Renders label when label is set to be a function', () => {
    const renderLabel = (props: any) => {
      const { x, y } = props;

      return (
        <text x={x} y={y} className="customized-label">
          any
        </text>
      );
    };
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis orientation="left" cx={250} cy={250} ticks={ticks as TickItem[]} label={renderLabel} />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-label')).toHaveLength(1);
  });

  test('Renders label when label is set to be a react element', () => {
    const Label = (props: any) => {
      const { x, y } = props;

      return (
        <text x={x} y={y} className="customized-label">
          any
        </text>
      );
    };
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis orientation="left" cx={250} cy={250} ticks={ticks} label={<Label />} />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-label')).toHaveLength(1);
  });

  test("Don't Renders any ticks in when ticks is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis orientation="left" cx={250} cy={250} ticks={[]} label="test" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-radius-axis-tick')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  describe('Compatible charts', () => {
    test('Renders polar radius axis with RadarChart', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarRadiusAxis dataKey="value" label="test" />
        </RadarChart>,
      );

      expect(screen.getByText('1000')).toBeInTheDocument();
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(container.querySelectorAll('.recharts-polar-radius-axis-tick')).toHaveLength(5);
    });

    test('Renders polar radius axis with RadialBarChart', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={pageData}>
          <RadialBar dataKey="uv" />
          <PolarRadiusAxis type="number" dataKey="uv" />
        </RadialBarChart>,
      );

      expect(screen.getByText('1520')).toBeInTheDocument();
      expect(container.querySelectorAll('.recharts-polar-radius-axis-tick')).toHaveLength(7);
    });
  });
});

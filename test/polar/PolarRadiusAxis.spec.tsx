import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { exampleRadarData, PageData } from '../_data';
import { Customized, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, Surface } from '../../src';
import { TickItem } from '../../src/util/types';
import { assertNotNull } from '../helper/assertNotNull';
import { useAppSelector } from '../../src/state/hooks';
import {
  implicitRadiusAxis,
  selectRadiusAxis,
  selectRadiusAxisRangeWithReversed,
} from '../../src/state/selectors/polarAxisSelectors';
import { RadiusAxisSettings } from '../../src/state/polarAxisSlice';

type ExpectedRadiusAxisTick = {
  x: string;
  y: string;
  transform: string;
  textContent: string;
};

function expectRadiusAxisTicks(container: Element, expectedTicks: ReadonlyArray<ExpectedRadiusAxisTick>) {
  assertNotNull(container);
  const allTicks = container.querySelectorAll('.recharts-polar-radius-axis-tick-value');

  const actualTicks = Array.from(allTicks).map(tick => {
    return {
      x: tick.getAttribute('x'),
      y: tick.getAttribute('y'),
      transform: tick.getAttribute('transform'),
      textContent: tick.textContent,
    };
  });

  expect(actualTicks).toEqual(expectedTicks);
}

type ExpectedLabel = {
  x: string;
  y: string;
  textContent: string;
};

function expectRadiusAxisLabel(container: Element, expectedLabel: ExpectedLabel | undefined) {
  assertNotNull(container);
  const allLabels = container.querySelectorAll('.recharts-label');

  const actualLabels = Array.from(allLabels).map(label => {
    return {
      x: label.getAttribute('x'),
      y: label.getAttribute('y'),
      textContent: label.textContent,
    };
  });

  if (expectedLabel == null) {
    expect(actualLabels).toEqual([]);
  } else {
    expect(actualLabels).toEqual([expectedLabel]);
  }
}

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

    expectRadiusAxisTicks(container, [
      {
        textContent: '',
        transform: 'rotate(90, 260, 250)',
        x: '260',
        y: '250',
      },
      {
        textContent: '',
        transform: 'rotate(90, 1250, 250)',
        x: '1250',
        y: '250',
      },
      {
        textContent: '',
        transform: 'rotate(90, 270, 250)',
        x: '270',
        y: '250',
      },
      {
        textContent: '',
        transform: 'rotate(90, 290, 250)',
        x: '290',
        y: '250',
      },
      {
        textContent: '',
        transform: 'rotate(90, 340, 250)',
        x: '340',
        y: '250',
      },
    ]);

    expectRadiusAxisLabel(container, {
      textContent: 'test',
      x: '755',
      y: '250',
    });
  });

  test('Renders 5 ticks when orientation is set to be left', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis orientation="left" cx={250} cy={250} ticks={ticks} label="test" />
      </Surface>,
    );

    expectRadiusAxisTicks(container, [
      {
        textContent: '',
        transform: 'rotate(90, 260, 250)',
        x: '260',
        y: '250',
      },
      {
        textContent: '',
        transform: 'rotate(90, 1250, 250)',
        x: '1250',
        y: '250',
      },
      {
        textContent: '',
        transform: 'rotate(90, 270, 250)',
        x: '270',
        y: '250',
      },
      {
        textContent: '',
        transform: 'rotate(90, 290, 250)',
        x: '290',
        y: '250',
      },
      {
        textContent: '',
        transform: 'rotate(90, 340, 250)',
        x: '340',
        y: '250',
      },
    ]);

    expectRadiusAxisLabel(container, {
      textContent: 'test',
      x: '755',
      y: '250',
    });
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

  test("Don't Renders any ticks or label in when ticks is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis orientation="left" cx={250} cy={250} ticks={[]} label="test" />
      </Surface>,
    );

    expectRadiusAxisTicks(container, []);

    expectRadiusAxisLabel(container, undefined);
  });

  describe('in RadarChart', () => {
    test('Renders polar radius axis', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarRadiusAxis dataKey="value" label="test" />
        </RadarChart>,
      );

      expectRadiusAxisTicks(container, [
        {
          textContent: '0',
          transform: 'rotate(90, 250, 250)',
          x: '250',
          y: '250',
        },
        {
          textContent: '250',
          transform: 'rotate(90, 299, 250)',
          x: '299',
          y: '250',
        },
        {
          textContent: '500',
          transform: 'rotate(90, 348, 250)',
          x: '348',
          y: '250',
        },
        {
          textContent: '750',
          transform: 'rotate(90, 397, 250)',
          x: '397',
          y: '250',
        },
        {
          textContent: '1000',
          transform: 'rotate(90, 446, 250)',
          x: '446',
          y: '250',
        },
      ]);

      expectRadiusAxisLabel(container, {
        textContent: 'test',
        x: '348',
        y: '250',
      });
    });

    test('tickCount', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarRadiusAxis dataKey="value" tickCount={3} />
        </RadarChart>,
      );

      expectRadiusAxisTicks(container, [
        {
          textContent: '0',
          transform: 'rotate(90, 250, 250)',
          x: '250',
          y: '250',
        },
        {
          textContent: '500',
          transform: 'rotate(90, 348, 250)',
          x: '348',
          y: '250',
        },
        {
          textContent: '1000',
          transform: 'rotate(90, 446, 250)',
          x: '446',
          y: '250',
        },
      ]);
    });

    test('Renders categorical polar radius axis', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          <PolarRadiusAxis dataKey="name" type="category" label="test" />
        </RadialBarChart>,
      );

      expectRadiusAxisTicks(container, [
        {
          textContent: 'Page A',
          transform: 'rotate(90, 266.3333333333333, 250)',
          x: '266.3333333333333',
          y: '250',
        },
        {
          textContent: 'Page B',
          transform: 'rotate(90, 299, 250)',
          x: '299',
          y: '250',
        },
        {
          textContent: 'Page C',
          transform: 'rotate(90, 331.66666666666663, 250)',
          x: '331.66666666666663',
          y: '250',
        },
        {
          textContent: 'Page D',
          transform: 'rotate(90, 364.3333333333333, 250)',
          x: '364.3333333333333',
          y: '250',
        },
        {
          textContent: 'Page E',
          transform: 'rotate(90, 397, 250)',
          x: '397',
          y: '250',
        },
        {
          textContent: 'Page F',
          transform: 'rotate(90, 429.66666666666663, 250)',
          x: '429.66666666666663',
          y: '250',
        },
      ]);

      expectRadiusAxisLabel(container, {
        textContent: 'test',
        x: '348',
        y: '250',
      });
    });
  });

  describe('in RadialBarChart', () => {
    test('Renders numerical polar radius axis', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          <PolarRadiusAxis dataKey="uv" type="number" label="test" />
        </RadialBarChart>,
      );

      expectRadiusAxisTicks(container, [
        {
          textContent: '400',
          transform: 'rotate(90, 348, 250)',
          x: '348',
          y: '250',
        },
      ]);

      expectRadiusAxisLabel(container, {
        textContent: 'test',
        x: '299',
        y: '250',
      });
    });

    test('ignores tickCount', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          <PolarRadiusAxis dataKey="uv" type="number" label="test" tickCount={3} />
        </RadialBarChart>,
      );

      expectRadiusAxisTicks(container, [
        {
          textContent: '400',
          transform: 'rotate(90, 348, 250)',
          x: '348',
          y: '250',
        },
      ]);

      expectRadiusAxisLabel(container, {
        textContent: 'test',
        x: '299',
        y: '250',
      });
    });
  });

  describe('state integration', () => {
    it('should report its settings to Redux store, and remove it when component is removed', () => {
      const radiusAxisSpy = vi.fn();
      const Comp = (): null => {
        radiusAxisSpy(useAppSelector(state => selectRadiusAxis(state, 0)));
        return null;
      };
      const { rerender } = render(
        <RadarChart width={1} height={2}>
          <PolarRadiusAxis />
          <Customized component={Comp} />
        </RadarChart>,
      );
      const expectedAxis: RadiusAxisSettings = {
        allowDataOverflow: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        includeHidden: undefined,
        name: undefined,
        reversed: undefined,
        scale: 'auto',
        type: 'number',
        unit: undefined,
        id: 0,
      };
      expect(radiusAxisSpy).toHaveBeenLastCalledWith(expectedAxis);

      rerender(
        <RadarChart width={1} height={2}>
          <Customized component={Comp} />
        </RadarChart>,
      );
      expect(radiusAxisSpy).toHaveBeenLastCalledWith(implicitRadiusAxis);
      expect(radiusAxisSpy).toHaveBeenCalledTimes(5);
    });

    it('should select radius axis settings', () => {
      const radiusAxisSpy = vi.fn();
      const radiusAxisRangeSpy = vi.fn();
      const Comp = (): null => {
        radiusAxisSpy(useAppSelector(state => selectRadiusAxis(state, 'radius-id')));
        radiusAxisRangeSpy(useAppSelector(state => selectRadiusAxisRangeWithReversed(state, 'radius-id')));
        return null;
      };
      render(
        <RadarChart width={300} height={200} data={exampleRadarData}>
          <Radar dataKey="value" radiusAxisId="radius-id" />
          <PolarRadiusAxis
            allowDuplicatedCategory={false}
            type="category"
            radiusAxisId="radius-id"
            allowDataOverflow
            scale="log"
            reversed
            name="radius-name"
            dataKey="value"
          />
          <Customized component={Comp} />
        </RadarChart>,
      );
      const expectedAxis: RadiusAxisSettings = {
        allowDataOverflow: true,
        allowDuplicatedCategory: false,
        dataKey: 'value',
        includeHidden: undefined,
        name: 'radius-name',
        reversed: true,
        scale: 'log',
        type: 'category',
        unit: undefined,
        id: 'radius-id',
      };
      expect(radiusAxisSpy).toHaveBeenLastCalledWith(expectedAxis);

      expect(radiusAxisRangeSpy).toHaveBeenLastCalledWith([76, 0]);
    });
  });
});

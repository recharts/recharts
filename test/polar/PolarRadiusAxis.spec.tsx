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
import { selectAxisDomain, selectRealScaleType } from '../../src/state/selectors/axisSelectors';

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
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="uv" />
          <PolarRadiusAxis dataKey="name" type="category" label="test" />
        </RadarChart>,
      );

      expectRadiusAxisTicks(container, [
        {
          textContent: 'iPhone 3GS',
          transform: 'rotate(90, 262.25, 250)',
          x: '262.25',
          y: '250',
        },
        {
          textContent: 'iPhone 4',
          transform: 'rotate(90, 286.75, 250)',
          x: '286.75',
          y: '250',
        },
        {
          textContent: 'iPhone 4s',
          transform: 'rotate(90, 311.25, 250)',
          x: '311.25',
          y: '250',
        },
        {
          textContent: 'iPhone 5',
          transform: 'rotate(90, 335.75, 250)',
          x: '335.75',
          y: '250',
        },
        {
          textContent: 'iPhone 5s',
          transform: 'rotate(90, 360.25, 250)',
          x: '360.25',
          y: '250',
        },
        {
          textContent: 'iPhone 6',
          transform: 'rotate(90, 384.75, 250)',
          x: '384.75',
          y: '250',
        },
        {
          textContent: 'iPhone 6s',
          transform: 'rotate(90, 409.25, 250)',
          x: '409.25',
          y: '250',
        },
        {
          textContent: 'iPhone 5se',
          transform: 'rotate(90, 433.75, 250)',
          x: '433.75',
          y: '250',
        },
      ]);

      expectRadiusAxisLabel(container, {
        textContent: 'test',
        x: '348',
        y: '250',
      });
    });

    it('defaults to linear scale', () => {
      const realScaleTypeSpy = vi.fn();
      const Comp = (): null => {
        realScaleTypeSpy(useAppSelector(state => selectRealScaleType(state, 'radiusAxis', 'radius-id')));
        return null;
      };

      render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="uv" radiusAxisId="radius-id" />
          <PolarRadiusAxis dataKey="uv" radiusAxisId="radius-id" />
          <Customized component={Comp} />
        </RadarChart>,
      );

      expect(realScaleTypeSpy).toHaveBeenLastCalledWith('linear');
      expect(realScaleTypeSpy).toHaveBeenCalledTimes(3);
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

    it('defaults to band scale', () => {
      const realScaleTypeSpy = vi.fn();
      const Comp = (): null => {
        realScaleTypeSpy(useAppSelector(state => selectRealScaleType(state, 'radiusAxis', 'radius-id')));
        return null;
      };

      render(
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" radiusAxisId="radius-id" />
          <PolarRadiusAxis dataKey="uv" radiusAxisId="radius-id" />
          <Customized component={Comp} />
        </RadialBarChart>,
      );

      expect(realScaleTypeSpy).toHaveBeenLastCalledWith('band');
      expect(realScaleTypeSpy).toHaveBeenCalledTimes(3);
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
        domain: undefined,
        allowDataOverflow: false,
        allowDecimals: undefined,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        id: 0,
        includeHidden: undefined,
        name: undefined,
        reversed: undefined,
        scale: 'auto',
        tick: true,
        tickCount: 5,
        ticks: undefined,
        type: 'number',
        unit: undefined,
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
      const radiusAxisDomainSpy = vi.fn();
      const Comp = (): null => {
        radiusAxisSpy(useAppSelector(state => selectRadiusAxis(state, 'radius-id')));
        radiusAxisRangeSpy(useAppSelector(state => selectRadiusAxisRangeWithReversed(state, 'radius-id')));
        radiusAxisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'radiusAxis', 'radius-id')));
        return null;
      };
      const exampleTicks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
            tick={false}
            // @ts-expect-error the type does not match. Is RadiusAxis really expecting what it says?
            ticks={exampleTicks}
            tickCount={9}
            allowDecimals
            domain={[100, 500]}
          />
          <Customized component={Comp} />
        </RadarChart>,
      );
      const expectedAxis: RadiusAxisSettings = {
        domain: [100, 500],
        allowDataOverflow: true,
        allowDecimals: true,
        allowDuplicatedCategory: false,
        dataKey: 'value',
        id: 'radius-id',
        includeHidden: undefined,
        name: 'radius-name',
        reversed: true,
        scale: 'log',
        tick: false,
        tickCount: 9,
        ticks: exampleTicks,
        type: 'category',
        unit: undefined,
      };
      expect(radiusAxisSpy).toHaveBeenLastCalledWith(expectedAxis);
      expect(radiusAxisSpy).toHaveBeenCalledTimes(3);

      expect(radiusAxisRangeSpy).toHaveBeenLastCalledWith([76, 0]);
      expect(radiusAxisRangeSpy).toHaveBeenCalledTimes(3);

      expect(radiusAxisDomainSpy).toHaveBeenLastCalledWith([420, 460, 999, 500, 864, 650, 765, 365]);
      expect(radiusAxisDomainSpy).toHaveBeenCalledTimes(3);
    });

    it('should select numerical radius axis domain', () => {
      const radiusAxisDomainSpy = vi.fn();
      const realScaleTypeSpy = vi.fn();
      const Comp = (): null => {
        radiusAxisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'radiusAxis', 'radius-id')));
        realScaleTypeSpy(useAppSelector(state => selectRealScaleType(state, 'radiusAxis', 'radius-id')));
        return null;
      };

      render(
        <RadarChart width={300} height={200} data={exampleRadarData}>
          <Radar dataKey="value" radiusAxisId="radius-id" />
          <PolarRadiusAxis dataKey="value" radiusAxisId="radius-id" />
          <Customized component={Comp} />
        </RadarChart>,
      );

      expect(radiusAxisDomainSpy).toHaveBeenLastCalledWith([0, 999]);
      expect(radiusAxisDomainSpy).toHaveBeenCalledTimes(3);

      expect(realScaleTypeSpy).toHaveBeenLastCalledWith('linear');
      expect(realScaleTypeSpy).toHaveBeenCalledTimes(3);
    });
  });
});

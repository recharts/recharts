import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { exampleRadarData, PageData } from '../_data';
import { PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { useAppSelector } from '../../src/state/hooks';
import {
  implicitRadialBarRadiusAxis,
  implicitRadiusAxis,
  selectRadiusAxis,
  selectRadiusAxisRangeWithReversed,
} from '../../src/state/selectors/polarAxisSelectors';
import { RadiusAxisSettings } from '../../src/state/polarAxisSlice';
import { selectAxisDomain, selectRealScaleType } from '../../src/state/selectors/axisSelectors';
import {
  selectPolarAxisDomain,
  selectPolarAxisDomainIncludingNiceTicks,
} from '../../src/state/selectors/polarSelectors';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { selectPolarAxisScale } from '../../src/state/selectors/polarScaleSelectors';
import { expectLastCalledWithScale } from '../helper/expectScale';
import { useIsPanorama } from '../../src/context/PanoramaContext';

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
  describe('in RadarChart', () => {
    describe('with numerical dataKey', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarRadiusAxis orientation="middle" cx={250} cy={250} label="test" dataKey="value" />
          {children}
        </RadarChart>
      ));

      it('should select angle settings', () => {
        const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: true,
          dataKey: 'value',
          domain: undefined,
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
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 999]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('linear');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select domain with nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomainIncludingNiceTicks(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 1000]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([0, 196]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
        expectLastCalledWithScale(spy, {
          domain: [0, 1000],
          range: [0, 196],
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should render ticks', () => {
        const { container } = renderTestCase();

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

      it('should render label', () => {
        const { container } = renderTestCase();

        expectRadiusAxisLabel(container, {
          textContent: 'test',
          x: '348',
          y: '250',
        });
      });
    });

    describe('with categorical dataKey', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarRadiusAxis label="test" dataKey="name" type="category" />
          {children}
        </RadarChart>
      ));

      it('should select angle settings', () => {
        const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: true,
          dataKey: 'name',
          domain: undefined,
          id: 0,
          includeHidden: undefined,
          name: undefined,
          reversed: undefined,
          scale: 'auto',
          tick: true,
          tickCount: 5,
          ticks: undefined,
          type: 'category',
          unit: undefined,
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          'iPhone 3GS',
          'iPhone 4',
          'iPhone 4s',
          'iPhone 5',
          'iPhone 5s',
          'iPhone 6',
          'iPhone 6s',
          'iPhone 5se',
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('band');
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select domain with nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomainIncludingNiceTicks(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          'iPhone 3GS',
          'iPhone 4',
          'iPhone 4s',
          'iPhone 5',
          'iPhone 5s',
          'iPhone 6',
          'iPhone 6s',
          'iPhone 5se',
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should render ticks', () => {
        const { container } = renderTestCase();

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
      });

      it('should render label', () => {
        const { container } = renderTestCase();

        expectRadiusAxisLabel(container, {
          textContent: 'test',
          x: '348',
          y: '250',
        });
      });
    });

    describe('with default axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarRadiusAxis />
          <Radar dataKey="value" />
          {children}
        </RadarChart>
      ));

      it('should select axis settings', () => {
        const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: true,
          dataKey: undefined,
          domain: undefined,
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
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 999]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('linear');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select domain with nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomainIncludingNiceTicks(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 1000]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([0, 196]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
        expectLastCalledWithScale(spy, {
          domain: [0, 1000],
          range: [0, 196],
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should render ticks', () => {
        const { container } = renderTestCase();

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
      });

      it('should not render label', () => {
        const { container } = renderTestCase();

        expectRadiusAxisLabel(container, null);
      });
    });

    describe('with implicit axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          {children}
        </RadarChart>
      ));

      it('should select angle settings', () => {
        const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith(implicitRadiusAxis);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 999]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('linear');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select domain with nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomainIncludingNiceTicks(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 1000]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([0, 196]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
        expectLastCalledWithScale(spy, {
          domain: [0, 1000],
          range: [0, 196],
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should not render ticks', () => {
        const { container } = renderTestCase();

        expectRadiusAxisTicks(container, []);
      });

      it('should not render label', () => {
        const { container } = renderTestCase();

        expectRadiusAxisLabel(container, null);
      });
    });

    test('Renders ticks when orientation=left', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarRadiusAxis orientation="left" cx={250} cy={250} label="test" />
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

    test('Renders ticks when tick is set to be a function', () => {
      const renderTick = (props: any) => {
        const { payload, x, y } = props;

        return (
          <text x={x} y={y} className="customized-tick">
            {payload.value}
          </text>
        );
      };
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarRadiusAxis orientation="left" cx={250} cy={250} label="test" tick={renderTick} dataKey="value" />
        </RadarChart>,
      );

      expect(container.querySelectorAll('.customized-tick')).toHaveLength(5);
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
    });

    test('Renders ticks when tick is set to be a react element', () => {
      const Tick = (props: any) => {
        const { payload, x, y } = props;

        return (
          <text x={x} y={y} className="customized-tick">
            {payload.value}
          </text>
        );
      };
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarRadiusAxis orientation="left" cx={250} cy={250} label="test" tick={<Tick />} dataKey="value" />
        </RadarChart>,
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
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarRadiusAxis orientation="left" cx={250} cy={250} label={renderLabel} dataKey="value" />
        </RadarChart>,
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
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarRadiusAxis orientation="left" cx={250} cy={250} label={<Label />} dataKey="value" />
        </RadarChart>,
      );

      expect(container.querySelectorAll('.customized-label')).toHaveLength(1);
    });

    test("Don't Renders any ticks or label in when data is empty", () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={[]}>
          <PolarRadiusAxis orientation="left" cx={250} cy={250} label="test" dataKey="value" />
        </RadarChart>,
      );

      expectRadiusAxisTicks(container, []);

      expectRadiusAxisLabel(container, undefined);
    });

    test("don't render any ticks or label when dataKey is empty", () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarRadiusAxis orientation="left" cx={250} cy={250} label="test" dataKey="" />
        </RadarChart>,
      );

      expectRadiusAxisTicks(container, []);

      expectRadiusAxisLabel(container, undefined);
    });

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
  });

  describe('in RadialBarChart', () => {
    describe('with implicit axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="ov" />
          {children}
        </RadialBarChart>
      ));

      it('should select angle settings', () => {
        const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith(implicitRadialBarRadiusAxis);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('band');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select domain with nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomainIncludingNiceTicks(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([0, 196]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
        expectLastCalledWithScale(spy, {
          domain: [0, 1, 2, 3, 4, 5],
          range: [0, 196],
        });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should not render ticks', () => {
        const { container } = renderTestCase();

        expectRadiusAxisTicks(container, []);
      });

      it('should not render label', () => {
        const { container } = renderTestCase();

        expectRadiusAxisLabel(container, null);
      });
    });

    describe('with default axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={PageData}>
          <PolarRadiusAxis />
          <RadialBar dataKey="ov" />
          {children}
        </RadialBarChart>
      ));

      it('should select angle settings', () => {
        const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: true,
          dataKey: undefined,
          domain: undefined,
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
        });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('band');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select domain with nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomainIncludingNiceTicks(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([0, 196]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
        expectLastCalledWithScale(spy, {
          domain: [0, 1, 2, 3, 4, 5],
          range: [0, 196],
        });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should render ticks', () => {
        const { container } = renderTestCase();

        expectRadiusAxisTicks(container, [
          {
            textContent: '0',
            transform: 'rotate(90, 250, 250)',
            x: '250',
            y: '250',
          },
          {
            textContent: '1',
            transform: 'rotate(90, 282.6666666666667, 250)',
            x: '282.6666666666667',
            y: '250',
          },
          {
            textContent: '2',
            transform: 'rotate(90, 315.3333333333333, 250)',
            x: '315.3333333333333',
            y: '250',
          },
          {
            textContent: '3',
            transform: 'rotate(90, 348, 250)',
            x: '348',
            y: '250',
          },
          {
            textContent: '4',
            transform: 'rotate(90, 380.66666666666663, 250)',
            x: '380.66666666666663',
            y: '250',
          },
          {
            textContent: '5',
            transform: 'rotate(90, 413.3333333333333, 250)',
            x: '413.3333333333333',
            y: '250',
          },
        ]);
      });

      it('should not render label', () => {
        const { container } = renderTestCase();

        expectRadiusAxisLabel(container, null);
      });
    });

    describe('with numerical axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          <PolarRadiusAxis dataKey="uv" type="number" label="test" />
          {children}
        </RadialBarChart>
      ));

      it('should select angle settings', () => {
        const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: true,
          dataKey: 'uv',
          domain: undefined,
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
        });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 400]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('band');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select domain with nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomainIncludingNiceTicks(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 400]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([0, 196]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
        expectLastCalledWithScale(spy, {
          domain: [0, 400],
          range: [0, 196],
        });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should render ticks', () => {
        const { container } = renderTestCase();

        expectRadiusAxisTicks(container, [
          {
            textContent: '400',
            transform: 'rotate(90, 348, 250)',
            x: '348',
            y: '250',
          },
        ]);
      });

      it('should render label', () => {
        const { container } = renderTestCase();

        expectRadiusAxisLabel(container, {
          textContent: 'test',
          x: '299',
          y: '250',
        });
      });
    });

    describe('axis alone without RadialBar sibling', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={PageData}>
          <PolarRadiusAxis dataKey="uv" />
          {children}
        </RadialBarChart>
      ));

      it('should select angle settings', () => {
        const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: true,
          dataKey: 'uv',
          domain: undefined,
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
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 400]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('band');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select domain with nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomainIncludingNiceTicks(state, 'radiusAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 400]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([0, 196]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
        expectLastCalledWithScale(spy, {
          domain: [0, 400],
          range: [0, 196],
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should render ticks', () => {
        const { container } = renderTestCase();

        expectRadiusAxisTicks(container, [
          {
            textContent: '400',
            transform: 'rotate(90, 348, 250)',
            x: '348',
            y: '250',
          },
        ]);
      });

      it('should not render label', () => {
        const { container } = renderTestCase();

        expectRadiusAxisLabel(container, null);
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
          <Comp />
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
          <Comp />
        </RadarChart>,
      );
      expect(radiusAxisSpy).toHaveBeenLastCalledWith(implicitRadiusAxis);
      expect(radiusAxisSpy).toHaveBeenCalledTimes(4);
    });

    it('should select radius axis settings', () => {
      const radiusAxisSpy = vi.fn();
      const radiusAxisRangeSpy = vi.fn();
      const radiusAxisDomainSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        radiusAxisSpy(useAppSelector(state => selectRadiusAxis(state, 'radius-id')));
        radiusAxisRangeSpy(useAppSelector(state => selectRadiusAxisRangeWithReversed(state, 'radius-id')));
        radiusAxisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'radiusAxis', 'radius-id', isPanorama)));
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
          <Comp />
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
      expect(radiusAxisSpy).toHaveBeenCalledTimes(2);

      expect(radiusAxisRangeSpy).toHaveBeenLastCalledWith([76, 0]);
      expect(radiusAxisRangeSpy).toHaveBeenCalledTimes(2);

      expect(radiusAxisDomainSpy).toHaveBeenLastCalledWith([420, 460, 999, 500, 864, 650, 765, 365]);
      expect(radiusAxisDomainSpy).toHaveBeenCalledTimes(2);
    });

    it('should select numerical radius axis domain', () => {
      const radiusAxisDomainSpy = vi.fn();
      const realScaleTypeSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        radiusAxisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'radiusAxis', 'radius-id', isPanorama)));
        realScaleTypeSpy(useAppSelector(state => selectRealScaleType(state, 'radiusAxis', 'radius-id')));
        return null;
      };

      render(
        <RadarChart width={300} height={200} data={exampleRadarData}>
          <Radar dataKey="value" radiusAxisId="radius-id" />
          <PolarRadiusAxis dataKey="value" radiusAxisId="radius-id" />
          <Comp />
        </RadarChart>,
      );

      expect(radiusAxisDomainSpy).toHaveBeenLastCalledWith([0, 999]);
      expect(radiusAxisDomainSpy).toHaveBeenCalledTimes(2);

      expect(realScaleTypeSpy).toHaveBeenLastCalledWith('linear');
      expect(realScaleTypeSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('with custom tick formatter and category values', () => {
    // https://github.com/recharts/recharts/issues/6010
    const formatter = vi.fn(value => `Formatted: ${value}`);

    beforeEach(() => {
      formatter.mockClear();
    });

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <PolarRadiusAxis dataKey="name" type="category" tickFormatter={formatter} />
        <Radar dataKey="value" />
        {children}
      </RadarChart>
    ));

    it('should render labels with custom formatter', () => {
      const { container } = renderTestCase();

      expectRadiusAxisTicks(container, [
        {
          textContent: 'Formatted: iPhone 3GS',
          transform: 'rotate(90, 262.25, 250)',
          x: '262.25',
          y: '250',
        },
        {
          textContent: 'Formatted: iPhone 4',
          transform: 'rotate(90, 286.75, 250)',
          x: '286.75',
          y: '250',
        },
        {
          textContent: 'Formatted: iPhone 4s',
          transform: 'rotate(90, 311.25, 250)',
          x: '311.25',
          y: '250',
        },
        {
          textContent: 'Formatted: iPhone 5',
          transform: 'rotate(90, 335.75, 250)',
          x: '335.75',
          y: '250',
        },
        {
          textContent: 'Formatted: iPhone 5s',
          transform: 'rotate(90, 360.25, 250)',
          x: '360.25',
          y: '250',
        },
        {
          textContent: 'Formatted: iPhone 6',
          transform: 'rotate(90, 384.75, 250)',
          x: '384.75',
          y: '250',
        },
        {
          textContent: 'Formatted: iPhone 6s',
          transform: 'rotate(90, 409.25, 250)',
          x: '409.25',
          y: '250',
        },
        {
          textContent: 'Formatted: iPhone 5se',
          transform: 'rotate(90, 433.75, 250)',
          x: '433.75',
          y: '250',
        },
      ]);
    });

    it('should call the custom tick formatter function with the tick value, and index', () => {
      renderTestCase();
      expect(formatter).toHaveBeenCalledTimes(exampleRadarData.length);
      expect(formatter).toHaveBeenNthCalledWith(1, 'iPhone 3GS', 0);
      expect(formatter).toHaveBeenNthCalledWith(2, 'iPhone 4', 1);
      expect(formatter).toHaveBeenNthCalledWith(3, 'iPhone 4s', 2);
      expect(formatter).toHaveBeenNthCalledWith(4, 'iPhone 5', 3);
      expect(formatter).toHaveBeenNthCalledWith(5, 'iPhone 5s', 4);
      expect(formatter).toHaveBeenNthCalledWith(6, 'iPhone 6', 5);
      expect(formatter).toHaveBeenNthCalledWith(7, 'iPhone 6s', 6);
      expect(formatter).toHaveBeenNthCalledWith(8, 'iPhone 5se', 7);
    });
  });
});

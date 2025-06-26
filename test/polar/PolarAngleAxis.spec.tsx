import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, test, vi } from 'vitest';
import { Customized, PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart } from '../../src';
import { exampleRadarData, PageData, pageDataWithFillColor } from '../_data';
import { assertNotNull } from '../helper/assertNotNull';
import { AngleAxisSettings } from '../../src/state/polarAxisSlice';
import {
  implicitAngleAxis,
  selectAngleAxis,
  selectAngleAxisRangeWithReversed,
  selectPolarOptions,
} from '../../src/state/selectors/polarAxisSelectors';
import { selectNiceTicks, selectRealScaleType } from '../../src/state/selectors/axisSelectors';
import { selectPolarAxisScale, selectPolarAxisTicks } from '../../src/state/selectors/polarScaleSelectors';
import {
  selectPolarAppliedValues,
  selectPolarAxisDomain,
  selectPolarItemsSettings,
  selectPolarNiceTicks,
} from '../../src/state/selectors/polarSelectors';
import { useAppSelectorWithStableTest } from '../helper/selectorTestHelpers';
import { expectLastCalledWithScale } from '../helper/expectScale';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { RadialBarSettings } from '../../src/state/selectors/radialBarSelectors';
import { useIsPanorama } from '../../src/context/PanoramaContext';
import { TickItemTextProps } from '../../src/polar/PolarAngleAxis';

type ExpectedAngleAxisTick = {
  x1: string;
  x2: string;
  y1: string;
  y2: string;
};

function expectAngleAxisTicks(container: Element, expectedTicks: ReadonlyArray<ExpectedAngleAxisTick>) {
  assertNotNull(container);
  const allTicks = container.querySelectorAll('.recharts-polar-angle-axis-tick-line');

  const actualTicks = Array.from(allTicks).map(tick => {
    return {
      x1: tick.getAttribute('x1'),
      x2: tick.getAttribute('x2'),
      y1: tick.getAttribute('y1'),
      y2: tick.getAttribute('y2'),
    };
  });

  expect(actualTicks).toEqual(expectedTicks);
}

type ExpectedAxisTickLabel = {
  textContext: string;
  x: string;
  y: string;
};

function expectAngleAxisTickLabels(container: Element, expectedLabels: ReadonlyArray<ExpectedAxisTickLabel>) {
  assertNotNull(container);
  const allTickLabels = container.querySelectorAll('.recharts-text.recharts-polar-angle-axis-tick-value');

  const actualLabels = Array.from(allTickLabels).map(label => {
    return {
      textContext: label.textContent,
      x: label.getAttribute('x'),
      y: label.getAttribute('y'),
    };
  });

  expect(actualLabels).toEqual(expectedLabels);
}

/**
 * Three Rings for the Elven-kings under the sky,
 * Seven for the Dwarf-lords in their halls of stone,
 * Nine for Mortal Men doomed to die,
 * One for the Dark Lord on his dark throne
 * In the Land of Mordor where the Shadows lie.
 * One Ring to rule them all, One Ring to find them,
 * One Ring to bring them all and in the darkness bind them
 * In the Land of Mordor where the Shadows lie.
 *
 * Lord of the Rings, J.R.R. Tolkien, 1954
 */
const ringsData = [
  {
    name: 'Elves',
    rings: 3,
    fill: 'green',
  },
  {
    name: 'Dwarves',
    rings: 7,
    fill: 'blue',
  },
  {
    name: 'Humans',
    rings: 9,
    fill: 'red',
  },
  {
    name: 'Sauron',
    rings: 1,
    fill: 'black',
  },
];

describe('<PolarAngleAxis />', () => {
  describe('in RadarChart', () => {
    describe('when axis has a dataKey', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis dataKey="value" />
          {children}
        </RadarChart>
      ));

      it('should select angle axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: false,
          dataKey: 'value',
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'category',
          unit: undefined,
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select polar items', () => {
        const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          {
            barSize: undefined,
            stackId: undefined,
            type: 'radar',
            angleAxisId: 0,
            data: undefined,
            dataKey: 'value',
            hide: false,
            radiusAxisId: 0,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([420, 460, 999, 500, 864, 650, 765, 365]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([90, -270]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('band');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [420, 460, 999, 500, 864, 650, 765, 365], range: [90, -270] });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 0, false));
        expect(spy).toHaveBeenLastCalledWith([
          {
            coordinate: 90,
            index: 0,
            offset: 45,
            value: 420,
          },
          {
            coordinate: 45,
            index: 1,
            offset: 45,
            value: 460,
          },
          {
            coordinate: 0,
            index: 2,
            offset: 45,
            value: 999,
          },
          {
            coordinate: -45,
            index: 3,
            offset: 45,
            value: 500,
          },
          {
            coordinate: -90,
            index: 4,
            offset: 45,
            value: 864,
          },
          {
            coordinate: -135,
            index: 5,
            offset: 45,
            value: 650,
          },
          {
            coordinate: -180,
            index: 6,
            offset: 45,
            value: 765,
          },
          {
            coordinate: -225,
            index: 7,
            offset: 45,
            value: 365,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select nice ticks', () => {
        const { spy } = renderTestCase(state => selectNiceTicks(state, 'angleAxis', 0, false));
        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select applied data', () => {
        const { spy } = renderTestCase(state => selectPolarAppliedValues(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          { value: 420 },
          { value: 460 },
          { value: 999 },
          { value: 500 },
          { value: 864 },
          { value: 650 },
          { value: 765 },
          { value: 365 },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should render axis ticks', () => {
        const { container } = renderTestCase((): null => null);
        expectAngleAxisTicks(container, [
          {
            x1: '250',
            x2: '250',
            y1: '54',
            y2: '46',
          },
          {
            x1: '388.5929291125633',
            x2: '394.2497833620557',
            y1: '111.4070708874367',
            y2: '105.7502166379443',
          },
          {
            x1: '446',
            x2: '454',
            y1: '250',
            y2: '250',
          },
          {
            x1: '388.5929291125633',
            x2: '394.2497833620557',
            y1: '388.5929291125633',
            y2: '394.2497833620557',
          },
          {
            x1: '250',
            x2: '250',
            y1: '446',
            y2: '454',
          },
          {
            x1: '111.4070708874367',
            x2: '105.7502166379443',
            y1: '388.5929291125633',
            y2: '394.2497833620557',
          },
          {
            x1: '54',
            x2: '46',
            y1: '250.00000000000003',
            y2: '250.00000000000003',
          },
          {
            x1: '111.40707088743665',
            x2: '105.75021663794428',
            y1: '111.4070708874367',
            y2: '105.7502166379443',
          },
        ]);
      });

      it('should render angle labels', () => {
        const { container } = renderTestCase((): null => null);
        expectAngleAxisTickLabels(container, [
          {
            textContext: '420',
            x: '250',
            y: '46',
          },
          {
            textContext: '460',
            x: '394.2497833620557',
            y: '105.7502166379443',
          },
          {
            textContext: '999',
            x: '454',
            y: '250',
          },
          {
            textContext: '500',
            x: '394.2497833620557',
            y: '394.2497833620557',
          },
          {
            textContext: '864',
            x: '250',
            y: '454',
          },
          {
            textContext: '650',
            x: '105.7502166379443',
            y: '394.2497833620557',
          },
          {
            textContext: '765',
            x: '46',
            y: '250.00000000000003',
          },
          {
            textContext: '365',
            x: '105.75021663794428',
            y: '105.7502166379443',
          },
        ]);
      });
    });

    describe('with default axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis />
          {children}
        </RadarChart>
      ));

      it('should select angle axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'category',
          unit: undefined,
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select polar items', () => {
        const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          {
            barSize: undefined,
            stackId: undefined,
            type: 'radar',
            angleAxisId: 0,
            data: undefined,
            dataKey: 'value',
            hide: false,
            radiusAxisId: 0,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6, 7]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([90, -270]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('band');
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 1, 2, 3, 4, 5, 6, 7], range: [90, -270] });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select applied data', () => {
        const { spy } = renderTestCase(state => selectPolarAppliedValues(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          { value: 420 },
          { value: 460 },
          { value: 999 },
          { value: 500 },
          { value: 864 },
          { value: 650 },
          { value: 765 },
          { value: 365 },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should render ticks', () => {
        const { container } = renderTestCase((): null => null);
        expectAngleAxisTicks(container, [
          {
            x1: '250',
            x2: '250',
            y1: '54',
            y2: '46',
          },
          {
            x1: '388.5929291125633',
            x2: '394.2497833620557',
            y1: '111.4070708874367',
            y2: '105.7502166379443',
          },
          {
            x1: '446',
            x2: '454',
            y1: '250',
            y2: '250',
          },
          {
            x1: '388.5929291125633',
            x2: '394.2497833620557',
            y1: '388.5929291125633',
            y2: '394.2497833620557',
          },
          {
            x1: '250',
            x2: '250',
            y1: '446',
            y2: '454',
          },
          {
            x1: '111.4070708874367',
            x2: '105.7502166379443',
            y1: '388.5929291125633',
            y2: '394.2497833620557',
          },
          {
            x1: '54',
            x2: '46',
            y1: '250.00000000000003',
            y2: '250.00000000000003',
          },
          {
            x1: '111.40707088743665',
            x2: '105.75021663794428',
            y1: '111.4070708874367',
            y2: '105.7502166379443',
          },
        ]);
      });

      it('should render labels', () => {
        const { container } = renderTestCase();
        expectAngleAxisTickLabels(container, [
          {
            textContext: '0',
            x: '250',
            y: '46',
          },
          {
            textContext: '1',
            x: '394.2497833620557',
            y: '105.7502166379443',
          },
          {
            textContext: '2',
            x: '454',
            y: '250',
          },
          {
            textContext: '3',
            x: '394.2497833620557',
            y: '394.2497833620557',
          },
          {
            textContext: '4',
            x: '250',
            y: '454',
          },
          {
            textContext: '5',
            x: '105.7502166379443',
            y: '394.2497833620557',
          },
          {
            textContext: '6',
            x: '46',
            y: '250.00000000000003',
          },
          {
            textContext: '7',
            x: '105.75021663794428',
            y: '105.7502166379443',
          },
        ]);
      });
    });

    describe('with implicit axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          {children}
        </RadarChart>
      ));

      it('should select angle axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'category',
          unit: undefined,
        });
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select polar items', () => {
        const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          {
            barSize: undefined,
            stackId: undefined,
            type: 'radar',
            angleAxisId: 0,
            data: undefined,
            dataKey: 'value',
            hide: false,
            radiusAxisId: 0,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select applied values', () => {
        const { spy } = renderTestCase(state => selectPolarAppliedValues(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          { value: 420 },
          { value: 460 },
          { value: 999 },
          { value: 500 },
          { value: 864 },
          { value: 650 },
          { value: 765 },
          { value: 365 },
        ]);
      });

      it('should select angle axis domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6, 7]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([90, -270]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('band');
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 1, 2, 3, 4, 5, 6, 7], range: [90, -270] });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should not render ticks', () => {
        const { container } = renderTestCase((): null => null);
        expectAngleAxisTicks(container, []);
      });

      it('should not render labels', () => {
        const { container } = renderTestCase((): null => null);
        expectAngleAxisTickLabels(container, []);
      });
    });

    describe('with type=number', () => {
      const data = [
        { angle: 0, r: 11 },
        { angle: 90, r: 22 },
        { angle: 180, r: 33 },
        { angle: 270, r: 44 },
      ];

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadarChart width={360} height={360} data={data}>
          <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" domain={[0, 360]} />;
          <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
          {children}
        </RadarChart>
      ));

      it('should select axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: false,
          dataKey: 'angle',
          domain: [0, 360],
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'number',
          unit: undefined,
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select polar items', () => {
        const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          {
            barSize: undefined,
            stackId: undefined,
            type: 'radar',
            angleAxisId: 0,
            data: undefined,
            dataKey: 'r',
            hide: false,
            radiusAxisId: 0,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 360]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([90, -270]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('linear');
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 360], range: [90, -270] });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 0, false));
        expect(spy).toHaveBeenLastCalledWith([
          {
            coordinate: 90,
            index: 0,
            offset: 0,
            value: 0,
          },
          {
            coordinate: 0,
            index: 1,
            offset: 0,
            value: 90,
          },
          {
            coordinate: -90,
            index: 2,
            offset: 0,
            value: 180,
          },
          {
            coordinate: -180,
            index: 3,
            offset: 0,
            value: 270,
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select nice ticks', () => {
        const { spy } = renderTestCase(state => selectNiceTicks(state, 'angleAxis', 0, false));
        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select applied data', () => {
        const { spy } = renderTestCase(state => selectPolarAppliedValues(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([{ value: 0 }, { value: 90 }, { value: 180 }, { value: 270 }]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should render axis ticks', () => {
        const { container } = renderTestCase((): null => null);
        expectAngleAxisTicks(container, [
          {
            x1: '180',
            x2: '180',
            y1: '40',
            y2: '32',
          },
          {
            x1: '320',
            x2: '328',
            y1: '180',
            y2: '180',
          },
          {
            x1: '180',
            x2: '180',
            y1: '320',
            y2: '328',
          },
          {
            x1: '40',
            x2: '32',
            y1: '180.00000000000003',
            y2: '180.00000000000003',
          },
        ]);
      });

      it('should render angle labels', () => {
        const { container } = renderTestCase((): null => null);
        expectAngleAxisTickLabels(container, [
          {
            textContext: '0',
            x: '180',
            y: '32',
          },
          {
            textContext: '90',
            x: '328',
            y: '180',
          },
          {
            textContext: '180',
            x: '180',
            y: '328',
          },
          {
            textContext: '270',
            x: '32',
            y: '180.00000000000003',
          },
        ]);
      });
    });

    test('renders regularly spaced ticks, even if the data is different', () => {
      const data = [
        { angle: 0, value: 5 },
        { angle: 45, value: 5 },
        { angle: 90, value: 5 },
        { angle: 125, value: 5 },
        { angle: 180, value: 5 },
        { angle: 225, value: 5 },
        { angle: 270, value: 5 },
        { angle: 315, value: 5 },
        { angle: 360, value: 5 },
      ];

      const angleAxisSettingsSpy = vi.fn();
      const niceTicksSpy = vi.fn();

      const Comp = (): null => {
        angleAxisSettingsSpy(useAppSelectorWithStableTest(state => selectAngleAxis(state, 0)));
        niceTicksSpy(useAppSelectorWithStableTest(state => selectPolarNiceTicks(state, 'angleAxis', 0)));
        return null;
      };
      const { container } = render(
        <RadarChart width={500} height={500} data={data}>
          <PolarAngleAxis dataKey="angle" type="number" domain={[0, 360]} tickCount={9} />
          <Radar dataKey="value" />
          <Customized component={<Comp />} />
        </RadarChart>,
      );

      expect(angleAxisSettingsSpy).toHaveBeenLastCalledWith({
        allowDataOverflow: false,
        allowDecimals: undefined,
        allowDuplicatedCategory: false,
        dataKey: 'angle',
        domain: [0, 360],
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        scale: 'auto',
        tick: true,
        tickCount: 9,
        ticks: undefined,
        type: 'number',
        unit: undefined,
      });

      expect(niceTicksSpy).toHaveBeenLastCalledWith([0, 45, 90, 135, 180, 225, 270, 315, 360]);

      expectAngleAxisTicks(container, [
        {
          x1: '250',
          x2: '250',
          y1: '54',
          y2: '46',
        },
        {
          x1: '388.5929291125633',
          x2: '394.2497833620557',
          y1: '111.4070708874367',
          y2: '105.7502166379443',
        },
        {
          x1: '446',
          x2: '454',
          y1: '250',
          y2: '250',
        },
        {
          x1: '388.5929291125633',
          x2: '394.2497833620557',
          y1: '388.5929291125633',
          y2: '394.2497833620557',
        },
        {
          x1: '250',
          x2: '250',
          y1: '446',
          y2: '454',
        },
        {
          x1: '111.4070708874367',
          x2: '105.7502166379443',
          y1: '388.5929291125633',
          y2: '394.2497833620557',
        },
        {
          x1: '54',
          x2: '46',
          y1: '250.00000000000003',
          y2: '250.00000000000003',
        },
        {
          x1: '111.40707088743665',
          x2: '105.75021663794428',
          y1: '111.4070708874367',
          y2: '105.7502166379443',
        },
        {
          x1: '249.99999999999997',
          x2: '249.99999999999997',
          y1: '54',
          y2: '46',
        },
      ]);
      expectAngleAxisTickLabels(container, [
        {
          textContext: '0',
          x: '250',
          y: '46',
        },
        {
          textContext: '45',
          x: '394.2497833620557',
          y: '105.7502166379443',
        },
        {
          textContext: '90',
          x: '454',
          y: '250',
        },
        {
          textContext: '135',
          x: '394.2497833620557',
          y: '394.2497833620557',
        },
        {
          textContext: '180',
          x: '250',
          y: '454',
        },
        {
          textContext: '225',
          x: '105.7502166379443',
          y: '394.2497833620557',
        },
        {
          textContext: '270',
          x: '46',
          y: '250.00000000000003',
        },
        {
          textContext: '315',
          x: '105.75021663794428',
          y: '105.7502166379443',
        },
        {
          textContext: '360',
          x: '249.99999999999997',
          y: '46',
        },
      ]);
    });

    test('renders 4 ticks', () => {
      const data = [
        { angle: 0, r: 1 },
        { angle: 90, r: 2 },
        { angle: 180, r: 3 },
        { angle: 270, r: 4 },
      ];

      const { container } = render(
        <RadarChart width={500} height={500} data={data}>
          <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" domain={[0, 360]} />
          <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
        </RadarChart>,
      );

      expectAngleAxisTicks(container, [
        {
          x1: '250',
          x2: '250',
          y1: '54',
          y2: '46',
        },
        {
          x1: '446',
          x2: '454',
          y1: '250',
          y2: '250',
        },
        {
          x1: '250',
          x2: '250',
          y1: '446',
          y2: '454',
        },
        {
          x1: '54',
          x2: '46',
          y1: '250.00000000000003',
          y2: '250.00000000000003',
        },
      ]);
      expectAngleAxisTickLabels(container, [
        {
          textContext: '0',
          x: '250',
          y: '46',
        },
        {
          textContext: '90',
          x: '454',
          y: '250',
        },
        {
          textContext: '180',
          x: '250',
          y: '454',
        },
        {
          textContext: '270',
          x: '46',
          y: '250.00000000000003',
        },
      ]);
    });

    test('Renders ticks when tick is set to be a react element', () => {
      const Tick = (props: any) => {
        const { x, y } = props;
        return (
          <text x={x} y={y} className="customized-tick">
            test
          </text>
        );
      };
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarAngleAxis tick={<Tick />} />
        </RadarChart>,
      );

      expect(container.querySelectorAll('.customized-tick')).toHaveLength(exampleRadarData.length);
    });

    test('Renders ticks when tick is set to be a function', () => {
      const Tick = (props: TickItemTextProps) => {
        const { x, y } = props;
        return (
          <text x={x} y={y} className="customized-tick">
            test
          </text>
        );
      };
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarAngleAxis tick={Tick} axisLineType="circle" />
        </RadarChart>,
      );

      expect(container.querySelectorAll('.customized-tick')).toHaveLength(exampleRadarData.length);
    });

    test('passes custom data to the tick function', () => {
      const tick = vi.fn().mockImplementation(() => null);

      render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <PolarAngleAxis tick={tick} />
        </RadarChart>,
      );

      expect(tick).toHaveBeenCalledTimes(exampleRadarData.length);
      expect(tick).toHaveBeenNthCalledWith(1, {
        cx: 250,
        cy: 250,
        fill: undefined,
        index: 0,
        orientation: 'outer',
        payload: {
          coordinate: 90,
          index: 0,
          offset: 45,
          value: 0,
        },
        radius: 196,
        stroke: 'none',
        textAnchor: 'middle',
        x: 250,
        y: 46,
      });
      expect(tick).toHaveBeenNthCalledWith(2, {
        cx: 250,
        cy: 250,
        fill: undefined,
        index: 1,
        orientation: 'outer',
        payload: {
          coordinate: 45,
          index: 1,
          offset: 45,
          value: 1,
        },
        radius: 196,
        stroke: 'none',
        textAnchor: 'start',
        x: 394.2497833620557,
        y: 105.7502166379443,
      });
      expect(tick).toHaveBeenNthCalledWith(3, {
        cx: 250,
        cy: 250,
        fill: undefined,
        index: 2,
        orientation: 'outer',
        payload: {
          coordinate: 0,
          index: 2,
          offset: 45,
          value: 2,
        },
        radius: 196,
        stroke: 'none',
        textAnchor: 'start',
        x: 454,
        y: 250,
      });
      expect(tick).toHaveBeenNthCalledWith(4, {
        cx: 250,
        cy: 250,
        fill: undefined,
        index: 3,
        orientation: 'outer',
        payload: {
          coordinate: -45,
          index: 3,
          offset: 45,
          value: 3,
        },
        radius: 196,
        stroke: 'none',
        textAnchor: 'start',
        x: 394.2497833620557,
        y: 394.2497833620557,
      });
      expect(tick).toHaveBeenNthCalledWith(5, {
        cx: 250,
        cy: 250,
        fill: undefined,
        index: 4,
        orientation: 'outer',
        payload: {
          coordinate: -90,
          index: 4,
          offset: 45,
          value: 4,
        },
        radius: 196,
        stroke: 'none',
        textAnchor: 'middle',
        x: 250,
        y: 454,
      });
      expect(tick).toHaveBeenNthCalledWith(6, {
        cx: 250,
        cy: 250,
        fill: undefined,
        index: 5,
        orientation: 'outer',
        payload: {
          coordinate: -135,
          index: 5,
          offset: 45,
          value: 5,
        },
        radius: 196,
        stroke: 'none',
        textAnchor: 'end',
        x: 105.7502166379443,
        y: 394.2497833620557,
      });
      expect(tick).toHaveBeenNthCalledWith(7, {
        cx: 250,
        cy: 250,
        fill: undefined,
        index: 6,
        orientation: 'outer',
        payload: {
          coordinate: -180,
          index: 6,
          offset: 45,
          value: 6,
        },
        radius: 196,
        stroke: 'none',
        textAnchor: 'end',
        x: 46,
        y: 250.00000000000003,
      });
      expect(tick).toHaveBeenNthCalledWith(8, {
        cx: 250,
        cy: 250,
        fill: undefined,
        index: 7,
        orientation: 'outer',
        payload: {
          coordinate: -225,
          index: 7,
          offset: 45,
          value: 7,
        },
        radius: 196,
        stroke: 'none',
        textAnchor: 'end',
        x: 105.75021663794428,
        y: 105.7502166379443,
      });
    });

    test('renders labels and ticks on the inside with orientation=inner', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis dataKey="value" orientation="inner" />
        </RadarChart>,
      );

      expectAngleAxisTicks(container, [
        {
          x1: '250',
          x2: '250',
          y1: '54',
          y2: '62',
        },
        {
          x1: '388.5929291125633',
          x2: '382.936074863071',
          y1: '111.4070708874367',
          y2: '117.06392513692907',
        },
        {
          x1: '446',
          x2: '438',
          y1: '250',
          y2: '250',
        },
        {
          x1: '388.5929291125633',
          x2: '382.936074863071',
          y1: '388.5929291125633',
          y2: '382.9360748630709',
        },
        {
          x1: '250',
          x2: '250',
          y1: '446',
          y2: '438',
        },
        {
          x1: '111.4070708874367',
          x2: '117.06392513692907',
          y1: '388.5929291125633',
          y2: '382.936074863071',
        },
        {
          x1: '54',
          x2: '62',
          y1: '250.00000000000003',
          y2: '250.00000000000003',
        },
        {
          x1: '111.40707088743665',
          x2: '117.06392513692904',
          y1: '111.4070708874367',
          y2: '117.06392513692907',
        },
      ]);
      expectAngleAxisTickLabels(container, [
        {
          textContext: '420',
          x: '250',
          y: '62',
        },
        {
          textContext: '460',
          x: '382.936074863071',
          y: '117.06392513692907',
        },
        {
          textContext: '999',
          x: '438',
          y: '250',
        },
        {
          textContext: '500',
          x: '382.936074863071',
          y: '382.9360748630709',
        },
        {
          textContext: '864',
          x: '250',
          y: '438',
        },
        {
          textContext: '650',
          x: '117.06392513692907',
          y: '382.936074863071',
        },
        {
          textContext: '765',
          x: '62',
          y: '250.00000000000003',
        },
        {
          textContext: '365',
          x: '117.06392513692904',
          y: '117.06392513692907',
        },
      ]);
    });

    test('does not render any line when axisLine=false', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis dataKey="value" axisLine={false} />
        </RadarChart>,
      );

      const axisLineElement = container.querySelector('.recharts-polar-angle-axis-line');
      expect(axisLineElement).toBeNull();
    });

    test.each([undefined, 'polygon'] as const)('renders polygon axisLine when axisLineType=%s', axisLineType => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis dataKey="value" axisLineType={axisLineType} />
        </RadarChart>,
      );

      const axisLineElement = container.querySelector('.recharts-polar-angle-axis-line');
      expect(axisLineElement.tagName).toBe('path');
      expect(axisLineElement.getAttribute('fill')).toBe('none');
      expect(axisLineElement.getAttribute('d')).toBe(
        'M250,54L388.5929291125633,111.4070708874367L446,250L388.5929291125633,388.5929291125633L250,446L111.4070708874367,388.5929291125633L54,250.00000000000003L111.40707088743665,111.4070708874367L250,54Z',
      );
    });

    test('renders circle axisLine', () => {
      const { container } = render(
        <RadarChart width={500} height={300} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis dataKey="value" axisLineType="circle" />
        </RadarChart>,
      );

      const axisLineElement = container.querySelector('.recharts-polar-angle-axis-line');
      expect(axisLineElement.tagName).toBe('circle');
      expect(axisLineElement.getAttribute('fill')).toBe('none');
      expect(axisLineElement.getAttribute('cx')).toBe('250');
      expect(axisLineElement.getAttribute('cy')).toBe('150');
      expect(axisLineElement.getAttribute('r')).toBe('116');
    });

    test('renders labels in reverse if reversed=true', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis dataKey="value" reversed />
        </RadarChart>,
      );

      expectAngleAxisTickLabels(container, [
        {
          textContext: '420',
          x: '394.24978336205567',
          y: '105.75021663794428',
        },
        {
          textContext: '460',
          x: '249.99999999999997',
          y: '46',
        },
        {
          textContext: '999',
          x: '105.75021663794428',
          y: '105.7502166379443',
        },
        {
          textContext: '500',
          x: '46',
          y: '250.00000000000003',
        },
        {
          textContext: '864',
          x: '105.7502166379443',
          y: '394.2497833620557',
        },
        {
          textContext: '650',
          x: '250',
          y: '454',
        },
        {
          textContext: '765',
          x: '394.2497833620557',
          y: '394.2497833620557',
        },
        {
          textContext: '365',
          x: '454',
          y: '250',
        },
      ]);
    });

    test('linear scale should produce niceTicks=undefined too because that is what the generator does', () => {
      const niceTicksSpy = vi.fn();
      const Comp = (): null => {
        niceTicksSpy(useAppSelectorWithStableTest(state => selectPolarNiceTicks(state, 'angleAxis', 0)));
        return null;
      };

      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis dataKey="value" type="number" />
          <Customized component={<Comp />} />
        </RadarChart>,
      );

      expectAngleAxisTicks(container, [
        {
          x1: '343.9696838086067',
          x2: '347.8051811069172',
          y1: '422.0049375015452',
          y2: '429.02554719548584',
        },
        {
          x1: '298.1937708077547',
          x2: '300.1608634937854',
          y1: '439.9825267105625',
          y2: '447.73691555589164',
        },
        {
          x1: '249.99999999999997',
          x2: '249.99999999999997',
          y1: '54',
          y2: '46',
        },
        {
          x1: '249.3836324872836',
          x2: '249.3584746296217',
          y1: '445.9990308422194',
          y2: '453.998991284759',
        },
        {
          x1: '102.86822817046604',
          x2: '96.86284972844425',
          y1: '120.507754215544',
          y2: '115.22235642842335',
        },
        {
          x1: '90.9630154532783',
          x2: '84.47170996157536',
          y1: '364.5567001370317',
          y2: '369.2324838160942',
        },
        {
          x1: '54.96086149174786',
          x2: '47.00008032814574',
          y1: '230.6161291286071',
          y2: '229.8249507256931',
        },
        {
          x1: '396.72382587365814',
          x2: '402.7125534603381',
          y1: '379.95429550806097',
          y2: '385.2585524675737',
        },
      ]);
      expectAngleAxisTickLabels(container, [
        {
          textContext: '420',
          x: '347.8051811069172',
          y: '429.02554719548584',
        },
        {
          textContext: '460',
          x: '300.1608634937854',
          y: '447.73691555589164',
        },
        {
          textContext: '999',
          x: '249.99999999999997',
          y: '46',
        },
        {
          textContext: '500',
          x: '249.3584746296217',
          y: '453.998991284759',
        },
        {
          textContext: '864',
          x: '96.86284972844425',
          y: '115.22235642842335',
        },
        {
          textContext: '650',
          x: '84.47170996157536',
          y: '369.2324838160942',
        },
        {
          textContext: '765',
          x: '47.00008032814574',
          y: '229.8249507256931',
        },
        {
          textContext: '365',
          x: '402.7125534603381',
          y: '385.2585524675737',
        },
      ]);

      expect(niceTicksSpy).toHaveBeenLastCalledWith(undefined);
      expect(niceTicksSpy).toHaveBeenCalledTimes(1);
    });

    test.each([
      { axisType: 'number', expectedScale: 'linear' },
      { axisType: 'category', expectedScale: 'band' },
      { axisType: undefined, expectedScale: 'band' },
    ] as const)('uses $expectedScale scale when type=$axisType', ({ axisType, expectedScale }) => {
      const realScaleTypeSpy = vi.fn();
      const Comp = (): null => {
        realScaleTypeSpy(useAppSelectorWithStableTest(state => selectRealScaleType(state, 'angleAxis', 0)));
        return null;
      };

      render(
        <RadarChart width={500} height={500} data={PageData}>
          <Radar dataKey="uv" />
          <PolarAngleAxis dataKey="uv" type={axisType} />
          <Customized component={<Comp />} />
        </RadarChart>,
      );

      expect(realScaleTypeSpy).toHaveBeenLastCalledWith(expectedScale);
    });
  });

  describe('in RadialBarChart', () => {
    describe('with default axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          <PolarAngleAxis />
          <PolarRadiusAxis />
          {children}
        </RadialBarChart>
      ));

      it('should render ticks', () => {
        const { container } = renderTestCase();
        expectAngleAxisTicks(container, [
          {
            x1: '446',
            x2: '454',
            y1: '250',
            y2: '250',
          },
          {
            x1: '412.25527429148303',
            x2: '418.8779385482782',
            y1: '140.04898379462054',
            y2: '135.56118721480914',
          },
          {
            x1: '322.64055138167737',
            x2: '325.6054718462357',
            y1: '67.95783374458026',
            y2: '60.52754124435904',
          },
          {
            x1: '208.01322151584986',
            x2: '206.2994754552723',
            y1: '58.54997928304394',
            y2: '50.7356927231682',
          },
          {
            x1: '107.84336433708276',
            x2: '102.04105267737185',
            y1: '115.0648639641972',
            y2: '109.55730739130729',
          },
          {
            x1: '56.622861016384235',
            x2: '48.72991656807338',
            y1: '218.0424951144281',
            y2: '216.73810715991496',
          },
          {
            x1: '71.98866905588869',
            x2: '64.72290044592495',
            y1: '332.0241797002937',
            y2: '335.3721054023465',
          },
          {
            x1: '148.6498192965878',
            x2: '144.51307722706076',
            y1: '417.7621556590928',
            y2: '424.6095905839537',
          },
          {
            x1: '260.20927615305504',
            x2: '260.62598130215935',
            y1: '445.733928281304',
            y2: '453.7230682111532',
          },
          {
            x1: '368.2533327700598',
            x2: '373.07999941373566',
            y1: '406.30786700858505',
            y2: '412.68777994771096',
          },
          {
            x1: '435.5787538927413',
            x2: '443.1533969087716',
            y1: '313.05970269211036',
            y2: '315.6335681081149',
          },
        ]);
      });

      it('should render labels', () => {
        const { container } = renderTestCase();

        expectAngleAxisTickLabels(container, [
          {
            textContext: '400',
            x: '454',
            y: '250',
          },
          {
            textContext: '380',
            x: '418.8779385482782',
            y: '135.56118721480914',
          },
          {
            textContext: '360',
            x: '325.6054718462357',
            y: '60.52754124435904',
          },
          {
            textContext: '340',
            x: '206.2994754552723',
            y: '50.7356927231682',
          },
          {
            textContext: '320',
            x: '102.04105267737185',
            y: '109.55730739130729',
          },
          {
            textContext: '300',
            x: '48.72991656807338',
            y: '216.73810715991496',
          },
          {
            textContext: '280',
            x: '64.72290044592495',
            y: '335.3721054023465',
          },
          {
            textContext: '260',
            x: '144.51307722706076',
            y: '424.6095905839537',
          },
          {
            textContext: '240',
            x: '260.62598130215935',
            y: '453.7230682111532',
          },
          {
            textContext: '220',
            x: '373.07999941373566',
            y: '412.68777994771096',
          },
          {
            textContext: '200',
            x: '443.1533969087716',
            y: '315.6335681081149',
          },
        ]);
      });

      it('should select axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'category',
          unit: undefined,
        });
      });

      it('should select applied values', () => {
        const { spy } = renderTestCase(state => selectPolarAppliedValues(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          { value: 400 },
          { value: 300 },
          { value: 300 },
          { value: 200 },
          { value: 278 },
          { value: 189 },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([400, 300, 200, 278, 189]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([0, 360]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [400, 189], range: [0, 360] });
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('linear');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select polarItemsSettings', () => {
        const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          {
            barSize: undefined,
            stackId: undefined,
            type: 'radialBar',
            angleAxisId: 0,
            data: undefined,
            dataKey: 'uv',
            hide: false,
            radiusAxisId: 0,
          },
        ]);
      });

      it('should select ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 0, false));
        expect(spy).toHaveBeenLastCalledWith([
          { coordinate: 0, value: 400, offset: -0 },
          { coordinate: 34.12322274881516, value: 380, offset: -0 },
          { coordinate: 68.24644549763032, value: 360, offset: -0 },
          { coordinate: 102.36966824644551, value: 340, offset: -0 },
          { coordinate: 136.49289099526067, value: 320, offset: -0 },
          { coordinate: 170.61611374407585, value: 300, offset: -0 },
          { coordinate: 204.739336492891, value: 280, offset: -0 },
          { coordinate: 238.86255924170615, value: 260, offset: -0 },
          { coordinate: 272.98578199052133, value: 240, offset: -0 },
          { coordinate: 307.1090047393365, value: 220, offset: -0 },
          { coordinate: 341.2322274881517, value: 200, offset: -0 },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('with implicit axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          {children}
        </RadialBarChart>
      ));

      it('should not render ticks', () => {
        const { container } = renderTestCase();
        expectAngleAxisTicks(container, []);
      });

      it('should not render axis labels', () => {
        const { container } = renderTestCase();
        expectAngleAxisTickLabels(container, []);
      });

      it('should select axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: true,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'number',
          unit: undefined,
        });
      });

      it('should select applied values', () => {
        const { spy } = renderTestCase(state => selectPolarAppliedValues(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          { value: 400 },
          { value: 300 },
          { value: 300 },
          { value: 200 },
          { value: 278 },
          { value: 189 },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 400]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([0, 360]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 400], range: [0, 360] });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith('linear');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select polarItemsSettings', () => {
        const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([
          {
            barSize: undefined,
            stackId: undefined,
            type: 'radialBar',
            angleAxisId: 0,
            data: undefined,
            dataKey: 'uv',
            hide: false,
            radiusAxisId: 0,
          },
        ]);
      });

      it('should select ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 0, false));
        expect(spy).toHaveBeenLastCalledWith([
          { coordinate: 0, offset: -0, value: 0 },
          { coordinate: 45, offset: -0, value: 50 },
          { coordinate: 90, offset: -0, value: 100 },
          { coordinate: 135, offset: -0, value: 150 },
          { coordinate: 180, offset: -0, value: 200 },
          { coordinate: 225, offset: -0, value: 250 },
          { coordinate: 270, offset: -0, value: 300 },
          { coordinate: 315, offset: -0, value: 350 },
          { coordinate: 360, offset: -0, value: 400 },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('with reversed axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          <PolarAngleAxis reversed />
          <PolarRadiusAxis />
          {children}
        </RadialBarChart>
      ));

      it('should select axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: true,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'category',
          unit: undefined,
        });
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([400, 300, 200, 278, 189]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([360, 0]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [400, 189], range: [360, 0] });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should render ticks', () => {
        const { container } = renderTestCase();
        expectAngleAxisTicks(container, [
          {
            x1: '446',
            x2: '454',
            y1: '250.00000000000006',
            y2: '250.00000000000006',
          },
          {
            x1: '412.2552742914829',
            x2: '418.87793854827817',
            y1: '359.9510162053795',
            y2: '364.4388127851909',
          },
          {
            x1: '322.6405513816775',
            x2: '325.60547184623573',
            y1: '432.0421662554197',
            y2: '439.47245875564096',
          },
          {
            x1: '208.0132215158498',
            x2: '206.29947545527224',
            y1: '441.45002071695603',
            y2: '449.2643072768318',
          },
          {
            x1: '107.84336433708273',
            x2: '102.0410526773718',
            y1: '384.93513603580277',
            y2: '390.44269260869265',
          },
          {
            x1: '56.622861016384235',
            x2: '48.72991656807338',
            y1: '281.95750488557184',
            y2: '283.261892840085',
          },
          {
            x1: '71.98866905588872',
            x2: '64.72290044592498',
            y1: '167.97582029970624',
            y2: '164.62789459765344',
          },
          {
            x1: '148.6498192965879',
            x2: '144.51307722706088',
            y1: '82.23784434090712',
            y2: '75.39040941604617',
          },
          {
            x1: '260.20927615305516',
            x2: '260.62598130215946',
            y1: '54.266071718696',
            y2: '46.27693178884684',
          },
          {
            x1: '368.2533327700597',
            x2: '373.0799994137356',
            y1: '93.69213299141492',
            y2: '87.31222005228898',
          },
          {
            x1: '435.57875389274125',
            x2: '443.1533969087715',
            y1: '186.94029730788952',
            y2: '184.366431891885',
          },
        ]);
      });

      it('should render labels reversed', () => {
        const { container } = renderTestCase();
        expectAngleAxisTickLabels(container, [
          {
            textContext: '400',
            x: '454',
            y: '250.00000000000006',
          },
          {
            textContext: '380',
            x: '418.87793854827817',
            y: '364.4388127851909',
          },
          {
            textContext: '360',
            x: '325.60547184623573',
            y: '439.47245875564096',
          },
          {
            textContext: '340',
            x: '206.29947545527224',
            y: '449.2643072768318',
          },
          {
            textContext: '320',
            x: '102.0410526773718',
            y: '390.44269260869265',
          },
          {
            textContext: '300',
            x: '48.72991656807338',
            y: '283.261892840085',
          },
          {
            textContext: '280',
            x: '64.72290044592498',
            y: '164.62789459765344',
          },
          {
            textContext: '260',
            x: '144.51307722706088',
            y: '75.39040941604617',
          },
          {
            textContext: '240',
            x: '260.62598130215946',
            y: '46.27693178884684',
          },
          {
            textContext: '220',
            x: '373.0799994137356',
            y: '87.31222005228898',
          },
          {
            textContext: '200',
            x: '443.1533969087715',
            y: '184.366431891885',
          },
        ]);
      });
    });

    describe('with custom angles', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={ringsData} startAngle={20} endAngle={220}>
          <RadialBar dataKey="rings" />
          <PolarAngleAxis type="number" />
          <PolarRadiusAxis />
          {children}
        </RadialBarChart>
      ));

      it('should select axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'number',
          unit: undefined,
        });
      });

      it('should select polar chart options', () => {
        const { spy } = renderTestCase(selectPolarOptions);
        expect(spy).toHaveBeenLastCalledWith({
          startAngle: 20,
          endAngle: 220,
          cx: '50%',
          cy: '50%',
          innerRadius: 0,
          outerRadius: '80%',
        });
      });

      it('should select axis domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 9]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expect(spy).toHaveBeenLastCalledWith([20, 220]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 9], range: [20, 220] });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should render ticks in the angled part only', () => {
        const { container } = renderTestCase();
        expectAngleAxisTicks(container, [
          {
            x1: '434.179753674038',
            x2: '441.6972946403253',
            y1: '182.96405190816893',
            y2: '180.22789076156357',
          },
          {
            x1: '395.1466265693649',
            x2: '401.0709786742369',
            y1: '118.28645933111761',
            y2: '112.91039644667342',
          },
          {
            x1: '334.5516688735257',
            x2: '338.00275739897575',
            y1: '73.17518474291663',
            y2: '65.95784534466833',
          },
          {
            x1: '261.3963864664533',
            x2: '261.8615450977371',
            y1: '54.33160097883143',
            y2: '46.34513571266129',
          },
          {
            x1: '186.54814735656907',
            x2: '183.95827582010253',
            y1: '64.55496125235291',
            y2: '56.985775997346906',
          },
          {
            x1: '121.12581176046348',
            x2: '115.86564081191096',
            y1: '102.32656431977853',
            y2: '96.29907714915723',
          },
          {
            x1: '74.84800249661123',
            x2: '67.69894137402392',
            y1: '162.0353606807094',
            y2: '158.44496723910567',
          },
          {
            x1: '54.58938353111273',
            x2: '46.613440001770414',
            y1: '234.8114855483016',
            y2: '234.19154618292615',
          },
          {
            x1: '63.3594144736706',
            x2: '55.74143139096327',
            y1: '309.84389554824213',
            y2: '312.28650352980304',
          },
          {
            x1: '99.8552891486803',
            x2: '93.72693360372847',
            y1: '375.9863714985617',
            y2: '381.128672376054',
          },
        ]);
      });
    });

    describe('RadialBarWithColors with default axis', () => {
      const radialBarSettings: RadialBarSettings = {
        barSize: undefined,
        dataKey: 'uv',
        maxBarSize: undefined,
        minPointSize: undefined,
        stackId: undefined,
      };

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={pageDataWithFillColor}>
          <RadialBar dataKey={radialBarSettings.dataKey} />
          <PolarAngleAxis />
          {children}
        </RadialBarChart>
      ));

      it('should render ticks', () => {
        const { container } = renderTestCase();
        expectAngleAxisTicks(container, [
          {
            x1: '432.5633372715354',
            x2: '440.01490205812865',
            y1: '178.67940070162317',
            y2: '175.76835583230167',
          },
          {
            x1: '375.0116093670338',
            x2: '380.11412403507603',
            y1: '99.04272947796076',
            y2: '92.88120823216326',
          },
          {
            x1: '286.04361798617344',
            x2: '287.51478606724174',
            y1: '57.34264197164234',
            y2: '49.4790763378318',
          },
          {
            x1: '188.01762147260374',
            x2: '185.48772847148553',
            y1: '64.05865238713966',
            y2: '56.46920962743107',
          },
          {
            x1: '105.56821616178345',
            x2: '99.67304131124399',
            y1: '117.5029818550218',
            y2: '112.09494029808391',
          },
          {
            x1: '59.415495602055415',
            x2: '51.636536238874015',
            y1: '204.24470868424243',
            y2: '202.37714577339517',
          },
          {
            x1: '61.15795081834642',
            x2: '53.45011207623813',
            y1: '302.48504987969375',
            y2: '304.62729681355876',
          },
          {
            x1: '110.35769102236955',
            x2: '104.65800494164995',
            y1: '387.53554283673725',
            y2: '393.14923846272654',
          },
          {
            x1: '194.65048853123875',
            x2: '192.39132479781992',
            y1: '438.0224230781251',
            y2: '445.69680769355875',
          },
          {
            x1: '292.85299286169624',
            x2: '294.60209461115323',
            y1: '441.25799591859004',
            y2: '449.06444473159377',
          },
          {
            x1: '380.28625006934533',
            x2: '385.6040561946247',
            y1: '396.4291400059019',
            y2: '402.4058395979795',
          },
          {
            x1: '434.97769089490146',
            x2: '442.52780072734646',
            y1: '314.8016502196532',
            y2: '317.44661553474106',
          },
        ]);
      });

      it('should render labels', () => {
        const { container } = renderTestCase();
        expectAngleAxisTickLabels(container, [
          {
            textContext: '30',
            x: '440.01490205812865',
            y: '175.76835583230167',
          },
          {
            textContext: '28',
            x: '380.11412403507603',
            y: '92.88120823216326',
          },
          {
            textContext: '26',
            x: '287.51478606724174',
            y: '49.4790763378318',
          },
          {
            textContext: '24',
            x: '185.48772847148553',
            y: '56.46920962743107',
          },
          {
            textContext: '22',
            x: '99.67304131124399',
            y: '112.09494029808391',
          },
          {
            textContext: '20',
            x: '51.636536238874015',
            y: '202.37714577339517',
          },
          {
            textContext: '18',
            x: '53.45011207623813',
            y: '304.62729681355876',
          },
          {
            textContext: '16',
            x: '104.65800494164995',
            y: '393.14923846272654',
          },
          {
            textContext: '14',
            x: '192.39132479781992',
            y: '445.69680769355875',
          },
          {
            textContext: '12',
            x: '294.60209461115323',
            y: '449.06444473159377',
          },
          {
            textContext: '10',
            x: '385.6040561946247',
            y: '402.4058395979795',
          },
          {
            textContext: '8',
            x: '442.52780072734646',
            y: '317.44661553474106',
          },
        ]);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([31.47, 26.69, 15.69, 8.22, 8.63, 2.63, 6.67]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        // why is scale.domain() different from domain?
        expectLastCalledWithScale(spy, { domain: [31.47, 6.67], range: [0, 360] });
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('RadialBarWithColors with implicit axis', () => {
      const radialBarSettings: RadialBarSettings = {
        barSize: undefined,
        dataKey: 'pv',
        maxBarSize: undefined,
        minPointSize: undefined,
        stackId: undefined,
      };

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={pageDataWithFillColor}>
          <RadialBar dataKey={radialBarSettings.dataKey} />
          {children}
        </RadialBarChart>
      ));

      it('should not render ticks', () => {
        const { container } = renderTestCase();
        expectAngleAxisTicks(container, []);
      });

      it('should not render labels', () => {
        const { container } = renderTestCase();
        expectAngleAxisTickLabels(container, []);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expect(spy).toHaveBeenLastCalledWith([0, 9800]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 9800], range: [0, 360] });
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    test.each([
      { axisType: 'number', expectedScale: 'linear' },
      { axisType: 'category', expectedScale: 'linear' },
      { axisType: undefined, expectedScale: 'linear' },
    ] as const)('uses $expectedScale scale when type=$axisType', ({ axisType, expectedScale }) => {
      const realScaleTypeSpy = vi.fn();
      const Comp = (): null => {
        realScaleTypeSpy(useAppSelectorWithStableTest(state => selectRealScaleType(state, 'angleAxis', 0)));
        return null;
      };

      render(
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          <PolarAngleAxis dataKey="uv" type={axisType} />
          <Customized component={<Comp />} />
        </RadialBarChart>,
      );

      expect(realScaleTypeSpy).toHaveBeenLastCalledWith(expectedScale);
      expect(realScaleTypeSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('state integration', () => {
    it('should report its settings to Redux store, and remove it when component is removed', () => {
      const angleAxisSpy = vi.fn();
      const Comp = (): null => {
        angleAxisSpy(useAppSelectorWithStableTest(state => selectAngleAxis(state, 0)));
        return null;
      };
      const { rerender } = render(
        <RadarChart width={1} height={2}>
          <PolarAngleAxis />
          <Comp />
        </RadarChart>,
      );
      const expectedAxis: AngleAxisSettings = {
        allowDataOverflow: false,
        allowDecimals: undefined,
        allowDuplicatedCategory: false,
        dataKey: undefined,
        domain: undefined,
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        scale: 'auto',
        tick: true,
        tickCount: undefined,
        ticks: undefined,
        type: 'category',
        unit: undefined,
      };
      expect(angleAxisSpy).toHaveBeenLastCalledWith(expectedAxis);

      rerender(
        <RadarChart width={1} height={2}>
          <Comp />
        </RadarChart>,
      );
      expect(angleAxisSpy).toHaveBeenLastCalledWith(implicitAngleAxis);
      expect(angleAxisSpy).toHaveBeenCalledTimes(4);
    });

    it('should select angle axis settings', () => {
      const axisSettingsSpy = vi.fn();
      const angleAxisRangeSpy = vi.fn();
      const angleAxisDomainSpy = vi.fn();
      const angleAxisScaleSpy = vi.fn();
      const angleAxisTicksSpy = vi.fn();
      const angleAxisNiceTicksSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();

        axisSettingsSpy(useAppSelectorWithStableTest(state => selectAngleAxis(state, 'angle-id')));
        angleAxisRangeSpy(useAppSelectorWithStableTest(state => selectAngleAxisRangeWithReversed(state, 'angle-id')));
        angleAxisDomainSpy(
          useAppSelectorWithStableTest(state => selectPolarAxisDomain(state, 'angleAxis', 'angle-id')),
        );
        angleAxisScaleSpy(useAppSelectorWithStableTest(state => selectPolarAxisScale(state, 'angleAxis', 'angle-id')));
        angleAxisTicksSpy(
          useAppSelectorWithStableTest(state => selectPolarAxisTicks(state, 'angleAxis', 'angle-id', isPanorama)),
        );
        angleAxisNiceTicksSpy(
          useAppSelectorWithStableTest(state => selectNiceTicks(state, 'angleAxis', 'angle-id', isPanorama)),
        );
        return null;
      };
      const exampleTicks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      render(
        <RadarChart cx={100} cy={150} outerRadius={150} width={600} height={500} data={exampleRadarData}>
          <Radar dataKey="value" angleAxisId="angle-id" />
          <PolarAngleAxis
            dataKey="value"
            allowDuplicatedCategory={false}
            angleAxisId="angle-id"
            id="html-id"
            name="angle-name"
            reversed
            scale="log"
            domain={[100, 200]}
            // why does AngleAxis not support unit?
            // unit="cm"
            // @ts-expect-error the type does not match. Is PolarAxis really expecting what it says?
            ticks={exampleTicks}
            tick={false}
            allowDecimals
            tickCount={19}
          />
          <Customized component={<Comp />} />
        </RadarChart>,
      );

      const expectedSettings: AngleAxisSettings = {
        allowDataOverflow: false,
        allowDecimals: true,
        allowDuplicatedCategory: false,
        dataKey: 'value',
        domain: [100, 200],
        id: 'angle-id',
        includeHidden: false,
        name: 'angle-name',
        reversed: true,
        scale: 'log',
        tick: false,
        tickCount: 19,
        ticks: exampleTicks,
        type: 'category',
        unit: undefined,
      };
      expect(axisSettingsSpy).toHaveBeenLastCalledWith(expectedSettings);
      expect(axisSettingsSpy).toHaveBeenCalledTimes(2);

      expect(angleAxisRangeSpy).toHaveBeenLastCalledWith([-270, 90]);
      expect(angleAxisRangeSpy).toHaveBeenCalledTimes(2);

      expect(angleAxisDomainSpy).toHaveBeenLastCalledWith([420, 460, 999, 500, 864, 650, 765, 365]);
      expect(angleAxisDomainSpy).toHaveBeenCalledTimes(2);

      expect(angleAxisScaleSpy).toHaveBeenCalledTimes(2);

      expectLastCalledWithScale(angleAxisScaleSpy, { domain: [420, 365], range: [-270, 90] });

      expect(angleAxisTicksSpy).toHaveBeenLastCalledWith([
        {
          coordinate: 15222.537988541328,
          offset: -0,
          value: 1,
          index: 0,
        },
        {
          coordinate: 13444.697559655799,
          offset: -0,
          value: 2,
          index: 1,
        },
        {
          coordinate: 12404.727576491747,
          offset: -0,
          value: 3,
          index: 2,
        },
        {
          coordinate: 11666.857130770273,
          offset: -0,
          value: 4,
          index: 3,
        },
        {
          coordinate: 11094.520348485423,
          offset: -0,
          value: 5,
          index: 4,
        },
        {
          coordinate: 10626.887147606221,
          offset: -0,
          value: 6,
          index: 5,
        },
        {
          coordinate: 10231.508909876538,
          offset: -0,
          value: 7,
          index: 6,
        },
        {
          coordinate: 9889.016701884744,
          offset: -0,
          value: 8,
          index: 7,
        },
        {
          coordinate: 9586.91716444217,
          offset: -0,
          value: 9,
          index: 8,
        },
        {
          coordinate: 9316.679919599894,
          offset: -0,
          value: 10,
          index: 9,
        },
      ]);
      expect(angleAxisTicksSpy).toHaveBeenCalledTimes(2);

      expect(angleAxisNiceTicksSpy).toHaveBeenLastCalledWith(undefined);
      expect(angleAxisNiceTicksSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('with custom tick formatter and numerical values', () => {
    const formatter = vi.fn(value => `${value}°`);

    beforeEach(() => {
      formatter.mockClear();
    });

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={500} height={500} data={PageData}>
        <RadialBar dataKey="uv" />
        <PolarAngleAxis tickFormatter={formatter} />
        {children}
      </RadialBarChart>
    ));

    it('should render labels with custom formatter', () => {
      const { container } = renderTestCase();
      expectAngleAxisTickLabels(container, [
        {
          textContext: '400°',
          x: '454',
          y: '250',
        },
        {
          textContext: '380°',
          x: '418.8779385482782',
          y: '135.56118721480914',
        },
        {
          textContext: '360°',
          x: '325.6054718462357',
          y: '60.52754124435904',
        },
        {
          textContext: '340°',
          x: '206.2994754552723',
          y: '50.7356927231682',
        },
        {
          textContext: '320°',
          x: '102.04105267737185',
          y: '109.55730739130729',
        },
        {
          textContext: '300°',
          x: '48.72991656807338',
          y: '216.73810715991496',
        },
        {
          textContext: '280°',
          x: '64.72290044592495',
          y: '335.3721054023465',
        },
        {
          textContext: '260°',
          x: '144.51307722706076',
          y: '424.6095905839537',
        },
        {
          textContext: '240°',
          x: '260.62598130215935',
          y: '453.7230682111532',
        },
        {
          textContext: '220°',
          x: '373.07999941373566',
          y: '412.68777994771096',
        },
        {
          textContext: '200°',
          x: '443.1533969087716',
          y: '315.6335681081149',
        },
      ]);
    });

    it('should call the custom tick formatter function with the tick value, and index', () => {
      renderTestCase();
      expect(formatter).toHaveBeenCalledTimes(11);
      expect(formatter).toHaveBeenNthCalledWith(1, 400, 0);
      expect(formatter).toHaveBeenNthCalledWith(2, 380, 1);
      expect(formatter).toHaveBeenNthCalledWith(3, 360, 2);
      expect(formatter).toHaveBeenNthCalledWith(4, 340, 3);
      expect(formatter).toHaveBeenLastCalledWith(200, 10);
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
        <Radar dataKey="value" />
        <PolarAngleAxis dataKey="name" tickFormatter={formatter} />
        {children}
      </RadarChart>
    ));

    it('should select ticks', () => {
      const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([
        { coordinate: 90, index: 0, offset: 45, value: 'iPhone 3GS' },
        { coordinate: 45, index: 1, offset: 45, value: 'iPhone 4' },
        { coordinate: 0, index: 2, offset: 45, value: 'iPhone 4s' },
        { coordinate: -45, index: 3, offset: 45, value: 'iPhone 5' },
        { coordinate: -90, index: 4, offset: 45, value: 'iPhone 5s' },
        { coordinate: -135, index: 5, offset: 45, value: 'iPhone 6' },
        { coordinate: -180, index: 6, offset: 45, value: 'iPhone 6s' },
        { coordinate: -225, index: 7, offset: 45, value: 'iPhone 5se' },
      ]);
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should render labels with custom formatter', () => {
      const { container } = renderTestCase();
      expectAngleAxisTickLabels(container, [
        { textContext: 'Formatted: iPhone 3GS', x: '250', y: '46' },
        { textContext: 'Formatted: iPhone 4', x: '394.2497833620557', y: '105.7502166379443' },
        { textContext: 'Formatted: iPhone 4s', x: '454', y: '250' },
        { textContext: 'Formatted: iPhone 5', x: '394.2497833620557', y: '394.2497833620557' },
        { textContext: 'Formatted: iPhone 5s', x: '250', y: '454' },
        { textContext: 'Formatted: iPhone 6', x: '105.7502166379443', y: '394.2497833620557' },
        { textContext: 'Formatted: iPhone 6s', x: '46', y: '250.00000000000003' },
        { textContext: 'Formatted: iPhone 5se', x: '105.75021663794428', y: '105.7502166379443' },
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

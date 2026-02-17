import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, Mock, test, vi } from 'vitest';
import {
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  BaseTickContentProps,
  TickItem,
} from '../../../src';
import { exampleRadarData, PageData, pageDataWithFillColor } from '../../_data';
import { assertNotNull } from '../../helper/assertNotNull';
import { AngleAxisSettings } from '../../../src/state/polarAxisSlice';
import {
  implicitAngleAxis,
  selectAngleAxis,
  selectAngleAxisRangeWithReversed,
  selectPolarOptions,
} from '../../../src/state/selectors/polarAxisSelectors';
import { selectNiceTicks, selectRealScaleType } from '../../../src/state/selectors/axisSelectors';
import { selectPolarAxisScale, selectPolarAxisTicks } from '../../../src/state/selectors/polarScaleSelectors';
import {
  selectPolarAppliedValues,
  selectPolarAxisDomain,
  selectPolarItemsSettings,
  selectPolarNiceTicks,
} from '../../../src/state/selectors/polarSelectors';
import { useAppSelectorWithStableTest } from '../../helper/selectorTestHelpers';
import { expectLastCalledWithScale } from '../../helper/expectScale';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { useIsPanorama } from '../../../src/context/PanoramaContext';
import { expectLastCalledWith, expectNthCalledWith } from '../../helper/expectLastCalledWith';
import { userEventSetup } from '../../helper/userEventSetup';

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
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: 'value',
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          niceTicks: false,
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
        expectLastCalledWith(spy, [
          {
            id: expect.stringMatching('radar-'),
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
        expectLastCalledWith(spy, [420, 460, 999, 500, 864, 650, 765, 365]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expectLastCalledWith(spy, [90, -270]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expectLastCalledWith(spy, 'band');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [420, 460, 999, 500, 864, 650, 765, 365], range: [-270, 90] });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 0, false));
        expectLastCalledWith(spy, [
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
        expectLastCalledWith(spy, undefined);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select applied data', () => {
        const { spy } = renderTestCase(state => selectPolarAppliedValues(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [
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
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          niceTicks: false,
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
        expectLastCalledWith(spy, [
          {
            id: expect.stringMatching('radar-'),
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
        expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5, 6, 7]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expectLastCalledWith(spy, [90, -270]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expectLastCalledWith(spy, 'band');
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 1, 2, 3, 4, 5, 6, 7], range: [-270, 90] });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select applied data', () => {
        const { spy } = renderTestCase(state => selectPolarAppliedValues(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [
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
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          niceTicks: false,
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
        expectLastCalledWith(spy, [
          {
            id: expect.stringMatching('radar-'),
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
        expectLastCalledWith(spy, [
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
        expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5, 6, 7]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expectLastCalledWith(spy, [90, -270]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expectLastCalledWith(spy, 'band');
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 1, 2, 3, 4, 5, 6, 7], range: [-270, 90] });
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
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: 'angle',
          domain: [0, 360],
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          niceTicks: false,
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
        expectLastCalledWith(spy, [
          {
            id: expect.stringMatching('radar-'),
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
        expectLastCalledWith(spy, [0, 360]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select angle axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expectLastCalledWith(spy, [90, -270]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expectLastCalledWith(spy, 'linear');
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 360], range: [-270, 90] });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 0, false));
        expectLastCalledWith(spy, [
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
        expectLastCalledWith(spy, undefined);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select applied data', () => {
        const { spy } = renderTestCase(state => selectPolarAppliedValues(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [{ value: 0 }, { value: 90 }, { value: 180 }, { value: 270 }]);
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
          <Comp />
        </RadarChart>,
      );

      expect(angleAxisSettingsSpy).toHaveBeenLastCalledWith({
        allowDataOverflow: false,
        allowDecimals: false,
        allowDuplicatedCategory: false,
        dataKey: 'angle',
        domain: [0, 360],
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        niceTicks: false,
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
      const Tick = (props: BaseTickContentProps) => {
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
      expectNthCalledWith(tick, 1, {
        angle: 0,
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
        verticalAnchor: 'end',
        x: 250,
        y: 46,
      });
      expectNthCalledWith(tick, 2, {
        angle: 0,
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
        verticalAnchor: 'end',
        x: 394.2497833620557,
        y: 105.7502166379443,
      });
      expectNthCalledWith(tick, 3, {
        angle: 0,
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
        verticalAnchor: 'middle',
        x: 454,
        y: 250,
      });
      expectNthCalledWith(tick, 4, {
        angle: 0,
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
        verticalAnchor: 'start',
        x: 394.2497833620557,
        y: 394.2497833620557,
      });
      expectNthCalledWith(tick, 5, {
        angle: 0,
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
        verticalAnchor: 'start',
        x: 250,
        y: 454,
      });
      expectNthCalledWith(tick, 6, {
        angle: 0,
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
        verticalAnchor: 'start',
        x: 105.7502166379443,
        y: 394.2497833620557,
      });
      expectNthCalledWith(tick, 7, {
        angle: 0,
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
        verticalAnchor: 'middle',
        x: 46,
        y: 250.00000000000003,
      });
      expectNthCalledWith(tick, 8, {
        angle: 0,
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
        verticalAnchor: 'middle',
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
      assertNotNull(axisLineElement);
      expect(axisLineElement.tagName).toBe('path');
      expect(axisLineElement.getAttribute('fill')).toBe('none');
      expect(axisLineElement.getAttribute('d')).toBe(
        'M250,54L388.5929,111.4071L446,250L388.5929,388.5929L250,446L111.4071,388.5929L54,250L111.4071,111.4071L250,54Z',
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
      assertNotNull(axisLineElement);
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
          <Comp />
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
          <Comp />
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
            x1: '388.5929291125633',
            x2: '394.2497833620557',
            y1: '111.4070708874367',
            y2: '105.7502166379443',
          },
          {
            x1: '250',
            x2: '250',
            y1: '54',
            y2: '46',
          },
          {
            x1: '111.4070708874367',
            x2: '105.7502166379443',
            y1: '111.40707088743667',
            y2: '105.7502166379443',
          },
          {
            x1: '54',
            x2: '46',
            y1: '249.99999999999997',
            y2: '249.99999999999997',
          },
          {
            x1: '111.40707088743665',
            x2: '105.75021663794428',
            y1: '388.5929291125633',
            y2: '394.2497833620557',
          },
          {
            x1: '249.99999999999997',
            x2: '249.99999999999997',
            y1: '446',
            y2: '454',
          },
          {
            x1: '388.5929291125633',
            x2: '394.24978336205567',
            y1: '388.59292911256335',
            y2: '394.2497833620557',
          },
        ]);
      });

      it('should render labels', () => {
        const { container } = renderTestCase();

        expectAngleAxisTickLabels(container, [
          {
            textContext: '0',
            x: '454',
            y: '250',
          },
          {
            textContext: '50',
            x: '394.2497833620557',
            y: '105.7502166379443',
          },
          {
            textContext: '100',
            x: '250',
            y: '46',
          },
          {
            textContext: '150',
            x: '105.7502166379443',
            y: '105.7502166379443',
          },
          {
            textContext: '200',
            x: '46',
            y: '249.99999999999997',
          },
          {
            textContext: '250',
            x: '105.75021663794428',
            y: '394.2497833620557',
          },
          {
            textContext: '300',
            x: '249.99999999999997',
            y: '454',
          },
          {
            textContext: '350',
            x: '394.24978336205567',
            y: '394.2497833620557',
          },
        ]);
      });

      it('should select axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          niceTicks: false,
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
        expectLastCalledWith(spy, [
          { value: 400 },
          { value: 300 },
          { value: 300 },
          { value: 200 },
          { value: 278 },
          { value: 189 },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [0, 400]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expectLastCalledWith(spy, [0, 360]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 400], range: [0, 360] });
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expectLastCalledWith(spy, 'linear');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select polarItemsSettings', () => {
        const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [
          {
            id: expect.stringMatching('radialBar-'),
            maxBarSize: undefined,
            minPointSize: 0,
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
        expectLastCalledWith(spy, [
          { coordinate: 0, index: 0, offset: -0, value: 0 },
          { coordinate: 45, index: 1, offset: -0, value: 50 },
          { coordinate: 90, index: 2, offset: -0, value: 100 },
          { coordinate: 135, index: 3, offset: -0, value: 150 },
          { coordinate: 180, index: 4, offset: -0, value: 200 },
          { coordinate: 225, index: 5, offset: -0, value: 250 },
          { coordinate: 270, index: 6, offset: -0, value: 300 },
          { coordinate: 315, index: 7, offset: -0, value: 350 },
          { coordinate: 360, index: 8, offset: -0, value: 400 },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });
    });

    describe('with category axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          <PolarAngleAxis type="category" />
          <PolarRadiusAxis />
          {children}
        </RadialBarChart>
      ));

      it('should render ticks', () => {
        const { container } = renderTestCase();
        expectAngleAxisTicks(container, [
          {
            x1: '310.5673308974897',
            x2: '313.0394668524893',
            y1: '436.4070771938501',
            y2: '444.01552932421134',
          },
          {
            x1: '446',
            x2: '454',
            y1: '250',
            y2: '250',
          },
          {
            x1: '310.5673308974897',
            x2: '313.0394668524893',
            y1: '63.592922806149915',
            y2: '55.984470675788685',
          },
          {
            x1: '91.43266910251032',
            x2: '84.96053314751074',
            y1: '134.79409055067526',
            y2: '130.09180853233545',
          },
          {
            x1: '91.43266910251029',
            x2: '84.96053314751072',
            y1: '365.20590944932474',
            y2: '369.9081914676645',
          },
        ]);
      });

      it('should render labels', () => {
        const { container } = renderTestCase();

        expectAngleAxisTickLabels(container, [
          {
            textContext: '400',
            x: '313.0394668524893',
            y: '444.01552932421134',
          },
          {
            textContext: '300',
            x: '454',
            y: '250',
          },
          {
            textContext: '200',
            x: '313.0394668524893',
            y: '55.984470675788685',
          },
          {
            textContext: '278',
            x: '84.96053314751074',
            y: '130.09180853233545',
          },
          {
            textContext: '189',
            x: '84.96053314751072',
            y: '369.9081914676645',
          },
        ]);
      });

      it('should select axis settings', () => {
        const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          niceTicks: false,
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
        expectLastCalledWith(spy, [
          { value: 400 },
          { value: 300 },
          { value: 300 },
          { value: 200 },
          { value: 278 },
          { value: 189 },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        // this looks like a correct, categorical domain derived from the data
        expectLastCalledWith(spy, [400, 300, 200, 278, 189]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expectLastCalledWith(spy, [0, 360]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [400, 300, 200, 278, 189], range: [0, 360] });
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expectLastCalledWith(spy, 'band');
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select polarItemsSettings', () => {
        const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [
          {
            id: expect.stringMatching('radialBar-'),
            maxBarSize: undefined,
            minPointSize: 0,
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
        expectLastCalledWith(spy, [
          { coordinate: -72, index: 0, offset: -72, value: 400 },
          { coordinate: 0, index: 1, offset: -72, value: 300 },
          { coordinate: 72, index: 2, offset: -72, value: 200 },
          { coordinate: 144, index: 3, offset: -72, value: 278 },
          { coordinate: 216, index: 4, offset: -72, value: 189 },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
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
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          niceTicks: false,
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
        expectLastCalledWith(spy, [
          { value: 400 },
          { value: 300 },
          { value: 300 },
          { value: 200 },
          { value: 278 },
          { value: 189 },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [0, 400]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expectLastCalledWith(spy, [0, 360]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 400], range: [0, 360] });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select real scale type', () => {
        const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
        expectLastCalledWith(spy, 'linear');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select polarItemsSettings', () => {
        const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [
          {
            id: expect.stringMatching('radialBar-'),
            maxBarSize: undefined,
            minPointSize: 0,
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
        expectLastCalledWith(spy, [
          { index: 0, coordinate: 0, offset: -0, value: 0 },
          { index: 1, coordinate: 45, offset: -0, value: 50 },
          { index: 2, coordinate: 90, offset: -0, value: 100 },
          { index: 3, coordinate: 135, offset: -0, value: 150 },
          { index: 4, coordinate: 180, offset: -0, value: 200 },
          { index: 5, coordinate: 225, offset: -0, value: 250 },
          { index: 6, coordinate: 270, offset: -0, value: 300 },
          { index: 7, coordinate: 315, offset: -0, value: 350 },
          { index: 8, coordinate: 360, offset: -0, value: 400 },
        ]);
        expect(spy).toHaveBeenCalledTimes(2);
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
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: true,
          niceTicks: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'number',
          unit: undefined,
        });
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [0, 400]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expectLastCalledWith(spy, [360, 0]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 400], range: [0, 360] });
        expect(spy).toHaveBeenCalledTimes(2);
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
            x1: '388.5929291125633',
            x2: '394.24978336205567',
            y1: '388.59292911256335',
            y2: '394.2497833620557',
          },
          {
            x1: '249.99999999999997',
            x2: '249.99999999999997',
            y1: '446',
            y2: '454',
          },
          {
            x1: '111.40707088743665',
            x2: '105.75021663794428',
            y1: '388.5929291125633',
            y2: '394.2497833620557',
          },
          {
            x1: '54',
            x2: '46',
            y1: '249.99999999999997',
            y2: '249.99999999999997',
          },
          {
            x1: '111.4070708874367',
            x2: '105.7502166379443',
            y1: '111.40707088743667',
            y2: '105.7502166379443',
          },
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
        ]);
      });

      it('should render labels reversed', () => {
        const { container } = renderTestCase();
        expectAngleAxisTickLabels(container, [
          {
            textContext: '0',
            x: '454',
            y: '250.00000000000006',
          },
          {
            textContext: '50',
            x: '394.24978336205567',
            y: '394.2497833620557',
          },
          {
            textContext: '100',
            x: '249.99999999999997',
            y: '454',
          },
          {
            textContext: '150',
            x: '105.75021663794428',
            y: '394.2497833620557',
          },
          {
            textContext: '200',
            x: '46',
            y: '249.99999999999997',
          },
          {
            textContext: '250',
            x: '105.7502166379443',
            y: '105.7502166379443',
          },
          {
            textContext: '300',
            x: '250',
            y: '46',
          },
          {
            textContext: '350',
            x: '394.2497833620557',
            y: '105.7502166379443',
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
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          niceTicks: false,
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
        expectLastCalledWith(spy, {
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
        expectLastCalledWith(spy, [0, 9]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select axis range', () => {
        const { spy } = renderTestCase(state => selectAngleAxisRangeWithReversed(state, 0));
        expectLastCalledWith(spy, [20, 220]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 9], range: [20, 220] });
        expect(spy).toHaveBeenCalledTimes(2);
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
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={pageDataWithFillColor}>
          <RadialBar dataKey="uv" />
          <PolarAngleAxis />
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
            x1: '430.5803711701581',
            x2: '437.9509985648584',
            y1: '173.79810010211077',
            y2: '170.6878184736255',
          },
          {
            x1: '386.74765767298027',
            x2: '392.32919472085706',
            y1: '109.58604727110134',
            y2: '103.85486552706465',
          },
          {
            x1: '321.39863678123476',
            x2: '324.3128668539382',
            y1: '67.46716825244476',
            y2: '60.01684858927925',
          },
          {
            x1: '244.8155293780266',
            x2: '244.60391833223176',
            y1: '54.06858020120944',
            y2: '46.071379393095526',
          },
          {
            x1: '169.04816292043114',
            x2: '165.74400630493852',
            y1: '71.49845918468117',
            y2: '64.2126820085457',
          },
          {
            x1: '106.01801361447642',
            x2: '100.14119784363871',
            y1: '117.01433311638843',
            y2: '111.58634671297571',
          },
          {
            x1: '65.64244378044125',
            x2: '58.11764556739806',
            y1: '183.4545909566089',
            y2: '180.73845181198072',
          },
          {
            x1: '54.274272812552084',
            x2: '46.285467621227696',
            y1: '260.36531316192213',
            y2: '260.7883871685312',
          },
          {
            x1: '73.70220455569708',
            x2: '66.50637617021533',
            y1: '335.645124329869',
            y2: '339.1408436902718',
          },
          {
            x1: '120.86938700568427',
            x2: '115.59874974061017',
            y1: '397.44926174013983',
            y2: '403.46759895402306',
          },
          {
            x1: '188.35438703671548',
            x2: '185.83823956882634',
            y1: '436.0532676476845',
            y2: '443.6472785720798',
          },
          {
            x1: '265.5389020767459',
            x2: '266.1731429778376',
            y1: '445.3830661092442',
            y2: '453.35788513411137',
          },
          {
            x1: '340.278477295892',
            x2: '343.9633131038876',
            y1: '423.97067723365086',
            y2: '431.0715212023713',
          },
          {
            x1: '400.81335240048736',
            x2: '406.96899943724196',
            y1: '375.1851937639847',
            y2: '380.2947935094535',
          },
          {
            x1: '437.6187793765148',
            x2: '445.2766887388216',
            y1: '306.7026774082729',
            y2: '309.0170724045289',
          },
        ]);
      });

      it('should render labels', () => {
        const { container } = renderTestCase();
        expectAngleAxisTickLabels(container, [
          {
            textContext: '0',
            x: '454',
            y: '250',
          },
          {
            textContext: '2',
            x: '437.9509985648584',
            y: '170.6878184736255',
          },
          {
            textContext: '4',
            x: '392.32919472085706',
            y: '103.85486552706465',
          },
          {
            textContext: '6',
            x: '324.3128668539382',
            y: '60.01684858927925',
          },
          {
            textContext: '8',
            x: '244.60391833223176',
            y: '46.071379393095526',
          },
          {
            textContext: '10',
            x: '165.74400630493852',
            y: '64.2126820085457',
          },
          {
            textContext: '12',
            x: '100.14119784363871',
            y: '111.58634671297571',
          },
          {
            textContext: '14',
            x: '58.11764556739806',
            y: '180.73845181198072',
          },
          {
            textContext: '16',
            x: '46.285467621227696',
            y: '260.7883871685312',
          },
          {
            textContext: '18',
            x: '66.50637617021533',
            y: '339.1408436902718',
          },
          {
            textContext: '20',
            x: '115.59874974061017',
            y: '403.46759895402306',
          },
          {
            textContext: '22',
            x: '185.83823956882634',
            y: '443.6472785720798',
          },
          {
            textContext: '24',
            x: '266.1731429778376',
            y: '453.35788513411137',
          },
          {
            textContext: '26',
            x: '343.9633131038876',
            y: '431.0715212023713',
          },
          {
            textContext: '28',
            x: '406.96899943724196',
            y: '380.2947935094535',
          },
          {
            textContext: '30',
            x: '445.2766887388216',
            y: '309.0170724045289',
          },
        ]);
      });

      it('should select domain', () => {
        const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
        expectLastCalledWith(spy, [0, 31.47]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 31.47], range: [0, 360] });
        expect(spy).toHaveBeenCalledTimes(2);
      });
    });

    describe('RadialBarWithColors with implicit axis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={500} height={500} data={pageDataWithFillColor}>
          <RadialBar dataKey="pv" />
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
        expectLastCalledWith(spy, [0, 9800]);
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
        expectLastCalledWithScale(spy, { domain: [0, 9800], range: [0, 360] });
        expect(spy).toHaveBeenCalledTimes(2);
      });
    });

    test.each([
      { axisType: 'number', expectedScale: 'linear' },
      { axisType: 'category', expectedScale: 'band' },
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
          <Comp />
        </RadialBarChart>,
      );

      expect(realScaleTypeSpy).toHaveBeenLastCalledWith(expectedScale);
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
        allowDecimals: false,
        allowDuplicatedCategory: false,
        dataKey: undefined,
        domain: undefined,
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        niceTicks: false,
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
      expect(angleAxisSpy).toHaveBeenLastCalledWith({ ...implicitAngleAxis, type: 'category' });
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
          <Comp />
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
        niceTicks: false,
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

      expectLastCalledWithScale(angleAxisScaleSpy, {
        domain: [420, 460, 999, 500, 864, 650, 765, 365],
        range: [-270, 90],
      });

      expect(angleAxisTicksSpy).toHaveBeenLastCalledWith([
        {
          coordinate: -24172.926148617094,
          index: 0,
          offset: -0,
          value: 1,
        },
        {
          coordinate: -21429.954757673444,
          index: 1,
          offset: -0,
          value: 2,
        },
        {
          coordinate: -19825.41935342046,
          index: 2,
          offset: -0,
          value: 3,
        },
        {
          coordinate: -18686.983366729797,
          index: 3,
          offset: -0,
          value: 4,
        },
        {
          coordinate: -17803.943812512767,
          index: 4,
          offset: -0,
          value: 5,
        },
        {
          coordinate: -17082.44796247681,
          index: 5,
          offset: -0,
          value: 6,
        },
        {
          coordinate: -16472.431913188248,
          index: 6,
          offset: -0,
          value: 7,
        },
        {
          coordinate: -15944.011975786148,
          index: 7,
          offset: -0,
          value: 8,
        },
        {
          coordinate: -15477.912558223828,
          index: 8,
          offset: -0,
          value: 9,
        },
        {
          coordinate: -15060.972421569122,
          index: 9,
          offset: -0,
          value: 10,
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
          textContext: '0°',
          x: '454',
          y: '250',
        },
        {
          textContext: '50°',
          x: '394.2497833620557',
          y: '105.7502166379443',
        },
        {
          textContext: '100°',
          x: '250',
          y: '46',
        },
        {
          textContext: '150°',
          x: '105.7502166379443',
          y: '105.7502166379443',
        },
        {
          textContext: '200°',
          x: '46',
          y: '249.99999999999997',
        },
        {
          textContext: '250°',
          x: '105.75021663794428',
          y: '394.2497833620557',
        },
        {
          textContext: '300°',
          x: '249.99999999999997',
          y: '454',
        },
        {
          textContext: '350°',
          x: '394.24978336205567',
          y: '394.2497833620557',
        },
      ]);
    });

    it('should call the custom tick formatter function with the tick value, and index', () => {
      renderTestCase();
      expect(formatter).toHaveBeenCalledTimes(8);
      expect(formatter).toHaveBeenNthCalledWith(1, 0, 0);
      expect(formatter).toHaveBeenNthCalledWith(2, 50, 1);
      expect(formatter).toHaveBeenNthCalledWith(3, 100, 2);
      expect(formatter).toHaveBeenNthCalledWith(4, 150, 3);
      expect(formatter).toHaveBeenLastCalledWith(350, 7);
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
      expectLastCalledWith(spy, [
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

  describe('events', () => {
    it('should fire event handlers when provided', async () => {
      const userEvent = userEventSetup();
      const onClick: Mock<(tickItem: TickItem, index: number, e: React.MouseEvent) => void> = vi.fn();
      const onMouseEnter: Mock<(tickItem: TickItem, index: number, e: React.MouseEvent) => void> = vi.fn();
      const onMouseLeave: Mock<(tickItem: TickItem, index: number, e: React.MouseEvent) => void> = vi.fn();
      const onMouseOver: Mock<(tickItem: TickItem, index: number, e: React.MouseEvent) => void> = vi.fn();
      const onMouseOut: Mock<(tickItem: TickItem, index: number, e: React.MouseEvent) => void> = vi.fn();
      const onMouseMove: Mock<(tickItem: TickItem, index: number, e: React.MouseEvent) => void> = vi.fn();
      const onTouchStart: Mock<(tickItem: TickItem, index: number, e: React.TouchEvent) => void> = vi.fn();
      const onTouchMove: Mock<(tickItem: TickItem, index: number, e: React.TouchEvent) => void> = vi.fn();
      const onTouchEnd: Mock<(tickItem: TickItem, index: number, e: React.TouchEvent) => void> = vi.fn();

      const { container } = render(
        <RadarChart width={100} height={100} data={[{ x: 1, y: 1 }]}>
          <PolarRadiusAxis dataKey="x" />
          <PolarAngleAxis
            dataKey="y"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onMouseMove={onMouseMove}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          />
        </RadarChart>,
      );

      const axisLabel = container.querySelector('.recharts-polar-angle-axis-tick');
      assertNotNull(axisLabel);

      await userEvent.click(axisLabel);
      expect(onClick).toHaveBeenCalledTimes(1);

      const tickItem: TickItem = {
        coordinate: 90,
        index: 0,
        offset: 360,
        value: 1,
      };
      expectLastCalledWith(onClick, tickItem, 0, expect.any(Object));

      await userEvent.hover(axisLabel);
      expect(onMouseEnter).toHaveBeenCalledTimes(1);
      expect(onMouseEnter).toHaveBeenLastCalledWith(tickItem, 0, expect.any(Object));
      expect(onMouseOver).toHaveBeenCalledTimes(1);
      expect(onMouseOver).toHaveBeenLastCalledWith(tickItem, 0, expect.any(Object));

      await userEvent.unhover(axisLabel);
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
      expect(onMouseLeave).toHaveBeenLastCalledWith(tickItem, 0, expect.any(Object));
      expect(onMouseOut).toHaveBeenCalledTimes(1);
      expect(onMouseOut).toHaveBeenLastCalledWith(tickItem, 0, expect.any(Object));

      await userEvent.pointer({ target: axisLabel, keys: '[MouseMove]' });
      expect(onMouseMove).toHaveBeenCalledTimes(1);
      expect(onMouseMove).toHaveBeenLastCalledWith(tickItem, 0, expect.any(Object));

      fireEvent.touchStart(axisLabel);
      expect(onTouchStart).toHaveBeenCalledTimes(1);
      expect(onTouchStart).toHaveBeenLastCalledWith(tickItem, 0, expect.any(Object));

      fireEvent.touchMove(axisLabel);
      expect(onTouchMove).toHaveBeenCalledTimes(1);
      expect(onTouchMove).toHaveBeenLastCalledWith(tickItem, 0, expect.any(Object));

      fireEvent.touchEnd(axisLabel);
      expect(onTouchEnd).toHaveBeenCalledTimes(1);
      expect(onTouchEnd).toHaveBeenLastCalledWith(tickItem, 0, expect.any(Object));
    });
  });
});

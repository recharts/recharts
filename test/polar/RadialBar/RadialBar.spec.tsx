import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { describe, expect, it, Mock, test, vi } from 'vitest';
import {
  DefaultZIndexes,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  RadialBarProps,
} from '../../../src';
import { useAppSelector } from '../../../src/state/hooks';
import { selectPolarItemsSettings } from '../../../src/state/selectors/polarSelectors';
import { PageData, ringsData } from '../../_data';
import { expectRadialBars } from '../../helper/expectRadialBars';
import { createSelectorTestCase, rechartsTestRender } from '../../helper/createSelectorTestCase';
import { expectLastCalledWithScale } from '../../helper/expectScale';
import {
  selectPolarAxisScale,
  selectPolarAxisTicks,
  selectPolarGraphicalItemAxisTicks,
} from '../../../src/state/selectors/polarScaleSelectors';
import {
  pickMaxBarSize,
  selectBandSizeOfPolarAxis,
  selectPolarBarBandSize,
  selectPolarBarPosition,
  selectPolarBarSizeList,
  selectRadialBarSectors,
} from '../../../src/state/selectors/radialBarSelectors';
import {
  selectAngleAxis,
  selectRadiusAxis,
  selectRadiusAxisRangeWithReversed,
} from '../../../src/state/selectors/polarAxisSelectors';
import {
  selectBarCategoryGap,
  selectBarGap,
  selectRootMaxBarSize,
} from '../../../src/state/selectors/rootPropsSelectors';
import { selectRealScaleType } from '../../../src/state/selectors/axisSelectors';
import { RadialBarSettings } from '../../../src/state/types/RadialBarSettings';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { userEventSetup } from '../../helper/userEventSetup';
import { assertZIndexLayerOrder } from '../../helper/assertZIndexLayerOrder';
import { RadialBarDataItem } from '../../../src/polar/RadialBar';

describe('<RadialBar />', () => {
  describe('with implicit axes', () => {
    const radialBarSettings: RadialBarSettings = {
      id: 'radial-bar-uv',
      dataKey: 'pv',
      minPointSize: 0,
      stackId: undefined,
      maxBarSize: undefined,
      barSize: undefined,
      type: 'radialBar',
      angleAxisId: 0,
      radiusAxisId: 0,
      data: undefined,
      hide: false,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={500} height={500} data={PageData}>
        <RadialBar isAnimationActive={false} label dataKey="pv" />
        {children}
      </RadialBarChart>
    ));

    it('should select polar items', () => {
      const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
      expectLastCalledWith(spy, [
        {
          id: expect.stringMatching('radialBar-'),
          maxBarSize: undefined,
          minPointSize: 0,
          angleAxisId: 0,
          barSize: undefined,
          data: undefined,
          dataKey: 'pv',
          hide: false,
          radiusAxisId: 0,
          stackId: undefined,
          type: 'radialBar',
        },
      ]);
    });

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
        type: 'number',
        unit: undefined,
      });
    });

    it('should select angle axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
      expectLastCalledWithScale(spy, {
        domain: [0, 9800],
        range: [0, 360],
      });
    });

    it('should select radius axis settings', () => {
      const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
      expectLastCalledWith(spy, {
        allowDataOverflow: false,
        allowDecimals: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        niceTicks: false,
        scale: 'auto',
        tick: true,
        tickCount: 5,
        ticks: undefined,
        type: 'category',
        unit: undefined,
      });
    });

    it('should select radius axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
      expectLastCalledWithScale(spy, {
        domain: [0, 1, 2, 3, 4, 5],
        range: [0, 196],
      });
    });

    it('should select radius axis ticks', () => {
      const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'radiusAxis', 0, false));
      expectLastCalledWith(spy, [
        {
          coordinate: 16.333333333333332,
          index: 0,
          offset: 16.333333333333332,
          value: 0,
        },
        {
          coordinate: 49,
          index: 1,
          offset: 16.333333333333332,
          value: 1,
        },
        {
          coordinate: 81.66666666666666,
          index: 2,
          offset: 16.333333333333332,
          value: 2,
        },
        {
          coordinate: 114.33333333333333,
          index: 3,
          offset: 16.333333333333332,
          value: 3,
        },
        {
          coordinate: 147,
          index: 4,
          offset: 16.333333333333332,
          value: 4,
        },
        {
          coordinate: 179.66666666666666,
          index: 5,
          offset: 16.333333333333332,
          value: 5,
        },
      ]);
    });

    it('should select barBandSize', () => {
      const { spy } = renderTestCase(state => selectBandSizeOfPolarAxis(state, 0, 0));
      expectLastCalledWith(spy, 32.666666666666664);
    });

    it('should pick childMaxBarSize', () => {
      const { spy } = renderTestCase(state => pickMaxBarSize(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, undefined);
    });

    it('should select selectRootMaxBarSize', () => {
      const { spy } = renderTestCase(selectRootMaxBarSize);
      expectLastCalledWith(spy, undefined);
    });

    it('should select bar size list', () => {
      const { spy } = renderTestCase(state => selectPolarBarSizeList(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, [
        {
          barSize: undefined,
          dataKeys: ['pv'],
          stackId: undefined,
        },
      ]);
    });

    it('should select barGap', () => {
      const { spy } = renderTestCase(selectBarGap);
      expectLastCalledWith(spy, 4);
    });

    it('should select barCategoryGap', () => {
      const { spy } = renderTestCase(selectBarCategoryGap);
      expectLastCalledWith(spy, '10%');
    });

    it('should select bandSize', () => {
      const { spy } = renderTestCase(state => selectPolarBarBandSize(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, 32.666666666666664);
    });

    it('should select bar position and offset', () => {
      const { spy } = renderTestCase(state => selectPolarBarPosition(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, { offset: 3.266666666666666, size: 26 });
    });

    it('should select radial bar sectors', () => {
      const { spy } = renderTestCase(state => selectRadialBarSectors(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, [
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 3.266666666666666,
            outerRadius: 29.266666666666666,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 88.16326530612244,
          innerRadius: 3.266666666666666,
          name: 'Page A',
          outerRadius: 29.266666666666666,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          pv: 2400,
          startAngle: 0,
          uv: 400,
          value: 2400,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 35.93333333333333,
            outerRadius: 61.93333333333333,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 167.76734693877552,
          innerRadius: 35.93333333333333,
          name: 'Page B',
          outerRadius: 61.93333333333333,
          payload: {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
          pv: 4567,
          startAngle: 0,
          uv: 300,
          value: 4567,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 68.6,
            outerRadius: 94.6,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 51.35510204081632,
          innerRadius: 68.6,
          name: 'Page C',
          outerRadius: 94.6,
          payload: {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
          pv: 1398,
          startAngle: 0,
          uv: 300,
          value: 1398,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 101.26666666666667,
            outerRadius: 127.26666666666667,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 360,
          innerRadius: 101.26666666666667,
          name: 'Page D',
          outerRadius: 127.26666666666667,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          pv: 9800,
          startAngle: 0,
          uv: 200,
          value: 9800,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 133.93333333333334,
            outerRadius: 159.93333333333334,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 143.5591836734694,
          innerRadius: 133.93333333333334,
          name: 'Page E',
          outerRadius: 159.93333333333334,
          payload: {
            amt: 2400,
            name: 'Page E',
            pv: 3908,
            uv: 278,
          },
          pv: 3908,
          startAngle: 0,
          uv: 278,
          value: 3908,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 166.6,
            outerRadius: 192.6,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 176.32653061224488,
          innerRadius: 166.6,
          name: 'Page F',
          outerRadius: 192.6,
          payload: {
            amt: 2400,
            name: 'Page F',
            pv: 4800,
            uv: 189,
          },
          pv: 4800,
          startAngle: 0,
          uv: 189,
          value: 4800,
        },
      ]);
    });

    it('should render sectors', () => {
      const { container } = renderTestCase();

      expectRadialBars(container, [
        {
          d: 'M 279.2667,250 A 29.2667,29.2667,0, 0,0, 250.938,220.7484 L 250.1047,246.735 A 3.2667,3.2667,0, 0,1, 253.2667,250 Z',
        },
        {
          d: 'M 311.9333,250 A 61.9333,61.9333,0, 0,0, 189.4728,236.8775 L 214.8825,242.3864 A 35.9333,35.9333,0, 0,1, 285.9333,250 Z',
        },
        {
          d: 'M 344.6,250 A 94.6,94.6,0, 0,0, 309.0769,176.1144 L 292.8401,196.4212 A 68.6,68.6,0, 0,1, 318.6,250 Z',
        },
        {
          d: 'M 377.2667,250 A 127.2667,127.2667,0, 1,0, 377.2667,250.0022 L 351.2667,250.0018 A 101.2667,101.2667,0, 1,1, 351.2667,250 Z',
        },
        {
          d: 'M 409.9333,250 A 159.9333,159.9333,0, 0,0, 121.3383,155.0009 L 142.2545,170.4447 A 133.9333,133.9333,0, 0,1, 383.9333,250 Z',
        },
        {
          d: 'M 442.6,250 A 192.6,192.6,0, 0,0, 57.7957,237.6601 L 83.7423,239.3259 A 166.6,166.6,0, 0,1, 416.6,250 Z',
        },
      ]);
    });
  });

  describe('with configured axes', () => {
    const radialBarSettings: RadialBarSettings = {
      id: 'my-radial-bar',
      dataKey: 'pv',
      minPointSize: 0,
      stackId: undefined,
      maxBarSize: undefined,
      barSize: undefined,
      type: 'radialBar',
      angleAxisId: '',
      radiusAxisId: '',
      data: [],
      hide: false,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={500} height={500} data={PageData}>
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" />
        <PolarRadiusAxis dataKey="name" orientation="middle" type="category" angle={90} />
        <RadialBar isAnimationActive={false} dataKey="pv" />
        {children}
      </RadialBarChart>
    ));

    it('should select polar items', () => {
      const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
      expectLastCalledWith(spy, [
        {
          id: expect.stringMatching('radialBar-'),
          angleAxisId: 0,
          barSize: undefined,
          data: undefined,
          dataKey: 'pv',
          hide: false,
          radiusAxisId: 0,
          stackId: undefined,
          type: 'radialBar',
          maxBarSize: undefined,
          minPointSize: 0,
        },
      ]);
    });

    it('should select angle axis settings', () => {
      const { spy } = renderTestCase(state => selectAngleAxis(state, 0));
      expectLastCalledWith(spy, {
        allowDataOverflow: false,
        allowDecimals: false,
        allowDuplicatedCategory: false,
        dataKey: 'pv',
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

    it('should select angle axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
      expectLastCalledWithScale(spy, {
        domain: [0, 9800],
        range: [0, 360],
      });
    });

    it('should select radius axis settings', () => {
      const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
      expectLastCalledWith(spy, {
        allowDataOverflow: false,
        allowDecimals: false,
        allowDuplicatedCategory: true,
        dataKey: 'name',
        domain: undefined,
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        niceTicks: false,
        scale: 'auto',
        tick: true,
        tickCount: 5,
        ticks: undefined,
        type: 'category',
        unit: undefined,
      });
    });

    it('should select radius axis realScaleType', () => {
      const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
      expectLastCalledWith(spy, 'band');
    });

    it('should select radius axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
      expectLastCalledWithScale(spy, {
        domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F'],
        range: [0, 196],
        bandwidth: 32.666666666666664,
      });
    });

    it('should select radius axis range', () => {
      const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
      expectLastCalledWith(spy, [0, 196]);
    });

    it('should select radius axis ticks', () => {
      const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'radiusAxis', 0, false));
      expectLastCalledWith(spy, [
        {
          coordinate: 16.333333333333332,
          index: 0,
          offset: 16.333333333333332,
          value: 'Page A',
        },
        {
          coordinate: 49,
          index: 1,
          offset: 16.333333333333332,
          value: 'Page B',
        },
        {
          coordinate: 81.66666666666666,
          index: 2,
          offset: 16.333333333333332,
          value: 'Page C',
        },
        {
          coordinate: 114.33333333333333,
          index: 3,
          offset: 16.333333333333332,
          value: 'Page D',
        },
        {
          coordinate: 147,
          index: 4,
          offset: 16.333333333333332,
          value: 'Page E',
        },
        {
          coordinate: 179.66666666666666,
          index: 5,
          offset: 16.333333333333332,
          value: 'Page F',
        },
      ]);
    });

    it('should select bar size and offset', () => {
      const { spy } = renderTestCase(state => selectPolarBarPosition(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, { offset: 3.266666666666666, size: 26 });
    });

    it('should select bandSize', () => {
      const { spy } = renderTestCase(state => selectPolarBarBandSize(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, 32.666666666666664);
    });

    it('should select bar size list', () => {
      const { spy } = renderTestCase(state => selectPolarBarSizeList(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, [
        {
          barSize: undefined,
          dataKeys: ['pv'],
          stackId: undefined,
        },
      ]);
    });

    it('should select barGap', () => {
      const { spy } = renderTestCase(selectBarGap);
      expectLastCalledWith(spy, 4);
    });

    it('should select barCategoryGap', () => {
      const { spy } = renderTestCase(selectBarCategoryGap);
      expectLastCalledWith(spy, '10%');
    });

    it('should select radial bar sectors', () => {
      const { spy } = renderTestCase(state => selectRadialBarSectors(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, [
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 3.266666666666666,
            outerRadius: 29.266666666666666,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 88.16326530612244,
          innerRadius: 3.266666666666666,
          name: 'Page A',
          outerRadius: 29.266666666666666,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          pv: 2400,
          startAngle: 0,
          uv: 400,
          value: 2400,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 35.93333333333333,
            outerRadius: 61.93333333333333,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 167.76734693877552,
          innerRadius: 35.93333333333333,
          name: 'Page B',
          outerRadius: 61.93333333333333,
          payload: {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
          pv: 4567,
          startAngle: 0,
          uv: 300,
          value: 4567,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 68.6,
            outerRadius: 94.6,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 51.35510204081632,
          innerRadius: 68.6,
          name: 'Page C',
          outerRadius: 94.6,
          payload: {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
          pv: 1398,
          startAngle: 0,
          uv: 300,
          value: 1398,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 101.26666666666667,
            outerRadius: 127.26666666666667,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 360,
          innerRadius: 101.26666666666667,
          name: 'Page D',
          outerRadius: 127.26666666666667,
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          pv: 9800,
          startAngle: 0,
          uv: 200,
          value: 9800,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 133.93333333333334,
            outerRadius: 159.93333333333334,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 143.5591836734694,
          innerRadius: 133.93333333333334,
          name: 'Page E',
          outerRadius: 159.93333333333334,
          payload: {
            amt: 2400,
            name: 'Page E',
            pv: 3908,
            uv: 278,
          },
          pv: 3908,
          startAngle: 0,
          uv: 278,
          value: 3908,
        },
        {
          // @ts-expect-error extra properties not expected in the type
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 166.6,
            outerRadius: 192.6,
            startAngle: 0,
          },
          cx: 250,
          cy: 250,
          endAngle: 176.32653061224488,
          innerRadius: 166.6,
          name: 'Page F',
          outerRadius: 192.6,
          payload: {
            amt: 2400,
            name: 'Page F',
            pv: 4800,
            uv: 189,
          },
          pv: 4800,
          startAngle: 0,
          uv: 189,
          value: 4800,
        },
      ]);
    });

    it('should render sectors', () => {
      const { container } = renderTestCase();
      expectRadialBars(container, [
        {
          d: 'M 279.2667,250 A 29.2667,29.2667,0, 0,0, 250.938,220.7484 L 250.1047,246.735 A 3.2667,3.2667,0, 0,1, 253.2667,250 Z',
        },
        {
          d: 'M 311.9333,250 A 61.9333,61.9333,0, 0,0, 189.4728,236.8775 L 214.8825,242.3864 A 35.9333,35.9333,0, 0,1, 285.9333,250 Z',
        },
        {
          d: 'M 344.6,250 A 94.6,94.6,0, 0,0, 309.0769,176.1144 L 292.8401,196.4212 A 68.6,68.6,0, 0,1, 318.6,250 Z',
        },
        {
          d: 'M 377.2667,250 A 127.2667,127.2667,0, 1,0, 377.2667,250.0022 L 351.2667,250.0018 A 101.2667,101.2667,0, 1,1, 351.2667,250 Z',
        },
        {
          d: 'M 409.9333,250 A 159.9333,159.9333,0, 0,0, 121.3383,155.0009 L 142.2545,170.4447 A 133.9333,133.9333,0, 0,1, 383.9333,250 Z',
        },
        {
          d: 'M 442.6,250 A 192.6,192.6,0, 0,0, 57.7957,237.6601 L 83.7423,239.3259 A 166.6,166.6,0, 0,1, 416.6,250 Z',
        },
      ]);
    });
  });

  describe('RingsWithTypes', () => {
    const radialBarSettings: RadialBarSettings = {
      id: 'my-radial-bar',
      dataKey: 'rings',
      minPointSize: 0,
      stackId: undefined,
      maxBarSize: undefined,
      barSize: undefined,
      type: 'radialBar',
      angleAxisId: '',
      radiusAxisId: '',
      data: [],
      hide: false,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={500} height={500} data={ringsData}>
        <RadialBar isAnimationActive={false} dataKey="rings" />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis type="category" stroke="black" />
        {children}
      </RadialBarChart>
    ));

    it('should select polar items', () => {
      const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
      expectLastCalledWith(spy, [
        {
          id: expect.stringMatching('radialBar-'),
          angleAxisId: 0,
          barSize: undefined,
          data: undefined,
          dataKey: 'rings',
          hide: false,
          radiusAxisId: 0,
          stackId: undefined,
          type: 'radialBar',
          maxBarSize: undefined,
          minPointSize: 0,
        },
      ]);
    });

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
        type: 'number',
        unit: undefined,
      });
    });

    it('should select angle axis realScaleType', () => {
      const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
      expectLastCalledWith(spy, 'linear');
    });

    it('should select angle axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
      expectLastCalledWithScale(spy, {
        domain: [0, 9],
        range: [0, 360],
      });
    });

    it('should select radius axis settings', () => {
      const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
      expectLastCalledWith(spy, {
        allowDataOverflow: false,
        allowDecimals: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        niceTicks: false,
        scale: 'auto',
        tick: true,
        tickCount: 5,
        ticks: undefined,
        type: 'category',
        unit: undefined,
      });
    });

    it('should select radius axis realScaleType', () => {
      const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
      expectLastCalledWith(spy, 'band');
    });

    it('should select radius axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
      expectLastCalledWithScale(spy, {
        domain: [0, 1, 2, 3],
        range: [0, 196],
        bandwidth: 49,
      });
    });

    it('should select radius axis ticks for axis', () => {
      const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'radiusAxis', 0, false));
      expectLastCalledWith(spy, [
        { coordinate: 24.5, index: 0, offset: 24.5, value: 0 },
        { coordinate: 73.5, index: 1, offset: 24.5, value: 1 },
        { coordinate: 122.5, index: 2, offset: 24.5, value: 2 },
        { coordinate: 171.5, index: 3, offset: 24.5, value: 3 },
      ]);
    });

    it('should select radius axis ticks for graphical item', () => {
      const { spy } = renderTestCase(state => selectPolarGraphicalItemAxisTicks(state, 'radiusAxis', 0, false));
      expectLastCalledWith(spy, [
        { coordinate: 0, value: 0, index: 0, offset: 0 },
        { coordinate: 49, value: 1, index: 1, offset: 0 },
        { coordinate: 98, value: 2, index: 2, offset: 0 },
        { coordinate: 147, value: 3, index: 3, offset: 0 },
      ]);
    });

    it('should select radial bar sectors', () => {
      const { spy } = renderTestCase(state => selectRadialBarSectors(state, 0, 0, radialBarSettings, undefined));
      expectLastCalledWith(spy, [
        {
          name: 'Elves',
          // @ts-expect-error extra properties not expected in the type
          rings: 3,
          fill: 'green',
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 4.9,
            outerRadius: 43.9,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Elves', rings: 3, fill: 'green' },
          value: 3,
          cx: 250,
          cy: 250,
          innerRadius: 4.9,
          outerRadius: 43.9,
          startAngle: 0,
          endAngle: 120,
        },
        {
          name: 'Dwarves',
          // @ts-expect-error extra properties not expected in the type
          rings: 7,
          fill: 'blue',
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 53.9,
            outerRadius: 92.9,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Dwarves', rings: 7, fill: 'blue' },
          value: 7,
          cx: 250,
          cy: 250,
          innerRadius: 53.9,
          outerRadius: 92.9,
          startAngle: 0,
          endAngle: 280,
        },
        {
          name: 'Humans',
          // @ts-expect-error extra properties not expected in the type
          rings: 9,
          fill: 'red',
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 102.9,
            outerRadius: 141.9,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Humans', rings: 9, fill: 'red' },
          value: 9,
          cx: 250,
          cy: 250,
          innerRadius: 102.9,
          outerRadius: 141.9,
          startAngle: 0,
          endAngle: 360,
        },
        {
          name: 'Sauron',
          // @ts-expect-error extra properties not expected in the type
          rings: 1,
          fill: 'black',
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 151.9,
            outerRadius: 190.9,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Sauron', rings: 1, fill: 'black' },
          value: 1,
          cx: 250,
          cy: 250,
          innerRadius: 151.9,
          outerRadius: 190.9,
          startAngle: 0,
          endAngle: 40,
        },
      ]);
    });

    it('should render sectors', () => {
      const { container } = renderTestCase();
      expectRadialBars(container, [
        {
          d: 'M 293.9,250 A 43.9,43.9,0, 0,0, 228.05,211.9815 L 247.55,245.7565 A 4.9,4.9,0, 0,1, 254.9,250 Z',
        },
        {
          d: 'M 342.9,250 A 92.9,92.9,0, 1,0, 266.1319,341.4886 L 259.3596,303.0811 A 53.9,53.9,0, 1,1, 303.9,250 Z',
        },
        {
          d: 'M 391.9,250 A 141.9,141.9,0, 1,0, 391.9,250.0025 L 352.9,250.0018 A 102.9,102.9,0, 1,1, 352.9,250 Z',
        },
        {
          d: 'M 440.9,250 A 190.9,190.9,0, 0,0, 396.2379,127.2918 L 366.3622,152.3606 A 151.9,151.9,0, 0,1, 401.9,250 Z',
        },
      ]);
    });
  });

  test("Don't render any sector when data is empty", () => {
    const { container } = render(
      <RadialBarChart width={500} height={500} data={[]}>
        <RadialBar dataKey="uv" />
      </RadialBarChart>,
    );

    expectRadialBars(container, []);
  });

  test('Should render RadialBar in a custom component', () => {
    const CustomRadialBar = (props: RadialBarProps) => {
      return <RadialBar {...props} />;
    };

    const { container } = render(
      <RadialBarChart width={500} height={500} data={[]}>
        <CustomRadialBar dataKey="uv" />
      </RadialBarChart>,
    );

    expectRadialBars(container, []);
  });

  test('calls mouse handler events', async () => {
    const user = userEventSetup();
    const onMouseEnter: Mock<(data: RadialBarDataItem, index: number, e: React.MouseEvent) => void> = vi.fn();
    const onMouseLeave: Mock<(data: RadialBarDataItem, index: number, e: React.MouseEvent) => void> = vi.fn();
    const onClick: Mock<(data: RadialBarDataItem, index: number, e: React.MouseEvent) => void> = vi.fn();

    const { container } = render(
      <RadialBarChart width={500} height={500} data={PageData} throttledEvents={[]}>
        <RadialBar
          isAnimationActive={false}
          cx={250}
          cy={250}
          dataKey="amt"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      </RadialBarChart>,
    );

    const sector = container.querySelectorAll('.recharts-sector')[0];

    await user.hover(sector);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expectLastCalledWith(
      onMouseEnter,
      {
        name: 'Page A',
        // @ts-expect-error Recharts spreads the data item in the main object
        uv: 400,
        pv: 2400,
        amt: 2400,
        background: {
          cx: 250,
          cy: 250,
          innerRadius: 3.266666666666666,
          outerRadius: 29.266666666666666,
          startAngle: 0,
          endAngle: 360,
        },
        payload: {
          name: 'Page A',
          uv: 400,
          pv: 2400,
          amt: 2400,
        },
        value: 2400,
        cx: 250,
        cy: 250,
        innerRadius: 3.266666666666666,
        outerRadius: 29.266666666666666,
        startAngle: 0,
        endAngle: 360,
      },
      0,
      expect.any(Object),
    );

    await user.unhover(sector);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expectLastCalledWith(
      onMouseLeave,
      {
        name: 'Page A',
        // @ts-expect-error Recharts spreads the data item in the main object
        uv: 400,
        pv: 2400,
        amt: 2400,
        background: {
          cx: 250,
          cy: 250,
          innerRadius: 3.266666666666666,
          outerRadius: 29.266666666666666,
          startAngle: 0,
          endAngle: 360,
        },
        payload: {
          name: 'Page A',
          uv: 400,
          pv: 2400,
          amt: 2400,
        },
        value: 2400,
        cx: 250,
        cy: 250,
        innerRadius: 3.266666666666666,
        outerRadius: 29.266666666666666,
        startAngle: 0,
        endAngle: 360,
      },
      0,
      expect.any(Object),
    );

    await user.click(sector);
    expect(onClick).toHaveBeenCalledTimes(1);
    expectLastCalledWith(
      onClick,
      {
        name: 'Page A',
        // @ts-expect-error Recharts spreads the data item in the main object
        uv: 400,
        pv: 2400,
        amt: 2400,
        background: {
          cx: 250,
          cy: 250,
          innerRadius: 3.266666666666666,
          outerRadius: 29.266666666666666,
          startAngle: 0,
          endAngle: 360,
        },
        payload: {
          name: 'Page A',
          uv: 400,
          pv: 2400,
          amt: 2400,
        },
        value: 2400,
        cx: 250,
        cy: 250,
        innerRadius: 3.266666666666666,
        outerRadius: 29.266666666666666,
        startAngle: 0,
        endAngle: 360,
      },
      0,
      expect.any(Object),
    );
  });

  test('calls touch handler events', async () => {
    const onTouchMove = vi.fn();
    const onTouchEnd = vi.fn();

    const { container } = render(
      <RadialBarChart width={500} height={500} data={PageData} throttledEvents={[]}>
        <RadialBar
          isAnimationActive={false}
          cx={250}
          cy={250}
          dataKey="amt"
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      </RadialBarChart>,
    );

    const sector = container.querySelectorAll('.recharts-sector')[0];

    fireEvent.touchMove(sector, { touches: [{ clientX: 200, clientY: 200 }] });
    expect(onTouchMove).toHaveBeenCalledTimes(1);
    expectLastCalledWith(
      onTouchMove,
      {
        name: 'Page A',
        uv: 400,
        pv: 2400,
        amt: 2400,
        background: {
          cx: 250,
          cy: 250,
          innerRadius: 3.266666666666666,
          outerRadius: 29.266666666666666,
          startAngle: 0,
          endAngle: 360,
        },
        payload: {
          name: 'Page A',
          uv: 400,
          pv: 2400,
          amt: 2400,
        },
        value: 2400,
        cx: 250,
        cy: 250,
        innerRadius: 3.266666666666666,
        outerRadius: 29.266666666666666,
        startAngle: 0,
        endAngle: 360,
      },
      0,
      expect.any(Object),
    );
  });

  describe('state integration', () => {
    it('should report its settings to Redux state, and remove it when removed from DOM', () => {
      const polarItemsSpy = vi.fn();
      const Comp = (): null => {
        polarItemsSpy(useAppSelector(state => selectPolarItemsSettings(state, 'angleAxis', 0)));
        return null;
      };
      const { rerender } = render(
        <RadialBarChart width={100} height={100} data={PageData}>
          <RadialBar dataKey="value" />
          <Comp />
        </RadialBarChart>,
      );

      const expectedPolarItemsSettings: RadialBarSettings = {
        id: expect.stringMatching('radialBar-'),
        barSize: undefined,
        stackId: undefined,
        type: 'radialBar',
        angleAxisId: 0,
        data: undefined,
        dataKey: 'value',
        hide: false,
        radiusAxisId: 0,
        minPointSize: 0,
        maxBarSize: undefined,
      };
      expect(polarItemsSpy).toHaveBeenLastCalledWith([expectedPolarItemsSettings]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(2);

      rerender(
        <RadialBarChart width={100} height={100} data={PageData}>
          <Comp />
        </RadialBarChart>,
      );

      expect(polarItemsSpy).toHaveBeenLastCalledWith([]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(4);
    });
  });
});

describe('RadialBar background zIndex', () => {
  const dataWithBackground = [
    { name: 'A', uv: 400, pv: 2400, fill: '#8884d8' },
    { name: 'B', uv: 300, pv: 4567, fill: '#83a6ed' },
  ];

  it('should render background with default zIndex when background prop is true', () => {
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        <RadialBar background isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(dataWithBackground.length);
    const radialBarSectors = container.querySelectorAll('.recharts-radial-bar-sector');
    assertZIndexLayerOrder({ front: radialBarSectors[0], back: backgroundSectors[0] });
  });

  it('should render background with default zIndex when background prop is an object without zIndex', () => {
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        <RadialBar background={{ fill: '#eee' }} isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(dataWithBackground.length);
    const radialBarSectors = container.querySelectorAll('.recharts-radial-bar-sector');
    assertZIndexLayerOrder({ front: radialBarSectors[0], back: backgroundSectors[0] });
  });

  it('should render background with custom zIndex when background prop includes zIndex', () => {
    const customZIndex = DefaultZIndexes.bar + 1;
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        <RadialBar background={{ fill: '#eee', zIndex: customZIndex }} isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );
    act(() => vi.runOnlyPendingTimers());

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(dataWithBackground.length);
    const radialBarSectors = container.querySelectorAll('.recharts-radial-bar-sector');
    assertZIndexLayerOrder({ back: radialBarSectors[0], front: backgroundSectors[0] });
  });

  it('should handle background with zIndex as 0', () => {
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        <RadialBar background={{ fill: '#eee', zIndex: 0 }} isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(dataWithBackground.length);
    const radialBarSectors = container.querySelectorAll('.recharts-radial-bar-sector');
    assertZIndexLayerOrder({ front: radialBarSectors[0], back: backgroundSectors[0] });
  });

  it('should handle negative zIndex values in background prop', () => {
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        <RadialBar background={{ fill: '#eee', zIndex: -150 }} isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );
    act(() => vi.runOnlyPendingTimers());

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(dataWithBackground.length);
    const radialBarSectors = container.querySelectorAll('.recharts-radial-bar-sector');
    assertZIndexLayerOrder({ front: radialBarSectors[0], back: backgroundSectors[0] });
  });

  it('should ignore non-number zIndex values and use default', () => {
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        {/* @ts-expect-error testing runtime behavior with invalid zIndex */}
        <RadialBar background={{ fill: '#eee', zIndex: '1200' }} isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );
    act(() => vi.runOnlyPendingTimers());

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(dataWithBackground.length);
    const radialBarSectors = container.querySelectorAll('.recharts-radial-bar-sector');
    assertZIndexLayerOrder({ front: radialBarSectors[0], back: backgroundSectors[0] });
  });

  it('should handle background prop when it is undefined', () => {
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        <RadialBar background={undefined} isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(0);
  });

  it('should handle background prop when it is false', () => {
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        <RadialBar background={false} isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(0);
  });

  it.each([null, false, undefined] as const)('should not render any background when background=%s', background => {
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        {/* @ts-expect-error testing runtime behavior */}
        <RadialBar background={background} isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(0);
  });

  it('should render backgrounds with non-object values - typescript says it will not but it does!', () => {
    const { container } = rechartsTestRender(
      <RadialBarChart width={500} height={500} data={dataWithBackground}>
        {/* @ts-expect-error testing runtime behavior */}
        <RadialBar background="invalid" isAnimationActive={false} dataKey="pv" />
      </RadialBarChart>,
    );

    const backgroundSectors = container.querySelectorAll('.recharts-radial-bar-background-sector');
    expect(backgroundSectors).toHaveLength(dataWithBackground.length);
  });
});

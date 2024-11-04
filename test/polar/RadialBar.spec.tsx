import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Customized, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectPolarItemsSettings } from '../../src/state/selectors/polarSelectors';
import { PolarGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';
import { PageData, ringsData } from '../_data';
import { expectRadialBars } from '../helper/expectRadialBars';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { expectScale } from '../helper/expectScale';
import {
  selectPolarAxisScale,
  selectPolarAxisTicks,
  selectPolarGraphicalItemAxisTicks,
} from '../../src/state/selectors/polarScaleSelectors';
import {
  pickMaxBarSize,
  RadialBarSettings,
  selectBandSizeOfPolarAxis,
  selectPolarBarBandSize,
  selectPolarBarPosition,
  selectPolarBarSizeList,
  selectRadialBarSectors,
} from '../../src/state/selectors/radialBarSelectors';
import {
  selectAngleAxis,
  selectRadiusAxis,
  selectRadiusAxisRangeWithReversed,
} from '../../src/state/selectors/polarAxisSelectors';
import { selectBarCategoryGap, selectBarGap, selectRootMaxBarSize } from '../../src/state/selectors/rootPropsSelectors';
import { selectRealScaleType } from '../../src/state/selectors/axisSelectors';

describe('<RadialBar />', () => {
  describe('with implicit axes', () => {
    const radialBarSettings: RadialBarSettings = {
      dataKey: 'pv',
      minPointSize: 0,
      stackId: undefined,
      maxBarSize: undefined,
      barSize: undefined,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={500} height={500} data={PageData}>
        <RadialBar isAnimationActive={false} label dataKey={radialBarSettings.dataKey} />
        {children}
      </RadialBarChart>
    ));

    it('should select polar items', () => {
      const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([
        {
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
      expect(spy).toHaveBeenLastCalledWith({
        allowDataOverflow: false,
        allowDecimals: false,
        // generator has allowDuplicatedCategory set to true, but the actual axis rendering ignores the prop
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        id: undefined,
        includeHidden: false,
        name: undefined,
        reversed: false,
        scale: 'auto',
        tick: true,
        tickCount: 5,
        ticks: undefined,
        type: 'number',
        unit: undefined,
      });
    });

    it('should select angle axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
      expectScale(spy, {
        domain: [0, 9800],
        range: [0, 360],
      });
    });

    it('should select radius axis settings', () => {
      const { spy } = renderTestCase(state => selectRadiusAxis(state, 0));
      expect(spy).toHaveBeenLastCalledWith({
        allowDataOverflow: false,
        allowDecimals: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        id: undefined,
        includeHidden: false,
        name: undefined,
        reversed: false,
        scale: 'auto',
        tick: true,
        tickCount: 5,
        ticks: undefined,
        type: 'number',
        unit: undefined,
      });
    });

    it('should select radius axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
      expectScale(spy, {
        domain: [0, 1, 2, 3, 4, 5],
        range: [0, 196],
      });
    });

    it('should select barBandSize', () => {
      const { spy } = renderTestCase(state => selectBandSizeOfPolarAxis(state, 0, 0));
      expect(spy).toHaveBeenLastCalledWith(32.666666666666664);
    });

    it('should pick childMaxBarSize', () => {
      const { spy } = renderTestCase(state => pickMaxBarSize(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith(undefined);
    });

    it('should select selectRootMaxBarSize', () => {
      const { spy } = renderTestCase(selectRootMaxBarSize);
      expect(spy).toHaveBeenLastCalledWith(undefined);
    });

    it('should select bar size list', () => {
      const { spy } = renderTestCase(state => selectPolarBarSizeList(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith([
        {
          barSize: undefined,
          dataKeys: ['pv'],
          stackId: undefined,
        },
      ]);
    });

    it('should select barGap', () => {
      const { spy } = renderTestCase(selectBarGap);
      expect(spy).toHaveBeenLastCalledWith(4);
    });

    it('should select barCategoryGap', () => {
      const { spy } = renderTestCase(selectBarCategoryGap);
      expect(spy).toHaveBeenLastCalledWith('10%');
    });

    it('should select bandSize', () => {
      const { spy } = renderTestCase(state => selectPolarBarBandSize(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith(32.666666666666664);
    });

    it('should select bar position and offset', () => {
      const { spy } = renderTestCase(state => selectPolarBarPosition(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith({ offset: 3.266666666666666, size: 26 });
    });

    it('should select radial bar sectors', () => {
      const { spy } = renderTestCase(state => selectRadialBarSectors(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith([
        {
          name: 'Page A',
          uv: 400,
          pv: 2400,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: -13.066666666666666,
            outerRadius: 12.933333333333334,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
          value: 2400,
          cx: 250,
          cy: 250,
          innerRadius: -13.066666666666666,
          outerRadius: 12.933333333333334,
          startAngle: 0,
          endAngle: 88.16326530612244,
        },
        {
          name: 'Page B',
          uv: 300,
          pv: 4567,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 19.599999999999998,
            outerRadius: 45.599999999999994,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
          value: 4567,
          cx: 250,
          cy: 250,
          innerRadius: 19.599999999999998,
          outerRadius: 45.599999999999994,
          startAngle: 0,
          endAngle: 167.76734693877552,
        },
        {
          name: 'Page C',
          uv: 300,
          pv: 1398,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 52.266666666666666,
            outerRadius: 78.26666666666667,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
          value: 1398,
          cx: 250,
          cy: 250,
          innerRadius: 52.266666666666666,
          outerRadius: 78.26666666666667,
          startAngle: 0,
          endAngle: 51.35510204081632,
        },
        {
          name: 'Page D',
          uv: 200,
          pv: 9800,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 84.93333333333334,
            outerRadius: 110.93333333333334,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
          value: 9800,
          cx: 250,
          cy: 250,
          innerRadius: 84.93333333333334,
          outerRadius: 110.93333333333334,
          startAngle: 0,
          endAngle: 360,
        },
        {
          name: 'Page E',
          uv: 278,
          pv: 3908,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 117.6,
            outerRadius: 143.6,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
          value: 3908,
          cx: 250,
          cy: 250,
          innerRadius: 117.6,
          outerRadius: 143.6,
          startAngle: 0,
          endAngle: 143.5591836734694,
        },
        {
          name: 'Page F',
          uv: 189,
          pv: 4800,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 150.26666666666665,
            outerRadius: 176.26666666666665,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
          value: 4800,
          cx: 250,
          cy: 250,
          innerRadius: 150.26666666666665,
          outerRadius: 176.26666666666665,
          startAngle: 0,
          endAngle: 176.32653061224488,
        },
      ]);
    });

    it('should render sectors', () => {
      const { container } = renderTestCase();

      expectRadialBars(container, [
        {
          d: 'M 262.93333333333334,250 A 12.933333333333334,12.933333333333334,0, 0,0, 250.4145337365934,237.07331160380443 L 250,250 Z',
        },
        {
          d: 'M 295.6,250 A 45.599999999999994,45.599999999999994,0, 0,0, 205.43533428174044,240.3381901581649 L 230.8450121035551,245.84711682236912 A 19.599999999999998,19.599999999999998,0, 0,1, 269.6,250 Z',
        },
        {
          d: 'M 328.26666666666665,250 A 78.26666666666667,78.26666666666667,0, 0,0, 298.87689295503134,188.87127969461883 L 282.64010568717595,209.17809478754785 A 52.266666666666666,52.266666666666666,0, 0,1, 302.26666666666665,250 Z',
        },
        {
          d: 'M 360.93333333333334,250 A 110.93333333333334,110.93333333333334,0, 1,0, 360.93333331643726,250.00193615191677 L 334.93333332039725,250.00148236631128 A 84.93333333333334,84.93333333333334,0, 1,1, 334.93333333333334,250 Z',
        },
        {
          d: 'M 393.6,250 A 143.6,143.6,0, 0,0, 134.47798538955743,164.70273075681325 L 155.39422758921972,180.1465260236855 A 117.6,117.6,0, 0,1, 367.6,250 Z',
        },
        {
          d: 'M 426.26666666666665,250 A 176.26666666666665,176.26666666666665,0, 0,0, 74.09549210454074,238.7065558913996 L 100.04207231604948,240.37238161089817 A 150.26666666666665,150.26666666666665,0, 0,1, 400.26666666666665,250 Z',
        },
      ]);
    });
  });

  describe('with configured axes', () => {
    const radialBarSettings: RadialBarSettings = {
      dataKey: 'pv',
      minPointSize: 0,
      stackId: undefined,
      maxBarSize: undefined,
      barSize: undefined,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={500} height={500} data={PageData}>
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" />
        <PolarRadiusAxis dataKey="name" orientation="middle" type="category" angle={90} />
        <RadialBar isAnimationActive={false} dataKey={radialBarSettings.dataKey} />
        {children}
      </RadialBarChart>
    ));

    it('should select polar items', () => {
      const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([
        {
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
      expect(spy).toHaveBeenLastCalledWith({
        allowDataOverflow: false,
        allowDecimals: undefined,
        allowDuplicatedCategory: false,
        dataKey: 'pv',
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

    it('should select angle axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
      expectScale(spy, {
        domain: [0, 9800],
        range: [0, 360],
      });
    });

    it('should select radius axis settings', () => {
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
    });

    it('should select radius axis realScaleType', () => {
      const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith('band');
    });

    it('should select radius axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
      expectScale(spy, {
        domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F'],
        range: [0, 196],
        bandwidth: 32.666666666666664,
      });
    });

    it('should select radius axis range', () => {
      const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
      expect(spy).toHaveBeenLastCalledWith([0, 196]);
    });

    it.fails('should select radius axis ticks', () => {
      // this selects different ticks than generator, TODO find out why
      const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([
        {
          coordinate: 0,
          value: 'Page A',
          index: 0,
          offset: 0,
        },
        {
          coordinate: 32.666666666666664,
          value: 'Page B',
          index: 1,
          offset: 0,
        },
        {
          coordinate: 65.33333333333333,
          value: 'Page C',
          index: 2,
          offset: 0,
        },
        {
          coordinate: 98,
          value: 'Page D',
          index: 3,
          offset: 0,
        },
        {
          coordinate: 130.66666666666666,
          value: 'Page E',
          index: 4,
          offset: 0,
        },
        {
          coordinate: 163.33333333333331,
          value: 'Page F',
          index: 5,
          offset: 0,
        },
      ]);
    });

    it('should select bar size and offset', () => {
      const { spy } = renderTestCase(state => selectPolarBarPosition(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith({ offset: 3.266666666666666, size: 26 });
    });

    it('should select bandSize', () => {
      const { spy } = renderTestCase(state => selectPolarBarBandSize(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith(32.666666666666664);
    });

    it('should select bar size list', () => {
      const { spy } = renderTestCase(state => selectPolarBarSizeList(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith([
        {
          barSize: undefined,
          dataKeys: ['pv'],
          stackId: undefined,
        },
      ]);
    });

    it('should select barGap', () => {
      const { spy } = renderTestCase(selectBarGap);
      expect(spy).toHaveBeenLastCalledWith(4);
    });

    it('should select barCategoryGap', () => {
      const { spy } = renderTestCase(selectBarCategoryGap);
      expect(spy).toHaveBeenLastCalledWith('10%');
    });

    it.fails('should select radial bar sectors', () => {
      // this selects different domain than generator, TODO find out why
      const { spy } = renderTestCase(state => selectRadialBarSectors(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith([
        {
          name: 'Page A',
          uv: 400,
          pv: 2400,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: -13.066666666666666,
            outerRadius: 12.933333333333334,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
          value: 2400,
          cx: 250,
          cy: 250,
          innerRadius: -13.066666666666666,
          outerRadius: 12.933333333333334,
          startAngle: 0,
          endAngle: 88.16326530612244,
        },
        {
          name: 'Page B',
          uv: 300,
          pv: 4567,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 19.599999999999998,
            outerRadius: 45.599999999999994,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
          value: 4567,
          cx: 250,
          cy: 250,
          innerRadius: 19.599999999999998,
          outerRadius: 45.599999999999994,
          startAngle: 0,
          endAngle: 167.76734693877552,
        },
        {
          name: 'Page C',
          uv: 300,
          pv: 1398,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 52.266666666666666,
            outerRadius: 78.26666666666667,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
          value: 1398,
          cx: 250,
          cy: 250,
          innerRadius: 52.266666666666666,
          outerRadius: 78.26666666666667,
          startAngle: 0,
          endAngle: 51.35510204081632,
        },
        {
          name: 'Page D',
          uv: 200,
          pv: 9800,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 84.93333333333334,
            outerRadius: 110.93333333333334,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
          value: 9800,
          cx: 250,
          cy: 250,
          innerRadius: 84.93333333333334,
          outerRadius: 110.93333333333334,
          startAngle: 0,
          endAngle: 360,
        },
        {
          name: 'Page E',
          uv: 278,
          pv: 3908,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 117.6,
            outerRadius: 143.6,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
          value: 3908,
          cx: 250,
          cy: 250,
          innerRadius: 117.6,
          outerRadius: 143.6,
          startAngle: 0,
          endAngle: 143.5591836734694,
        },
        {
          name: 'Page F',
          uv: 189,
          pv: 4800,
          amt: 2400,
          background: {
            cx: 250,
            cy: 250,
            innerRadius: 150.26666666666665,
            outerRadius: 176.26666666666665,
            startAngle: 0,
            endAngle: 360,
          },
          payload: { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
          value: 4800,
          cx: 250,
          cy: 250,
          innerRadius: 150.26666666666665,
          outerRadius: 176.26666666666665,
          startAngle: 0,
          endAngle: 176.32653061224488,
        },
      ]);
    });

    it('should render sectors', () => {
      const { container } = renderTestCase();
      expectRadialBars(container, [
        {
          d: 'M 279.26666666666665,250 A 29.266666666666666,29.266666666666666,0, 0,0, 250.93804283693044,220.74837007252654 L 250.10470182006742,246.7350116937444 A 3.266666666666666,3.266666666666666,0, 0,1, 253.26666666666668,250 Z',
        },
        {
          d: 'M 311.93333333333334,250 A 61.93333333333333,61.93333333333333,0, 0,0, 189.47284436803636,236.87745417680586 L 214.88252218985102,242.38638084101007 A 35.93333333333333,35.93333333333333,0, 0,1, 285.93333333333334,250 Z',
        },
        {
          d: 'M 344.6,250 A 94.6,94.6,0, 0,0, 309.07692598227385,176.11443431572755 L 292.84013871441846,196.42124940865654 A 68.6,68.6,0, 0,1, 318.6,250 Z',
        },
        {
          d: 'M 377.26666666666665,250 A 127.26666666666667,127.26666666666667,0, 1,0, 377.2666666472828,250.00222122236124 L 351.2666666512429,250.00176743675576 A 101.26666666666667,101.26666666666667,0, 1,1, 351.26666666666665,250 Z',
        },
        {
          d: 'M 409.93333333333334,250 A 159.93333333333334,159.93333333333334,0, 0,0, 121.33829477694903,155.00085937121403 L 142.25453697661135,170.44465463808626 A 133.93333333333334,133.93333333333334,0, 0,1, 383.93333333333334,250 Z',
        },
        {
          d: 'M 442.6,250 A 192.6,192.6,0, 0,0, 57.79571735628522,237.66007563171462 L 83.74229756779397,239.3259013512132 A 166.6,166.6,0, 0,1, 416.6,250 Z',
        },
      ]);
    });
  });

  describe('RingsWithTypes', () => {
    const radialBarSettings: RadialBarSettings = {
      dataKey: 'rings',
      minPointSize: 0,
      stackId: undefined,
      maxBarSize: undefined,
      barSize: undefined,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={500} height={500} data={ringsData}>
        <RadialBar isAnimationActive={false} dataKey={radialBarSettings.dataKey} />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis type="category" stroke="black" />
        {children}
      </RadialBarChart>
    ));

    it('should select polar items', () => {
      const { spy } = renderTestCase(state => selectPolarItemsSettings(state, 'angleAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([
        {
          angleAxisId: 0,
          barSize: undefined,
          data: undefined,
          dataKey: 'rings',
          hide: false,
          radiusAxisId: 0,
          stackId: undefined,
          type: 'radialBar',
        },
      ]);
    });

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
        type: 'number',
        unit: undefined,
      });
    });

    it('should select angle axis realScaleType', () => {
      const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
      expect(spy).toHaveBeenLastCalledWith('linear');
    });

    it('should select angle axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
      expectScale(spy, {
        domain: [0, 9],
        range: [0, 360],
      });
    });

    it('should select radius axis settings', () => {
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
        type: 'category',
        unit: undefined,
      });
    });

    it('should select radius axis realScaleType', () => {
      const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith('band');
    });

    it('should select radius axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
      expectScale(spy, {
        domain: [0, 1, 2, 3],
        range: [0, 196],
        bandwidth: 49,
      });
    });

    it('should select radius axis ticks for axis', () => {
      const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([
        { coordinate: 24.5, index: 0, offset: 24.5, value: 0 },
        { coordinate: 73.5, index: 1, offset: 24.5, value: 1 },
        { coordinate: 122.5, index: 2, offset: 24.5, value: 2 },
        { coordinate: 171.5, index: 3, offset: 24.5, value: 3 },
      ]);
    });

    it('should select radius axis ticks for graphical item', () => {
      const { spy } = renderTestCase(state => selectPolarGraphicalItemAxisTicks(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([
        { coordinate: 0, value: 0, index: 0, offset: 0 },
        { coordinate: 49, value: 1, index: 1, offset: 0 },
        { coordinate: 98, value: 2, index: 2, offset: 0 },
        { coordinate: 147, value: 3, index: 3, offset: 0 },
      ]);
    });

    it('should select radial bar sectors', () => {
      const { spy } = renderTestCase(state => selectRadialBarSectors(state, 0, 0, radialBarSettings, undefined));
      expect(spy).toHaveBeenLastCalledWith([
        {
          name: 'Elves',
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
          d: 'M 293.9,250 A 43.9,43.9,0, 0,0, 228.05,211.98148477386314 L 247.55,245.75647552145625 A 4.9,4.9,0, 0,1, 254.9,250 Z',
        },
        {
          d: 'M 342.9,250 A 92.9,92.9,0, 1,0, 266.1319157052578,341.48864025483414 L 259.3596367762475,303.081137887358 A 53.9,53.9,0, 1,1, 303.9,250 Z',
        },
        {
          d: 'M 391.9,250 A 141.9,141.9,0, 1,0, 391.8999999783874,250.00247662220846 L 352.89999998432745,250.0017959438002 A 102.9,102.9,0, 1,1, 352.9,250 Z',
        },
        {
          d: 'M 440.9,250 A 190.9,190.9,0, 0,0, 396.23788419141295,127.29184531083965 L 366.36215090977277,152.3605620886147 A 151.9,151.9,0, 0,1, 401.9,250 Z',
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

  test('calls mouse handler events', async () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();

    const { container } = render(
      <RadialBarChart width={500} height={500} data={PageData}>
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

    await userEvent.hover(sector);
    expect(onMouseEnter).toHaveBeenCalled();
    await userEvent.unhover(sector);
    expect(onMouseLeave).toHaveBeenCalled();
    await userEvent.click(sector);
    expect(onClick).toHaveBeenCalled();
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
          <Customized component={<Comp />} />
        </RadialBarChart>,
      );

      const expectedPolarItemsSettings: PolarGraphicalItemSettings = {
        barSize: undefined,
        stackId: undefined,
        type: 'radialBar',
        angleAxisId: 0,
        data: undefined,
        dataKey: 'value',
        hide: false,
        radiusAxisId: 0,
      };
      expect(polarItemsSpy).toHaveBeenLastCalledWith([expectedPolarItemsSettings]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(3);

      rerender(
        <RadialBarChart width={100} height={100} data={PageData}>
          <Customized component={<Comp />} />
        </RadialBarChart>,
      );

      expect(polarItemsSpy).toHaveBeenLastCalledWith([]);
      expect(polarItemsSpy).toHaveBeenCalledTimes(5);
    });
  });
});

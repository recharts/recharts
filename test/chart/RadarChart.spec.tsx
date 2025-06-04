import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, test, vi } from 'vitest';
import { exampleRadarData } from '../_data';
import { Customized, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { selectRealScaleType } from '../../src/state/selectors/axisSelectors';
import { ExpectedRadarPolygon, expectRadarPolygons } from '../helper/expectRadarPolygons';
import { useAppSelectorWithStableTest } from '../helper/selectorTestHelpers';
import {
  selectAngleAxis,
  selectMaxRadius,
  selectOuterRadius,
  selectPolarOptions,
  selectRadiusAxisRangeWithReversed,
} from '../../src/state/selectors/polarAxisSelectors';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { selectPolarAxisScale } from '../../src/state/selectors/polarScaleSelectors';
import { expectLastCalledWithScale } from '../helper/expectScale';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';

describe('<RadarChart />', () => {
  describe('with implicit axes', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadarChart cx={100} cy={150} outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <Radar dataKey="value" />
        {children}
      </RadarChart>
    ));

    it('should select angle settings', () => {
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
    });

    it('should select angle axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
      expectLastCalledWithScale(spy, { domain: [0, 1, 2, 3, 4, 5, 6, 7], range: [90, -270] });
    });

    it('should select angle axis scale type', () => {
      const { spy } = renderTestCase(state => selectRealScaleType(state, 'angleAxis', 0));
      expect(spy).toHaveBeenLastCalledWith('band');
    });

    it('should select radius axis settings', () => {
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
    });

    it('should select max radius', () => {
      const { spy } = renderTestCase(selectMaxRadius);
      expect(spy).toHaveBeenLastCalledWith(245);
    });

    it('should select polar options', () => {
      const { spy } = renderTestCase(selectPolarOptions);
      expect(spy).toHaveBeenLastCalledWith({
        cx: 100,
        cy: 150,
        endAngle: -270,
        innerRadius: 0,
        outerRadius: 150,
        startAngle: 90,
      });
    });

    it('should select outer radius', () => {
      const { spy } = renderTestCase(selectOuterRadius);
      expect(spy).toHaveBeenLastCalledWith(150); // TODO this returns 196, why?
    });

    it('should select radius axis range', () => {
      const { spy } = renderTestCase(state => selectRadiusAxisRangeWithReversed(state, 0));
      expect(spy).toHaveBeenLastCalledWith([0, 150]);
    });

    it('should select radius axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
      expectLastCalledWithScale(spy, { domain: [0, 1000], range: [0, 150] }); // TODO this returns 0, 196, why?
    });

    it('should select radius axis scale type', () => {
      const { spy } = renderTestCase(state => selectRealScaleType(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith('linear');
    });

    it('should render polygon', () => {
      const { container } = render(
        <RadarChart cx={100} cy={150} outerRadius={150} width={600} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
        </RadarChart>,
      );
      expectRadarPolygons(container, [
        {
          d: 'M100,150L100,150L100,150L100,150L100,150L100,150L100,150L100,150L100,150Z',
          fill: null,
          fillOpacity: null,
        },
      ]);
    });
  });

  test('Renders polygon with implicit axes', () => {
    const angleAxisSettingsSpy = vi.fn();
    const angleAxisRealScaleTypeSpy = vi.fn();
    const radiusAxisRealScaleTypeSpy = vi.fn();
    const Comp = (): null => {
      angleAxisSettingsSpy(useAppSelectorWithStableTest(state => selectAngleAxis(state, 0)));
      angleAxisRealScaleTypeSpy(useAppSelectorWithStableTest(state => selectRealScaleType(state, 'angleAxis', 0)));
      radiusAxisRealScaleTypeSpy(useAppSelectorWithStableTest(state => selectRealScaleType(state, 'radiusAxis', 0)));
      return null;
    };
    const { container } = render(
      <RadarChart cx={100} cy={150} outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <Radar dataKey="value" />
        <Customized component={<Comp />} />
      </RadarChart>,
    );

    expect(angleAxisSettingsSpy).toHaveBeenLastCalledWith({
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

    expect(angleAxisRealScaleTypeSpy).toHaveBeenLastCalledWith('band');
    expect(radiusAxisRealScaleTypeSpy).toHaveBeenLastCalledWith('linear');

    expectRadarPolygons(container, [
      {
        d: 'M100,150L100,150L100,150L100,150L100,150L100,150L100,150L100,150L100,150Z',
        fill: null,
        fillOpacity: null,
      },
    ]);
  });

  test('Renders polygon with default axes', () => {
    const angleAxisSettingsSpy = vi.fn();
    const angleAxisRealScaleTypeSpy = vi.fn();
    const radiusAxisRealScaleTypeSpy = vi.fn();
    const Comp = (): null => {
      angleAxisSettingsSpy(useAppSelectorWithStableTest(state => selectAngleAxis(state, 0)));
      angleAxisRealScaleTypeSpy(useAppSelectorWithStableTest(state => selectRealScaleType(state, 'angleAxis', 0)));
      radiusAxisRealScaleTypeSpy(useAppSelectorWithStableTest(state => selectRealScaleType(state, 'radiusAxis', 0)));
      return null;
    };
    const { container } = render(
      <RadarChart cx={100} cy={150} outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <PolarAngleAxis />
        <PolarRadiusAxis />
        <Radar dataKey="value" />
        <Customized component={<Comp />} />
      </RadarChart>,
    );

    expect(angleAxisSettingsSpy).toHaveBeenLastCalledWith({
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

    expect(angleAxisRealScaleTypeSpy).toHaveBeenLastCalledWith('band');
    expect(radiusAxisRealScaleTypeSpy).toHaveBeenLastCalledWith('linear');

    expectRadarPolygons(container, [
      {
        d: 'M100,150L100,150L100,150L100,150L100,150L100,150L100,150L100,150L100,150Z',
        fill: null,
        fillOpacity: null,
      },
    ]);
  });

  test('innerRadius prop does not do anything', () => {
    const commonProps = {
      width: 600,
      height: 500,
      data: exampleRadarData,
    };
    const expectedPolygons: ReadonlyArray<ExpectedRadarPolygon> = [
      {
        d: 'M300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250Z',
        fill: null,
        fillOpacity: null,
      },
    ];
    const { container, rerender } = render(
      <RadarChart innerRadius={10} {...commonProps}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expectRadarPolygons(container, expectedPolygons);

    rerender(
      <RadarChart innerRadius={20} {...commonProps}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expectRadarPolygons(container, expectedPolygons);
  });

  test('outerRadius prop does not do anything', () => {
    const commonProps = {
      width: 600,
      height: 500,
      data: exampleRadarData,
    };
    const expectedPolygons: ReadonlyArray<ExpectedRadarPolygon> = [
      {
        d: 'M300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250Z',
        fill: null,
        fillOpacity: null,
      },
    ];
    const { container, rerender } = render(
      <RadarChart outerRadius={10} {...commonProps}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expectRadarPolygons(container, expectedPolygons);

    rerender(
      <RadarChart outerRadius={20} {...commonProps}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expectRadarPolygons(container, expectedPolygons);
  });

  test('clockWise prop does not do anything', () => {
    const commonProps = {
      width: 600,
      height: 500,
      data: exampleRadarData,
    };
    const expectedPolygons: ReadonlyArray<ExpectedRadarPolygon> = [
      {
        d: 'M300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250Z',
        fill: null,
        fillOpacity: null,
      },
    ];
    const { container, rerender } = render(
      // @ts-expect-error typescript says the clockWise prop does not exist, but it's documented on the website, why?
      <RadarChart clockWise {...commonProps}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expectRadarPolygons(container, expectedPolygons);

    rerender(
      // @ts-expect-error typescript says the clockWise prop does not exist, but it's documented on the website, why?
      <RadarChart clockWise={false} {...commonProps}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expectRadarPolygons(container, expectedPolygons);
  });

  test('startAngle and endAngle props do not do anything', () => {
    const commonProps = {
      width: 600,
      height: 500,
      data: exampleRadarData,
    };

    const { container, rerender } = render(
      <RadarChart startAngle={20} endAngle={70} {...commonProps}>
        <Radar dataKey="value" />
      </RadarChart>,
    );

    expectRadarPolygons(container, [
      {
        d: 'M300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250Z',
        fill: null,
        fillOpacity: null,
      },
    ]);

    rerender(
      <RadarChart startAngle={90} endAngle={270} {...commonProps}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expectRadarPolygons(container, [
      {
        d: 'M300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250Z',
        fill: null,
        fillOpacity: null,
      },
    ]);
  });

  test('renders multiple polygons with different dataKeys', () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <Radar dataKey="value" fill="green" fillOpacity={0.3} />
        <Radar dataKey="half" fill="blue" fillOpacity={0.6} />
      </RadarChart>,
    );

    expectRadarPolygons(container, [
      {
        d: 'M300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250Z',
        fill: 'green',
        fillOpacity: '0.3',
      },
      {
        d: 'M300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250Z',
        fill: 'blue',
        fillOpacity: '0.6',
      },
    ]);
  });

  it('should move the polygons when cx and cy are percent string', () => {
    const { container } = render(
      <RadarChart cx="10%" cy="90%" outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <Radar dataKey="value" fill="green" fillOpacity={0.3} />
        <Radar dataKey="half" fill="blue" fillOpacity={0.6} />
      </RadarChart>,
    );

    expectRadarPolygons(container, [
      {
        d: 'M60,450L60,450L60,450L60,450L60,450L60,450L60,450L60,450L60,450Z',
        fill: 'green',
        fillOpacity: '0.3',
      },
      {
        d: 'M60,450L60,450L60,450L60,450L60,450L60,450L60,450L60,450L60,450Z',
        fill: 'blue',
        fillOpacity: '0.6',
      },
    ]);
  });

  it('should place the polygons in the middle by default when cx and cy are undefined', () => {
    const { container } = render(
      <RadarChart outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <Radar dataKey="value" fill="green" fillOpacity={0.3} />
        <Radar dataKey="half" fill="blue" fillOpacity={0.6} />
      </RadarChart>,
    );

    expectRadarPolygons(container, [
      {
        d: 'M300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250Z',
        fill: 'green',
        fillOpacity: '0.3',
      },
      {
        d: 'M300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250L300,250Z',
        fill: 'blue',
        fillOpacity: '0.6',
      },
    ]);
  });

  it('should move polygons when cx and cy and outerRadius are updated', () => {
    const { container, rerender } = render(
      <RadarChart cx={100} cy={120} outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <Radar dataKey="value" fill="green" fillOpacity={0.3} />
        <Radar dataKey="half" fill="blue" fillOpacity={0.6} />
      </RadarChart>,
    );

    expectRadarPolygons(container, [
      {
        d: 'M100,120L100,120L100,120L100,120L100,120L100,120L100,120L100,120L100,120Z',
        fill: 'green',
        fillOpacity: '0.3',
      },
      {
        d: 'M100,120L100,120L100,120L100,120L100,120L100,120L100,120L100,120L100,120Z',
        fill: 'blue',
        fillOpacity: '0.6',
      },
    ]);

    rerender(
      <RadarChart cx={200} cy={230} outerRadius={100} width={600} height={500} data={exampleRadarData}>
        <Radar dataKey="value" fill="green" fillOpacity={0.3} />
        <Radar dataKey="half" fill="blue" fillOpacity={0.6} />
      </RadarChart>,
    );

    expectRadarPolygons(container, [
      {
        d: 'M200,230L200,230L200,230L200,230L200,230L200,230L200,230L200,230L200,230Z',
        fill: 'green',
        fillOpacity: '0.3',
      },
      {
        d: 'M200,230L200,230L200,230L200,230L200,230L200,230L200,230L200,230L200,230Z',
        fill: 'blue',
        fillOpacity: '0.6',
      },
    ]);
  });

  test('Render 8 dots when dot=true', () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <Radar isAnimationActive={false} dot dataKey="value" />
      </RadarChart>,
    );
    expect(container.querySelectorAll('.recharts-radar-dot')).toHaveLength(8);
  });

  test('Render 8 labels when label=true', () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <Radar isAnimationActive={false} label dataKey="value" />
      </RadarChart>,
    );
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(8);
  });

  test('Render 1 PolarGrid 1 PolarAngleAxis and 1 PolarRadiusAxis in simple Radar', () => {
    const { container } = render(
      <RadarChart
        cx={300}
        cy={250}
        startAngle={45}
        innerRadius={20}
        outerRadius={150}
        width={600}
        height={500}
        data={exampleRadarData}
      >
        <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
        <PolarGrid />
        <PolarAngleAxis />
        <PolarRadiusAxis orient="middle" angle={67.5} />
      </RadarChart>,
    );
    expect(container.querySelectorAll('.recharts-polar-grid')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-polar-angle-axis')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-polar-radius-axis')).toHaveLength(1);
  });

  test('Render 8 angle grid angle line, 8 angle axis ticks, and 5 radius axis ticks', () => {
    const { container } = render(
      <RadarChart
        cx={300}
        cy={250}
        startAngle={45}
        innerRadius={20}
        outerRadius={150}
        width={600}
        height={500}
        data={exampleRadarData}
      >
        <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
        <PolarGrid />
        <PolarAngleAxis />
        <PolarRadiusAxis orient="middle" angle={67.5} />
      </RadarChart>,
    );
    expect(container.querySelectorAll('.recharts-polar-grid .recharts-polar-grid-angle line')).toHaveLength(8);
    expect(container.querySelectorAll('.recharts-polar-angle-axis .recharts-polar-angle-axis-tick')).toHaveLength(8);
    expect(container.querySelectorAll('.recharts-polar-radius-axis .recharts-polar-radius-axis-tick')).toHaveLength(5);
  });

  test('click on Sector should invoke onClick callback', () => {
    const onClick = vi.fn();
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={exampleRadarData}>
        <Radar dataKey="value" onClick={onClick} />
      </RadarChart>,
    );
    const radar = container.querySelector('.recharts-polygon');
    assertNotNull(radar);
    fireEvent.click(radar);
    expect(onClick).toBeCalled();
  });

  describe('RadarChart layout context', () => {
    it('should provide viewBox', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useViewBox());
        return null;
      };

      render(
        <RadarChart width={100} height={50} barSize={20}>
          <Comp />
        </RadarChart>,
      );

      expect(spy).toHaveBeenLastCalledWith({ height: 40, width: 90, x: 5, y: 5 });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide clipPathId', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useViewBox());
        return null;
      };

      render(
        <RadarChart width={100} height={50} barSize={20}>
          <Comp />
        </RadarChart>,
      );

      expect(spy).toHaveBeenLastCalledWith({ height: 40, width: 90, x: 5, y: 5 });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide chart width', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartWidth());
        return null;
      };

      render(
        <RadarChart width={100} height={50} barSize={20}>
          <Comp />
        </RadarChart>,
      );

      expect(spy).toHaveBeenLastCalledWith(100);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide chart height', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartHeight());
        return null;
      };

      render(
        <RadarChart width={100} height={50} barSize={20}>
          <Comp />
        </RadarChart>,
      );

      expect(spy).toHaveBeenLastCalledWith(50);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

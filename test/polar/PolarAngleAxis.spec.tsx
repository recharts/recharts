import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, test, vi } from 'vitest';
import { Customized, PolarAngleAxis, Radar, RadarChart, RadialBar, RadialBarChart, Surface } from '../../src';
import { TickItem } from '../../src/util/types';
import { exampleRadarData, PageData } from '../_data';
import { assertNotNull } from '../helper/assertNotNull';
import { useAppSelector } from '../../src/state/hooks';
import { AngleAxisSettings } from '../../src/state/polarAxisSlice';
import {
  implicitAngleAxis,
  selectAngleAxis,
  selectAngleAxisRangeWithReversed,
} from '../../src/state/selectors/polarAxisSelectors';
import { BaseCartesianAxis } from '../../src/state/cartesianAxisSlice';
import { selectAxisDomain, selectRealScaleType } from '../../src/state/selectors/axisSelectors';

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

    expectAngleAxisTicks(container, [
      {
        x1: '299.2403876506104',
        x2: '307.1188496747081',
        y1: '241.3175911166535',
        y2: '239.92840569531805',
      },
      {
        x1: '258.68240888334657',
        x2: '260.07159430468204',
        y1: '299.2403876506104',
        y2: '307.11884967470803',
      },
      {
        x1: '296.98463103929544',
        x2: '304.5021720055827',
        y1: '232.89899283371656',
        y2: '230.1628316871112',
      },
      {
        x1: '288.3022221559489',
        x2: '294.4305777009007',
        y1: '217.86061951567302',
        y2: '212.71831863818073',
      },
      {
        x1: '250',
        x2: '250',
        y1: '200',
        y2: '192',
      },
    ]);
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

    expectAngleAxisTicks(container, []);
  });

  describe('in RadarChart', () => {
    test('Renders ticks', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarAngleAxis dataKey="value" />
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

    test.each([
      { axisType: 'number', expectedScale: 'linear' },
      { axisType: 'category', expectedScale: 'band' },
      { axisType: undefined, expectedScale: 'band' },
    ] as const)('uses $expectedScale scale when type=$axisType', ({ axisType, expectedScale }) => {
      const realScaleTypeSpy = vi.fn();
      const Comp = (): null => {
        realScaleTypeSpy(useAppSelector(state => selectRealScaleType(state, 'angleAxis', 0)));
        return null;
      };

      render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="uv" />
          <PolarAngleAxis dataKey="uv" type={axisType} />
          <Customized component={<Comp />} />
        </RadarChart>,
      );

      expect(realScaleTypeSpy).toHaveBeenLastCalledWith(expectedScale);
      expect(realScaleTypeSpy).toHaveBeenCalledTimes(3);
    });
  });

  describe('in RadialBarChart', () => {
    test('Renders polar angle axis with RadialBarChart', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={PageData}>
          <RadialBar dataKey="uv" />
          <PolarAngleAxis />
        </RadialBarChart>,
      );

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

    test.each([
      { axisType: 'number', expectedScale: 'linear' },
      { axisType: 'category', expectedScale: 'linear' },
      { axisType: undefined, expectedScale: 'linear' },
    ] as const)('uses $expectedScale scale when type=$axisType', ({ axisType, expectedScale }) => {
      const realScaleTypeSpy = vi.fn();
      const Comp = (): null => {
        realScaleTypeSpy(useAppSelector(state => selectRealScaleType(state, 'angleAxis', 0)));
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
      expect(realScaleTypeSpy).toHaveBeenCalledTimes(3);
    });
  });

  describe('state integration', () => {
    it('should report its settings to Redux store, and remove it when component is removed', () => {
      const angleAxisSpy = vi.fn();
      const Comp = (): null => {
        angleAxisSpy(useAppSelector(state => selectAngleAxis(state, 0)));
        return null;
      };
      const { rerender } = render(
        <RadarChart width={1} height={2}>
          <PolarAngleAxis />
          <Customized component={Comp} />
        </RadarChart>,
      );
      const expectedAxis: AngleAxisSettings = {
        allowDataOverflow: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        includeHidden: false,
        name: undefined,
        reversed: false,
        scale: 'auto',
        type: 'category',
        unit: undefined,
        id: 0,
      };
      expect(angleAxisSpy).toHaveBeenLastCalledWith(expectedAxis);

      rerender(
        <RadarChart width={1} height={2}>
          <Customized component={Comp} />
        </RadarChart>,
      );
      expect(angleAxisSpy).toHaveBeenLastCalledWith(implicitAngleAxis);
      expect(angleAxisSpy).toHaveBeenCalledTimes(5);
    });

    it('should select angle axis settings', () => {
      const axisSettingsSpy = vi.fn();
      const angleAxisRangeSpy = vi.fn();
      const angleAxisDomainSpy = vi.fn();
      const Comp = (): null => {
        axisSettingsSpy(useAppSelector(state => selectAngleAxis(state, 'angle-id')));
        angleAxisRangeSpy(useAppSelector(state => selectAngleAxisRangeWithReversed(state, 'angle-id')));
        angleAxisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'angleAxis', 'angle-id')));
        return null;
      };
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
            // why does AngleAxis not support unit?
            // unit="cm"
          />
          <Customized component={<Comp />} />
        </RadarChart>,
      );

      const expectedSettings: BaseCartesianAxis = {
        allowDataOverflow: false,
        allowDuplicatedCategory: false,
        dataKey: 'value',
        id: 'angle-id',
        includeHidden: false,
        name: 'angle-name',
        reversed: true,
        scale: 'log',
        type: 'category',
        unit: undefined,
      };
      expect(axisSettingsSpy).toHaveBeenLastCalledWith(expectedSettings);
      expect(axisSettingsSpy).toHaveBeenCalledTimes(3);

      expect(angleAxisRangeSpy).toHaveBeenLastCalledWith([-270, 90]);
      expect(angleAxisRangeSpy).toHaveBeenCalledTimes(3);

      expect(angleAxisDomainSpy).toHaveBeenLastCalledWith([420, 460, 999, 500, 864, 650, 765, 365]);
      expect(angleAxisDomainSpy).toHaveBeenCalledTimes(3);
    });
  });
});

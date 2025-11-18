import React, { ReactNode } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { BarChart, CartesianGrid, Scatter, ScatterChart, Surface, Tooltip, XAxis, YAxis, ZAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { useAppSelector } from '../../src/state/hooks';
import {
  selectAxisDomain,
  selectRealScaleType,
  selectZAxisSettings,
  selectZAxisWithScale,
} from '../../src/state/selectors/axisSelectors';
import { ZAxisSettings } from '../../src/state/cartesianAxisSlice';
import { useIsPanorama } from '../../src/context/PanoramaContext';
import { expectTooltipPayload } from '../component/Tooltip/tooltipTestHelpers';
import { createSelectorTestCase, rechartsTestRender } from '../helper/createSelectorTestCase';
import { userEventSetup } from '../helper/userEventSetup';

describe('<ZAxis />', () => {
  const data = [
    {
      name: 'Page A',
      xAxis: 590,
      zAxis: 800,
      yAxis: 1000,
    },
    {
      name: 'Page B',
      xAxis: 490,
      zAxis: 100,
      yAxis: 1400,
    },
  ];
  it('should not render anything', () => {
    rechartsTestRender(
      <Surface width={500} height={500}>
        <ZAxis dataKey="x" name="stature" unit="cm" />
      </Surface>,
    );
    const svg = document.querySelector('svg');
    assertNotNull(svg);

    expect(svg).toBeInTheDocument();
    expect(svg.children).toHaveLength(2);
  });

  it('Renders Scatters symbols and tooltips with Z axis data', async () => {
    const user = userEventSetup();
    const { container } = rechartsTestRender(
      <ScatterChart height={400} width={400}>
        <XAxis dataKey="xAxis" type="number" />
        <YAxis dataKey="yAxis" />
        <ZAxis dataKey="zAxis" name="test name" range={[0, 2000]} unit="km" />
        <CartesianGrid />
        <Scatter data={data} name="pageData" />
        <Tooltip />
      </ScatterChart>,
    );

    const svg = document.querySelector('svg');
    assertNotNull(svg);
    const gContainers = svg.querySelectorAll('.recharts-layer.recharts-scatter-symbol');

    expect(gContainers).toHaveLength(data.length);

    const firstShape = gContainers[0].querySelector('path');
    assertNotNull(firstShape);
    const firstShapeName = firstShape.getAttribute('name');
    expect(firstShapeName).toBe(data[0].name);

    const secondShape = gContainers[1].querySelector('path');
    assertNotNull(secondShape);
    const secondShapeName = secondShape.getAttribute('name');
    expect(secondShapeName).toBe(data[1].name);

    const firstShapeWidth = Number(firstShape.getAttribute('width'));
    const secondShapeWidth = Number(secondShape.getAttribute('width'));

    expect(firstShapeWidth).toBeGreaterThan(secondShapeWidth);

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).not.toBeVisible();

    await user.hover(firstShape);

    expectTooltipPayload(container, '', [
      `test name : ${data[0].zAxis}km`,
      `xAxis : ${data[0].xAxis}`,
      `yAxis : ${data[0].yAxis}`,
    ]);

    await user.unhover(firstShape);
    expect(tooltip).not.toBeVisible();

    await user.hover(secondShape);
    expectTooltipPayload(container, '', [
      `test name : ${data[1].zAxis}km`,
      `xAxis : ${data[1].xAxis}`,
      `yAxis : ${data[1].yAxis}`,
    ]);
  });

  describe('state integration', () => {
    it('should publish its configuration to redux store', () => {
      const axisSettingsSpy = vi.fn();
      const axisDomainSpy = vi.fn();
      const axisScaleSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        axisSettingsSpy(useAppSelector(state => selectZAxisSettings(state, 'zaxis id')));
        axisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'zAxis', 'zaxis id', isPanorama)));
        const axis = useAppSelector(state => selectZAxisWithScale(state, 'zAxis', 'zaxis id', false));
        const realScaleType = useAppSelector(state => selectRealScaleType(state, 'zAxis', 'zaxis id'));
        axisScaleSpy({
          domain: axis?.scale?.domain(),
          range: axis?.scale?.range(),
          realScaleType,
        });
        return null;
      };
      rechartsTestRender(
        <ScatterChart height={400} width={400}>
          <XAxis dataKey="xAxis" type="number" />
          <YAxis dataKey="yAxis" />
          <ZAxis zAxisId="zaxis id" dataKey="zAxis" name="test name" range={[20, 30]} unit="km" />
          <CartesianGrid />
          <Scatter data={data} name="pageData" zAxisId="zaxis id" />
          <Tooltip />
          <Comp />
        </ScatterChart>,
      );
      const expected: ZAxisSettings = {
        domain: undefined,
        allowDataOverflow: false,
        allowDuplicatedCategory: false,
        includeHidden: false,
        reversed: false,
        scale: 'auto',
        type: 'number',
        id: 'zaxis id',
        dataKey: 'zAxis',
        name: 'test name',
        unit: 'km',
        range: [20, 30],
      };
      expect(axisSettingsSpy).toHaveBeenLastCalledWith(expected);
      expect(axisSettingsSpy).toHaveBeenCalledTimes(2);

      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 800]);
      expect(axisDomainSpy).toHaveBeenCalledTimes(2);

      expect(axisScaleSpy).toHaveBeenLastCalledWith({
        domain: [0, 800],
        range: [20, 30],
        realScaleType: 'linear',
      });
      expect(axisScaleSpy).toHaveBeenCalledTimes(2);
    });

    it('should remove old ID configuration when the ID changes', () => {
      const IDChangingComponent = ({ children }: { children: ReactNode }) => {
        const [id, setId] = React.useState('1');
        const onClick = () => setId('2');
        return (
          <>
            <button type="button" className="pushbutton" onClick={onClick}>
              Change ID
            </button>
            <BarChart width={100} height={100}>
              <ZAxis zAxisId={id} scale="log" type="number" />
              {children}
            </BarChart>
          </>
        );
      };
      const renderTestCase = createSelectorTestCase(IDChangingComponent);

      const { spy, container } = renderTestCase(state => state.cartesianAxis.zAxis);

      expect(spy).toHaveBeenCalledTimes(2);

      // only id "1" exists
      const lastCallArgs1 = spy.mock.lastCall?.[0];
      assertNotNull(lastCallArgs1);
      expect(Object.keys(lastCallArgs1)).toEqual(['1']);

      fireEvent.click(container.getElementsByClassName('pushbutton')[0]);
      expect(spy).toHaveBeenCalledTimes(3);

      // only id "2" exists
      const lastCallArgs2 = spy.mock.lastCall?.[0];
      assertNotNull(lastCallArgs2);
      expect(Object.keys(lastCallArgs2)).toEqual(['2']);
    });
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { CartesianGrid, Customized, Scatter, ScatterChart, Surface, Tooltip, XAxis, YAxis, ZAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { useAppSelector } from '../../src/state/hooks';
import {
  selectAxisDomain,
  selectRealScaleType,
  selectZAxisSettings,
  selectZAxisWithScale,
} from '../../src/state/selectors/axisSelectors';
import { ZAxisSettings } from '../../src/state/axisMapSlice';

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

  it('renders with the correct number of children', () => {
    render(
      <Surface width={500} height={500}>
        <ZAxis dataKey="x" name="stature" unit="cm" />
      </Surface>,
    );
    const svg = document.querySelector('svg');
    assertNotNull(svg);

    expect(svg).toBeInTheDocument();
    expect(svg.children).toHaveLength(2);
  });

  it('displays the correct tooltip content when hovering over scatter symbols', async () => {
    const { container } = render(
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
    const gContainers = svg.querySelectorAll('.recharts-layer.recharts-scatter-symbol');

    const firstShape = gContainers[0].querySelector('path');
    await userEvent.hover(firstShape);
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(`xAxis : ${data[0].xAxis}yAxis : ${data[0].yAxis}test name : ${data[0].zAxis}km`);
  });

  it('should handle missing or undefined data gracefully', () => {
    const dataWithMissingValues = [
      {
        name: 'Page A',
        xAxis: 590,
        yAxis: 1000,
        zAxis: 400,
      },
      {
        name: 'Page B',
        xAxis: 490,
        zAxis: undefined,
        yAxis: 1400,
      },
    ];

    const { container } = render(
      <ScatterChart height={400} width={400}>
        <XAxis dataKey="xAxis" type="number" />
        <YAxis dataKey="yAxis" />
        <ZAxis dataKey="zAxis" name="test name" range={[0, 2000]} unit="km" />
        <Scatter data={dataWithMissingValues} name="pageData" />
      </ScatterChart>,
    );

    const svg = container.querySelector('svg');
    const gContainers = svg.querySelectorAll('.recharts-layer.recharts-scatter-symbol');

    expect(gContainers).toHaveLength(2); // Only one valid point should be rendered
  });

  it('should update the chart when data changes', () => {
    const { rerender, container } = render(
      <ScatterChart height={400} width={400}>
        <XAxis dataKey="xAxis" type="number" />
        <YAxis dataKey="yAxis" />
        <ZAxis dataKey="zAxis" name="test name" range={[0, 2000]} unit="km" />
        <Scatter data={data} name="pageData" />
      </ScatterChart>,
    );

    const newData = [
      {
        name: 'Page C',
        xAxis: 600,
        zAxis: 900,
        yAxis: 1100,
      },
      {
        name: 'Page D',
        xAxis: 500,
        zAxis: 300,
        yAxis: 1300,
      },
    ];

    rerender(
      <ScatterChart height={400} width={400}>
        <XAxis dataKey="xAxis" type="number" />
        <YAxis dataKey="yAxis" />
        <ZAxis dataKey="zAxis" name="test name" range={[0, 2000]} unit="km" />
        <Scatter data={newData} name="pageData" />
      </ScatterChart>,
    );

    const svg = container.querySelector('svg');
    const gContainers = svg.querySelectorAll('.recharts-layer.recharts-scatter-symbol');

    expect(gContainers).toHaveLength(newData.length);
  });

  it('should not render anything', () => {
    render(
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
    const { container } = render(
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
    const gContainers = svg.querySelectorAll('.recharts-layer.recharts-scatter-symbol');

    expect(gContainers).toHaveLength(data.length);

    const firstShape = gContainers[0].querySelector('path');
    const firstShapeName = firstShape.getAttribute('name');
    expect(firstShapeName).toBe(data[0].name);

    const secondShape = gContainers[1].querySelector('path');
    const secondShapeName = secondShape.getAttribute('name');
    expect(secondShapeName).toBe(data[1].name);

    const firstShapeWidth = Number(firstShape.getAttribute('width'));
    const secondShapeWidth = Number(secondShape.getAttribute('width'));

    expect(firstShapeWidth).toBeGreaterThan(secondShapeWidth);

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).not.toBeVisible();

    await userEvent.hover(firstShape);
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(`xAxis : ${data[0].xAxis}yAxis : ${data[0].yAxis}test name : ${data[0].zAxis}km`);

    await userEvent.unhover(firstShape);
    expect(tooltip).not.toBeVisible();

    await userEvent.hover(secondShape);
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(`xAxis : ${data[1].xAxis}yAxis : ${data[1].yAxis}test name : ${data[1].zAxis}km`);
  });

  describe('state integration', () => {
    it('should publish its configuration to redux store', () => {
      const axisSettingsSpy = vi.fn();
      const axisDomainSpy = vi.fn();
      const axisScaleSpy = vi.fn();
      const Comp = (): null => {
        axisSettingsSpy(useAppSelector(state => selectZAxisSettings(state, 'zaxis id')));
        axisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'zAxis', 'zaxis id')));
        const axis = useAppSelector(state => selectZAxisWithScale(state, 'zAxis', 'zaxis id', false));
        const realScaleType = useAppSelector(state => selectRealScaleType(state, 'zAxis', 'zaxis id'));
        axisScaleSpy({
          domain: axis?.scale?.domain(),
          range: axis?.scale?.range(),
          realScaleType,
        });
        return null;
      };
      render(
        <ScatterChart height={400} width={400}>
          <XAxis dataKey="xAxis" type="number" />
          <YAxis dataKey="yAxis" />
          <ZAxis zAxisId="zaxis id" dataKey="zAxis" name="test name" range={[20, 30]} unit="km" />
          <CartesianGrid />
          <Scatter data={data} name="pageData" zAxisId="zaxis id" />
          <Tooltip />
          <Customized component={Comp} />
        </ScatterChart>,
      );
      const expected: ZAxisSettings = {
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
      expect(axisSettingsSpy).toHaveBeenCalledTimes(3);

      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 800]);
      expect(axisDomainSpy).toHaveBeenCalledTimes(3);

      expect(axisScaleSpy).toHaveBeenLastCalledWith({
        domain: [0, 800],
        range: [20, 30],
        realScaleType: 'linear',
      });
      expect(axisScaleSpy).toHaveBeenCalledTimes(3);
    });
  });
});

import React from 'react';
import { describe, expect, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Pie, PieChart, PieSectorDataItem, Sector, Tooltip } from '../../../src';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { expectTooltipPayload } from '../../component/Tooltip/tooltipTestHelpers';
import { assertNotNull } from '../../helper/assertNotNull';

const data1 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const data2 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 200 },
  { name: 'C1', value: 200 },
  { name: 'C2', value: 100 },
];

describe('TwoLevelPieChart with activeShape', () => {
  it('should only show active shape for the hovered pie component', () => {
    const renderActiveShape = (props: PieSectorDataItem) => (
      <Sector {...props} fill="#ff7300" className="customized-active-shape" />
    );

    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          isAnimationActive={false}
          activeShape={renderActiveShape}
          data={data1}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        />
        <Pie
          isAnimationActive={false}
          activeShape={renderActiveShape}
          data={data2}
          cx={200}
          cy={200}
          innerRadius={100}
          outerRadius={140}
          fill="#82ca9d"
          dataKey="value"
        />
      </PieChart>,
    );

    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(0);
    const allSectors = container.querySelectorAll('.recharts-pie-sector');
    expect(allSectors).toHaveLength(data1.length + data2.length);

    const outerPieSector = allSectors[0];
    fireEvent.mouseOver(outerPieSector);

    const activeShapes = container.querySelectorAll('.customized-active-shape');
    expect(activeShapes).toHaveLength(1);

    const innerPieSector = allSectors[data1.length]; // First sector of inner pie
    fireEvent.mouseOver(innerPieSector);

    const activeShapesAfter = container.querySelectorAll('.customized-active-shape');
    expect(activeShapesAfter).toHaveLength(1);

    fireEvent.mouseOut(innerPieSector);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(0);
  });

  it('should correctly identify sectors from different pies when they have different dataKeys', () => {
    const data1WithDifferentKey = [
      { name: 'Group A', uv: 400 },
      { name: 'Group B', uv: 300 },
    ];

    const data2WithDifferentKey = [
      { name: 'A1', pv: 100 },
      { name: 'A2', pv: 300 },
    ];

    const renderActiveShape = (props: PieSectorDataItem) => (
      <Sector {...props} fill="#ff7300" className="customized-active-shape" />
    );

    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          isAnimationActive={false}
          activeShape={renderActiveShape}
          data={data1WithDifferentKey}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          dataKey="uv"
        />
        <Pie
          isAnimationActive={false}
          activeShape={renderActiveShape}
          data={data2WithDifferentKey}
          cx={200}
          cy={200}
          innerRadius={100}
          outerRadius={140}
          fill="#82ca9d"
          dataKey="pv"
        />
      </PieChart>,
    );

    const allSectors = container.querySelectorAll('.recharts-pie-sector');

    fireEvent.mouseOver(allSectors[0]);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);

    fireEvent.mouseOver(allSectors[2]);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);

    fireEvent.mouseOut(allSectors[2]);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(0);
  });

  /*
   * https://github.com/recharts/recharts/issues/4753
   * Two pies in one PieChart share a dataKey. Hovering one used to activate the other pie's
   * cell and label, and hovering the second pie updated its label without showing activeShape.
   */
  it('should keep activeShape, inactiveShape, labels, and tooltip on the hovered pie', () => {
    mockGetBoundingClientRect({ width: 10, height: 10 });

    const renderActiveShape = (props: PieSectorDataItem) => (
      <g className="customized-active-shape">
        <Sector {...props} fill="#ff7300" />
        <text className="active-pie-label">{`${props.name}:${props.value}`}</text>
      </g>
    );
    const renderInactiveShape = (props: PieSectorDataItem) => (
      <Sector {...props} fill="#cccccc" className="customized-inactive-shape" />
    );

    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          isAnimationActive={false}
          activeShape={renderActiveShape}
          inactiveShape={renderInactiveShape}
          data={data1}
          cx={160}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        />
        <Pie
          isAnimationActive={false}
          activeShape={renderActiveShape}
          inactiveShape={renderInactiveShape}
          data={data2}
          cx={520}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
          dataKey="value"
          label
        />
        <Tooltip isAnimationActive={false} />
      </PieChart>,
    );

    const labelText = () =>
      Array.from(container.querySelectorAll('.recharts-pie-label-text'), node => node.textContent);
    const labelsAtRest = labelText();
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(0);
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(0);

    const allSectors = container.querySelectorAll('.recharts-pie-sector');
    expect(allSectors).toHaveLength(data1.length + data2.length);

    const firstPieSector = allSectors[0];
    assertNotNull(firstPieSector);
    fireEvent.mouseOver(firstPieSector);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
    expect(container.querySelector('.active-pie-label')?.textContent).toBe('Group A:400');
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(data1.length - 1);
    expect(labelText()).toEqual(labelsAtRest);
    expectTooltipPayload(container, '', ['Group A : 400']);

    const secondPieSector = allSectors[data1.length + 1];
    assertNotNull(secondPieSector);
    fireEvent.mouseOver(secondPieSector);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
    expect(container.querySelector('.active-pie-label')?.textContent).toBe('A2:300');
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(data2.length - 1);
    expect(labelText()).toEqual(labelsAtRest);
    expectTooltipPayload(container, '', ['A2 : 300']);

    fireEvent.mouseOut(secondPieSector);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(0);
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(0);
    expect(labelText()).toEqual(labelsAtRest);
  });
});

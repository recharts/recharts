import React from 'react';
import { render } from '@testing-library/react';
import { exampleRadarData } from '../_data';
import { Surface, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart } from '../../src';
import { pageData } from '../../storybook/stories/data/Page';

describe('<PolarGrid />', () => {
  const polarAngles = [0, 30, 60, 90, 145, 180, 200, 270, 300];
  const polarRadius = [10, 20, 40, 80];

  test('Renders angle lines and polygons', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarGrid
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          width={500}
          height={500}
          polarAngles={polarAngles}
          polarRadius={polarRadius}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-grid-angle line')).toHaveLength(9);
    expect(container.querySelectorAll('.recharts-polar-grid-concentric-polygon')).toHaveLength(4);
  });

  test("Don't render any lines or polygons when polarAngles and polarRadius are not specified", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarGrid cx={250} cy={250} innerRadius={0} outerRadius={200} width={500} height={500} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-grid-angle line')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-polar-grid-concentric-polygon')).toHaveLength(0);
  });

  test('Render circles when gridType is specified to be circle', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarGrid
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          width={500}
          height={500}
          gridType="circle"
          polarAngles={polarAngles}
          polarRadius={polarRadius}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-grid-angle line')).toHaveLength(9);
    expect(container.querySelectorAll('.recharts-polar-grid-concentric-circle')).toHaveLength(4);
  });

  test("Don't render any path when outerRadius is smaller than 0", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <PolarGrid
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={0}
          width={500}
          height={500}
          gridType="circle"
          polarAngles={polarAngles}
          polarRadius={polarRadius}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polar-grid-angle line')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-polar-grid-concentric-circle')).toHaveLength(0);
  });

  describe('Compatible charts', () => {
    test('Renders polar radius axis with RadarChart', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarRadiusAxis dataKey="value" />
          <PolarGrid />
        </RadarChart>,
      );

      // octagon
      expect(container.querySelector('.recharts-polar-grid-angle').children).toHaveLength(8);
      expect(container.querySelectorAll('.recharts-polar-grid-concentric-circle')).toHaveLength(0);
      expect(container.querySelectorAll('.recharts-polar-grid-concentric-polygon')).toHaveLength(5);
    });

    test('Renders polar radius axis with RadialBarChart', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={pageData}>
          <RadialBar dataKey="uv" />
          <PolarRadiusAxis type="number" dataKey="uv" />
          <PolarGrid gridType="circle" />
        </RadialBarChart>,
      );

      // circle
      expect(container.querySelector('.recharts-polar-grid-angle').children).toHaveLength(8);
      expect(container.querySelectorAll('.recharts-polar-grid-concentric-circle')).toHaveLength(7);
      expect(container.querySelectorAll('.recharts-polar-grid-concentric-polygon')).toHaveLength(0);
    });
  });
});

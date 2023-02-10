import React from 'react';
import { render } from '@testing-library/react';
import { Surface, PolarGrid } from '../../src';

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
});

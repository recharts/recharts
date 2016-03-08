import React from 'react';
import { expect } from 'chai';
import { Surface, PolarGrid } from 'recharts';
import { mount, render } from 'enzyme';

describe('<PolarGrid />', () => {
  const polarAngles = [0, 30, 60, 90, 145, 180, 200, 270, 300];
  const polarRadius = [10, 20, 40, 80];

  it('Renders angle lines and polygons', () => {
    const wrapper = render(
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
      </Surface>
    );

    expect(wrapper.find('.recharts-polar-grid-angle line').length).to.equal(9);
    expect(wrapper.find('.recharts-polar-grid-concentric-polygon').length).to.equal(4);
  });

  it('Don\'t render any lines or polygons when polarAngles and polarRadius are not specified', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarGrid
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          width={500}
          height={500}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-polar-grid-angle line').length).to.equal(0);
    expect(wrapper.find('.recharts-polar-grid-concentric-polygon').length).to.equal(0);
  });

  it('Render circles when gridType is specified to be circle', () => {
    const wrapper = render(
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
      </Surface>
    );

    expect(wrapper.find('.recharts-polar-grid-angle line').length).to.equal(9);
    expect(wrapper.find('.recharts-polar-grid-concentric-circle').length).to.equal(4);
  });

  it('Don\'t render any path when outerRadius is smaller than 0', () => {
    const wrapper = render(
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
      </Surface>
    );

    expect(wrapper.find('.recharts-polar-grid-angle line').length).to.equal(0);
    expect(wrapper.find('.recharts-polar-grid-concentric-circle').length).to.equal(0);
  });
});

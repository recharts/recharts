import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Bar, BarChart, LabelList, XAxis, YAxis } from '../../../src';

describe('Bar labels keep the index of their data entry when some bars are not rendered', () => {
  // 'b' has no value and 'c' is zero: neither draws a rectangle, so Bar filters both out.
  const data = [
    { name: 'a', value: 5 },
    { name: 'b', value: null },
    { name: 'c', value: 0 },
    { name: 'd', value: 3 },
  ];

  function renderChart(labelList: React.ReactElement) {
    return render(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" isAnimationActive={false}>
          {labelList}
        </Bar>
      </BarChart>,
    );
  }

  it('should render labels only for the bars that are drawn', () => {
    const { container } = renderChart(<LabelList dataKey="name" />);
    const texts = Array.from(container.querySelectorAll('.recharts-label-list .recharts-label')).map(
      label => label.textContent,
    );
    expect(texts).toEqual(['a', 'd']);
  });

  it('should use the data index in label ids', () => {
    const { container } = renderChart(<LabelList dataKey="name" id="bar-label" />);
    const ids = Array.from(container.querySelectorAll('.recharts-label')).map(label => label.getAttribute('id'));
    expect(ids).toEqual(['bar-label-0', 'bar-label-3']);
  });

  it('should pass the data index to custom label content', () => {
    const { container } = renderChart(
      <LabelList dataKey="name" content={props => <text className="custom-label" data-index={props.index} />} />,
    );
    const indices = Array.from(container.querySelectorAll('.custom-label')).map(label =>
      label.getAttribute('data-index'),
    );
    expect(indices).toEqual(['0', '3']);
  });

  it('should clip labels by their own bar when bars before them are skipped', () => {
    // 'b' is skipped and 'c' is entirely above the domain; only the labels of 'a' and 'd' stay visible.
    const rangeData = [
      { name: 'a', range: [20, 50] },
      { name: 'b', range: null },
      { name: 'c', range: [120, 150] },
      { name: 'd', range: [80, 130] },
    ];
    const { container } = render(
      <BarChart width={400} height={400} data={rangeData}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} allowDataOverflow />
        <Bar dataKey="range" isAnimationActive={false}>
          <LabelList dataKey="name" id="bar-label" />
        </Bar>
      </BarChart>,
    );
    const labels = Array.from(container.querySelectorAll('.recharts-label-list .recharts-label'));
    expect(labels.map(label => label.textContent)).toEqual(['a', 'd']);
    expect(labels.map(label => label.getAttribute('id'))).toEqual(['bar-label-0', 'bar-label-3']);
  });

  it('should pass the data index to valueAccessor', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" isAnimationActive={false}>
          <LabelList valueAccessor={(_entry, index) => data[index]?.name} />
        </Bar>
      </BarChart>,
    );
    const texts = Array.from(container.querySelectorAll('.recharts-label-list .recharts-label')).map(
      label => label.textContent,
    );
    expect(texts).toEqual(['a', 'd']);
  });
});

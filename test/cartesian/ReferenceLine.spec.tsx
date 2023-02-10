import React from 'react';
import { screen, render } from '@testing-library/react';
import { BarChart, ReferenceLine, Bar, XAxis, YAxis } from '../../src';

describe('<ReferenceLine />', () => {
  const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

  afterEach(() => {
    consoleSpy.mockReset();
  });

  const data = [
    { name: '201102', uv: -6.11, pv: 0 },
    { name: '201103', uv: 0.39, pv: 0 },
    { name: '201104', uv: -1.37, pv: 0 },
    { name: '201105', uv: 1.16, pv: 0 },
    { name: '201106', uv: 1.29, pv: 0 },
    { name: '201107', uv: 0.09, pv: 0 },
    { name: '201108', uv: 0.53, pv: 0 },
    { name: '201109', uv: 2.52, pv: 0 },
    { name: '201110', uv: 0.79, pv: 0 },
    { name: '201111', uv: 2.94, pv: 0 },
    { name: '201112', uv: 4.3, pv: 0 },
  ];

  test('Renders 1 line in ReferenceLine', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine x="201106" stroke="#666" label="201106" />
        <ReferenceLine y={0} stroke="#666" label="0" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-line-line')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  test('Renders 1 line in ReferenceLine in vertical barchart', () => {
    const { container } = render(
      <BarChart
        layout="vertical"
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis type="number" orientation="top" />
        <YAxis type="category" dataKey="name" tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine y="201106" stroke="#666" label="201106" />
        <ReferenceLine x={0} stroke="#666" label="0" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-line-line')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  test('Renders line segment in ReferenceLine when segment is set', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine x="201106" stroke="#666" label="201106" />
        <ReferenceLine y={0} stroke="#666" label="0" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-line-line')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  test("Don't renders 1 line in ReferenceLine when no x or y is set", () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine stroke="#666" label="0" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-line-line')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test("Don't render any line or label when reference line is outside domain in ReferenceLine", () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="bottom" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine y={200} stroke="#666" />
        <ReferenceLine x="20150201" stroke="#666" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-line-line')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test('Render line and label when ifOverflow is extendDomain in ReferenceLine', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine x="201102" label="test" stroke="#666" />
        <ReferenceLine y={20} stroke="#666" label="20" ifOverflow="extendDomain" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-line-line')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  test('Render line and label when (deprecated) alwaysShow is true in ReferenceLine', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine x="201102" label="test" stroke="#666" />
        <ReferenceLine y={20} stroke="#666" label="20" alwaysShow />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-line-line')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('Render line and label when ifOverflow is "extendDomain" in ReferenceLine', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine x="201102" label="test" stroke="#666" />
        <ReferenceLine y={20} stroke="#666" label="20" ifOverflow="extendDomain" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-line-line')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test('Render 1 line and 1 label when label is set to be a function in ReferenceLine', () => {
    const renderLabel = (props: any) => {
      const { x, y } = props;

      return (
        <text className="customized-reference-line-label" x={x} y={y}>
          any
        </text>
      );
    };
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine y={20} stroke="#666" label={renderLabel} ifOverflow="visible" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-line-line')).toHaveLength(1);
    expect(container.querySelectorAll('.customized-reference-line-label')).toHaveLength(1);
  });

  test("Don't Render 1 label when label is set to be a object", () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine y={20} stroke="#666" label />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test('Render custom lable when label is set to react element', () => {
    const Label = ({ text, ...props }: { text: any }) => <text {...props}>{text}</text>;
    render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine y={20} stroke="#666" ifOverflow="visible" label={<Label text="Custom Text" />} />
      </BarChart>,
    );
    expect(screen.findByText('Custom Text')).toBeTruthy();
  });
});

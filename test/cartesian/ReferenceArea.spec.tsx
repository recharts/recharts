import React from 'react';
import { describe, it, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BarChart, ReferenceArea, Bar, XAxis, YAxis, LabelProps } from '../../src';

describe('<ReferenceArea />', () => {
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

  test('Render 1 rect in ReferenceArea', () => {
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
        <ReferenceArea x1="201106" x2="201110" fill="#666" label="201106" />
        <ReferenceArea y1={0} y2={2} fill="#666" label="201106" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  it('should render nothing if neither XAxis not Bar are present', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <YAxis tickCount={7} orientation="right" />
        <ReferenceArea x1="201106" x2="201110" fill="#666" />
        <ReferenceArea y1={0} y2={2} fill="#999" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
  });

  it('should hallucinate XAxis props from Bar', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceArea y1={0} y2={2} fill="#999" />
      </BarChart>,
    );
    const allAreas = container.querySelectorAll('.recharts-reference-area-rect');
    expect(allAreas).toHaveLength(1);
    const area = allAreas[0];
    expect(area).toHaveAttribute('d', 'M 20,109.44444444444444 h 960 v 25.555555555555557 h -960 Z');
  });

  test("Don't render any rect in ReferenceArea when no x1, x2, y1 or y2 is set", () => {
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
        <ReferenceArea stroke="#666" label="0" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test('Render a rect in ReferenceArea when x1, x2, y1 or y2 is set', () => {
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
        <ReferenceArea x1="201106" stroke="#666" label="0" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  test("Don't render any line or label when reference area is outside domain in ReferenceArea", () => {
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
        <ReferenceArea y1={200} y2={300} fill="#666" />
        <ReferenceArea x1="20150201" x2="20150201" fill="#666" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test('Render line and label when ifOverflow is "extendDomain" in ReferenceArea', () => {
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
        <ReferenceArea y1={200} y2={300} fill="#666" ifOverflow="extendDomain" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(1);
  });

  describe('label', () => {
    it('should render label defined as a string', () => {
      const { container, getByText } = render(
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
          <ReferenceArea x1="201106" x2="201110" fill="#666" label="My label text" />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
      expect(getByText('My label text')).toBeVisible();
    });

    it('should render label defined as a number', () => {
      const { container, getByText } = render(
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
          <ReferenceArea x1="201106" x2="201110" fill="#666" label={2024} />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
      expect(getByText('2024')).toBeVisible();
    });

    it('should render label defined as a Label props object', () => {
      const { container, getByText } = render(
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
          <ReferenceArea
            x1="201106"
            x2="201110"
            fill="#666"
            label={{ value: 'This is not documented by it works perfectly fine', offset: 8 }}
          />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
      expect(getByText('This is not documented by it works perfectly fine')).toBeVisible();
    });

    test('Render 1 line and 1 label when label is a function', () => {
      const renderLabel = (props: LabelProps) => {
        const { x, y } = props;

        return (
          <text className="customized-reference-area-label" x={x} y={y}>
            My custom label text
          </text>
        );
      };
      const { container, getByText } = render(
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
          <ReferenceArea x1="201106" x2="201110" fill="#666" label={renderLabel} />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-area-rect')).toHaveLength(1);
      expect(container.querySelectorAll('.customized-reference-area-label')).toHaveLength(1);
      expect(getByText('My custom label text')).toBeVisible();
    });

    test.each([true, false])('should not render label when label=%s', label => {
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
          <ReferenceArea x1="201106" x2="201110" fill="#666" label={label} />
        </BarChart>,
      );

      expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
    });

    test('Render custom label when label is react element', () => {
      const Label = ({ text, ...props }: { text: string }) => <text {...props}>{text}</text>;
      const { getByText } = render(
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
          <ReferenceArea
            x1="201106"
            x2="201110"
            fill="#666"
            label={<Label text="Custom Text" />}
            ifOverflow="extendDomain"
          />
        </BarChart>,
      );
      expect(getByText('Custom Text')).toBeVisible();
    });
  });
});

import React from 'react';
import { describe, expect, it, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Bar, BarChart, Customized, LineChart, ReferenceDot, XAxis, YAxis } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectReferenceDotsByAxis } from '../../src/state/selectors/axisSelectors';

describe('<ReferenceDot />', () => {
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

  test('Render 1 dot and 1 label in ReferenceDot', () => {
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
        <ReferenceDot x="201106" y={3} stroke="#666" label="201106" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-dot .recharts-reference-dot-dot')).toHaveLength(1);
    const labels = container.querySelectorAll('.recharts-label');
    expect(labels).toHaveLength(1);
    const label = labels[0];
    expect.soft(label.getAttributeNames().sort()).toEqual(['class', 'fill', 'offset', 'text-anchor', 'x', 'y']);
    expect(label.getAttribute('x')).toEqual('472.72727272727275');
    expect(label.getAttribute('y')).toEqual('86.66666666666667');
    expect(label.getAttribute('fill')).toEqual('#808080');
    expect(label.getAttribute('class')).toEqual('recharts-text recharts-label');
    expect(label.getAttribute('text-anchor')).toEqual('middle');
    expect(label.textContent).toEqual('201106');
  });

  test("Don't render any dot or label when reference dot is outside domain in ReferenceDot", () => {
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
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceDot x="201106" y={20} stroke="#666" label="201106" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-dot-dot')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test("Don't render any dot or label when x is not defined", () => {
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
        <ReferenceDot y={3} stroke="#666" label="201106" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-dot-dot')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test("Don't render any dot or label when y is not defined", () => {
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
        <ReferenceDot x="201104" stroke="#666" label="201106" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-dot-dot')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  it('should render dot and label even when yAxis is not present', () => {
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
        <Bar dataKey="uv" />
        <ReferenceDot x="201104" y={3} stroke="#666" label="201106" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-dot-dot')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  it('adds a clipPath attribute when ifOverflow is "hidden"', () => {
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
        <ReferenceDot x="201106" y={20} stroke="#666" label="201106" ifOverflow="hidden" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-dot-dot')[0].getAttribute('clip-path')).toMatch(
      /url\(#recharts(\d+)-clip\)/,
    );
  });

  test('Render 1 line and 1 label when ifOverflow is `extendDomain` in ReferenceDot', () => {
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
        <ReferenceDot x="201106" y={20} stroke="#666" label="201106" ifOverflow="extendDomain" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-dot-dot')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  test('Render custom label when label is set to be a react element', () => {
    const Label = ({ text, ...props }: { text: string }) => (
      <text className="customized-label" {...props}>
        {text}
      </text>
    );
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
        <ReferenceDot x="201106" y={20} stroke="#666" label={<Label text="Custom Text" />} ifOverflow="extendDomain" />
      </BarChart>,
    );
    expect(screen.findByText('Custom Text')).toBeTruthy();
  });

  test('Render custom label when label is set to be a function', () => {
    const renderLabel = () => <text className="customized-label">Custom Text</text>;

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
        <ReferenceDot x="201106" y={20} stroke="#666" label={renderLabel} ifOverflow="extendDomain" />
      </BarChart>,
    );
    expect(screen.findByText('Custom Text')).toBeTruthy();
  });

  test("Don't render any label when label is a plain object", () => {
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
        <ReferenceDot x="201106" y={20} stroke="#666" ifOverflow="extendDomain" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test("Don't render any dot when x or y is not specified", () => {
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
        <ReferenceDot x="201106" stroke="#666" ifOverflow="extendDomain" />
        <ReferenceDot y={20} stroke="#666" ifOverflow="extendDomain" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-reference-dot-dot')).toHaveLength(0);
  });

  describe('shape as a React Element', () => {
    it('should render whatever the shape returns, and pass in extra sneaky props', () => {
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
          <ReferenceDot
            x="201106"
            y={20}
            stroke="#666"
            fill="#999"
            r={6}
            fillOpacity="0.3"
            shape={<circle className="custom-dot" />}
            ifOverflow="extendDomain"
          />
        </BarChart>,
      );
      const myCustomDot = container.querySelector('.custom-dot');
      expect(myCustomDot).toBeInTheDocument();
      expect
        .soft(myCustomDot.getAttributeNames().sort())
        .toEqual(['class', 'cx', 'cy', 'fill', 'fill-opacity', 'r', 'stroke', 'stroke-width', 'x', 'y']);
      expect.soft(myCustomDot.getAttribute('fill')).toEqual('#999');
      expect.soft(myCustomDot.getAttribute('r')).toEqual('6');
      expect.soft(myCustomDot.getAttribute('cx')).toEqual('472.72727272727275');
      expect.soft(myCustomDot.getAttribute('cy')).toEqual('20');
      expect.soft(myCustomDot.getAttribute('stroke')).toEqual('#666');
      expect.soft(myCustomDot.getAttribute('stroke-width')).toEqual('1');
      expect.soft(myCustomDot.getAttribute('fill-opacity')).toEqual('0.3');
      expect.soft(myCustomDot.getAttribute('class')).toEqual('custom-dot');
      expect.soft(myCustomDot.getAttribute('x')).toEqual('201106');
      expect.soft(myCustomDot.getAttribute('y')).toEqual('20');
    });
  });

  describe('shape as a React Component', () => {
    it('should render whatever the Component returns, and pass in props', () => {
      const Shape = (props: unknown) => {
        expect(props).toEqual({
          clipPath: undefined,
          cx: 472.72727272727275,
          cy: 20,
          fill: '#999',
          fillOpacity: '0.3',
          r: 6,
          stroke: '#666',
          strokeWidth: 1,
          x: '201106',
          y: 20,
        });
        return <circle className="custom-dot" />;
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
          <ReferenceDot
            x="201106"
            y={20}
            stroke="#666"
            fill="#999"
            r={6}
            fillOpacity="0.3"
            shape={Shape}
            ifOverflow="extendDomain"
          />
        </BarChart>,
      );
      const myCustomDot = container.querySelector('.custom-dot');
      expect(myCustomDot).toBeInTheDocument();
      expect.soft(myCustomDot.getAttributeNames().sort()).toEqual(['class']);
      expect.soft(myCustomDot.getAttribute('class')).toEqual('custom-dot');
    });
  });

  describe('state integration', () => {
    it('should report its settings to Redux state, and remove it after removing from DOM', () => {
      const dotSpy = vi.fn();
      const Comp = (): null => {
        dotSpy(useAppSelector(state => selectReferenceDotsByAxis(state, 'yAxis', 0)));
        return null;
      };
      const { rerender } = render(
        <LineChart width={100} height={100}>
          <YAxis />
          <XAxis />
          <ReferenceDot x={1} y="categorical data item" r={3} ifOverflow="extendDomain" />
          <Customized component={<Comp />} />
        </LineChart>,
      );

      expect(dotSpy).toHaveBeenLastCalledWith([
        {
          x: 1,
          y: 'categorical data item',
          r: 3,
          xAxisId: 0,
          yAxisId: 0,
          ifOverflow: 'extendDomain',
        },
      ]);
      expect(dotSpy).toHaveBeenCalledTimes(2);

      rerender(
        <LineChart width={100} height={100}>
          <YAxis />
          <XAxis />
          <Customized component={<Comp />} />
        </LineChart>,
      );

      expect(dotSpy).toHaveBeenLastCalledWith([]);
      expect(dotSpy).toHaveBeenCalledTimes(4);
    });
  });
});

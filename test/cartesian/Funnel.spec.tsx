import React from 'react';
import { render } from '@testing-library/react';
import { Cell, Funnel, FunnelChart, FunnelProps, FunnelTrapezoidItem, LabelList } from '../../src';
import { showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { funnelChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { computeFunnelTrapezoids } from '../../src/cartesian/Funnel';

const data = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

describe('<Funnel />', () => {
  it('Render 5 Trapezoid in a simple funnel', () => {
    const { container } = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} />
      </FunnelChart>,
    );

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
  });

  it('Render 5 Trapezoid with animation in a simple funnel', () => {
    const { container } = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} isAnimationActive />
      </FunnelChart>,
    );

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
  });

  it('Can render in a custom component', () => {
    const CustomFunnel = (props: FunnelProps) => {
      return <Funnel {...props} />;
    };

    const { container } = render(
      <FunnelChart width={500} height={500}>
        <CustomFunnel dataKey="value" data={data} isAnimationActive />
      </FunnelChart>,
    );

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
  });

  it("Don't render any Trapezoid when data is empty", () => {
    const { container } = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={[]} />
      </FunnelChart>,
    );

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(0);
  });

  it("Don't render any Trapezoid when set hide", () => {
    const { container } = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} hide />
      </FunnelChart>,
    );

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(0);
  });

  it('active shape in simple funnel', () => {
    const { container, debug } = render(
      <FunnelChart width={500} height={500}>
        <Funnel
          dataKey="value"
          data={data}
          isAnimationActive={false}
          activeShape={(payload: FunnelTrapezoidItem) => (
            <rect
              className="custom-active-shape"
              x={payload.x}
              y={payload.y}
              height={payload.height}
              width={payload.upperWidth}
              fill="red"
              strokeWidth="4"
              stroke="#fff"
            />
          )}
        >
          {data.map(entry => (
            <Cell key={entry.name} />
          ))}
        </Funnel>
      </FunnelChart>,
    );

    expect(container.querySelectorAll('.custom-active-shape')).toHaveLength(0);

    showTooltip(container, funnelChartMouseHoverTooltipSelector, debug);

    expect(container.querySelectorAll('.custom-active-shape')).toHaveLength(1);

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
  });

  it('Renders funnel custom cell in simple FunnelChart', () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false}>
          {data.map(entry => (
            <Cell key={entry.name} className="custom-cell" />
          ))}
        </Funnel>
      </FunnelChart>,
    );

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
  });

  it('Renders funnel custom label in simple FunnelChart', () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false}>
          <LabelList position="right" fill="#000" stroke="#000" dataKey="name" className="custom-label" />
        </Funnel>
      </FunnelChart>,
    );

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
    expect(container.querySelectorAll('.custom-label')).toHaveLength(data.length);
  });

  it('should assert the differences between a normal and reversed Funnel', () => {
    const { container, rerender } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false} />
      </FunnelChart>,
    );

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
    const firstTrapezoid = container.getElementsByClassName('recharts-trapezoid')[0];
    expect(firstTrapezoid.getAttribute('x')).toEqual('5');
    expect(firstTrapezoid.getAttribute('y')).toEqual('5');

    rerender(
      <FunnelChart width={500} height={300}>
        {/* add the reversed prop */}
        <Funnel dataKey="value" data={data} isAnimationActive={false} reversed />
      </FunnelChart>,
    );

    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
    const firstTrapezoidReversed = container.getElementsByClassName('recharts-trapezoid')[0];
    expect(firstTrapezoidReversed.getAttribute('x')).toEqual('54');
    expect(firstTrapezoidReversed.getAttribute('y')).toEqual('237');
  });
});

describe('computeFunnelTrapezoids', () => {
  it('handles all-zero values without NaN', () => {
    const offset = {
      top: 5,
      left: 10,
      right: 0,
      bottom: 0,
      width: 400,
      height: 400,
      brushBottom: 0,
    };

    const result = computeFunnelTrapezoids({
      dataKey: 'value',
      nameKey: 'name' as any,
      displayedData: [
        { name: 'A', value: 0 },
        { name: 'B', value: 0 },
      ],
      tooltipType: undefined,
      lastShapeType: 'triangle',
      reversed: false,
      offset,
      customWidth: undefined,
      graphicalItemId: 'funnel-1' as any,
    });

    expect(result).toHaveLength(2);

    result.forEach(trapezoid => {
      expect(trapezoid.x).toBe(offset.left);
      expect(trapezoid.upperWidth).toBe(0);
      expect(trapezoid.lowerWidth).toBe(0);

      expect(Number.isNaN(trapezoid.x)).toBe(false);
      expect(Number.isNaN(trapezoid.y)).toBe(false);
      expect(Number.isNaN(trapezoid.upperWidth)).toBe(false);
      expect(Number.isNaN(trapezoid.lowerWidth)).toBe(false);
      expect(Number.isNaN(trapezoid.tooltipPosition.x)).toBe(false);
      expect(Number.isNaN(trapezoid.tooltipPosition.y)).toBe(false);
    });
  });
});

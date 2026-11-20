import React from 'react';
import { render } from '@testing-library/react';
import {
  Cell,
  Funnel,
  FunnelChart,
  FunnelProps,
  FunnelTrapezoidItem,
  LabelList,
  Tooltip,
  TooltipContentProps,
} from '../../src';
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

function StageTooltip({ active, coordinate, payload }: TooltipContentProps) {
  return active && coordinate ? <span>{`${payload[0]?.name} at ${coordinate.x},${coordinate.y}`}</span> : null;
}

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

  it('should render active shape for the Tooltip defaultIndex', () => {
    const { container } = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} isAnimationActive={false} activeShape={{ fill: 'red' }} />
        <Tooltip defaultIndex={1} />
      </FunnelChart>,
    );

    const trapezoids = container.querySelectorAll('.recharts-funnel-trapezoid');
    expect(trapezoids).toHaveLength(data.length);
    const activeShapes = container.querySelectorAll('.recharts-active-shape');
    expect(activeShapes).toHaveLength(1);
    expect(trapezoids[1].contains(activeShapes[0])).toBe(true);
    expect(activeShapes[0].querySelector('.recharts-trapezoid')).toHaveAttribute('fill', 'red');
  });

  it('should not render active shape for the Tooltip defaultIndex when activeShape is not set', () => {
    const { container } = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} isAnimationActive={false} />
        <Tooltip defaultIndex={1} />
      </FunnelChart>,
    );

    expect(container.querySelectorAll('.recharts-active-shape')).toHaveLength(0);
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

  describe('horizontal layout', () => {
    const stages = [
      { name: 'Entered', value: 100 },
      { name: 'Qualified', value: 50 },
      { name: 'Invited', value: 75 },
    ];

    function Chart({ taperDirection, reversed }: Pick<FunnelProps, 'taperDirection' | 'reversed'>) {
      return (
        <FunnelChart width={400} height={170} margin={{ left: 20, right: 80, top: 10, bottom: 40 }} layout="horizontal">
          <Funnel
            taperDirection={taperDirection}
            reversed={reversed}
            data={stages}
            dataKey="value"
            width={240}
            lastShapeType="rectangle"
            isAnimationActive={false}
          >
            <LabelList dataKey="name" position="middle" />
          </Funnel>
          <Tooltip content={StageTooltip} />
        </FunnelChart>
      );
    }

    // Compare the physical corners without depending on which corner begins the SVG path.
    function getStageCorners(container: Element): ReadonlyArray<Set<string>> {
      return Array.from(container.querySelectorAll('.recharts-funnel-trapezoid path'), path => {
        return new Set(path.getAttribute('d')?.match(/-?[\d.]+,-?[\d.]+/g));
      });
    }

    it('lays out narrowing, widening, and rectangular stages within the configured width', () => {
      const { container, rerender } = render(<Chart />);
      const vertical = getStageCorners(container);
      expect(vertical).toHaveLength(3);
      expect(vertical[0]).toEqual(new Set(['20,10', '260,10', '200,50', '80,50']));

      rerender(<Chart taperDirection="horizontal" />);
      expect(getStageCorners(container)).toEqual([
        new Set(['20,10', '100,40', '100,100', '20,130']),
        new Set(['100,40', '180,25', '180,115', '100,100']),
        new Set(['180,25', '260,25', '260,115', '180,115']),
      ]);

      rerender(<Chart taperDirection="vertical" />);
      expect(getStageCorners(container)).toEqual(vertical);
    });

    it('reverses the stage positions while keeping each label and hover target with its data', () => {
      const { container, rerender, getByText } = render(<Chart taperDirection="horizontal" />);
      expect(getByText('Entered').closest('text')).toHaveAttribute('x', '60');
      expect(getByText('Entered').closest('text')).toHaveAttribute('y', '70');
      showTooltip(container, funnelChartMouseHoverTooltipSelector);
      expect(getByText('Entered at 60,70')).toBeInTheDocument();

      rerender(<Chart taperDirection="horizontal" reversed />);
      expect(getStageCorners(container)).toEqual([
        new Set(['180,40', '260,10', '260,130', '180,100']),
        new Set(['100,25', '180,40', '180,100', '100,115']),
        new Set(['20,25', '100,25', '100,115', '20,115']),
      ]);
      expect(getByText('Entered').closest('text')).toHaveAttribute('x', '220');
      expect(getByText('Entered').closest('text')).toHaveAttribute('y', '70');
      showTooltip(container, funnelChartMouseHoverTooltipSelector);
      expect(getByText('Entered at 220,70')).toBeInTheDocument();
    });
  });

  it('should not produce NaN when all data values are 0', () => {
    const zeroData = [
      { value: 0, name: 'A' },
      { value: 0, name: 'B' },
      { value: 0, name: 'C' },
    ];
    const offset = { left: 10, top: 20, width: 400, height: 300, right: 10, bottom: 10, brushBottom: 0 };

    const trapezoids = computeFunnelTrapezoids({
      dataKey: 'value',
      nameKey: 'name',
      displayedData: zeroData,
      tooltipType: undefined,
      lastShapeType: 'triangle',
      reversed: false,
      offset,
      customWidth: undefined,
      graphicalItemId: 'test-funnel',
    });

    expect(trapezoids).toHaveLength(zeroData.length);

    trapezoids.forEach(trapezoid => {
      expect(trapezoid.x).toBe(offset.left);
      expect(trapezoid.upperWidth).toBe(0);
      expect(trapezoid.lowerWidth).toBe(0);
      expect(Number.isFinite(trapezoid.x)).toBe(true);
      expect(Number.isFinite(trapezoid.y)).toBe(true);
      expect(Number.isFinite(trapezoid.upperWidth)).toBe(true);
      expect(Number.isFinite(trapezoid.lowerWidth)).toBe(true);
      expect(Number.isFinite(trapezoid.height)).toBe(true);
    });
  });

  it('should give the stage above a null value a lowerWidth of 0', () => {
    const offset = { left: 10, top: 20, width: 400, height: 300, right: 10, bottom: 10, brushBottom: 0 };

    const trapezoids = computeFunnelTrapezoids({
      dataKey: 'value',
      nameKey: 'name',
      displayedData: [
        { value: 100, name: 'A' },
        { value: null, name: 'B' },
        { value: 50, name: 'C' },
      ],
      tooltipType: undefined,
      lastShapeType: 'triangle',
      reversed: false,
      offset,
      customWidth: undefined,
      graphicalItemId: 'test-funnel',
    });

    expect(trapezoids.map(({ upperWidth, lowerWidth }) => ({ upperWidth, lowerWidth }))).toEqual([
      { upperWidth: 400, lowerWidth: 0 },
      { upperWidth: 0, lowerWidth: 200 },
      { upperWidth: 200, lowerWidth: 0 },
    ]);
  });

  it('should draw the stage above a null value', () => {
    const nullData = [
      { value: 100, name: 'A' },
      { value: null, name: 'B' },
      { value: 50, name: 'C' },
    ];
    const { container } = render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={nullData} isAnimationActive={false} />
      </FunnelChart>,
    );

    const paths = container.querySelectorAll('.recharts-funnel-trapezoid path');
    expect(paths).toHaveLength(3);
    paths.forEach(path => {
      expect(path.getAttribute('d')).not.toContain('NaN');
    });
  });
});

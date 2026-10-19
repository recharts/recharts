import React from 'react';
import { render } from '@testing-library/react';
import { Cell, Funnel, FunnelChart, FunnelProps, FunnelTrapezoidItem, LabelList, Tooltip } from '../../src';
import {
  expectTooltipNotVisible,
  expectTooltipPayload,
  showTooltip,
  showTooltipOnCoordinateTouch,
} from '../component/Tooltip/tooltipTestHelpers';
import { funnelChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { computeFunnelTrapezoids } from '../../src/cartesian/Funnel';
import { assertNotNull } from '../helper/assertNotNull';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import {
  mockTouchingNestedElement,
  mockTouchingRenderedElement,
  mockTouchingUnrelatedElement,
} from '../helper/mockTouchingElement';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../../src/util/Constants';

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

  describe('touch interaction', () => {
    beforeEach(() => {
      mockGetBoundingClientRect({ width: 100, height: 100 });
    });

    function renderFunnelWithTooltip() {
      return render(
        <FunnelChart width={500} height={500} throttledEvents={[]}>
          <Funnel isAnimationActive={false} dataKey="value" nameKey="name" data={data} id="my-funnel" />
          <Tooltip isAnimationActive={false} />
        </FunnelChart>,
      );
    }

    it('should mark every trapezoid with the attributes the touch middleware reads back', () => {
      const { container } = renderFunnelWithTooltip();

      const trapezoids = container.querySelectorAll('.recharts-trapezoid');
      expect(trapezoids).toHaveLength(data.length);
      trapezoids.forEach((trapezoid, expectedIndex) => {
        expect(trapezoid).toHaveAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME, String(expectedIndex));
        expect(trapezoid).toHaveAttribute(DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, 'my-funnel');
      });
    });

    it('should move the tooltip to the trapezoid under the finger', () => {
      const { container } = renderFunnelWithTooltip();

      const thirdTrapezoid = container.querySelectorAll('.recharts-trapezoid')[2];
      assertNotNull(thirdTrapezoid);
      mockTouchingRenderedElement(thirdTrapezoid);

      showTooltipOnCoordinateTouch(container, funnelChartMouseHoverTooltipSelector, { clientX: 200, clientY: 200 });

      expectTooltipPayload(container, '', ['访问 : 50']);
    });

    it('should resolve the trapezoid from an annotated ancestor of the touched element', () => {
      const { container } = renderFunnelWithTooltip();

      mockTouchingNestedElement('1', 'my-funnel');

      showTooltipOnCoordinateTouch(container, funnelChartMouseHoverTooltipSelector, { clientX: 200, clientY: 200 });

      expectTooltipPayload(container, '', ['点击 : 80']);
    });

    it('should not show a tooltip when touching an element that is not a funnel item', () => {
      const { container } = renderFunnelWithTooltip();

      mockTouchingUnrelatedElement();

      showTooltipOnCoordinateTouch(container, funnelChartMouseHoverTooltipSelector, { clientX: 200, clientY: 200 });

      expectTooltipNotVisible(container);
    });
  });
});

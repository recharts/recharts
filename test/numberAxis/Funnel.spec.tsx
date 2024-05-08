import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cell, Funnel, FunnelChart, FunnelProps, LabelList, Tooltip } from '../../src';
import { getTooltip, showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { funnelChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';

const data = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

describe('<Funnel />', () => {
  it('Render 5 Trapezoid in a simple funnel', () => {
    render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} />
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(data.length);
  });

  it('Render 5 Trapezoid with animation in a simple funnel', () => {
    render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} isAnimationActive />
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(data.length);
  });

  it("Don't render any Trapezoid when data is empty", () => {
    render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={[]} />
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });

  it("Don't render any Trapezoid when set hide", () => {
    render(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} hide />
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });

  it('active shape in simple funnel', () => {
    const { container, debug } = render(
      <FunnelChart width={500} height={500}>
        <Funnel
          dataKey="value"
          data={data}
          isAnimationActive={false}
          activeShape={(payload: FunnelProps) => (
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
  });

  it('Renders funnel custom cell in simple FunnelChart', () => {
    render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false}>
          {data.map(entry => (
            <Cell key={entry.name} className="custom-cell" />
          ))}
        </Funnel>
      </FunnelChart>,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(data.length);
  });

  it('Renders funnel custom label in simple FunnelChart', () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} isAnimationActive={false}>
          <LabelList position="right" fill="#000" stroke="#000" dataKey="name" className="custom-label" />
        </Funnel>
      </FunnelChart>,
    );

    expect(container.querySelectorAll('.custom-label')).toHaveLength(data.length);
  });

  describe('with Tooltip', () => {
    describe.each([undefined, 'hover'])('with trigger=%s', () => {
      function renderSample() {
        return render(
          <FunnelChart width={500} height={500}>
            <Funnel dataKey="value" data={data} />
            <Tooltip />
          </FunnelChart>,
        );
      }
      it('should not display tooltip before any user interactions', () => {
        const { container } = renderSample();
        const tooltip = getTooltip(container);
        expect(tooltip).not.toBeVisible();
      });

      it('should render tooltip when hovering over funnel element', () => {
        const { container, debug } = renderSample();
        const tooltip = getTooltip(container);

        showTooltip(container, funnelChartMouseHoverTooltipSelector, debug);
        expect(tooltip).toBeVisible();
      });

      it('should render nothing when hovering over chart area', () => {
        const { container, debug } = renderSample();
        const tooltip = getTooltip(container);

        showTooltip(container, '.recharts-wrapper', debug);

        expect(tooltip).not.toBeVisible();
      });

      it('should render nothing when clicking on the chart area', async () => {
        const { container } = renderSample();
        const tooltip = getTooltip(container);

        const user = userEvent.setup();

        await user.click(container.querySelector('.recharts-wrapper'));

        expect(tooltip).not.toBeVisible();
      });

      it('should render nothing when clicking on Funnel', () => {
        const { container } = renderSample();
        const tooltip = getTooltip(container);

        // we cannot do userEvent.click here because the click fires mouse Enter first which renders the tooltip
        fireEvent.click(container.querySelector('.recharts-funnel-trapezoid'));

        expect(tooltip).not.toBeVisible();
      });
    });

    describe('with trigger=click', () => {
      function renderSample() {
        return render(
          <FunnelChart width={500} height={500}>
            <Funnel dataKey="value" data={data} />
            <Tooltip trigger="click" />
          </FunnelChart>,
        );
      }

      it('should not display Tooltip before any user interactions', () => {
        const { container } = renderSample();
        const tooltip = getTooltip(container);
        expect(tooltip).not.toBeVisible();
      });

      it('should do nothing when clicking in a chart', () => {
        const { container } = renderSample();
        const tooltip = getTooltip(container);

        fireEvent.click(container.querySelector('.recharts-wrapper'));

        expect(tooltip).not.toBeVisible();
      });

      it('should do nothing when hovering over the chart', () => {
        const { container } = renderSample();
        const tooltip = getTooltip(container);

        fireEvent.mouseOver(container.querySelector('.recharts-wrapper'));

        expect(tooltip).not.toBeVisible();
      });

      it('should do nothing when hovering over funnel element', () => {
        const { container } = renderSample();
        const tooltip = getTooltip(container);

        fireEvent.mouseOver(container.querySelector('.recharts-funnel-trapezoid'));

        expect(tooltip).not.toBeVisible();
      });

      it('should display tooltip when clicking on funnel, and keep it displayed on second click', () => {
        const { container } = renderSample();
        const tooltip = getTooltip(container);

        fireEvent.click(container.querySelector('.recharts-funnel-trapezoid'));

        expect(tooltip).toBeVisible();

        fireEvent.click(container.querySelector('.recharts-funnel-trapezoid'));

        expect(tooltip).toBeVisible();
      });
    });
  });
});

import React from 'react';
import { FunnelChart, Funnel, Cell, LabelList } from './../../src/index';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const data = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

const colors1 = scaleOrdinal(schemeCategory10).range();

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


describe('<Funnel />', () => {
  it('Render 5 Trapezoid in a simple funnel', () => {
    act(() => {
      render(
        <FunnelChart width={500} height={500}>
          <Funnel
            dataKey="value"
            data={data}
          />
        </FunnelChart>, container
      );
    });

    expect(container.querySelectorAll('.recharts-funnel-trapezoid').length).toEqual(5);
  });

  it('Render 5 Trapezoid with animation in a simple funnel', () => {
    act(() => {
      render(
      <FunnelChart width={500} height={500}>
        <Funnel
          dataKey="value"
          data={data}
          isAnimationActive
          animationEasing="spring"
        />
      </FunnelChart>, container);
    });

    expect(container.querySelectorAll('.recharts-funnel-trapezoid').length).toBe(5);
  });

  it('Don\'t render any Trapezoid when data is empty', () => {
    act(() => {
      render(
      <FunnelChart width={500} height={500}>
        <Funnel
          data={[]}
        />
      </FunnelChart>, container);
    });

    expect(container.querySelectorAll('.recharts-funnel-trapezoid').length).toBe(0);
  });

  it('Don\'t render any Trapezoid when set hide', () => {
    act(() => {
      render(
      <FunnelChart width={500} height={500}>
        <Funnel
          dataKey="value"
          data={data}
          hide
        />
      </FunnelChart>, container);
    });

    expect(container.querySelectorAll('.recharts-funnel-trapezoid').length).toBe(0);
  });


  it('active shape in simple funnel', () => {
    act(() => {render(
      <FunnelChart width={500} height={500}>
        <Funnel
          dataKey="value"
          data={data}
          activeIndex={1}
          isAnimationActive={false}
          activeShape={payload => (
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
          {
            data.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={colors1[index % 10]} opacity={0.5} />
            ))
          }
        </Funnel>
      </FunnelChart>, container
    )
  });

    expect(container.querySelectorAll('.custom-active-shape').length).toBe(1);
  });

  it('Renders funnel custom cell in simple FunnelChart', () => {
    act(() => {
      render(
      <FunnelChart width={500} height={300}>
        <Funnel
          dataKey="value"
          data={data}
          isAnimationActive={false}
        >
          {
            data.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={colors1[index % 10]} className="custom-cell" />
            ))
          }
        </Funnel>
      </FunnelChart>, container);
    });
    expect(container.querySelectorAll('.custom-cell').length).toBe(5);
  });

  it('Renders funnel custom label in simple FunnelChart', () => {
    act(() => {
      render(
      <FunnelChart width={500} height={300}>
        <Funnel
          dataKey="value"
          data={data}
          isAnimationActive={false}
        >
          {
            data.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={colors1[index % 10]} className="custom-cell" />
            ))
          }
          <LabelList position="right" fill="#000" stroke="#000" dataKey="name" className="custom-label" />
        </Funnel>
      </FunnelChart>, container);
    });
    expect(container.querySelectorAll('.custom-label').length).toBe(5);
  });
});

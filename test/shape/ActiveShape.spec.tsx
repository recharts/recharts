/* eslint-disable max-len */
import React, { ReactElement } from 'react';

import { render } from '@testing-library/react';
import { Funnel, FunnelChart, Trapezoid, Tooltip } from '../../src';
import { mockMouseEvent } from '../helper/mockMouseEvent';

const funnelData = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

type ActiveShapeTestParams = {
  element: ReactElement;
  shapeClass?: string;
  activeClass: string;
  expectedLength?: number;
  detail?: string;
  componentName?: string;
};

const funnelShapes: ActiveShapeTestParams[] = [
  {
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={funnelData}
          dataKey="value"
          isAnimationActive={false}
          shape={props => <Trapezoid {...props} className="custom-trap-shape" />}
        />
      </FunnelChart>
    ),
    activeClass: '.custom-trap-shape',
    expectedLength: 5,
    componentName: 'Funnel',
    detail: 'renders customized shape when shape is set to be a function',
  },
  {
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={funnelData}
          dataKey="value"
          isAnimationActive={false}
          shape={{ className: 'custom-trap-shape' }}
        />
      </FunnelChart>
    ),
    activeClass: '.custom-trap-shape',
    expectedLength: 5,
    componentName: 'Funnel',
    detail: 'renders customized shape when shape is set to be an object',
  },
  {
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={funnelData}
          dataKey="value"
          isAnimationActive={false}
          shape={<Trapezoid fill="red" className="custom-trap-shape" />}
        />
      </FunnelChart>
    ),
    activeClass: '.custom-trap-shape',
    expectedLength: 5,
    componentName: 'Funnel',
    detail: 'renders customized shape when shape is set to be a React Element',
  },
];

const funnelActiveShapes: ActiveShapeTestParams[] = [
  {
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={funnelData}
          dataKey="value"
          isAnimationActive={false}
          activeShape={props => <Trapezoid {...props} />}
        />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    componentName: 'Funnel',
    detail: 'renders customized active shape when activeShape is set to be a function',
    expectedLength: 1,
  },
  {
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={funnelData}
          dataKey="value"
          isAnimationActive={false}
          activeShape={{ fill: 'red', strokeWidth: 2 }}
        />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    componentName: 'Funnel',
    detail: 'renders customized active shape when activeShape is set to be an object',
    expectedLength: 1,
  },
  {
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={funnelData}
          dataKey="value"
          isAnimationActive={false}
          activeShape={<Trapezoid fill="red" />}
        />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    componentName: 'Funnel',
    detail: 'renders customized active shape when activeShape is set to be a React Element',
    expectedLength: 1,
  },
  {
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel width={400} data={funnelData} dataKey="value" isAnimationActive={false} activeShape />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    componentName: 'Funnel',
    detail: 'renders customized active shape when activeShape is set to be a boolean',
    expectedLength: 1,
  },
  {
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel width={400} data={funnelData} dataKey="value" isAnimationActive={false} activeShape={false} />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    componentName: 'Funnel',
    detail: 'does not render customized active shape when activeShape is set to be a falsy boolean',
    expectedLength: 0,
  },
  {
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel width={400} data={funnelData} dataKey="value" isAnimationActive={false} />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    componentName: 'Funnel',
    detail: 'does not render customized active shape when activeShape is not set',
    expectedLength: 0,
  },
];

describe('Active Shape', () => {
  // testing that the shape prop is rendered
  test.each`
    name                             | detail                    | args
    ${funnelShapes[0].componentName} | ${funnelShapes[0].detail} | ${funnelShapes[0]}
    ${funnelShapes[1].componentName} | ${funnelShapes[1].detail} | ${funnelShapes[1]}
    ${funnelShapes[2].componentName} | ${funnelShapes[2].detail} | ${funnelShapes[2]}
  `('$name $detail', ({ element, activeClass, expectedLength = 0 }) => {
    const { container } = render(element);
    const customShapes = container.querySelectorAll(activeClass);
    expect(customShapes).toHaveLength(expectedLength);
  });

  // testing that the activeShape prop is rendered via tooltip
  test.each`
    name                                   | detail                          | args
    ${funnelActiveShapes[0].componentName} | ${funnelActiveShapes[0].detail} | ${funnelActiveShapes[0]}
    ${funnelActiveShapes[1].componentName} | ${funnelActiveShapes[1].detail} | ${funnelActiveShapes[1]}
    ${funnelActiveShapes[2].componentName} | ${funnelActiveShapes[2].detail} | ${funnelActiveShapes[2]}
    ${funnelActiveShapes[3].componentName} | ${funnelActiveShapes[3].detail} | ${funnelActiveShapes[3]}
    ${funnelActiveShapes[4].componentName} | ${funnelActiveShapes[4].detail} | ${funnelActiveShapes[4]}
    ${funnelActiveShapes[5].componentName} | ${funnelActiveShapes[5].detail} | ${funnelActiveShapes[5]}
  `('$name $detail', ({ args }) => {
    const { element, shapeClass = '', activeClass, expectedLength = 0 } = args;
    const { container } = render(element);

    const shapes = container.querySelectorAll(shapeClass);
    const [shape] = Array.from(shapes);
    const mouseOverEvent = mockMouseEvent('mouseover', shape, {});

    mouseOverEvent.fire();

    const activeShape = container.querySelectorAll(activeClass);
    expect(activeShape).toHaveLength(expectedLength);
  });
});

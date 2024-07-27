import React, { ReactElement } from 'react';

import { render, fireEvent } from '@testing-library/react';
import { Funnel, FunnelChart, Trapezoid, Tooltip, TrapezoidProps } from '../../src';

const funnelData = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

type ActiveShapeTestParams = {
  element: ReactElement;
  activeClass: string;
  expectedLength: number;
  name: string;
  shapeClass?: string;
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
          shape={(props: TrapezoidProps) => <Trapezoid {...props} className="custom-trap-shape" />}
        />
      </FunnelChart>
    ),
    activeClass: '.custom-trap-shape',
    expectedLength: 5,
    name: 'Funnel renders customized shape when shape is set to be a function',
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
    name: 'Funnel renders customized shape when shape is set to be an object',
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
    name: 'Funnel renders customized shape when shape is set to be a React Element',
  },
];

const funnelActiveShapes: ActiveShapeTestParams[] = [
  {
    name: 'Funnel renders customized active shape when activeShape is set to be a function',
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel
          width={400}
          data={funnelData}
          dataKey="value"
          isAnimationActive={false}
          activeShape={(props: TrapezoidProps) => <Trapezoid {...props} />}
        />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    expectedLength: 1,
  },
  {
    name: 'Funnel renders customized active shape when activeShape is set to be an object',
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
    expectedLength: 1,
  },
  {
    name: 'Funnel renders customized active shape when activeShape is set to be a React Element',
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
    expectedLength: 1,
  },
  {
    name: 'Funnel renders customized active shape when activeShape is set to be a boolean',
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel width={400} data={funnelData} dataKey="value" isAnimationActive={false} activeShape />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    expectedLength: 1,
  },
  {
    name: 'Funnel does not render customized active shape when activeShape is set to be a falsy boolean',
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel width={400} data={funnelData} dataKey="value" isAnimationActive={false} activeShape={false} />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    expectedLength: 0,
  },
  {
    name: 'Funnel does not render customized active shape when activeShape is not set',
    element: (
      <FunnelChart width={700} height={200}>
        <Funnel width={400} data={funnelData} dataKey="value" isAnimationActive={false} />
        <Tooltip />
      </FunnelChart>
    ),
    shapeClass: '.recharts-funnel-trapezoid',
    activeClass: '.recharts-active-shape',
    expectedLength: 0,
  },
];

describe('Active Shape', () => {
  // testing that the shape prop is rendered
  test.each(funnelShapes)('$name', ({ element, activeClass, expectedLength }) => {
    const { container } = render(element);
    const customShapes = container.querySelectorAll(activeClass);
    expect(customShapes).toHaveLength(expectedLength);
  });

  // testing that the activeShape prop is rendered via tooltip
  test.each(funnelActiveShapes)('$name', ({ element, activeClass, expectedLength, shapeClass }) => {
    const { container } = render(element);
    const shapes = container.querySelectorAll(shapeClass ?? '');
    const [shape] = Array.from(shapes);
    fireEvent.mouseOver(shape);
    const activeShape = container.querySelectorAll(activeClass);
    expect(activeShape).toHaveLength(expectedLength);
  });
});

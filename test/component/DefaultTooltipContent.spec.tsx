import React from 'react';
import { render } from '@testing-library/react';
import { DefaultTooltipContent } from '../../src/component/DefaultTooltipContent';

describe('DefaultTooltipContent', () => {
  const mockProps = {
    accessibilityLayer: true,
    allowEscapeViewBox: { x: false, y: false },
    animationDuration: 400,
    animationEasing: 'ease',
    contentStyle: {},
    coordinate: { x: 200, y: 200 },
    cursor: true,
    cursorStyle: {},
    filterNull: true,
    isAnimationActive: true,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: false, y: false },
    separator: ' : ',
    trigger: 'hover',
    useTranslate3d: false,
    viewBox: {
      brushBottom: 5,
      top: 5,
      bottom: 5,
      left: 5,
      right: 5,
      width: 390,
      height: 390,
      x: 5,
      y: 5,
    },
    wrapperStyle: {},
    active: true,
    label: 2,
    payload: [
      {
        stroke: '#3182bd',
        fill: '#3182bd',
        fillOpacity: 0.6,
        dataKey: 'uv',
        name: 'uv',
        color: '#3182bd',
        value: 200,
      },
    ],
    itemSorter: (d: { name: string }) => d.name,
    labelFormatter: () => `mock labelFormatter`,
  };
  it('renders without crashing, finds div with default class attr', () => {
    const { container } = render(<DefaultTooltipContent {...mockProps} />);
    expect(container.querySelectorAll('div.recharts-default-tooltip').length).toBe(1);
  });
});

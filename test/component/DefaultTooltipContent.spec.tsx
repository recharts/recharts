import React from 'react';
import { render, screen } from '@testing-library/react';
import { DefaultTooltipContent } from '../../src/component/DefaultTooltipContent';

describe('DefaultTooltipContent', () => {
  const mockProps = {
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
    active: false,
    label: 2,
    payload: [
      {
        name: 'alpha',
        unit: 'cm',
        value: 100,
        payload: { x: 100, y: 200, z: 200 },
        dataKey: 'x',
        type: 'none',
      },
      {
        name: 'beta',
        unit: 'kg',
        value: 200,
        payload: { x: 100, y: 200, z: 200 },
        dataKey: 'y',
        type: 'none',
      },
    ],
    itemSorter: (d: { name: string }) => d.name,
  };
  it('covers "itemSorter" prop', () => {
    // @ts-expect-error ignore payload.type prop for code coverage
    render(<DefaultTooltipContent {...mockProps} />);
  });
  it('covers "labelFormatter" prop', () => {
    // @ts-expect-error ignore payload.type prop for code coverage
    render(<DefaultTooltipContent {...mockProps} labelFormatter={() => `mock labelFormatter`} />);
    expect(screen.getByText('mock labelFormatter')).toBeInTheDocument();
  });
});

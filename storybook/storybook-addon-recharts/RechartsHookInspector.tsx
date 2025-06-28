import React from 'react';
import { createPortal } from 'react-dom';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { PolarChartInspector } from './PolarChartInspector';
import { CartesianChartInspector } from './CartesianChartInspector';
import { Position } from './constants';
import { HookInspectorLayoutSwitcher } from './HookInspectorLayoutSwitcher';

export function RechartsHookInspector({
  position,
  setPosition,
}: {
  position: Position;
  setPosition: (newPosition: Position) => void;
}) {
  const layout = useChartLayout();

  if (position === 'hidden' || position == null) {
    return null;
  }

  let Component;

  switch (layout) {
    case 'centric':
    case 'radial':
      Component = PolarChartInspector;
      break;
    default:
      Component = CartesianChartInspector;
  }

  return createPortal(
    <>
      <HookInspectorLayoutSwitcher position={position} setPosition={setPosition} />
      <Component />
    </>,
    document.querySelector('#recharts-hook-inspector-portal'),
  );
}

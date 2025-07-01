import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { PolarChartInspector } from './inspectors/PolarChartInspector';
import { CartesianChartInspector } from './inspectors/CartesianChartInspector';
import { Position } from './constants';
import { RechartsStorybookAddonActionBar } from './action-bar/RechartsStorybookAddonActionBar';
import { ChartSizeDimensions } from '../ChartSizeDimensions';
import { ChartInspectorProps } from './inspectors/types';

function Controls({
  position,
  setPosition,
  setEnabledOverlays,
  Component,
}: {
  position: Position;
  setPosition: (newPosition: Position) => void;
  setEnabledOverlays: (overlays: ReadonlyArray<string>) => void;
  Component: React.ComponentType<ChartInspectorProps>;
}) {
  return createPortal(
    <>
      <RechartsStorybookAddonActionBar position={position} setPosition={setPosition} />
      <Component setEnabledOverlays={setEnabledOverlays} />
    </>,
    document.querySelector('#recharts-hook-inspector-portal'),
  );
}

/**
 * Blanket component is an svg component that darkens the background a little bit.
 * @constructor
 */
function Blanket() {
  return (
    <rect
      x={0}
      y={0}
      width="100%"
      height="100%"
      fill="rgba(190, 190, 190, 0.4)"
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 1000 }}
    />
  );
}

export function RechartsHookInspector({
  position,
  setPosition,
}: {
  position: Position;
  setPosition: (newPosition: Position) => void;
}) {
  const layout = useChartLayout();
  const [enabledOverlays, setEnabledOverlays] = useState<ReadonlyArray<string>>([]);

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

  return (
    <>
      <Controls
        position={position}
        setPosition={setPosition}
        Component={Component}
        setEnabledOverlays={setEnabledOverlays}
      />
      {enabledOverlays.length >= 1 && <Blanket />}
      {enabledOverlays.includes('useChartWidth, useChartHeight') && <ChartSizeDimensions />}
    </>
  );
}

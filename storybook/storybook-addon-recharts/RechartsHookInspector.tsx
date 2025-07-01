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
      {enabledOverlays.includes('useChartWidth, useChartHeight') && <ChartSizeDimensions />}
    </>
  );
}

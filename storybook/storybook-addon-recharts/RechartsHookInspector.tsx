import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { PolarChartInspector } from './inspectors/PolarChartInspector';
import { CartesianChartInspector } from './inspectors/CartesianChartInspector';
import { Position } from './constants';
import { RechartsStorybookAddonActionBar } from './action-bar/RechartsStorybookAddonActionBar';
import { ChartSizeDimensions } from '../ChartSizeDimensions';
import { ChartInspectorProps } from './inspectors/types';
import { OffsetShower } from './inspectors/OffsetShower';
import { GraphicalAreaShower } from './inspectors/GraphicalAreaShower';

function Controls({
  defaultOpened,
  position,
  setPosition,
  setEnabledOverlays,
  Component,
}: {
  defaultOpened?: string;
  position: Position;
  setPosition: (newPosition: Position) => void;
  setEnabledOverlays: (overlays: ReadonlyArray<string>) => void;
  Component: React.ComponentType<ChartInspectorProps>;
}) {
  return createPortal(
    <>
      <RechartsStorybookAddonActionBar position={position} setPosition={setPosition} />
      <Component setEnabledOverlays={setEnabledOverlays} defaultOpened={defaultOpened} />
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
  defaultOpened,
  position,
  setPosition,
}: {
  defaultOpened?: string;
  position: Position | undefined;
  setPosition: (newPosition: Position) => void;
}) {
  const layout = useChartLayout();
  const [enabledOverlays, setEnabledOverlays] = useState<ReadonlyArray<string>>([defaultOpened]);
  const [openedFromStart, setOpenedFromStart] = useState<boolean>(defaultOpened !== undefined);

  useEffect(() => {
    if (position == null && defaultOpened !== undefined && process.env.CI !== 'true') {
      setOpenedFromStart(false);
      setPosition('NORTH');
    }
  }, [defaultOpened, openedFromStart, position, setPosition]);

  if (position === 'hidden' || position == null) {
    return null;
  }

  let Component: React.ComponentType<ChartInspectorProps>;

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
        defaultOpened={defaultOpened}
        position={position}
        setPosition={setPosition}
        Component={Component}
        setEnabledOverlays={setEnabledOverlays}
      />
      {enabledOverlays.length >= 1 && <Blanket />}
      {enabledOverlays.includes('useChartWidth, useChartHeight') && <ChartSizeDimensions />}
      {enabledOverlays.includes('useOffset') && <OffsetShower />}
      {enabledOverlays.includes('usePlotArea') && <GraphicalAreaShower />}
    </>
  );
}

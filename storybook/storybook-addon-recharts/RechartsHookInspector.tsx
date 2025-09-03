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
import { PlotAreaShower } from './inspectors/PlotAreaShower';
import { useRechartsInspectorState } from './RechartsInspectorDecorator';
import { ManualAnimations } from './ManualAnimations';
import {
  CrosshairControls,
  RenderCrosshairs,
  useCrosshairManager,
  CrosshairType,
  Blanket,
} from './crosshairs/CrosshairControls';

function Controls({
  defaultOpened,
  position,
  setPosition,
  setEnabledOverlays,
  Component,
  crosshairs,
  isAdding,
  onAddCrosshair,
  onDeleteCrosshair,
  onUpdateCrosshair,
}: {
  defaultOpened?: string;
  position: Position;
  setPosition: (newPosition: Position) => void;
  setEnabledOverlays: (overlays: ReadonlyArray<string>) => void;
  Component: React.ComponentType<ChartInspectorProps>;
  crosshairs: CrosshairType[];
  isAdding: boolean;
  onAddCrosshair: () => void;
  onDeleteCrosshair: (id: number) => void;
  onUpdateCrosshair: (crosshair: CrosshairType) => void;
}) {
  return createPortal(
    <>
      <RechartsStorybookAddonActionBar position={position} setPosition={setPosition} />
      <Component setEnabledOverlays={setEnabledOverlays} defaultOpened={defaultOpened} />
      <ManualAnimations />
      <CrosshairControls
        crosshairs={crosshairs}
        isAdding={isAdding}
        onAddCrosshair={onAddCrosshair}
        onDeleteCrosshair={onDeleteCrosshair}
        onUpdateCrosshair={onUpdateCrosshair}
      />
    </>,
    document.querySelector('#recharts-hook-inspector-portal'),
  );
}

const overlaysThatNeedBlanket = ['useChartWidth, useChartHeight', 'useOffset', 'usePlotArea'];

export function RechartsHookInspector({ defaultOpened }: { defaultOpened?: string }) {
  const layout = useChartLayout();
  const [enabledOverlays, setEnabledOverlays] = useState<ReadonlyArray<string>>(defaultOpened ? [defaultOpened] : []);
  const [openedFromStart, setOpenedFromStart] = useState<boolean>(defaultOpened !== undefined);
  const { position, setPosition } = useRechartsInspectorState();

  useEffect(() => {
    if (position == null && defaultOpened !== undefined && typeof setPosition === 'function') {
      setOpenedFromStart(false);
      setPosition('NORTH');
    }
  }, [defaultOpened, openedFromStart, position, setPosition]);

  const {
    crosshairs,
    isAdding,
    onAddCrosshair,
    onUpdateCrosshair,
    onDeleteCrosshair,
    followerCrosshair,
    onChartClick,
    onChartMouseMove,
    onChartMouseLeave,
  } = useCrosshairManager();

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
        crosshairs={crosshairs}
        isAdding={isAdding}
        onAddCrosshair={onAddCrosshair}
        onDeleteCrosshair={onDeleteCrosshair}
        onUpdateCrosshair={onUpdateCrosshair}
      />
      <RenderCrosshairs
        followerCrosshair={followerCrosshair}
        crosshairs={crosshairs}
        onChartClick={onChartClick}
        onChartMouseMove={onChartMouseMove}
        onChartMouseLeave={onChartMouseLeave}
        isAdding={isAdding}
      />
      {overlaysThatNeedBlanket.some(overlay => enabledOverlays.includes(overlay)) && <Blanket />}
      {enabledOverlays.includes('useChartWidth, useChartHeight') && <ChartSizeDimensions />}
      {enabledOverlays.includes('useOffset') && <OffsetShower />}
      {enabledOverlays.includes('usePlotArea') && <PlotAreaShower />}
    </>
  );
}

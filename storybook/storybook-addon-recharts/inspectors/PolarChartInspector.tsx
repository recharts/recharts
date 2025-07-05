import React, { ComponentType } from 'react';
import { ChartDimensionInspector } from './ChartDimensionInspector';
import { LayoutTypeInspector } from './LayoutTypeInspector';
import { OffsetInspector } from './OffsetInspector';
import { SelectChartViewBoxInspector } from './SelectChartViewBoxInspector';
import { UseViewBoxInspector } from './UseViewBoxInspector';
import { TooltipAxisScaleInspector } from './TooltipAxisScaleInspector';
import { TooltipAxisTicksInspector } from './TooltipAxisTicksInspector';
import { TooltipStateInspector } from './TooltipStateInspector';
import { ChartInspectorProps } from './types';
import { ChartInspector } from './ChartInspector';
import { TooltipAxisTypeInspector } from './TooltipAxisTypeInspector';
import { PlotAreaInspector } from './PlotAreaInspector';

/**
 * These are available publicly, are part of the external Recharts API.
 */
const externalInspectors: Record<string, ComponentType> = {
  'useChartWidth, useChartHeight': ChartDimensionInspector,
  useOffset: OffsetInspector,
  usePlotArea: PlotAreaInspector,
};

/**
 * These are internal inspectors, not part of the external Recharts API.
 * They are used for debugging and development purposes and are not intended for public use.
 * So we're only going to show them when running on localhost.
 */
const internalInspectors: Record<string, ComponentType> = {
  useChartLayout: LayoutTypeInspector,
  selectChartViewBox: SelectChartViewBoxInspector,
  useViewBox: UseViewBoxInspector,
  'Tooltip Axis Scale': TooltipAxisScaleInspector,
  selectTooltipAxisTicks: TooltipAxisTicksInspector,
  selectTooltipState: TooltipStateInspector,
  selectTooltipAxisType: TooltipAxisTypeInspector,
};

const isLocalhost = window.location.hostname === 'localhost';

const allInspectors: Record<string, ComponentType> = {
  ...externalInspectors,
  ...(isLocalhost ? internalInspectors : {}),
};

export function PolarChartInspector({ setEnabledOverlays }: ChartInspectorProps) {
  return <ChartInspector allInspectors={allInspectors} setEnabledOverlays={setEnabledOverlays} />;
}

import React, { ComponentType } from 'react';
import { LayoutTypeInspector } from './LayoutTypeInspector';
import { XAxisScaleInspector } from './XAxisScaleInspector';
import { YAxisScaleInspector } from './YAxisScaleInspector';
import { BrushIndexInspector } from './BrushIndexInspector';
import { TooltipAxisScaleInspector } from './TooltipAxisScaleInspector';
import { TooltipAxisTicksInspector } from './TooltipAxisTicksInspector';
import { TooltipStateInspector } from './TooltipStateInspector';
import { ChartDimensionInspector } from './ChartDimensionInspector';
import { ChartInspectorProps } from './types';
import { OffsetInspector } from './OffsetInspector';
import { SelectChartViewBoxInspector } from './SelectChartViewBoxInspector';
import { UseViewBoxInspector } from './UseViewBoxInspector';
import { BrushSettingsInspector } from './BrushSettingsInspector';
import { SelectBrushDimensionsInspector } from './SelectBrushDimensionsInspector';
import { ChartInspector } from './ChartInspector';
import { PlotAreaInspector } from './PlotAreaInspector';
import { TooltipAxisTypeInspector } from './TooltipAxisTypeInspector';
import { UseActiveTooltipDataPointsInspector } from './UseActiveTooltipDataPointsInspector';

/**
 * These are available publicly, are part of the external Recharts API.
 */
const externalInspectors: Record<string, ComponentType> = {
  'useChartWidth, useChartHeight': ChartDimensionInspector,
  useOffset: OffsetInspector,
  usePlotArea: PlotAreaInspector,
  useActiveTooltipDataPoints: UseActiveTooltipDataPointsInspector,
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
  'XAxis Scale': XAxisScaleInspector,
  'YAxis Scale': YAxisScaleInspector,
  'Tooltip Axis Scale': TooltipAxisScaleInspector,
  selectTooltipAxisTicks: TooltipAxisTicksInspector,
  selectTooltipState: TooltipStateInspector,
  'Brush Indices': BrushIndexInspector,
  selectBrushSettings: BrushSettingsInspector,
  selectBrushDimensions: SelectBrushDimensionsInspector,
  selectTooltipAxisType: TooltipAxisTypeInspector,
};

const isLocalhost = window.location.hostname === 'localhost';

const allInspectors: Record<string, ComponentType> = {
  ...externalInspectors,
  ...(isLocalhost ? internalInspectors : {}),
};

export function CartesianChartInspector({ setEnabledOverlays, defaultOpened }: ChartInspectorProps) {
  return (
    <ChartInspector
      allInspectors={allInspectors}
      setEnabledOverlays={setEnabledOverlays}
      defaultOpened={defaultOpened}
    />
  );
}

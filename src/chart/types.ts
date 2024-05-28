import { ReactElement } from 'react';
import {
  AxisTick,
  AxisType,
  BaseAxisProps,
  ChartCoordinate,
  ChartOffset,
  DataKey,
  LayoutType,
  Margin,
  StackOffsetType,
  TickItem,
  XAxisMap,
  YAxisMap,
} from '../util/types';
import { AxisStackGroups, RechartsScale } from '../util/ChartUtils';
import { BoundingBox } from '../util/useGetBoundingClientRect';
import { TooltipPayloadType } from '../context/tooltipContext';

export type AxisMap = {
  [axisId: string]: AxisPropsWithExtraComputedData;
};

export interface CategoricalChartState {
  chartX?: number;

  chartY?: number;

  dataStartIndex?: number;

  dataEndIndex?: number;

  activeTooltipIndex?: number;

  isTooltipActive?: boolean;

  updateId?: number;

  xAxisMap?: XAxisMap;

  yAxisMap?: YAxisMap;

  zAxisMap?: AxisMap;

  orderedTooltipTicks?: any;

  tooltipAxis?: AxisPropsWithExtraComputedData;

  tooltipTicks?: TickItem[];

  graphicalItems?: ReadonlyArray<ReactElement>;

  activeCoordinate?: ChartCoordinate;

  offset?: ChartOffset;

  angleAxisMap?: AxisMap;

  radiusAxisMap?: AxisMap;

  formattedGraphicalItems?: any;

  /** active tooltip payload */
  activePayload?: TooltipPayloadType;

  /** Active label of data */
  activeLabel?: string;

  activeIndex?: number;

  xValue?: number;

  yValue?: number;

  legendBBox?: BoundingBox | null;

  prevDataKey?: DataKey<any>;
  prevData?: any[];
  prevWidth?: number;
  prevHeight?: number;
  prevLayout?: LayoutType;
  prevStackOffset?: StackOffsetType;
  prevMargin?: Margin;
  prevChildren?: any;
  stackGroups?: AxisStackGroups;

  tooltipPortal?: HTMLElement | null;
  cursorPortal?: SVGElement | null;
}

export type TooltipTrigger = 'hover' | 'click';

/**
 * Components like XAxis and YAxis accept BaseAxisProps as their external props
 * and then generateCategoricalChart will gather those and compute extra stuff and save it as axisMaps.
 */
export type AxisPropsWithExtraComputedData = Omit<BaseAxisProps, 'scale'> & {
  axisType: AxisType;
  width?: number;
  height?: number;
  mirror: boolean;
  reversed: boolean;
  scale: RechartsScale;
  categoricalDomain?: ReadonlyArray<AxisTick>;
  duplicateDomain?: ReadonlyArray<AxisTick>;
  niceTicks?: ReadonlyArray<AxisTick>;
  isCategorical: boolean;
  range?: Array<number>;
  realScaleType?: 'scaleBand' | 'band' | 'point' | 'linear';
  x: number;
  y: number;
};

export type XAxisWithExtraData = AxisPropsWithExtraComputedData & {
  axisType: 'xAxis';
  orientation: 'top' | 'bottom';
};

export type YAxisWithExtraData = AxisPropsWithExtraComputedData & {
  axisType: 'yAxis';
  orientation: 'left' | 'right';
};

export type AxisObj = {
  xAxis?: XAxisWithExtraData;
  xAxisTicks?: Array<TickItem>;

  yAxis?: YAxisWithExtraData;
  yAxisTicks?: Array<TickItem>;

  zAxis?: AxisPropsWithExtraComputedData;
  zAxisTicks?: Array<TickItem>;

  angleAxis?: AxisPropsWithExtraComputedData;
  angleAxisTicks?: Array<TickItem>;

  radiusAxis?: AxisPropsWithExtraComputedData;
  radiusAxisTicks?: Array<TickItem>;
};

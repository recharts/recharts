import { ReactElement } from 'react';
import {
  AxisTick,
  AxisType,
  BaseAxisProps,
  ChartOffset,
  DataKey,
  LayoutType,
  Margin,
  StackOffsetType,
  TickItem,
} from '../util/types';
import { AxisStackGroups, RechartsScale } from '../util/ChartUtils';
import { BoundingBox } from '../util/useGetBoundingClientRect';

export type AxisMap = {
  [axisId: string]: AxisPropsWithExtraComputedData;
};

export interface CategoricalChartState {
  chartX?: number;

  chartY?: number;

  dataStartIndex?: number;

  dataEndIndex?: number;

  isTooltipActive?: boolean;

  updateId?: number;

  orderedTooltipTicks?: any;

  tooltipAxis?: AxisPropsWithExtraComputedData;

  tooltipTicks?: TickItem[];

  graphicalItems?: ReadonlyArray<ReactElement>;

  offset?: ChartOffset;

  angleAxisMap?: AxisMap;

  radiusAxisMap?: AxisMap;

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
  legendPortal?: HTMLElement | null;
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

import { ReactElement } from 'react';
import {
  BaseAxisProps,
  ChartCoordinate,
  ChartOffset,
  DataKey,
  LayoutType,
  Margin,
  StackOffsetType,
  TickItem,
} from '../util/types';
import { AxisStackGroups } from '../util/ChartUtils';

export type AxisMap = {
  [axisId: string]: BaseAxisProps;
};

export interface CategoricalChartState {
  chartX?: number;

  chartY?: number;

  dataStartIndex?: number;

  dataEndIndex?: number;

  activeTooltipIndex?: number;

  isTooltipActive?: boolean;

  updateId?: number;

  xAxisMap?: AxisMap;

  yAxisMap?: AxisMap;

  zAxisMap?: AxisMap;

  orderedTooltipTicks?: any;

  tooltipAxis?: BaseAxisProps;

  tooltipTicks?: TickItem[];

  graphicalItems?: ReadonlyArray<ReactElement>;

  activeCoordinate?: ChartCoordinate;

  offset?: ChartOffset;

  angleAxisMap?: any;

  radiusAxisMap?: any;

  formattedGraphicalItems?: any;

  /** active tooltip payload */
  activePayload?: any[];

  tooltipAxisBandSize?: number;

  /** active item */
  activeItem?: any;

  /** Active label of data */
  activeLabel?: string;

  activeIndex?: number;

  xValue?: number;

  yValue?: number;

  legendBBox?: DOMRect | null;

  prevDataKey?: DataKey<any>;
  prevData?: any[];
  prevWidth?: number;
  prevHeight?: number;
  prevLayout?: LayoutType;
  prevStackOffset?: StackOffsetType;
  prevMargin?: Margin;
  prevChildren?: any;

  stackGroups?: AxisStackGroups;
}

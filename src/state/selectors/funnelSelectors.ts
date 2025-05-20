import { createSelector } from 'reselect';
import { ReactElement } from 'react';
import { computeFunnelTrapezoids, FunnelTrapezoidItem } from '../../cartesian/Funnel';
import { ChartData } from '../chartDataSlice';
import { RechartsRootState } from '../store';
import { selectChartOffset } from './selectChartOffset';
import { selectChartDataAndAlwaysIgnoreIndexes } from './dataSelectors';
import { DataKey, TooltipType } from '../../util/types';
import { CellProps } from '../..';

type FunnelComposedData = {
  trapezoids: ReadonlyArray<FunnelTrapezoidItem>;
  data: ChartData | undefined;
};

export type ResolvedFunnelSettings = {
  dataKey: DataKey<any>;
  data: ChartData | undefined;
  nameKey: DataKey<any>;
  tooltipType?: TooltipType;
  lastShapeType?: 'triangle' | 'rectangle';
  reversed?: boolean;
  customWidth?: string | number;
  cells: ReadonlyArray<ReactElement>;
  presentationProps: Record<string, any> | null;
};

const pickFunnelSettings = (
  _state: RechartsRootState,
  funnelSettings: ResolvedFunnelSettings,
): ResolvedFunnelSettings => funnelSettings;

export const selectFunnelTrapezoids: (
  state: RechartsRootState,
  {
    dataKey,
    nameKey,
    tooltipType,
    lastShapeType,
    reversed,
    customWidth,
    cells,
    presentationProps,
  }: ResolvedFunnelSettings,
) => FunnelComposedData = createSelector(
  [selectChartOffset, pickFunnelSettings, selectChartDataAndAlwaysIgnoreIndexes],
  (
    offset,
    { data, dataKey, nameKey, tooltipType, lastShapeType, reversed, customWidth, cells, presentationProps },
    { chartData },
  ): FunnelComposedData => {
    let displayedData: ChartData | undefined;
    if (data != null && data.length > 0) {
      displayedData = data;
    } else if (chartData != null && chartData.length > 0) {
      displayedData = chartData;
    }

    if (displayedData && displayedData.length) {
      displayedData = displayedData.map((entry: any, index: number) => ({
        payload: entry,
        ...presentationProps,
        ...entry,
        ...(cells && cells[index] && cells[index].props),
      }));
    } else if (cells && cells.length) {
      displayedData = cells.map((cell: ReactElement<CellProps>) => ({ ...presentationProps, ...cell.props }));
    } else {
      return { trapezoids: [], data: displayedData };
    }

    return computeFunnelTrapezoids({
      dataKey,
      nameKey,
      displayedData,
      tooltipType,
      lastShapeType,
      reversed,
      offset,
      customWidth,
    });
  },
);

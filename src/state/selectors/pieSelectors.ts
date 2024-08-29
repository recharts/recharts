import { createSelector } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { CellProps, LegendType } from '../..';
import { computePieSectors, PieCoordinate, PieSectorDataItem } from '../../polar/Pie';
import { RechartsRootState } from '../store';
import { selectChartDataWithIndexes } from './dataSelectors';
import { ChartData, ChartDataState } from '../chartDataSlice';
import { ChartOffset, DataKey } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';
import { selectChartOffset } from './selectChartOffset';
import type { Payload as LegendPayload } from '../../component/DefaultLegendContent';
import { getValueByDataKey } from '../../util/ChartUtils';

export type ResolvedPieSettings = {
  name: string | number | undefined;
  nameKey: DataKey<any>;
  data: ChartData | undefined;
  dataKey: DataKey<any> | undefined;
  tooltipType?: TooltipType | undefined;

  legendType: LegendType;
  fill: string;

  cx?: number | string;
  cy?: number | string;
  startAngle?: number;
  endAngle?: number;
  paddingAngle?: number;
  minAngle?: number;
  innerRadius?: number | string;
  outerRadius?: number | string;
  cornerRadius?: number | string;
  presentationProps?: Record<string, string>;
};

const pickPieSettings = (_state: RechartsRootState, pieSettings: ResolvedPieSettings) => pieSettings;

const pickCells = (
  _state: RechartsRootState,
  _pieSettings: ResolvedPieSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => cells;

export const selectDisplayedData: (
  state: RechartsRootState,
  pieSettings: ResolvedPieSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ChartData | undefined = createSelector(
  [selectChartDataWithIndexes, pickPieSettings, pickCells],
  ({ chartData }: ChartDataState, pieSettings: ResolvedPieSettings, cells): ChartData | undefined => {
    let displayedData: ChartData | undefined;
    if (pieSettings?.data?.length > 0) {
      displayedData = pieSettings.data;
    } else {
      displayedData = chartData;
    }

    if (!displayedData || !displayedData.length) {
      displayedData = cells.map((cell: ReactElement<CellProps>) => ({
        ...pieSettings.presentationProps,
        ...cell.props,
      }));
    }

    if (displayedData == null) {
      return undefined;
    }

    return displayedData;
  },
);

export const selectPieLegend: (
  state: RechartsRootState,
  pieSettings: ResolvedPieSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => Array<LegendPayload> | undefined = createSelector(
  [selectDisplayedData, pickPieSettings, pickCells],
  (displayedData, pieSettings: ResolvedPieSettings, cells: ReadonlyArray<ReactElement>) => {
    return displayedData.map((entry, i) => {
      const name = getValueByDataKey(entry, pieSettings.nameKey, pieSettings.name);
      let color;
      if (cells?.[i]?.props?.fill) {
        color = cells[i].props.fill;
      } else if (typeof entry === 'object' && entry != null && 'fill' in entry) {
        color = entry.fill;
      } else {
        color = pieSettings.fill;
      }
      return { value: name, color, payload: entry, type: pieSettings.legendType };
    });
  },
);

export const selectPieSectors: (
  state: RechartsRootState,
  pieSettings: ResolvedPieSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => { sectors?: Readonly<PieSectorDataItem[]>; coordinate?: PieCoordinate } | undefined = createSelector(
  [selectDisplayedData, pickPieSettings, pickCells, selectChartOffset],
  (
    displayedData: ChartData | undefined,
    pieSettings: ResolvedPieSettings,
    cells,
    offset: ChartOffset,
  ): { sectors?: Readonly<PieSectorDataItem[]>; coordinate?: PieCoordinate } | undefined => {
    return computePieSectors({
      offset,
      pieSettings,
      displayedData,
      cells,
    });
  },
);

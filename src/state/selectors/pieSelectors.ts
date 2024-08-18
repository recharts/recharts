import { createSelector } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { CellProps } from '../..';
import { computePieSectors, PieCoordinate, PieSectorDataItem, Props } from '../../polar/Pie';
import { RechartsRootState } from '../store';
import { selectChartDataWithIndexes } from './dataSelectors';
import { ChartData, ChartDataState } from '../chartDataSlice';
import { ChartOffset, DataKey } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';
import { selectChartOffset } from './selectChartOffset';

export type ResolvedPieSettings = {
  name?: string | number;
  nameKey?: DataKey<any>;
  data: ChartData | undefined;
  dataKey: DataKey<any> | undefined;
  tooltipType?: TooltipType | undefined;

  cx?: number | string;
  cy?: number | string;
  startAngle?: number;
  endAngle?: number;
  paddingAngle?: number;
  minAngle?: number;
  innerRadius?: number | string;
  outerRadius?: number | string;
  cornerRadius?: number | string;
};

const pickPieSettings = (_state: RechartsRootState, pieSettings: ResolvedPieSettings) => pieSettings;

const pickPresentationProps = (
  _state: RechartsRootState,
  _pieSettings: ResolvedPieSettings,
  presentationProps: Props,
) => presentationProps;

const pickCells = (
  _state: RechartsRootState,
  _pieSettings: ResolvedPieSettings,
  _presentationProps: Props,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => cells;

export const selectPieSectors: (
  state: RechartsRootState,
  pieSettings: ResolvedPieSettings,
  presentationProps: Props,
  cells: ReadonlyArray<ReactElement> | undefined,
) => { sectors?: Readonly<PieSectorDataItem[]>; coordinate?: PieCoordinate } | undefined = createSelector(
  [selectChartDataWithIndexes, pickPieSettings, pickPresentationProps, pickCells, selectChartOffset],
  (
    { chartData }: ChartDataState,
    pieSettings: ResolvedPieSettings,
    presentationProps: Props,
    cells,
    offset: ChartOffset,
  ): { sectors?: Readonly<PieSectorDataItem[]>; coordinate?: PieCoordinate } | undefined => {
    let displayedData: ChartData | undefined;
    if (pieSettings?.data?.length > 0) {
      displayedData = pieSettings.data;
    } else {
      displayedData = chartData;
    }

    if (!displayedData || !displayedData.length) {
      displayedData = cells.map((cell: ReactElement<CellProps>) => ({ ...presentationProps, ...cell.props }));
    }

    if (displayedData == null) {
      return undefined;
    }

    return computePieSectors({
      offset,
      pieSettings,
      displayedData,
      cells,
    });
  },
);

import { createSelector } from 'reselect';
import { ReactElement } from 'react';
import { CellProps, LegendType } from '../..';
import { computePieSectors, PieSectorDataItem } from '../../polar/Pie';
import { RechartsRootState } from '../store';
import { selectChartDataAndAlwaysIgnoreIndexes } from './dataSelectors';
import { ChartData, ChartDataState } from '../chartDataSlice';
import { ChartOffset, DataKey } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';
import { selectChartOffset } from './selectChartOffset';
import type { LegendPayload } from '../../component/DefaultLegendContent';
import { getTooltipNameProp, getValueByDataKey } from '../../util/ChartUtils';
import { selectUnfilteredPolarItems } from './polarSelectors';

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
  outerRadius?: number | string | ((element: any) => number);
  cornerRadius?: number | string;
  presentationProps?: Record<string, string>;
};

const pickPieSettings = (_state: RechartsRootState, pieSettings: ResolvedPieSettings) => pieSettings;

// Keep stable reference to an empty array to prevent re-renders
const emptyArray: ReadonlyArray<ReactElement> = [];
const pickCells = (
  _state: RechartsRootState,
  _pieSettings: ResolvedPieSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => {
  if (cells?.length === 0) {
    return emptyArray;
  }
  return cells;
};

export const selectDisplayedData: (
  state: RechartsRootState,
  pieSettings: ResolvedPieSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ChartData | undefined = createSelector(
  [selectChartDataAndAlwaysIgnoreIndexes, pickPieSettings, pickCells],
  ({ chartData }: ChartDataState, pieSettings: ResolvedPieSettings, cells): ChartData | undefined => {
    let displayedData: ChartData | undefined;
    if (pieSettings?.data != null && pieSettings.data.length > 0) {
      displayedData = pieSettings.data;
    } else {
      displayedData = chartData;
    }

    if ((!displayedData || !displayedData.length) && cells != null) {
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
) => ReadonlyArray<LegendPayload> | undefined = createSelector(
  [selectDisplayedData, pickPieSettings, pickCells],
  (
    displayedData: ChartData | undefined,
    pieSettings: ResolvedPieSettings,
    cells: ReadonlyArray<ReactElement>,
  ): ReadonlyArray<LegendPayload> | undefined => {
    if (displayedData == null) {
      return undefined;
    }
    return displayedData.map((entry, i): LegendPayload => {
      const name = getValueByDataKey(entry, pieSettings.nameKey, pieSettings.name);
      let color;
      if (cells?.[i]?.props?.fill) {
        color = cells[i].props.fill;
      } else if (typeof entry === 'object' && entry != null && 'fill' in entry) {
        color = entry.fill;
      } else {
        color = pieSettings.fill;
      }
      return {
        value: getTooltipNameProp(name, pieSettings.dataKey),
        color,
        payload: entry,
        type: pieSettings.legendType,
      };
    });
  },
);

const selectSynchronisedPieSettings: (
  state: RechartsRootState,
  pieSettings: ResolvedPieSettings,
) => ResolvedPieSettings | undefined = createSelector(
  [selectUnfilteredPolarItems, pickPieSettings],
  (graphicalItems, pieSettingsFromProps) => {
    if (
      graphicalItems.some(
        pgis =>
          pgis.type === 'pie' &&
          pieSettingsFromProps.dataKey === pgis.dataKey &&
          pieSettingsFromProps.data === pgis.data,
      )
    ) {
      return pieSettingsFromProps;
    }
    return undefined;
  },
);

export const selectPieSectors: (
  state: RechartsRootState,
  pieSettings: ResolvedPieSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => Readonly<PieSectorDataItem[]> | undefined = createSelector(
  [selectDisplayedData, selectSynchronisedPieSettings, pickCells, selectChartOffset],
  (
    displayedData: ChartData | undefined,
    pieSettings: ResolvedPieSettings,
    cells,
    offset: ChartOffset,
  ): Readonly<PieSectorDataItem[]> | undefined => {
    if (pieSettings == null || displayedData == null) {
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

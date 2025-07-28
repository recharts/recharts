import { createSelector } from 'reselect';
import { ReactElement } from 'react';
import { CellProps } from '../..';
import { computePieSectors, PieSectorDataItem } from '../../polar/Pie';
import { RechartsRootState } from '../store';
import { selectChartDataAndAlwaysIgnoreIndexes } from './dataSelectors';
import { ChartData, ChartDataState } from '../chartDataSlice';
import { ChartOffsetInternal } from '../../util/types';
import { selectChartOffsetInternal } from './selectChartOffsetInternal';
import type { LegendPayload } from '../../component/DefaultLegendContent';
import { getTooltipNameProp, getValueByDataKey } from '../../util/ChartUtils';
import { selectUnfilteredPolarItems } from './polarSelectors';
import { PieSettings } from '../types/PieSettings';
import { GraphicalItemId } from '../graphicalItemsSlice';

const pickId = (_state: RechartsRootState, id: GraphicalItemId): GraphicalItemId => id;

const selectSynchronisedPieSettings: (state: RechartsRootState, id: GraphicalItemId) => PieSettings | undefined =
  createSelector([selectUnfilteredPolarItems, pickId], (graphicalItems, id) =>
    graphicalItems.filter(item => item.type === 'pie').find(item => item.id === id),
  );

// Keep stable reference to an empty array to prevent re-renders
const emptyArray: ReadonlyArray<ReactElement> = [];
const pickCells = (
  _state: RechartsRootState,
  _id: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => {
  if (cells?.length === 0) {
    return emptyArray;
  }
  return cells;
};

export const selectDisplayedData: (
  state: RechartsRootState,
  id: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ChartData | undefined = createSelector(
  [selectChartDataAndAlwaysIgnoreIndexes, selectSynchronisedPieSettings, pickCells],
  ({ chartData }: ChartDataState, pieSettings: PieSettings | undefined, cells): ChartData | undefined => {
    if (pieSettings == null) {
      return undefined;
    }
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
  id: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ReadonlyArray<LegendPayload> | undefined = createSelector(
  [selectDisplayedData, selectSynchronisedPieSettings, pickCells],
  (
    displayedData: ChartData | undefined,
    pieSettings: PieSettings | undefined,
    cells: ReadonlyArray<ReactElement>,
  ): ReadonlyArray<LegendPayload> | undefined => {
    if (displayedData == null || pieSettings == null) {
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

export const selectPieSectors: (
  state: RechartsRootState,
  id: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
) => Readonly<PieSectorDataItem[]> | undefined = createSelector(
  [selectDisplayedData, selectSynchronisedPieSettings, pickCells, selectChartOffsetInternal],
  (
    displayedData: ChartData | undefined,
    pieSettings: PieSettings,
    cells,
    offset: ChartOffsetInternal,
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

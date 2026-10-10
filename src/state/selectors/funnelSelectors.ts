import { createSelector } from 'reselect';
import { ReactElement } from 'react';
import { computeFunnelTrapezoids, FunnelTrapezoidItem } from '../../cartesian/Funnel';
import { ChartData } from '../chartDataSlice';
import { RechartsRootState } from '../store';
import { selectChartOffsetInternal } from './selectChartOffsetInternal';
import { selectChartDataAndAlwaysIgnoreIndexes } from './dataSelectors';
import { ChartOffsetInternal, DataKey, TooltipType } from '../../util/types';
import { CellProps } from '../..';
import { GraphicalItemId } from '../graphicalItemsSlice';
import { hasOwnColors, UnthemedStyles } from '../../theme/dataEntryStyles';

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
  /**
   * Per-index theme styles for the funnel items. Each item at index `i` gets the style at
   * `i % indexedStyles.length`. Only values not explicitly provided via props are set,
   * so an explicit prop still wins over the theme.
   */
  indexedStyles: ReadonlyArray<Record<string, any>>;
  /**
   * Explicit style props without theme contributions. Items that define their own colors
   * (in data or in Cell) get these instead of `indexedStyles`, so they ignore the theme completely.
   * Undefined when there is no active theme.
   */
  unthemedStyles?: UnthemedStyles;
  id: GraphicalItemId;
};

const pickFunnelSettings = (
  _state: RechartsRootState,
  funnelSettings: ResolvedFunnelSettings,
): ResolvedFunnelSettings => funnelSettings;

export const selectFunnelTrapezoids: (
  state: RechartsRootState,
  funnelSettings: ResolvedFunnelSettings,
) => ReadonlyArray<FunnelTrapezoidItem> = createSelector(
  [selectChartOffsetInternal, pickFunnelSettings, selectChartDataAndAlwaysIgnoreIndexes],
  (
    offset: ChartOffsetInternal,
    {
      data,
      dataKey,
      nameKey,
      tooltipType,
      lastShapeType,
      reversed,
      customWidth,
      cells,
      presentationProps,
      indexedStyles,
      unthemedStyles,
      id: graphicalItemId,
    },
    { chartData },
  ): ReadonlyArray<FunnelTrapezoidItem> => {
    let displayedData: ChartData | undefined;
    if (data != null && data.length > 0) {
      displayedData = data;
    } else if (chartData != null && chartData.length > 0) {
      displayedData = chartData;
    }

    const styleForEntry = (entry: unknown, cellProps: unknown, index: number) => {
      if (unthemedStyles != null && (hasOwnColors(entry) || hasOwnColors(cellProps))) {
        return unthemedStyles;
      }
      return indexedStyles != null && indexedStyles.length > 0 ? indexedStyles[index % indexedStyles.length] : {};
    };

    if (displayedData && displayedData.length) {
      displayedData = displayedData.map((entry: any, index: number) => ({
        payload: entry,
        ...presentationProps,
        ...styleForEntry(entry, cells?.[index]?.props, index),
        ...entry,
        ...(cells && cells[index] && cells[index].props),
      }));
    } else if (cells && cells.length) {
      displayedData = cells.map((cell: ReactElement<CellProps>, index: number) => ({
        ...presentationProps,
        ...styleForEntry(undefined, cell.props, index),
        ...cell.props,
      }));
    } else {
      return [];
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
      graphicalItemId,
    });
  },
);

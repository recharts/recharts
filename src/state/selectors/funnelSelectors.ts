import { createSelector } from 'reselect';
import { ReactElement } from 'react';
import { computeFunnelTrapezoids, FunnelTrapezoidItem, getFunnelEntryColor } from '../../cartesian/Funnel';
import { LegendPayload } from '../../component/DefaultLegendContent';
import { getTooltipNameProp } from '../../util/ChartUtils';
import { LegendType, ChartOffsetInternal, DataKey, TooltipType } from '../../util/types';
import { ChartData } from '../chartDataSlice';
import { RechartsRootState } from '../store';
import { selectChartOffsetInternal } from './selectChartOffsetInternal';
import { selectChartDataAndAlwaysIgnoreIndexes } from './dataSelectors';
import { CellProps } from '../..';
import { GraphicalItemId } from '../graphicalItemsSlice';
import { hasOwnColors, UnthemedColors } from '../../theme/dataEntryStyles';

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
   * Explicit `fill` and `stroke` props without theme contributions. Items that define their own colors
   * (in data or in Cell) get these over `indexedStyles`, so they drop the theme colors and keep the other theme styles.
   * Undefined when there is no active theme.
   */
  unthemedColors?: UnthemedColors;
  legendType?: LegendType;
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
      unthemedColors,
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
      const themeStyles =
        indexedStyles != null && indexedStyles.length > 0 ? indexedStyles[index % indexedStyles.length] : {};
      if (unthemedColors != null && (hasOwnColors(entry) || hasOwnColors(cellProps))) {
        return { ...themeStyles, ...unthemedColors };
      }
      return themeStyles;
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

export const selectFunnelLegend: (
  state: RechartsRootState,
  funnelSettings: ResolvedFunnelSettings,
) => ReadonlyArray<LegendPayload> | undefined = createSelector(
  [selectFunnelTrapezoids, pickFunnelSettings],
  (
    trapezoids: ReadonlyArray<FunnelTrapezoidItem>,
    { dataKey, legendType }: ResolvedFunnelSettings,
  ): ReadonlyArray<LegendPayload> | undefined => {
    if (trapezoids == null || trapezoids.length === 0) {
      return undefined;
    }
    return trapezoids.map((item): LegendPayload => {
      const rawPayload =
        item.payload != null && typeof item.payload === 'object' && 'payload' in item.payload
          ? item.payload.payload
          : item.payload;
      return {
        value: getTooltipNameProp(item.name, dataKey),
        dataKey,
        color: getFunnelEntryColor(item),
        payload: rawPayload,
        type: legendType,
      };
    });
  },
);

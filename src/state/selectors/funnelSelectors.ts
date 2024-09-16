import { createSelector } from '@reduxjs/toolkit';
import { computeFunnelTrapezoids, FunnelTrapezoidItem } from '../../cartesian/Funnel';
import { ChartData } from '../chartDataSlice';
import { RechartsRootState } from '../store';
import { selectChartOffset } from './selectChartOffset';
import { selectChartDataWithIndexes } from './dataSelectors';
import { DataKey, TooltipType } from '../../util/types';

type FunnelComposedData = {
  trapezoids: ReadonlyArray<FunnelTrapezoidItem>;
  data: any[];
};

type ResolvedFunnelSettings = {
  dataKey: DataKey<any>;
  data: any[];
  nameKey: DataKey<any>;
  tooltipType?: TooltipType;
  lastShapeType?: 'triangle' | 'rectangle';
  reversed?: boolean;
  customWidth?: string | number;
};

const pickFunnelSettings = (_state: RechartsRootState, funnelSettings: ResolvedFunnelSettings) => funnelSettings;

export const selectFunnelTrapezoids: (
  state: RechartsRootState,
  { dataKey, nameKey, tooltipType, lastShapeType, reversed, customWidth }: ResolvedFunnelSettings,
) => FunnelComposedData = createSelector(
  [selectChartOffset, pickFunnelSettings, selectChartDataWithIndexes],
  (offset, { data, dataKey, nameKey, tooltipType, lastShapeType, reversed, customWidth }, { chartData }) => {
    let displayedData: ChartData | undefined;
    if (data?.length > 0) {
      displayedData = data;
    } else if (chartData?.length > 0) {
      displayedData = chartData;
    }

    if (displayedData == null) {
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

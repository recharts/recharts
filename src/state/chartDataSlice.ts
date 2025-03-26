import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BrushStartEndIndex } from '../context/brushUpdateContext';

/**
 * This is the data that's coming through main chart `data` prop
 * Recharts is very flexible in what it accepts so the type is very flexible too.
 * This will typically be an object, and various components will provide various `dataKey`
 * that dictates how to pull data from that object.
 *
 * TL;DR: before dataKey
 */
export type ChartData = unknown[];

/**
 * So this is the same unknown type as ChartData but this is after the dataKey has been applied.
 * We still don't know what the type is - that depends on what exactly it was before the dataKey application,
 * and the dataKey can return whatever anyway - but let's keep it separate as a form of documentation.
 *
 * TL;DR: ChartData after dataKey.
 */
export type AppliedChartData = ReadonlyArray<{ value: unknown }>;

export type ChartDataState = {
  chartData: ChartData | undefined;
  /**
   * store a copy of chart data after it has been processed by each chart's specific
   * compute functions. TODO: add other charts besides Sankey
   */
  computedData: unknown | undefined;
  /**
   * Using Brush, users can choose where they want to zoom in.
   * This is zero-based index of the starting data point.
   */
  dataStartIndex: number;
  /**
   * Using Brush, users can choose where they want to zoom in.
   * This is zero-based index of the last data point.
   */
  dataEndIndex: number;
};

export const initialChartDataState: ChartDataState = {
  chartData: undefined,
  computedData: undefined,
  dataStartIndex: 0,
  dataEndIndex: 0,
};

type BrushStartEndIndexActionPayload = Partial<BrushStartEndIndex>;

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState: initialChartDataState,
  reducers: {
    setChartData(state, action: PayloadAction<ChartData | undefined>) {
      state.chartData = action.payload;
      if (action.payload == null) {
        state.dataStartIndex = 0;
        state.dataEndIndex = 0;
        return;
      }
      if (action.payload.length > 0 && state.dataEndIndex !== action.payload.length - 1) {
        state.dataEndIndex = action.payload.length - 1;
      }
    },
    setComputedData(state, action: PayloadAction<unknown | undefined>) {
      state.computedData = action.payload;
    },
    setDataStartEndIndexes(state, action: PayloadAction<BrushStartEndIndexActionPayload>) {
      const { startIndex, endIndex } = action.payload;
      if (startIndex != null) {
        state.dataStartIndex = startIndex;
      }
      if (endIndex != null) {
        state.dataEndIndex = endIndex;
      }
    },
  },
});

export const { setChartData, setDataStartEndIndexes, setComputedData } = chartDataSlice.actions;

export const chartDataReducer = chartDataSlice.reducer;

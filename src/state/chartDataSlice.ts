import { PayloadAction, createSlice } from '@reduxjs/toolkit';

/**
 * This is the data that's coming through main chart `data` prop
 * Recharts is very flexible in what it accepts so the type is very flexible too.
 */
export type ChartData = unknown[];

export type ChartDataState = {
  chartData: ChartData | undefined;
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

const initialState: ChartDataState = {
  chartData: undefined,
  dataStartIndex: 0,
  dataEndIndex: 0,
};

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setChartData(state, action: PayloadAction<ChartData>) {
      state.chartData = action.payload;
    },
    setDataStartIndex(state, action: PayloadAction<number>) {
      state.dataStartIndex = action.payload;
    },
    setDataEndIndex(state, action: PayloadAction<number>) {
      state.dataEndIndex = action.payload;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { setChartData, setDataStartIndex, setDataEndIndex } = chartDataSlice.actions;

export const chartDataReducer = chartDataSlice.reducer;

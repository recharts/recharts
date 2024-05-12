import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BrushStartEndIndex } from '../context/brushUpdateContext';

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

type BrushStartEndIndexActionPayload = Partial<BrushStartEndIndex>;

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setChartData(state, action: PayloadAction<ChartData | undefined>) {
      state.chartData = action.payload;
      if (state.dataEndIndex <= 0 && action.payload != null) {
        state.dataEndIndex = action.payload.length - 1;
      }
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
  /* eslint-enable no-param-reassign */
});

export const { setChartData, setDataStartEndIndexes } = chartDataSlice.actions;

export const chartDataReducer = chartDataSlice.reducer;

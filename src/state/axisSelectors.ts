import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from './store';
import { AxisType, LayoutType } from '../util/types';
import { ParsedScaleReturn, parseScale } from '../util/ChartUtils';
import { AxisSettings } from './axisMapSlice';
import { selectChartLayout } from '../context/chartLayoutContext';
import { selectChartName } from './selectors';

export const selectAxisSettings = (state: RechartsRootState, axisType: AxisType, axisId: string): AxisSettings =>
  state.axisMap[axisType][axisId];

export const selectHasBar = (state: RechartsRootState): boolean => state.graphicalItems.countOfBars > 0;

const unknownScale: ParsedScaleReturn = {
  scale: undefined,
  realScaleType: undefined,
};

export const selectAxisScale: (state: RechartsRootState, axisType: AxisType, axisId: string) => ParsedScaleReturn =
  createSelector(
    selectAxisSettings,
    selectChartLayout,
    selectHasBar,
    selectChartName,
    (_, axisType) => axisType,
    (axisConfig: AxisSettings, chartLayout: LayoutType, hasBar: boolean, chartName: string, axisType: AxisType) => {
      if (axisConfig == null) {
        return unknownScale;
      }
      return parseScale(
        {
          scale: axisConfig.scale,
          type: axisConfig.type,
          layout: chartLayout,
          axisType,
        },
        chartName,
        hasBar,
      );
    },
  );

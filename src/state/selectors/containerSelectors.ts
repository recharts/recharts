import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { ChartPointer, MousePointer } from '../../chart/generateCategoricalChart';
import { Margin } from '../../util/types';

export const selectChartWidth = (state: RechartsRootState): number => state.layout.width;

export const selectChartHeight = (state: RechartsRootState): number => state.layout.height;

export const selectChartCoordinates: (state: RechartsRootState, event: MousePointer) => ChartPointer | undefined =
  createSelector(
    (_state: RechartsRootState, event: MousePointer): MousePointer => event,
    (event: MousePointer): ChartPointer | undefined => {
      return {
        chartX: Math.round(event.pageX - event.currentTarget.offsetLeft),
        chartY: Math.round(event.pageY - event.currentTarget.offsetTop),
      };
    },
  );

export const selectContainerScale: (state: RechartsRootState) => number = state => state.layout.scale;

export const selectMargin = (state: RechartsRootState): Margin | undefined => state.layout.margin;

import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { ChartPointer, MousePointer } from '../../chart/generateCategoricalChart';
import { Margin } from '../../util/types';
import { ElementOffset } from '../../util/useElementOffset';

export const selectContainerOffset: (state: RechartsRootState) => ElementOffset | undefined = (
  state: RechartsRootState,
): ElementOffset => state.layout.offset;

export const selectChartWidth = (state: RechartsRootState): number => state.layout.width;

export const selectChartHeight = (state: RechartsRootState): number => state.layout.height;

export const selectChartCoordinates: (state: RechartsRootState, event: MousePointer) => ChartPointer | undefined =
  createSelector(
    selectContainerOffset,
    (_state: RechartsRootState, event: MousePointer): MousePointer => event,
    (containerOffset: ElementOffset | undefined, event: MousePointer): ChartPointer | undefined => {
      if (!containerOffset) {
        return undefined;
      }
      return {
        chartX: Math.round(event.pageX - containerOffset.left),
        chartY: Math.round(event.pageY - containerOffset.top),
      };
    },
  );

export const selectContainerScale: (state: RechartsRootState) => number = state => state.layout.scale;

export const selectMargin = (state: RechartsRootState): Margin | undefined => state.layout.margin;

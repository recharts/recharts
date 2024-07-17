import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { ContainerOffset, getOffset } from '../../util/DOMUtils';
import { RechartsHTMLContainer } from '../layoutSlice';
import { ChartPointer, MousePointer } from '../../chart/generateCategoricalChart';

export const selectRootContainer = (state: RechartsRootState): RechartsHTMLContainer | undefined =>
  state.layout.container;

export const selectRootContainerDomRect: (state: RechartsRootState) => DOMRect | undefined = (
  state: RechartsRootState,
) => selectRootContainer(state)?.getBoundingClientRect();

export const selectContainerOffset: (state: RechartsRootState) => ContainerOffset | undefined = createSelector(
  selectRootContainerDomRect,
  (rect: DOMRect | undefined): ContainerOffset | undefined => rect && getOffset(rect),
);

export const selectChartWidth = (state: RechartsRootState): number => state.layout.width;

export const selectChartHeight = (state: RechartsRootState): number => state.layout.height;

export const selectChartCoordinates: (state: RechartsRootState, event: MousePointer) => ChartPointer | undefined =
  createSelector(
    selectContainerOffset,
    (_, event) => event,
    (containerOffset: ContainerOffset | undefined, event: MousePointer): ChartPointer | undefined => {
      if (!containerOffset) {
        return undefined;
      }
      return {
        chartX: Math.round(event.pageX - containerOffset.left),
        chartY: Math.round(event.pageY - containerOffset.top),
      };
    },
  );

export const selectContainerScale: (state: RechartsRootState) => number | undefined = createSelector(
  selectRootContainer,
  selectRootContainerDomRect,
  (container: RechartsHTMLContainer | undefined, rect: DOMRect | undefined): number =>
    rect?.width / container?.offsetWidth || 1,
);

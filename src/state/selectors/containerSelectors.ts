import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { RechartsDOMRect, RechartsHTMLContainer } from '../layoutSlice';
import { ChartPointer, MousePointer } from '../../chart/generateCategoricalChart';
import { Margin } from '../../util/types';
import { ElementOffset } from '../../util/useElementOffset';

const selectRootContainer = (state: RechartsRootState): RechartsHTMLContainer | undefined => state.layout.container;

/**
 * This selector is not stable, and it is important that it is not stable
 * - because browser will return different instances of getBoundingClientRect() even if the element is the same.
 *
 * This results in Reselect showing this error:
 * An input selector returned a different result when passed same arguments.
 * This means your output selector will likely run more frequently than intended
 *
 * Which is correct and unfortunate but good enough for now.
 * The fix is to listen for resize events in the container element,
 * and store only the resulting DOMRect instead of the whole container in Redux store.
 *
 * @param state RechartsRootState
 * @return DOMRect
 */
export const selectRootContainerDomRect: (state: RechartsRootState) => RechartsDOMRect | undefined = (
  state: RechartsRootState,
) => selectRootContainer(state)?.getBoundingClientRect();

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

// export const selectContainerScale: (state: RechartsRootState) => number | undefined = createSelector(
//   selectContainerOffset,
//   selectRootContainerDomRect,
//   (offset: ElementOffset | undefined, rect: DOMRect | undefined): number => {
//     if (!rect?.width || !offset?.width) {
//       return 1;
//     }
//     return rect.width / offset.width;
//   },
// );

export const selectMargin = (state: RechartsRootState): Margin | undefined => state.layout.margin;

import { RechartsRootState } from '../store';
import { Margin } from '../../util/types';

export const selectChartWidth = (state: RechartsRootState): number => state.layout.width;

export const selectChartHeight = (state: RechartsRootState): number => state.layout.height;

export const selectContainerScale: (state: RechartsRootState) => number = state => state.layout.scale;

export const selectMargin = (state: RechartsRootState): Margin => state.layout.margin;

const CHART_TITLE_HEIGHT = 24;
export const selectVisibleTitle = (state: RechartsRootState) => state.layout.visibleTitle;
export const selectTitleHeight = (state: RechartsRootState) => (selectVisibleTitle(state) ? CHART_TITLE_HEIGHT : 0);

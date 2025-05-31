import { useEffect } from 'react';
import { CartesianViewBoxRequired, ChartOffsetRequired, LayoutType, Margin, Size } from '../util/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { RechartsRootState } from '../state/store';
import { setChartSize, setMargin } from '../state/layoutSlice';
import { selectChartOffset, selectChartViewBox } from '../state/selectors/selectChartOffset';
import { selectChartHeight, selectChartWidth } from '../state/selectors/containerSelectors';
import { useIsPanorama } from './PanoramaContext';
import { selectBrushDimensions, selectBrushSettings } from '../state/selectors/brushSelectors';

export const useViewBox = (): CartesianViewBoxRequired | undefined => {
  const panorama = useIsPanorama();
  const rootViewBox = useAppSelector(selectChartViewBox);
  const brushDimensions = useAppSelector(selectBrushDimensions);
  const brushPadding = useAppSelector(selectBrushSettings)?.padding;
  if (!panorama || !brushDimensions || !brushPadding) {
    return rootViewBox;
  }
  return {
    width: brushDimensions.width - brushPadding.left - brushPadding.right,
    height: brushDimensions.height - brushPadding.top - brushPadding.bottom,
    x: brushPadding.left,
    y: brushPadding.top,
  };
};

const manyComponentsThrowErrorsIfOffsetIsUndefined: ChartOffsetRequired = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0,
};
export const useOffset = (): ChartOffsetRequired => {
  return useAppSelector(selectChartOffset) ?? manyComponentsThrowErrorsIfOffsetIsUndefined;
};

/**
 * Returns the width of the chart in pixels.
 *
 * If you are using chart with hardcoded `width` prop, then the width returned will be the same
 * as the `width` prop on the main chart element.
 *
 * If you are using a chart with a `ResponsiveContainer`, the width will be the size of the chart
 * as the ResponsiveContainer has decided it would be.
 *
 * If the chart has any axes or legend, the `width` will be the size of the chart
 * including the axes and legend. Meaning: adding axes and legend will not change the width.
 *
 * The dimensions do not scale, meaning as user zoom in and out, the width number will not change
 * as the chart gets visually larger or smaller.
 *
 * Returns `undefined` if used outside a chart context.
 *
 * @returns {number | undefined} The width of the chart in pixels, or `undefined` if not in a chart context.
 */
export const useChartWidth = (): number | undefined => {
  return useAppSelector(selectChartWidth);
};

/**
 * Returns the height of the chart in pixels.
 *
 * If you are using chart with hardcoded `height` props, then the height returned will be the same
 * as the `height` prop on the main chart element.
 *
 * If you are using a chart with a `ResponsiveContainer`, the height will be the size of the chart
 * as the ResponsiveContainer has decided it would be.
 *
 * If the chart has any axes or legend, the `height` will be the size of the chart
 * including the axes and legend. Meaning: adding axes and legend will not change the height.
 *
 * The dimensions do not scale, meaning as user zoom in and out, the height number will not change
 * as the chart gets visually larger or smaller.
 *
 * Returns `undefined` if used outside a chart context.
 *
 * @returns {number | undefined} The height of the chart in pixels, or `undefined` if not in a chart context.
 */
export const useChartHeight = (): number | undefined => {
  return useAppSelector(selectChartHeight);
};

const manyComponentsThrowErrorsIfMarginIsUndefined: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
export const useMargin = (): Margin => {
  return useAppSelector(state => state.layout.margin) ?? manyComponentsThrowErrorsIfMarginIsUndefined;
};

export const selectChartLayout = (state: RechartsRootState): LayoutType => state.layout.layoutType;

export const useChartLayout = () => useAppSelector(selectChartLayout);

export const ReportChartSize = (props: Size): null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setChartSize(props));
  }, [dispatch, props]);

  return null;
};

export const ReportChartMargin = ({ margin }: { margin: Margin }): null => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setMargin(margin));
  }, [dispatch, margin]);
  return null;
};

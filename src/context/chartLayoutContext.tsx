import { useEffect } from 'react';
import {
  CartesianViewBoxRequired,
  ChartOffsetInternal,
  LayoutType,
  Margin,
  Percent,
  TrapezoidViewBox,
} from '../util/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { RechartsRootState } from '../state/store';
import { setChartSize, setMargin } from '../state/layoutSlice';
import { selectChartOffsetInternal, selectChartViewBox } from '../state/selectors/selectChartOffsetInternal';
import { selectChartHeight, selectChartWidth } from '../state/selectors/containerSelectors';
import { useIsPanorama } from './PanoramaContext';
import { selectBrushDimensions, selectBrushSettings } from '../state/selectors/brushSelectors';
import { useResponsiveContainerContext } from '../component/ResponsiveContainer';
import { isPositiveNumber } from '../util/isWellBehavedNumber';

export function cartesianViewBoxToTrapezoid(
  box: CartesianViewBoxRequired | TrapezoidViewBox | undefined,
): TrapezoidViewBox | undefined {
  if (!box) {
    return undefined;
  }
  return {
    x: box.x,
    y: box.y,
    upperWidth: 'upperWidth' in box ? box.upperWidth : box.width,
    lowerWidth: 'lowerWidth' in box ? box.lowerWidth : box.width,
    width: box.width,
    height: box.height,
  };
}

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

const manyComponentsThrowErrorsIfOffsetIsUndefined: ChartOffsetInternal = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0,
};
/**
 * For internal use only. If you want this information, `import { useOffset } from 'recharts'` instead.
 *
 * Returns the offset of the chart in pixels.
 *
 * @returns {ChartOffsetInternal} The offset of the chart in pixels, or a default value if not in a chart context.
 */
export const useOffsetInternal = (): ChartOffsetInternal => {
  return useAppSelector(selectChartOffsetInternal) ?? manyComponentsThrowErrorsIfOffsetIsUndefined;
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

/**
 * Margin is the empty space around the chart. Excludes axes and legend and brushes and the like.
 * This is declared by the user in the chart props.
 * If you are interested in the space occupied by axes, legend, or brushes,
 * use `useOffset` instead.
 *
 * Returns `undefined` if used outside a chart context.
 *
 * @returns {Margin | undefined} The margin of the chart in pixels, or `undefined` if not in a chart context.
 */
export const useMargin = (): Margin | undefined => {
  return useAppSelector(state => state.layout.margin);
};

export const selectChartLayout = (state: RechartsRootState): LayoutType => state.layout.layoutType;

export const useChartLayout = () => useAppSelector(selectChartLayout);

/**
 * Returns true if the component is rendered inside a chart context.
 * Some components may be used both inside and outside of charts,
 * and this hook allows them to determine if they are in a chart context or not.
 *
 * Other selectors may return undefined when used outside a chart context,
 * or undefined when inside a chart, but without relevant data.
 * This hook provides a more explicit way to check for chart context.
 *
 * @returns {boolean} True if in chart context, false otherwise.
 */
export const useIsInChartContext = (): boolean => {
  /*
   * All charts provide a layout type in the chart context.
   * If we have a layout type, we are in a chart context.
   */
  const layout = useChartLayout();
  return layout !== undefined;
};

export const ReportChartSize = (props: {
  width: number | Percent | undefined;
  height: number | Percent | undefined;
}): null => {
  const dispatch = useAppDispatch();

  /*
   * Skip dispatching properties in panorama chart for two reasons:
   * 1. The root chart should be deciding on these properties, and
   * 2. Brush reads these properties from redux store, and so they must remain stable
   *      to avoid circular dependency and infinite re-rendering.
   */
  const isPanorama = useIsPanorama();

  const { width: widthFromProps, height: heightFromProps } = props;
  const responsiveContainerCalculations = useResponsiveContainerContext();

  let width = widthFromProps;
  let height = heightFromProps;

  if (responsiveContainerCalculations) {
    /*
     * In case we receive width and height from ResponsiveContainer,
     * we will always prefer those.
     * Only in case ResponsiveContainer does not provide width or height,
     * we will fall back to the explicitly provided width and height.
     *
     * This to me feels backwards - we should allow override by the more specific props on individual charts, right?
     * But this is 3.x behaviour, so let's keep it for backwards compatibility.
     *
     * We can change this in 4.x if we want to.
     */
    width = responsiveContainerCalculations.width > 0 ? responsiveContainerCalculations.width : widthFromProps;
    height = responsiveContainerCalculations.height > 0 ? responsiveContainerCalculations.height : heightFromProps;
  }

  useEffect(() => {
    if (!isPanorama && isPositiveNumber(width) && isPositiveNumber(height)) {
      dispatch(setChartSize({ width, height }));
    }
  }, [dispatch, isPanorama, width, height]);

  return null;
};

export const ReportChartMargin = ({ margin }: { margin: Partial<Margin> }): null => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setMargin(margin));
  }, [dispatch, margin]);
  return null;
};

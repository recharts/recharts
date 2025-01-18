import { LayoutType, Margin } from '../util/types';
import { useIsPanorama } from '../context/PanoramaContext';
import { setChartSize, setLayout, setMargin } from './layoutSlice';
import { useAppDispatch } from './hooks';

/**
 * "Main" props are props that are only accepted on the main chart,
 * as opposed to the small panorama chart inside a Brush.
 */
type MainChartProps = {
  width: number;
  height: number;
  layout: LayoutType;
  margin: Margin;
};

export function ReportMainChartProps({ layout, width, height, margin }: MainChartProps): null {
  const dispatch = useAppDispatch();

  /*
   * Skip dispatching properties in panorama chart for two reasons:
   * 1. The root chart should be deciding on these properties, and
   * 2. Brush reads these properties from redux store, and so they must remain stable
   *      to avoid circular dependency and infinite re-rendering.
   */
  const isPanorama = useIsPanorama();
  if (!isPanorama) {
    dispatch(setLayout(layout));
    dispatch(setChartSize({ width, height }));
    dispatch(setMargin(margin));
  }
  return null;
}

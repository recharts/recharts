import { Legend, Props as LegendProps } from '../component/Legend';

/**
 * @deprecated we are replacing this function with Context-based legend instead. See useLegendPayloadDispatch and useLegendPayload
 * @param children do not use
 * @param legendWidth do not use
 * @returns mix of everything, do not use
 */
export const getLegendProps = ({
  legendItem,
  legendWidth,
}: {
  legendItem: { props: LegendProps };
  legendWidth: number;
}): LegendProps => {
  return {
    ...legendItem.props,
    ...Legend.getWidthOrHeight(legendItem.props.layout, legendItem.props.height, legendItem.props.width, legendWidth),
  };
};

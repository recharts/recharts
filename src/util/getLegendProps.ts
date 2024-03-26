import { ReactElement, ReactNode } from 'react';
import { Legend, Props as LegendProps } from '../component/Legend';
import { findChildByType } from './ReactUtils';

/**
 * @deprecated we are replacing this function with Context-based legend instead. See useLegendPayloadDispatch and useLegendPayload
 * @param children do not use
 * @param legendWidth do not use
 * @returns mix of everything, do not use
 */
export const getLegendProps = ({
  children,
  legendWidth,
}: {
  children: ReactNode[];
  legendWidth: number;
}): null | (LegendProps & { item: ReactElement }) => {
  const legendItem = findChildByType(children, Legend);
  if (!legendItem) {
    return null;
  }
  return {
    ...legendItem.props,
    ...Legend.getWidthOrHeight(legendItem, legendWidth),
    item: legendItem,
  };
};

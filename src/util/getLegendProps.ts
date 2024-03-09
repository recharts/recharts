import { ReactElement, ReactNode } from 'react';
import { Legend, Props as LegendProps } from '../component/Legend';
import { findChildByType } from './ReactUtils';
import { DataKey, LegendType } from './types';

export interface LegendPropsGraphicalItemInput {
  props: {
    sectors?: ReadonlyArray<any>;
    data?: ReadonlyArray<any>;
  };
  childIndex: number;
  item: ReactElement<{ legendType?: LegendType; hide: boolean; name?: string; dataKey: DataKey<any> }>;
}

/**
 * @deprecated we are replacing this function with Context-based legend instead. See useLegendPayloadDispatch and useLegendPayload
 * @param children do not use
 * @param formattedGraphicalItems do not use
 * @param legendWidth do not use
 * @param legendContent do not use
 * @returns mix of everything, do not use
 */
export const getLegendProps = ({
  children,
  formattedGraphicalItems,
  legendWidth,
  legendContent,
}: {
  children: ReactNode[];
  formattedGraphicalItems?: Array<LegendPropsGraphicalItemInput>;
  legendWidth: number;
  legendContent?: 'children';
}): null | (LegendProps & { item: ReactElement }) => {
  const legendItem = findChildByType(children, Legend);
  if (!legendItem) {
    return null;
  }
  return {
    ...legendItem.props,
    ...Legend.getWithHeight(legendItem, legendWidth),
    item: legendItem,
  };
};

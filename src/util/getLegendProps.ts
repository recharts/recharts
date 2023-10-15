import { ReactNode, ReactElement } from 'react';
import { Legend, Props as LegendProps } from '../component/Legend';
import { FormattedGraphicalItem, getMainColorOfGraphicItem } from './ChartUtils';
import { findChildByType } from './ReactUtils';
import { Payload as LegendPayload } from '../component/DefaultLegendContent';

interface SectorOrDataEntry {
  name: any;
  fill: any;
}

export const getLegendProps = ({
  children,
  formattedGraphicalItems,
  legendWidth,
  legendContent,
}: {
  children: ReactNode[];
  formattedGraphicalItems?: Array<FormattedGraphicalItem>;
  legendWidth: number;
  legendContent?: 'children';
}): null | (LegendProps & { item: ReactElement }) => {
  const legendItem = findChildByType(children, Legend);
  if (!legendItem) {
    return null;
  }

  let legendData: LegendPayload[];
  if (legendItem.props && legendItem.props.payload) {
    legendData = legendItem.props && legendItem.props.payload;
  } else if (legendContent === 'children') {
    legendData = (formattedGraphicalItems || []).reduce((result, { item, props }) => {
      const data: ReadonlyArray<SectorOrDataEntry> = props.sectors || props.data || [];

      return result.concat(
        data.map((entry: SectorOrDataEntry) => ({
          type: legendItem.props.iconType || item.props.legendType,
          value: entry.name,
          color: entry.fill,
          payload: entry,
        })),
      );
    }, []);
  } else {
    legendData = (formattedGraphicalItems || []).map(({ item }): LegendPayload => {
      const { dataKey, name, legendType, hide } = item.props;

      return {
        inactive: hide,
        dataKey,
        type: legendItem.props.iconType || legendType || 'square',
        color: getMainColorOfGraphicItem(item),
        value: name || dataKey,
        // @ts-expect-error property strokeDasharray is required in Payload but optional in props
        payload: item.props,
      };
    });
  }

  return {
    ...legendItem.props,
    ...Legend.getWithHeight(legendItem, legendWidth),
    payload: legendData,
    item: legendItem,
  };
};

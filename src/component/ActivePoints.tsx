import React, { cloneElement, isValidElement } from 'react';
import isFunction from 'lodash/isFunction';
import { ActiveDotType, adaptEventHandlers, DataKey } from '../util/types';
import { getMainColorOfGraphicItem } from '../util/ChartUtils';
import { filterProps } from '../util/ReactUtils';
import { Dot } from '../shape/Dot';
import { Layer } from '../container/Layer';

const renderActiveDot = (option: any, props: any): React.ReactElement => {
  let dot;

  if (isValidElement(option)) {
    dot = cloneElement(option, props);
  } else if (isFunction(option)) {
    dot = option(props);
  } else {
    dot = <Dot {...props} />;
  }

  return (
    <Layer className="recharts-active-dot" key={props.key}>
      {dot}
    </Layer>
  );
};

export const renderActivePoints = ({
  item,
  activePoint,
  basePoint,
  childIndex,
  isRange,
}: {
  // The graphical item, for example Area or Bar.
  item: {
    props: { key: string };
    item: {
      type: { displayName: string };
      props: { hide: boolean; activeDot: ActiveDotType; dataKey: DataKey<any>; stroke: string; fill: string };
    };
  };
  // found in points array
  activePoint: any;

  basePoint: any;
  childIndex: number;
  isRange: boolean;
}) => {
  const { activeDot, dataKey } = item.item.props;
  const result = [];
  // item.props is whatever getComposedData returns
  const { key } = item.props;
  // item.item.props are the original props on the DOM element
  const dotProps = {
    index: childIndex,
    dataKey,
    cx: activePoint.x,
    cy: activePoint.y,
    r: 4,
    fill: getMainColorOfGraphicItem(item.item),
    strokeWidth: 2,
    stroke: '#fff',
    payload: activePoint.payload,
    value: activePoint.value,
    key: `${key}-activePoint-${childIndex}`,
    ...filterProps(activeDot, false),
    ...adaptEventHandlers(activeDot),
  };

  result.push(renderActiveDot(activeDot, dotProps));

  if (basePoint) {
    result.push(
      renderActiveDot(activeDot, {
        ...dotProps,
        cx: basePoint.x,
        cy: basePoint.y,
        key: `${key}-basePoint-${childIndex}`,
      }),
    );
  } else if (isRange) {
    result.push(null);
  }

  return result;
};

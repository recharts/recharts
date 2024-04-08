import React, { cloneElement, isValidElement } from 'react';
import isFunction from 'lodash/isFunction';
import { ActiveDotType, adaptEventHandlers, DataKey } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { Dot, Props as DotProps } from '../shape/Dot';
import { Layer } from '../container/Layer';

const renderActiveDot = (option: ActiveDotType, props: DotProps): React.ReactElement => {
  let dot;

  if (isValidElement(option)) {
    // @ts-expect-error element cloning does not have types
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

export interface PointType {
  x: number;
  y: number;
  value: any;
  payload: any;
}

export const renderActivePoints = ({
  activePoint,
  basePoint,
  childIndex,
  mainColor,
  activeDot,
  dataKey,
  keyPrefix,
}: {
  // found in points array
  activePoint: PointType;
  activeDot: ActiveDotType;
  basePoint: PointType;
  childIndex: number;
  dataKey: DataKey<any>;
  /**
   * Different graphical elements have different opinion on what is their main color.
   * Sometimes stroke, sometimes fill, sometimes combination.
   */
  mainColor: string;
  keyPrefix: string;
}) => {
  const result = [];
  const dotProps: DotProps = {
    // @ts-expect-error Dot does not expect the 'index' prop
    index: childIndex,
    dataKey,
    cx: activePoint.x,
    cy: activePoint.y,
    r: 4,
    fill: mainColor,
    strokeWidth: 2,
    stroke: '#fff',
    payload: activePoint.payload,
    value: activePoint.value,
    key: `${keyPrefix}-activePoint-${childIndex}`,
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
        key: `${keyPrefix}-basePoint-${childIndex}`,
      }),
    );
  }

  return result;
};

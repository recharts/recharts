import _ from 'lodash';
import React, { ComponentProps, isValidElement, cloneElement } from 'react';
import { Bar, BarProps } from '../cartesian/Bar';
import { Layer } from '../container/Layer';

export const ActiveBar = ({
  option,
  ...props
}: {
  option: BarProps['activeBar'];
} & ComponentProps<typeof Bar>) => {
  let bar;

  if (isValidElement(option)) {
    bar = cloneElement<BarProps['activeBar']>(option, props);
  } else if (_.isFunction(option)) {
    bar = option(props);
  } else {
    bar = Bar.renderRectangle(props.shape, props);
  }

  return (
    <Layer className="recharts-active-bar" key={props.key}>
      {bar}
    </Layer>
  );
};

import * as React from 'react';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { PolarGraphicalItemSettings } from '../state/graphicalItemsSlice';

export const PolarGraphicalItemContext = (props: PolarGraphicalItemSettings) => {
  return <SetPolarGraphicalItem {...props} />;
};

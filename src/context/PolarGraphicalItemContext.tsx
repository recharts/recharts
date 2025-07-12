import * as React from 'react';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { PolarGraphicalItemSettings } from '../state/graphicalItemsSlice';
import { useUniqueId } from '../util/useUniqueId';

export const PolarGraphicalItemContext = (props: PolarGraphicalItemSettings) => {
  const resolvedId = useUniqueId(props.type, props.id);

  return <SetPolarGraphicalItem {...props} id={resolvedId} />;
};

import React from 'react';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { ChartData } from '../state/chartDataSlice';
import { DataKey } from '../util/types';

type GraphicalItemContextProps = {
  data: ChartData;
  dataKey: DataKey<any>;
  children: React.ReactNode;
  hide: boolean;
};

export const PolarGraphicalItemContext = ({ dataKey, data, hide }: GraphicalItemContextProps) => {
  return <SetPolarGraphicalItem data={data} dataKey={dataKey} hide={hide} />;
};

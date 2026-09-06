import * as React from 'react';
import { Area, AreaChart } from '../../../src';
import { PageData } from '../../../test/_data';

export const AreaChartWithRootBaseValue = () => {
  return (
    <AreaChart data={PageData} width={800} height={500} baseValue={1300}>
      <Area dataKey="pv" />
    </AreaChart>
  );
};

export const AreaChartWithAreaBaseValue = () => {
  return (
    <AreaChart data={PageData} width={800} height={500}>
      <Area dataKey="pv" baseValue={1300} />
    </AreaChart>
  );
};

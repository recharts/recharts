import * as React from 'react';
import { Area, AreaChart, Tooltip } from '../../../src';

const data = [{ value: 1 }, { value: 2 }, { value: 3 }];

export const AreaChartWithHoverTooltip = () => (
  <AreaChart width={300} height={200} data={data}>
    <Tooltip isAnimationActive={false} />
    <Area dataKey="value" isAnimationActive={false} />
  </AreaChart>
);

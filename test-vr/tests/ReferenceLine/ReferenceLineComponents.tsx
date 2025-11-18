import * as React from 'react';
import { Line, LineChart, ReferenceLine, YAxis, IfOverflow, XAxis } from '../../../src';
import { pageData } from '../../../storybook/stories/data';

export function IfOverflowTestWithSegment(props: { ifOverflow: IfOverflow | undefined }) {
  return (
    <LineChart width={800} height={500} data={pageData}>
      <YAxis width="auto" />
      <XAxis dataKey="name" />
      <Line dataKey="pv" />
      <ReferenceLine
        segment={[
          { x: 'Page A', y: 100 },
          // this y value is out of the chart's domain
          { x: 'Page B', y: 2000 },
        ]}
        ifOverflow={props.ifOverflow}
      />
    </LineChart>
  );
}

import React from 'react';
import { ComposedChart, XAxis, Bar, ResponsiveContainer, YAxis, Line, Tooltip } from '../../../../../src';
import { pageData } from '../../../data';
import { getStoryArgsFromArgsTypesObject } from '../../../API/props/utils';
import { YAxisProps } from '../../../API/props/YAxisProps';

export default {
  component: YAxis,
  argTypes: YAxisProps,
  title: 'Examples/cartesian/YAxis/WithLeftAndRightAxes',
};

export const WithLeftAndRightAxes = {
  render: (args: Record<string, any>) => {
    return (
      <article style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%' }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{ left: 50, right: 50 }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`}
        </h4>
      </article>
    );
  },
  args: getStoryArgsFromArgsTypesObject(YAxisProps),
};

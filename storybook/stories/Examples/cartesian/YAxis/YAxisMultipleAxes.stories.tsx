import React from 'react';
import { ComposedChart, XAxis, Bar, ResponsiveContainer, YAxis, Line, Tooltip } from '../../../../../src';
import { pageData } from '../../../data';

export default {
  title: 'Examples/cartesian/YAxis/WithLeftAndRightAxes',
};

export const WithLeftAndRightAxes = {
  render: () => {
    return (
      <>
        <h4>
          {`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`}
        </h4>
        <div style={{ width: '100%' }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <XAxis dataKey="name" scale="band" />
              <YAxis yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />

              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  },
};

import React, { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from '../../../src';
import { pageData } from '../data';

export default {
  component: AreaChart,
};

export const InteractiveChart = {
  render: (_args: Record<string, any>) => {
    const [index, setIndex] = useState(0);
    return (
      <div>
        <div>
          <AreaChart
            width={500}
            height={400}
            data={pageData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            defaultActiveIndex={index}
            onMouseMove={() => {
              console.log("mouse move");
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </div>
        <div>
          <button type="button" onClick={() => setIndex(Math.max(0, index - 1))}>
            Back
          </button>
          <button type="button" onClick={() => setIndex(Math.min(pageData.length - 1, index + 1))}>
            Forward
          </button>
        </div>
      </div>
    );
  },
  args: {},
};

import React, { useState } from 'react';

import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

export const ToggleBetweenDataKeys = {
  render: (args: Args, context: RechartsStoryContext) => {
    const [dataKey, setDataKey] = useState('pv');

    return (
      <>
        <button
          type="button"
          onClick={() => {
            if (dataKey === 'pv') {
              setDataKey('uv');
            } else {
              setDataKey('pv');
            }
          }}
        >
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
            <Tooltip />
            <RechartsHookInspector
              position={context.rechartsInspectorPosition}
              setPosition={context.rechartsSetInspectorPosition}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  },
};

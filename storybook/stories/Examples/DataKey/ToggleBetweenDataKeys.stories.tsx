import React, { useState } from 'react';

import { pageData } from '../../data';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

export const Default = {
  render: () => {
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
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  },
};

export const UsingReactKey = {
  render: () => {
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
          <LineChart width={500} height={400} key={dataKey} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  },
};

export const UsingDataKey = {
  name: 'Using dataKey (Recommended)',
  render: () => {
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
          <LineChart width={500} height={400} dataKey={dataKey} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  },
};

import React from 'react';
import { Args } from '@storybook/react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../../src';
import { pageData } from '../../data';
import './style.css';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

export default {
  component: AreaChart,
};

export const MultiChartFlexbox = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <>
        <p>Resize the window to test ResponsiveContainer</p>
        <div className="flex-parent">
          <ResponsiveContainer width="100%" className="flex-child">
            <AreaChart
              data={pageData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
              <RechartsHookInspector
                position={context.rechartsInspectorPosition}
                setPosition={context.rechartsSetInspectorPosition}
              />
            </AreaChart>
          </ResponsiveContainer>
          <ResponsiveContainer className="flex-child">
            <LineChart
              data={pageData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="amt" stroke="orange" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  },
  args: {},
};

export const ResponsiveContainerWithFlexbox = {
  render: (args: Args, context: RechartsStoryContext) => {
    const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
      <div style={{ height: '100%', width: '100%', margin: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'row', height: '200px' }}>
          <div style={{ flex: 1 }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
                <RechartsHookInspector
                  position={context.rechartsInspectorPosition}
                  setPosition={context.rechartsSetInspectorPosition}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{ flex: 1 }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  },
};

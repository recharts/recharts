import React, { useState } from 'react';
import { Args } from '@storybook/react';
import { ResponsiveContainer, LineChart, Line, Legend, AreaChart, Area, YAxis, Tooltip, XAxis } from '../../../../src';
import { rechartsPackageDownloads, pageData } from '../../data';
import { LegendProps } from '../props/Legend';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: LegendProps,
  component: Legend,
};

export const API = {
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          {/* The target component */}
          <Legend {...args} />
          <Line dataKey="uv" stroke="#8884d8" name="Series 1 (UV)" />
          <Line dataKey="pv" stroke="#82ca9d" name="Series 2 (PV)" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: getStoryArgsFromArgsTypesObject(LegendProps),
};

export const LegendPortal = {
  render: (args: Args) => {
    const [, surfaceHeight] = [600, 300];
    const [legendPortal, setLegendPortal] = useState<HTMLDivElement | null>(null);

    return (
      <div style={{ display: 'flex', width: '100%', height: surfaceHeight }}>
        <div
          style={{ width: '100%', height: '100%' }}
          ref={node => {
            if (legendPortal == null && node != null) {
              setLegendPortal(node);
            }
          }}
        >
          <h2>Recharts Downloads</h2>
          We can render whatever we want render with the Legend items. This chart represents Recharts downloads from
          August 2023 to August 2024.
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer width="100%" height={surfaceHeight}>
            <AreaChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
              data={rechartsPackageDownloads}
            >
              {/* The target component */}
              {legendPortal && (
                <Legend
                  {...args}
                  wrapperStyle={{ marginTop: 20 }}
                  formatter={() => 'Recharts Downloads'}
                  portal={legendPortal}
                />
              )}

              <YAxis domain={[0, 'auto']} tickFormatter={value => value?.toLocaleString()} />
              <XAxis
                dataKey="day"
                interval="equidistantPreserveStart"
                tickFormatter={value => new Date(value).toLocaleDateString()}
              />
              <Area type="monotone" dataKey="downloads" stroke="green" fill="green" fillOpacity={0.2} />
              <Tooltip
                formatter={value => {
                  return value.toLocaleString();
                }}
                labelFormatter={value => new Date(value).toLocaleDateString()}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  },
  args: getStoryArgsFromArgsTypesObject(LegendProps),
};

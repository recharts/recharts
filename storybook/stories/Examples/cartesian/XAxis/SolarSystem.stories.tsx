import React from 'react';
import { Args } from '@storybook/react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../../src';
import { solarSystem } from '../../../data/solarSystem';
import { RechartsHookInspector, RechartsStoryContext } from '../../../../storybook-addon-recharts';

export default { Component: XAxis };

export const MassBarChart = (args: Args, context: RechartsStoryContext) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={solarSystem} width={100} height={100}>
        <XAxis dataKey="name" />
        <YAxis width={100} label={{ value: 'Mass [kg]', position: 'insideLeft', dx: 0, dy: 20, angle: -90 }} />
        <Bar dataKey="massKg" unit="kg" />
        <Tooltip />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const MassBarChartCategoricalY = (args: Args, context: RechartsStoryContext) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={solarSystem} width={100} height={100}>
        <XAxis dataKey="name" />
        <YAxis
          type="category"
          width={100}
          label={{ value: 'Mass [kg]', position: 'insideLeft', dx: 0, dy: 20, angle: -90 }}
        />
        <Bar dataKey="massKg" unit="kg" />
        <Tooltip />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const MassBarChartCustomYDomain = (args: Args, context: RechartsStoryContext) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={solarSystem} width={100} height={100}>
        <XAxis dataKey="name" />
        <YAxis
          domain={[1e23, 2e27]}
          allowDataOverflow
          width={100}
          label={{ value: 'Mass [kg]', position: 'insideLeft', dx: 0, dy: 20, angle: -90 }}
        />
        <Bar dataKey="massKg" unit="kg" />
        <Tooltip />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const MassBarChartLogScale = (args: Args, context: RechartsStoryContext) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={solarSystem} width={100} height={100}>
        <XAxis dataKey="name" />
        <YAxis
          scale="log"
          domain={[1e22, 3e30]}
          width={100}
          label={{ value: 'Mass log10[kg]', position: 'insideLeft', dx: 0, dy: 20, angle: -90 }}
        />
        <Bar dataKey="massKg" unit="kg" />
        <Tooltip />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

/* eslint-disable react/jsx-no-bind */
export const MassBarChartCustomTicks = (args: Args, context: RechartsStoryContext) => {
  function kgToYottagram(value: number): string {
    // the data is defined in kg
    const yottagram = value / 1e24;
    return `${yottagram.toFixed(2)}`;
  }
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={solarSystem} width={100} height={100}>
        <XAxis dataKey="name" />
        <YAxis
          scale="log"
          domain={[1e22, 3e30]}
          tickFormatter={kgToYottagram}
          width={100}
          label={{ value: 'Mass log10[yottagram]', position: 'insideLeft', dx: 0, dy: 60, angle: -90 }}
        />
        <Bar dataKey="massKg" name="mass" unit=" yottagram" />
        <Tooltip formatter={kgToYottagram} />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

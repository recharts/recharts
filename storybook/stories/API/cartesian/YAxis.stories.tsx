import React, { ComponentProps, useState } from 'react';
import { Args } from '@storybook/react';
import { YAxis, XAxis, Legend, ResponsiveContainer, ComposedChart, Bar } from '../../../../src';
import { EventHandlers } from '../props/EventHandlers';

const data = [
  { name: 'Page A', pv: 800, amt: 1400 },
  { name: 'Page B', pv: 967, amt: 1506 },
  { name: 'Page C', pv: 1098, amt: 989 },
  { name: 'Page D', pv: 1200, amt: 1228 },
  { name: 'Page E', pv: 1108, amt: 1100 },
  { name: 'Page F', pv: 680, amt: 1700 },
];

const GeneralProps: Args = {
  yAxisId: {
    description: 'The id of y-axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  unit: {
    description: 'The unit of data displayed in the axis.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  scale: {
    table: { type: { summary: 'ScaleType | Function' }, category: 'General' },
  },
  domain: {
    description: 'The domain of scale in this axis.',
    table: { type: { summary: 'AxisDomain' }, category: 'General' },
  },
};

const EventProps: Args = {
  onMouseDown: EventHandlers.onMouseDown,
  onMouseUp: EventHandlers.onMouseUp,
  onMouseMove: EventHandlers.onMouseMove,
  onMouseOver: EventHandlers.onMouseOver,
  onMouseOut: EventHandlers.onMouseOut,
  onMouseEnter: EventHandlers.onMouseEnter,
  onMouseLeave: EventHandlers.onMouseLeave,
};

export default {
  argTypes: {
    ...GeneralProps,
    ...EventProps,
  },
  component: YAxis,
};

export const Simple = {
  render: (args: ComponentProps<typeof YAxis> & { data: any }) => {
    const allKeys = Object.keys(args.data[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = e => {
      const key: string = e.dataKey;
      setActiveKeys(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]));
    };

    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={args.data} margin={{ top: 20, right: 80, left: 20 }}>
          <XAxis dataKey="name" scale="band" />
          <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} includeHidden={args.includeHidden} />
          <Legend onClick={handleLegendClick} />
          <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
          <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data,
  },
  parameters: {
    controls: { include: ['data', 'includeHidden'] },
    docs: {
      description: {
        story: 'A simple Y Axis. Click on the legend items to toggle their bars on and off.',
      },
    },
  },
};

export const WithIncludeHidden = {
  render: (args: ComponentProps<typeof YAxis> & { data: any }) => {
    const allKeys = Object.keys(args.data[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = e => {
      const key: string = e.dataKey;
      setActiveKeys(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]));
    };

    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={args.data} margin={{ top: 20, right: 80, left: 20 }}>
          <XAxis dataKey="name" scale="band" />
          <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} includeHidden={args.includeHidden} />
          <Legend onClick={handleLegendClick} />
          <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
          <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data,
    includeHidden: true,
  },
  parameters: {
    controls: { include: ['data', 'includeHidden'] },
    docs: {
      description: {
        story: `A simple Y Axis. Click on the legend items to toggle their bars on and off,
                and notice how the YAxis domain stays the same, compared to the Simple story above.`,
      },
    },
  },
};

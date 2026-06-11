import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, DragToSelect } from '../../../../src';

export default {
  component: DragToSelect,
  argTypes: {
    axis: {
      control: { type: 'inline-radio' },
      options: ['x', 'y', 'xy'],
      description: 'Which dimensions this interaction can zoom and pan.',
    },
    minZoom: {
      control: { type: 'range', min: 0.5, max: 2, step: 0.1 },
      description: 'Furthest zoom-out (1 = cannot zoom out past the full data).',
    },
    maxZoom: {
      control: { type: 'range', min: 2, max: 50, step: 1 },
      description: 'Deepest zoom-in (e.g. 25 shows ~1/25th of the data).',
    },
    modifier: {
      control: { type: 'inline-radio' },
      options: ['none', 'shift'],
      description: 'Whether the drag needs Shift held, so it can coexist with PanOnDrag.',
    },
    onSelect: { description: 'Called with the selected window per axis, in [0, 1] fractions.' },
  },
};

/**
 * Drag a rectangle: the selected window is printed above the chart, the view does not change.
 */
export const API = {
  render: (args: Args) => {
    const [selection, setSelection] = React.useState<string>('drag a rectangle...');
    return (
      <div>
        <div style={{ marginBottom: 8, fontFamily: 'monospace', fontSize: 12 }}>{selection}</div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={pageData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
            <DragToSelect {...args} onSelect={sel => setSelection(JSON.stringify(sel))} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
  args: { axis: 'xy', modifier: 'none' },
};

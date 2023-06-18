import { Args } from '@storybook/react';

export const ReferenceComponentStyle: Args = {
  isFront: {
    description: `If set true, the reference component will be rendered in front of bars in BarChart, etc.`,
    table: { category: 'Style' },
  },
  ifOverflow: {
    description: `Defines how to draw the reference component if it falls partly outside the canvas. 
    If set to 'discard', the reference component will not be drawn at all. If set to 'hidden', the 
    reference component will be clipped to the canvas. If set to 'visible', the reference component 
    will be drawn completely. If set to 'extendDomain', the domain of the overflown axis will be 
    extended such that the reference component fits into the canvas.`,
    table: { type: { summary: "'discard' | 'hidden' | 'visible' | 'extendDomain'" }, category: 'Style' },
    default: 'discard',
  },
};

export const ReferenceComponentGeneralArgs: Args = {
  xAxisId: {
    description: 'The id of x-axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  yAxisId: {
    description: 'The id of y-axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
};

export const ReferenceComponentInternalArgs: Args = {
  xAxis: {
    description: 'The configuration of the corresponding x-axis, usually calculated internally.',
    table: { type: { summary: 'Object' }, category: 'Internal' },
  },
  yAxis: {
    description: 'The configuration of the corresponding y-axis, usually calculated internally.',
    table: { type: { summary: 'Object' }, category: 'Internal' },
  },
  clipPathId: {
    description: `Used as the id for the clip path which is used to clip the reference component if 
    'ifOverflow' is set to 'hidden'"`,
    table: { type: { summary: 'number | string' }, category: 'Internal' },
  },
};

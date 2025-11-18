import { StorybookArgs } from '../../../StorybookArgs';

export const ReferenceComponentStyle: StorybookArgs = {
  ifOverflow: {
    description: `Defines how to draw the reference component if it falls partly outside the canvas.
    If set to 'discard', the reference component will not be drawn at all. If set to 'hidden', the
    reference component will be clipped to the canvas. If set to 'visible', the reference component
    will be drawn completely. If set to 'extendDomain', the domain of the overflown axis will be
    extended such that the reference component fits into the canvas.`,
    table: { type: { summary: "'discard' | 'hidden' | 'visible' | 'extendDomain'" }, category: 'Style' },
    defaultValue: 'discard',
  },
};

export const ReferenceComponentGeneralArgs: StorybookArgs = {
  xAxisId: {
    description: 'The id of x-axis which is corresponding to the data.',
    defaultValue: 0,
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  yAxisId: {
    description: 'The id of y-axis which is corresponding to the data.',
    defaultValue: 0,
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
};

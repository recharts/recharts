import React from 'react';
import { Args } from '@storybook/react';
import { sizeData } from '../../data';
import { ResponsiveContainer, Treemap } from '../../../../src';

const GeneralProps: Args = {
  width: {
    description: 'The width of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  dataKey: {
    description: 'The key of a group of data which should be unique in a treemap.',
    table: {
      type: {
        summary: 'String | Number | Function',
        defaultValue: 'value',
      },
      category: 'General',
    },
  },
  aspectRatio: {
    description: "The treemap will try to keep every single rectangle's aspect ratio near the aspectRatio given.",
    table: {
      type: {
        summary: 'Number',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  isAnimationActive: {
    description: 'If set false, animation of area will be disabled.',
    table: {
      type: {
        summary: 'Boolean',
        defaultValue: true,
      },
      category: 'General',
    },
  },
  animationBegin: {
    description: 'Specifies when the animation should begin, the unit of this option is ms.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  animationDuration: {
    description: 'Specifies the duration of animation, the unit of this option is ms.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 1500,
      },
      category: 'General',
    },
  },
  animationEasing: {
    description: 'The type of easing function.',
    table: {
      type: {
        summary: "'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'",
        defaultValue: "'ease'",
      },
      category: 'General',
    },
  },
  onAnimationStart: {
    description: 'The customized event handler of animation start',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onAnimationEnd: {
    description: 'The customized event handler of animation end',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: Treemap,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Treemap data={data} dataKey="size" />
      </ResponsiveContainer>
    );
  },
  args: {
    data: sizeData,
  },
};

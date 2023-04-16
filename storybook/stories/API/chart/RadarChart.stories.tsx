import React from 'react';
import { Args } from '@storybook/react';
import { pageData } from '../../data';
import { Radar, RadarChart, ResponsiveContainer } from '../../../../src';

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
  data: {
    description: 'The source data, in which each element is an object.',
    table: {
      type: {
        summary: 'Array',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  cx: {
    description: `The x-coordinate of center. If set a percentage, the final value is obtained by 
      multiplying the percentage of width.`,
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '50%',
      },
      category: 'General',
    },
  },
  cy: {
    description: `The y-coordinate of center. If set a percentage, the final value is obtained by 
      multiplying the percentage of height.`,
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '50%',
      },
      category: 'General',
    },
  },
  startAngle: {
    description: 'The angle of first radial direction line.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 90,
      },
      category: 'General',
    },
  },
  endAngle: {
    description: `The angle of last point in the circle which should be startAngle - 360 or startAngle + 360. 
      We'll calculate the direction of chart by 'startAngle' and 'endAngle'.`,
    table: {
      type: {
        summary: 'Number',
        defaultValue: -270,
      },
      category: 'General',
    },
  },
  innerRadius: {
    description: `The inner radius of first circle grid. If set a percentage, the final value is obtained 
      by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.`,
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  outerRadius: {
    description: `The outer radius of last circle grid. If set a percentage, the final value is obtained by multiplying 
      the percentage of maxRadius which is calculated by the width, height, cx, cy.`,
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '80%',
      },
      category: 'General',
    },
  },
  margin: {
    description: 'The sizes of whitespace around the container.',
    table: {
      type: {
        summary: 'Object',
        defaultValue: { top: 0, right: 0, bottom: 0, left: 0 },
      },
      category: 'General',
    },
  },
  clockWise: {
    description: 'The direction of clockwise.',
    table: {
      type: {
        summary: 'Bool',
        defaultValue: true,
      },
      category: 'General',
    },
  },
  onMouseEnter: {
    description: "The function will be called when mouse enter the 'Radar'.",
    table: {
      type: {
        summary: 'Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  onMouseLeave: {
    description: "The function will be called when mouse leave the 'Radar'.",
    table: {
      type: {
        summary: 'Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  onClick: {
    description: "The function will be called when click the 'Radar'.",
    table: {
      type: {
        summary: 'Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: RadarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <Radar dataKey="uv" />
        </RadarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

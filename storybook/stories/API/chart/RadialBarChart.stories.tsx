import React from 'react';
import { Args } from '@storybook/react';
import { pageData } from '../../data';
import { RadialBar, RadialBarChart, ResponsiveContainer } from '../../../../src';

const GeneralProps: Args = {
  width: {
    description: 'The width of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  data: {
    table: {
      type: {
        summary: 'Array',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  margin: {
    description: 'The sizes of whitespace around the container.',
    table: {
      type: {
        summary: 'Object',
        defaultValue: { top: 5, right: 5, bottom: 5, left: 5 },
      },
      category: 'General',
    },
  },
  barCategoryGap: {
    description: 'The gap between two bar categories, which can be a percent value or a fixed value.',
    table: {
      type: {
        summary: 'Percentage| Number',
        defaultValue: '10%',
      },
      category: 'General',
    },
  },
  barGap: {
    description: 'The gap between two bars in the same category.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 4,
      },
      category: 'General',
    },
  },
  cx: {
    description: `The x-coordinate of center. If set a percentage, 
    the final value is obtained by multiplying the percentage of width.`,
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '50%',
      },
      category: 'General',
    },
  },
  cy: {
    description: `The y-coordinate of center. If set a percentage, 
    the final value is obtained by multiplying the percentage of height.`,
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '50%',
      },
      category: 'General',
    },
  },
  startAngle: {
    description: 'The start angle of all the bars.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  endAngle: {
    description: 'The end angle of all the bars.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 360,
      },
      category: 'General',
    },
  },
  innerRadius: {
    description: `The innerRadius of the radial bar which is most close to the center. If set 
      a percentage, the final value is obtained by multiplying the percentage of 
      maxRadius which is calculated by the width, height, cx, cy.`,
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '30%',
      },
      category: 'General',
    },
  },
  outerRadius: {
    description: `The outerRadius of the radial bar which is most far away from the center. 
      If set a percentage, the final value is obtained by multiplying the percentage 
      of maxRadius which is calculated by the width, height, cx, cy.`,
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '100%',
      },
      category: 'General',
    },
  },
  barSize: {
    description: `The size of each bar. If the barSize is not specified, the size of bar will 
      be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,
    table: {
      type: {
        summary: 'Number',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  onMouseEnter: {
    description: 'The function will be called when mouse enter bars.',
    table: {
      type: {
        summary: 'Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  onMouseLeave: {
    description: 'The function will be called when mouse leave bars.',
    table: {
      type: {
        summary: 'Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  onClick: {
    description: 'The function will be called when click bars.',
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
  component: RadialBarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart data={data}>
          <RadialBar dataKey="uv" />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

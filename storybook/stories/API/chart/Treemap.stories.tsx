import React from 'react';
import { sizeData, treemapData } from '../../data';
import { ResponsiveContainer, Tooltip, Treemap } from '../../../../src';
import { ChartSizeProps, data } from '../props/ChartProps';
import { animationBegin, animationDuration, animationEasing, isAnimationActive } from '../props/AnimationProps';
import { isUpdateAnimationActive } from '../props/RectangleProps';
import { onAnimationEnd, onAnimationStart, onClick, onMouseEnter, onMouseLeave } from '../props/EventHandlers';
import { dataKey } from '../props/CartesianComponentShared';
import { GeneralStyle } from '../props/Styles';

export default {
  argTypes: {
    type: {
      description:
        'Rendering mode of the Treemap. Options: "flat" (show entire treemap) or "nest" (show depth-1 nodes, allowing click-through).',
    },
    style: {
      description: 'Custom inline styles for the Treemap component. Accepts a JavaScript object with CSS properties.',
    },
    nestIndexContent: {
      description:
        'Custom content for the nest index in "nest" mode. Accepts a React element or a function that returns a React element.',
    },
    nameKey: {
      ...dataKey, // The name key is a data key.
      description: "The accessor of the treemap's rectangles' name.",
    },
    content: {
      description: "The content of the treemap's rectangles.",
      table: {
        type: {
          summary: 'ReactElement | Function',
          defaultValue: null,
        },
        category: 'General',
      },
    },
    className: {
      table: {
        category: 'Internal',
      },
    },
    fill: GeneralStyle.fill,
    stroke: GeneralStyle.stroke,
    colorPanel: {
      description: "The color panel is used to render the color of the treemap's rectangles.",
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
    animationBegin,
    ...ChartSizeProps,
    animationDuration,
    animationEasing,
    data,
    dataKey,
    isAnimationActive,
    isUpdateAnimationActive,
    onAnimationEnd,
    onAnimationStart,
    onClick,
    onMouseEnter,
    onMouseLeave,
  },
  component: Treemap,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Treemap {...args} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: sizeData,
    dataKey: 'size',
    nameKey: 'name',
    isAnimationActive: false,
  },
};

export const WithTooltip = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Treemap {...args}>
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>
    );
  },
  args: {
    data: sizeData,
    dataKey: 'size',
    nameKey: 'name',
    isAnimationActive: false,
  },
};

const colors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

export const WithCustomContent = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Treemap
          {...args}
          dataKey="size"
          stroke="#fff"
          fill="#8884d8"
          content={props => {
            const { root, depth, x, y, width, height, index, name } = props;

            return (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  style={{
                    fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : '#ffffff00',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                  }}
                />
                {depth === 1 ? (
                  <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                    {name}
                  </text>
                ) : null}
                {depth === 1 ? (
                  <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
                    {index + 1}
                  </text>
                ) : null}
              </g>
            );
          }}
        >
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>
    );
  },
  args: {
    data: treemapData,
    dataKey: 'size',
    isAnimationActive: false,
  },
};

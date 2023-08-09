import React from 'react';
import { complexNodeLinkData, nodeLinkData } from '../../data';
import { ResponsiveContainer, Sankey } from '../../../../src';
import { data, margin } from '../props/ChartProps';
import { dataKey } from '../props/CartesianComponentShared';
import { SankeyNode } from '../../../../src/util/types';

export default {
  argTypes: {
    iterations: { description: 'TODO' },
    link: { description: 'TODO' },
    linkCurvature: { description: 'TODO' },
    nameKey: { description: 'TODO' },
    node: { description: 'TODO' },
    nodePadding: { description: 'TODO' },
    nodeWidth: { description: 'TODO' },
    dataKey,
    margin,
    data,
    sort: { description: 'Whether to sort the data or not' },
  },
  component: Sankey,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: nodeLinkData,
  },
};

export const Customized = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: nodeLinkData,
    nodeWidth: 10,
    nodePadding: 60,
    height: 500,
    width: 960,
  },
};

export const CustomNodeAndLink = {
  render: (args: Record<string, any>) => {
    const colors = ['#3C898E', '#486DF0', '#6F50E5'];

    type CustomNodePayload = {
      name: string;
      sourceNodes: number[];
      sourceLinks: number[];
      targetLinks: number[];
      targetNodes: number[];
      value: number;
      depth: number;
      x: number;
      dx: number;
      y: number;
      dy: number;
    };

    const CustomNode = (
      props: SankeyNode & { width: number; height: number; payload: CustomNodePayload },
    ): React.ReactElement => {
      return (
        <rect
          x={props.x + 4}
          y={props.y - 2}
          width={props.width - 8}
          height={props.height + 4}
          fill={colors[props.payload.depth % colors.length]}
          rx={2.5}
        />
      );
    };

    type CustomLinkPayload = {
      source: CustomNodePayload;
      target: CustomNodePayload;
      value: number;
      dy: number;
      sy: number;
      ty: number;
    };

    const CustomLink = (props: {
      sourceX: number;
      targetX: number;
      sourceY: number;
      targetY: number;
      sourceControlX: number;
      targetControlX: number;
      sourceRelativeY: number;
      targetRelativeY: number;
      linkWidth: number;
      index: number;
      payload: CustomLinkPayload;
    }) => {
      return (
        <g>
          <path
            d={`
  M${props.sourceX},${props.sourceY}
  C${props.sourceControlX},${props.sourceY} ${props.targetControlX},${props.targetY} ${props.targetX},${props.targetY}`}
            fill="none"
            stroke={colors[props.payload.source.depth % colors.length]}
            strokeOpacity={0.4}
            strokeWidth={props.linkWidth}
            strokeLinecap="butt"
          />
          <foreignObject
            x={props.sourceX}
            y={props.targetY - props.linkWidth / 2}
            width={Math.max(props.targetX, props.sourceX) - Math.min(props.targetX, props.sourceX)}
            height={props.linkWidth}
            style={{ overflow: 'visible' }}
          >
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '100%',
                height: '100%',
                overflow: 'visible',
                padding: '0.5em',
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontFamily: 'sans-serif',
                  textAlign: 'center',
                  backgroundColor: '#f1f5fe80',
                  padding: '0.25em 0.5em',
                  borderRadius: 4,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {props.payload.target.name ? `${props.payload.target.name}: ` : ''}
                {props.payload.value}
                &nbsp;€
              </div>
            </div>
          </foreignObject>
        </g>
      );
    };

    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={complexNodeLinkData} node={CustomNode} link={CustomLink} {...args} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: complexNodeLinkData,
    nodeWidth: 16,
    nodePadding: 14,
    height: 500,
    width: 960,
    sort: false,
    margin: { top: 20, left: 20, right: 20, bottom: 20 },
  },
};

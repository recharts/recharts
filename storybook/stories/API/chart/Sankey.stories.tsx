import React from 'react';
import { Args } from '@storybook/react-vite';
import { complexNodeLinkData, nodeLinkData } from '../../data';
import { ResponsiveContainer, Sankey, Tooltip } from '../../../../src';
import { NodeProps } from '../../../../src/chart/Sankey';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { SankeyArgs } from '../arg-types/SankeyArgs';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: SankeyArgs,
  component: Sankey,
};

export const API = {
  name: 'Simple',
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args}>
          <Tooltip />
          <RechartsHookInspector />
        </Sankey>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: nodeLinkData,
  },
};

export const Customized = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args}>
          <RechartsHookInspector />
        </Sankey>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: nodeLinkData,
    nodeWidth: 10,
    nodePadding: 60,
    height: 500,
    width: 960,
  },
};

export const CustomNodeAndLink = {
  render: (args: Args) => {
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

    const CustomNode = (props: NodeProps): React.ReactElement => {
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
        <Sankey data={complexNodeLinkData} node={CustomNode} link={CustomLink} {...args}>
          <RechartsHookInspector />
        </Sankey>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: complexNodeLinkData,
    nodeWidth: 16,
    nodePadding: 14,
    height: 500,
    width: 960,
    sort: false,
    margin: { top: 20, left: 20, right: 20, bottom: 20 },
  },
};

import React from 'react';
import { Args } from '@storybook/react';
import { pageData } from '../../data';
import { Pie, PieChart } from '../../../../src';
import { EventHandlers } from '../props/EventHandlers';
import { AnimationProps } from '../props/AnimationProps';
import { ActiveShapeProps } from '../props/ActiveShapeProps';

const GeneralProps: Args = {
  cx: {
    description: `The x-coordinate of center. If set a percentage,
      the final value is obtained by multiplying the percentage of container width.`,
    table: {
      type: { summary: 'percentage | number', defaultValue: '50%' },
      category: 'General',
    },
  },
  cy: {
    description: `The y-coordinate of center. If set a percentage,
      the final value is obtained by multiplying the percentage of container height.`,
    table: {
      type: { summary: 'percentage | number', defaultValue: '50%' },
      category: 'General',
    },
  },
  innerRadius: {
    description: `The inner radius of all the sectors. If set a percentage, the final value is
      obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.`,
    table: {
      type: { summary: 'percentage | number', defaultValue: 0 },
      category: 'General',
    },
  },
  outerRadius: {
    description: `The outer radius of all the sectors. If set a percentage, the final value is
      obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
      If set a function, the function will be called to return customized radius.`,
    table: {
      type: { summary: 'percentage | number | Function', defaultValue: '80%' },
      category: 'General',
    },
  },
  startAngle: {
    description: 'The start angle of first sector.',
    table: {
      type: { summary: 'number', defaultValue: 0 },
      category: 'General',
    },
  },
  endAngle: {
    description: 'The end angle of last sector, which should be unequal to startAngle.',
    table: {
      type: { summary: 'number', defaultValue: 360 },
      category: 'General',
    },
  },
  minAngle: {
    description: 'The minimum angle of each nonzero data.',
    table: {
      type: { summary: 'number', defaultValue: 0 },
      category: 'General',
    },
  },
  paddingAngle: {
    description: 'The angle between two sectors.',
    table: {
      type: { summary: 'number', defaultValue: 0 },
      category: 'General',
    },
  },
  nameKey: {
    description: "The key of each sector's name.",
    table: { type: { summary: 'string', defaultValue: 'name' }, category: 'General' },
  },
  dataKey: {
    description: "The key of each sector's value.",
    table: { type: { summary: 'string | number | Function' }, category: 'General' },
  },
  legendType: {
    description: 'The type of icon in legend. If set to "none", no legend item will be rendered.',
    table: {
      type: {
        summary: `'line' | 'plainline' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square'
          | 'star' | 'triangle' | 'wye' | 'none'`,
        defaultValue: 'rect',
      },
      category: 'General',
    },
  },
  label: {
    description: `If false set, labels will not be drawn. If true set, labels will be drawn which have
      the props calculated internally. If object set, labels will be drawn which have the props
      merged by the internal calculated props and the option. If ReactElement set, the option
      can be the custom label element. If set a function, the function will be called to render
      customized label.`,
    table: {
      type: { summary: 'Boolean | Object | ReactElement | Function', defaultValue: false },
      category: 'General',
    },
  },
  labelLine: {
    description: `If false set, label lines will not be drawn. If true set, label lines will be drawn which
      have the props calculated internally. If object set, label lines will be drawn which have
      the props merged by the internal calculated props and the option. If ReactElement set,
      the option can be the custom label line element. If set a function, the function will be
      called to render customized label line.`,
    table: {
      type: { summary: 'Boolean | Object | ReactElement | Function', defaultValue: false },
      category: 'General',
    },
  },
  data: {
    description: 'The source data which each element is an object.',
    table: { type: { summary: 'Array' }, category: 'General' },
  },
  activeIndex: ActiveShapeProps.activeIndex,
  activeShape: ActiveShapeProps.activeShape,
  inactiveShape: {
    description: 'The shape of inactive sector.',
    table: { type: { summary: 'Object | ReactElement | Function' }, category: 'General' },
  },
  rootTabIndex: {
    description: 'The tabIndex of the root layer of the Pie component.',
    table: {
      type: { summary: 'number', defaultValue: 0 },
      category: 'General',
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
    ...EventHandlers,
    ...AnimationProps,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
  },
  component: Pie,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <PieChart width={300} height={300}>
        <Pie dataKey="uv" {...args} />
      </PieChart>
    );
  },
  args: {
    data: pageData,
    dataKey: 'uv',
    nameKey: 'name',
  },
};

import React from 'react';
import { Args } from '@storybook/react-vite';
import { ResponsiveContainer, Tooltip, Venn } from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';

const threeSetData = [
  { sets: ['Search'], size: 18, label: 'Search' },
  { sets: ['Checkout'], size: 16, label: 'Checkout' },
  { sets: ['Support'], size: 14, label: 'Support' },
  { sets: ['Search', 'Checkout'], size: 6, label: 'Search ∩ Checkout' },
  { sets: ['Search', 'Support'], size: 5, label: 'Search ∩ Support' },
  { sets: ['Checkout', 'Support'], size: 4, label: 'Checkout ∩ Support' },
  { sets: ['Search', 'Checkout', 'Support'], size: 2, label: 'All' },
];

const twoSetData = [
  { sets: ['Returning Users'], size: 42, label: 'Returning Users' },
  { sets: ['Paying Users'], size: 26, label: 'Paying Users' },
  { sets: ['Returning Users', 'Paying Users'], size: 18, label: 'Retained & Paying' },
];

const disjointAndSubsetData = [
  { sets: ['Core'], size: 30, label: 'Core' },
  { sets: ['Core Add-ons'], size: 10, label: 'Core Add-ons' },
  { sets: ['Seasonal'], size: 12, label: 'Seasonal' },
  // subset relationship (Core Add-ons inside Core)
  { sets: ['Core', 'Core Add-ons'], size: 10, label: 'Core + Add-ons' },
  // disjoint relationship (Seasonal separate from Core Add-ons)
  { sets: ['Core Add-ons', 'Seasonal'], size: 0, label: 'No overlap' },
  // small overlap with Core only
  { sets: ['Core', 'Seasonal'], size: 3, label: 'Core + Seasonal' },
];

const fourSetData = [
  { sets: ['A'], size: 16, label: 'A' },
  { sets: ['B'], size: 14, label: 'B' },
  { sets: ['C'], size: 13, label: 'C' },
  { sets: ['D'], size: 12, label: 'D' },
  { sets: ['A', 'B'], size: 6, label: 'A∩B' },
  { sets: ['A', 'C'], size: 5, label: 'A∩C' },
  { sets: ['A', 'D'], size: 4, label: 'A∩D' },
  { sets: ['B', 'C'], size: 3, label: 'B∩C' },
  { sets: ['B', 'D'], size: 4, label: 'B∩D' },
  { sets: ['C', 'D'], size: 3, label: 'C∩D' },
  { sets: ['A', 'B', 'C'], size: 2, label: 'A∩B∩C' },
  { sets: ['A', 'B', 'D'], size: 1, label: 'A∩B∩D' },
];

export default {
  component: Venn,
};

const renderChart = (args: Args) => (
  <ResponsiveContainer width="100%" height={380}>
    <Venn {...args} data={args.data}>
      <Tooltip />
      <RechartsHookInspector />
    </Venn>
  </ResponsiveContainer>
);

export const API = {
  name: 'Three Sets',
  render: renderChart,
  args: {
    data: threeSetData,
  },
};

export const TwoSets = {
  render: renderChart,
  args: {
    data: twoSetData,
  },
};

export const DisjointAndSubsetEuler = {
  render: renderChart,
  args: {
    data: disjointAndSubsetData,
  },
};

export const FourSetsApproximate = {
  render: renderChart,
  args: {
    data: fourSetData,
  },
  parameters: {
    docs: {
      description: {
        story:
          'For 4+ sets, area-proportional layouts are approximate and can have multiple local optima. Prefer validating the visual against your intended relationships.',
      },
    },
  },
};

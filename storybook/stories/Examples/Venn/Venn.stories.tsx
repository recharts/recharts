import React from 'react';
import { ResponsiveContainer, Tooltip, Venn } from '../../../../src';

export default {
  title: 'Examples/Venn',
};

const audienceOverlapData = [
  { sets: ['Web'], size: 120, label: 'Web' },
  { sets: ['Mobile'], size: 90, label: 'Mobile' },
  { sets: ['In-store'], size: 70, label: 'In-store' },
  { sets: ['Web', 'Mobile'], size: 38, label: 'Web + Mobile' },
  { sets: ['Web', 'In-store'], size: 25, label: 'Web + In-store' },
  { sets: ['Mobile', 'In-store'], size: 17, label: 'Mobile + In-store' },
  { sets: ['Web', 'Mobile', 'In-store'], size: 9, label: 'All channels' },
];

const retentionVsRevenueData = [
  { sets: ['30-day retained'], size: 52, label: '30-day retained' },
  { sets: ['High LTV'], size: 28, label: 'High LTV' },
  { sets: ['30-day retained', 'High LTV'], size: 19, label: 'Retained + High LTV' },
];

const productPackagingData = [
  { sets: ['Starter'], size: 45, label: 'Starter' },
  { sets: ['Pro'], size: 24, label: 'Pro' },
  { sets: ['Enterprise'], size: 14, label: 'Enterprise' },
  { sets: ['Starter', 'Pro'], size: 12, label: 'Starter + Pro' },
  { sets: ['Pro', 'Enterprise'], size: 8, label: 'Pro + Enterprise' },
  { sets: ['Starter', 'Enterprise'], size: 0, label: 'No overlap' },
  { sets: ['Starter', 'Pro', 'Enterprise'], size: 4, label: 'All tiers' },
];

function ExampleChart({ data }: { data: Array<{ sets: string[]; size: number; label: string }> }) {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <Venn data={data}>
        <Tooltip />
      </Venn>
    </ResponsiveContainer>
  );
}

export const AudienceOverlap = {
  render: () => <ExampleChart data={audienceOverlapData} />,
};

export const RetentionVsRevenue = {
  render: () => <ExampleChart data={retentionVsRevenueData} />,
};

export const DisjointAndSubsetSignals = {
  render: () => <ExampleChart data={productPackagingData} />,
  parameters: {
    docs: {
      description: {
        story:
          'Useful for Euler-style data where some overlaps are intentionally zero. Keep set counts small when exact area fidelity is important.',
      },
    },
  },
};

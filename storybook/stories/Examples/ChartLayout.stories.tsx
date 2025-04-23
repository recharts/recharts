import React from 'react';
import { StoryContext } from '@storybook/react';
import { ComposedChart, useChartHeight, useChartWidth } from '../../../src';
import { selectContainerScale } from '../../../src/state/selectors/containerSelectors';
import { useAppSelector } from '../../../src/state/hooks';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';
import { ChartSizeDimensions } from '../../ChartSizeDimensions';

function ShowScale() {
  const width = useChartWidth();
  const height = useChartHeight();
  const scale = useAppSelector(selectContainerScale);
  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
      <text x={width * 0.9} y={height * 0.9} textAnchor="end" dominantBaseline="hanging" stroke="black">
        {`scale: ${scale}`}
      </text>
    </svg>
  );
}

export default {
  component: ComposedChart,
  docs: {
    autodocs: false,
  },
  /**
   * Without this piece of configuration, the createPortal makes Storybook throw an error.
   * See https://github.com/storybookjs/storybook/issues/18269#issuecomment-1711293995
   */
  parameters: {
    docs: {
      source: { type: 'code' },
    },
  },
};

/**
 * https://github.com/recharts/recharts/issues/5477
 */
export const WithAbsolutePositionAndFlexboxParents = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#003459',
            position: 'relative',
          }}
          className="spacer-top"
        >
          <div
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              top: '100px',
              background: '#00A7E1',
            }}
            className="spacer-left"
          >
            <ComposedChart {...args}>
              <ChartSizeDimensions />
              <ShowScale />
              <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
            </ComposedChart>
          </div>
        </div>
      </div>
    );
  },
  args: {
    width: 500,
    height: 500,
  },
};

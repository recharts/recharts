/* eslint-disable no-shadow */
import React from 'react';
import { pageData } from '../data';
import { Bar, ComposedChart, Line, ResponsiveContainer, Tooltip } from '../../../src';
import { DefaultTooltipContent } from '../../../src/component/DefaultTooltipContent';

export default {
  component: Tooltip,
};

export const LockedByClick = {
  render: (_args: Record<string, any>) => {
    const [isLocked, setIsLocked] = React.useState(false);
    // The TooltipData contains the payload, the label and the x position of the tooltip.
    // Their update is interrupted by the click event, so we need to store them in a state.
    const [tooltipData, setTooltipData] = React.useState<{ payload?: unknown[]; label?: string; x?: number }>({});

    // A custom Tooltip that updates the payload of the tooltip if the
    // chart is locked, and either way always renders using the normal Tooltip.
    const CustomTooltip = (props: any) => {
      // If the chart is locked, and the payload is not empty, and the
      // x position of the tooltip has changed, update the tooltipData.
      if (!isLocked && props.payload && props.payload.length > 0 && props.coordinate.x !== tooltipData.x) {
        setTooltipData({ payload: props.payload, x: props.coordinate.x, label: props.label });
      }
      return (
        <DefaultTooltipContent
          {...props}
          payload={props.tooltipData.payload ?? props.payload}
          label={props.tooltipData.label ?? props.label}
        />
      );
    };

    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          data={pageData}
          // Clicking the chart locks the tooltip to the current position, and fixes its content.
          onClick={() => {
            setIsLocked(!isLocked);
          }}
        >
          <Line dataKey="uv" />
          <Bar dataKey="pv" />

          <Tooltip
            position={{ y: 0, x: tooltipData.x }} // The y position fixes the Tooltip to the top of the chart.
            content={<CustomTooltip tooltipData={tooltipData} />}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {},
  controls: {},
  description:
    'This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.',
};

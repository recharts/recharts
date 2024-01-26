/* eslint-disable no-shadow */
import React, { useCallback, useState } from 'react';
import { pageData } from '../data';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../src';
import { DefaultTooltipContent } from '../../../src/component/DefaultTooltipContent';
import { generateMockData } from '../../../test/helper/generateMockData';

export default {
  component: Tooltip,
};

// We do not export this story, but reuse the rendering across multiple examples with various args.
const SimpleTooltipStory = {
  render: (tooltipArgs: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={pageData}>
          <Tooltip {...tooltipArgs} />
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};

export const ActiveTooltip = {
  ...SimpleTooltipStory,
  args: {
    active: true,
  },
};

export const SettingTooltipIndex = {
  render: () => (
    <LineChart
      width={500}
      height={300}
      data={pageData}
      accessibilityLayer
      margin={{
        top: 5,
        right: 5,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      <Tooltip defaultIndex={2} />
    </LineChart>
  ),
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
  description:
    'This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.',
};

export const CssScaledParent = {
  render: () => {
    const [scale, setScale] = useState(1.2);
    const handleZoomIn = useCallback(() => setScale(s => s + 0.1), []);
    const handleZoomOut = useCallback(() => setScale(s => s - 0.1), []);
    return (
      <div style={{ width: '100%' }}>
        <h2>No transform: scale</h2>
        <div style={{ display: 'flex' }}>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={pageData}>
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <h2>
          Parent container
          {` <div style={{transform: scale(${scale})}}> ...`}
        </h2>
        <button type="button" onClick={handleZoomIn}>
          Zoom In
        </button>
        <button type="button" onClick={handleZoomOut}>
          Zoom Out
        </button>
        <div style={{ transform: `scale(${scale})`, transformOrigin: '50% 0' }}>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={pageData}>
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  },
  description: 'This example shows if Tooltip is shown correctly when parent component use transform:scale styling',
};

const areaData = [
  { category: 'A', value: 0.2 },
  { category: 'B', value: 0.3 },
  { category: 'B', value: 0.5 },
  { category: 'C', value: 0.6 },
  { category: 'C', value: 0.7 },
  { category: 'D', value: 0.4 },
];

const lineData = [
  { category: 'A', value: null },
  { category: 'B', value: null },
  { category: 'B', value: null },
  { category: 'C', value: 0.2 },
  { category: 'C', value: 0.4 },
  { category: 'D', value: 0.6 },
];

export const SeparateDataSetsForChart = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={areaData}>
          <XAxis dataKey="category" type="category" />
          <YAxis dataKey="value" />
          <Tooltip />

          <Area dataKey="value" />
          <Line dataKey="value" data={lineData} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};

export const TriggerTooltipByClick = {
  ...SimpleTooltipStory,
  args: {
    trigger: 'click',
  },
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: payloadType[];
  label?: number;
}

type payloadType = {
  value: string | number;
  name: string;
};

const CustomContent = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length > 0) {
    return (
      <div
        style={{
          backgroundColor: '#5b63ffe7',
          padding: '10px',
          borderRadius: '10px',
          boxShadow: '1px 2px 10px -2px #7873ffb1',
        }}
      >
        {payload.map((pld: payloadType) => (
          <p
            key={pld.name}
            style={{
              borderStyle: 'solid 1px',
              fontSize: '13px',
              fontWeight: '600',
              fontFamily: 'sans-serif',
              color: '#fff',
            }}
          >
            {`${pld.name} : ${pld.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const CustomContentExample = {
  ...SimpleTooltipStory,
  args: {
    content: <CustomContent />,
    trigger: 'hover',
  },
};

export const LargeDataArray = {
  render: (args: Record<string, any>) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={generateMockData(1000, 334058656)}
        >
          {/* The target component */}
          <Tooltip {...args} />
          <Line dataKey="x" />
          <Line dataKey="y" />
          <Line dataKey="z" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {},
};

export const IncludeHidden = {
  render: (args: Record<string, any>) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          {/* The target component */}
          <Tooltip includeHidden {...args} />
          <Line dataKey="uv" />
          <Line dataKey="pv" hide />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {},
};

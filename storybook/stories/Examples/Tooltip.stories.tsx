import React, { useCallback, useState } from 'react';
import { StoryContext } from '@storybook/react';
import { pageData } from '../data';
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  DefaultTooltipContent,
} from '../../../src';
import { generateMockData } from '../../../test/helper/generateMockData';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';
import { TooltipProps } from '../API/props/TooltipProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';

export default {
  argTypes: TooltipProps,
  component: Tooltip,
};

// We do not export this story, but reuse the rendering across multiple examples with various args.
const SimpleTooltipStory = {
  render: (tooltipArgs: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip {...tooltipArgs} />
          <Line dataKey="uv" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};

export const ActiveTooltip = {
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    active: true,
  },
};

export const SettingTooltipIndex = {
  render: (tooltipArgs: Record<string, any>) => (
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
      <Tooltip {...tooltipArgs} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  ),
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    defaultIndex: 2,
  },
};

export const LockedByClick = {
  render: (tooltipArgs: Record<string, any>) => {
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
          <Tooltip
            {...tooltipArgs}
            position={{ y: 0, x: tooltipData.x }} // The y position fixes the Tooltip to the top of the chart.
            content={<CustomTooltip tooltipData={tooltipData} />}
          />
          <Line dataKey="uv" />
          <Bar dataKey="pv" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  description:
    'This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.',
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
  },
};

export const CssScaledParent = {
  render: (tooltipArgs: Record<string, any>) => {
    const [scale, setScale] = useState(1.2);
    const handleZoomIn = useCallback(() => setScale(s => s + 0.1), []);
    const handleZoomOut = useCallback(() => setScale(s => s - 0.1), []);
    return (
      <div style={{ width: '100%' }}>
        <h2>No transform: scale</h2>
        <div style={{ display: 'flex' }}>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={pageData}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
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
              <XAxis dataKey="name" />
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
              <Tooltip {...tooltipArgs} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  },
  description: 'This example shows if Tooltip is shown correctly when parent component use transform:scale styling',
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
  },
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
  render: (tooltipProps: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={areaData}>
          <XAxis dataKey="category" type="category" />
          <YAxis dataKey="value" />
          <Tooltip {...tooltipProps} />
          <Area dataKey="value" />
          <Line dataKey="value" data={lineData} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
  },
};

export const TriggerTooltipByClick = {
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
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
  return (
    <div
      style={{
        backgroundColor: '#5b63ffe7',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '1px 2px 10px -2px #7873ffb1',
        visibility: active ? 'visible' : 'hidden',
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
};

export const CustomContentExample = {
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
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
          <Tooltip {...args} />
          <Line dataKey="x" />
          <Line dataKey="y" />
          <Line dataKey="z" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
  },
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
          <Tooltip {...args} />
          <Line dataKey="uv" />
          <Line dataKey="pv" hide />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    includeHidden: true,
  },
};

export const SharedTooltipInBarChart = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={pageData}>
          <Bar dataKey="uv" fill="green" />
          <Bar dataKey="pv" fill="red" />
          <Tooltip {...args} />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    shared: false,
    defaultIndex: 2,
    active: true,
  },
};

export const SharedTooltipInRadialBarChart = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart data={pageData}>
          <RadialBar dataKey="uv" fill="green" />
          <RadialBar dataKey="pv" fill="red" />
          <Tooltip {...args} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    shared: false,
    defaultIndex: 2,
    active: true,
  },
};

/**
 * https://github.com/recharts/recharts/issues/2458
 *
 * Tooltip that's taller than the chart itself should not clip.
 * It should instead overflow the chart.
 */
export const TallTooltipInNarrowChart = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={50}>
        <LineChart data={pageData}>
          <Tooltip {...args} />
          <Line dataKey="uv" fill="green" />
          <Line dataKey="pv" fill="red" />
          <Line dataKey="amt" fill="amt" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    defaultIndex: 2,
    active: true,
  },
};

export const TooltipWithPortal = {
  render: (tooltipProps: Record<string, any>) => {
    const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);

    return (
      <>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={pageData}>
            {portalRef && <Tooltip {...tooltipProps} portal={portalRef} />}
            <Line dataKey="uv" fill="green" />
            <Line dataKey="pv" fill="red" />
          </LineChart>
        </ResponsiveContainer>
        <div
          ref={node => {
            if (portalRef == null && node != null) {
              setPortalRef(node);
            }
          }}
        >
          <p>Inspect the resulting HTML to see that the Tooltip element is rendered according to the portal ref.</p>
          <p>
            You now control the container the Tooltip renders in, as well as style attributes such as width, height,
            etc. Those can be managed via the Tooltip wrapperStyle prop.
          </p>
          {/* The Tooltip will render here */}
        </div>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    wrapperStyle: {
      width: '25%',
      marginLeft: 10,
    },
    defaultIndex: 3,
    active: true,
  },
};

const d1 = [
  {
    Triggers: 10,
    date: 'Jan 1, 2025',
  },
  {
    Triggers: 10,
    date: 'Feb 28, 2025',
  },
];

export const RechartsAlphaTooltipBug5516Repro = {
  render: (tooltipProps: Record<string, any>, context: StoryContext) => {
    const [, setRandomUnusedState] = useState(true);

    return (
      <div>
        <div style={{ height: 2000, width: 300 }}>
          <p>There is a chart here; scroll down</p>
        </div>
        <div style={{ height: 250, width: 300 }}>
          <button type="button" onClick={() => setRandomUnusedState(v => !v)}>
            set random unused state
          </button>
          <ResponsiveContainer>
            <LineChart data={d1} style={{ border: '1px solid black' }}>
              <Tooltip {...tooltipProps} />
              <Line dataKey="Triggers" />
              <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
  },
};

export const RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip = {
  render: (tooltipProps: Record<string, any>, context: StoryContext) => {
    const [, setRandomUnusedState] = useState(true);

    return (
      <div>
        <div style={{ height: 2000, width: 300 }}>
          <p>There is a chart here; scroll down</p>
        </div>
        <div style={{ height: 250, width: 300 }}>
          <button type="button" onClick={() => setRandomUnusedState(v => !v)}>
            set random unused state
          </button>
          <ResponsiveContainer>
            <BarChart data={d1} style={{ border: '1px solid black' }}>
              <Bar dataKey="Triggers" />
              <Tooltip {...tooltipProps} />
              <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    shared: false,
  },
};

export const RechartsTooltipBug5542Repro = {
  render: (tooltipProps: Record<string, any>, context: StoryContext) => {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
        }}
      >
        <div
          style={{
            width: '200px',
          }}
        />
        <div
          style={{
            position: 'relative',
          }}
        >
          <BarChart width={730} height={250} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip {...tooltipProps} />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </BarChart>
        </div>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    cursor: false,
  },
};

export const TooltipWithNegativeOffset = {
  render: (tooltipProps: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" />
          <Tooltip {...tooltipProps} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    offset: -50,
    wrapperStyle: {
      width: 100,
    },
  },
};

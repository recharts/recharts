import React from 'react';
import { StoryContext } from '@storybook/react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Brush,
  Minimap,
} from '../../../src';
import { pageData, babiesAndVideosCorrelation } from '../data';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';


// Standard story configuration
const defaultArgs = {
  useZoomPan: true,
  autoScaleYDomain: false,
  showScrollBar: true,
  disableAnimation: true,
};

const defaultArgTypes = {
  useZoomPan: {
    control: { type: 'boolean' },
    description: 'Enable zoom/pan integration with brushes',
  },
  autoScaleYDomain: {
    control: { type: 'boolean' },
    description: 'Automatically adjust Y-axis domain based on visible data',
  },
  showScrollBar: {
    control: { type: 'boolean' },
    description: 'Show scroll bar indicators',
  },
  disableAnimation: {
    control: { type: 'boolean' },
    description: 'Disable zoom/pan animations for better performance',
  },
};

// Standard dimensions
const CHART_HEIGHT = 400;
const CHART_WIDTH = 600;
const CHART_MARGIN = { top: 20, right: 20, bottom: 20, left: 20 };
const BRUSH_HEIGHT = 50;
const BRUSH_WIDTH = 60;

export default {
  title: 'Examples/Zoom Pan',
  component: LineChart,
  docs: { autodocs: false },
};

// === BASIC ZOOM/PAN STORIES ===

export const BasicZoomPan = {
  args: defaultArgs,
  argTypes: defaultArgTypes,
  render: (args: typeof defaultArgs, context: StoryContext) => (
    <div>
      <h3>Basic Zoom & Pan</h3>
      <p>
        Use <strong>mouse wheel</strong> to zoom, <strong>drag</strong> to pan. <strong>Double-click</strong> to reset zoom.
      </p>
      <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
      <LineChart
        data={pageData}
          margin={CHART_MARGIN}
          zoom={{
            mode: 'xy',
            showScrollBar: args.showScrollBar,
            disableAnimation: args.disableAnimation,
          }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{ value: 'Pages', position: 'bottom' }} />
        <YAxis label={{ value: 'UV', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  ),
  storyName: 'Basic Zoom & Pan',
};

export const AxisConstrainedZoom = {
  args: { ...defaultArgs, zoomMode: 'x', chartType: 'LineChart', maxScale: 8 },
  argTypes: {
    ...defaultArgTypes,
    zoomMode: {
      control: { type: 'radio' },
      options: ['x', 'y', 'xy'],
      description: 'Zoom mode constraint',
    },
    chartType: {
      control: { type: 'radio' },
      options: ['LineChart', 'BarChart', 'AreaChart', 'ScatterChart'],
      description: 'Chart type for demonstration',
    },
    maxScale: {
      control: { type: 'range', min: 2, max: 20, step: 1 },
      description: 'Maximum zoom scale',
    },
  },
  render: (args: typeof defaultArgs & { zoomMode: 'x' | 'y' | 'xy'; chartType: string; maxScale: number }, context: StoryContext) => {
    const ChartComponent = { LineChart, BarChart, AreaChart, ScatterChart }[args.chartType];
    
    // Different data for scatter chart
    const chartData = args.chartType === 'ScatterChart' 
      ? [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
          { x: 200, y: 350, z: 300 },
          { x: 180, y: 180, z: 250 },
          { x: 130, y: 450, z: 600 },
          { x: 160, y: 220, z: 320 },
        ]
      : pageData;

    const ChartElement = {
      LineChart: <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} />,
      BarChart: <Bar dataKey="amt" fill="#8884d8" />,
      AreaChart: <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />,
      ScatterChart: <Scatter dataKey="z" fill="#8884d8" />,
    }[args.chartType];

    const axisProps = args.chartType === 'ScatterChart' 
      ? {
          xAxis: <XAxis type="number" dataKey="x" name="stature" unit="cm" />,
          yAxis: <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        }
      : {
          xAxis: <XAxis dataKey="name" label={{ value: 'Pages', position: 'bottom' }} />,
          yAxis: <YAxis label={{ value: args.chartType === 'BarChart' ? 'Amount' : args.chartType === 'AreaChart' ? 'UV' : 'PV', angle: -90, position: 'insideLeft' }} />
        };

    return (
      <div>
        <h3>Axis-Constrained Zoom ({args.chartType})</h3>
        <p>
          Zoom constrained to <strong>{args.zoomMode}</strong> axis only with max scale of <strong>{args.maxScale}x</strong>.
          {args.zoomMode === 'x' && ' Horizontal zoom only.'}
          {args.zoomMode === 'y' && ' Vertical zoom only.'}
          {args.zoomMode === 'xy' && ' Free zoom in both directions.'}
        </p>
        <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
          <ChartComponent
            data={chartData}
            margin={CHART_MARGIN}
            zoom={{
              mode: args.zoomMode,
              maxScale: args.maxScale,
              showScrollBar: args.showScrollBar,
              disableAnimation: args.disableAnimation,
            }}
      >
        <CartesianGrid strokeDasharray="3 3" />
            {axisProps.xAxis}
            {axisProps.yAxis}
        <Tooltip />
            {ChartElement}
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </ChartComponent>
    </ResponsiveContainer>
      </div>
    );
  },
  storyName: 'Axis-Constrained Zoom',
};

export const DragToZoom = {
  args: { ...defaultArgs, zoomMode: 'xy', chartType: 'LineChart' },
  argTypes: {
    ...defaultArgTypes,
    zoomMode: {
      control: { type: 'radio' },
      options: ['x', 'y', 'xy'],
      description: 'Zoom mode - constrains drag selection to specific axes',
    },
    chartType: {
      control: { type: 'radio' },
      options: ['LineChart', 'BarChart', 'AreaChart', 'ScatterChart'],
      description: 'Chart type for demonstration',
    },
  },
  render: (args: typeof defaultArgs & { zoomMode: 'x' | 'y' | 'xy'; chartType: string }, context: StoryContext) => {
    const ChartComponent = { LineChart, BarChart, AreaChart, ScatterChart }[args.chartType];
    
    const chartData = args.chartType === 'ScatterChart' 
      ? [
          { x: 100, y: 200, z: 200 },
          { x: 120, y: 100, z: 260 },
          { x: 170, y: 300, z: 400 },
          { x: 140, y: 250, z: 280 },
          { x: 150, y: 400, z: 500 },
          { x: 110, y: 280, z: 200 },
          { x: 200, y: 350, z: 300 },
          { x: 180, y: 180, z: 250 },
          { x: 130, y: 450, z: 600 },
          { x: 160, y: 220, z: 320 },
        ]
      : pageData;

    const ChartElements = {
      LineChart: [
        <Line key="pv" type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} />,
        <Line key="uv" type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />,
      ],
      BarChart: [
        <Bar key="pv" dataKey="pv" fill="#82ca9d" />,
        <Bar key="uv" dataKey="uv" fill="#8884d8" />,
      ],
      AreaChart: [
        <Area key="pv" type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />,
        <Area key="uv" type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />,
      ],
      ScatterChart: [<Scatter key="scatter" dataKey="z" fill="#8884d8" />],
    }[args.chartType];

    const axisProps = args.chartType === 'ScatterChart' 
      ? {
          xAxis: <XAxis type="number" dataKey="x" name="stature" unit="cm" />,
          yAxis: <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        }
      : {
          xAxis: <XAxis dataKey="name" label={{ value: 'Pages', position: 'bottom' }} />,
          yAxis: <YAxis label={{ value: 'Values', angle: -90, position: 'insideLeft' }} />
        };

    return (
        <div>
        <h3>Drag-to-Zoom Selection ({args.chartType})</h3>
          <p>
            Hold <strong>Shift</strong> and drag to select an area to zoom into.
          {args.zoomMode === 'x' && ' (Selection constrained to horizontal axis)'}
          {args.zoomMode === 'y' && ' (Selection constrained to vertical axis)'}
            {args.zoomMode === 'xy' && ' (Free selection in both directions)'}
          </p>
        <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
          <ChartComponent
            data={chartData}
            margin={CHART_MARGIN}
            zoom={{ 
              mode: args.zoomMode, 
              dragToZoom: true, 
              showScrollBar: args.showScrollBar,
              disableAnimation: args.disableAnimation,
            } }
          >
            <CartesianGrid strokeDasharray="3 3" />
            {axisProps.xAxis}
            {axisProps.yAxis}
            <Tooltip />
            {ChartElements}
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    );
  },
  storyName: 'Drag-to-Zoom Selection',
};

// === ZOOM SCALE CONTROLS ===

export const ZoomScaleLimits = {
  args: { ...defaultArgs, minScale: 1, maxScale: 10, chartType: 'ScatterChart' },
  argTypes: {
    ...defaultArgTypes,
    minScale: {
      control: { type: 'range', min: 0.1, max: 2, step: 0.1 },
      description: 'Minimum zoom scale',
    },
    maxScale: {
      control: { type: 'range', min: 5, max: 20, step: 1 },
      description: 'Maximum zoom scale',
    },
    chartType: {
      control: { type: 'radio' },
      options: ['LineChart', 'BarChart', 'AreaChart', 'ScatterChart'],
      description: 'Chart type for demonstration',
    },
  },
  render: (args: typeof defaultArgs & { minScale: number; maxScale: number; chartType: string }, context: StoryContext) => {
    const ChartComponent = { LineChart, BarChart, AreaChart, ScatterChart }[args.chartType];
    
    const chartData = args.chartType === 'ScatterChart' 
      ? [
          { x: 100, y: 200, z: 200 },
          { x: 120, y: 100, z: 260 },
          { x: 170, y: 300, z: 400 },
          { x: 140, y: 250, z: 280 },
          { x: 150, y: 400, z: 500 },
          { x: 110, y: 280, z: 200 },
          { x: 200, y: 350, z: 300 },
          { x: 180, y: 180, z: 250 },
          { x: 130, y: 450, z: 600 },
          { x: 160, y: 220, z: 320 },
        ]
      : pageData;

    const ChartElement = {
      LineChart: <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />,
      BarChart: <Bar dataKey="amt" fill="#8884d8" />,
      AreaChart: <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />,
      ScatterChart: <Scatter dataKey="z" fill="#8884d8" />,
    }[args.chartType];

    const axisProps = args.chartType === 'ScatterChart' 
      ? {
          xAxis: <XAxis type="number" dataKey="x" name="stature" unit="cm" />,
          yAxis: <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        }
      : {
          xAxis: <XAxis dataKey="name" label={{ value: 'Pages', position: 'bottom' }} />,
          yAxis: <YAxis label={{ value: args.chartType === 'BarChart' ? 'Amount' : 'UV', angle: -90, position: 'insideLeft' }} />
        };

    return (
      <div>
        <h3>Zoom Scale Limits ({args.chartType})</h3>
        <p>
          Zoom with custom scale limits: <strong>{args.minScale}x</strong> to <strong>{args.maxScale}x</strong>.
          Try zooming to test the minimum and maximum scale boundaries.
        </p>
        <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
          <ChartComponent
            data={chartData}
            margin={CHART_MARGIN}
          zoom={{ 
            mode: 'xy',
              minScale: args.minScale,
              maxScale: args.maxScale,
              showScrollBar: args.showScrollBar,
              disableAnimation: args.disableAnimation,
          } }
        >
          <CartesianGrid strokeDasharray="3 3" />
            {axisProps.xAxis}
            {axisProps.yAxis}
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            {ChartElement}
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    );
  },
  storyName: 'Zoom Scale Limits',
};

// === BRUSH INTEGRATION ===

export const BrushZoomIntegration = {
  args: { ...defaultArgs, chartType: 'LineChart' },
  argTypes: {
    ...defaultArgTypes,
    chartType: {
      control: { type: 'radio' },
      options: ['LineChart', 'BarChart', 'AreaChart'],
      description: 'Chart type for demonstration',
    },
  },
  render: (args: typeof defaultArgs & { chartType: string }, context: StoryContext) => {
    const ChartComponent = { LineChart, BarChart, AreaChart }[args.chartType];
    const ChartElement = {
      LineChart: <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />,
      BarChart: <Bar dataKey="uv" fill="#8884d8" />,
      AreaChart: <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />,
    }[args.chartType];

    const BrushPreview = {
      LineChart: (
        <LineChart data={pageData}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={1} dot={false} />
        </LineChart>
      ),
      BarChart: (
        <BarChart data={pageData}>
          <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
      ),
      AreaChart: (
        <AreaChart data={pageData}>
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
        </AreaChart>
      ),
    }[args.chartType];

    return (
      <div>
        <h3>Brush + Zoom Integration ({args.chartType})</h3>
        <p>
          Brush controls X-axis filtering {args.useZoomPan ? 'with' : 'without'} zoom/pan integration.
          {args.autoScaleYDomain && ' Y-axis auto-scales to visible data.'}
        </p>
        <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
          <ChartComponent
            data={pageData}
            margin={CHART_MARGIN}
            zoom={{
              mode: 'x',
              showScrollBar: args.showScrollBar,
              disableAnimation: args.disableAnimation,
                autoScaleYDomain: args.autoScaleYDomain,
            } }
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: 'Pages', position: 'bottom' }} />
            <YAxis label={{ value: 'UV', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            {ChartElement}
            <Brush
              dataKey="name"
              height={BRUSH_HEIGHT}
              travellerWidth={10}
              useZoomPan={args.useZoomPan}
              autoScaleYDomain={args.autoScaleYDomain}
            >
              {BrushPreview}
            </Brush>
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    );
  },
  storyName: 'Brush + Zoom Integration',
};

export const VerticalBrushIntegration = {
  args: { ...defaultArgs, showPreview: true, disableZoomPan: false, chartType: 'BarChart', brushDataKey: 'uv', brushPadding: 5 },
  argTypes: {
    ...defaultArgTypes,
    showPreview: {
      control: { type: 'boolean' },
      description: 'Show preview chart in brush',
    },
    disableZoomPan: {
      control: { type: 'boolean' },
      description: 'Disable zoom/pan to demonstrate pure brush Y-axis control',
    },
    chartType: {
      control: { type: 'radio' },
      options: ['BarChart', 'LineChart', 'AreaChart', 'ScatterChart'],
      description: 'Chart type for demonstration',
    },
    brushDataKey: {
      control: { type: 'radio' },
      options: ['uv', 'pv', 'amt', 'length', 'name'],
      description: 'Data key for vertical brush filtering',
    },
    brushPadding: {
      control: { type: 'range', min: 1, max: 20, step: 1 },
      description: 'Brush padding - controls distance from chart edge',
    },
  },
  render: (
    args: typeof defaultArgs & { 
      showPreview: boolean; 
      disableZoomPan: boolean; 
      chartType: string;
      brushDataKey: string;
      brushPadding: number;
    }, 
    context: StoryContext
  ) => {
    const ChartComponent = { BarChart, LineChart, AreaChart, ScatterChart }[args.chartType];
    
    // Use appropriate data and layout based on chart type
    const isScatter = args.chartType === 'ScatterChart';
    const chartData = isScatter ? babiesAndVideosCorrelation : pageData;
    
    // For Y-axis control, most charts should use horizontal layout except bar chart which can be vertical
    const useVerticalLayout = args.chartType === 'BarChart' && !isScatter;
    
    const ChartElement = {
      BarChart: useVerticalLayout ? [
        <Bar key="uv" dataKey="uv" fill="#8884d8" />,
        <Bar key="pv" dataKey="pv" fill="#82ca9d" />,
      ] : [
        <Bar key="uv" dataKey="uv" fill="#8884d8" />,
        <Bar key="pv" dataKey="pv" fill="#82ca9d" />,
      ],
      LineChart: [
        <Line key="uv" type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />,
        <Line key="pv" type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} />,
      ],
      AreaChart: [
        <Area key="uv" type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />,
        <Area key="pv" type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.4} />,
      ],
      ScatterChart: <Scatter dataKey="length" fill="#8884d8" />,
    }[args.chartType];

    const brushPreview = args.showPreview ? (
      isScatter ? (
        <ScatterChart data={babiesAndVideosCorrelation}>
          <XAxis type="number" dataKey="year" hide />
          <YAxis type="number" dataKey="length" hide />
          <Scatter dataKey="length" fill="#8884d8" />
        </ScatterChart>
      ) : useVerticalLayout ? (
        // For vertical bar chart, use VERTICAL preview in the vertical brush
        <BarChart data={pageData} layout="vertical">
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          <Bar dataKey={args.brushDataKey} fill="#8884d8" />
        </BarChart>
      ) : (
        // For normal charts, use standard horizontal preview
        <BarChart data={pageData}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Bar dataKey={args.brushDataKey} fill="#8884d8" />
        </BarChart>
      )
    ) : null;

    const axisProps = isScatter ? {
      xAxis: <XAxis type="number" dataKey="year" name="year" unit="yr" />,
      yAxis: <YAxis type="number" dataKey="length" name="video length" unit="sec" />
    } : useVerticalLayout ? {
      xAxis: <XAxis type="number" />,
      yAxis: <YAxis dataKey="name" type="category" label={{ value: 'Pages', angle: -90, position: 'insideLeft' }} />
    } : {
      xAxis: <XAxis dataKey="name" label={{ value: 'Pages', position: 'bottom' }} />,
      yAxis: <YAxis label={{ value: 'Values', angle: -90, position: 'insideLeft' }} />
    };

    const brushDataKey = isScatter ? 'length' : args.brushDataKey;
    // Use just standard margin - let brush handle its own padding
    const chartMargin = CHART_MARGIN;

    return (
      <div>
        <h3>Vertical Brush for Y-Axis Control ({args.chartType})</h3>
        <p>
          Vertical brush controls Y-axis filtering using <strong>{brushDataKey}</strong> data.
          {args.disableZoomPan ? ' Zoom/pan disabled to focus on brush functionality.' : ' Integrated with zoom/pan.'}
          {!args.useZoomPan && !args.disableZoomPan && ' Legacy brush mode.'}
          Brush padding: <strong>{args.brushPadding}px</strong>
        </p>
        <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
          <ChartComponent
            data={chartData}
            layout={useVerticalLayout ? 'vertical' : undefined}
            margin={chartMargin}
            zoom={args.disableZoomPan ? undefined : {
              mode: 'y',
              showScrollBar: args.showScrollBar,
              disableAnimation: args.disableAnimation,
            } }
          >
            <CartesianGrid strokeDasharray="3 3" />
            {axisProps.xAxis}
            {axisProps.yAxis}
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            {ChartElement}
            <Brush
              layout="vertical"
              dataKey={useVerticalLayout ? 'name' : brushDataKey}
              width={BRUSH_WIDTH}
              height={300}
              travellerWidth={10}
              useZoomPan={args.disableZoomPan ? false : args.useZoomPan}
              right={true}
              padding={{ top: args.brushPadding, right: args.brushPadding, bottom: args.brushPadding, left: args.brushPadding }}
            >
              {brushPreview}
            </Brush>
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    );
  },
  storyName: 'Vertical Brush Integration',
};

export const DualBrushControl = {
  args: { ...defaultArgs, horizontalPreview: 'area', verticalPreview: 'bar', allowHorizontalReposition: true, allowVerticalReposition: true, horizontalPosition: 'bottom', verticalPosition: 'right', brushPadding: 5 },
  argTypes: {
    ...defaultArgTypes,
    horizontalPreview: {
      control: { type: 'radio' },
      options: ['line', 'area', 'bar'],
      description: 'Preview chart type for horizontal brush',
    },
    verticalPreview: {
      control: { type: 'radio' },
      options: ['line', 'area', 'bar'],
      description: 'Preview chart type for vertical brush',
    },
    allowHorizontalReposition: {
      control: { type: 'boolean' },
      description: 'Allow repositioning of horizontal brush',
    },
    allowVerticalReposition: {
      control: { type: 'boolean' },
      description: 'Allow repositioning of vertical brush',
    },
    horizontalPosition: {
      control: { type: 'radio' },
      options: ['top', 'bottom'],
      description: 'Position of horizontal brush',
    },
    verticalPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Position of vertical brush',
    },
    brushPadding: {
      control: { type: 'range', min: 1, max: 20, step: 1 },
      description: 'Brush padding - controls distance from chart edge',
    },
  },
  render: (
    args: typeof defaultArgs & {
      horizontalPreview: 'line' | 'area' | 'bar';
      verticalPreview: 'line' | 'area' | 'bar';
      allowHorizontalReposition: boolean;
      allowVerticalReposition: boolean;
      horizontalPosition: 'top' | 'bottom';
      verticalPosition: 'left' | 'right';
      brushPadding: number;
    },
    context: StoryContext,
  ) => {
    const getHorizontalPreview = (type: string) => {
      switch (type) {
        case 'line':
          return (
            <LineChart data={pageData}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={1} dot={false} />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={1} dot={false} />
            </LineChart>
          );
        case 'area':
          return (
            <AreaChart data={pageData}>
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
            </AreaChart>
          );
        case 'bar':
          return (
            <BarChart data={pageData}>
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          );
        default:
          return null;
      }
    };

    const getVerticalPreview = (type: string) => {
      switch (type) {
        case 'line':
          return (
            <LineChart data={pageData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={1} dot={false} />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={1} dot={false} />
            </LineChart>
          );
        case 'area':
          return (
            <AreaChart data={pageData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
            </AreaChart>
          );
        case 'bar':
          return (
            <BarChart data={pageData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          );
        default:
          return null;
      }
    };

    // Use standard margins - let brushes handle their own padding
    const margin = CHART_MARGIN;

    return (
      <div>
        <h3>Dual Brush XY Control</h3>
        <p>
          Independent brushes control both axes with customizable previews and positions:
          <br />• <strong>Horizontal ({args.horizontalPosition}):</strong> {args.horizontalPreview} chart preview {args.allowHorizontalReposition ? '(repositionable)' : '(fixed)'}
          <br />• <strong>Vertical ({args.verticalPosition}):</strong> {args.verticalPreview} chart preview {args.allowVerticalReposition ? '(repositionable)' : '(fixed)'}
          <br />• <strong>Brush padding:</strong> {args.brushPadding}px
        </p>
        <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
          <LineChart
            data={pageData}
            margin={margin}
            zoom={{
              mode: 'xy',
              showScrollBar: args.showScrollBar,
              disableAnimation: args.disableAnimation,
              autoScaleYDomain: args.autoScaleYDomain,
            } }
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: 'Pages', position: 'bottom' }} />
            <YAxis label={{ value: 'Values', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} />
            
            {/* Horizontal Brush */}
            <Brush
              dataKey="name"
              height={BRUSH_HEIGHT}
              travellerWidth={10}
              useZoomPan={args.useZoomPan}
              autoScaleYDomain={args.autoScaleYDomain}
              axis="x"
              padding={{ top: args.brushPadding, right: args.brushPadding, bottom: args.brushPadding, left: args.brushPadding }}
              {...{ [args.horizontalPosition]: true }}
            >
              {getHorizontalPreview(args.horizontalPreview)}
            </Brush>
            
            {/* Vertical Brush */}
            <Brush
              dataKey="uv"
              width={BRUSH_WIDTH}
              height={250}
              travellerWidth={10}
              useZoomPan={args.useZoomPan}
              layout="vertical"
              axis="y"
              padding={{ top: args.brushPadding, right: args.brushPadding, bottom: args.brushPadding, left: args.brushPadding }}
              {...{ [args.verticalPosition]: true }}
            >
              {getVerticalPreview(args.verticalPreview)}
            </Brush>
            
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
  storyName: 'Dual Brush XY Control',
};

// === ADVANCED FEATURES ===

export const FollowLineFeature = {
  args: { ...defaultArgs, followLineKey: 'temperature', chartType: 'LineChart', verticalGraph: false },
  argTypes: {
    ...defaultArgTypes,
    followLineKey: {
      control: { type: 'radio' },
      options: ['temperature', 'humidity'],
      description: 'Data key to follow during zoom operations',
    },
    chartType: {
      control: { type: 'radio' },
      options: ['LineChart', 'BarChart', 'AreaChart'],
      description: 'Chart type for demonstration',
    },
    verticalGraph: {
      control: { type: 'boolean' },
      description: 'Swap X and Y axes without rotating the chart (data flip only)',
    },
  },
  render: (
    args: typeof defaultArgs & { followLineKey: string; chartType: string; verticalGraph: boolean },
    context: StoryContext,
  ) => {
    const data = Array.from({ length: 100 }, (_, i) => ({
      x: i,
      temperature: 20 + Math.sin(i * 0.2) * 15 + Math.random() * 5,
      humidity: 50 + Math.cos(i * 0.15) * 20 + Math.random() * 10,
    }));

    const ChartComponent = { LineChart, BarChart, AreaChart }[args.chartType];
    const ChartElements = {
      LineChart: [
        <Line key="temp" type="monotone" dataKey="temperature" stroke="#8884d8" strokeWidth={2} />,
        <Line key="humid" type="monotone" dataKey="humidity" stroke="#82ca9d" strokeWidth={2} />,
      ],
      BarChart: [
        <Bar key="temp" dataKey="temperature" fill="#8884d8" />,
        <Bar key="humid" dataKey="humidity" fill="#82ca9d" />,
      ],
      AreaChart: [
        <Area key="temp" type="monotone" dataKey="temperature" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />,
        <Area key="humid" type="monotone" dataKey="humidity" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.4} />,
      ],
    }[args.chartType];

    // For vertical graphs, swap axes without rotating (data flip only)
    const axisConfig = args.verticalGraph ? {
      xAxis: <XAxis type="number" label={{ value: 'Value', position: 'bottom' }} />,
      yAxis: <YAxis type="category" dataKey="x" label={{ value: 'Time', angle: -90, position: 'insideLeft' }} />,
    } : {
      xAxis: <XAxis dataKey="x" label={{ value: 'Time', position: 'bottom' }} />,
      yAxis: <YAxis label={{ value: 'Value', angle: -90, position: 'insideLeft' }} />,
    };

    return (
      <div>
        <h3>Follow Line Feature {args.verticalGraph ? '(Data Axes Swapped)' : ''}</h3>
        <p>
          Zoom operations center on the <strong>{args.followLineKey}</strong> data series.
          {args.verticalGraph ? ' X/Y axes are swapped - values now on X-axis, time on Y-axis.' : ' Try drag-to-zoom to see the behavior.'}
        </p>
        <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
          <ChartComponent
            data={data}
            margin={CHART_MARGIN}
            layout={args.verticalGraph ? 'vertical' : undefined}
            zoom={{
              mode: 'xy',
              followLineKey: args.followLineKey,
              dragToZoom: true,
              showScrollBar: args.showScrollBar,
              disableAnimation: args.disableAnimation,
            } }
          >
            <CartesianGrid strokeDasharray="3 3" />
            {axisConfig.xAxis}
            {axisConfig.yAxis}
            <Tooltip />
            {ChartElements}
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    );
  },
  storyName: 'Follow Line Feature',
};

export const MinimapOverview = {
  args: { ...defaultArgs, minimapPosition: 'top-right', minimapMargin: 15, showMinimap: true, chartType: 'LineChart' },
  argTypes: {
    ...defaultArgTypes,
    minimapPosition: {
      control: { type: 'radio' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Position of the minimap overlay',
    },
    minimapMargin: {
      control: { type: 'range', min: 5, max: 30, step: 5 },
      description: 'Margin from chart edges',
    },
    showMinimap: {
      control: { type: 'boolean' },
      description: 'Show or hide the minimap',
    },
    chartType: {
      control: { type: 'radio' },
      options: ['LineChart', 'BarChart', 'AreaChart', 'ScatterChart'],
      description: 'Chart type for demonstration',
    },
  },
  render: (
    args: typeof defaultArgs & {
      minimapPosition: string;
      minimapMargin: number;
      showMinimap: boolean;
      chartType: string;
    },
    context: StoryContext,
  ) => {
    const ChartComponent = { LineChart, BarChart, AreaChart, ScatterChart }[args.chartType];
    
    // Use more accurate scatter data for minimap
    const scatterData = Array.from({ length: 50 }, (_, i) => ({
      x: 100 + i * 3 + Math.random() * 20,
      y: 200 + Math.sin(i * 0.3) * 100 + Math.random() * 50,
      z: 200 + i * 2 + Math.random() * 100,
    }));
    
    const chartData = args.chartType === 'ScatterChart' ? scatterData : pageData;

    const ChartElement = {
      LineChart: <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />,
      BarChart: <Bar dataKey="uv" fill="#8884d8" />,
      AreaChart: <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />,
      ScatterChart: <Scatter dataKey="z" fill="#8884d8" />,
    }[args.chartType];

    const MinimapElement = {
      LineChart: (
        <LineChart>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={1} dot={false} />
        </LineChart>
      ),
      BarChart: (
        <BarChart>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      ),
      AreaChart: (
        <AreaChart>
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
        </AreaChart>
      ),
      ScatterChart: (
        <ScatterChart>
          <Scatter dataKey="z" fill="#8884d8" />
        </ScatterChart>
      ),
    }[args.chartType];

    const axisProps = args.chartType === 'ScatterChart' 
      ? {
          xAxis: <XAxis type="number" dataKey="x" name="stature" unit="cm" domain={['dataMin', 'dataMax']} />,
          yAxis: <YAxis type="number" dataKey="y" name="weight" unit="kg" domain={['dataMin', 'dataMax']} />
        }
      : {
          xAxis: <XAxis dataKey="name" label={{ value: 'Pages', position: 'bottom' }} />,
          yAxis: <YAxis label={{ value: 'UV', angle: -90, position: 'insideLeft' }} />
        };

    return (
      <div>
        <h3>Minimap Overview ({args.chartType})</h3>
        <p>
          Interactive minimap positioned at <strong>{args.minimapPosition}</strong> with <strong>{args.minimapMargin}px</strong> margin.
          <br />Drag the viewport rectangle or click anywhere in the minimap to navigate.
          {args.chartType === 'ScatterChart' && ' Scatter plot uses accurate data scaling for precise minimap representation.'}
        </p>
        <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
          <ChartComponent
            data={chartData}
            margin={CHART_MARGIN}
            zoom={{
              mode: 'xy',
              showScrollBar: args.showScrollBar,
              disableAnimation: args.disableAnimation,
            } }
          >
            <CartesianGrid strokeDasharray="3 3" />
            {axisProps.xAxis}
            {axisProps.yAxis}
            <Tooltip />
            {ChartElement}
            {args.showMinimap && (
              <Minimap
                position={args.minimapPosition as 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'}
                width={130}
                height={85}
                margin={args.minimapMargin}
                fill="#ffffff"
                stroke="#333"
                viewportStroke="#ff6b6b"
                shadeFill="#000"
                shadeOpacity={0.2}
                style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}
              >
                {MinimapElement}
              </Minimap>
            )}
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    );
  },
  storyName: 'Minimap Overview',
};


// === COMPLEX SCENARIOS ===

export const CompleteZoomSuite = {
  args: { ...defaultArgs, enableBrush: true, enableMinimap: true, enableDragZoom: true, chartType: 'LineChart' },
  argTypes: {
    ...defaultArgTypes,
    enableBrush: {
      control: { type: 'boolean' },
      description: 'Enable brush component',
    },
    enableMinimap: {
      control: { type: 'boolean' },
      description: 'Enable minimap component',
    },
    enableDragZoom: {
      control: { type: 'boolean' },
      description: 'Enable drag-to-zoom functionality',
    },
    chartType: {
      control: { type: 'radio' },
      options: ['LineChart', 'BarChart', 'AreaChart'],
      description: 'Chart type for demonstration',
    },
  },
  render: (
    args: typeof defaultArgs & {
      enableBrush: boolean;
      enableMinimap: boolean;
      enableDragZoom: boolean;
      chartType: string;
    },
    context: StoryContext,
  ) => {
    const ChartComponent = { LineChart, BarChart, AreaChart }[args.chartType];
    
    const ChartElements = {
      LineChart: [
        <Line key="uv" type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />,
        <Line key="pv" type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} />,
        <Line key="amt" type="monotone" dataKey="amt" stroke="#ffc658" strokeWidth={2} />,
      ],
      BarChart: [
        <Bar key="uv" dataKey="uv" fill="#8884d8" />,
        <Bar key="pv" dataKey="pv" fill="#82ca9d" />,
        <Bar key="amt" dataKey="amt" fill="#ffc658" />,
      ],
      AreaChart: [
        <Area key="uv" type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />,
        <Area key="pv" type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.4} />,
        <Area key="amt" type="monotone" dataKey="amt" stroke="#ffc658" fill="#ffc658" fillOpacity={0.3} />,
      ],
    }[args.chartType];

    const BrushPreview = {
      LineChart: (
        <LineChart data={pageData}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={1} dot={false} />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={1} dot={false} />
          <Line type="monotone" dataKey="amt" stroke="#ffc658" strokeWidth={1} dot={false} />
        </LineChart>
      ),
      BarChart: (
        <BarChart data={pageData}>
          <Bar dataKey="uv" fill="#8884d8" />
          <Bar dataKey="pv" fill="#82ca9d" />
          <Bar dataKey="amt" fill="#ffc658" />
        </BarChart>
      ),
      AreaChart: (
        <AreaChart data={pageData}>
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
          <Area type="monotone" dataKey="amt" stroke="#ffc658" fill="#ffc658" fillOpacity={0.2} />
        </AreaChart>
      ),
    }[args.chartType];

    return (
      <div>
        <h3>Complete Zoom & Pan Suite ({args.chartType})</h3>
        <p>
          All zoom/pan features combined:
          <br />• <strong>Mouse wheel:</strong> Zoom in/out
          <br />• <strong>Drag:</strong> Pan around
          <br />• <strong>Shift+Drag:</strong> {args.enableDragZoom ? 'Select area to zoom' : 'Disabled'}
          <br />• <strong>Brush:</strong> {args.enableBrush ? 'X-axis control with preview' : 'Disabled'}
          <br />• <strong>Minimap:</strong> {args.enableMinimap ? 'Full chart overview' : 'Disabled'}
          <br />• <strong>Double-click:</strong> Reset to default view
        </p>
        <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT + 100}>
          <ChartComponent
            data={pageData}
            margin={{ top: 20, right: 20, bottom: 80, left: 20 }}
            zoom={{
              mode: 'xy',
              dragToZoom: args.enableDragZoom,
              showScrollBar: args.showScrollBar,
              disableAnimation: args.disableAnimation,
              autoScaleYDomain: args.autoScaleYDomain,
            } }
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: 'Pages', position: 'bottom' }} />
            <YAxis label={{ value: 'Values', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            {ChartElements}

            {args.enableBrush && (
            <Brush 
              dataKey="name" 
                height={BRUSH_HEIGHT}
                travellerWidth={10}
                useZoomPan={args.useZoomPan}
                autoScaleYDomain={args.autoScaleYDomain}
              >
                {BrushPreview}
            </Brush>
            )}

            {args.enableMinimap && (
              <Minimap
                position="top-left"
                width={140}
                height={90}
                margin={15}
                fill="#f8f9fa"
                stroke="#6c757d"
                viewportStroke="#007bff"
                shadeFill="#6c757d"
                shadeOpacity={0.3}
              >
                {BrushPreview}
              </Minimap>
            )}

            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    );
  },
  storyName: 'Complete Zoom & Pan Suite',
};


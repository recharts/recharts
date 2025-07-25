import React from 'react';
import { Args } from '@storybook/react-vite';
import { General as GeneralProps } from '../props/CartesianComponentShared';
import {
  ComposedChart,
  Bar,
  ResponsiveContainer,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  CartesianGrid,
  LabelList,
} from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import {
  onAbort,
  onAbortCapture,
  onAnimationEnd,
  onAnimationEndCapture,
  onAnimationIteration,
  onAnimationIterationCapture,
  onAnimationStart,
  onAnimationStartCapture,
  onAuxClick,
  onAuxClickCapture,
  onBeforeInput,
  onBeforeInputCapture,
  onBlur,
  onBlurCapture,
  onCanPlay,
  onCanPlayCapture,
  onCanPlayThrough,
  onCanPlayThroughCapture,
  onChange,
  onChangeCapture,
  onClick,
  onClickCapture,
  onCompositionEnd,
  onCompositionEndCapture,
  onCompositionStart,
  onCompositionStartCapture,
  onCompositionUpdate,
  onCompositionUpdateCapture,
  onContextMenu,
  onContextMenuCapture,
  onCopy,
  onCopyCapture,
  onCut,
  onCutCapture,
  onDoubleClick,
  onDoubleClickCapture,
  onDrag,
  onDragCapture,
  onDragEnd,
  onDragEndCapture,
  onDragEnter,
  onDragEnterCapture,
  onDragExit,
  onDragExitCapture,
  onDragLeave,
  onDragLeaveCapture,
  onDragOver,
  onDragOverCapture,
  onDragStart,
  onDragStartCapture,
  onDrop,
  onDropCapture,
  onDurationChange,
  onDurationChangeCapture,
  onEmptied,
  onEmptiedCapture,
  onEncrypted,
  onEncryptedCapture,
  onEnded,
  onEndedCapture,
  onError,
  onErrorCapture,
  onFocus,
  onFocusCapture,
  onGotPointerCapture,
  onGotPointerCaptureCapture,
  onInput,
  onInputCapture,
  onInvalid,
  onInvalidCapture,
  onKeyDown,
  onKeyDownCapture,
  onKeyPress,
  onKeyPressCapture,
  onKeyUp,
  onKeyUpCapture,
  onLoad,
  onLoadCapture,
  onLoadedData,
  onLoadedDataCapture,
  onLoadedMetadata,
  onLoadedMetadataCapture,
  onLoadStart,
  onLoadStartCapture,
  onLostPointerCapture,
  onLostPointerCaptureCapture,
  onMouseDown,
  onMouseDownCapture,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseMoveCapture,
  onMouseOut,
  onMouseOutCapture,
  onMouseOver,
  onMouseOverCapture,
  onMouseUp,
  onMouseUpCapture,
  onPaste,
  onPasteCapture,
  onPause,
  onPauseCapture,
  onPlay,
  onPlayCapture,
  onPlaying,
  onPlayingCapture,
  onPointerCancel,
  onPointerCancelCapture,
  onPointerDown,
  onPointerDownCapture,
  onPointerEnter,
  onPointerEnterCapture,
  onPointerLeave,
  onPointerLeaveCapture,
  onPointerMove,
  onPointerMoveCapture,
  onPointerOut,
  onPointerOutCapture,
  onPointerOver,
  onPointerOverCapture,
  onPointerUp,
  onPointerUpCapture,
  onProgress,
  onProgressCapture,
  onRateChange,
  onRateChangeCapture,
  onReset,
  onResetCapture,
  onScroll,
  onScrollCapture,
  onSeeked,
  onSeekedCapture,
  onSeeking,
  onSeekingCapture,
  onSelect,
  onSelectCapture,
  onStalled,
  onStalledCapture,
  onSubmit,
  onSubmitCapture,
  onSuspend,
  onSuspendCapture,
  onTimeUpdate,
  onTimeUpdateCapture,
  onTouchCancel,
  onTouchCancelCapture,
  onTouchEnd,
  onTouchEndCapture,
  onTouchMove,
  onTouchMoveCapture,
  onTouchStart,
  onTouchStartCapture,
  onTransitionEnd,
  onTransitionEndCapture,
  onVolumeChange,
  onVolumeChangeCapture,
  onWaiting,
  onWaitingCapture,
  onWheel,
  onWheelCapture,
} from '../props/EventHandlers';
import { legendType } from '../props/Legend';
import { GeneralStyle, hide } from '../props/Styles';
import {
  animationBegin,
  animationDuration,
  animationEasing,
  AnimationProps,
  isAnimationActive,
} from '../props/AnimationProps';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';

const [surfaceWidth, surfaceHeight] = [600, 300];

// Only these event handlers are supported for the Bar component
const EventHandlersForBar = {
  onAbort,
  onAbortCapture,
  onAnimationEnd,
  onAnimationEndCapture,
  onAnimationIteration,
  onAnimationIterationCapture,
  onAnimationStart,
  onAnimationStartCapture,
  onAuxClick,
  onAuxClickCapture,
  onBeforeInput,
  onBeforeInputCapture,
  onBlur,
  onBlurCapture,
  onCanPlay,
  onCanPlayCapture,
  onCanPlayThrough,
  onCanPlayThroughCapture,
  onChange,
  onChangeCapture,
  onClick,
  onClickCapture,
  onCompositionEnd,
  onCompositionEndCapture,
  onCompositionStart,
  onCompositionStartCapture,
  onCompositionUpdate,
  onCompositionUpdateCapture,
  onContextMenu,
  onContextMenuCapture,
  onCopy,
  onCopyCapture,
  onCut,
  onCutCapture,
  onDoubleClick,
  onDoubleClickCapture,
  onDrag,
  onDragCapture,
  onDragEnd,
  onDragEndCapture,
  onDragEnter,
  onDragEnterCapture,
  onDragExit,
  onDragExitCapture,
  onDragLeave,
  onDragLeaveCapture,
  onDragOver,
  onDragOverCapture,
  onDragStart,
  onDragStartCapture,
  onDrop,
  onDropCapture,
  onDurationChange,
  onDurationChangeCapture,
  onEmptied,
  onEmptiedCapture,
  onEncrypted,
  onEncryptedCapture,
  onEnded,
  onEndedCapture,
  onError,
  onErrorCapture,
  onFocus,
  onFocusCapture,
  onGotPointerCapture,
  onGotPointerCaptureCapture,
  onInput,
  onInputCapture,
  onInvalid,
  onInvalidCapture,
  onKeyDown,
  onKeyDownCapture,
  onKeyPress,
  onKeyPressCapture,
  onKeyUp,
  onKeyUpCapture,
  onLoad,
  onLoadCapture,
  onLoadedData,
  onLoadedDataCapture,
  onLoadedMetadata,
  onLoadedMetadataCapture,
  onLoadStart,
  onLoadStartCapture,
  onLostPointerCapture,
  onLostPointerCaptureCapture,
  onMouseDown,
  onMouseDownCapture,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseMoveCapture,
  onMouseOut,
  onMouseOutCapture,
  onMouseOver,
  onMouseOverCapture,
  onMouseUp,
  onMouseUpCapture,
  onPaste,
  onPasteCapture,
  onPause,
  onPauseCapture,
  onPlay,
  onPlayCapture,
  onPlaying,
  onPlayingCapture,
  onPointerCancel,
  onPointerCancelCapture,
  onPointerDown,
  onPointerDownCapture,
  onPointerEnter,
  onPointerEnterCapture,
  onPointerLeave,
  onPointerLeaveCapture,
  onPointerMove,
  onPointerMoveCapture,
  onPointerOut,
  onPointerOutCapture,
  onPointerOver,
  onPointerOverCapture,
  onPointerUp,
  onPointerUpCapture,
  onProgress,
  onProgressCapture,
  onRateChange,
  onRateChangeCapture,
  onReset,
  onResetCapture,
  onScroll,
  onScrollCapture,
  onSeeked,
  onSeekedCapture,
  onSeeking,
  onSeekingCapture,
  onSelect,
  onSelectCapture,
  onStalled,
  onStalledCapture,
  onSubmit,
  onSubmitCapture,
  onSuspend,
  onSuspendCapture,
  onTimeUpdate,
  onTimeUpdateCapture,
  onTouchCancel,
  onTouchCancelCapture,
  onTouchEnd,
  onTouchEndCapture,
  onTouchMove,
  onTouchMoveCapture,
  onTouchStart,
  onTouchStartCapture,
  onTransitionEnd,
  onTransitionEndCapture,
  onVolumeChange,
  onVolumeChangeCapture,
  onWaiting,
  onWaitingCapture,
  onWheel,
  onWheelCapture,
};

// declaring this here so that it displays evenly spaced in storybook.
const activeBarDetailString = `<Bar dataKey="value" activeBar={false} />\n
<Bar dataKey="value" activeBar={{ stroke: 'red', strokeWidth: 2 }} />\n
<Bar dataKey="value" activeBar={<CustomizedBar />} />\n
<Bar dataKey="value" activeBar={renderBar} />`;

const StyleProps: Args = {
  strokeDasharray: GeneralStyle.strokeDasharray,
  stroke: GeneralStyle.stroke,
  fill: GeneralStyle.fill,
  strokeWidth: GeneralStyle.strokeWidth,
  hide,
  background: {
    description: `If false set, background of bars will not be drawn. If true set,
    background of bars will be drawn which have the props calculated internally.
    If object set, background of bars will be drawn which have the props mergered by the internal calculated props
     and the option. If ReactElement set, the option can be the custom background element.
      If set a function, the function will be called to render customized background.`,
    table: { category: 'Style' },
  },
  barSize: {
    table: { category: 'Style' },
  },
  radius: {
    table: { category: 'Style' },
  },
  maxBarSize: {
    table: { category: 'Style' },
  },
  legendType: {
    ...legendType,
    table: { category: 'Style' },
  },
  shape: {
    table: { category: 'Style' },
  },
  activeBar: {
    description: `The active bar is shown when a user enters a bar chart and this chart has tooltip.
    If set to false, no active bar will be drawn.
    If set to true, active bar will be drawn with the props calculated internally.
    If passed an object, active bar will be drawn,
    and the internally calculated props will be merged with the key value pairs of the passed object.
    If passed a ReactElement, the option can be the custom active bar element.
    If passed a function, the function will be called to render a customized active bar.`,
    table: {
      type: {
        summary: 'Boolean | Object | ReactElement | Function',
        detail: activeBarDetailString,
      },
      category: 'Tooltip',
    },
  },
  label: {
    description: `If set a string or a number, default label will be drawn, and the option is content.
    If set a React element, the option is the custom react element of drawing label. If set a function,
    the function will be called to render customized label.`,
    table: {
      type: {
        summary: 'string | number | ReactElement | Function',
      },
      category: 'Style',
    },
  },
  minPointSize: {
    table: {
      category: 'Style',
    },
    description: `The minimal height of a bar in a horizontal BarChart, or the minimal width of a bar
    in a vertical BarChart. By default, 0 values are not shown. To visualize a 0 (or close to zero) point,
    set the minimal point size to a pixel value like 3. In stacked bar charts,
    minPointSize might not be respected for tightly packed values.
      So we strongly recommend not using this props in stacked BarChart.
      You may provide a function to conditionally change this prop based on Bar value.`,
  },
};

const GeneralBarProps: Args = {
  ...GeneralProps,
  stackId: {
    table: { category: 'General' },
    description: `The stack id of bar, when two bars have the same stack id, then two bars are stacked in order.`,
  },
};

const AnimationPropsForBar: Args = {
  animationBegin,
  animationEasing,
  animationDuration,
  isAnimationActive,
};

export default {
  component: Bar,
  argTypes: {
    ...GeneralBarProps,
    ...StyleProps,
    ...EventHandlersForBar,
    ...AnimationPropsForBar,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
  },
};

export const API = {
  render: (args: Record<string, any>) => {
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
          {/* All components are added to show the interaction with the Bar properties */}
          <Bar fill="red" stackId="1" dataKey="pv" />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Bar dataKey="uv" {...args} />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    // This API story should have explicit values for all props
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    isAnimationActive: true,
    label: { fill: 'red', fontSize: 20 },
    activeBar: {
      strokeWidth: 4,
      stroke: 'blue',
      fill: 'red',
      radius: 10,
    },
    dataKey: 'uv',
    unit: ' Visitors',
    stackId: '1',
    stroke: 'red',
    fill: 'teal',
    background: true,
    strokeWidth: 2,
    radius: 10,
    minPointSize: 150,
    maxBarSize: 50,
    animationEasing: 'linear',
    animationBegin: 0,
    animationDuration: 1500,
  },
};

const dataWithSmallishValues = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 8,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export const WithMinHeight = {
  render: (args: Args, context: RechartsStoryContext) => {
    const renderCustomizedLabel = (props: any) => {
      const { x, y, width, value } = props;
      const radius = 10;

      return (
        <g>
          <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
          <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
            {value.split(' ')[1]}
          </text>
        </g>
      );
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data={dataWithSmallishValues}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar {...args}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    dataKey: 'pv',
    fill: '#8884d8',
    minPointSize: 5,
  },
};

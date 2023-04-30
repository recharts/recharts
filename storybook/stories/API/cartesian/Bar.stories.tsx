/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Args } from '@storybook/react';
import { data as dataProp, General as GeneralProps, layout as layoutProp } from '../props/CartesianComponentShared';
import { ComposedChart, Bar, ResponsiveContainer, Cell } from '../../../../src';
import { PageDataType, pageData } from '../../data';
import { ResponsiveProps } from '../props/Responsive';
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
  animationId,
  isAnimationActive,
} from '../props/AnimationProps';

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

const StyleProps: Args = {
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
      So we strongly recommend not using this props in stacked BarChart.`,
  },
};

const GeneralBarProps: Args = {
  ...GeneralProps,
  stackId: {
    table: { category: 'General' },
    description: `The stack id of bar, when two bars have the same stack id, then two bars are stacked in order.`,
  },
};

const InternalProps: Args = {
  layout: layoutProp,
  data: dataProp,
};

const AnimationPropsForBar: Args = {
  animationBegin,
  animationEasing,
  animationDuration,
  animationId,
  isAnimationActive,
};

export default {
  component: Bar,
  argTypes: {
    ...GeneralBarProps,
    ...StyleProps,
    ...EventHandlersForBar,
    ...InternalProps,
    ...ResponsiveProps,
    ...AnimationPropsForBar,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
    // Other
    left: { table: { category: 'Other' } },
    top: { table: { category: 'Other' } },
    xAxis: { table: { category: 'Other' } },
    yAxis: { table: { category: 'Other' } },
  },
};

const Base = {
  render: (args: Record<string, any>) => {
    const { data, defs, ...barArgs } = args;

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
          {defs}
          <Bar dataKey="uv" isAnimationActive={false} {...barArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  parameters: { controls: { include: ['data'] } },
};

export const General = {
  ...Base,
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralBarProps),
  },
  parameters: {
    controls: { include: Object.keys(GeneralBarProps) },
  },
  docs: {
    description: {
      story: 'The dataKey defines the y-Values of a Line. Without an xAxis, the index is used for x.',
    },
  },
};

export const Style = {
  ...Base,
  args: {
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    data: pageData,
    stroke: 'red',
    fill: 'teal',
    background: false,
    strokeWidth: 2,
    isAnimationActive: true,
    label: true,
    radius: 40,
    minPointSize: 150,
    maxBarSize: 50,
  },
  parameters: {
    controls: { include: Object.keys(StyleProps) },
  },
};

export const Stacked = {
  render: (args: Record<string, any>) => {
    const { dataKey1, dataKey2, barColor1, barColor2, ...barArgs } = args;

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
          <Bar stackId="pv-uv" dataKey={dataKey1} stroke={barColor1} fill={barColor1} {...barArgs} />
          <Bar stackId="pv-uv" dataKey={dataKey2} stroke={barColor2} fill={barColor2} {...barArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    dataKey1: 'uv',
    dataKey2: 'pv',
    barColor1: '#8884d8',
    barColor2: '#82ca9d',
    isAnimationActive: false,
  },
  argTypes: {
    barColor1: {
      control: { type: 'color' },
    },
    barColor2: {
      control: { type: 'color' },
    },
  },
  parameters: {
    controls: {
      include: ['data', 'dataKey1', 'dataKey2', 'barColor1', 'barColor2'],
    },
  },
};

export const StackedAndUnstacked = {
  render: (args: Record<string, any>) => {
    const { dataKey1, dataKey2, dataKey3, barColor1, barColor2, barColor3, ...barArgs } = args;

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
          <Bar stackId="pv-uv" dataKey={dataKey1} stroke={barColor1} fill={barColor1} {...barArgs} />
          <Bar stackId="pv-uv" dataKey={dataKey2} stroke={barColor2} fill={barColor2} {...barArgs} />
          <Bar dataKey={dataKey3} stroke={barColor3} fill={barColor3} {...barArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    dataKey1: 'uv',
    dataKey2: 'pv',
    dataKey3: 'amt',
    barColor1: '#8884d8',
    barColor2: '#82ca9d',
    barColor3: '#ffc658',
    isAnimationActive: false,
  },
  argTypes: {
    barColor1: {
      control: { type: 'color' },
    },
    barColor2: {
      control: { type: 'color' },
    },
    barColor3: {
      control: { type: 'color' },
    },
  },
  parameters: {
    controls: {
      include: ['data', 'dataKey1', 'dataKey2', 'dataKey3', 'barColor1', 'barColor2', 'barColor3'],
    },
  },
};

export const CustomizedEvent = {
  render: (args: Record<string, any>) => {
    const [activeIndex, setActiveIndex] = useState(1);

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
          <Bar onClick={(_data, index) => setActiveIndex(index)} dataKey="uv" isAnimationActive={false} {...args}>
            {pageData.map((_entry: PageDataType, index: number) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    isAnimationActive: false,
  },
  parameters: { controls: { include: ['data'] } },
};

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: { fill: string; x: number; y: number; width: number; height: number }) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

export const CustomizedShape = {
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
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={props => <TriangleBar {...props} />}
            label={{ position: 'top' }}
            isAnimationActive={false}
            {...args}
          >
            {pageData.map((_entry: PageDataType, index: number) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    isAnimationActive: false,
  },
  parameters: { controls: { include: ['data'] } },
};

export const FillGradient = {
  render: (args: Record<string, any>) => {
    const { dataKey1, dataKey2, ...barArgs } = args;

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
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Bar dataKey={dataKey1} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" {...barArgs} />
          <Bar dataKey={dataKey2} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" {...barArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    dataKey1: 'uv',
    dataKey2: 'pv',
    isAnimationActive: false,
  },
  parameters: {
    controls: {
      include: ['data'],
    },
  },
};

export const FillPattern = {
  render: (args: Record<string, any>) => {
    const { dataKey1, dataKey2, ...barArgs } = args;

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
          <defs>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey={dataKey1} stroke="#8884d8" fillOpacity={1} fill="url(#star)" {...barArgs} />
          <Bar dataKey={dataKey2} stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" {...barArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    dataKey1: 'uv',
    dataKey2: 'pv',
    isAnimationActive: false,
  },
  parameters: {
    controls: {
      include: ['data'],
    },
  },
};

export const Animation = {
  ...Base,
  args: {
    ...getStoryArgsFromArgsTypesObject(AnimationPropsForBar),
    isAnimationActive: true,
    animationEasing: 'linear',
    animationBegin: 0,
    animationDuration: 1500,
  },
  parameters: {
    controls: { include: Object.keys(AnimationPropsForBar) },
  },
};

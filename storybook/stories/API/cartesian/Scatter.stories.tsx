/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ComposedChart, Scatter, XAxis, YAxis, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { data as dataProp, dataKey as dataKeyProp, xAxisId, yAxisId, zAxisId } from '../props/CartesianComponentShared';
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
import {
  animationBegin,
  animationDuration,
  animationEasing,
  animationId,
  isAnimationActive,
} from '../props/AnimationProps';
import { hide } from '../props/Styles';
import { legendType } from '../props/Legend';

const EventHandlers = {
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

const AnimationProps = {
  animationBegin,
  animationDuration,
  animationEasing,
  animationId,
  isAnimationActive,
};

const StyleProps = {
  hide,
  legendType,
  line: {
    description: `If false set, line will not be drawn. If true set, line will be drawn which have
    the props calculated internally. If object set, line will be drawn which have the props mergered
    by the internal calculated props and the option. If ReactElement set, the option can be the custom
    line element. If set a function, the function will be called to render Customized line.`,
    table: {
      type: {
        summary: 'Boolean | Object | ReactElement | Function',
      },
      category: 'Style',
      defaultValue: false,
    },
  },
  lineJointType: {
    table: {
      type: {
        summary: `| 'basis'
        | 'basisClosed'
        | 'basisOpen'
        | 'linear'
        | 'linearClosed'
        | 'natural'
        | 'monotoneX'
        | 'monotoneY'
        | 'monotone'
        | 'step'
        | 'stepBefore'
        | 'stepAfter'
          "  | CurveFactory"`,
      },
      category: 'Style',
    },
  },
  lineType: {
    description: `If 'joint' set, line will generated by just jointing all the points.
      If 'fitting' set, line will be generated by fitting algorithm.`,
    table: {
      type: {
        summary: 'joint | fitting',
      },
      category: 'Style',
      defaultValue: 'joint',
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
  shape: {
    description: `If a string set, specified symbol will be used to show scatter item.
    If ReactElement set, the option can be the custom scatter item element.
    If set a function, the function will be called to render customized scatter item.`,
    table: {
      type: {
        summary: "'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | ReactElement | Function",
      },
      category: 'Style',
      defaultValue: 'circle',
    },
  },
};

const ReactiveProps = {
  activeShape: {
    description: `The active shape is shown when a user enters a scatter chart and this chart has tooltip.
      If set to false, no active shape will be drawn. If set to true, active shape will be drawn with the
      props calculated internally. If passed an object, active shape will be drawn, and the internally
      calculated props will be merged with the key value pairs of the passed object. If passed a ReactElement,
      the option can be the custom active shape element. If passed a function, the function will be called to
      render a customized active shape.`,
    table: {
      type: {
        summary: 'Boolean | Object | ReactElement | Function',
        detail: `'<Scatter activeShape={false} />\n' +
      '<Scatter activeShape={{ stroke: 'red', strokeWidth: 2 }} />\n' +
      '<Scatter activeShape={<CustomizedDot />} />\n' +
      '<Scatter activeShape={renderDot} />'`,
      },
      defaultValue: true,
      category: 'Responsive',
    },
  },
  tooltipType: {
    table: {
      category: 'Responsive',
    },
  },
};

const OtherProps = {
  xAxis: {
    table: {
      category: 'Other',
    },
  },
  yAxis: {
    table: {
      category: 'Other',
    },
  },
  zAxis: {
    table: {
      category: 'Other',
    },
  },
  top: {
    table: {
      category: 'Other',
    },
  },
  left: {
    table: {
      category: 'Other',
    },
  },
};

const InternalProps = {
  points: {
    description: 'The coordinates of all the scatters.',
    table: {
      category: 'Internal',
    },
  },
  activeIndex: {
    description: "The active scatter's index in all the scatters. Active here refers to activeShape and the Tooltip.",
    table: {
      category: 'Internal',
    },
  },
};

const [surfaceWidth, surfaceHeight] = [600, 300];

const GeneralPropsForScatter = {
  dataKey: dataKeyProp,
  data: dataProp,
  xAxisId,
  yAxisId,
  zAxisId,
};

export default {
  component: Scatter,
  argTypes: {
    ...GeneralPropsForScatter,
    ...StyleProps,
    ...EventHandlers,
    ...AnimationProps,
    ...ReactiveProps,
    ...OtherProps,
    ...InternalProps,
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
          <Scatter {...args} />
          <XAxis dataKey="pv" />
          <YAxis dataKey="uv" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralPropsForScatter),
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    shape: 'square',
    line: { stroke: 'red', strokeWidth: 2 },
    lineJointType: 'monotoneX',
    lineType: 'fitting',
  },
};

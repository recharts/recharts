/* eslint-disable max-classes-per-file */
import * as React from 'react';
import { MutableRefObject, PureComponent, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import omit from 'es-toolkit/compat/omit';

import { clsx } from 'clsx';
import { selectActiveIndex } from '../state/selectors/selectors';
import { useAppSelector } from '../state/hooks';
import { Layer } from '../container/Layer';
import { Props as TrapezoidProps } from '../shape/Trapezoid';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  ImplicitLabelListType,
  LabelListFromLabelProp,
} from '../component/LabelList';
import { Global } from '../util/Global';
import { interpolate, isNumber } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  AnimationTiming,
  CartesianViewBoxRequired,
  ChartOffsetInternal,
  Coordinate,
  DataKey,
  LegendType,
  PresentationAttributesAdaptChildEvent,
  TooltipType,
} from '../util/types';
import { FunnelTrapezoid, FunnelTrapezoidProps } from '../util/FunnelUtils';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ResolvedFunnelSettings, selectFunnelTrapezoids } from '../state/selectors/funnelSelectors';
import { findAllByType } from '../util/ReactUtils';
import { Cell } from '../component/Cell';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { usePlotArea } from '../hooks';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { useAnimationId } from '../util/useAnimationId';

export interface FunnelTrapezoidItem extends TrapezoidProps {
  value?: number | string;
  payload?: any;
  isActive: boolean;
  tooltipPosition: Coordinate;
  x: number;
  y: number;
  upperWidth: number;
  lowerWidth: number;
  height: number;
  name: string;
}

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface InternalFunnelProps {
  activeShape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  className?: string;
  data?: any[];
  dataKey: DataKey<any>;
  hide?: boolean;
  id?: string;
  isAnimationActive?: boolean;
  label?: ImplicitLabelListType;
  lastShapeType?: 'triangle' | 'rectangle';
  legendType?: LegendType;
  nameKey?: DataKey<any>;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;
  reversed?: boolean;
  shape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  tooltipType?: TooltipType;
  trapezoids: ReadonlyArray<FunnelTrapezoidItem>;
}

/**
 * External props, intended for end users to fill in
 */
interface FunnelProps {
  activeShape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  className?: string;
  data?: any[];
  dataKey: DataKey<any>;
  hide?: boolean;
  id?: string;
  isAnimationActive?: boolean;
  label?: ImplicitLabelListType;
  lastShapeType?: 'triangle' | 'rectangle';
  legendType?: LegendType;
  nameKey?: DataKey<any>;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;
  reversed?: boolean;
  shape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  tooltipType?: TooltipType;
}

type FunnelSvgProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement> & TrapezoidProps, 'ref'>;

type InternalProps = FunnelSvgProps & InternalFunnelProps;

export type Props = FunnelSvgProps & FunnelProps;

type RealFunnelData = any;

type FunnelTrapezoidsProps = {
  trapezoids: ReadonlyArray<FunnelTrapezoidItem>;
  allOtherFunnelProps: Props;
};

function getTooltipEntrySettings(
  props: Props & { trapezoids: ReadonlyArray<FunnelTrapezoidItem> },
): TooltipPayloadConfiguration {
  const { dataKey, nameKey, stroke, strokeWidth, fill, name, hide, tooltipType, data } = props;
  return {
    dataDefinedOnItem: data,
    positions: props.trapezoids.map(({ tooltipPosition }) => tooltipPosition),
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      name,
      nameKey,
      hide,
      type: tooltipType,
      color: fill,
      unit: '', // Funnel does not have unit, why?
    },
  };
}

function FunnelLabelListProvider({
  showLabels,
  trapezoids,
  children,
}: {
  showLabels: boolean;
  trapezoids: ReadonlyArray<FunnelTrapezoidItem> | undefined;
  children: ReactNode;
}) {
  const labelListEntries: ReadonlyArray<CartesianLabelListEntry> | undefined = useMemo(() => {
    if (!showLabels) {
      return undefined;
    }
    return trapezoids?.map((entry): CartesianLabelListEntry => {
      const viewBox: CartesianViewBoxRequired = {
        x: entry.x,
        y: entry.y,
        // Label positions in Funnel are calculated relative to upperWidth so that's what we need to pass here as "width"
        width: entry.upperWidth,
        height: entry.height,
      };
      return {
        ...viewBox,
        value: entry.name,
        payload: entry.payload,
        parentViewBox: undefined,
        viewBox,
        fill: entry.fill,
      };
    });
  }, [showLabels, trapezoids]);

  return <CartesianLabelListContextProvider value={labelListEntries}>{children}</CartesianLabelListContextProvider>;
}

function FunnelTrapezoids(props: FunnelTrapezoidsProps) {
  const { trapezoids, allOtherFunnelProps } = props;
  const activeItemIndex = useAppSelector(state =>
    selectActiveIndex(state, 'item', state.tooltip.settings.trigger, undefined),
  );
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    shape,
    activeShape,
    ...restOfAllOtherProps
  } = allOtherFunnelProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherFunnelProps.dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherFunnelProps.dataKey);

  return (
    <>
      {trapezoids.map((entry, i) => {
        const isActiveIndex = Boolean(activeShape) && activeItemIndex === String(i);
        const trapezoidOptions = isActiveIndex ? activeShape : shape;
        const trapezoidProps: FunnelTrapezoidProps = {
          ...entry,
          option: trapezoidOptions,
          isActive: isActiveIndex,
          stroke: entry.stroke,
        };

        return (
          <Layer
            className="recharts-funnel-trapezoid"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            // @ts-expect-error the types need a bit of attention
            onMouseEnter={onMouseEnterFromContext(entry, i)}
            // @ts-expect-error the types need a bit of attention
            onMouseLeave={onMouseLeaveFromContext(entry, i)}
            // @ts-expect-error the types need a bit of attention
            onClick={onClickFromContext(entry, i)}
            key={`trapezoid-${entry?.x}-${entry?.y}-${entry?.name}-${entry?.value}`}
          >
            <FunnelTrapezoid {...trapezoidProps} />
          </Layer>
        );
      })}
    </>
  );
}

function TrapezoidsWithAnimation({
  previousTrapezoidsRef,
  props,
}: {
  props: InternalProps;
  previousTrapezoidsRef: MutableRefObject<ReadonlyArray<FunnelTrapezoidItem> | undefined>;
}) {
  const {
    trapezoids,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationEnd,
    onAnimationStart,
  } = props;
  const prevTrapezoids = previousTrapezoidsRef.current;

  const [isAnimating, setIsAnimating] = useState(false);
  const showLabels = !isAnimating;

  const animationId = useAnimationId(trapezoids, 'recharts-funnel-');

  const handleAnimationEnd = useCallback(() => {
    if (typeof onAnimationEnd === 'function') {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);

  const handleAnimationStart = useCallback(() => {
    if (typeof onAnimationStart === 'function') {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);

  return (
    <FunnelLabelListProvider showLabels={showLabels} trapezoids={trapezoids}>
      <JavascriptAnimate
        animationId={animationId}
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        key={animationId}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
      >
        {(t: number) => {
          const stepData: ReadonlyArray<FunnelTrapezoidItem> | undefined =
            t === 1
              ? trapezoids
              : trapezoids.map((entry: FunnelTrapezoidItem, index: number): FunnelTrapezoidItem => {
                  const prev = prevTrapezoids && prevTrapezoids[index];

                  if (prev) {
                    return {
                      ...entry,
                      x: interpolate(prev.x, entry.x, t),
                      y: interpolate(prev.y, entry.y, t),
                      upperWidth: interpolate(prev.upperWidth, entry.upperWidth, t),
                      lowerWidth: interpolate(prev.lowerWidth, entry.lowerWidth, t),
                      height: interpolate(prev.height, entry.height, t),
                    };
                  }

                  return {
                    ...entry,
                    x: interpolate(entry.x + entry.upperWidth / 2, entry.x, t),
                    y: interpolate(entry.y + entry.height / 2, entry.y, t),
                    upperWidth: interpolate(0, entry.upperWidth, t),
                    lowerWidth: interpolate(0, entry.lowerWidth, t),
                    height: interpolate(0, entry.height, t),
                  };
                });

          if (t > 0) {
            // eslint-disable-next-line no-param-reassign
            previousTrapezoidsRef.current = stepData;
          }
          return (
            <Layer>
              <FunnelTrapezoids trapezoids={stepData} allOtherFunnelProps={props} />
            </Layer>
          );
        }}
      </JavascriptAnimate>
      <LabelListFromLabelProp label={props.label} />
      {props.children}
    </FunnelLabelListProvider>
  );
}

function RenderTrapezoids(props: InternalProps) {
  const previousTrapezoidsRef = useRef<ReadonlyArray<FunnelTrapezoidItem> | undefined>(undefined);

  return <TrapezoidsWithAnimation props={props} previousTrapezoidsRef={previousTrapezoidsRef} />;
}

const getRealWidthHeight = (customWidth: number | string | undefined, offset: ChartOffsetInternal) => {
  const { width, height, left, right, top, bottom } = offset;
  const realHeight = height;
  let realWidth = width;

  if (isNumber(customWidth)) {
    realWidth = customWidth;
  } else if (typeof customWidth === 'string') {
    realWidth = (realWidth * parseFloat(customWidth)) / 100;
  }

  return {
    realWidth: realWidth - left - right - 50,
    realHeight: realHeight - bottom - top,
    offsetX: (width - realWidth) / 2,
    offsetY: (height - realHeight) / 2,
  };
};

export class FunnelWithState extends PureComponent<InternalProps> {
  render() {
    const { className } = this.props;

    const layerClass = clsx('recharts-trapezoids', className);

    return (
      <Layer className={layerClass}>
        <RenderTrapezoids {...this.props} />
      </Layer>
    );
  }
}

const defaultFunnelProps = {
  stroke: '#fff',
  fill: '#808080',
  legendType: 'rect',
  hide: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  nameKey: 'name',
  lastShapeType: 'triangle',
} as const satisfies Partial<Props>;

function FunnelImpl(props: Props) {
  const plotArea = usePlotArea();

  const {
    stroke,
    fill,
    legendType,
    hide,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    nameKey,
    lastShapeType,
    ...everythingElse
  } = resolveDefaultProps(props, defaultFunnelProps);

  const presentationProps = svgPropertiesNoEvents(props);
  const cells = findAllByType(props.children, Cell);

  const funnelSettings: ResolvedFunnelSettings = useMemo(
    () => ({
      dataKey: props.dataKey,
      nameKey,
      data: props.data,
      tooltipType: props.tooltipType,
      lastShapeType,
      reversed: props.reversed,
      customWidth: props.width,
      cells,
      presentationProps,
    }),
    [
      props.dataKey,
      nameKey,
      props.data,
      props.tooltipType,
      lastShapeType,
      props.reversed,
      props.width,
      cells,
      presentationProps,
    ],
  );

  const trapezoids = useAppSelector(state => selectFunnelTrapezoids(state, funnelSettings));

  if (hide || !trapezoids || !trapezoids.length || !plotArea) {
    return null;
  }
  const { height, width } = plotArea;

  return (
    <>
      <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={{ ...props, trapezoids }} />
      <FunnelWithState
        {...everythingElse}
        stroke={stroke}
        fill={fill}
        nameKey={nameKey}
        lastShapeType={lastShapeType}
        animationBegin={animationBegin}
        animationDuration={animationDuration}
        animationEasing={animationEasing}
        isAnimationActive={isAnimationActive}
        hide={hide}
        legendType={legendType}
        height={height}
        width={width}
        trapezoids={trapezoids}
      />
    </>
  );
}

export function computeFunnelTrapezoids({
  dataKey,
  nameKey,
  displayedData,
  tooltipType,
  lastShapeType,
  reversed,
  offset,
  customWidth,
}: {
  dataKey: Props['dataKey'];
  nameKey: Props['nameKey'];
  offset: ChartOffsetInternal;
  displayedData: RealFunnelData[];
  tooltipType?: TooltipType;
  lastShapeType?: Props['lastShapeType'];
  reversed?: boolean;
  customWidth: number | string | undefined;
}): ReadonlyArray<FunnelTrapezoidItem> {
  const { left, top } = offset;
  const { realHeight, realWidth, offsetX, offsetY } = getRealWidthHeight(customWidth, offset);
  const maxValue = Math.max.apply(
    null,
    displayedData.map((entry: any) => getValueByDataKey(entry, dataKey, 0)),
  );
  const len = displayedData.length;
  const rowHeight = realHeight / len;
  const parentViewBox = { x: offset.left, y: offset.top, width: offset.width, height: offset.height };

  let trapezoids: ReadonlyArray<FunnelTrapezoidItem> = displayedData.map(
    (entry: any, i: number): FunnelTrapezoidItem => {
      const rawVal = getValueByDataKey(entry, dataKey, 0);
      const name = getValueByDataKey(entry, nameKey, i);
      let val = rawVal;
      let nextVal;

      if (i !== len - 1) {
        nextVal = getValueByDataKey(displayedData[i + 1], dataKey, 0);

        if (nextVal instanceof Array) {
          [nextVal] = nextVal;
        }
      } else if (rawVal instanceof Array && rawVal.length === 2) {
        [val, nextVal] = rawVal;
      } else if (lastShapeType === 'rectangle') {
        nextVal = val;
      } else {
        nextVal = 0;
      }

      // @ts-expect-error getValueByDataKey does not validate the output type
      const x = ((maxValue - val) * realWidth) / (2 * maxValue) + top + 25 + offsetX;
      const y = rowHeight * i + left + offsetY;
      // @ts-expect-error getValueByDataKey does not validate the output type
      const upperWidth = (val / maxValue) * realWidth;
      const lowerWidth = (nextVal / maxValue) * realWidth;

      const tooltipPayload = [{ name, value: val, payload: entry, dataKey, type: tooltipType }];
      const tooltipPosition: Coordinate = {
        x: x + upperWidth / 2,
        y: y + rowHeight / 2,
      };

      return {
        x,
        y,
        width: Math.max(upperWidth, lowerWidth),
        upperWidth,
        lowerWidth,
        height: rowHeight,
        // @ts-expect-error getValueByDataKey does not validate the output type
        name,
        val,
        tooltipPayload,
        tooltipPosition,
        ...omit(entry, ['width']),
        payload: entry,
        parentViewBox,
        labelViewBox: {
          x: x + (upperWidth - lowerWidth) / 4,
          y,
          width: Math.abs(upperWidth - lowerWidth) / 2 + Math.min(upperWidth, lowerWidth),
          height: rowHeight,
        },
      };
    },
  );

  if (reversed) {
    trapezoids = trapezoids.map((entry: any, index: number) => {
      const newY = entry.y - index * rowHeight + (len - 1 - index) * rowHeight;
      return {
        ...entry,
        upperWidth: entry.lowerWidth,
        lowerWidth: entry.upperWidth,
        x: entry.x - (entry.lowerWidth - entry.upperWidth) / 2,
        y: entry.y - index * rowHeight + (len - 1 - index) * rowHeight,
        tooltipPosition: { ...entry.tooltipPosition, y: newY + rowHeight / 2 },
        labelViewBox: {
          ...entry.labelViewBox,
          y: newY,
        },
      };
    });
  }

  return trapezoids;
}

export class Funnel extends PureComponent<Props> {
  static displayName = 'Funnel';

  static defaultProps = defaultFunnelProps;

  render() {
    return <FunnelImpl {...this.props} />;
  }
}

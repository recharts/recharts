import * as React from 'react';
import { MutableRefObject, ReactElement, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
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
import { getPercentValue, interpolate } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  AnimationTiming,
  CartesianViewBoxRequired,
  ChartOffsetInternal,
  Coordinate,
  DataConsumer,
  DataKey,
  DataProvider,
  LegendType,
  PresentationAttributesAdaptChildEvent,
  TooltipType,
  TrapezoidViewBox,
} from '../util/types';
import { FunnelTrapezoid, FunnelTrapezoidProps } from '../util/FunnelUtils';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayload, TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ResolvedFunnelSettings, selectFunnelTrapezoids } from '../state/selectors/funnelSelectors';
import { findAllByType } from '../util/ReactUtils';
import { Cell } from '../component/Cell';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { usePlotArea } from '../hooks';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { useAnimationId } from '../util/useAnimationId';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { WithIdRequired } from '../util/useUniqueId';

export type FunnelTrapezoidItem = TrapezoidProps &
  TrapezoidViewBox & {
    value?: number | string;
    payload?: any;
    tooltipPosition: Coordinate;
    name: string;
    labelViewBox: TrapezoidViewBox;
    parentViewBox: CartesianViewBoxRequired;
    val: number | ReadonlyArray<number>;
    tooltipPayload: TooltipPayload;
  };

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
type InternalFunnelProps = RequiresDefaultProps<FunnelProps, typeof defaultFunnelProps> & {
  id: GraphicalItemId;
  trapezoids: ReadonlyArray<FunnelTrapezoidItem>;
};

/**
 * External props, intended for end users to fill in
 */
interface FunnelProps<DataPointType = any, DataValueType = any>
  extends DataProvider<DataPointType>, Required<DataConsumer<DataPointType, DataValueType>> {
  /**
   * This component is rendered when this graphical item is activated
   * (could be by mouse hover, touch, keyboard, programmatically).
   */
  activeShape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 400
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue ease
   */
  animationEasing?: AnimationTiming;
  className?: string;
  /**
   * Hides the whole graphical element when true.
   *
   * Hiding an element is different from removing it from the chart:
   * Hidden graphical elements are still visible in Legend,
   * and can be included in axis domain calculations,
   * depending on `includeHidden` props of your XAxis/YAxis.
   *
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`, and also to identify this element internally.
   *
   * If undefined, Recharts will generate a unique ID automatically.
   */
  id?: string;
  /**
   * If set false, animation of funnel will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | 'auto';
  label?: ImplicitLabelListType;
  /**
   * @defaultValue triangle
   */
  lastShapeType?: 'triangle' | 'rectangle';
  /**
   * The type of icon in legend.  If set to 'none', no legend item will be rendered.
   * @defaultValue rect
   */
  legendType?: LegendType;
  /**
   * Name represents each sector in the tooltip.
   * This allows you to extract the name from the data:
   *
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the name.
   *
   * @defaultValue name
   */
  nameKey?: DataKey<DataPointType, DataValueType>;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  reversed?: boolean;
  /**
   * If set a ReactElement, the shape of funnel can be customized.
   * If set a function, the function will be called to render customized shape.
   */
  shape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  tooltipType?: TooltipType;
  /**
   * The customized event handler of click on the area in this group
   */
  onClick?: (data: FunnelTrapezoidItem, index: number, e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousedown on the area in this group
   */
  onMouseDown?: (data: FunnelTrapezoidItem, index: number, e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseup on the area in this group
   */
  onMouseUp?: (data: FunnelTrapezoidItem, index: number, e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousemove on the area in this group
   */
  onMouseMove?: (data: FunnelTrapezoidItem, index: number, e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseover on the area in this group
   */
  onMouseOver?: (data: FunnelTrapezoidItem, index: number, e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseout on the area in this group
   */
  onMouseOut?: (data: FunnelTrapezoidItem, index: number, e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseenter on the area in this group
   */
  onMouseEnter?: (data: FunnelTrapezoidItem, index: number, e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseleave on the area in this group
   */
  onMouseLeave?: (data: FunnelTrapezoidItem, index: number, e: React.MouseEvent<SVGPathElement>) => void;
}

type FunnelSvgProps = Omit<PresentationAttributesAdaptChildEvent<FunnelTrapezoidItem, SVGPathElement>, 'ref'>;

type InternalProps = FunnelSvgProps & InternalFunnelProps;

export type Props<DataPointType = any, DataValueType = any> = FunnelSvgProps &
  FunnelProps<DataPointType, DataValueType>;

type RealFunnelData = unknown;

type FunnelTrapezoidsProps = {
  trapezoids: ReadonlyArray<FunnelTrapezoidItem>;
  allOtherFunnelProps: InternalProps;
};

const SetFunnelTooltipEntrySettings = React.memo(
  ({
    dataKey,
    nameKey,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    tooltipType,
    data,
    trapezoids,
    id,
  }: Pick<
    InternalProps,
    'dataKey' | 'nameKey' | 'stroke' | 'strokeWidth' | 'fill' | 'name' | 'hide' | 'tooltipType' | 'data' | 'id'
  > & {
    trapezoids: ReadonlyArray<FunnelTrapezoidItem>;
  }) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: data,
      getPosition: index => trapezoids[Number(index)]?.tooltipPosition,
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
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

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
      const viewBox: TrapezoidViewBox = entry.labelViewBox;

      return {
        ...viewBox,
        value: entry.name,
        payload: entry.payload,
        parentViewBox: entry.parentViewBox,
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

  const onMouseEnterFromContext = useMouseEnterItemDispatch(
    onMouseEnterFromProps,
    allOtherFunnelProps.dataKey,
    allOtherFunnelProps.id,
  );
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(
    onItemClickFromProps,
    allOtherFunnelProps.dataKey,
    allOtherFunnelProps.id,
  );

  return (
    <>
      {trapezoids.map((entry: FunnelTrapezoidItem, i: number) => {
        const isActiveIndex = Boolean(activeShape) && activeItemIndex === String(i);
        const trapezoidOptions = isActiveIndex ? activeShape : shape;
        const { id, ...trapezoidProps }: FunnelTrapezoidProps = {
          ...entry,
          option: trapezoidOptions,
          isActive: isActiveIndex,
          stroke: entry.stroke,
        };

        return (
          <Layer
            key={`trapezoid-${entry?.x}-${entry?.y}-${entry?.name}-${entry?.value}`}
            className="recharts-funnel-trapezoid"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            onMouseEnter={onMouseEnterFromContext(entry, i)}
            onMouseLeave={onMouseLeaveFromContext(entry, i)}
            onClick={onClickFromContext(entry, i)}
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
  const { width, height, left, top } = offset;

  const realWidth: number = getPercentValue(customWidth, width, width);

  return {
    realWidth,
    realHeight: height,
    offsetX: left,
    offsetY: top,
  };
};

export const defaultFunnelProps = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  fill: '#808080',
  hide: false,
  isAnimationActive: 'auto',
  lastShapeType: 'triangle',
  legendType: 'rect',
  nameKey: 'name',
  reversed: false,
  stroke: '#fff',
} as const satisfies Partial<Props>;

function FunnelImpl(props: WithIdRequired<RequiresDefaultProps<Props, typeof defaultFunnelProps>>) {
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
    id,
    ...everythingElse
  } = props;

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
      id,
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
      id,
    ],
  );

  const trapezoids = useAppSelector(state => selectFunnelTrapezoids(state, funnelSettings));

  if (hide || !trapezoids || !trapezoids.length || !plotArea) {
    return null;
  }
  const { height, width } = plotArea;

  const layerClass = clsx('recharts-trapezoids', props.className);

  return (
    <>
      <SetFunnelTooltipEntrySettings
        dataKey={props.dataKey}
        nameKey={props.nameKey}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        name={props.name}
        hide={props.hide}
        tooltipType={props.tooltipType}
        data={props.data}
        trapezoids={trapezoids}
        id={id}
      />
      <Layer className={layerClass}>
        <RenderTrapezoids
          {...everythingElse}
          id={id}
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
      </Layer>
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
  graphicalItemId,
}: {
  dataKey: Props['dataKey'];
  nameKey: Props['nameKey'];
  offset: ChartOffsetInternal;
  displayedData: ReadonlyArray<RealFunnelData>;
  tooltipType?: TooltipType;
  lastShapeType?: Props['lastShapeType'];
  reversed?: boolean;
  customWidth: number | string | undefined;
  graphicalItemId: GraphicalItemId;
}): ReadonlyArray<FunnelTrapezoidItem> {
  const { realHeight, realWidth, offsetX, offsetY } = getRealWidthHeight(customWidth, offset);
  const values = displayedData.map((entry: unknown) => {
    const val = getValueByDataKey(entry, dataKey, 0);
    return typeof val === 'number' ? val : 0;
  });
  const maxValue = Math.max.apply(null, values);
  const len = displayedData.length;
  const rowHeight = realHeight / len;
  const parentViewBox = { x: offset.left, y: offset.top, width: offset.width, height: offset.height };

  let trapezoids: ReadonlyArray<FunnelTrapezoidItem> = displayedData.map(
    (entry: unknown, i: number): FunnelTrapezoidItem => {
      // getValueByDataKey does not validate the output type
      const rawVal: number | ReadonlyArray<number> = getValueByDataKey(entry, dataKey, 0);
      const name: string = String(getValueByDataKey(entry, nameKey, i));
      let val = rawVal;
      let nextVal: number | ReadonlyArray<number> | undefined;

      if (i !== len - 1) {
        const nextDataValue = getValueByDataKey(displayedData[i + 1], dataKey, 0);
        if (typeof nextDataValue === 'number') {
          nextVal = nextDataValue;
        } else if (Array.isArray(nextDataValue)) {
          const [first, second] = nextDataValue;
          if (typeof first === 'number') {
            val = first;
          }
          if (typeof second === 'number') {
            nextVal = second;
          }
        }
      } else if (rawVal instanceof Array && rawVal.length === 2) {
        const [first, second] = rawVal;
        if (typeof first === 'number') {
          val = first;
        }
        if (typeof second === 'number') {
          nextVal = second;
        }
      } else if (lastShapeType === 'rectangle') {
        nextVal = val;
      } else {
        nextVal = 0;
      }

      // @ts-expect-error this is a problem if we have ranged values because `val` can be an array
      const x = ((maxValue - val) * realWidth) / (2 * maxValue) + offsetX;
      const y = rowHeight * i + offsetY;
      // @ts-expect-error getValueByDataKey does not validate the output type
      const upperWidth = (val / maxValue) * realWidth;
      // @ts-expect-error nextVal could be an array
      const lowerWidth = (nextVal / maxValue) * realWidth;

      const tooltipPayload: TooltipPayload = [
        { name, value: val, payload: entry, dataKey, type: tooltipType, graphicalItemId },
      ];
      const tooltipPosition: Coordinate = {
        x: x + upperWidth / 2,
        y: y + rowHeight / 2,
      };

      const trapezoidViewBox: TrapezoidViewBox = {
        x,
        y,
        upperWidth,
        lowerWidth,
        width: Math.max(upperWidth, lowerWidth),
        height: rowHeight,
      };

      return {
        ...trapezoidViewBox,
        name,
        val,
        tooltipPayload,
        tooltipPosition,
        ...(entry != null && typeof entry === 'object' ? omit(entry, ['width']) : {}),
        payload: entry,
        parentViewBox,
        labelViewBox: trapezoidViewBox,
      };
    },
  );

  if (reversed) {
    trapezoids = trapezoids.map((entry: FunnelTrapezoidItem, index: number): FunnelTrapezoidItem => {
      const reversedViewBox: TrapezoidViewBox = {
        x: entry.x - (entry.lowerWidth - entry.upperWidth) / 2,
        y: entry.y - index * rowHeight + (len - 1 - index) * rowHeight,
        upperWidth: entry.lowerWidth,
        lowerWidth: entry.upperWidth,
        width: Math.max(entry.lowerWidth, entry.upperWidth),
        height: rowHeight,
      };

      return {
        ...entry,
        ...reversedViewBox,
        tooltipPosition: {
          ...entry.tooltipPosition,
          y: entry.y - index * rowHeight + (len - 1 - index) * rowHeight + rowHeight / 2,
        },
        labelViewBox: reversedViewBox,
      };
    });
  }

  return trapezoids;
}

/**
 * @consumes CartesianViewBoxContext
 * @provides LabelListContext
 * @provides CellReader
 */
function FunnelFn(outsideProps: Props) {
  const { id: externalId, ...props } = resolveDefaultProps(outsideProps, defaultFunnelProps);
  return (
    <RegisterGraphicalItemId id={externalId} type="funnel">
      {id => <FunnelImpl {...props} id={id} />}
    </RegisterGraphicalItemId>
  );
}

export const Funnel = FunnelFn as {
  <DataPointType = any, DataValueType = any>(outsideProps: Props<DataPointType, DataValueType>): ReactElement;
  (outsideProps: Props<any, any>): ReactElement;
};
// @ts-expect-error we need to set the displayName for debugging purposes
Funnel.displayName = 'Funnel';

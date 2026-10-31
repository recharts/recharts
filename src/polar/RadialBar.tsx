import * as React from 'react';
import omit from 'es-toolkit/compat/omit';
import { MutableRefObject, PureComponent, ReactElement, ReactNode, useRef } from 'react';
import { clsx } from 'clsx';

import { Series } from 'victory-vendor/d3-shape';
import {
  defaultRadialBarShape,
  parseCornerRadius,
  RadialBarSector,
  RadialBarSectorProps,
} from '../util/RadialBarUtils';
import { Props as SectorProps } from '../shape/Sector';
import { Layer } from '../container/Layer';
import { findAllByType } from '../util/ReactUtils';
import {
  ImplicitLabelListType,
  LabelListFromLabelProp,
  PolarLabelListContextProvider,
  PolarLabelListEntry,
} from '../component/LabelList';
import { Cell } from '../component/Cell';
import { interpolate, mathSign, noop } from '../util/DataUtils';
import {
  BarPositionPosition,
  getCateCoordinateOfBar,
  getNormalizedStackId,
  getTooltipNameProp,
  getValueByDataKey,
  truncateByDomain,
} from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  EasingInput,
  ValueAxisDataConsumer,
  DataKey,
  LayoutType,
  LegendType,
  PolarViewBoxRequired,
  PresentationAttributesAdaptChildEvent,
  ShapeAnimationProps,
  TickItem,
  TooltipType,
  PolarLayout,
} from '../util/types';
import {
  TooltipTriggerInfo,
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { Formatter } from '../component/DefaultTooltipContent';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { ChartData } from '../state/chartDataSlice';
import { selectRadialBarLegendPayload, selectRadialBarSectors } from '../state/selectors/radialBarSelectors';
import { useAppSelector } from '../state/hooks';
import { selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetPolarLegendPayload } from '../state/SetLegendPayload';
import { AnimatedItems, AnimationInterpolateFn, useAnimationCallbacks } from '../animation/AnimatedItems';
import { AnimationMatchByProp, matchAppend } from '../animation/matchBy';
import { AxisId } from '../state/cartesianAxisSlice';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { RadialBarSettings } from '../state/types/RadialBarSettings';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { svgPropertiesNoEvents, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { WithIdRequired } from '../util/useUniqueId';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { getZIndexFromUnknown } from '../zIndex/getZIndexFromUnknown';
import { usePolarChartLayout } from '../context/chartLayoutContext';
import { ColorStyles2D, withFillColor } from '../theme/themeFill';
import { RechartsFill } from '../fill/RechartsFill';
import {
  EntryFillDefinitions,
  FillObjectDefinition,
  getEntryFillId,
  getEntryFillObject,
  getFillUrl,
  getSeriesFillId,
  hasEntryFillObjects,
  readEntryFill,
  splitFill,
  withEntryFillColor,
} from '../fill/fillDefinitions';
import { useBackwardsCompatibleTheme } from '../theme/useBackwardsCompatibleTheme';
import { useGraphicalItemIdentity, useGraphicalItemThemeFill } from '../theme/useGraphicalItemIdentity';
import { useEffectiveDataKey } from '../util/useEffectiveDataKey';
import {
  getEntryColor,
  getEntryShapeColors,
  getEntryStyleOverrides,
  omitEntrySvgProps,
  UnthemedColors,
  useUnthemedColors,
} from '../theme/dataEntryStyles';
import { getActiveStyleOverrides, useThemedActiveStyles } from '../theme/activeStyles';
import {
  DataLabelColors,
  DataLabelColorsContextProvider,
  DataLabelThemeContextProvider,
  useSeriesLabelThemeResolver,
} from '../theme/labelTheme';

const STABLE_EMPTY_ARRAY: readonly RadialBarDataItem[] = [];

export type RadialBarDataItem = Omit<SectorProps, 'fill'> &
  PolarViewBoxRequired &
  TooltipTriggerInfo & {
    /**
     * The color of the entry. A fill object in the props paints the entry with its definition.
     */
    fill?: string;
    value?: any;
    payload?: any;
    background?: Omit<SectorProps, 'fill'> & { fill?: string };
  };

type RadialBarBackground = boolean | (ActiveShape<SectorProps> & ZIndexable);

type RadialBarSectorsProps = ShapeAnimationProps & {
  sectors: ReadonlyArray<RadialBarDataItem>;
  allOtherRadialBarProps: InternalProps;
  showLabels: boolean;
};

function RadialBarLabelListProvider({
  showLabels,
  sectors,
  fill,
  stroke,
  unthemedColors,
  children,
}: {
  showLabels: boolean;
  sectors: ReadonlyArray<RadialBarDataItem>;
  fill: string | undefined;
  stroke: string | undefined;
  unthemedColors: UnthemedColors | undefined;
  children: ReactNode;
}) {
  // The same color as in Tooltip and Legend.
  const labelColors: DataLabelColors = React.useMemo(
    () => ({
      hasFilledShapes: true,
      getShapeColors: (index: number) => getEntryShapeColors(sectors[index], fill, stroke, unthemedColors),
    }),
    [sectors, fill, stroke, unthemedColors],
  );
  const labelListEntries: ReadonlyArray<PolarLabelListEntry> = sectors.map(
    (sector: RadialBarDataItem): PolarLabelListEntry => ({
      value: sector.value,
      payload: sector.payload,
      parentViewBox: undefined,
      clockWise: false,
      viewBox: {
        cx: sector.cx,
        cy: sector.cy,
        innerRadius: sector.innerRadius,
        outerRadius: sector.outerRadius,
        startAngle: sector.startAngle,
        endAngle: sector.endAngle,
        clockWise: false,
      },
      fill: sector.fill,
    }),
  );

  return (
    <PolarLabelListContextProvider value={showLabels ? labelListEntries : undefined}>
      <DataLabelColorsContextProvider value={labelColors}>{children}</DataLabelColorsContextProvider>
    </PolarLabelListContextProvider>
  );
}

function RadialBarSectors({
  sectors,
  allOtherRadialBarProps,
  showLabels,
  animationElapsedTime,
  isAnimating,
  isEntrance,
}: RadialBarSectorsProps) {
  const { shape, activeShape, cornerRadius, id, unthemedColors, themedActiveStyles, fillObject, ...others } =
    allOtherRadialBarProps;
  const svgProps = svgPropertiesNoEvents(others);
  // `fill` stays the base color for labels; the shapes paint with the definition
  const baseProps = fillObject == null ? svgProps : { ...svgProps, fill: getFillUrl(getSeriesFillId(id)) };

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = allOtherRadialBarProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherRadialBarProps.dataKey, id);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherRadialBarProps.dataKey, id);

  if (sectors == null) {
    return null;
  }

  return (
    <RadialBarLabelListProvider
      showLabels={showLabels}
      sectors={sectors}
      fill={others.fill}
      stroke={others.stroke}
      unthemedColors={unthemedColors}
    >
      {sectors.map((entry: RadialBarDataItem, i: number) => {
        const isActive: boolean = Boolean(activeShape && activeIndex === String(i));
        const onMouseEnter = onMouseEnterFromContext(entry, i);
        const onMouseLeave = onMouseLeaveFromContext(entry, i);
        const onClick = onClickFromContext(entry, i);

        const radialBarSectorProps: React.ComponentProps<typeof RadialBarSector> = {
          ...baseProps,
          cornerRadius: parseCornerRadius(cornerRadius),
          ...getEntryStyleOverrides(entry, unthemedColors),
          ...entry,
          // a data entry with its own fill object paints with its own definition
          ...(readEntryFill(entry.payload).fillObject == null
            ? undefined
            : { fill: getFillUrl(getEntryFillId(id, i)) }),
          ...(isActive ? getActiveStyleOverrides(activeShape, themedActiveStyles, entry) : undefined),
          ...adaptEventsOfChild(restOfAllOtherProps, entry, i),
          onMouseEnter,
          onMouseLeave,
          onClick,
          className: clsx('recharts-radial-bar-sector', entry.className),
          forceCornerRadius: others.forceCornerRadius,
          cornerIsExternal: others.cornerIsExternal,
          animationElapsedTime,
          isAnimating,
          isEntrance,
          isActive,
          option: isActive && activeShape != null ? activeShape : shape,
          index: i,
        };

        if (isActive) {
          return (
            <ZIndexLayer
              zIndex={DefaultZIndexes.activeBar}
              key={`sector-${entry.cx}-${entry.cy}-${entry.innerRadius}-${entry.outerRadius}-${entry.startAngle}-${entry.endAngle}-${i}`}
            >
              <RadialBarSector {...radialBarSectorProps} />
            </ZIndexLayer>
          );
        }

        return (
          <RadialBarSector
            key={`sector-${entry.cx}-${entry.cy}-${entry.innerRadius}-${entry.outerRadius}-${entry.startAngle}-${entry.endAngle}-${i}`}
            {...radialBarSectorProps}
          />
        );
      })}
      <LabelListFromLabelProp label={allOtherRadialBarProps.label} />
      {allOtherRadialBarProps.children}
    </RadialBarLabelListProvider>
  );
}

const defaultRadialBarAnimateItems: AnimationInterpolateFn<RadialBarDataItem, PolarLayout> = (
  items,
  animationElapsedTime,
) => {
  if (items == null) return [];
  if (animationElapsedTime === 1) {
    return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
  }
  return items.flatMap(item => {
    if (item.status === 'removed') return [];
    if (item.status === 'matched') {
      return [
        {
          ...item.next,
          startAngle: interpolate(item.prev.startAngle, item.next.startAngle, animationElapsedTime),
          endAngle: interpolate(item.prev.endAngle, item.next.endAngle, animationElapsedTime),
        },
      ];
    }
    // added
    return [
      {
        ...item.next,
        endAngle: interpolate(item.next.startAngle, item.next.endAngle, animationElapsedTime),
      },
    ];
  });
};

function SectorsWithAnimation({
  props,
  previousSectorsRef,
}: {
  props: InternalProps;
  previousSectorsRef: MutableRefObject<ReadonlyArray<RadialBarDataItem> | null>;
}) {
  const {
    sectors,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationStart,
    onAnimationEnd,
  } = props;

  const { isAnimating, handleAnimationStart, handleAnimationEnd } = useAnimationCallbacks(
    onAnimationStart,
    onAnimationEnd,
  );

  const layout = usePolarChartLayout();

  if (layout == null) return null;

  return (
    <AnimatedItems
      animationInput={props}
      animationIdPrefix="recharts-radialbar-"
      items={sectors}
      previousItemsRef={previousSectorsRef}
      isAnimationActive={isAnimationActive}
      animationBegin={animationBegin}
      animationDuration={animationDuration}
      animationEasing={animationEasing}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      animationInterpolateFn={props.animationInterpolateFn}
      animationMatchBy={props.animationMatchBy}
      layout={layout}
    >
      {(stepData, animationElapsedTime, isEntrance) => (
        <RadialBarSectors
          sectors={stepData}
          allOtherRadialBarProps={props}
          showLabels={!isAnimating}
          animationElapsedTime={animationElapsedTime}
          isAnimating={isAnimating || animationElapsedTime < 1}
          isEntrance={isEntrance}
        />
      )}
    </AnimatedItems>
  );
}

function RenderSectors(props: InternalProps) {
  const previousSectorsRef = useRef<ReadonlyArray<RadialBarDataItem> | null>(null);

  return <SectorsWithAnimation props={props} previousSectorsRef={previousSectorsRef} />;
}

/**
 * The type is exported only so that TypeScript can name it in the declaration files of projects
 * that wrap Recharts components. It is not part of the public API and may change in any release.
 *
 * @internal
 */
export interface InternalRadialBarProps<DataPointType = any, DataValueType = any>
  extends ValueAxisDataConsumer<DataPointType, DataValueType>, ZIndexable {
  /**
   * The fill of the sectors. Either a color string, or a {@link RechartsFill} object with an SVG definition,
   * such as a pattern or a gradient.
   *
   * Each sector can have its own fill too: set `fill` in its data entry, to a color or to a fill object.
   *
   * With a fill object, Recharts renders the definition with a unique ID, in the chart and in the Legend icons.
   * Tooltip and labels use the solid `color` of the fill object.
   * If the fill object has no `color`, the sectors keep the theme colors and the definition gets the theme color.
   *
   * @example <RadialBar dataKey="uv" fill={{ definition: pattern(patterns.diagonal) }} />
   */
  fill?: string | RechartsFill;
  activeShape?: ActiveShape<RadialBarSectorProps, SVGPathElement>;
  /**
   * @defaultValue 0
   */
  angleAxisId?: AxisId;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
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
  animationEasing?: EasingInput;
  /**
   * Custom animation function for interpolating data items.
   * When provided, this replaces the default animation interpolation.
   *
   * @param prevItems The items from the previous animation frame, or null on first render
   * @param nextItems The target items to animate towards
   * @param animationElapsedTime A normalized time value (0 = start, 1 = end)
   * @returns The interpolated items at time animationElapsedTime
   *
   * @since 3.9
   * @see {@link https://recharts.github.io/en-US/guide/animations/ Animations guide}
   */
  animationInterpolateFn?: AnimationInterpolateFn<RadialBarDataItem, PolarLayout>;
  /**
   * Strategy for matching previous items to next items during animation.
   * Determines how Recharts pairs old data points with new data points
   * to create smooth transitions.
   *
   * - `matchAppend` (default): match sequentially by index and treat newly appended items as new
   * - `matchByIndex`: match by array position with proportional stretching
   * - `matchByDataKey('someKey')`: match by a data key from the payload
   * - Custom function `(item, index) => key`: match by the returned key
   *
   * @defaultValue append
   * @see matchByIndex
   * @see matchByDataKey
   * @see matchAppend
   */
  animationMatchBy?: AnimationMatchByProp<RadialBarDataItem>;
  /**
   * Renders a background for each bar. Options:
   *  - `false`: no background;
   *  - `true`: renders default background;
   *  - `object`: the props of background rectangle;
   *  - `ReactElement`: a custom background element;
   *  - `function`: a render function of custom background.
   *
   * @defaultValue false
   */
  background?: RadialBarBackground;
  /**
   * The width or height of each bar. If the barSize is not specified, the size of the bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.
   */
  barSize?: number;
  className?: string;
  /**
   * @defaultValue false
   */
  cornerIsExternal?: boolean;
  /**
   * @defaultValue 0
   */
  cornerRadius?: string | number;
  /**
   * Calculated radial bar sectors
   */
  sectors: ReadonlyArray<RadialBarDataItem>;
  /**
   * @defaultValue false
   */
  forceCornerRadius?: boolean;
  /**
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * If set false, animation of radial bars will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | 'auto';
  /**
   * Renders one label for each data point. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.
   *   HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   */
  label?: ImplicitLabelListType;
  /**
   * The type of icon in legend.  If set to 'none', no legend item will be rendered.
   * @defaultValue rect
   */
  legendType?: LegendType;
  maxBarSize?: number;
  /**
   * The minimum angle of each non-zero bar.
   * @defaultValue 0
   */
  minAngle?: number;
  /**
   * @defaultValue 0
   */
  minPointSize?: number;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  /**
   * The customized event handler of click in this chart.
   */
  onClick?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseover in this chart.
   */
  onMouseOver?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseout in this chart.
   */
  onMouseOut?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  onTouchStart?: (data: RadialBarDataItem, index: number, e: React.TouchEvent<SVGGraphicsElement>) => void;
  onTouchMove?: (data: RadialBarDataItem, index: number, e: React.TouchEvent<SVGGraphicsElement>) => void;
  onTouchEnd?: (data: RadialBarDataItem, index: number, e: React.TouchEvent<SVGGraphicsElement>) => void;
  /**
   * @defaultValue 0
   */
  radiusAxisId?: AxisId;
  /**
   * If set a ReactElement, the shape of radial bar sectors can be customized.
   * If set a function, the function will be called to render customized shape.
   * During animations, the function shape also receives `animationElapsedTime`, `isAnimating`, and `isEntrance`.
   * By default, renders a sector.
   */
  shape?: ActiveShape<RadialBarSectorProps, SVGPathElement>;
  stackId?: string | number;
  tooltipType?: TooltipType;
  /**
   * Formats the value displayed in the tooltip for this RadialBar.
   * When set, takes precedence over the `formatter` prop on the Tooltip component.
   */
  formatter?: Formatter;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 300
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}

export type RadialBarProps<DataPointType = any, DataValueType = any> = Omit<
  PresentationAttributesAdaptChildEvent<RadialBarDataItem, SVGElement>,
  'ref' | keyof InternalRadialBarProps<DataPointType, DataValueType>
> &
  Omit<InternalRadialBarProps<DataPointType, DataValueType>, 'sectors'>;

/**
 * Props after the fill object is split off: `fill` is the base color.
 */
type StringFillProps<DataPointType, DataValueType> = Omit<RadialBarProps<DataPointType, DataValueType>, 'fill'> & {
  fill?: string;
};

type ThemeInternalProps = {
  /**
   * The fill object of the RadialBar, from props or from the theme.
   * Sectors without a fill of their own paint with it.
   */
  fillObject?: RechartsFill;
  /**
   * Explicit style props without theme contributions.
   * Applied to data entries that define their own colors, so that they ignore the theme colors.
   * Undefined when there is no active theme.
   */
  unthemedColors?: UnthemedColors;
  /**
   * Theme styles of the active shape, without the ones that explicit props override.
   * Undefined when there is no active theme, or when the theme has no active styles.
   */
  themedActiveStyles?: ColorStyles2D;
};

type InternalProps = WithIdRequired<PropsWithDefaults> & Pick<InternalRadialBarProps, 'sectors'> & ThemeInternalProps;

/**
 * RadialBar has one legend item per data entry, so each item shows the color its own sector renders with.
 */
function SetRadialBarPayloadLegend({
  legendType,
  fill,
  stroke,
  unthemedColors,
  fillObject,
  children,
}: Pick<StringFillProps<unknown, unknown>, 'legendType' | 'fill' | 'stroke' | 'children'> & {
  unthemedColors: UnthemedColors | undefined;
  fillObject: RechartsFill | undefined;
}) {
  const cells = React.useMemo(() => findAllByType(children, Cell), [children]);
  const legendPayload = useAppSelector(state => selectRadialBarLegendPayload(state, legendType));
  const coloredLegendPayload = legendPayload?.map((entry, index) => {
    const payload = { ...entry.payload, ...cells[index]?.props };
    return {
      ...entry,
      color: getEntryColor(payload, fill, stroke, unthemedColors),
      fill: getEntryFillObject(payload, fillObject),
    };
  });
  return <SetPolarLegendPayload legendPayload={coloredLegendPayload ?? []} />;
}

const SetRadialBarTooltipEntrySettings = React.memo(
  ({
    dataKey,
    sectors,
    stroke,
    strokeWidth,
    name,
    hide,
    fill,
    tooltipType,
    formatter,
    id,
    unthemedColors,
  }: Pick<
    InternalProps,
    'dataKey' | 'sectors' | 'stroke' | 'strokeWidth' | 'name' | 'hide' | 'fill' | 'tooltipType' | 'formatter' | 'id'
  > & { unthemedColors: UnthemedColors | undefined }) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: sectors,
      getPosition: noop,
      // The tooltip data are the sectors, so the entry here already includes the props of its Cell.
      getEntryColor: sector => getEntryColor(sector, fill, stroke, unthemedColors),
      settings: {
        graphicalItemId: id,
        stroke,
        strokeWidth,
        fill,
        nameKey: undefined, // RadialBar does not have nameKey, why?
        dataKey,
        name: getTooltipNameProp(name, dataKey),
        hide,
        type: tooltipType,
        color: fill,
        unit: '', // Why does RadialBar not support unit?
        formatter,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

const defaultLegacyBarBackgroundProps: ColorStyles2D = {
  fill: '#eee',
};

function RadialBarBackgroundSectors({
  sectors,
  allOtherRadialBarProps,
}: {
  sectors?: ReadonlyArray<RadialBarDataItem>;
  allOtherRadialBarProps: InternalProps;
}) {
  const { cornerRadius, background: backgroundFromProps } = allOtherRadialBarProps;
  const backgroundProps = svgPropertiesNoEventsFromUnknown(backgroundFromProps);
  const backgroundThemeProps = useBackwardsCompatibleTheme(
    theme => withFillColor(theme.barBackground),
    backgroundProps ?? {},
    defaultLegacyBarBackgroundProps,
  );

  if (sectors == null) {
    return null;
  }

  return (
    <ZIndexLayer zIndex={getZIndexFromUnknown(backgroundFromProps, DefaultZIndexes.barBackground)}>
      {sectors.map((entry, i) => {
        const { value, background, ...rest } = entry;

        if (!background) {
          return null;
        }

        // @ts-expect-error backgroundProps is contributing unknown props
        const props: React.ComponentProps<typeof RadialBarSector> = {
          cornerRadius: parseCornerRadius(cornerRadius),
          ...omitEntrySvgProps(rest),
          ...backgroundThemeProps,
          ...background,
          ...backgroundProps,
          ...adaptEventsOfChild(allOtherRadialBarProps, entry, i),
          index: i,
          className: clsx(
            'recharts-radial-bar-background-sector',
            backgroundProps?.className == null ? undefined : String(backgroundProps.className),
          ),
          // A custom element or function draws the background; `true` and objects draw the default sector
          option:
            React.isValidElement(backgroundFromProps) || typeof backgroundFromProps === 'function'
              ? backgroundFromProps
              : background,
          isActive: false,
        };

        return (
          <RadialBarSector
            key={`background-${rest.cx}-${rest.cy}-${rest.innerRadius}-${rest.outerRadius}-${rest.startAngle}-${rest.endAngle}-${i}`}
            {...props}
          />
        );
      })}
    </ZIndexLayer>
  );
}

class RadialBarWithState extends PureComponent<InternalProps> {
  renderBackground(sectors?: ReadonlyArray<RadialBarDataItem>) {
    return <RadialBarBackgroundSectors sectors={sectors} allOtherRadialBarProps={this.props} />;
  }

  render() {
    const { hide, sectors, className, background, fillObject, id, fill, stroke, unthemedColors } = this.props;

    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-area', className);
    const hasEntryFills = hasEntryFillObjects(sectors.map(sector => sector.payload));

    return (
      <ZIndexLayer zIndex={this.props.zIndex}>
        <Layer className={layerClass}>
          {(fillObject != null || hasEntryFills) && (
            <defs>
              {fillObject != null && (
                <FillObjectDefinition id={getSeriesFillId(id)} fillObject={fillObject} color={fill} />
              )}
              {hasEntryFills && (
                <EntryFillDefinitions
                  id={id}
                  entries={sectors.map((sector, index) => ({
                    index,
                    payload: sector.payload,
                    color: getEntryShapeColors(sector.payload, fill, stroke, unthemedColors).fill,
                  }))}
                />
              )}
            </defs>
          )}
          {background && <Layer className="recharts-radial-bar-background">{this.renderBackground(sectors)}</Layer>}
          <Layer className="recharts-radial-bar-sectors">
            <RenderSectors {...this.props} />
          </Layer>
        </Layer>
      </ZIndexLayer>
    );
  }
}

function RadialBarImpl(props: WithIdRequired<PropsWithDefaults> & ThemeInternalProps) {
  const cells = React.useMemo(() => findAllByType(props.children, Cell), [props.children]);

  const radialBarSettings: RadialBarSettings = React.useMemo(
    () => ({
      data: undefined,
      hide: false,
      id: props.id,
      dataKey: props.dataKey,
      minAngle: props.minAngle,
      minPointSize: props.minPointSize,
      stackId: getNormalizedStackId(props.stackId),
      maxBarSize: props.maxBarSize,
      barSize: props.barSize,
      type: 'radialBar',
      angleAxisId: props.angleAxisId,
      radiusAxisId: props.radiusAxisId,
    }),
    [
      props.id,
      props.dataKey,
      props.minAngle,
      props.minPointSize,
      props.stackId,
      props.maxBarSize,
      props.barSize,
      props.angleAxisId,
      props.radiusAxisId,
    ],
  );
  const sectors: ReadonlyArray<RadialBarDataItem> =
    useAppSelector(state =>
      selectRadialBarSectors(state, props.radiusAxisId, props.angleAxisId, radialBarSettings, cells),
    ) ?? STABLE_EMPTY_ARRAY;
  return (
    <>
      <SetRadialBarTooltipEntrySettings
        dataKey={props.dataKey}
        sectors={sectors}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        name={props.name}
        hide={props.hide}
        fill={props.fill}
        tooltipType={props.tooltipType}
        formatter={props.formatter}
        id={props.id}
        unthemedColors={props.unthemedColors}
      />
      <RadialBarWithState {...props} sectors={sectors} />
    </>
  );
}

export const defaultRadialBarProps = {
  angleAxisId: 0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  animationMatchBy: matchAppend,
  animationInterpolateFn: defaultRadialBarAnimateItems,
  background: false,
  cornerIsExternal: false,
  cornerRadius: 0,
  forceCornerRadius: false,
  hide: false,
  isAnimationActive: 'auto',
  label: false,
  legendType: 'rect',
  minAngle: 0,
  minPointSize: 0,
  radiusAxisId: 0,
  shape: defaultRadialBarShape,
  zIndex: DefaultZIndexes.bar,
} as const satisfies Partial<RadialBarProps>;

type PropsWithDefaults<DataPointType = any, DataValueType = any> = RequiresDefaultProps<
  StringFillProps<DataPointType, DataValueType>,
  typeof defaultRadialBarProps
>;

export function computeRadialBarDataItems({
  displayedData,
  stackedData,
  dataStartIndex,
  stackedDomain,
  dataKey,
  baseValue,
  layout,
  radiusAxis,
  radiusAxisTicks,
  bandSize,
  pos,
  angleAxis,
  minAngle,
  minPointSize,
  cx,
  cy,
  angleAxisTicks,
  cells,
  startAngle: rootStartAngle,
  endAngle: rootEndAngle,
}: {
  displayedData: ChartData;
  stackedData: Series<Record<number, number>, DataKey<any>> | undefined;
  dataStartIndex: number;
  stackedDomain: ReadonlyArray<unknown> | null;
  dataKey: DataKey<any> | undefined;
  baseValue: number | unknown;
  layout: LayoutType;
  radiusAxis: BaseAxisWithScale;
  radiusAxisTicks: ReadonlyArray<TickItem> | undefined;
  bandSize: number;
  pos: BarPositionPosition;
  angleAxis: BaseAxisWithScale;
  minAngle: number;
  minPointSize: number;
  cx: number;
  cy: number;
  angleAxisTicks: ReadonlyArray<TickItem> | undefined;
  cells: ReadonlyArray<ReactElement> | undefined;
  startAngle: number;
  endAngle: number;
}): ReadonlyArray<RadialBarDataItem> {
  if (angleAxisTicks == null || radiusAxisTicks == null) {
    return STABLE_EMPTY_ARRAY;
  }

  return (displayedData ?? []).map((entry: unknown, index: number) => {
    /*
     * `id` from a data entry is never spread on rendered elements to avoid duplicate DOM ids.
     * The raw entry, id included, stays available through `payload`.
     */
    const entryWithoutId = entry != null && typeof entry === 'object' ? omit(entry, ['id']) : entry;
    let value,
      innerRadius: number | null | undefined,
      outerRadius: number | undefined,
      startAngle: number | null,
      endAngle: number,
      backgroundSector;

    if (stackedData) {
      // @ts-expect-error truncateByDomain expects only numerical domain, but it can received categorical domain too
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'radial') {
      startAngle = angleAxis.scale.map(value[0]) ?? rootStartAngle;
      const valueAngle = angleAxis.scale.map(value[1]);
      endAngle = valueAngle ?? startAngle;
      innerRadius = getCateCoordinateOfBar({
        axis: radiusAxis,
        ticks: radiusAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      if (innerRadius != null && endAngle != null && startAngle != null) {
        outerRadius = innerRadius + pos.size;
        let deltaAngle = endAngle - startAngle;

        if (valueAngle != null && Math.abs(minPointSize) > 0 && Math.abs(deltaAngle) < Math.abs(minPointSize)) {
          const delta = mathSign(deltaAngle || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaAngle));

          endAngle += delta;
          deltaAngle = endAngle - startAngle;
        }

        // Zero-value bars are excluded so a truly empty bar never gets an artificial sliver.
        // Negative minAngle is normalized the same way Pie normalizes pieSettings.minAngle.
        // Note: like minPointSize above, this expands each bar independently, so a stacked
        // bar's expansion can overlap into its neighbor's range. That is an existing
        // limitation shared with minPointSize, not something new to minAngle.
        if (Math.abs(minAngle) > 0 && deltaAngle !== 0 && Math.abs(deltaAngle) < Math.abs(minAngle)) {
          const delta = mathSign(deltaAngle) * (Math.abs(minAngle) - Math.abs(deltaAngle));
          endAngle += delta;
        }
        backgroundSector = {
          background: {
            cx,
            cy,
            innerRadius,
            outerRadius,
            startAngle: rootStartAngle,
            endAngle: rootEndAngle,
          },
        };
      }
    } else {
      innerRadius = radiusAxis.scale.map(value[0]);
      outerRadius = radiusAxis.scale.map(value[1]);
      startAngle = getCateCoordinateOfBar({
        axis: angleAxis,
        ticks: angleAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      if (innerRadius != null && outerRadius != null && startAngle != null) {
        endAngle = startAngle + pos.size;
        const deltaRadius = outerRadius - innerRadius;

        if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
          const delta = mathSign(deltaRadius || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaRadius));
          outerRadius += delta;
        }
      }
    }

    return withEntryFillColor<RadialBarDataItem>(
      {
        // @ts-expect-error can't spread unknown
        ...entryWithoutId,
        ...backgroundSector,
        payload: entry,
        value: stackedData ? value : value[1],
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        // @ts-expect-error endAngle is used before assigned (?)
        endAngle,
        ...(cells && cells[index] && cells[index].props),
      } satisfies RadialBarDataItem,
      entry,
    );
  });
}

/**
 * @consumes PolarChartContext
 * @provides LabelListContext
 * @provides CellReader
 */
export function RadialBar<DataPointType = any, DataValueType = any>(
  propsWithFillObject: RadialBarProps<DataPointType, DataValueType>,
) {
  const { color: fillColor, fillObject } = splitFill(propsWithFillObject.fill);
  // From here on, `fill` is the base color
  const outsideProps: StringFillProps<DataPointType, DataValueType> = { ...propsWithFillObject, fill: fillColor };
  const dataKey = useEffectiveDataKey({
    dataKey: outsideProps.dataKey,
    angleAxisId: outsideProps.angleAxisId ?? defaultRadialBarProps.angleAxisId,
    radiusAxisId: outsideProps.radiusAxisId ?? defaultRadialBarProps.radiusAxisId,
  });
  const graphicalItemThemeSelector = useGraphicalItemIdentity(dataKey, outsideProps);
  const themeFillObject = useGraphicalItemThemeFill(dataKey, outsideProps);
  const effectiveFillObject = fillObject ?? themeFillObject;
  const resolveLabelTheme = useSeriesLabelThemeResolver(graphicalItemThemeSelector);
  const unthemedColors = useUnthemedColors(outsideProps);
  const themedActiveStyles = useThemedActiveStyles(graphicalItemThemeSelector, outsideProps);
  const graphicalItemStyle = useBackwardsCompatibleTheme<StringFillProps<DataPointType, DataValueType>>(
    graphicalItemThemeSelector,
    outsideProps,
    undefined,
  );
  const props: PropsWithDefaults = resolveDefaultProps({ ...outsideProps, dataKey }, defaultRadialBarProps);

  const themeFill = outsideProps.fill ?? graphicalItemStyle?.fill;
  const themeStroke = outsideProps.stroke ?? graphicalItemStyle?.stroke;
  const themeStrokeWidth = outsideProps.strokeWidth ?? graphicalItemStyle?.strokeWidth;
  const themeStrokeOpacity = outsideProps.strokeOpacity ?? graphicalItemStyle?.strokeOpacity;
  const themeStrokeDasharray = outsideProps.strokeDasharray ?? graphicalItemStyle?.strokeDasharray;
  const themeFillOpacity = outsideProps.fillOpacity ?? graphicalItemStyle?.fillOpacity;

  const themedProps: Partial<StringFillProps<DataPointType, DataValueType>> = {};
  if (themeFill !== undefined) themedProps.fill = themeFill;
  if (themeStroke !== undefined) themedProps.stroke = themeStroke;
  if (themeStrokeWidth !== undefined) themedProps.strokeWidth = themeStrokeWidth;
  if (themeStrokeOpacity !== undefined) themedProps.strokeOpacity = themeStrokeOpacity;
  if (themeStrokeDasharray !== undefined) themedProps.strokeDasharray = themeStrokeDasharray;
  if (themeFillOpacity !== undefined) themedProps.fillOpacity = themeFillOpacity;

  return (
    <RegisterGraphicalItemId id={props.id} type="radialBar">
      {id => (
        <>
          <SetPolarGraphicalItem
            type="radialBar"
            id={id}
            data={undefined} // why does RadialBar not allow data defined on the item?
            dataKey={props.dataKey}
            hide={props.hide ?? defaultRadialBarProps.hide}
            angleAxisId={props.angleAxisId ?? defaultRadialBarProps.angleAxisId}
            radiusAxisId={props.radiusAxisId ?? defaultRadialBarProps.radiusAxisId}
            stackId={getNormalizedStackId(props.stackId)}
            barSize={props.barSize}
            minAngle={props.minAngle}
            minPointSize={props.minPointSize}
            maxBarSize={props.maxBarSize}
          />
          <SetRadialBarPayloadLegend
            legendType={props.legendType}
            fill={themedProps.fill}
            stroke={themedProps.stroke}
            unthemedColors={unthemedColors}
            fillObject={effectiveFillObject}
          >
            {props.children}
          </SetRadialBarPayloadLegend>
          <DataLabelThemeContextProvider value={resolveLabelTheme}>
            <RadialBarImpl
              {...props}
              {...themedProps}
              id={id}
              fillObject={effectiveFillObject}
              unthemedColors={unthemedColors}
              themedActiveStyles={themedActiveStyles}
            />
          </DataLabelThemeContextProvider>
        </>
      )}
    </RegisterGraphicalItemId>
  );
}

RadialBar.displayName = 'RadialBar';

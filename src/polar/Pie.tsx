import * as React from 'react';
import { MutableRefObject, ReactElement, ReactNode, SVGProps, useCallback, useMemo, useRef, useState } from 'react';
import get from 'es-toolkit/compat/get';

import { clsx } from 'clsx';
import { selectPieLegend, selectPieSectors } from '../state/selectors/pieSelectors';
import { useAppSelector } from '../state/hooks';
import { Layer } from '../container/Layer';
import { Curve, Props as CurveProps } from '../shape/Curve';
import { Text } from '../component/Text';
import { Cell } from '../component/Cell';
import { findAllByType } from '../util/ReactUtils';
import { getMaxRadius, polarToCartesian } from '../util/PolarUtils';
import { getPercentValue, interpolate, isNumber, mathSign } from '../util/DataUtils';
import { getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  AnimationTiming,
  ChartOffsetInternal,
  Coordinate,
  DataConsumer,
  DataKey,
  DataProvider,
  GeometrySector,
  LegendType,
  PresentationAttributesAdaptChildEvent,
  TooltipType,
} from '../util/types';
import { Shape } from '../util/ActiveShapeUtils';
import {
  TooltipTriggerInfo,
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayload, TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import {
  selectActiveTooltipDataKey,
  selectActiveTooltipGraphicalItemId,
  selectActiveTooltipIndex,
} from '../state/selectors/tooltipSelectors';
import { SetPolarLegendPayload } from '../state/SetLegendPayload';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../util/Constants';
import { useAnimationId } from '../util/useAnimationId';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { PiePresentationProps, PieSettings } from '../state/types/PieSettings';
import {
  svgPropertiesNoEvents,
  svgPropertiesNoEventsFromUnknown,
  SVGPropsNoEvents,
} from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import {
  LabelListFromLabelProp,
  PolarLabelListContextProvider,
  PolarLabelListEntry,
  Props as LabelListProps,
} from '../component/LabelList';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { ChartData } from '../state/chartDataSlice';
import { getClassNameFromUnknown } from '../util/getClassNameFromUnknown';

interface PieDef {
  /**
   * The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container width.
   */
  cx?: number | string;
  /**
   * The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container height.
   */
  cy?: number | string;
  /**
   * Angle in degrees from which the chart should start.
   */
  startAngle?: number;
  /**
   * Angle, in degrees, at which the chart should end.
   */
  endAngle?: number;
  /**
   * The angle between two sectors.
   *
   * @example <Pie paddingAngle={5} />
   * @example https://recharts.github.io/examples/PieChartWithPaddingAngle
   */
  paddingAngle?: number;
  /**
   * The inner radius of the sectors.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   */
  innerRadius?: number | string;
  /**
   * The outer radius of the sectors.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   * Function should return a string percentage or number.
   */
  outerRadius?: number | string | ((dataPoint: any) => number | string);
  cornerRadius?: number | string;
}

type PieLabelLine =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | SVGProps<SVGPathElement>
  | boolean;

interface PieLabelExtraProps {
  stroke: string;
  index: number;
  textAnchor: string;
}

export type PieLabelRenderProps = Omit<SVGPropsNoEvents<PieSvgAttributes>, 'offset'> &
  Omit<PieSectorDataItem, 'offset'> &
  PieLabelExtraProps &
  Coordinate;

export type LabelListPropsWithPosition = LabelListProps & { position: LabelListProps['position'] };

/**
 * The `label` prop in Pie accepts a variety of alternatives.
 */
export type PieLabel =
  /*
   * If label prop is false, labels don't show.
   * If label prop is true, labels will be rendered with default props.
   */
  | boolean
  /*
   * If label prop is an object, and it contains a `position` prop,
   * the object will become props to a <LabelList /> component.
   */
  | LabelListPropsWithPosition
  /*
   * If label prop is an object, and it does not have a `position` prop,
   * this renders a special Pie label that is similar to <Label position="outside"> and supports an optional labelLine.
   * labelLine is a small line connecting the sector to the label.
   */
  | Partial<PieLabelRenderProps>
  /*
   * If label prop is a function, or a React component, it will be called once for each label.
   * The result of each call will be rendered.
   */
  | ((props: PieLabelRenderProps) => ReactNode | ReactElement<SVGElement>)
  /*
   * If label prop is a ReactElement, it will get cloned and receive brand-new surprise props.
   * I do not recommend this variant
   */
  | ReactElement<SVGElement>;

export type PieSectorData = GeometrySector &
  TooltipTriggerInfo & {
    dataKey?: DataKey<any>;
    midAngle?: number;
    middleRadius?: number;
    name?: string | number;
    paddingAngle?: number;
    payload?: any;
    percent?: number;
    value: number;
  };

/**
 * We spread the data object into the sector data item,
 * so we can't really know what is going to be inside.
 *
 * This type represents our best effort, but it all depends on the input data
 * and what is inside of it.
 *
 * https://github.com/recharts/recharts/issues/6380
 * https://github.com/recharts/recharts/discussions/6375
 */
export type PieSectorDataItem = PiePresentationProps &
  PieCoordinate &
  PieSectorData & {
    cornerRadius: number | undefined;
  };

export type PieSectorShapeProps = PieSectorDataItem & { isActive: boolean; index: number };
export type PieShape = ReactNode | ((props: PieSectorShapeProps, index: number) => React.ReactElement);

interface PieEvents {
  /**
   * The customized event handler of click on the sectors in this group.
   */
  onClick?: (data: PieSectorDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mousedown on the sectors in this group.
   */
  onMouseDown?: (data: PieSectorDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseup on the sectors in this group.
   */
  onMouseUp?: (data: PieSectorDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mousemove on the sectors in this group.
   */
  onMouseMove?: (data: PieSectorDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseover on the sectors in this group.
   */
  onMouseOver?: (data: PieSectorDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseout on the sectors in this group.
   */
  onMouseOut?: (data: PieSectorDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseenter on the sectors in this group.
   */
  onMouseEnter?: (data: PieSectorDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseleave on the sectors in this group.
   */
  onMouseLeave?: (data: PieSectorDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  onTouchStart?: (data: PieSectorDataItem, index: number, e: React.TouchEvent<SVGGraphicsElement>) => void;
  onTouchMove?: (data: PieSectorDataItem, index: number, e: React.TouchEvent<SVGGraphicsElement>) => void;
  onTouchEnd?: (data: PieSectorDataItem, index: number, e: React.TouchEvent<SVGGraphicsElement>) => void;
}

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface InternalPieProps<DataPointType = unknown> extends DataProvider<DataPointType>, PieDef, ZIndexable, PieEvents {
  id: GraphicalItemId;
  className?: string;
  // We actually spread the whole PieSectorDataItem into the keys.
  dataKey: DataKey<DataPointType, unknown>;
  // We actually spread the whole PieSectorDataItem into the keys.
  nameKey?: DataKey<DataPointType, string>;
  /** The minimum angle for no-zero element */
  minAngle?: number;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  /** the max radius of pie */
  maxRadius?: number;
  hide?: boolean;
  sectors: ReadonlyArray<PieSectorDataItem>;
  /** @deprecated */
  activeShape?: ActiveShape<PieSectorDataItem>;
  /** @deprecated */
  inactiveShape?: ActiveShape<PieSectorDataItem>;
  shape?: PieShape;
  labelLine?: PieLabelLine;
  label?: PieLabel;
  animationEasing?: AnimationTiming;
  isAnimationActive?: boolean | 'auto';
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  rootTabIndex?: number;
}

interface PieProps<DataPointType = any, DataValueType = any>
  extends DataProvider<DataPointType>, DataConsumer<DataPointType, DataValueType>, PieDef, PieEvents, ZIndexable {
  /**
   * This component is rendered when this graphical item is activated
   * (could be by mouse hover, touch, keyboard, programmatically).
   *
   * @deprecated Use the `shape` prop to create each sector. `isActive` designates the "active" shape.
   * @example <Pie activeShape={<CustomActiveShape />} />
   * @example https://recharts.github.io/examples/CustomActiveShapePieChart
   */
  activeShape?: ActiveShape<PieSectorDataItem>;
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
  id?: string;
  /**
   * The shape of inactive sector.
   * @deprecated Use the `shape` prop to modify each sector.
   */
  inactiveShape?: ActiveShape<PieSectorDataItem>;
  /**
   * If set false, animation will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | 'auto';
  /**
   * Renders one label for each pie sector. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object` that has `position` prop: the props of LabelList component;
   * - `object` that does not have `position` prop: the props of a custom Pie label (similar to Label with position "outside"); this variant supports `labelLine`
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * Also see the `labelLine` prop that draws a line connecting each label to the corresponding sector.
   *
   * @defaultValue false
   * @example <Pie label={<CustomizedLabel />} />
   * @example https://recharts.github.io/examples/PieChartWithCustomizedLabel
   */
  label?: PieLabel;
  /**
   * If false set, label lines will not be drawn. If true set, label lines will be drawn which have the props calculated internally.
   * If object set, label lines will be drawn which have the props merged by the internal calculated props and the option.
   * If ReactElement set, the option can be the custom label line element.
   * If set a function, the function will be called to render customized label line.
   * @defaultValue true
   * @example <Pie labelLine={<CustomizedLabelLine />} />
   * @example https://recharts.github.io/examples/PieChartWithCustomizedLabel
   */
  labelLine?: PieLabelLine;
  /**
   * The type of icon in legend. If set to 'none', no legend item will be rendered.
   * @defaultValue rect
   */
  legendType?: LegendType;
  /** the max radius of pie */
  maxRadius?: number;
  /**
   * The minimum angle of each unzero data.
   * @defaultValue 0
   */
  minAngle?: number;
  /**
   * Name represents each sector in the tooltip, and legend.
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
   * The customized event handler of animation end.
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start.
   */
  onAnimationStart?: () => void;
  /**
   * The tabindex of wrapper surrounding the cells.
   * @defaultValue 0
   */
  rootTabIndex?: number;
  /**
   * The custom shape of a Pie Sector.
   * Can also be used to render active sector by checking isActive.
   * If undefined, renders {@link Sector} shape.
   */
  shape?: PieShape;
  tooltipType?: TooltipType;
  /**
   * @defaultValue 100
   */
  zIndex?: number;
}

type PieSvgAttributes = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'ref' | keyof PieEvents>;

type InternalProps = PieSvgAttributes & InternalPieProps;

export type Props<DataPointType = any, DataValueType = any> = PieSvgAttributes & PieProps<DataPointType, DataValueType>;

type RealPieData = Record<string, unknown>;

export type PieCoordinate = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  maxRadius: number;
};

function SetPiePayloadLegend(props: { children?: ReactNode; id: GraphicalItemId }) {
  const cells = useMemo(() => findAllByType(props.children, Cell), [props.children]);

  const legendPayload = useAppSelector(state => selectPieLegend(state, props.id, cells));
  if (legendPayload == null) {
    return null;
  }
  return <SetPolarLegendPayload legendPayload={legendPayload} />;
}

type PieSectorsProps = {
  sectors: Readonly<PieSectorDataItem[]>;
  /**
   * @deprecated
   */
  activeShape: ActiveShape<Readonly<PieSectorDataItem>> | undefined;
  /**
   * @deprecated
   */
  inactiveShape: ActiveShape<Readonly<PieSectorDataItem>> | undefined;
  shape: PieShape;
  allOtherPieProps: WithoutId<InternalProps>;
  id: GraphicalItemId;
};

function getActiveShapeFill(activeShape: ActiveShape<Readonly<PieSectorDataItem>> | undefined): string | undefined {
  // activeShape can be boolean/function/element/object; only element/object can carry a static fill value.
  if (activeShape == null || typeof activeShape === 'boolean' || typeof activeShape === 'function') {
    return undefined;
  }

  if (React.isValidElement(activeShape)) {
    // React element form: <Sector fill="..."/> or custom element with fill prop.
    const fill = activeShape.props?.fill;
    return typeof fill === 'string' ? fill : undefined;
  }

  const { fill } = activeShape;
  return typeof fill === 'string' ? fill : undefined;
}

const SetPieTooltipEntrySettings = React.memo(
  ({
    dataKey,
    nameKey,
    sectors,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    tooltipType,
    id,
    activeShape,
  }: Pick<
    InternalProps,
    | 'dataKey'
    | 'nameKey'
    | 'sectors'
    | 'stroke'
    | 'strokeWidth'
    | 'fill'
    | 'name'
    | 'hide'
    | 'tooltipType'
    | 'id'
    | 'activeShape'
  >) => {
    const activeShapeFill = getActiveShapeFill(activeShape);

    const tooltipDataDefinedOnItem = sectors.map(sector => {
      const sectorTooltipPayload = sector.tooltipPayload;
      if (activeShapeFill == null || sectorTooltipPayload == null) {
        return sectorTooltipPayload;
      }

      return sectorTooltipPayload.map(item => ({
        ...item,
        color: activeShapeFill,
        fill: activeShapeFill,
      }));
    });

    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: tooltipDataDefinedOnItem,
      getPosition: index => sectors[Number(index)]?.tooltipPosition,
      settings: {
        stroke,
        strokeWidth,
        fill,
        dataKey,
        nameKey,
        name: getTooltipNameProp(name, dataKey),
        hide,
        type: tooltipType,
        color: fill,
        unit: '', // why doesn't Pie support unit?
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

const getTextAnchor = (x: number, cx: number) => {
  if (x > cx) {
    return 'start';
  }
  if (x < cx) {
    return 'end';
  }

  return 'middle';
};

const getOuterRadius = (
  dataPoint: any,
  outerRadius: number | string | ((element: any) => number | string),
  maxPieRadius: number,
) => {
  if (typeof outerRadius === 'function') {
    return getPercentValue(outerRadius(dataPoint), maxPieRadius, maxPieRadius * 0.8);
  }
  return getPercentValue(outerRadius, maxPieRadius, maxPieRadius * 0.8);
};

const parseCoordinateOfPie = (pieSettings: PieSettings, offset: ChartOffsetInternal, dataPoint: any): PieCoordinate => {
  const { top, left, width, height } = offset;
  const maxPieRadius = getMaxRadius(width, height);
  const cx = left + getPercentValue(pieSettings.cx, width, width / 2);
  const cy = top + getPercentValue(pieSettings.cy, height, height / 2);
  const innerRadius = getPercentValue(pieSettings.innerRadius, maxPieRadius, 0);

  const outerRadius = getOuterRadius(dataPoint, pieSettings.outerRadius, maxPieRadius);

  const maxRadius = pieSettings.maxRadius || Math.sqrt(width * width + height * height) / 2;

  return { cx, cy, innerRadius, outerRadius, maxRadius };
};

const parseDeltaAngle = (startAngle: number, endAngle: number) => {
  const sign = mathSign(endAngle - startAngle);
  const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

  return sign * deltaAngle;
};

const renderLabelLineItem = (option: PieLabelLine, props: CurveProps) => {
  if (React.isValidElement(option)) {
    // @ts-expect-error we can't know if the type of props matches the element
    return React.cloneElement(option, props);
  }
  if (typeof option === 'function') {
    return option(props);
  }

  const className = clsx('recharts-pie-label-line', typeof option !== 'boolean' ? option.className : '');
  // React doesn't like it when we spread a key property onto an element
  const { key, ...otherProps } = props;
  return <Curve {...otherProps} type="linear" className={className} />;
};

const renderLabelItem = (option: PieLabel, props: PieLabelRenderProps, value: unknown) => {
  if (React.isValidElement(option)) {
    // @ts-expect-error element cloning is not typed
    return React.cloneElement(option, props);
  }
  let label = value;
  if (typeof option === 'function') {
    label = option(props);
    if (React.isValidElement(label)) {
      return label;
    }
  }

  const className = clsx('recharts-pie-label-text', getClassNameFromUnknown(option));
  return (
    <Text {...props} alignmentBaseline="middle" className={className}>
      {/* @ts-expect-error we pass unknown but Text expects string | number */}
      {label}
    </Text>
  );
};

function PieLabels({
  sectors,
  props,
  showLabels,
}: {
  sectors: ReadonlyArray<PieSectorDataItem>;
  props: WithoutId<InternalProps>;
  showLabels: boolean;
}) {
  const { label, labelLine, dataKey } = props;
  if (!showLabels || !label || !sectors) {
    return null;
  }
  const pieProps = svgPropertiesNoEvents(props);
  const customLabelProps = svgPropertiesNoEventsFromUnknown(label);
  const customLabelLineProps = svgPropertiesNoEventsFromUnknown(labelLine);
  const offsetRadius =
    (typeof label === 'object' &&
      'offsetRadius' in label &&
      typeof label.offsetRadius === 'number' &&
      label.offsetRadius) ||
    20;

  const labels = sectors.map((entry, i) => {
    const midAngle = (entry.startAngle + entry.endAngle) / 2;
    const endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
    const labelProps: PieLabelRenderProps = {
      ...pieProps,
      ...entry,
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: 'none',
      ...customLabelProps,
      index: i,
      textAnchor: getTextAnchor(endPoint.x, entry.cx),
      ...endPoint,
    };
    const lineProps: CurveProps = {
      ...pieProps,
      ...entry,
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: 'none',
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: entry.fill,
      ...customLabelLineProps,
      index: i,
      points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
      key: 'line',
    };

    return (
      <ZIndexLayer
        zIndex={DefaultZIndexes.label}
        key={`label-${entry.startAngle}-${entry.endAngle}-${entry.midAngle}-${i}`}
      >
        <Layer>
          {labelLine && renderLabelLineItem(labelLine, lineProps)}
          {/* @ts-expect-error we send the full PieSectorDataItem */}
          {renderLabelItem(label, labelProps, getValueByDataKey(entry, dataKey))}
        </Layer>
      </ZIndexLayer>
    );
  });

  return <Layer className="recharts-pie-labels">{labels}</Layer>;
}

function PieLabelList({
  sectors,
  props,
  showLabels,
}: {
  sectors: ReadonlyArray<PieSectorDataItem>;
  props: WithoutId<InternalProps>;
  showLabels: boolean;
}) {
  const { label } = props;
  if (typeof label === 'object' && label != null && 'position' in label) {
    return <LabelListFromLabelProp label={label} />;
  }
  return <PieLabels sectors={sectors} props={props} showLabels={showLabels} />;
}

function PieSectors(props: PieSectorsProps) {
  const { sectors, activeShape, inactiveShape: inactiveShapeProp, allOtherPieProps, shape, id } = props;

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const activeDataKey = useAppSelector(selectActiveTooltipDataKey);
  const activeGraphicalItemId = useAppSelector(selectActiveTooltipGraphicalItemId);
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = allOtherPieProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherPieProps.dataKey, id);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherPieProps.dataKey, id);

  if (sectors == null || sectors.length === 0) {
    return null;
  }

  return (
    <>
      {sectors.map((entry: PieSectorDataItem, i: number) => {
        if (entry?.startAngle === 0 && entry?.endAngle === 0 && sectors.length !== 1) return null;

        // For Pie charts, when multiple Pies share the same dataKey, we need to ensure only the hovered Pie's sector is active.
        // We do this by checking if the active graphical item ID matches this Pie's ID.
        const graphicalItemMatches = activeGraphicalItemId == null || activeGraphicalItemId === id;

        const isActive =
          String(i) === activeIndex &&
          (activeDataKey == null || allOtherPieProps.dataKey === activeDataKey) &&
          graphicalItemMatches;
        const inactiveShape = activeIndex ? inactiveShapeProp : null;
        const sectorOptions = activeShape && isActive ? activeShape : inactiveShape;
        const sectorProps = {
          ...entry,
          stroke: entry.stroke,
          tabIndex: -1,
          [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: i,
          [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: id,
        };

        return (
          <Layer
            key={`sector-${entry?.startAngle}-${entry?.endAngle}-${entry.midAngle}-${i}`}
            tabIndex={-1}
            className="recharts-pie-sector"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            onMouseEnter={onMouseEnterFromContext(entry, i)}
            onMouseLeave={onMouseLeaveFromContext(entry, i)}
            onClick={onClickFromContext(entry, i)}
          >
            <Shape option={shape ?? sectorOptions} index={i} shapeType="sector" isActive={isActive} {...sectorProps} />
          </Layer>
        );
      })}
    </>
  );
}

export function computePieSectors({
  pieSettings,
  displayedData,
  cells,
  offset,
}: {
  pieSettings: PieSettings;
  displayedData: ChartData;
  cells: ReadonlyArray<ReactElement> | undefined;
  offset: ChartOffsetInternal;
}): ReadonlyArray<PieSectorDataItem> | undefined {
  const { cornerRadius, startAngle, endAngle, dataKey, nameKey, tooltipType } = pieSettings;
  const minAngle = Math.abs(pieSettings.minAngle);
  const deltaAngle = parseDeltaAngle(startAngle, endAngle);
  const absDeltaAngle = Math.abs(deltaAngle);
  const paddingAngle = displayedData.length <= 1 ? 0 : (pieSettings.paddingAngle ?? 0);

  const notZeroItemCount = displayedData.filter(entry => getValueByDataKey(entry, dataKey, 0) !== 0).length;
  const totalPaddingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
  const realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPaddingAngle;

  const sum = displayedData.reduce((result: number, entry: any) => {
    const val = getValueByDataKey(entry, dataKey, 0);
    return result + (isNumber(val) ? val : 0);
  }, 0);
  let sectors;

  if (sum > 0) {
    let prev: PieSectorDataItem;
    sectors = displayedData.map((entry: unknown, i: number) => {
      const val: number = getValueByDataKey(entry, dataKey, 0);
      const name: string = getValueByDataKey(entry, nameKey, i);
      const coordinate: PieCoordinate = parseCoordinateOfPie(pieSettings, offset, entry);
      const percent = (isNumber(val) ? val : 0) / sum;
      let tempStartAngle;

      // @ts-expect-error can't spread unknown
      const entryWithCellInfo: RealPieData = { ...entry, ...(cells && cells[i] && cells[i].props) };
      const sectorColor =
        entryWithCellInfo != null && 'fill' in entryWithCellInfo && typeof entryWithCellInfo.fill === 'string'
          ? entryWithCellInfo.fill
          : pieSettings.fill;

      if (i) {
        tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
      } else {
        tempStartAngle = startAngle;
      }

      const tempEndAngle =
        tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
      const midAngle = (tempStartAngle + tempEndAngle) / 2;
      const middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;

      const tooltipPayload: TooltipPayload = [
        {
          name,
          value: val,
          payload: entryWithCellInfo,
          dataKey,
          type: tooltipType,
          color: sectorColor,
          fill: sectorColor,
          graphicalItemId: pieSettings.id,
        },
      ];
      const tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);

      prev = {
        ...pieSettings.presentationProps,
        percent,
        cornerRadius: typeof cornerRadius === 'string' ? parseFloat(cornerRadius) : cornerRadius,
        name,
        tooltipPayload,
        midAngle,
        middleRadius,
        tooltipPosition,
        ...entryWithCellInfo,
        ...coordinate,
        value: val,
        dataKey,
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entryWithCellInfo,
        paddingAngle: mathSign(deltaAngle) * paddingAngle,
      };
      return prev;
    });
  }
  return sectors;
}

function PieLabelListProvider({
  showLabels,
  sectors,
  children,
}: {
  showLabels: boolean;
  sectors: ReadonlyArray<PieSectorDataItem>;
  children: ReactNode;
}) {
  const labelListEntries: ReadonlyArray<PolarLabelListEntry> = useMemo(() => {
    if (!showLabels || !sectors) {
      return [];
    }
    return sectors.map(
      (entry): PolarLabelListEntry => ({
        value: entry.value,
        payload: entry.payload,
        clockWise: false,
        parentViewBox: undefined,
        viewBox: {
          cx: entry.cx,
          cy: entry.cy,
          innerRadius: entry.innerRadius,
          outerRadius: entry.outerRadius,
          startAngle: entry.startAngle,
          endAngle: entry.endAngle,
          clockWise: false,
        },
        fill: entry.fill,
      }),
    );
  }, [sectors, showLabels]);
  return (
    <PolarLabelListContextProvider value={showLabels ? labelListEntries : undefined}>
      {children}
    </PolarLabelListContextProvider>
  );
}

type WithoutId<T> = Omit<T, 'id'>;

function SectorsWithAnimation({
  props,
  previousSectorsRef,
  id,
}: {
  props: WithoutId<InternalProps>;
  previousSectorsRef: MutableRefObject<ReadonlyArray<PieSectorDataItem> | null>;
  id: GraphicalItemId;
}) {
  const {
    sectors,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    activeShape,
    inactiveShape,
    onAnimationStart,
    onAnimationEnd,
  } = props;
  const animationId = useAnimationId(props, 'recharts-pie-');

  const prevSectors = previousSectorsRef.current;

  const [isAnimating, setIsAnimating] = useState(false);

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
    <PieLabelListProvider showLabels={!isAnimating} sectors={sectors}>
      <JavascriptAnimate
        animationId={animationId}
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
        key={animationId}
      >
        {(t: number) => {
          const stepData: PieSectorDataItem[] = [];
          const first: PieSectorDataItem | undefined = sectors && sectors[0];
          let curAngle: number = first?.startAngle ?? 0;

          sectors?.forEach((entry, index) => {
            const prev = prevSectors && prevSectors[index];
            const paddingAngle = index > 0 ? get(entry, 'paddingAngle', 0) : 0;

            if (prev) {
              const angle = interpolate(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle, t);
              const latest = {
                ...entry,
                startAngle: curAngle + paddingAngle,
                endAngle: curAngle + angle + paddingAngle,
              };

              stepData.push(latest);
              curAngle = latest.endAngle;
            } else {
              const { endAngle, startAngle } = entry;
              const deltaAngle = interpolate(0, endAngle - startAngle, t);
              const latest = {
                ...entry,
                startAngle: curAngle + paddingAngle,
                endAngle: curAngle + deltaAngle + paddingAngle,
              };

              stepData.push(latest);
              curAngle = latest.endAngle;
            }
          });

          // eslint-disable-next-line no-param-reassign
          previousSectorsRef.current = stepData;
          return (
            <Layer>
              <PieSectors
                sectors={stepData}
                activeShape={activeShape}
                inactiveShape={inactiveShape}
                allOtherPieProps={props}
                shape={props.shape}
                id={id}
              />
            </Layer>
          );
        }}
      </JavascriptAnimate>
      <PieLabelList showLabels={!isAnimating} sectors={sectors} props={props} />
      {props.children}
    </PieLabelListProvider>
  );
}

export const defaultPieProps = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  cx: '50%',
  cy: '50%',
  dataKey: 'value',
  endAngle: 360,
  fill: '#808080',
  hide: false,
  innerRadius: 0,
  isAnimationActive: 'auto',
  label: false,
  labelLine: true,
  legendType: 'rect',
  minAngle: 0,
  nameKey: 'name',
  outerRadius: '80%',
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: '#fff',
  zIndex: DefaultZIndexes.area,
} as const satisfies Partial<Props>;

function PieImpl(props: Omit<InternalProps, 'sectors'>) {
  const { id, ...propsWithoutId } = props;
  const { hide, className, rootTabIndex } = props;

  const cells = useMemo(() => findAllByType(props.children, Cell), [props.children]);

  const sectors = useAppSelector(state => selectPieSectors(state, id, cells));

  const previousSectorsRef = useRef<ReadonlyArray<PieSectorDataItem> | null>(null);

  const layerClass = clsx('recharts-pie', className);

  if (hide || sectors == null) {
    previousSectorsRef.current = null;
    return <Layer tabIndex={rootTabIndex} className={layerClass} />;
  }

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <SetPieTooltipEntrySettings
        dataKey={props.dataKey}
        nameKey={props.nameKey}
        sectors={sectors}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        name={props.name}
        hide={props.hide}
        tooltipType={props.tooltipType}
        id={id}
        activeShape={props.activeShape}
      />
      <Layer tabIndex={rootTabIndex} className={layerClass}>
        <SectorsWithAnimation props={{ ...propsWithoutId, sectors }} previousSectorsRef={previousSectorsRef} id={id} />
      </Layer>
    </ZIndexLayer>
  );
}

type PropsWithResolvedDefaults = RequiresDefaultProps<Props, typeof defaultPieProps>;

/**
 * @consumes PolarChartContext
 * @provides LabelListContext
 * @provides CellReader
 */
function PieFn(outsideProps: Props) {
  const props: PropsWithResolvedDefaults = resolveDefaultProps(outsideProps, defaultPieProps);
  const { id: externalId, ...propsWithoutId } = props;
  const presentationProps: PiePresentationProps | null = svgPropertiesNoEvents(propsWithoutId);

  return (
    <RegisterGraphicalItemId id={externalId} type="pie">
      {id => (
        <>
          <SetPolarGraphicalItem
            type="pie"
            id={id}
            data={propsWithoutId.data}
            dataKey={propsWithoutId.dataKey}
            hide={propsWithoutId.hide}
            angleAxisId={0}
            radiusAxisId={0}
            name={propsWithoutId.name}
            nameKey={propsWithoutId.nameKey}
            tooltipType={propsWithoutId.tooltipType}
            legendType={propsWithoutId.legendType}
            fill={propsWithoutId.fill}
            cx={propsWithoutId.cx}
            cy={propsWithoutId.cy}
            startAngle={propsWithoutId.startAngle}
            endAngle={propsWithoutId.endAngle}
            paddingAngle={propsWithoutId.paddingAngle}
            minAngle={propsWithoutId.minAngle}
            innerRadius={propsWithoutId.innerRadius}
            outerRadius={propsWithoutId.outerRadius}
            cornerRadius={propsWithoutId.cornerRadius}
            presentationProps={presentationProps}
            maxRadius={props.maxRadius}
          />
          <SetPiePayloadLegend {...propsWithoutId} id={id} />
          <PieImpl {...propsWithoutId} id={id} />
        </>
      )}
    </RegisterGraphicalItemId>
  );
}
export const Pie = PieFn as {
  <DataPointType = any, DataValueType = any>(outsideProps: Props<DataPointType, DataValueType>): ReactElement;
  (outsideProps: Props<any, any>): ReactElement;
};
// @ts-expect-error we need to set the displayName for debugging purposes
Pie.displayName = 'Pie';

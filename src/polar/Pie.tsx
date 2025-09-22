import * as React from 'react';
import { MutableRefObject, ReactElement, ReactNode, SVGProps, useCallback, useMemo, useRef, useState } from 'react';
import get from 'es-toolkit/compat/get';

import { clsx } from 'clsx';
import { selectPieLegend, selectPieSectors } from '../state/selectors/pieSelectors';
import { useAppSelector } from '../state/hooks';
import { Layer } from '../container/Layer';
import { Curve } from '../shape/Curve';
import { Text } from '../component/Text';
import { Cell } from '../component/Cell';
import { filterProps, findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
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
  DataKey,
  GeometrySector,
  LegendType,
  PresentationAttributesAdaptChildEvent,
  TooltipType,
} from '../util/types';
import { Shape } from '../util/ActiveShapeUtils';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayload, TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetPolarLegendPayload } from '../state/SetLegendPayload';
import { DATA_ITEM_DATAKEY_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../util/Constants';
import { useAnimationId } from '../util/useAnimationId';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { PiePresentationProps, PieSettings } from '../state/types/PieSettings';
import { svgPropertiesNoEvents, SVGPropsNoEvents } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import {
  LabelListFromLabelProp,
  PolarLabelListContextProvider,
  PolarLabelListEntry,
  Props as LabelListProps,
} from '../component/LabelList';
import { GraphicalItemId } from '../state/graphicalItemsSlice';

type ChartDataInput = Record<string, unknown>;

interface PieDef {
  /** The abscissa of pole in polar coordinate  */
  cx?: number | string;
  /** The ordinate of pole in polar coordinate  */
  cy?: number | string;
  /** The start angle of first sector */
  startAngle?: number;
  /** The end angle of last sector */
  endAngle?: number;
  paddingAngle?: number;
  /** The inner radius of sectors */
  innerRadius?: number | string;
  /** The outer radius of sectors */
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

type LabelListPropsWithPosition = LabelListProps & { position: LabelListProps['position'] };

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

export type PieSectorData = ChartDataInput &
  GeometrySector & {
    dataKey?: string;
    midAngle?: number;
    middleRadius?: number;
    name?: string | number;
    paddingAngle?: number;
    payload?: any;
    percent?: number;
    tooltipPayload?: TooltipPayload;
    tooltipPosition: Coordinate;
    value: number;
  };

export type PieSectorDataItem = PiePresentationProps & PieCoordinate & PieSectorData;

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface InternalPieProps extends PieDef {
  id: GraphicalItemId;
  className?: string;
  dataKey: DataKey<any>;
  nameKey?: DataKey<any>;
  /** The minimum angle for no-zero element */
  minAngle?: number;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  /** the max radius of pie */
  maxRadius?: number;
  hide?: boolean;
  /** the input data */
  data?: ChartDataInput[];
  sectors: ReadonlyArray<PieSectorDataItem>;
  activeShape?: ActiveShape<PieSectorDataItem>;
  inactiveShape?: ActiveShape<PieSectorDataItem>;
  labelLine?: PieLabelLine;
  label?: PieLabel;
  animationEasing?: AnimationTiming;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  onMouseEnter?: (data: any, index: number, e: React.MouseEvent) => void;
  onMouseLeave?: (data: any, index: number, e: React.MouseEvent) => void;
  onClick?: (data: any, index: number, e: React.MouseEvent) => void;
  rootTabIndex?: number;
}

interface PieProps extends PieDef {
  id?: string;
  className?: string;
  /**
   * Defaults to 'value' if not specified.
   */
  dataKey?: DataKey<any>;
  nameKey?: DataKey<any>;
  /** The minimum angle for no-zero element */
  minAngle?: number;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  /** TODO: review this as an external prop - it seems to have no effect */
  /** the max radius of pie */
  maxRadius?: number;
  hide?: boolean;
  /** the input data */
  data?: ChartDataInput[];
  activeShape?: ActiveShape<PieSectorDataItem>;
  inactiveShape?: ActiveShape<PieSectorDataItem>;
  labelLine?: PieLabelLine;
  label?: PieLabel;
  animationEasing?: AnimationTiming;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  onMouseEnter?: (data: any, index: number, e: React.MouseEvent) => void;
  onMouseLeave?: (data: any, index: number, e: React.MouseEvent) => void;
  onClick?: (data: any, index: number, e: React.MouseEvent) => void;
  rootTabIndex?: number;
}

type PieSvgAttributes = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'ref'>;

type InternalProps = PieSvgAttributes & InternalPieProps;

export type Props = PieSvgAttributes & PieProps;

type RealPieData = any;

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
  activeShape: ActiveShape<Readonly<PieSectorDataItem>> | undefined;
  inactiveShape: ActiveShape<Readonly<PieSectorDataItem>> | undefined;
  allOtherPieProps: WithoutId<InternalProps>;
};

function getTooltipEntrySettings(props: InternalProps): TooltipPayloadConfiguration {
  const { dataKey, nameKey, sectors, stroke, strokeWidth, fill, name, hide, tooltipType } = props;
  return {
    dataDefinedOnItem: sectors.map((p: PieSectorDataItem) => p.tooltipPayload),
    positions: sectors.map((p: PieSectorDataItem) => p.tooltipPosition),
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
    },
  };
}

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

function getClassNamePropertyIfExists(u: unknown): string {
  if (u && typeof u === 'object' && 'className' in u && typeof u.className === 'string') {
    return u.className;
  }
  return '';
}

const renderLabelLineItem = (option: PieLabelLine, props: any) => {
  if (React.isValidElement(option)) {
    return React.cloneElement(option, props);
  }
  if (typeof option === 'function') {
    return option(props);
  }

  const className = clsx('recharts-pie-label-line', typeof option !== 'boolean' ? option.className : '');
  return <Curve {...props} type="linear" className={className} />;
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

  const className = clsx('recharts-pie-label-text', getClassNamePropertyIfExists(option));
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
  const customLabelProps = filterProps(label, false);
  const customLabelLineProps = filterProps(labelLine, false);
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
      stroke: 'none',
      ...customLabelProps,
      index: i,
      textAnchor: getTextAnchor(endPoint.x, entry.cx),
      ...endPoint,
    };
    const lineProps = {
      ...pieProps,
      ...entry,
      fill: 'none',
      stroke: entry.fill,
      ...customLabelLineProps,
      index: i,
      points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
      key: 'line',
    };

    return (
      // eslint-disable-next-line react/no-array-index-key
      <Layer key={`label-${entry.startAngle}-${entry.endAngle}-${entry.midAngle}-${i}`}>
        {labelLine && renderLabelLineItem(labelLine, lineProps)}
        {renderLabelItem(label, labelProps, getValueByDataKey(entry, dataKey))}
      </Layer>
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
  const { sectors, activeShape, inactiveShape: inactiveShapeProp, allOtherPieProps } = props;

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = allOtherPieProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherPieProps.dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherPieProps.dataKey);

  if (sectors == null || sectors.length === 0) {
    return null;
  }

  return (
    <>
      {sectors.map((entry, i) => {
        if (entry?.startAngle === 0 && entry?.endAngle === 0 && sectors.length !== 1) return null;
        const isSectorActive = activeShape && String(i) === activeIndex;
        const inactiveShape = activeIndex ? inactiveShapeProp : null;
        const sectorOptions = isSectorActive ? activeShape : inactiveShape;
        const sectorProps = {
          ...entry,
          stroke: entry.stroke,
          tabIndex: -1,
          [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: i,
          [DATA_ITEM_DATAKEY_ATTRIBUTE_NAME]: allOtherPieProps.dataKey,
        };

        return (
          <Layer
            // eslint-disable-next-line react/no-array-index-key
            key={`sector-${entry?.startAngle}-${entry?.endAngle}-${entry.midAngle}-${i}`}
            tabIndex={-1}
            className="recharts-pie-sector"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            // @ts-expect-error the types need a bit of attention
            onMouseEnter={onMouseEnterFromContext(entry, i)}
            // @ts-expect-error the types need a bit of attention
            onMouseLeave={onMouseLeaveFromContext(entry, i)}
            // @ts-expect-error the types need a bit of attention
            onClick={onClickFromContext(entry, i)}
          >
            <Shape option={sectorOptions} isActive={isSectorActive} shapeType="sector" {...sectorProps} />
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
  displayedData: ReadonlyArray<RealPieData>;
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
    sectors = displayedData.map((entry: any, i: number) => {
      // @ts-expect-error getValueByDataKey does not validate the output type
      const val: number = getValueByDataKey(entry, dataKey, 0);
      // @ts-expect-error getValueByDataKey does not validate the output type
      const name: string = getValueByDataKey(entry, nameKey, i);
      const coordinate: PieCoordinate = parseCoordinateOfPie(pieSettings, offset, entry);
      const percent = (isNumber(val) ? val : 0) / sum;
      let tempStartAngle;

      const entryWithCellInfo: ChartDataInput = { ...entry, ...(cells && cells[i] && cells[i].props) };

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
        },
      ];
      const tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);

      prev = {
        ...pieSettings.presentationProps,
        percent,
        cornerRadius,
        name,
        tooltipPayload,
        midAngle,
        middleRadius,
        tooltipPosition,
        ...entryWithCellInfo,
        ...coordinate,
        value: val,
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
}: {
  props: WithoutId<InternalProps>;
  previousSectorsRef: MutableRefObject<ReadonlyArray<PieSectorDataItem> | null>;
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
          const first = sectors && sectors[0];
          let curAngle = first?.startAngle;

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

const defaultPieProps = {
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
  isAnimationActive: !Global.isSsr,
  labelLine: true,
  legendType: 'rect',
  minAngle: 0,
  nameKey: 'name',
  outerRadius: '80%',
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: '#fff',
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
    <>
      <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={{ ...props, sectors }} />
      <Layer tabIndex={rootTabIndex} className={layerClass}>
        <SectorsWithAnimation props={{ ...propsWithoutId, sectors }} previousSectorsRef={previousSectorsRef} />
      </Layer>
    </>
  );
}

type PropsWithResolvedDefaults = RequiresDefaultProps<Props, typeof defaultPieProps>;

export function Pie(outsideProps: Props) {
  const props: PropsWithResolvedDefaults = resolveDefaultProps(outsideProps, defaultPieProps);
  const { id: externalId, ...propsWithoutId } = props;
  const presentationProps: PiePresentationProps = svgPropertiesNoEvents(propsWithoutId);

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
Pie.displayName = 'Pie';

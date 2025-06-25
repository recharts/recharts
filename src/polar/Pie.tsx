import * as React from 'react';
import {
  MutableRefObject,
  PureComponent,
  ReactElement,
  ReactNode,
  SVGProps,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import get from 'es-toolkit/compat/get';

import { clsx } from 'clsx';
import { ResolvedPieSettings, selectPieLegend, selectPieSectors } from '../state/selectors/pieSelectors';
import { useAppSelector } from '../state/hooks';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { Layer } from '../container/Layer';
import { Props as SectorProps } from '../shape/Sector';
import { Curve } from '../shape/Curve';
import { Text } from '../component/Text';
import { Cell } from '../component/Cell';
import { filterProps, findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { getMaxRadius, polarToCartesian } from '../util/PolarUtils';
import { getPercentValue, interpolateNumber, isNumber, mathSign, uniqueId } from '../util/DataUtils';
import { getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  AnimationTiming,
  ChartOffset,
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
import { selectActiveTooltipIndex, selectTooltipTrigger } from '../state/selectors/tooltipSelectors';
import { SetPolarLegendPayload } from '../state/SetLegendPayload';
import { DATA_ITEM_DATAKEY_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../util/Constants';
import { useAnimationId } from '../util/useAnimationId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { Animate } from '../animation/Animate';

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
  outerRadius?: number | string | ((dataPoint: any) => number);
  cornerRadius?: number | string;
}

type PieLabelLine =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | SVGProps<SVGPathElement>
  | boolean;

export type PieLabelProps = PieSectorData &
  GeometrySector & {
    tooltipPayload?: any;
  } & PieLabelRenderProps;

export type PieLabel<P extends PieLabelProps = PieLabelProps> =
  | ReactElement<SVGElement>
  | ((props: P) => ReactNode | ReactElement<SVGElement>)
  | (SVGProps<SVGTextElement> & { offsetRadius?: number })
  | boolean;

export type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
  tooltipPayload?: ReadonlyArray<TooltipPayload>;
};

export type PieSectorDataItem = SectorProps & PieSectorData;

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface InternalPieProps extends PieDef {
  id?: string;
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
  data?: any[];
  sectors?: ReadonlyArray<PieSectorDataItem>;
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
  data?: any[];
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

export interface PieLabelRenderProps extends PieDef {
  name: string;
  percent?: number;
  stroke: string;
  index?: number;
  textAnchor: string;
  x: number;
  y: number;
  [key: string]: any;
}

interface State {
  prevIsAnimationActive?: boolean;
  prevSectors?: PieSectorDataItem[];
  curSectors?: PieSectorDataItem[];
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

function SetPiePayloadLegend(props: Props) {
  const presentationProps = useMemo(() => filterProps(props, false), [props]);
  const cells = useMemo(() => findAllByType(props.children, Cell), [props.children]);

  const pieSettings: ResolvedPieSettings = useMemo(
    () => ({
      name: props.name,
      nameKey: props.nameKey,
      tooltipType: props.tooltipType,
      data: props.data,
      dataKey: props.dataKey,
      cx: props.cx,
      cy: props.cy,
      startAngle: props.startAngle,
      endAngle: props.endAngle,
      minAngle: props.minAngle,
      paddingAngle: props.paddingAngle,
      innerRadius: props.innerRadius,
      outerRadius: props.outerRadius,
      cornerRadius: props.cornerRadius,
      legendType: props.legendType,
      fill: props.fill,
      presentationProps,
    }),
    [
      props.cornerRadius,
      props.cx,
      props.cy,
      props.data,
      props.dataKey,
      props.endAngle,
      props.innerRadius,
      props.minAngle,
      props.name,
      props.nameKey,
      props.outerRadius,
      props.paddingAngle,
      props.startAngle,
      props.tooltipType,
      props.legendType,
      props.fill,
      presentationProps,
    ],
  );

  const legendPayload = useAppSelector(state => selectPieLegend(state, pieSettings, cells));
  return <SetPolarLegendPayload legendPayload={legendPayload} />;
}

type PieSectorsProps = {
  sectors: Readonly<PieSectorDataItem[]>;
  activeShape: ActiveShape<Readonly<PieSectorDataItem>>;
  inactiveShape: ActiveShape<Readonly<PieSectorDataItem>>;
  allOtherPieProps: InternalProps;
  showLabels: boolean;
};

function getTooltipEntrySettings(props: InternalProps): TooltipPayloadConfiguration {
  const { dataKey, nameKey, sectors, stroke, strokeWidth, fill, name, hide, tooltipType } = props;
  return {
    dataDefinedOnItem: sectors?.map((p: PieSectorDataItem) => p.tooltipPayload),
    positions: sectors?.map((p: PieSectorDataItem) => p.tooltipPosition),
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
  outerRadius?: number | string | ((element: any) => number),
  maxPieRadius?: number,
) => {
  if (typeof outerRadius === 'function') {
    return outerRadius(dataPoint);
  }
  return getPercentValue(outerRadius, maxPieRadius, maxPieRadius * 0.8);
};

const parseCoordinateOfPie = (
  item: {
    cx?: number | string;
    cy?: number | string;
    innerRadius?: number | string;
    outerRadius?: number | string | ((dataPoint: any) => number);
    maxRadius?: number;
  },
  offset: ChartOffset,
  dataPoint: any,
): PieCoordinate => {
  const { top, left, width, height } = offset;
  const maxPieRadius = getMaxRadius(width, height);
  const cx = left + getPercentValue(item.cx, width, width / 2);
  const cy = top + getPercentValue(item.cy, height, height / 2);
  const innerRadius = getPercentValue(item.innerRadius, maxPieRadius, 0);

  const outerRadius = getOuterRadius(dataPoint, item.outerRadius, maxPieRadius);

  const maxRadius = item.maxRadius || Math.sqrt(width * width + height * height) / 2;

  return { cx, cy, innerRadius, outerRadius, maxRadius };
};

const parseDeltaAngle = (startAngle: number, endAngle: number) => {
  const sign = mathSign(endAngle - startAngle);
  const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

  return sign * deltaAngle;
};

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

const renderLabelItem = (option: PieLabel, props: any, value: any) => {
  if (React.isValidElement(option)) {
    return React.cloneElement(option, props);
  }
  let label = value;
  if (typeof option === 'function') {
    label = option(props);
    if (React.isValidElement(label)) {
      return label;
    }
  }

  const className = clsx(
    'recharts-pie-label-text',
    typeof option !== 'boolean' && typeof option !== 'function' ? option.className : '',
  );
  return (
    <Text {...props} alignmentBaseline="middle" className={className}>
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
  props: InternalProps;
  showLabels: boolean;
}) {
  const { label, labelLine, dataKey } = props;
  if (!showLabels || !label || !sectors) {
    return null;
  }
  const pieProps = filterProps(props, false);
  const customLabelProps = filterProps(label, false);
  const customLabelLineProps = filterProps(labelLine, false);
  const offsetRadius = (typeof label === 'object' && 'offsetRadius' in label && label.offsetRadius) || 20;

  const labels = sectors.map((entry, i) => {
    const midAngle = (entry.startAngle + entry.endAngle) / 2;
    const endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
    const labelProps = {
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

function PieSectors(props: PieSectorsProps) {
  const { sectors, activeShape, inactiveShape: inactiveShapeProp, allOtherPieProps, showLabels } = props;

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const tooltipTrigger = useAppSelector(selectTooltipTrigger);
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherPropsRaw
  } = allOtherPieProps;

  // Explicitly add event handlers to restOfAllOtherProps
  const restOfAllOtherProps = {
    ...restOfAllOtherPropsRaw,
    onClick: onItemClickFromProps,
    onMouseEnter: onMouseEnterFromProps,
    onMouseLeave: onMouseLeaveFromProps,
  };

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherPieProps.dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherPieProps.dataKey);

  if (sectors == null) {
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

        // Always attach external event handlers (passed as props)
        const eventHandlers: any = {
          ...adaptEventsOfChild(restOfAllOtherProps, entry, i),
        };

        // Conditionally attach internal tooltip handlers based on tooltip trigger
        if (tooltipTrigger === 'click') {
          const triggerInfo = {
            tooltipPayload: entry.tooltipPayload as any,
            tooltipPosition: entry.tooltipPosition,
            cx: entry.cx,
            cy: entry.cy,
          };
          // Combine external onClick with internal tooltip onClick
          const externalOnClick = eventHandlers.onClick;
          eventHandlers.onClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
            if (externalOnClick) externalOnClick(entry, i, e);
            onClickFromContext(triggerInfo, i)(e);
          };
        } else {
          const triggerInfo = {
            tooltipPayload: entry.tooltipPayload as any,
            tooltipPosition: entry.tooltipPosition,
            cx: entry.cx,
            cy: entry.cy,
          };
          // For hover mode, only call the external handler if present, otherwise call the internal handler
          const externalOnMouseEnter = eventHandlers.onMouseEnter;
          eventHandlers.onMouseEnter = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
            if (externalOnMouseEnter) {
              externalOnMouseEnter(entry, i, e);
            } else {
              onMouseEnterFromContext(triggerInfo, i)(e);
            }
          };
          const externalOnMouseLeave = eventHandlers.onMouseLeave;
          eventHandlers.onMouseLeave = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
            if (externalOnMouseLeave) {
              externalOnMouseLeave(entry, i, e);
            } else {
              onMouseLeaveFromContext(triggerInfo, i)(e);
            }
          };
          // For hover mode, also ensure external onClick is called if provided
          const externalOnClick = eventHandlers.onClick;
          if (externalOnClick) {
            eventHandlers.onClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
              externalOnClick(entry, i, e);
            };
          }
        }

        return (
          <Layer
            tabIndex={-1}
            className="recharts-pie-sector"
            {...eventHandlers}
            // eslint-disable-next-line react/no-array-index-key
            key={`sector-${entry?.startAngle}-${entry?.endAngle}-${entry.midAngle}-${i}`}
          >
            <Shape option={sectorOptions} isActive={isSectorActive} shapeType="sector" {...sectorProps} />
          </Layer>
        );
      })}
      <PieLabels sectors={sectors} props={allOtherPieProps} showLabels={showLabels} />
    </>
  );
}

export function computePieSectors({
  pieSettings,
  displayedData,
  cells,
  offset,
}: {
  displayedData: ReadonlyArray<RealPieData>;
  cells: ReadonlyArray<ReactElement> | undefined;
  pieSettings: {
    dataKey: DataKey<any> | undefined;
    tooltipType?: TooltipType;
    name?: string | number;
    nameKey?: DataKey<any>;
    cx?: number | string;
    cy?: number | string;
    startAngle?: number;
    endAngle?: number;
    paddingAngle?: number;
    minAngle?: number;
    innerRadius?: number | string;
    outerRadius?: number | string | ((dataPoint: any) => number);
    cornerRadius?: number | string;
    presentationProps?: Record<string, string>;
  };
  offset: ChartOffset;
}): ReadonlyArray<PieSectorDataItem> {
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
      const val = getValueByDataKey(entry, dataKey, 0);
      const name = getValueByDataKey(entry, nameKey, i);
      const coordinate = parseCoordinateOfPie(pieSettings, offset, entry);
      const percent = (isNumber(val) ? val : 0) / sum;
      let tempStartAngle;

      const entryWithCellInfo = { ...entry, ...(cells && cells[i] && cells[i].props) };

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
          // @ts-expect-error getValueByDataKey does not validate the output type
          name,
          // @ts-expect-error getValueByDataKey does not validate the output type
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
        value: getValueByDataKey(entry, dataKey),
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

function SectorsWithAnimation({
  props,
  previousSectorsRef,
}: {
  props: InternalProps;
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

  const [isAnimating, setIsAnimating] = useState(true);

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
    <Animate
      begin={animationBegin}
      duration={animationDuration}
      isActive={isAnimationActive}
      easing={animationEasing}
      from={{ t: 0 }}
      to={{ t: 1 }}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      key={animationId}
    >
      {({ t }: { t: number }) => {
        const stepData: PieSectorDataItem[] = [];
        const first = sectors && sectors[0];
        let curAngle = first.startAngle;

        sectors.forEach((entry, index) => {
          const prev = prevSectors && prevSectors[index];
          const paddingAngle = index > 0 ? get(entry, 'paddingAngle', 0) : 0;

          if (prev) {
            const angleIp = interpolateNumber(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);
            const latest = {
              ...entry,
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + angleIp(t) + paddingAngle,
            };

            stepData.push(latest);
            curAngle = latest.endAngle;
          } else {
            const { endAngle, startAngle } = entry;
            const interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
            const deltaAngle = interpolatorAngle(t);
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
              showLabels={!isAnimating}
            />
          </Layer>
        );
      }}
    </Animate>
  );
}

function RenderSectors(props: InternalProps) {
  const { sectors, isAnimationActive, activeShape, inactiveShape } = props;

  const previousSectorsRef = useRef<ReadonlyArray<PieSectorDataItem> | null>(null);
  const prevSectors = previousSectorsRef.current;

  if (isAnimationActive && sectors && sectors.length && (!prevSectors || prevSectors !== sectors)) {
    return <SectorsWithAnimation props={props} previousSectorsRef={previousSectorsRef} />;
  }

  return (
    <PieSectors
      sectors={sectors}
      activeShape={activeShape}
      inactiveShape={inactiveShape}
      allOtherPieProps={props}
      showLabels
    />
  );
}

function PieWithTouchMove(props: InternalProps) {
  const { hide, className, rootTabIndex } = props;

  const layerClass = clsx('recharts-pie', className);

  if (hide) {
    return null;
  }

  return (
    <Layer tabIndex={rootTabIndex} className={layerClass}>
      <RenderSectors {...props} />
    </Layer>
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

function PieImpl(props: Props) {
  const propsWithDefaults: InternalProps = resolveDefaultProps(props, defaultPieProps);

  // Merge event handlers into propsWithDefaults
  const mergedProps: InternalProps = {
    ...propsWithDefaults,
    onClick: props.onClick,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
  };

  const cells = useMemo(() => findAllByType(props.children, Cell), [props.children]);
  const presentationProps = filterProps(mergedProps, false);

  const pieSettings: ResolvedPieSettings = useMemo(
    () => ({
      name: mergedProps.name,
      nameKey: mergedProps.nameKey,
      tooltipType: mergedProps.tooltipType,
      data: mergedProps.data,
      dataKey: mergedProps.dataKey,
      cx: mergedProps.cx,
      cy: mergedProps.cy,
      startAngle: mergedProps.startAngle,
      endAngle: mergedProps.endAngle,
      minAngle: mergedProps.minAngle,
      paddingAngle: mergedProps.paddingAngle,
      innerRadius: mergedProps.innerRadius,
      outerRadius: mergedProps.outerRadius,
      cornerRadius: mergedProps.cornerRadius,
      legendType: mergedProps.legendType,
      fill: mergedProps.fill,
      presentationProps,
    }),
    [
      mergedProps.cornerRadius,
      mergedProps.cx,
      mergedProps.cy,
      mergedProps.data,
      mergedProps.dataKey,
      mergedProps.endAngle,
      mergedProps.innerRadius,
      mergedProps.minAngle,
      mergedProps.name,
      mergedProps.nameKey,
      mergedProps.outerRadius,
      mergedProps.paddingAngle,
      mergedProps.startAngle,
      mergedProps.tooltipType,
      mergedProps.legendType,
      mergedProps.fill,
      presentationProps,
    ],
  );

  const sectors = useAppSelector(state => selectPieSectors(state, pieSettings, cells));

  return (
    <>
      <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={{ ...mergedProps, sectors }} />
      <PieWithTouchMove {...mergedProps} sectors={sectors} />
    </>
  );
}

export class Pie extends PureComponent<Props, State> {
  static displayName = 'Pie';

  static defaultProps = defaultPieProps;

  id = uniqueId('recharts-pie-');

  render() {
    return (
      <>
        <SetPolarGraphicalItem
          data={this.props.data}
          dataKey={this.props.dataKey}
          hide={this.props.hide}
          angleAxisId={0}
          radiusAxisId={0}
          stackId={undefined}
          barSize={undefined}
          type="pie"
        />
        <SetPiePayloadLegend {...this.props} />
        <PieImpl {...this.props} />
        {this.props.children}
      </>
    );
  }
}

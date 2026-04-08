import * as React from 'react';
import { CSSProperties, ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import get from 'es-toolkit/compat/get';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { ReportChartMargin, ReportChartSize, useChartHeight, useChartWidth } from '../context/chartLayoutContext';
import { RechartsWrapper } from './RechartsWrapper';
import { ChartOptions, arrayTooltipSearcher } from '../state/optionsSlice';
import {
  mouseLeaveItem,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  TooltipPayloadConfiguration,
} from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ReportEventSettings } from '../state/ReportEventSettings';
import { useAppDispatch } from '../state/hooks';
import { EventThrottlingProps, Margin, Percent, Coordinate } from '../util/types';
import { COLOR_PANEL } from '../util/Constants';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { WithIdRequired } from '../util/useUniqueId';
import { initialEventSettingsState } from '../state/eventSettingsSlice';
import {
  computeWordCloudLayout,
  getFontSize,
  normalizeFontSizeRange,
  WordCloudCandidate,
  WordCloudSpiralType,
} from '../util/wordCloud/computeWordCloudLayout';

export interface WordCloudDataPoint {
  fill?: string;
  [key: string]: unknown;
}

type WordCloudDataAccessor<DataPointType> = string | number | ((entry: DataPointType) => unknown);
export type WordCloudPropAccessor<DataPointType, TValue> = TValue | ((entry: DataPointType, index: number) => TValue);

export interface WordCloudWord<DataPointType extends WordCloudDataPoint = WordCloudDataPoint> {
  payload: DataPointType;
  text: string;
  value: number;
  fontSize: number;
  rotate: number;
  padding: number;
  fill: string;
  fontFamily?: CSSProperties['fontFamily'];
  fontStyle?: CSSProperties['fontStyle'];
  fontWeight?: CSSProperties['fontWeight'];
  tooltipIndex: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface WordCloudProps<
  DataPointType extends WordCloudDataPoint = WordCloudDataPoint,
> extends EventThrottlingProps {
  className?: string;
  data: ReadonlyArray<DataPointType>;
  width?: number | Percent;
  height?: number | Percent;
  responsive?: boolean;
  dataKey?: WordCloudDataAccessor<DataPointType>;
  nameKey?: WordCloudDataAccessor<DataPointType>;
  fill?: WordCloudPropAccessor<DataPointType, string | undefined>;
  fontFamily?: WordCloudPropAccessor<DataPointType, CSSProperties['fontFamily']>;
  fontStyle?: WordCloudPropAccessor<DataPointType, CSSProperties['fontStyle']>;
  fontWeight?: WordCloudPropAccessor<DataPointType, CSSProperties['fontWeight']>;
  fontSize?: WordCloudPropAccessor<DataPointType, number>;
  fontSizeRange?: readonly [number, number];
  rotate?: WordCloudPropAccessor<DataPointType, number>;
  rotationAngles?: ReadonlyArray<number>;
  spiral?: WordCloudSpiralType;
  seed?: number;
  padding?: WordCloudPropAccessor<DataPointType, number>;
  style?: CSSProperties;
  children?: ReactNode;
  title?: string;
  desc?: string;
  id?: string;
  onClick?: (word: WordCloudWord<DataPointType>, e: React.MouseEvent<SVGTextElement>) => void;
  onMouseEnter?: (word: WordCloudWord<DataPointType>, e: React.MouseEvent<SVGTextElement>) => void;
  onMouseLeave?: (word: WordCloudWord<DataPointType>, e: React.MouseEvent<SVGTextElement>) => void;
}

const defaultWordCloudMargin: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const options: ChartOptions = {
  chartName: 'WordCloud',
  defaultTooltipEventType: 'item',
  validateTooltipEventTypes: ['item'],
  tooltipPayloadSearcher: arrayTooltipSearcher,
  eventEmitter: undefined,
};

type InternalWordCloudProps<DataPointType extends WordCloudDataPoint> = WithIdRequired<
  WordCloudProps<DataPointType> & {
    dataKey: WordCloudDataAccessor<DataPointType>;
    nameKey: WordCloudDataAccessor<DataPointType>;
    responsive: boolean;
    fontSizeRange: readonly [number, number];
    rotationAngles: ReadonlyArray<number>;
    spiral: WordCloudSpiralType;
    seed: number;
    padding: WordCloudPropAccessor<DataPointType, number>;
    throttleDelay: EventThrottlingProps['throttleDelay'];
    throttledEvents: EventThrottlingProps['throttledEvents'];
  }
>;

function hasFill(value: unknown): value is { fill?: unknown } {
  return value != null && typeof value === 'object' && 'fill' in value;
}

function getFill<DataPointType extends WordCloudDataPoint>(
  entry: DataPointType,
  index: number,
  fillFromProps: WordCloudProps<DataPointType>['fill'],
): string {
  if (typeof fillFromProps === 'function') {
    return fillFromProps(entry, index) ?? COLOR_PANEL[index % COLOR_PANEL.length] ?? '#000';
  }

  if (hasFill(entry) && typeof entry.fill === 'string') {
    return entry.fill;
  }

  if (fillFromProps != null) {
    return fillFromProps;
  }

  return COLOR_PANEL[index % COLOR_PANEL.length] ?? '#000';
}

function getWordCloudValue<DataPointType>(
  entry: DataPointType,
  accessor: WordCloudDataAccessor<DataPointType>,
  defaultValue: unknown,
): unknown {
  if (typeof accessor === 'function') {
    return accessor(entry);
  }

  if (typeof accessor === 'string' || typeof accessor === 'number') {
    return get(entry, accessor, defaultValue);
  }

  return defaultValue;
}

function getWordCloudStyleValue<DataPointType, TValue>(
  entry: DataPointType,
  index: number,
  accessor: WordCloudPropAccessor<DataPointType, TValue> | undefined,
  defaultValue: TValue,
): TValue {
  if (typeof accessor === 'function') {
    return (accessor as (entry: DataPointType, index: number) => TValue)(entry, index);
  }

  if (accessor !== undefined) {
    return accessor;
  }

  return defaultValue;
}

type NormalizedWordCloudFields = {
  value: number;
  text: string;
};

function normalizeWordCloudFields<DataPointType>(
  entry: DataPointType,
  dataKey: WordCloudDataAccessor<DataPointType>,
  nameKey: WordCloudDataAccessor<DataPointType>,
): NormalizedWordCloudFields | undefined {
  const rawValue = getWordCloudValue(entry, dataKey, 0);
  const rawText = getWordCloudValue(entry, nameKey, '');
  const value = typeof rawValue === 'number' ? rawValue : Number(rawValue);
  const text = typeof rawText === 'string' || typeof rawText === 'number' ? `${rawText}` : '';

  if (!Number.isFinite(value) || value <= 0 || text.length === 0) {
    return undefined;
  }

  return {
    value,
    text,
  };
}

function toWordCloudCandidate<DataPointType extends WordCloudDataPoint>(
  entry: DataPointType,
  index: number,
  dataKey: WordCloudDataAccessor<DataPointType>,
  nameKey: WordCloudDataAccessor<DataPointType>,
  fill: WordCloudProps<DataPointType>['fill'],
  fontFamily: WordCloudProps<DataPointType>['fontFamily'],
  fontStyle: WordCloudProps<DataPointType>['fontStyle'],
  fontWeight: WordCloudProps<DataPointType>['fontWeight'],
  fontSize: WordCloudProps<DataPointType>['fontSize'],
  fontSizeRange: readonly [number, number],
  rotate: WordCloudProps<DataPointType>['rotate'],
  rotationAngles: ReadonlyArray<number>,
  padding: WordCloudProps<DataPointType>['padding'],
  minValue: number,
  maxValue: number,
): WordCloudCandidate<DataPointType> | undefined {
  const normalizedFields = normalizeWordCloudFields(entry, dataKey, nameKey);

  if (normalizedFields == null) {
    return undefined;
  }

  const { value, text } = normalizedFields;

  const resolvedFontSize = getWordCloudStyleValue(
    entry,
    index,
    fontSize,
    getFontSize(value, minValue, maxValue, fontSizeRange[0], fontSizeRange[1]),
  );
  const resolvedRotate = getWordCloudStyleValue(
    entry,
    index,
    rotate,
    rotationAngles[index % rotationAngles.length] ?? 0,
  );
  const resolvedPadding = getWordCloudStyleValue(entry, index, padding, 2);

  return {
    payload: entry,
    text,
    value,
    fontSize: Math.max(1, resolvedFontSize),
    rotate: resolvedRotate,
    padding: Math.max(0, resolvedPadding),
    fill: getFill(entry, index, fill),
    fontFamily: getWordCloudStyleValue(entry, index, fontFamily, undefined),
    fontStyle: getWordCloudStyleValue(entry, index, fontStyle, undefined),
    fontWeight: getWordCloudStyleValue(entry, index, fontWeight, undefined),
    tooltipIndex: `${index}`,
  };
}

function WordCloudImpl<DataPointType extends WordCloudDataPoint>(props: InternalWordCloudProps<DataPointType>) {
  const {
    className,
    data,
    dataKey,
    nameKey,
    fill,
    fontFamily,
    fontStyle,
    fontWeight,
    fontSize,
    fontSizeRange,
    rotate,
    rotationAngles,
    spiral,
    seed,
    padding,
    children,
    title,
    desc,
    onClick,
    onMouseEnter,
    onMouseLeave,
    id,
  } = props;
  const dispatch = useAppDispatch();
  const width = useChartWidth();
  const height = useChartHeight();

  if (width == null || height == null) {
    return null;
  }

  const normalizedFontSizeRange = normalizeFontSizeRange(fontSizeRange[0], fontSizeRange[1]);
  const valueEntries = data
    .map((entry, index) => {
      const normalizedFields = normalizeWordCloudFields(entry, dataKey, nameKey);

      if (normalizedFields == null) {
        return undefined;
      }

      return { entry, index, value: normalizedFields.value };
    })
    .filter(
      (
        candidate,
      ): candidate is {
        entry: DataPointType;
        index: number;
        value: number;
      } => candidate != null,
    );

  const values = valueEntries.map(candidate => candidate.value);
  const minValue = values.length > 0 ? Math.min(...values) : 0;
  const maxValue = values.length > 0 ? Math.max(...values) : 0;

  const candidates = valueEntries
    .map(({ entry, index }) =>
      toWordCloudCandidate(
        entry,
        index,
        dataKey,
        nameKey,
        fill,
        fontFamily,
        fontStyle,
        fontWeight,
        fontSize,
        [normalizedFontSizeRange.min, normalizedFontSizeRange.max],
        rotate,
        rotationAngles,
        padding,
        minValue,
        maxValue,
      ),
    )
    .filter((candidate): candidate is WordCloudCandidate<DataPointType> => candidate != null);

  const words = computeWordCloudLayout(candidates, {
    width,
    height,
    spiral,
    seed,
  });

  const positions = new Map<string, Coordinate>();
  words.forEach(word => {
    positions.set(word.tooltipIndex, { x: word.x, y: word.y });
  });

  const tooltipEntrySettings: TooltipPayloadConfiguration = {
    dataDefinedOnItem: data,
    getPosition: index => positions.get(index),
    settings: {
      stroke: undefined,
      strokeWidth: undefined,
      fill: typeof fill === 'string' ? fill : undefined,
      dataKey,
      nameKey,
      name: undefined,
      hide: false,
      type: undefined,
      color: typeof fill === 'string' ? fill : undefined,
      unit: '',
      graphicalItemId: id,
    },
  };

  const layerClass = clsx('recharts-word-cloud', className);

  const handleMouseEnter = (word: WordCloudWord<DataPointType>, e: React.MouseEvent<SVGTextElement>) => {
    onMouseEnter?.(word, e);
    dispatch(
      setActiveMouseOverItemIndex({
        activeIndex: word.tooltipIndex,
        activeDataKey: dataKey,
        activeCoordinate: positions.get(word.tooltipIndex),
        activeGraphicalItemId: id,
      }),
    );
  };

  const handleMouseLeave = (word: WordCloudWord<DataPointType>, e: React.MouseEvent<SVGTextElement>) => {
    onMouseLeave?.(word, e);
    dispatch(mouseLeaveItem());
  };

  const handleClick = (word: WordCloudWord<DataPointType>, e: React.MouseEvent<SVGTextElement>) => {
    onClick?.(word, e);
    dispatch(
      setActiveClickItemIndex({
        activeIndex: word.tooltipIndex,
        activeDataKey: dataKey,
        activeCoordinate: positions.get(word.tooltipIndex),
        activeGraphicalItemId: id,
      }),
    );
  };

  return (
    <Surface width={width} height={height} title={title} desc={desc}>
      <Layer className={layerClass}>
        {words.map(word => (
          <text
            key={`word-cloud-word-${word.tooltipIndex}`}
            className="recharts-word-cloud-text"
            x={word.x}
            y={word.y}
            fill={word.fill}
            fontFamily={word.fontFamily}
            fontStyle={word.fontStyle}
            fontWeight={word.fontWeight}
            fontSize={word.fontSize}
            textAnchor="middle"
            dominantBaseline="central"
            transform={`rotate(${word.rotate}, ${word.x}, ${word.y})`}
            data-recharts-item-index={word.tooltipIndex}
            onClick={e => handleClick(word, e)}
            onMouseEnter={e => handleMouseEnter(word, e)}
            onMouseLeave={e => handleMouseLeave(word, e)}
          >
            {word.text}
          </text>
        ))}
      </Layer>
      <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />
      {children}
    </Surface>
  );
}

/**
 * The WordCloud chart displays weighted words, where larger values are rendered with larger text.
 *
 * @consumes ResponsiveContainerContext
 * @provides TooltipEntrySettings
 */
export function WordCloud<DataPointType extends WordCloudDataPoint>(outsideProps: WordCloudProps<DataPointType>) {
  const {
    className,
    style,
    width,
    height,
    responsive: responsiveProp,
    dataKey: dataKeyProp,
    nameKey: nameKeyProp,
    fill: fillProp,
    fontFamily: fontFamilyProp,
    fontStyle: fontStyleProp,
    fontWeight: fontWeightProp,
    fontSize: fontSizeProp,
    fontSizeRange: fontSizeRangeProp,
    rotate: rotateProp,
    rotationAngles: rotationAnglesProp,
    spiral: spiralProp,
    seed: seedProp,
    padding: paddingProp,
    throttleDelay: throttleDelayProp,
    throttledEvents: throttledEventsProp,
    id: externalId,
  } = outsideProps;
  const responsive = responsiveProp ?? false;
  const dataKey = dataKeyProp ?? 'value';
  const nameKey = nameKeyProp ?? 'name';
  const fill = fillProp;
  const fontFamily = fontFamilyProp;
  const fontStyle = fontStyleProp;
  const fontWeight = fontWeightProp;
  const fontSize = fontSizeProp;
  const fontSizeRange = fontSizeRangeProp ?? [12, 46];
  const rotate = rotateProp;
  const rotationAngles = rotationAnglesProp ?? [0];
  const spiral = spiralProp ?? 'archimedean';
  const seed = seedProp ?? 0;
  const padding = paddingProp ?? 3;
  const throttleDelay = throttleDelayProp ?? initialEventSettingsState.throttleDelay;
  const throttledEvents = throttledEventsProp ?? initialEventSettingsState.throttledEvents;
  const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);

  return (
    <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={className ?? 'WordCloud'}>
      <ReportChartSize width={width} height={height} />
      <ReportChartMargin margin={defaultWordCloudMargin} />
      <ReportEventSettings throttleDelay={throttleDelay} throttledEvents={throttledEvents} />
      <TooltipPortalContext.Provider value={tooltipPortal}>
        <RechartsWrapper
          className={className}
          width={width}
          height={height}
          responsive={responsive}
          style={style}
          ref={(node: HTMLDivElement) => {
            if (tooltipPortal == null && node != null) {
              setTooltipPortal(node);
            }
          }}
          onMouseEnter={undefined}
          onMouseLeave={undefined}
          onClick={undefined}
          onMouseMove={undefined}
          onMouseDown={undefined}
          onMouseUp={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onTouchStart={undefined}
          onTouchMove={undefined}
          onTouchEnd={undefined}
        >
          <RegisterGraphicalItemId id={externalId} type="word-cloud">
            {id => (
              <WordCloudImpl
                {...outsideProps}
                responsive={responsive}
                dataKey={dataKey}
                nameKey={nameKey}
                fill={fill}
                fontFamily={fontFamily}
                fontStyle={fontStyle}
                fontWeight={fontWeight}
                fontSize={fontSize}
                fontSizeRange={fontSizeRange}
                rotate={rotate}
                rotationAngles={rotationAngles}
                spiral={spiral}
                seed={seed}
                padding={padding}
                throttleDelay={throttleDelay}
                throttledEvents={throttledEvents}
                id={id}
              />
            )}
          </RegisterGraphicalItemId>
        </RechartsWrapper>
      </TooltipPortalContext.Provider>
    </RechartsStoreProvider>
  );
}

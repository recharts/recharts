import * as React from 'react';
import { CSSProperties, useState } from 'react';
import { scaleLinear } from 'victory-vendor/d3-scale';
import { clsx } from 'clsx';
import get from 'es-toolkit/compat/get';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Sector } from '../shape/Sector';
import { Text } from '../component/Text';
import { polarToCartesian } from '../util/PolarUtils';
import { ReportChartMargin, ReportChartSize, useChartHeight, useChartWidth } from '../context/chartLayoutContext';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import {
  mouseLeaveItem,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  TooltipIndex,
  TooltipPayloadConfiguration,
  TooltipPayloadSearcher,
} from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ChartCoordinate, DataKey, Margin, Percent } from '../util/types';
import { useAppDispatch } from '../state/hooks';
import { RechartsRootState } from '../state/store';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { WithIdRequired } from '../util/useUniqueId';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';

export interface SunburstData {
  [key: string]: any;
  name: string;
  value?: number;
  fill?: string;
  tooltipIndex?: TooltipIndex;
  children?: SunburstData[];
}

/**
 * We require tooltipIndex on each node internally to track which node is active in the tooltip.
 * This is not required from the outside user - we can calculate it as we traverse the tree.
 */
interface SunburstNode extends SunburstData {
  tooltipIndex: TooltipIndex;
}

interface TextOptions {
  fontFamily?: string;
  fontWeight?: string;
  paintOrder?: string;
  stroke?: string;
  fill?: string;
  fontSize?: string;
  pointerEvents?: string;
}

export interface SunburstChartProps {
  className?: string;
  data: SunburstData;
  width?: number | Percent;
  height?: number | Percent;
  /**
   * If true, then it will listen to container size changes and adapt the SVG chart accordingly.
   * If false, then it renders the chart at the specified width and height and will stay that way
   * even if the container size changes.
   *
   * This is similar to ResponsiveContainer but without the need for an extra wrapper component.
   * The `responsive` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).
   * @default false
   */
  responsive?: boolean;
  padding?: number;
  dataKey?: string;
  nameKey?: DataKey<any>;
  /* Padding between each hierarchical level. */
  ringPadding?: number;
  /* The radius of the inner circle at the center of the chart. */
  innerRadius?: number;
  /* Outermost edge of the chart. Defaults to the max possible radius for a circle inscribed in the chart container */
  outerRadius?: number;
  /** The x-coordinate of center  */
  cx?: number;
  /** The y-coordinate of center  */
  cy?: number;
  /** Angle in degrees from which the chart should start. */
  startAngle?: number;
  /** Angle, in degrees, at which the chart should end. Can be used to generate partial sunbursts. */
  endAngle?: number;
  children?: React.ReactNode;
  fill?: string;
  stroke?: string;
  /* an object with svg text options to control the appearance of the chart labels. */
  textOptions?: TextOptions;

  onMouseEnter?: (node: SunburstData, e: React.MouseEvent) => void;

  onMouseLeave?: (node: SunburstData, e: React.MouseEvent) => void;

  onClick?: (node: SunburstData) => void;
  style?: CSSProperties;
  id?: string;
}

interface DrawArcOptions {
  radius: number;
  innerR: number;
  initialAngle: number;
  childColor?: string;
  nestedActiveTooltipIndex?: TooltipIndex | undefined;
}

const defaultTextProps = {
  fontWeight: 'bold',
  paintOrder: 'stroke fill',
  fontSize: '.75rem',
  stroke: '#FFF',
  fill: 'black',
  pointerEvents: 'none',
};

function getMaxDepthOf(node: SunburstData): number {
  if (!node.children || node.children.length === 0) return 1;

  // Calculate depth for each child and find the maximum
  const childDepths = node.children.map(d => getMaxDepthOf(d));
  return 1 + Math.max(...childDepths);
}

function convertMapToRecord<K extends keyof any, V>(map: Map<K, V>): Record<K, V> {
  const record: Record<K, V> = {} as Record<K, V>;
  map.forEach((value, key) => {
    record[key] = value;
  });
  return record;
}

const SetSunburstTooltipEntrySettings = React.memo(
  ({
    dataKey,
    nameKey,
    data,
    stroke,
    fill,
    positions,
    id,
  }: Pick<WithIdRequired<SunburstChartProps>, 'dataKey' | 'data' | 'stroke' | 'fill' | 'nameKey' | 'id'> & {
    positions: SunburstPositionMap;
  }) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: data.children,
      // Redux store will not accept a Map because it's not serializable
      positions: convertMapToRecord(positions),
      // Sunburst does not support many of the properties as other charts do so there's plenty of defaults here
      settings: {
        stroke,
        strokeWidth: undefined,
        fill,
        nameKey,
        dataKey,
        // if there is a nameKey use it, otherwise make the name of the tooltip the dataKey itself
        name: nameKey ? undefined : dataKey,
        hide: false,
        type: undefined,
        color: fill,
        unit: '',
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

// Why is margin not a sunburst prop? No clue. Probably it should be
const defaultSunburstMargin: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export const payloadSearcher: TooltipPayloadSearcher<SunburstData[], SunburstData> = (
  data: SunburstData[],
  activeIndex: TooltipIndex,
): SunburstData | undefined => {
  if (activeIndex == null) {
    return undefined;
  }
  return get(data, activeIndex);
};

export const addToSunburstNodeIndex = (
  indexInChildrenArr: number,
  activeTooltipIndexSoFar: TooltipIndex | undefined = '',
): TooltipIndex => {
  return `${activeTooltipIndexSoFar}children[${indexInChildrenArr}]`;
};

const preloadedState: Partial<RechartsRootState> = {
  options: {
    validateTooltipEventTypes: ['item'],
    defaultTooltipEventType: 'item',
    chartName: 'Sunburst',
    tooltipPayloadSearcher: payloadSearcher,
    eventEmitter: undefined,
  },
};

type SunburstPositionMap = Map<string, ChartCoordinate>;

const defaultSunburstChartProps = {
  padding: 2,
  dataKey: 'value',
  nameKey: 'name',
  ringPadding: 2,
  innerRadius: 50,
  fill: '#333',
  stroke: '#FFF',
  textOptions: defaultTextProps,
  startAngle: 0,
  endAngle: 360,
  responsive: false,
} as const satisfies Partial<SunburstChartProps>;

type InternalSunburstChartProps = WithIdRequired<
  RequiresDefaultProps<SunburstChartProps, typeof defaultSunburstChartProps>
>;

const SunburstChartImpl = ({
  className,
  data,
  children,
  padding,
  dataKey,
  nameKey,
  ringPadding,
  innerRadius,
  fill,
  stroke,
  textOptions,
  outerRadius: outerRadiusFromProps,
  cx: cxFromProps,
  cy: cyFromProps,
  startAngle,
  endAngle,
  onClick,
  onMouseEnter,
  onMouseLeave,
  id,
}: InternalSunburstChartProps) => {
  const dispatch = useAppDispatch();

  const width = useChartWidth();
  const height = useChartHeight();

  if (width == null || height == null) {
    return null;
  }

  const outerRadius = outerRadiusFromProps ?? Math.min(width, height) / 2;
  const cx = cxFromProps ?? width / 2;
  const cy = cyFromProps ?? height / 2;

  const rScale = scaleLinear([0, data[dataKey]], [0, endAngle]);
  const treeDepth = getMaxDepthOf(data);
  const thickness = (outerRadius - innerRadius) / treeDepth;

  const sectors: React.ReactNode[] = [];
  const positions: SunburstPositionMap = new Map<string, ChartCoordinate>([]);

  // event handlers
  function handleMouseEnter(node: SunburstNode, e: React.MouseEvent) {
    if (onMouseEnter) onMouseEnter(node, e);

    dispatch(
      setActiveMouseOverItemIndex({
        activeIndex: node.tooltipIndex,
        activeDataKey: dataKey,
        activeCoordinate: positions.get(node.name),
        activeGraphicalItemId: id,
      }),
    );
  }

  function handleMouseLeave(node: SunburstNode, e: React.MouseEvent) {
    if (onMouseLeave) onMouseLeave(node, e);

    dispatch(mouseLeaveItem());
  }

  function handleClick(node: SunburstNode) {
    if (onClick) onClick(node);

    dispatch(
      setActiveClickItemIndex({
        activeIndex: node.tooltipIndex,
        activeDataKey: dataKey,
        activeCoordinate: positions.get(node.name),
        activeGraphicalItemId: id,
      }),
    );
  }

  // recursively add nodes for each data point and its children
  function drawArcs(childNodes: SunburstData[] | undefined, options: DrawArcOptions, depth: number = 1): any {
    const { radius, innerR, initialAngle, childColor, nestedActiveTooltipIndex } = options;

    let currentAngle = initialAngle;

    if (!childNodes) return; // base case: no children of this node

    childNodes.forEach((d, i) => {
      const currentTooltipIndex = depth === 1 ? `[${i}]` : addToSunburstNodeIndex(i, nestedActiveTooltipIndex);
      const nodeWithIndex: SunburstNode = { ...d, tooltipIndex: currentTooltipIndex };

      const arcLength = rScale(d[dataKey]);
      const start = currentAngle;
      // color priority - if there's a color on the individual point use that, otherwise use parent color or default
      const fillColor = d?.fill ?? childColor ?? fill;
      const { x: textX, y: textY } = polarToCartesian(0, 0, innerR + radius / 2, -(start + arcLength - arcLength / 2));
      currentAngle += arcLength;
      sectors.push(
        <g key={`sunburst-sector-${d.name}-${i}`}>
          <Sector
            onClick={() => handleClick(nodeWithIndex)}
            onMouseEnter={e => handleMouseEnter(nodeWithIndex, e)}
            onMouseLeave={e => handleMouseLeave(nodeWithIndex, e)}
            fill={fillColor}
            stroke={stroke}
            strokeWidth={padding}
            startAngle={start}
            endAngle={start + arcLength}
            innerRadius={innerR}
            outerRadius={innerR + radius}
            cx={cx}
            cy={cy}
          />
          <Text {...textOptions} alignmentBaseline="middle" textAnchor="middle" x={textX + cx} y={cy - textY}>
            {d[dataKey]}
          </Text>
        </g>,
      );

      const { x: tooltipX, y: tooltipY } = polarToCartesian(cx, cy, innerR + radius / 2, start);
      positions.set(d.name, { x: tooltipX, y: tooltipY });

      return drawArcs(
        d.children,
        {
          radius,
          innerR: innerR + radius + ringPadding,
          initialAngle: start,
          childColor: fillColor,
          nestedActiveTooltipIndex: currentTooltipIndex,
        },
        depth + 1,
      );
    });
  }

  drawArcs(data.children, { radius: thickness, innerR: innerRadius, initialAngle: startAngle });

  const layerClass = clsx('recharts-sunburst', className);
  return (
    <Surface width={width} height={height}>
      <Layer className={layerClass}>{sectors}</Layer>
      <SetSunburstTooltipEntrySettings
        dataKey={dataKey}
        nameKey={nameKey}
        data={data}
        stroke={stroke}
        fill={fill}
        positions={positions}
        id={id}
      />
      {children}
    </Surface>
  );
};

export const SunburstChart = (outsideProps: SunburstChartProps) => {
  const props = resolveDefaultProps(outsideProps, defaultSunburstChartProps);
  const { className, width, height, responsive, style, id: externalId } = props;
  const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);
  return (
    <RechartsStoreProvider preloadedState={preloadedState} reduxStoreName={className ?? 'SunburstChart'}>
      <ReportChartSize width={width} height={height} />
      <ReportChartMargin margin={defaultSunburstMargin} />
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
          <RegisterGraphicalItemId id={externalId} type="sunburst">
            {id => <SunburstChartImpl {...props} id={id} />}
          </RegisterGraphicalItemId>
        </RechartsWrapper>
      </TooltipPortalContext.Provider>
    </RechartsStoreProvider>
  );
};

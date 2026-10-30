import * as React from 'react';
import { createContext, CSSProperties, SVGProps, useContext, useMemo, useState } from 'react';
import { scaleLinear } from 'victory-vendor/d3-scale';
import { clsx } from 'clsx';
import get from 'es-toolkit/compat/get';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Sector } from '../shape/Sector';
import { Text, Props as TextProps } from '../component/Text';
import { Props as LabelProps } from '../component/Label';
import {
  ImplicitLabelListType,
  LabelList,
  PolarLabelListContextProvider,
  PolarLabelListEntry,
  Props as LabelListProps,
} from '../component/LabelList';
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
import { ReportEventSettings } from '../state/ReportEventSettings';
import { ChartCoordinate, DataKey, EventThrottlingProps, Margin, Percent } from '../util/types';
import { useAppDispatch } from '../state/hooks';
import { RechartsRootState } from '../state/store';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { WithIdRequired } from '../util/useUniqueId';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { initialEventSettingsState } from '../state/eventSettingsSlice';
import { LabelTheme } from '../theme/RechartsTheme';
import { ColorGraphicalItemStyle, getColorGraphicalItems } from '../theme/themeFill';
import { useRechartsTheme } from '../theme/RechartsThemeContext';
import { getOwnStyles, hasOwnColors, withoutColors } from '../theme/dataEntryStyles';
import { getEffectivePageBackground } from '../theme/pageBackground';
import { SVGElementPropKeysType, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { AllZIndexPortals } from '../zIndex/ZIndexPortal';
import {
  DataLabelColorsContextProvider,
  DataLabelThemeContextProvider,
  filledShapeLabelColors,
} from '../theme/labelTheme';

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

export interface SunburstChartProps extends EventThrottlingProps {
  className?: string;
  /**
   * The source data. Each element should be an object.
   * The properties of each object represent the values of different data dimensions.
   *
   * Use the `dataKey` prop to specify which properties to use.
   *
   * @example data={[{ name: 'a', value: 12, fill: '#8884d8' }, { name: 'b', value: 5, fill: '#83a6ed' }]}
   */
  data: SunburstData;
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  width?: number | Percent;
  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
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
  /**
   * Distance between sectors.
   *
   * @defaultValue 2
   */
  padding?: number;
  /**
   * Decides how to extract value from the data.
   *
   * @defaultValue value
   */
  dataKey?: string;
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
  nameKey?: DataKey<any>;
  /**
   * Padding between each hierarchical level.
   */
  ringPadding?: number;
  /**
   * The radius of the inner circle at the center of the chart.
   *
   * @defaultValue 50
   */
  innerRadius?: number;
  /**
   * Outermost edge of the chart.
   * Defaults to the max possible radius for a circle inscribed in the chart container
   */
  outerRadius?: number;
  /**
   * The x-coordinate of center in pixels.
   * If undefined, it will be set to half of the chart width.
   */
  cx?: number;
  /**
   * The y-coordinate of center in pixels.
   * If undefined, it will be set to half of the chart height.
   */
  cy?: number;
  /** Angle in degrees from which the chart should start. */
  startAngle?: number;
  /** Angle, in degrees, at which the chart should end. */
  endAngle?: number;
  children?: React.ReactNode;
  fill?: string;
  stroke?: string;
  /**
   * An object with text options to control the appearance of the default chart labels.
   * Shared SVG styles also apply to the `label` prop; explicit label props win.
   *
   * @deprecated Prefer `label` for new code. Text-specific options remain supported for default labels.
   */
  textOptions?: TextProps;
  /**
   * Renders one label for each sector. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.
   *   HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.
   * - `function`: a render function of custom label.
   *
   * Explicit LabelList children render independently of this prop.
   *
   * @defaultValue true
   * @since 3.11
   * @example <SunburstChart data={data} label={{ dataKey: 'name', background: true }} />
   */
  label?: ImplicitLabelListType;

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
  /**
   * Theme style of the first-ring sector that this branch starts from.
   * Undefined for the first ring, and without a theme.
   */
  branchStyle?: ColorGraphicalItemStyle;
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
      getPosition: index => positions.get(index),
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

export const payloadSearcher: TooltipPayloadSearcher = (data: unknown, activeIndex: TooltipIndex): unknown => {
  if (activeIndex == null) {
    return undefined;
  }
  return get(data, activeIndex);
};

const addToSunburstNodeIndex = (
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

/**
 * Sector coordinates keyed by their tooltip index (`[0]`, `[0]children[1]`, ...) which is the identity
 * that the tooltip store and the keyboard navigation use when asking for a position.
 */
type SunburstPositionMap = Map<TooltipIndex, ChartCoordinate>;

/**
 * Styles that the chart takes from the theme.
 * Undefined if there is no theme, in which case the chart renders with its legacy styles.
 */
type SunburstThemeStyles = {
  graphicalItems: ReadonlyArray<ColorGraphicalItemStyle>;
  /**
   * The color behind the chart.
   * Separators are painted in this color, so that they read as gaps.
   */
  pageBackground: string | undefined;
};

/**
 * Keep the default labels' Text-only options and baseline while LabelList supplies
 * the sector coordinates, branch label theme, and background layering.
 */
const SunburstTextOptionsContext = createContext<TextProps | undefined>(undefined);

function SunburstLabelContent({ value, fill, style, background, halo, x, y, ...rest }: LabelProps) {
  const textOptions = useContext(SunburstTextOptionsContext);
  const theme = useRechartsTheme();
  return (
    <Text
      {...textOptions}
      {...svgPropertiesAndEvents(rest)}
      x={x}
      y={y}
      fill={theme == null ? textOptions?.fill : fill}
      style={style}
      alignmentBaseline="middle"
      textAnchor="middle"
      background={background}
      halo={halo}
    >
      {value}
    </Text>
  );
}

function isLabelListProps(label: ImplicitLabelListType): label is LabelListProps {
  return typeof label === 'object' && !React.isValidElement(label);
}

function SunburstLabels({ label, textOptions }: Pick<SunburstChartProps, 'label' | 'textOptions'>) {
  const textStyle = textOptions?.style;
  const explicitStyle = label != null && isLabelListProps(label) ? label.style : undefined;
  const style = useMemo(
    () => (textStyle == null ? explicitStyle : { ...textStyle, ...explicitStyle }),
    [textStyle, explicitStyle],
  );
  if (label === false) {
    return null;
  }
  const { ref: _ref, children: _children, offset: _offset, ...textProps } = textOptions ?? {};
  if (label == null || label === true) {
    return (
      <SunburstTextOptionsContext.Provider value={textOptions}>
        <LabelList {...textProps} pointerEvents={textProps.pointerEvents ?? 'none'} content={SunburstLabelContent} />
      </SunburstTextOptionsContext.Provider>
    );
  }
  if (!isLabelListProps(label)) {
    return <LabelList {...textProps} content={label} pointerEvents={textProps.pointerEvents ?? 'none'} />;
  }
  return (
    <LabelList
      {...textProps}
      textBreakAll={textOptions?.breakAll}
      {...label}
      style={style}
      pointerEvents={label.pointerEvents ?? textProps.pointerEvents ?? 'none'}
    />
  );
}

export const defaultSunburstChartProps = {
  padding: 2,
  dataKey: 'value',
  nameKey: 'name',
  ringPadding: 2,
  innerRadius: 50,
  fill: '#333',
  stroke: '#FFF',
  textOptions: defaultTextProps,
  label: true,
  startAngle: 0,
  endAngle: 360,
  responsive: false,
  ...initialEventSettingsState,
} as const satisfies Partial<SunburstChartProps>;

/**
 * Default props when a theme is active.
 * The legacy colors and label styles do not apply, the theme provides these instead.
 */
const {
  fill: _fill,
  stroke: _stroke,
  textOptions: _textOptions,
  ...themedSunburstChartProps
} = defaultSunburstChartProps;

type InternalSunburstChartProps = WithIdRequired<
  RequiresDefaultProps<SunburstChartProps, typeof themedSunburstChartProps>
> & {
  themeStyles: SunburstThemeStyles | undefined;
};

function readEntryStroke(entry: unknown): string | undefined {
  if (entry != null && typeof entry === 'object' && 'stroke' in entry && typeof entry.stroke === 'string') {
    return entry.stroke;
  }
  return undefined;
}

function readEntryStrokeWidth(entry: unknown): string | number | undefined {
  if (entry != null && typeof entry === 'object' && 'strokeWidth' in entry) {
    const { strokeWidth } = entry;
    if (typeof strokeWidth === 'number' || typeof strokeWidth === 'string') {
      return strokeWidth;
    }
  }
  return undefined;
}

type SectorPropsInput = {
  entry: SunburstData;
  /**
   * Resolved fill of the parent sector.
   * A child with no fill of its own paints with this color.
   * It does not count as the child's own color, so a theme separator can still apply.
   */
  inheritedFill: string | undefined;
  /** Explicit chart fill. Includes the legacy default when no theme is active. */
  chartFill: string | undefined;
  /** Explicit chart stroke. Includes the legacy default when no theme is active. */
  chartStroke: string | undefined;
  /** Separator width. An entry `strokeWidth` wins over this. */
  padding: number;
  themeStyles: SunburstThemeStyles | undefined;
  branchStyle: ColorGraphicalItemStyle | undefined;
};

/**
 * SVG props from one data entry, without `id`.
 * `id` is removed so a data id cannot land on the sector.
 */
function entrySvgProps(entry: SunburstData): Omit<Partial<Record<SVGElementPropKeysType, unknown>>, 'id'> {
  const props = svgPropertiesNoEventsFromUnknown(entry);
  if (props == null) {
    return {};
  }
  const { id, ...withoutId } = props;
  return withoutId;
}

/**
 * Resolves the props of one sector.
 *
 * Every valid SVG prop on the data entry is applied, except `id`.
 * Entry props merge over the chart props: a value the entry leaves out comes from the chart.
 *
 * A color is a `fill` or `stroke` on the entry itself or on `<SunburstChart>`.
 * If either has one, the theme colors are not applied, but the other theme styles are. A fill inherited from the parent
 * does not count, so nested sectors of the same color keep the theme separator.
 * Without a theme, the chart's legacy defaults fill that role.
 */
function resolveSectorProps({
  entry,
  inheritedFill,
  chartFill,
  chartStroke,
  padding,
  themeStyles,
  branchStyle,
}: SectorPropsInput): SVGProps<SVGPathElement> {
  const strokeWidth = readEntryStrokeWidth(entry) ?? padding;
  const hasExplicitColors = chartFill != null || chartStroke != null || hasOwnColors(entry);
  const props: SVGProps<SVGPathElement> = {};
  if (themeStyles != null) {
    /*
     * Keep non-color theme fields such as fillOpacity and strokeDasharray.
     * getOwnStyles leaves out `active`, which is not a sector prop.
     */
    Object.assign(props, getOwnStyles(hasExplicitColors ? withoutColors(branchStyle) : branchStyle));
  }
  // Entry props win over the theme, then the resolved colors and separator width.
  Object.assign(props, entrySvgProps(entry));

  if (themeStyles != null && !hasExplicitColors) {
    props.fill = inheritedFill ?? branchStyle?.fill;
    props.stroke = themeStyles.pageBackground ?? branchStyle?.stroke;
    props.strokeWidth = strokeWidth;
    return props;
  }

  props.fill = entry.fill ?? inheritedFill ?? chartFill;
  props.stroke = readEntryStroke(entry) ?? chartStroke;
  props.strokeWidth = strokeWidth;
  return props;
}

const SunburstChartContent = ({
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
  label,
  outerRadius: outerRadiusFromProps,
  cx: cxFromProps,
  cy: cyFromProps,
  startAngle,
  endAngle,
  onClick,
  onMouseEnter,
  onMouseLeave,
  id,
  themeStyles,
  width,
  height,
}: InternalSunburstChartProps & { width: number; height: number }) => {
  const dispatch = useAppDispatch();

  const layout = useMemo(() => {
    const outerRadius = outerRadiusFromProps ?? Math.min(width, height) / 2;
    const cx = cxFromProps ?? width / 2;
    const cy = cyFromProps ?? height / 2;

    const rScale = scaleLinear([0, data[dataKey]], [0, endAngle - startAngle]);
    const treeDepth = getMaxDepthOf(data);
    const thickness = (outerRadius - innerRadius) / treeDepth;

    const sectors: React.ReactNode[] = [];
    const labelListEntries: PolarLabelListEntry[] = [];
    const labelThemes: Array<LabelTheme | undefined> = [];
    const resolveLabelTheme = (index: number): LabelTheme | undefined => labelThemes[index];
    const positions: SunburstPositionMap = new Map<TooltipIndex, ChartCoordinate>([]);

    // event handlers
    function handleMouseEnter(node: SunburstNode, e: React.MouseEvent) {
      if (onMouseEnter) onMouseEnter(node, e);

      dispatch(
        setActiveMouseOverItemIndex({
          activeIndex: node.tooltipIndex,
          activeDataKey: dataKey,
          activeCoordinate: positions.get(node.tooltipIndex),
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
          activeCoordinate: positions.get(node.tooltipIndex),
          activeGraphicalItemId: id,
        }),
      );
    }

    // recursively add nodes for each data point and its children
    function drawArcs(
      childNodes: SunburstData[] | undefined,
      options: DrawArcOptions,
      depth: number = 1,
    ): SunburstData[] | undefined {
      const { radius, innerR, initialAngle, childColor, nestedActiveTooltipIndex } = options;

      let currentAngle = initialAngle;

      if (!childNodes) return undefined; // base case: no children of this node

      return childNodes.map((d, i) => {
        const currentTooltipIndex = depth === 1 ? `[${i}]` : addToSunburstNodeIndex(i, nestedActiveTooltipIndex);
        const nodeWithIndex: SunburstNode = { ...d, tooltipIndex: currentTooltipIndex };

        const arcLength = rScale(d[dataKey]);
        const start = currentAngle;
        const branchStyle =
          options.branchStyle ??
          (themeStyles == null || themeStyles.graphicalItems.length === 0
            ? undefined
            : themeStyles.graphicalItems[i % themeStyles.graphicalItems.length]);
        const sectorProps = resolveSectorProps({
          entry: d,
          inheritedFill: childColor,
          chartFill: fill,
          chartStroke: stroke,
          padding,
          themeStyles,
          branchStyle,
        });
        const fillColor = typeof sectorProps.fill === 'string' ? sectorProps.fill : undefined;
        currentAngle += arcLength;
        sectors.push(
          <g key={`sunburst-sector-${currentTooltipIndex}`}>
            <Sector
              onClick={() => handleClick(nodeWithIndex)}
              onMouseEnter={e => handleMouseEnter(nodeWithIndex, e)}
              onMouseLeave={e => handleMouseLeave(nodeWithIndex, e)}
              {...sectorProps}
              startAngle={start}
              endAngle={start + arcLength}
              innerRadius={innerR}
              outerRadius={innerR + radius}
              cx={cx}
              cy={cy}
            />
          </g>,
        );

        labelListEntries.push({
          value: d[dataKey],
          payload: d,
          fill: fillColor,
          viewBox: {
            cx,
            cy,
            innerRadius: innerR,
            outerRadius: innerR + radius,
            startAngle: start,
            endAngle: start + arcLength,
            clockWise: false,
          },
        });
        labelThemes.push(branchStyle?.label);

        const { x: tooltipX, y: tooltipY } = polarToCartesian(cx, cy, innerR + radius / 2, start);
        positions.set(currentTooltipIndex, { x: tooltipX, y: tooltipY });

        const renderedChildren = drawArcs(
          d.children,
          {
            radius,
            innerR: innerR + radius + ringPadding,
            initialAngle: start,
            childColor: fillColor,
            branchStyle,
            nestedActiveTooltipIndex: currentTooltipIndex,
          },
          depth + 1,
        );
        /*
         * Tooltip reads the color of the entry from the data node.
         * Themed sectors take their color from the theme or from their parent, which the data node does not know,
         * so the tooltip gets a copy of the node with the rendered color.
         */
        return themeStyles == null ? d : { ...d, fill: fillColor, children: renderedChildren };
      });
    }

    const tooltipDataChildren = drawArcs(data.children, {
      radius: thickness,
      innerR: innerRadius,
      initialAngle: startAngle,
    });

    return { sectors, positions, tooltipDataChildren, labelListEntries, resolveLabelTheme };
  }, [
    outerRadiusFromProps,
    width,
    height,
    cxFromProps,
    cyFromProps,
    data,
    dataKey,
    startAngle,
    endAngle,
    innerRadius,
    onMouseEnter,
    dispatch,
    id,
    onMouseLeave,
    onClick,
    themeStyles,
    fill,
    stroke,
    padding,
    ringPadding,
  ]);

  const layerClass = clsx('recharts-sunburst', className);
  return (
    <Surface width={width} height={height}>
      <PolarLabelListContextProvider value={layout.labelListEntries}>
        <DataLabelThemeContextProvider value={layout.resolveLabelTheme}>
          <DataLabelColorsContextProvider value={filledShapeLabelColors}>
            <Layer className={layerClass}>
              <AllZIndexPortals isPanorama={false}>
                {layout.sectors}
                <SunburstLabels label={label} textOptions={textOptions} />
              </AllZIndexPortals>
            </Layer>
            {children}
          </DataLabelColorsContextProvider>
        </DataLabelThemeContextProvider>
      </PolarLabelListContextProvider>
      <SetSunburstTooltipEntrySettings
        dataKey={dataKey}
        nameKey={nameKey}
        data={themeStyles == null ? data : { ...data, children: layout.tooltipDataChildren }}
        stroke={stroke}
        fill={fill}
        positions={layout.positions}
        id={id}
      />
    </Surface>
  );
};

const SunburstChartImpl = (props: InternalSunburstChartProps) => {
  const width = useChartWidth();
  const height = useChartHeight();
  if (width == null || height == null) {
    return null;
  }
  return <SunburstChartContent {...props} width={width} height={height} />;
};

/**
 * The sunburst is a hierarchical chart, similar to a {@link Treemap}, plotted in polar coordinates.
 * Sunburst charts effectively convey the hierarchical relationships and proportions within each level.
 * It is easy to see all the middle layers in the hierarchy, which might get lost in other visualizations.
 * For some datasets, the radial layout may be more visually appealing and intuitive than a traditional {@link Treemap}.
 *
 * @consumes ResponsiveContainerContext
 * @provides TooltipEntrySettings
 */
export const SunburstChart = (outsideProps: SunburstChartProps) => {
  const theme = useRechartsTheme();
  const props: RequiresDefaultProps<SunburstChartProps, typeof themedSunburstChartProps> =
    theme == null
      ? resolveDefaultProps(outsideProps, defaultSunburstChartProps)
      : resolveDefaultProps(outsideProps, themedSunburstChartProps);
  const themeStyles: SunburstThemeStyles | undefined = useMemo(
    () =>
      theme == null
        ? undefined
        : {
            graphicalItems: getColorGraphicalItems(theme.graphicalItems),
            pageBackground: getEffectivePageBackground(theme),
          },
    [theme],
  );
  const { className, width, height, responsive, style, id: externalId, throttleDelay, throttledEvents } = props;
  const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);
  return (
    <RechartsStoreProvider preloadedState={preloadedState} reduxStoreName={className ?? 'SunburstChart'}>
      <ReportChartSize width={width} height={height} />
      <ReportChartMargin margin={defaultSunburstMargin} />
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
          <RegisterGraphicalItemId id={externalId} type="sunburst">
            {id => <SunburstChartImpl {...props} id={id} themeStyles={themeStyles} />}
          </RegisterGraphicalItemId>
        </RechartsWrapper>
      </TooltipPortalContext.Provider>
    </RechartsStoreProvider>
  );
};

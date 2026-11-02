import * as React from 'react';
import { ReactNode, MouseEvent, ReactElement, CSSProperties } from 'react';

import { clsx } from 'clsx';
import { Surface } from '../container/Surface';
import { getSymbolHalfWidth, Symbols } from '../shape/Symbols';
import {
  DataKey,
  LegendType,
  adaptEventsOfChild,
  PresentationAttributesForHTML,
  CartesianLayout,
  SymbolType,
} from '../util/types';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { RechartsTheme } from '../theme/RechartsTheme';
import { useBackwardsCompatibleTheme } from '../theme/useBackwardsCompatibleTheme';
import { RechartsFill } from '../fill/RechartsFill';
import { getFillUrl } from '../fill/fillDefinitions';
import { useUniqueId } from '../util/useUniqueId';

const SIZE = 32;
/**
 * Fill definitions in an icon paint the whole icon, so they get its size.
 */
const ICON_BOUNDS = { width: SIZE, height: SIZE };

/**
 * @public
 */
export type ContentType = ReactElement | ((props: Props) => ReactNode);

/**
 * @public
 */
export type HorizontalAlignmentType = 'center' | 'left' | 'right';
/**
 * @public
 */
export type VerticalAlignmentType = 'top' | 'bottom' | 'middle';
export type Formatter = (value: any, entry: LegendPayload, index: number) => ReactNode;

/**
 * @public
 */
export interface LegendPayload {
  /**
   * This is the text that will be displayed in the legend in the DOM.
   * If undefined, the text will not be displayed, so the icon will be rendered without text.
   */
  value: string | undefined;
  type?: LegendType;
  color?: string;
  /**
   * Different graphical items put different information in the payload object
   * so double check in runtime what are you getting here.
   */
  payload?: object;
  formatter?: Formatter;
  inactive?: boolean;
  legendIcon?: ReactElement<SVGElement>;
  dataKey?: DataKey<any>;
  /**
   * The dots of the graphical item, if it draws one of the predefined symbols at its data points.
   * The legend icon then draws the same symbol, with the same colors as the dots.
   */
  dot?: LegendPayloadDot;
  /**
   * The fill object of the graphical item, if it paints its shapes with an SVG definition.
   * The `rect` icon, and the icons of filled symbols, draw the same definition with the base color in `color`.
   * Inactive items draw the plain inactive color.
   *
   * @since 3.11
   */
  fill?: RechartsFill;
}

/**
 * The dots that a graphical item draws at its data points, as the legend icon needs them.
 *
 * @since 3.11
 * @public
 */
export interface LegendPayloadDot {
  /**
   * The predefined symbol drawn at each data point.
   */
  symbol: SymbolType;
  /**
   * Fill of the dots, as they render in the chart, including the theme.
   */
  fill?: string;
  /**
   * Stroke of the dots, as they render in the chart, including the theme.
   */
  stroke?: string;
}

interface DefaultLegendContentProps {
  /**
   * The size of icon in each legend item.
   * @defaultValue 14
   */
  iconSize?: number;
  /**
   * The type of icon in each legend item.
   */
  iconType?: LegendType;
  /**
   * The layout of legend items inside the legend container.
   * @defaultValue horizontal
   */
  layout?: CartesianLayout;
  /**
   * @deprecated use `position` instead which has more options, is more flexible and has more intuitive default styles.
   *
   * @description Horizontal alignment of the whole Legend container:
   *
   * - `left`: shows the Legend to the left of the chart, and chart width reduces automatically to make space for it.
   * - `right` shows the Legend to the right of the chart, and chart width reduces automatically.
   * - `center` shows the Legend in the middle of chart, and chart width remains unchanged.
   *
   * The exact behavior changes depending on 'verticalAlign' prop.
   *
   * @defaultValue center
   * @see {@link https://recharts.github.io/examples/LegendPosition/ Legend position playground}
   */
  align?: HorizontalAlignmentType;
  /**
   * @deprecated use `position` instead which has more options, is more flexible and has more intuitive default styles.
   *
   * @description Vertical alignment of the whole Legend container:
   *
   * - `bottom`: shows the Legend below chart, and chart height reduces automatically to make space for it.
   * - `top`: shows the Legend above chart, and chart height reduces automatically.
   * - `middle`:  shows the Legend in the middle of chart, covering other content, and chart height remains unchanged.
   * The exact behavior changes depending on `align` prop.
   *
   * @defaultValue middle
   * @see {@link https://recharts.github.io/examples/LegendPosition/ Legend position playground}
   */
  verticalAlign?: VerticalAlignmentType;
  /**
   * The color of the icon when the item is inactive.
   * @defaultValue #ccc
   */
  inactiveColor?: string;
  /**
   * Function to customize how content is serialized before rendering.
   *
   * This should return HTML elements, or strings.
   *
   * @example (value, entry, index) => <span style={{ color: 'red' }}>{value}</span>
   * @example https://codesandbox.io/s/legend-formatter-rmzp9
   */
  formatter?: Formatter;
  /**
   * The customized event handler of mouseenter on the items in this group
   * @example https://recharts.github.io/examples/LegendEffectOpacity
   */
  onMouseEnter?: (data: LegendPayload, index: number, event: MouseEvent<HTMLElement>) => void;
  /**
   * The customized event handler of mouseleave on the items in this group
   * @example https://recharts.github.io/examples/LegendEffectOpacity
   */
  onMouseLeave?: (data: LegendPayload, index: number, event: MouseEvent<HTMLElement>) => void;
  /**
   * The customized event handler of click on the items in this group
   */
  onClick?: (data: LegendPayload, index: number, event: MouseEvent<HTMLElement>) => void;
  /**
   * DefaultLegendContent.payload is omitted from Legend props.
   * A custom payload can be passed here if desired, or it can be passed from the Legend "content" callback.
   */
  payload?: ReadonlyArray<LegendPayload>;
  /**
   * Style of individual items inside the Legend, a `<span>` element.
   * These show the data label (name, or dataKey) and value.
   *
   * If a chart has multiple graphical items then the Legend renders multiple item
   * and each of them gets this itemStyle applied.
   *
   * Pie charts render multiple labels from a single data series.
   *
   * Note that this is different from {@link Tooltip}:
   * - in Tooltip: "labelStyle" styles the title / header
   * - in Tooltip: "itemStyle" styles the individual data points
   * - in Legend: "labelStyle" styles the individual data points
   *
   * Beware of the naming inconsistency!
   *
   * @defaultValue {}
   */
  labelStyle?: CSSProperties;
}

/**
 * @public
 */
export type Props = DefaultLegendContentProps &
  Omit<PresentationAttributesForHTML<LegendPayload, ReactElement>, keyof DefaultLegendContentProps>;

export const defaultLegendContentDefaultProps = {
  align: 'center',
  iconSize: 14,
  inactiveColor: '#ccc',
  layout: 'horizontal',
  verticalAlign: 'middle',
  labelStyle: {},
} as const satisfies Partial<Props>;

type InternalProps = RequiresDefaultProps<Props, typeof defaultLegendContentDefaultProps> & {
  payload: ReadonlyArray<LegendPayload>;
  typographyColor?: CSSProperties['color'];
};

function getStrokeDasharray(input: unknown): string | undefined {
  if (typeof input === 'object' && input !== null && 'strokeDasharray' in input && input.strokeDasharray != null) {
    return String(input.strokeDasharray);
  }
  return undefined;
}

/**
 * Diameter of the symbol in the `line` legend icon, in the 32x32 icon coordinates.
 */
const LINE_ICON_SYMBOL_SIZE = 20;

/**
 * Stroke width of a dot symbol in the legend icon, in the 32x32 icon coordinates.
 * The icon is scaled down, so the stroke width of the dots in the chart would be too thin to see.
 */
const ICON_SYMBOL_STROKE_WIDTH = 3;

/**
 * Colors of a dot symbol in the legend icon.
 * The icon follows the dots. An inactive item draws the stroke with the inactive color,
 * and the fill too when it comes from the item: equal to the item color or to the stroke.
 * Other fills, such as the white fill of the default Line dots, stay.
 */
function getIconDotColors(
  dot: LegendPayloadDot,
  data: LegendPayload,
  inactiveColor: string,
): { fill: string | undefined; stroke: string | undefined } {
  const { fill, stroke } = dot;
  if (!data.inactive) {
    return { fill, stroke };
  }
  const hasColor = (color: string | undefined): color is string => color != null && color !== 'none';
  const isItemFill = hasColor(fill) && (fill === data.color || fill === stroke);
  return {
    fill: isItemFill ? inactiveColor : fill,
    stroke: hasColor(stroke) ? inactiveColor : stroke,
  };
}

/**
 * The `line` legend icon for a graphical item that draws one of the predefined symbols at its data points:
 * a line with that symbol in the middle, in place of the default circle.
 * The symbol has the same colors as the dots in the chart, and the line reaches the edge of the symbol.
 */
function LineWithSymbolIcon({
  dot,
  color,
  dotColors,
}: {
  dot: LegendPayloadDot;
  color: string | undefined;
  dotColors: { fill: string | undefined; stroke: string | undefined };
}) {
  const halfSize = SIZE / 2;
  const { symbol } = dot;
  const halfWidth = getSymbolHalfWidth(symbol, LINE_ICON_SYMBOL_SIZE, 'diameter');
  return (
    <g className="recharts-legend-icon">
      <path
        strokeWidth={4}
        fill="none"
        stroke={color}
        d={`M0,${halfSize}H${halfSize - halfWidth}M${halfSize + halfWidth},${halfSize}H${SIZE}`}
      />
      <Symbols
        type={symbol}
        cx={halfSize}
        cy={halfSize}
        size={LINE_ICON_SYMBOL_SIZE}
        sizeType="diameter"
        fill={dotColors.fill ?? 'none'}
        stroke={dotColors.stroke ?? color}
        strokeWidth={ICON_SYMBOL_STROKE_WIDTH}
        strokeLinejoin="round"
      />
    </g>
  );
}

/**
 * The legend icon that is the dot symbol itself, with the same colors as the dots in the chart.
 */
function DotSymbolIcon({
  dot,
  color,
  dotColors,
}: {
  dot: LegendPayloadDot;
  color: string | undefined;
  dotColors: { fill: string | undefined; stroke: string | undefined };
}) {
  const halfSize = SIZE / 2;
  const hasStroke = dotColors.stroke != null && dotColors.stroke !== 'none';
  const strokeProps = hasStroke
    ? { stroke: dotColors.stroke, strokeWidth: ICON_SYMBOL_STROKE_WIDTH, strokeLinejoin: 'round' as const }
    : {};
  return (
    <Symbols
      fill={dotColors.fill ?? color}
      {...strokeProps}
      cx={halfSize}
      cy={halfSize}
      // keep the stroke inside the icon
      size={hasStroke ? SIZE - ICON_SYMBOL_STROKE_WIDTH : SIZE}
      sizeType="diameter"
      type={dot.symbol}
    />
  );
}

function Icon({
  data,
  iconType,
  inactiveColor,
}: {
  data: LegendPayload;
  iconType: LegendType | undefined;
  inactiveColor: string;
}) {
  const halfSize = SIZE / 2;
  const sixthSize = SIZE / 6;
  const thirdSize = SIZE / 3;
  const color = data.inactive ? inactiveColor : data.color;
  const preferredIcon = iconType ?? data.type;
  const fillId = useUniqueId('recharts-legend-fill');
  const fillObject = data.inactive ? undefined : data.fill;

  if (preferredIcon === 'none') {
    return null;
  }

  /*
   * Filled icons paint with the fill definition of the graphical item.
   * The definition lives in this icon, so it does not depend on IDs elsewhere in the page.
   * The definition gets the size of the icon, so that patterns can scale their tiles to it.
   */
  let areaFill = color;
  let fillDefinition: ReactNode = null;
  if (fillObject != null) {
    const FillDefinition = fillObject.definition;
    areaFill = getFillUrl(fillId);
    fillDefinition = (
      <defs>
        <FillDefinition id={fillId} color={color} bounds={ICON_BOUNDS} />
      </defs>
    );
  }
  if (preferredIcon === 'plainline') {
    return (
      <line
        strokeWidth={4}
        fill="none"
        stroke={color}
        strokeDasharray={getStrokeDasharray(data.payload)}
        x1={0}
        y1={halfSize}
        x2={SIZE}
        y2={halfSize}
        className="recharts-legend-icon"
      />
    );
  }
  const dotColors = data.dot == null ? undefined : getIconDotColors(data.dot, data, inactiveColor);
  if (preferredIcon === 'line' && data.dot != null && dotColors != null) {
    return <LineWithSymbolIcon dot={data.dot} color={color} dotColors={dotColors} />;
  }
  if (preferredIcon === 'line') {
    return (
      <path
        strokeWidth={4}
        fill="none"
        stroke={color}
        d={`M0,${halfSize}h${thirdSize}
            A${sixthSize},${sixthSize},0,1,1,${2 * thirdSize},${halfSize}
            H${SIZE}M${2 * thirdSize},${halfSize}
            A${sixthSize},${sixthSize},0,1,1,${thirdSize},${halfSize}`}
        className="recharts-legend-icon"
      />
    );
  }
  if (preferredIcon === 'rect') {
    return (
      <>
        {fillDefinition}
        <path
          stroke="none"
          fill={areaFill}
          d={`M0,${SIZE / 8}h${SIZE}v${(SIZE * 3) / 4}h${-SIZE}z`}
          className="recharts-legend-icon"
        />
      </>
    );
  }
  if (React.isValidElement(data.legendIcon)) {
    const iconProps: any = { ...data };
    delete iconProps.legendIcon;
    // the fill object is for the built-in icons; it is not a valid SVG paint
    delete iconProps.fill;
    return React.cloneElement(data.legendIcon, iconProps);
  }

  if (data.dot != null && dotColors != null && preferredIcon === data.dot.symbol) {
    return <DotSymbolIcon dot={data.dot} color={color} dotColors={dotColors} />;
  }

  return (
    <>
      {fillDefinition}
      <Symbols fill={areaFill} cx={halfSize} cy={halfSize} size={SIZE} sizeType="diameter" type={preferredIcon} />
    </>
  );
}

function Items(props: InternalProps) {
  const { payload, iconSize, layout, formatter, inactiveColor, iconType, labelStyle, typographyColor } = props;
  const viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
  const itemStyle: CSSProperties = {
    display: layout === 'horizontal' ? 'inline-block' : 'block',
    marginRight: 10,
    whiteSpace: 'nowrap',
  };
  const svgStyle = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };
  return payload.map((entry: LegendPayload, i: number) => {
    const finalFormatter = entry.formatter || formatter;
    const className = clsx({
      'recharts-legend-item': true,
      [`legend-item-${i}`]: true,
      inactive: entry.inactive,
    });

    if (entry.type === 'none') {
      return null;
    }

    const finalLabelStyle = typeof labelStyle === 'object' ? { ...labelStyle } : {};
    finalLabelStyle.color = entry.inactive ? inactiveColor : (finalLabelStyle.color ?? entry.color ?? typographyColor);
    finalLabelStyle.whiteSpace ??= 'normal';
    finalLabelStyle.overflowWrap ??= 'break-word';

    const finalValue = finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value;

    return (
      <li className={className} style={itemStyle} key={`legend-item-${i}`} {...adaptEventsOfChild(props, entry, i)}>
        <Surface
          width={iconSize}
          height={iconSize}
          viewBox={viewBox}
          style={svgStyle}
          aria-label={entry.value == null ? 'legend icon' : `${entry.value} legend icon`}
        >
          <Icon data={entry} iconType={iconType} inactiveColor={inactiveColor} />
        </Surface>
        <span className="recharts-legend-item-text" style={finalLabelStyle}>
          {finalValue}
        </span>
      </li>
    );
  });
}

/**
 * This component is by default rendered inside the {@link Legend} component. You would not use it directly.
 *
 * You can use this component to customize the content of the legend,
 * or you can provide your own completely independent content.
 * @public
 */
export const DefaultLegendContent = (outsideProps: Props) => {
  const theme = useBackwardsCompatibleTheme<Pick<RechartsTheme, 'typography' | 'legend'>>(
    (rechartsTheme: RechartsTheme) => ({
      typography: rechartsTheme.typography,
      legend: rechartsTheme.legend,
    }),
    {},
    undefined,
  );
  const props = resolveDefaultProps(outsideProps, defaultLegendContentDefaultProps);
  const { payload, layout, align } = props;
  const { color: typographyColor, ...typographyStyle } = theme?.typography ?? {};

  if (!payload || !payload.length) {
    return null;
  }

  const finalStyle = {
    padding: 0,
    margin: 0,
    textAlign: layout === 'horizontal' ? align : 'left',
  };

  return (
    <ul className="recharts-default-legend" style={finalStyle}>
      <Items
        {...props}
        labelStyle={{ ...typographyStyle, ...theme?.legend?.labelStyle, ...props.labelStyle }}
        payload={payload}
        typographyColor={typographyColor}
      />
    </ul>
  );
};

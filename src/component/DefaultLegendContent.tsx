/**
 * @fileOverview Default Legend Content
 */
import * as React from 'react';
import { ReactNode, MouseEvent, ReactElement } from 'react';

import { clsx } from 'clsx';
import { Surface } from '../container/Surface';
import { Symbols } from '../shape/Symbols';
import {
  DataKey,
  LegendType,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
  CartesianLayout,
} from '../util/types';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';

const SIZE = 32;
export type ContentType = ReactElement | ((props: Props) => ReactNode);

export type HorizontalAlignmentType = 'center' | 'left' | 'right';
export type VerticalAlignmentType = 'top' | 'bottom' | 'middle';
export type Formatter = (value: any, entry: LegendPayload, index: number) => ReactNode;

export interface LegendPayload {
  /**
   * This is the text that will be displayed in the legend in the DOM.
   * If undefined, the text will not be displayed, so the icon will be rendered without text.
   */
  value: string | undefined;
  type?: LegendType;
  color?: string;
  payload?: {
    strokeDasharray?: number | string;
    value?: any;
  };
  formatter?: Formatter;
  inactive?: boolean;
  legendIcon?: ReactElement<SVGElement>;
  dataKey?: DataKey<any>;
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
   * Horizontal alignment of the whole Legend container:
   *
   * - `left`: shows the Legend to the left of the chart, and chart width reduces automatically to make space for it.
   * - `right` shows the Legend to the right of the chart, and chart width reduces automatically.
   * - `center` shows the Legend in the middle of chart, and chart width remains unchanged.
   *
   * The exact behavior changes depending on 'verticalAlign' prop.
   *
   * @defaultValue center
   */
  align?: HorizontalAlignmentType;
  /**
   * Vertical alignment of the whole Legend container:
   *
   * - `bottom`: shows the Legend below chart, and chart height reduces automatically to make space for it.
   * - `top`: shows the Legend above chart, and chart height reduces automatically.
   * - `middle`:  shows the Legend in the middle of chart, covering other content, and chart height remains unchanged.
   * The exact behavior changes depending on `align` prop.
   *
   * @defaultValue middle
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
  onMouseEnter?: (data: LegendPayload, index: number, event: MouseEvent) => void;
  /**
   * The customized event handler of mouseleave on the items in this group
   * @example https://recharts.github.io/examples/LegendEffectOpacity
   */
  onMouseLeave?: (data: LegendPayload, index: number, event: MouseEvent) => void;
  /**
   * The customized event handler of click on the items in this group
   */
  onClick?: (data: LegendPayload, index: number, event: MouseEvent) => void;
  /**
   * DefaultLegendContent.payload is omitted from Legend props.
   * A custom payload can be passed here if desired, or it can be passed from the Legend "content" callback.
   */
  payload?: ReadonlyArray<LegendPayload>;
}

export type Props = DefaultLegendContentProps &
  Omit<PresentationAttributesAdaptChildEvent<any, ReactElement>, keyof DefaultLegendContentProps>;

const defaultLegendContentDefaultProps = {
  align: 'center',
  iconSize: 14,
  inactiveColor: '#ccc',
  layout: 'horizontal',
  verticalAlign: 'middle',
} as const satisfies Partial<Props>;

type InternalProps = RequiresDefaultProps<Props, typeof defaultLegendContentDefaultProps> & {
  payload: ReadonlyArray<LegendPayload>;
};

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

  if (preferredIcon === 'none') {
    return null;
  }
  if (preferredIcon === 'plainline') {
    return (
      <line
        strokeWidth={4}
        fill="none"
        stroke={color}
        strokeDasharray={data.payload?.strokeDasharray}
        x1={0}
        y1={halfSize}
        x2={SIZE}
        y2={halfSize}
        className="recharts-legend-icon"
      />
    );
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
      <path
        stroke="none"
        fill={color}
        d={`M0,${SIZE / 8}h${SIZE}v${(SIZE * 3) / 4}h${-SIZE}z`}
        className="recharts-legend-icon"
      />
    );
  }
  if (React.isValidElement(data.legendIcon)) {
    const iconProps: any = { ...data };
    delete iconProps.legendIcon;
    return React.cloneElement(data.legendIcon, iconProps);
  }

  return <Symbols fill={color} cx={halfSize} cy={halfSize} size={SIZE} sizeType="diameter" type={preferredIcon} />;
}

function Items(props: InternalProps) {
  const { payload, iconSize, layout, formatter, inactiveColor, iconType } = props;
  const viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
  const itemStyle = {
    display: layout === 'horizontal' ? 'inline-block' : 'block',
    marginRight: 10,
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

    const color = entry.inactive ? inactiveColor : entry.color;
    const finalValue = finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value;

    return (
      <li className={className} style={itemStyle} key={`legend-item-${i}`} {...adaptEventsOfChild(props, entry, i)}>
        <Surface
          width={iconSize}
          height={iconSize}
          viewBox={viewBox}
          style={svgStyle}
          aria-label={`${finalValue} legend icon`}
        >
          <Icon data={entry} iconType={iconType} inactiveColor={inactiveColor} />
        </Surface>
        <span className="recharts-legend-item-text" style={{ color }}>
          {finalValue}
        </span>
      </li>
    );
  });
}

export const DefaultLegendContent = (outsideProps: Props) => {
  const props = resolveDefaultProps(outsideProps, defaultLegendContentDefaultProps);
  const { payload, layout, align } = props;

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
      <Items {...props} payload={payload} />
    </ul>
  );
};

import * as React from 'react';
import { FunctionComponent, ReactElement, ReactNode, SVGProps, useEffect, useMemo } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { Dot } from '../shape/Dot';
import { Polygon } from '../shape/Polygon';
import { Props as TextProps, Text, TextAnchor, TextVerticalAnchor } from '../component/Text';
import {
  adaptEventsOfChild,
  AxisDomain,
  DataKey,
  PresentationAttributesAdaptChildEvent,
  ScaleType,
  TickItem,
} from '../util/types';
import { degreeToRadian, getTickClassName, polarToCartesian } from '../util/PolarUtils';
import { addAngleAxis, AngleAxisSettings, removeAngleAxis } from '../state/polarAxisSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectPolarAngleAxisTicks, selectPolarAxisScale } from '../state/selectors/polarScaleSelectors';
import { selectAngleAxis, selectPolarViewBox } from '../state/selectors/polarAxisSelectors';
import { defaultPolarAngleAxisProps } from './defaultPolarAngleAxisProps';
import { useIsPanorama } from '../context/PanoramaContext';
import { svgPropertiesNoEvents, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { RechartsScale } from '../util/scale/RechartsScale';
import { CustomScaleDefinition } from '../util/scale/CustomScaleDefinition';

const eps = 1e-5;
const COS_45 = Math.cos(degreeToRadian(45));

export interface PolarAngleAxisProps extends ZIndexable {
  /**
   * @defaultValue false
   */
  allowDecimals?: boolean;
  /**
   * Allow the axis has duplicated categories or not when the type of axis is "category".
   * @defaultValue true
   */
  allowDuplicatedCategory?: boolean;
  /**
   * @defaultValue 0
   */
  angleAxisId?: string | number;
  /**
   * If false set, axis line will not be drawn. If true set, axis line will be drawn which have the props calculated internally.
   * If object set, axis line will be drawn which have the props merged by the internal calculated props and the option.
   * @defaultValue true
   */
  axisLine?: boolean | SVGProps<SVGLineElement>;
  /**
   * The type of axis line.
   * @defaultValue polygon
   */
  axisLineType?: 'polygon' | 'circle';
  /**
   * The x-coordinate of center.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  cx?: number;
  /**
   * The y-coordinate of center.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  cy?: number;
  /**
   * Decides how to extract the value from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value.
   *
   * If undefined, it will reuse the dataKey of graphical items.
   */
  dataKey?: DataKey<any>;
  domain?: AxisDomain;
  /**
   * The orientation of axis text.
   * @defaultValue 'outer'
   */
  orientation?: 'inner' | 'outer';
  /**
   * The outer radius of circle grid.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   */
  radius?: number | string;
  /**
   * @defaultValue false
   */
  reversed?: boolean;
  /**
   * @defaultValue auto
   */
  scale?: ScaleType | CustomScaleDefinition;
  /**
   * If false set, ticks will not be drawn. If true set, ticks will be drawn which have the props calculated internally.
   * If object set, ticks will be drawn which have the props merged by the internal calculated props and the option.
   * If ReactElement set, the option can be the custom tick element.
   * If set a function, the function will be called to render customized ticks.
   * @defaultValue true
   */
  tick?:
    | SVGProps<SVGTextElement>
    | ReactElement<SVGElement>
    | ((props: TickItemTextProps) => ReactElement<SVGElement>)
    | boolean;
  tickCount?: number;
  /**
   * The formatter function of ticks.
   */
  tickFormatter?: (value: any, index: number) => string;
  /**
   * If false set, tick lines will not be drawn. If true set, tick lines will be drawn which have the props calculated internally.
   * If object set, tick lines will be drawn which have the props merged by the internal calculated props and the option.
   * @defaultValue true
   */
  tickLine?: boolean | SVGProps<SVGLineElement>;
  /**
   * @defaultValue 8
   */
  tickSize?: number;
  /**
   * The array of every tick's value and angle.
   */
  ticks?: ReadonlyArray<TickItem>;
  /**
   * The type of axis.
   * @defaultValue category
   */
  type?: 'category' | 'number'; // so there is code that checks if angleAxis.type is number, but it actually never behaves as a number
  /**
   * @defaultValue 500
   */
  zIndex?: number;
  /**
   * The customized event handler of click on the ticks of this axis
   */
  onClick?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mousedown on the the ticks of this axis
   */
  onMouseDown?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseup on the ticks of this axis
   */
  onMouseUp?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mousemove on the ticks of this axis
   */
  onMouseMove?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseover on the ticks of this axis
   */
  onMouseOver?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseout on the ticks of this axis
   */
  onMouseOut?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseenter on the ticks of this axis
   */
  onMouseEnter?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseleave on the ticks of this axis
   */
  onMouseLeave?: (data: any, index: number, e: React.MouseEvent) => void;
}

type AxisSvgProps = Omit<
  PresentationAttributesAdaptChildEvent<any, SVGTextElement>,
  'scale' | 'type' | 'dangerouslySetInnerHTML'
>;

export type Props = AxisSvgProps & PolarAngleAxisProps;

type PropsWithDefaults = RequiresDefaultProps<Props, typeof defaultPolarAngleAxisProps>;

type InsideProps = Omit<PropsWithDefaults, 'scale'> & {
  cx: number;
  cy: number;
  radius: number;
  ticks: ReadonlyArray<TickItem>;
  scale: RechartsScale;
};

const AXIS_TYPE = 'angleAxis';

type AngleAxisSettingsReporter = AngleAxisSettings & { children: ReactNode };

function SetAngleAxisSettings(props: AngleAxisSettingsReporter): ReactNode {
  const dispatch = useAppDispatch();
  const settings = useMemo(() => {
    const { children, ...rest } = props;
    return rest;
  }, [props]);
  const synchronizedSettings = useAppSelector(state => selectAngleAxis(state, settings.id));
  const settingsAreSynchronized = settings === synchronizedSettings;
  useEffect(() => {
    dispatch(addAngleAxis(settings));
    return () => {
      dispatch(removeAngleAxis(settings));
    };
  }, [dispatch, settings]);

  if (settingsAreSynchronized) {
    return props.children;
  }
  return null;
}

/**
 * Calculate the coordinate of line endpoint
 * @param data The data if there are ticks
 * @param props axis settings
 * @return (x1, y1): The point close to text,
 *         (x2, y2): The point close to axis
 */
const getTickLineCoord = (
  data: TickItem,
  props: InsideProps,
): {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
} => {
  const { cx, cy, radius, orientation, tickSize } = props;
  const tickLineSize = tickSize || 8;
  const p1 = polarToCartesian(cx, cy, radius, data.coordinate);
  const p2 = polarToCartesian(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate);

  return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
};

/**
 * Get the text-anchor of each tick
 * @param data Data of ticks
 * @param orientation of the axis ticks
 * @return text-anchor
 */
const getTickTextAnchor = (data: TickItem, orientation: Props['orientation']): TextAnchor => {
  const cos = Math.cos(degreeToRadian(-data.coordinate));

  if (cos > eps) {
    return orientation === 'outer' ? 'start' : 'end';
  }
  if (cos < -eps) {
    return orientation === 'outer' ? 'end' : 'start';
  }
  return 'middle';
};

/**
 * Get the text vertical anchor of each tick
 * @param data Data of a tick
 * @return text vertical anchor
 */
const getTickTextVerticalAnchor = (data: TickItem): TextVerticalAnchor => {
  const cos = Math.cos(degreeToRadian(-data.coordinate));
  const sin = Math.sin(degreeToRadian(-data.coordinate));

  // handle top and bottom sectors: 90±45deg and 270±45deg
  if (Math.abs(cos) <= COS_45) {
    // sin > 0: top sector, sin < 0: bottom sector
    return sin > 0 ? 'start' : 'end';
  }

  return 'middle';
};

const AxisLine = (props: InsideProps) => {
  const { cx, cy, radius, axisLineType, axisLine, ticks } = props;
  if (!axisLine) {
    return null;
  }
  const axisLineProps = {
    ...svgPropertiesNoEvents(props),
    fill: 'none',
    ...svgPropertiesNoEvents(axisLine),
  };

  if (axisLineType === 'circle') {
    // @ts-expect-error wrong SVG element type
    return <Dot className="recharts-polar-angle-axis-line" {...axisLineProps} cx={cx} cy={cy} r={radius} />;
  }
  const points = ticks.map(entry => polarToCartesian(cx, cy, radius, entry.coordinate));

  // @ts-expect-error wrong SVG element type
  return <Polygon className="recharts-polar-angle-axis-line" {...axisLineProps} points={points} />;
};

type TickItemProps = {
  tick: PolarAngleAxisProps['tick'];
  tickProps: TickItemTextProps;
  value: string | number;
};

export type TickItemTextProps = TextProps & {
  index: number;
  payload: any;
};

const TickItemText = ({ tick, tickProps, value }: TickItemProps): ReactNode => {
  if (!tick) {
    return null;
  }
  if (React.isValidElement(tick)) {
    // @ts-expect-error element cloning makes typescript unhappy and me too
    return React.cloneElement(tick, tickProps);
  }
  if (typeof tick === 'function') {
    return tick(tickProps);
  }
  return (
    <Text {...tickProps} className="recharts-polar-angle-axis-tick-value">
      {value}
    </Text>
  );
};

const Ticks = (props: InsideProps) => {
  const { tick, tickLine, tickFormatter, stroke, ticks } = props;
  const axisProps = svgPropertiesNoEvents(props);
  const customTickProps = svgPropertiesNoEventsFromUnknown(tick);
  const tickLineProps = {
    ...axisProps,
    fill: 'none',
    ...svgPropertiesNoEvents(tickLine),
  };

  const items = ticks.map((entry, i) => {
    const lineCoord = getTickLineCoord(entry, props);
    const textAnchor: TextAnchor = getTickTextAnchor(entry, props.orientation);
    const verticalAnchor: TextVerticalAnchor = getTickTextVerticalAnchor(entry);
    const tickProps: TickItemTextProps = {
      ...axisProps,
      // @ts-expect-error customTickProps is contributing unknown props
      textAnchor,
      verticalAnchor,
      // @ts-expect-error customTickProps is contributing unknown props
      stroke: 'none',
      // @ts-expect-error customTickProps is contributing unknown props
      fill: stroke,
      ...customTickProps,
      index: i,
      payload: entry,
      x: lineCoord.x2,
      y: lineCoord.y2,
    };

    return (
      <Layer
        className={clsx('recharts-polar-angle-axis-tick', getTickClassName(tick))}
        key={`tick-${entry.coordinate}`}
        {...adaptEventsOfChild(props, entry, i)}
      >
        {/* @ts-expect-error we're passing recharts internal `scale` prop in place of SVG scale prop */}
        {tickLine && <line className="recharts-polar-angle-axis-tick-line" {...tickLineProps} {...lineCoord} />}
        <TickItemText
          tick={tick}
          tickProps={tickProps}
          value={tickFormatter ? tickFormatter(entry.value, i) : entry.value}
        />
      </Layer>
    );
  });

  return <Layer className="recharts-polar-angle-axis-ticks">{items}</Layer>;
};

export const PolarAngleAxisWrapper: FunctionComponent<PropsWithDefaults> = (defaultsAndInputs: PropsWithDefaults) => {
  const { angleAxisId } = defaultsAndInputs;

  const viewBox = useAppSelector(selectPolarViewBox);
  const scale = useAppSelector(state => selectPolarAxisScale(state, 'angleAxis', angleAxisId));
  const isPanorama = useIsPanorama();
  const ticks = useAppSelector(state => selectPolarAngleAxisTicks(state, 'angleAxis', angleAxisId, isPanorama));

  if (viewBox == null || !ticks || !ticks.length || scale == null) {
    return null;
  }

  const props: InsideProps = {
    ...defaultsAndInputs,
    scale,
    ...viewBox,
    radius: viewBox.outerRadius,
    ticks,
  };

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <Layer className={clsx('recharts-polar-angle-axis', AXIS_TYPE, props.className)}>
        <AxisLine {...props} />
        <Ticks {...props} />
      </Layer>
    </ZIndexLayer>
  );
};

/**
 * @provides PolarLabelContext
 * @consumes PolarViewBoxContext
 */
export function PolarAngleAxis(outsideProps: Props): React.ReactNode {
  const props = resolveDefaultProps(outsideProps, defaultPolarAngleAxisProps);

  return (
    <SetAngleAxisSettings
      id={props.angleAxisId}
      scale={props.scale}
      type={props.type}
      dataKey={props.dataKey}
      unit={undefined}
      name={props.name}
      allowDuplicatedCategory={false} // Ignoring the prop on purpose because axis calculation behaves as if it was false and Tooltip requires it to be true.
      allowDataOverflow={false}
      reversed={props.reversed}
      includeHidden={false}
      allowDecimals={props.allowDecimals}
      tickCount={props.tickCount}
      // @ts-expect-error the type does not match. Is RadiusAxis really expecting what it says?
      ticks={props.ticks}
      tick={props.tick}
      domain={props.domain}
    >
      <PolarAngleAxisWrapper {...props} />
    </SetAngleAxisSettings>
  );
}

PolarAngleAxis.displayName = 'PolarAngleAxis';

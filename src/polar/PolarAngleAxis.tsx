import React, { FunctionComponent, PureComponent, ReactElement, SVGProps, useEffect } from 'react';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { Dot } from '../shape/Dot';
import { Polygon } from '../shape/Polygon';
import { Text } from '../component/Text';
import {
  adaptEventsOfChild,
  AxisDomain,
  DataKey,
  PresentationAttributesAdaptChildEvent,
  ScaleType,
  TickItem,
} from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { getTickClassName, polarToCartesian } from '../util/PolarUtils';
import { RechartsScale } from '../util/ChartUtils';
import { addAngleAxis, AngleAxisSettings, removeAngleAxis } from '../state/polarAxisSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectPolarAxisScale, selectPolarAxisTicks } from '../state/selectors/polarScaleSelectors';
import { selectPolarViewBox } from '../state/selectors/polarAxisSelectors';

const RADIAN = Math.PI / 180;
const eps = 1e-5;

/**
 * These are injected from Redux, are required, but cannot be set by user.
 */
interface PropsInjectedFromRedux {
  cx?: number;
  cy?: number;
  radius?: number;
}

export interface PolarAngleAxisProps extends PropsInjectedFromRedux {
  allowDecimals?: boolean;
  domain?: AxisDomain;
  allowDuplicatedCategory?: boolean;
  angleAxisId?: string | number;
  axisLineType?: 'polygon' | 'circle';
  ticks?: ReadonlyArray<TickItem>;
  orientation?: 'inner' | 'outer';
  axisLine?: boolean | SVGProps<SVGLineElement>;
  tickSize?: number;
  tickCount?: number;
  tickLine?: boolean | SVGProps<SVGLineElement>;
  tickFormatter?: (value: any, index: number) => string;
  reversed: boolean;
  dataKey?: DataKey<any>;
  tick?: SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | boolean;
  scale: ScaleType | RechartsScale;
  type?: 'category' | 'number'; // so there is code that checks if angleAxis.type is number but it actually never behaves as a number
}

type AxisSvgProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGTextElement>, 'scale' | 'type'>;

export type Props = AxisSvgProps & PolarAngleAxisProps;

const AXIS_TYPE = 'angleAxis';

function SetAngleAxisSettings(settings: AngleAxisSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addAngleAxis(settings));
    return () => {
      dispatch(removeAngleAxis(settings));
    };
  });
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
  props: Props,
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
const getTickTextAnchor = (data: TickItem, orientation: Props['orientation']): string => {
  const cos = Math.cos(-data.coordinate * RADIAN);

  if (cos > eps) {
    return orientation === 'outer' ? 'start' : 'end';
  }
  if (cos < -eps) {
    return orientation === 'outer' ? 'end' : 'start';
  }
  return 'middle';
};

type PropsWithTicks = Props & { ticks: ReadonlyArray<TickItem> };

const AxisLine = (props: PropsWithTicks): ReactElement => {
  const { cx, cy, radius, axisLineType, axisLine, ticks } = props;
  if (!axisLine) {
    return null;
  }
  const axisLineProps = {
    ...filterProps(props, false),
    fill: 'none',
    ...filterProps(axisLine, false),
  };

  if (axisLineType === 'circle') {
    return <Dot className="recharts-polar-angle-axis-line" {...axisLineProps} cx={cx} cy={cy} r={radius} />;
  }
  const points = ticks.map(entry => polarToCartesian(cx, cy, radius, entry.coordinate));

  return <Polygon className="recharts-polar-angle-axis-line" {...axisLineProps} points={points} />;
};

type TickItemProps = {
  tick: PolarAngleAxisProps['tick'];
  tickProps: any;
  value: string | number;
  allAxisProps: Props;
};

const TickItemText = ({ tick, allAxisProps, tickProps, value }: TickItemProps): ReactElement => {
  if (!tick) {
    return null;
  }
  if (React.isValidElement(tick)) {
    return React.cloneElement(tick, tickProps);
  }
  if (isFunction(tick)) {
    return tick(allAxisProps);
  }
  return (
    <Text {...tickProps} className="recharts-polar-angle-axis-tick-value">
      {value}
    </Text>
  );
};

const Ticks = (props: PropsWithTicks) => {
  const { tick, tickLine, tickFormatter, stroke, ticks } = props;
  const axisProps = filterProps(props, false);
  const customTickProps = filterProps(tick, false);
  const tickLineProps = {
    ...axisProps,
    fill: 'none',
    ...filterProps(tickLine, false),
  };

  const items = ticks.map((entry, i) => {
    const lineCoord = getTickLineCoord(entry, props);
    const textAnchor = getTickTextAnchor(entry, props.orientation);
    const tickProps = {
      textAnchor,
      ...axisProps,
      stroke: 'none',
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
        {tickLine && <line className="recharts-polar-angle-axis-tick-line" {...tickLineProps} {...lineCoord} />}
        <TickItemText
          tick={tick}
          tickProps={tickProps}
          value={tickFormatter ? tickFormatter(entry.value, i) : entry.value}
          allAxisProps={props}
        />
      </Layer>
    );
  });

  return <Layer className="recharts-polar-angle-axis-ticks">{items}</Layer>;
};

export const PolarAngleAxisWrapper: FunctionComponent<Props> = defaultsAndInputs => {
  const { angleAxisId } = defaultsAndInputs;

  const viewBox = useAppSelector(selectPolarViewBox);
  const scale = useAppSelector(state => selectPolarAxisScale(state, 'angleAxis', angleAxisId));
  const props: Props = {
    ...defaultsAndInputs,
    scale,
    ...viewBox,
    radius: viewBox.outerRadius,
  };

  const ticks = useAppSelector(state => selectPolarAxisTicks(state, 'angleAxis', angleAxisId));

  if (!ticks || !ticks.length) {
    return null;
  }

  return (
    <Layer className={clsx('recharts-polar-angle-axis', AXIS_TYPE, props.className)}>
      <AxisLine {...props} ticks={ticks} />
      <Ticks {...props} ticks={ticks} />
    </Layer>
  );
};

export class PolarAngleAxis extends PureComponent<Props> {
  static displayName = 'PolarAngleAxis';

  static axisType = AXIS_TYPE;

  static defaultProps: Partial<Props> = {
    type: 'category',
    angleAxisId: 0,
    scale: 'auto',
    cx: 0,
    cy: 0,
    orientation: 'outer',
    axisLine: true,
    tickLine: true,
    tickSize: 8,
    tick: true,
    reversed: false,
    allowDuplicatedCategory: true, // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  };

  render(): React.ReactNode {
    if (this.props.radius <= 0) return null;

    return (
      <>
        <SetAngleAxisSettings
          id={this.props.angleAxisId}
          scale={this.props.scale}
          type={this.props.type}
          dataKey={this.props.dataKey}
          unit={undefined}
          name={this.props.name}
          allowDuplicatedCategory={false} // Ignoring the prop on purpose because axis calculation behaves as if it was false and Tooltip requires it to be true.
          allowDataOverflow={false}
          reversed={this.props.reversed}
          includeHidden={false}
          allowDecimals={this.props.allowDecimals}
          tickCount={this.props.tickCount}
          // @ts-expect-error the type does not match. Is RadiusAxis really expecting what it says?
          ticks={this.props.ticks}
          tick={this.props.tick}
          domain={this.props.domain}
        />
        <PolarAngleAxisWrapper {...this.props} />
      </>
    );
  }
}

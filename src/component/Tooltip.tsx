/**
 * @fileOverview Tooltip
 */
import React, {
  CSSProperties,
  ReactNode,
  ReactElement,
  SVGProps,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { translateStyle } from 'react-smooth';
import _ from 'lodash';
import classNames from 'classnames';
import { DefaultTooltipContent, ValueType, NameType, Payload, Props as DefaultProps } from './DefaultTooltipContent';

import { Global } from '../util/Global';
import { isNumber } from '../util/DataUtils';
import { AnimationTiming } from '../util/types';

const CLS_PREFIX = 'recharts-tooltip-wrapper';

const EPS = 1;
export type ContentType<TValue extends ValueType, TName extends NameType> =
  | ReactElement
  | ((props: TooltipProps<TValue, TName>) => ReactNode);

type UniqueFunc<TValue extends ValueType, TName extends NameType> = (entry: Payload<TValue, TName>) => unknown;
type UniqueOption<TValue extends ValueType, TName extends NameType> = boolean | UniqueFunc<TValue, TName>;
function defaultUniqBy<TValue extends ValueType, TName extends NameType>(entry: Payload<TValue, TName>) {
  return entry.dataKey;
}
function getUniqPayload<TValue extends ValueType, TName extends NameType>(
  option: UniqueOption<TValue, TName>,
  payload: Array<Payload<TValue, TName>>,
) {
  if (option === true) {
    return _.uniqBy(payload, defaultUniqBy);
  }

  if (_.isFunction(option)) {
    return _.uniqBy(payload, option);
  }

  return payload;
}

function renderContent<TValue extends ValueType, TName extends NameType>(
  content: ContentType<TValue, TName>,
  props: TooltipProps<TValue, TName>,
) {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  }
  if (_.isFunction(content)) {
    return React.createElement(content as any, props);
  }

  return <DefaultTooltipContent {...props} />;
}

export type TooltipProps<TValue extends ValueType, TName extends NameType> = DefaultProps<TValue, TName> & {
  allowEscapeViewBox?: {
    x?: boolean;
    y?: boolean;
  };
  reverseDirection?: {
    x?: boolean;
    y?: boolean;
  };
  content?: ContentType<TValue, TName>;
  viewBox?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  active?: boolean;
  offset?: number;
  wrapperStyle?: CSSProperties;
  cursor?: boolean | ReactElement | SVGProps<SVGElement>;
  coordinate?: {
    x?: number;
    y?: number;
  };
  position?: {
    x?: number;
    y?: number;
  };
  trigger?: 'hover' | 'click';
  shared?: boolean;
  payloadUniqBy?: UniqueOption<TValue, TName>;
  isAnimationActive?: boolean;
  animationDuration?: number;
  animationEasing?: AnimationTiming;
  filterNull?: boolean;
  useTranslate3d?: boolean;
};

const tooltipDefaultProps: TooltipProps<number, string> = {
  active: false,
  allowEscapeViewBox: { x: false, y: false },
  reverseDirection: { x: false, y: false },
  offset: 10,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  coordinate: { x: 0, y: 0 },
  // this doesn't exist on TooltipProps
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  cursorStyle: {},
  separator: ' : ',
  wrapperStyle: {},
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: true,
  trigger: 'hover',
  isAnimationActive: !Global.isSsr,
  animationEasing: 'ease',
  animationDuration: 400,
  filterNull: true,
  useTranslate3d: false,
};

export const Tooltip = <TValue extends ValueType, TName extends NameType>(
  props: TooltipProps<TValue, TName> & { children?: React.ReactNode },
) => {
  const [boxWidth, setBoxWidth] = useState(-1);
  const [boxHeight, setBoxHeight] = useState(-1);
  const [dismissed, setDismissed] = useState(false);
  const [dismissedAtCoordinate, setDismissedAtCoordinate] = useState({ x: 0, y: 0 });

  const wrapperNode = useRef<HTMLDivElement>();
  const { allowEscapeViewBox, reverseDirection, coordinate, offset, position, viewBox } = props;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDismissed(true);
        setDismissedAtCoordinate(prev => ({
          ...prev,
          x: coordinate?.x,
          y: coordinate?.y,
        }));
      }
    },
    [coordinate?.x, coordinate?.y],
  );

  useEffect(() => {
    const updateBBox = () => {
      if (dismissed) {
        document.removeEventListener('keydown', handleKeyDown);
        if (coordinate?.x !== dismissedAtCoordinate.x || coordinate?.y !== dismissedAtCoordinate.y) {
          setDismissed(false);
        }
      } else {
        document.addEventListener('keydown', handleKeyDown);
      }

      if (wrapperNode.current && wrapperNode.current.getBoundingClientRect) {
        const box = wrapperNode.current.getBoundingClientRect();

        if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
          setBoxWidth(box.width);
          setBoxHeight(box.height);
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        setBoxWidth(-1);
        setBoxHeight(-1);
      }
    };

    updateBBox();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [boxHeight, boxWidth, coordinate, dismissed, dismissedAtCoordinate.x, dismissedAtCoordinate.y, handleKeyDown]);

  const getTranslate = ({
    key,
    tooltipDimension,
    viewBoxDimension,
  }: {
    key: 'x' | 'y';
    tooltipDimension: number;
    viewBoxDimension: number;
  }) => {
    if (position && isNumber(position[key])) {
      return position[key];
    }

    const negative = coordinate[key] - tooltipDimension - offset;
    const positive = coordinate[key] + offset;
    if (allowEscapeViewBox?.[key]) {
      return reverseDirection[key] ? negative : positive;
    }

    if (reverseDirection?.[key]) {
      const tooltipBoundary = negative;
      const viewBoxBoundary = viewBox[key];
      if (tooltipBoundary < viewBoxBoundary) {
        return Math.max(positive, viewBox[key]);
      }
      return Math.max(negative, viewBox[key]);
    }
    const tooltipBoundary = positive + tooltipDimension;
    const viewBoxBoundary = viewBox[key] + viewBoxDimension;
    if (tooltipBoundary > viewBoxBoundary) {
      return Math.max(negative, viewBox[key]);
    }
    return Math.max(positive, viewBox[key]);
  };

  const {
    payload,
    payloadUniqBy,
    filterNull,
    active,
    wrapperStyle,
    useTranslate3d,
    isAnimationActive,
    animationDuration,
    animationEasing,
  } = props;
  const finalPayload = getUniqPayload(
    payloadUniqBy,
    filterNull && payload && payload.length ? payload.filter(entry => !_.isNil(entry.value)) : payload,
  );
  const hasPayload = finalPayload && finalPayload.length;
  const { content } = props;
  let outerStyle: CSSProperties = {
    pointerEvents: 'none',
    visibility: !dismissed && active && hasPayload ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    ...wrapperStyle,
  };
  let translateX, translateY;

  if (position && isNumber(position.x) && isNumber(position.y)) {
    translateX = position.x;
    translateY = position.y;
  } else if (boxWidth > 0 && boxHeight > 0 && coordinate) {
    translateX = getTranslate({
      key: 'x',
      tooltipDimension: boxWidth,
      viewBoxDimension: viewBox.width,
    });

    translateY = getTranslate({
      key: 'y',
      tooltipDimension: boxHeight,
      viewBoxDimension: viewBox.height,
    });
  } else {
    outerStyle.visibility = 'hidden';
  }

  outerStyle = {
    ...translateStyle({
      transform: useTranslate3d
        ? `translate3d(${translateX}px, ${translateY}px, 0)`
        : `translate(${translateX}px, ${translateY}px)`,
    }),
    ...outerStyle,
  };

  if (isAnimationActive && active) {
    outerStyle = {
      ...translateStyle({
        transition: `transform ${animationDuration}ms ${animationEasing}`,
      }),
      ...outerStyle,
    };
  }

  const cls = classNames(CLS_PREFIX, {
    [`${CLS_PREFIX}-right`]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x,
    [`${CLS_PREFIX}-left`]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x,
    [`${CLS_PREFIX}-bottom`]:
      isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y,
    [`${CLS_PREFIX}-top`]: isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y,
  });

  return (
    // ESLint is disabled to allow listening to the `Escape` key. Refer to
    // https://github.com/recharts/recharts/pull/2925
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div tabIndex={-1} role="dialog" className={cls} style={outerStyle} ref={wrapperNode}>
      {renderContent(content, {
        ...props,
        payload: finalPayload,
      })}
    </div>
  );
};

// needs to be set so that renderByOrder can find the correct handler function
Tooltip.displayName = 'Tooltip';

/**
 * needs to be set so that renderByOrder can access an have default values for
 * children.props when there are no props set by the consumer
 * doesn't work if using default parameters
 */
Tooltip.defaultProps = tooltipDefaultProps;

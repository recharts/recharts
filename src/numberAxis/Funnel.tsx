/**
 * @fileOverview Render sectors of a funnel
 */
import React, { PureComponent, ReactElement } from 'react';
import Animate from 'react-smooth';
import isFunction from 'lodash/isFunction';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import omit from 'lodash/omit';
import isEqual from 'lodash/isEqual';

import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { Props as TrapezoidProps } from '../shape/Trapezoid';
import { LabelList } from '../component/LabelList';
import { Cell, Props as CellProps } from '../component/Cell';
import { findAllByType, filterProps } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { interpolateNumber } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import {
  LegendType,
  TooltipType,
  AnimationTiming,
  ChartOffset,
  DataKey,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
  AnimationDuration,
  ActiveShape,
} from '../util/types';
import { FunnelTrapezoid } from '../util/FunnelUtils';

export interface FunnelTrapezoidItem extends TrapezoidProps {
  value?: number | string;
  payload?: any;
  isActive: boolean;
}

interface InternalFunnelProps {
  className?: string;
  dataKey: DataKey<any>;
  nameKey?: DataKey<any>;
  data?: any[];
  hide?: boolean;
  shape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  activeShape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  activeIndex?: number | number[];
  lastShapeType?: 'triangle' | 'rectangle';
  reversed?: boolean;

  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  isAnimationActive?: boolean;
  animateNewValues?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  id?: string;
  trapezoids?: FunnelTrapezoidItem[];
  animationId?: number;
}

export type FunnelProps = PresentationAttributesAdaptChildEvent<any, SVGElement> & TrapezoidProps & InternalFunnelProps;

interface State {
  readonly prevTrapezoids?: FunnelTrapezoidItem[];
  readonly curTrapezoids?: FunnelTrapezoidItem[];
  readonly prevAnimationId?: number;
  readonly isAnimationFinished?: boolean;
}

export class Funnel extends PureComponent<FunnelProps, State> {
  static displayName = 'Funnel';

  static defaultProps = {
    stroke: '#fff',
    fill: '#808080',
    legendType: 'rect',
    labelLine: true,
    hide: false,
    isAnimationActive: !Global.isSsr,
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease',
    nameKey: 'name',
    lastShapeType: 'triangle',
  };

  static getRealFunnelData = (item: Funnel) => {
    const { data, children } = item.props;
    const presentationProps = filterProps(item.props);
    const cells = findAllByType(children, Cell);

    if (data && data.length) {
      return data.map((entry: any, index: number) => ({
        payload: entry,
        ...presentationProps,
        ...entry,
        ...(cells && cells[index] && cells[index].props),
      }));
    }

    if (cells && cells.length) {
      return cells.map((cell: ReactElement<CellProps>) => ({ ...presentationProps, ...cell.props }));
    }

    return [];
  };

  static getRealWidthHeight = (item: Funnel, offset: ChartOffset) => {
    const customWidth = item.props.width;
    const { width, height, left, right, top, bottom } = offset;
    const realHeight = height;
    let realWidth = width;

    if (isNumber(customWidth)) {
      realWidth = customWidth;
    } else if (isString(customWidth)) {
      realWidth = (realWidth * parseFloat(customWidth)) / 100;
    }

    return {
      realWidth: realWidth - left - right - 50,
      realHeight: realHeight - bottom - top,
      offsetX: (width - realWidth) / 2,
      offsetY: (height - realHeight) / 2,
    };
  };

  static getComposedData = ({ item, offset }: { item: Funnel; offset: ChartOffset }) => {
    const funnelData = Funnel.getRealFunnelData(item);
    const { dataKey, nameKey, tooltipType, lastShapeType, reversed } = item.props;
    const { left, top } = offset;
    const { realHeight, realWidth, offsetX, offsetY } = Funnel.getRealWidthHeight(item, offset);
    const maxValue = Math.max.apply(
      null,
      funnelData.map((entry: any) => getValueByDataKey(entry, dataKey, 0)),
    );
    const len = funnelData.length;
    const rowHeight = realHeight / len;
    const parentViewBox = { x: offset.left, y: offset.top, width: offset.width, height: offset.height };

    let trapezoids = funnelData.map((entry: any, i: number) => {
      const rawVal = getValueByDataKey(entry, dataKey, 0);
      const name = getValueByDataKey(entry, nameKey, i);
      let val = rawVal;
      let nextVal;

      if (i !== len - 1) {
        nextVal = getValueByDataKey(funnelData[i + 1], dataKey, 0);

        if (nextVal instanceof Array) {
          [nextVal] = nextVal;
        }
      } else if (rawVal instanceof Array && rawVal.length === 2) {
        [val, nextVal] = rawVal;
      } else if (lastShapeType === 'rectangle') {
        nextVal = val;
      } else {
        nextVal = 0;
      }

      const x = ((maxValue - val) * realWidth) / (2 * maxValue) + top + 25 + offsetX;
      const y = rowHeight * i + left + offsetY;
      const upperWidth = (val / maxValue) * realWidth;
      const lowerWidth = (nextVal / maxValue) * realWidth;

      const tooltipPayload = [{ name, value: val, payload: entry, dataKey, type: tooltipType }];
      const tooltipPosition = {
        x: x + upperWidth / 2,
        y: y + rowHeight / 2,
      };

      return {
        x,
        y,
        width: Math.max(upperWidth, lowerWidth),
        upperWidth,
        lowerWidth,
        height: rowHeight,
        name,
        val,
        tooltipPayload,
        tooltipPosition,
        ...omit(entry, 'width'),
        payload: entry,
        parentViewBox,
        labelViewBox: {
          x: x + (upperWidth - lowerWidth) / 4,
          y,
          width: Math.abs(upperWidth - lowerWidth) / 2 + Math.min(upperWidth, lowerWidth),
          height: rowHeight,
        },
      };
    });

    if (reversed) {
      trapezoids = trapezoids.map((entry: any, index: number) => {
        const newY = entry.y - index * rowHeight + (len - 1 - index) * rowHeight;
        return {
          ...entry,
          upperWidth: entry.lowerWidth,
          lowerWidth: entry.upperWidth,
          x: entry.x - (entry.lowerWidth - entry.upperWidth) / 2,
          y: entry.y - index * rowHeight + (len - 1 - index) * rowHeight,
          tooltipPosition: { ...entry.tooltipPosition, y: newY + rowHeight / 2 },
          labelViewBox: {
            ...entry.labelViewBox,
            y: newY,
          },
        };
      });
    }

    return {
      trapezoids,
      data: funnelData,
    };
  };

  state: State = { isAnimationFinished: false };

  static getDerivedStateFromProps(nextProps: FunnelProps, prevState: State): State {
    if (nextProps.animationId !== prevState.prevAnimationId) {
      return {
        prevAnimationId: nextProps.animationId,
        curTrapezoids: nextProps.trapezoids,
        prevTrapezoids: prevState.curTrapezoids,
      };
    }
    if (nextProps.trapezoids !== prevState.curTrapezoids) {
      return {
        curTrapezoids: nextProps.trapezoids,
      };
    }

    return null;
  }

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;
    this.setState({ isAnimationFinished: true });

    if (isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;
    this.setState({ isAnimationFinished: false });

    if (isFunction(onAnimationStart)) {
      onAnimationStart();
    }
  };

  isActiveIndex(i: number) {
    const { activeIndex } = this.props;

    if (Array.isArray(activeIndex)) {
      return activeIndex.indexOf(i) !== -1;
    }

    return i === activeIndex;
  }

  renderTrapezoidsStatically(trapezoids: FunnelTrapezoidItem[]) {
    const { shape, activeShape } = this.props;

    return trapezoids.map((entry, i) => {
      const trapezoidOptions = this.isActiveIndex(i) ? activeShape : shape;
      const trapezoidProps = {
        ...entry,
        isActive: this.isActiveIndex(i),
        stroke: entry.stroke,
      };

      return (
        <Layer
          className="recharts-funnel-trapezoid"
          {...adaptEventsOfChild(this.props, entry, i)}
          key={`trapezoid-${i}`} // eslint-disable-line react/no-array-index-key
          role="img"
        >
          <FunnelTrapezoid option={trapezoidOptions} {...trapezoidProps} />
        </Layer>
      );
    });
  }

  renderTrapezoidsWithAnimation() {
    const { trapezoids, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } =
      this.props;
    const { prevTrapezoids } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`funnel-${animationId}`}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
      >
        {({ t }: { t: number }) => {
          const stepData = trapezoids.map((entry: any, index: number) => {
            const prev = prevTrapezoids && prevTrapezoids[index];

            if (prev) {
              const interpolatorX = interpolateNumber(prev.x, entry.x);
              const interpolatorY = interpolateNumber(prev.y, entry.y);
              const interpolatorUpperWidth = interpolateNumber(prev.upperWidth, entry.upperWidth);
              const interpolatorLowerWidth = interpolateNumber(prev.lowerWidth, entry.lowerWidth);
              const interpolatorHeight = interpolateNumber(prev.height, entry.height);

              return {
                ...entry,
                x: interpolatorX(t),
                y: interpolatorY(t),
                upperWidth: interpolatorUpperWidth(t),
                lowerWidth: interpolatorLowerWidth(t),
                height: interpolatorHeight(t),
              };
            }

            const interpolatorX = interpolateNumber(entry.x + entry.upperWidth / 2, entry.x);
            const interpolatorY = interpolateNumber(entry.y + entry.height / 2, entry.y);
            const interpolatorUpperWidth = interpolateNumber(0, entry.upperWidth);
            const interpolatorLowerWidth = interpolateNumber(0, entry.lowerWidth);
            const interpolatorHeight = interpolateNumber(0, entry.height);

            return {
              ...entry,
              x: interpolatorX(t),
              y: interpolatorY(t),
              upperWidth: interpolatorUpperWidth(t),
              lowerWidth: interpolatorLowerWidth(t),
              height: interpolatorHeight(t),
            };
          });
          return <Layer>{this.renderTrapezoidsStatically(stepData)}</Layer>;
        }}
      </Animate>
    );
  }

  renderTrapezoids() {
    const { trapezoids, isAnimationActive } = this.props;
    const { prevTrapezoids } = this.state;

    if (
      isAnimationActive &&
      trapezoids &&
      trapezoids.length &&
      (!prevTrapezoids || !isEqual(prevTrapezoids, trapezoids))
    ) {
      return this.renderTrapezoidsWithAnimation();
    }
    return this.renderTrapezoidsStatically(trapezoids);
  }

  render() {
    const { hide, trapezoids, className, isAnimationActive } = this.props;
    const { isAnimationFinished } = this.state;

    if (hide || !trapezoids || !trapezoids.length) {
      return null;
    }

    const layerClass = clsx('recharts-trapezoids', className);

    return (
      <Layer className={layerClass}>
        {this.renderTrapezoids()}
        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, trapezoids)}
      </Layer>
    );
  }
}

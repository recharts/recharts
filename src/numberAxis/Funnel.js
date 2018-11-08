/**
 * @fileOverview Render sectors of a funnel
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Trapezoid from '../shape/Trapezoid';
import LabelList from '../component/LabelList';
import Cell from '../component/Cell';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES,
  getPresentationAttributes, findAllByType, filterEventsOfChild, isSsr } from '../util/ReactUtils';
import { interpolateNumber } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';

@pureRender
class Funnel extends Component {

  static displayName = 'Funnel';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: PropTypes.string,
    animationId: PropTypes.number,
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
    nameKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
    data: PropTypes.arrayOf(PropTypes.object),
    trapezoids: PropTypes.arrayOf(PropTypes.object),
    hide: PropTypes.bool,
    activeShape: PropTypes.oneOfType([
      PropTypes.object, PropTypes.func, PropTypes.element,
    ]),
    activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf([
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'spring',
      'linear',
    ]),
  };

  static defaultProps = {
    stroke: '#fff',
    fill: '#808080',
    legendType: 'rect',
    labelLine: true,
    hide: false,
    isAnimationActive: !isSsr(),
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease',
    nameKey: 'name',
  };

  static getRealFunnelData = (item) => {
    const { data, children } = item.props;
    const presentationProps = getPresentationAttributes(item.props);
    const cells = findAllByType(children, Cell);

    if (data && data.length) {
      return data.map((entry, index) => ({
        payload: entry,
        ...presentationProps,
        ...entry,
        ...(cells && cells[index] && cells[index].props),
      }));
    }

    if (cells && cells.length) {
      return cells.map(cell => ({ ...presentationProps, ...cell.props }));
    }

    return [];
  };

  static getRealWidthHeight = (item, offset) => {
    const customWidth = item.props.width;
    const { width, height, left, right, top, bottom } = offset;
    const realHeight = height;
    let realWidth = width;

    if (_.isNumber(customWidth)) {
      realWidth = customWidth;
    } else if (_.isString(customWidth)) {
      realWidth = realWidth * parseFloat(customWidth) / 100;
    }

    return {
      realWidth: realWidth - left - right - 50,
      realHeight: realHeight - bottom - top,
      offsetX: (width - realWidth) / 2,
      offsetY: (height - realHeight) / 2,
    };
  }

  static getComposedData = ({ item, offset, onItemMouseLeave, onItemMouseEnter }) => {
    const funnelData = Funnel.getRealFunnelData(item);
    const { dataKey, nameKey } = item.props;
    const { left, top } = offset;
    const { realHeight, realWidth, offsetX, offsetY } = Funnel.getRealWidthHeight(item, offset);
    const maxValue = getValueByDataKey(funnelData[0], dataKey, 0);
    const len = funnelData.length;
    const rowHeight = realHeight / len;

    const trapezoids = funnelData.map((entry, i) => {
      const val = getValueByDataKey(entry, dataKey, 0);
      const name = getValueByDataKey(entry, nameKey, i);
      let nextVal = 0;
      if (i !== (len - 1)) {
        nextVal = getValueByDataKey(funnelData[i + 1], dataKey, 0);
      }

      const x = (maxValue - val) * realWidth / (2 * maxValue) + top + 25 + offsetX;
      const y = realHeight / len * i + left + offsetY;
      const upperWidth = val / maxValue * realWidth;
      const lowerWidth = nextVal / maxValue * realWidth;

      const tooltipPayload = [{ name, value: val, payload: entry }];
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
        ..._.omit(entry, 'width'),
        payload: entry
      };
    });

    return {
      trapezoids,
      data: funnelData,
      onMouseLeave: onItemMouseLeave,
      onMouseEnter: onItemMouseEnter,
    };
  }

  state = { isAnimationFinished: false };

  componentWillReceiveProps(nextProps) {
    const { animationId, trapezoids } = this.props;

    if (nextProps.isAnimationActive !== this.props.isAnimationActive) {
      this.cachePrevData([]);
    } else if (nextProps.animationId !== animationId) {
      this.cachePrevData(trapezoids);
    }
  }

  cachePrevData = (trapezoids) => {
    this.setState({ prevTrapezoids: trapezoids });
  };

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;
    this.setState({ isAnimationFinished: true });

    if (_.isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;
    this.setState({ isAnimationFinished: false });

    if (_.isFunction(onAnimationStart)) {
      onAnimationStart();
    }
  };

  isActiveIndex(i) {
    const { activeIndex } = this.props;

    if (Array.isArray(activeIndex)) {
      return activeIndex.indexOf(i) !== -1;
    }

    return i === activeIndex;
  }

  static renderTrapezoidItem(option, props) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    } if (_.isFunction(option)) {
      return option(props);
    } if (_.isPlainObject(option)) {
      return <Trapezoid {...props} {...option} />;
    }

    return <Trapezoid {...props} />;
  }

  renderTrapezoidsStatically(trapezoids) {
    const { activeShape } = this.props;

    return trapezoids.map((entry, i) => {
      const trapezoidOptions = this.isActiveIndex(i) ? activeShape : null;
      const trapezoidProps = {
        ...entry,
        stroke: entry.stroke
      };

      return (
        <Layer
          className="recharts-funnel-trapezoid"
          {...filterEventsOfChild(this.props, entry, i)}
          key={`trapezoid-${i}`}
        >
          {this.constructor.renderTrapezoidItem(trapezoidOptions, trapezoidProps)}
        </Layer>
      );
    });
  }

  renderTrapezoidsWithAnimation() {
    const { trapezoids, isAnimationActive, animationBegin, animationDuration,
      animationEasing, animationId } = this.props;
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
        {
          ({ t }) => {
            const stepData = trapezoids.map((entry, index) => {
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
            return (
              <Layer>
                {this.renderTrapezoidsStatically(stepData)}
              </Layer>
            );
          }
        }
      </Animate>
    );
  }

  renderTrapezoids() {
    const { trapezoids, isAnimationActive } = this.props;
    const { prevTrapezoids } = this.state;

    if (isAnimationActive && trapezoids && trapezoids.length &&
      (!prevTrapezoids || !_.isEqual(prevTrapezoids, trapezoids))) {
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

    const layerClass = classNames('recharts-trapezoids', className);

    return (
      <Layer className={layerClass}>
        {this.renderTrapezoids()}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, trapezoids)}
      </Layer>
    );
  }
}

export default Funnel;

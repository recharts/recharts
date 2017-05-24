/**
 * @fileOverview Render sectors of a pie
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import { interpolateNumber } from 'd3-interpolate';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Sector from '../shape/Sector';
import Curve from '../shape/Curve';
import Text from '../component/Text';
import Label from '../component/Label';
import LabelList from '../component/LabelList';
import Cell from '../component/Cell';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES,
  getPresentationAttributes, findAllByType, filterEventsOfChild, isSsr } from '../util/ReactUtils';
import { polarToCartesian, getMaxRadius } from '../util/PolarUtils';
import { isNumber, uniqueId, getPercentValue, mathSign } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';

@pureRender
class Pie extends Component {

  static displayName = 'Pie';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: PropTypes.string,
    animationId: PropTypes.number,
    cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    paddingAngle: PropTypes.number,
    innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cornerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
    nameKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
    data: PropTypes.arrayOf(PropTypes.object),
    minAngle: PropTypes.number,
    legendType: PropTypes.oneOf(LEGEND_TYPES),
    maxRadius: PropTypes.number,

    sectors: PropTypes.arrayOf(PropTypes.object),
    hide: PropTypes.bool,
    labelLine: PropTypes.oneOfType([
      PropTypes.object, PropTypes.func, PropTypes.element, PropTypes.bool,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.shape({
        offsetRadius: PropTypes.number,
      }),
      PropTypes.func, PropTypes.element, PropTypes.bool,
    ]),
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
    // The abscissa of pole
    cx: '50%',
    // The ordinate of pole
    cy: '50%',
    // The start angle of first sector
    startAngle: 0,
    // The direction of drawing sectors
    endAngle: 360,
    // The inner radius of sectors
    innerRadius: 0,
    // The outer radius of sectors
    outerRadius: '80%',
    paddingAngle: 0,
    labelLine: true,
    hide: false,
    minAngle: 0,
    isAnimationActive: !isSsr(),
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  static parseDeltaAngle = ({ startAngle, endAngle }) => {
    const sign = mathSign(endAngle - startAngle);
    const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

    return sign * deltaAngle;
  };

  static getRealPieData = (item) => {
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

  static parseCoordinateOfPie = (item, offset) => {
    const { top, left, width, height } = offset;
    const maxPieRadius = getMaxRadius(width, height);
    const cx = left + getPercentValue(item.props.cx, width, width / 2);
    const cy = top + getPercentValue(item.props.cy, height, height / 2);
    const innerRadius = getPercentValue(item.props.innerRadius, maxPieRadius, 0);
    const outerRadius = getPercentValue(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
    const maxRadius = item.props.maxRadius || Math.sqrt(width * width + height * height) / 2;

    return { cx, cy, innerRadius, outerRadius, maxRadius };
  }

  static getComposedData = ({ item, offset, onItemMouseLeave, onItemMouseEnter }) => {
    const pieData = Pie.getRealPieData(item);
    if (!pieData || !pieData.length) { return []; }

    const { cornerRadius, startAngle, endAngle, paddingAngle, dataKey, nameKey } = item.props;
    const minAngle = Math.abs(item.props.minAngle);
    const coordinate = Pie.parseCoordinateOfPie(item, offset);
    const len = pieData.length;
    const deltaAngle = Pie.parseDeltaAngle({ startAngle, endAngle });
    const absDeltaAngle = Math.abs(deltaAngle);
    const totalPadingAngle = (absDeltaAngle >= 360 ? len : (len - 1)) * paddingAngle;
    const realTotalAngle = absDeltaAngle - len * minAngle - totalPadingAngle;
    const sum = pieData.reduce((result, entry) => {
      const val = getValueByDataKey(entry, dataKey, 0);
      return result + (isNumber(val) ? val : 0);
    }, 0);
    let sectors = [];
    let prev;

    if (sum > 0) {
      sectors = pieData.map((entry, i) => {
        const val = getValueByDataKey(entry, dataKey, 0);
        const name = getValueByDataKey(entry, nameKey, i);
        const percent = (isNumber(val) ? val : 0) / sum;
        let tempStartAngle;

        if (i) {
          tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle;
        } else {
          tempStartAngle = startAngle;
        }

        const tempEndAngle = tempStartAngle + mathSign(deltaAngle) *
          (minAngle + percent * realTotalAngle);
        const midAngle = (tempStartAngle + tempEndAngle) / 2;
        const middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
        const tooltipPayload = [{ name, value: val, payload: entry }];
        const tooltipPosition = polarToCartesian(
          coordinate.cx, coordinate.cy, middleRadius, midAngle
        );

        prev = {
          percent, cornerRadius, name, tooltipPayload, midAngle, middleRadius, tooltipPosition,
          ...entry,
          ...coordinate,
          value: getValueByDataKey(entry, dataKey),
          startAngle: tempStartAngle,
          endAngle: tempEndAngle,
        };

        return prev;
      });
    }

    return {
      ...coordinate,
      sectors,
      onMouseLeave: onItemMouseLeave,
      onMouseEnter: onItemMouseEnter,
    };
  }

  state = { isAnimationFinished: false };

  componentWillReceiveProps(nextProps) {
    const { animationId, sectors } = this.props;

    if (nextProps.animationId !== animationId) {
      this.cachePrevData(sectors);
    }
  }

  getTextAnchor(x, cx) {
    if (x > cx) {
      return 'start';
    } else if (x < cx) {
      return 'end';
    }

    return 'middle';
  }

  cachePrevData = (sectors) => {
    this.setState({ prevSectors: sectors });
  };

  id = uniqueId('recharts-pie-');

  isActiveIndex(i) {
    const { activeIndex } = this.props;

    if (Array.isArray(activeIndex)) {
      return activeIndex.indexOf(i) !== -1;
    }

    return i === activeIndex;
  }

  handleAnimationEnd = () => {
    this.setState({
      isAnimationFinished: true,
    });
  };

  renderClipPath() {
    const { cx, cy, maxRadius, startAngle, isAnimationActive, animationDuration,
      animationEasing, animationBegin, animationId } = this.props;

    return (
      <defs>
        <clipPath id={this.id}>
          <Animate
            easing={animationEasing}
            isActive={isAnimationActive}
            duration={animationDuration}
            key={animationId}
            animationBegin={animationBegin}
            onAnimationEnd={this.handleAnimationEnd}
            from={{
              endAngle: startAngle,
            }}
            to={{
              outerRadius: Math.max(this.props.outerRadius, maxRadius || 0),
              innerRadius: 0,
              endAngle: this.props.endAngle,
            }}
          >
            {
              ({ outerRadius, innerRadius, endAngle }) => (
                <Sector
                  cx={cx}
                  cy={cy}
                  outerRadius={outerRadius}
                  innerRadius={innerRadius}
                  startAngle={startAngle}
                  endAngle={endAngle}
                />
              )
            }
          </Animate>
        </clipPath>
      </defs>
    );
  }

  renderLabelLineItem(option, props) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      return option(props);
    }

    return <Curve {...props} type="linear" className="recharts-pie-label-line" />;
  }

  renderLabelItem(option, props, value) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    }
    let label = value;
    if (_.isFunction(option)) {
      label = option(props);
      if (React.isValidElement(label)) {
        return label;
      }
    }

    return (
      <Text
        {...props}
        alignmentBaseline="middle"
        className="recharts-pie-label-text"
      >
        {label}
      </Text>
    );
  }

  renderLabels(sectors) {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { label, labelLine, dataKey } = this.props;
    const pieProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);
    const customLabelLineProps = getPresentationAttributes(labelLine);
    const offsetRadius = (label && label.offsetRadius) || 20;

    const labels = sectors.map((entry, i) => {
      const midAngle = (entry.startAngle + entry.endAngle) / 2;
      const endPoint = polarToCartesian(
        entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle
      );
      const labelProps = {
        ...pieProps,
        ...entry,
        stroke: 'none',
        ...customLabelProps,
        index: i,
        textAnchor: this.getTextAnchor(endPoint.x, entry.cx),
        ...endPoint,
      };
      const lineProps = {
        ...pieProps,
        ...entry,
        fill: 'none',
        stroke: entry.fill,
        ...customLabelLineProps,
        points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
      };

      return (
        <Layer key={`label-${i}`}>
          {labelLine && this.renderLabelLineItem(labelLine, lineProps)}
          {this.renderLabelItem(label, labelProps, getValueByDataKey(entry, dataKey))}
        </Layer>
      );
    });

    return <Layer className="recharts-pie-labels">{labels}</Layer>;
  }

  renderSectorItem(option, props) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      return option(props);
    } else if (_.isPlainObject(option)) {
      return <Sector {...props} {...option} />;
    }

    return <Sector {...props} />;
  }

  renderSectorsStatically(sectors) {
    const { activeShape } = this.props;

    return sectors.map((entry, i) => (
      <Layer
        className="recharts-pie-sector"
        {...filterEventsOfChild(this.props, entry, i)}
        key={`sector-${i}`}
      >
        {this.renderSectorItem(this.isActiveIndex(i) ? activeShape : null, entry)}
      </Layer>
    ));
  }

  renderSectorsWithAnimation() {
    const { sectors, isAnimationActive, animationBegin, animationDuration,
      animationEasing, animationId } = this.props;
    const { prevSectors } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`pie-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
      >
        {
          ({ t }) => {
            const stepData = [];
            const first = sectors && sectors[0];
            let curAngle = first.startAngle;

            sectors.forEach((entry, index) => {
              const prev = prevSectors && prevSectors[index];

              if (prev) {
                const angleIp = interpolateNumber(
                  prev.endAngle - prev.startAngle,
                  entry.endAngle - entry.startAngle
                );
                const latest = {
                  ...entry,
                  startAngle: curAngle,
                  endAngle: curAngle + angleIp(t),
                };

                stepData.push(latest);
                curAngle = latest.endAngle;
              } else {
                const { endAngle, startAngle } = entry;
                const interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
                const deltaAngle = interpolatorAngle(t);
                const latest = { ...entry, startAngle: curAngle, endAngle: curAngle + deltaAngle };

                stepData.push(latest);
                curAngle = latest.endAngle;
              }
            });

            return (
              <Layer>
                {this.renderSectorsStatically(stepData)}
              </Layer>
            );
          }
        }
      </Animate>
    );
  }

  renderSectors() {
    const { sectors, isAnimationActive } = this.props;
    const { prevSectors } = this.state;

    if (isAnimationActive && sectors && sectors.length &&
      (!prevSectors || !_.isEqual(prevSectors, sectors))) {
      return this.renderSectorsWithAnimation();
    }
    return this.renderSectorsStatically(sectors);
  }

  render() {
    const { hide, sectors, className, label, cx, cy, innerRadius,
      outerRadius, isAnimationActive } = this.props;

    if (hide || !sectors || !sectors.length || !isNumber(cx)
      || !isNumber(cy) || !isNumber(innerRadius)
      || !isNumber(outerRadius)) {
      return null;
    }

    const { isAnimationFinished } = this.state;
    const layerClass = classNames('recharts-pie', className);

    return (
      <Layer className={layerClass}>
        <g clipPath={`url(#${this.id})`}>
          {this.renderSectors()}
        </g>
        {label && this.renderLabels(sectors)}
        {Label.renderCallByParent(this.props, null, false)}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, sectors, false)}
      </Layer>
    );
  }
}

export default Pie;

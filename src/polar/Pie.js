/**
 * @fileOverview Render sectors of a pie
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
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
import { isNumber, getPercentValue, mathSign, interpolateNumber, uniqueId } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { warn } from '../util/LogUtils';

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
    valueKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
    data: PropTypes.arrayOf(PropTypes.object),
    blendStroke: PropTypes.bool,
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
    id: PropTypes.string,
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
    nameKey: 'name',
    // Match each sector's stroke color to it's fill color
    blendStroke: false
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

    const { cornerRadius, startAngle, endAngle, paddingAngle, dataKey, nameKey,
      valueKey } = item.props;
    const minAngle = Math.abs(item.props.minAngle);
    const coordinate = Pie.parseCoordinateOfPie(item, offset);
    const len = pieData.length;
    const deltaAngle = Pie.parseDeltaAngle({ startAngle, endAngle });
    const absDeltaAngle = Math.abs(deltaAngle);
    const totalPadingAngle = (absDeltaAngle >= 360 ? len : (len - 1)) * paddingAngle;
    const realTotalAngle = absDeltaAngle - len * minAngle - totalPadingAngle;
    let realDataKey = dataKey;

    if (_.isNil(dataKey) && _.isNil(valueKey)) {
      warn(false,
        `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`);
      realDataKey = 'value';
    } else if (_.isNil(dataKey)) {
      warn(false,
        `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`);
      realDataKey = valueKey;
    }

    const sum = pieData.reduce((result, entry) => {
      const val = getValueByDataKey(entry, realDataKey, 0);
      return result + (isNumber(val) ? val : 0);
    }, 0);
    let sectors;

    if (sum > 0) {
      let prev;
      sectors = pieData.map((entry, i) => {
        const val = getValueByDataKey(entry, realDataKey, 0);
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
        const tooltipPayload = [{ name, value: val, payload: entry, dataKey: realDataKey }];
        const tooltipPosition = polarToCartesian(
          coordinate.cx, coordinate.cy, middleRadius, midAngle
        );

        prev = {
          percent, cornerRadius, name, tooltipPayload, midAngle, middleRadius, tooltipPosition,
          ...entry,
          ...coordinate,
          value: getValueByDataKey(entry, realDataKey),
          startAngle: tempStartAngle,
          endAngle: tempEndAngle,
          payload: entry,
          paddingAngle: mathSign(deltaAngle) * paddingAngle,
        };

        return prev;
      });
    }

    return {
      ...coordinate,
      sectors,
      data: pieData,
      onMouseLeave: onItemMouseLeave,
      onMouseEnter: onItemMouseEnter,
    };
  }

  state = { isAnimationFinished: false };

  componentWillReceiveProps(nextProps) {
    const { animationId, sectors } = this.props;

    if (nextProps.isAnimationActive !== this.props.isAnimationActive) {
      this.cachePrevData([]);
    } else if (nextProps.animationId !== animationId) {
      this.cachePrevData(sectors);
    }
  }

  static getTextAnchor(x, cx) {
    if (x > cx) {
      return 'start';
    } if (x < cx) {
      return 'end';
    }

    return 'middle';
  }

  id = uniqueId('recharts-pie-');

  cachePrevData = (sectors) => {
    this.setState({ prevSectors: sectors });
  };

  isActiveIndex(i) {
    const { activeIndex } = this.props;

    if (Array.isArray(activeIndex)) {
      return activeIndex.indexOf(i) !== -1;
    }

    return i === activeIndex;
  }

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;

    this.setState({
      isAnimationFinished: true,
    });

    if (_.isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;

    this.setState({
      isAnimationFinished: false,
    });

    if (_.isFunction(onAnimationStart)) {
      onAnimationStart();
    }
  }

  static renderLabelLineItem(option, props) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    } if (_.isFunction(option)) {
      return option(props);
    }

    return <Curve {...props} type="linear" className="recharts-pie-label-line" />;
  }

  static renderLabelItem(option, props, value) {
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
    const { label, labelLine, dataKey, valueKey } = this.props;
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
        textAnchor: this.constructor.getTextAnchor(endPoint.x, entry.cx),
        ...endPoint,
      };
      const lineProps = {
        ...pieProps,
        ...entry,
        fill: 'none',
        stroke: entry.fill,
        ...customLabelLineProps,
        index: i,
        points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
      };
      let realDataKey = dataKey;
      // TODO: compatible to lower versions
      if (_.isNil(dataKey) && _.isNil(valueKey)) {
        realDataKey = 'value';
      } else if (_.isNil(dataKey)) {
        realDataKey = valueKey;
      }

      return (
        <Layer key={`label-${i}`}>
          {labelLine && this.constructor.renderLabelLineItem(labelLine, lineProps)}
          {this.constructor.renderLabelItem(
            label,
            labelProps,
            getValueByDataKey(entry, realDataKey)
          )}
        </Layer>
      );
    });

    return <Layer className="recharts-pie-labels">{labels}</Layer>;
  }

  static renderSectorItem(option, props) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    } if (_.isFunction(option)) {
      return option(props);
    } if (_.isPlainObject(option)) {
      return <Sector {...props} {...option} />;
    }

    return <Sector {...props} />;
  }

  renderSectorsStatically(sectors) {
    const { activeShape, blendStroke } = this.props;

    return sectors.map((entry, i) => {
      const sectorOptions = this.isActiveIndex(i) ? activeShape : null;
      const sectorProps = {
        ...entry,
        stroke: blendStroke ? entry.fill : entry.stroke
      };

      return (
        <Layer
          className="recharts-pie-sector"
          {...filterEventsOfChild(this.props, entry, i)}
          key={`sector-${i}`}
        >
          {this.constructor.renderSectorItem(sectorOptions, sectorProps)}
        </Layer>
      );
    });
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
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
      >
        {
          ({ t }) => {
            const stepData = [];
            const first = sectors && sectors[0];
            let curAngle = first.startAngle;

            sectors.forEach((entry, index) => {
              const prev = prevSectors && prevSectors[index];
              const paddingAngle = index > 0 ? _.get(entry, 'paddingAngle', 0) : 0;

              if (prev) {
                const angleIp = interpolateNumber(
                  prev.endAngle - prev.startAngle,
                  entry.endAngle - entry.startAngle
                );
                const latest = {
                  ...entry,
                  startAngle: curAngle + paddingAngle,
                  endAngle: curAngle + angleIp(t) + paddingAngle,
                };

                stepData.push(latest);
                curAngle = latest.endAngle;
              } else {
                const { endAngle, startAngle } = entry;
                const interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
                const deltaAngle = interpolatorAngle(t);
                const latest = {
                  ...entry,
                  startAngle: curAngle + paddingAngle,
                  endAngle: curAngle + deltaAngle + paddingAngle,
                };

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
      outerRadius, isAnimationActive, prevSectors } = this.props;

    if (hide || !sectors || !sectors.length || !isNumber(cx) ||
      !isNumber(cy) || !isNumber(innerRadius) ||
      !isNumber(outerRadius)) {
      return null;
    }

    const layerClass = classNames('recharts-pie', className);

    return (
      <Layer className={layerClass}>
        {this.renderSectors()}
        {label && this.renderLabels(sectors)}
        {Label.renderCallByParent(this.props, null, false)}
        {(!isAnimationActive || (prevSectors && _.isEqual(prevSectors, sectors))) &&
          LabelList.renderCallByParent(this.props, sectors, false)}
      </Layer>
    );
  }
}

export default Pie;

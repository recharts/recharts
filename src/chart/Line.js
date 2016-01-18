/**
 * @fileOverview Line
 */
import React, { PropTypes } from 'react';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import pureRender from 'pure-render-decorator';
import ReactUtils from '../util/ReactUtils';

@pureRender
class Line extends React.Component {

  static displayName = 'Line';

  static propTypes = {
    type: PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    legendType: PropTypes.string,
    formatter: PropTypes.func,

    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
     // whether have dot in line
    dot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.bool]),
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      value: PropTypes.value,
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    dot: true,
    legendType: 'line',
    stroke: '#3182bd',
    strokeWidth: 1,
    fill: '#fff',
    points: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
  };

  constructor(props) {
    super(props);
  }

  renderDots() {
    const { dot, points } = this.props;
    const lineProps = ReactUtils.getPresentationAttributes(this.props);
    const customDotProps = ReactUtils.getPresentationAttributes(dot);
    const isDotElement = React.isValidElement(dot);

    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...lineProps,
        ...customDotProps,
        cx: entry.x,
        cy: entry.y,
        index: i,
        playload: entry,
      };

      return isDotElement ? React.cloneElement(dot, dotProps) : <Dot {...dotProps}/>;
    });

    return <Layer className="recharts-layer-line-dots">{dots}</Layer>;
  }

  render() {
    const { dot, points, className, ...other } = this.props;

    if (!points || !points.length) {
      return null;
    }
    const hasSinglePoint = points.length === 1;

    return (
      <Layer className={'recharts-line ' + (className || '')}>
        {!hasSinglePoint && (
          <Curve
            {...other}
            fill="none"
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave}
            onClick={this.props.onClick}
            points={points}
          />
        )}
        {(hasSinglePoint || dot) && this.renderDots()}
      </Layer>
    );
  }
}

export default Line;

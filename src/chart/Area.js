/**
 * @fileOverview 面积图
 */
import React, { PropTypes } from 'react';
import Curve from '../shape/Curve';
import Layer from '../container/Layer';
import pureRender from 'pure-render-decorator';

@pureRender
class Area extends React.Component {

  static displayName = 'Area';

  static propTypes = {
    type: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    // 是否展示曲线上的点
    hasDot: PropTypes.bool,
    // 是否展示曲线
    hasCurve: PropTypes.bool,
    // 是否展示填充面积
    area: PropTypes.bool,
    baseLineType: PropTypes.oneOf(['horizontal', 'vertical', 'curve']),
    baseLine: PropTypes.oneOfType([
      PropTypes.number, PropTypes.array,
    ]),
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
    strokeWidth: 1,
    area: true,
    // 数据
    data: [],
    hasDot: false,
    hasCurve: true,
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
  };

  constructor(props) {
    super(props);
  }

  renderArea() {
    const { hasDot, hasCurve, className, ...other } = this.props;

    return (
      <Curve
        {...other}
        stroke="none"
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onClick={this.props.onClick}
      />
    );
  }

  renderCurve() {
    const { hasDot, hasCurve, baseLineType, baseLine, ...other } = this.props;

    return (
      <Curve
        {...other}
        fill="none"
      />
    );
  }

  renderDots() {
    const { points, ...other } = this.props;

    const dots = points.map((entry, i) => {
      return <circle {...other} key={'dot-' + i} cx={entry.x} cy={entry.y} r={3}/>;
    });

    return <Layer className="layer-line-dots">{dots}</Layer>;
  }

  render() {
    const { hasDot, hasCurve, points, className, ...other } = this.props;

    if (!points || !points.length) {
      return null;
    }

    return (
      <Layer className={'recharts-line ' + (className || '')}>
        {hasCurve && this.renderCurve()}
        {this.renderArea()}

        {hasDot && this.renderDots()}
      </Layer>
    );
  }
}

export default Area;

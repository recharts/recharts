/**
 * @fileOverview 面积图
 */
import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Curve from '../shape/Curve';
import Layer from '../container/Layer';

const Area = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    type: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    // 是否展示曲线上的点
    dot: PropTypes.bool,
    // 是否展示填充面积
    area: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      value: PropTypes.value
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
  },

  getDefaultProps () {
    return {
      strokeWidth: 1,
      area: true,
      // 数据
      data: [],
      onClick () {},
      onMouseEnter () {},
      onMouseLeave () {}
    };
  },

  renderDots () {
    let {data, ...other} = this.props;

    const dots = data.map((entry, i) => {
      return <circle {...other} key={'dot-' + i} cx={entry.x} cy={entry.y} r={3}/>
    });

    return <Layer className='layer-line-dots'>{dots}</Layer>
  },

  render () {
    let {dot, data, className, ...other} = this.props;

    if (!data || !data.length) {
      return;
    }

    return (
      <Layer className={'recharts-line ' + (className || '')}>
        <Curve
          {...other}
          stroke='none'
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
          onClick={this.props.onClick}
          points={data}/>
        {dot && this.renderDots()}
      </Layer>
    );
  }
});

export default Area;

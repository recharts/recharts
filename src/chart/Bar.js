/**
 * @fileOverview 柱图
 */
import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';

const Bar = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    component: PropTypes.element,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      radius: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.array
              ]),
      value: PropTypes.value
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
  },

  getDefaultProps () {
    return {
      // 数据
      data: [],
      onClick () {},
      onMouseEnter () {},
      onMouseLeave () {}
    };
  },

  renderRectangles () {
    const {data, className, hasLabel, component, ...others} = this.props;

    return data.map((entry, i) => {
      let {value, ...rest} = entry;

      return component ? React.cloneElement(component, {
        ...others, ...rest,
        key: 'rectangle-' + i
      }) : React.createElement(Rectangle, {
        ...others, ...rest,
        key: 'rectangle-' + i
      });
    });
  },

  renderLabels () {
    const {data} = this.props;

    return data.map((entry, i) => {
      return (
        <text textAnchor='middle' x={entry.x + entry.width / 2} y={entry.y} key={'label-' + i}>
          {entry.value}
        </text>
      );
    });
  },

  render () {
    let {data, className, hasLabel} = this.props;

    if (!data || !data.length) {
      return;
    }

    return (
      <Layer className={'layer-bar ' + (className || '')}>
        <Layer className='layer-rectangles'>
          {this.renderRectangles()}
        </Layer>
        { hasLabel && (
          <Layer className='layer-rectangles'>
            {this.renderLabels()}
          </Layer>
        )}
      </Layer>
    );
  }
});

export default Bar;

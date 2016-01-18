/**
 * @fileOverview Render a group of scatters
 */
import React, { PropTypes } from 'react';
import Layer from '../container/Layer';
import pureRender from 'pure-render-decorator';

@pureRender
class Scatter extends React.Component {

  static displayName = 'Scatter';

  static propTypes = {
    legendType: PropTypes.string,
    xAxisId: PropTypes.number,
    yAxisId: PropTypes.number,
    zAxisId: PropTypes.number,

    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,

    groupId: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      cx: PropTypes.number,
      cy: PropTypes.number,
      r: PropTypes.number,
      value: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
        z: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      }),
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: 'scatter',
    data: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
  };

  constructor(props) {
    super(props);
  }

  handleCircleMouseEnter(data, e) {
    const { onMouseEnter, groupId } = this.props;

    onMouseEnter(groupId, data, e);
  }

  renderCircles() {
    const { data, className, onMouseEnter, ...others } = this.props;

    return data.map((entry, i) => {
      const { value, ...rest } = entry;

      return (
        <circle
          {...others}
          {...rest}
          onMouseEnter={this.handleCircleMouseEnter.bind(this, entry)}
          key={'circle-' + i}
        />
      );
    });
  }

  render() {
    const { data, className } = this.props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <Layer className={'layer-scatter ' + (className || '')}>
        {this.renderCircles()}
      </Layer>
    );
  }
}

export default Scatter;

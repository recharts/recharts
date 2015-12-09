import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class ReferenceLine extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'ReferenceLine';

  static propTypes = {
    start: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    end: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    strokeWidth: PropTypes.number,
    stroke: PropTypes.string,
    fill: PropTypes.string
  };

  static defaultProps = {
    fill: 'none'
  };


  render () {
    const {className, start, end, ...others} = this.props;

    return (
      <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} {...others}/>
    );
  }
}

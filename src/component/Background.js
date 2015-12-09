import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// TODO: add support of gradient
class Background extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'Background';

  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number,
    stroke: PropTypes.string,
    fill: PropTypes.string
  };

  static defaultProps = {

  };


  render () {
    const {className, ...others} = this.props;

    return (
      <g className={'recharts-background ' + (className || '')}>
        <rect {...others}/>
      </g>
    );
  }
}

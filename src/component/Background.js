import React, {PropTypes} from 'react';
import pureRender from 'pure-render-decorator';

// TODO: add support of gradient
@pureRender
class Background extends React.Component {

  static displayName = 'Background';

  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number,
    stroke: PropTypes.string,
    fill: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    const {className, ...others} = this.props;

    return (
      <g className={'recharts-background ' + (className || '')}>
        <rect {...others}/>
      </g>
    );
  }
}

export default Background;

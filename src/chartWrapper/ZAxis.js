import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class ZAxis extends React.Component {

  static displayName = 'ZAxis';

  static propTypes = {
    // 轴所对应的数据的名称
    name: PropTypes.any,
    // 轴所对应的数据单位
    unit: PropTypes.any,
    zAxisId: PropTypes.number,
    // 当y轴为类目轴时，需要传入此属性
    dataKey: PropTypes.string.isRequired,
    range: PropTypes.arrayOf(PropTypes.number),
  };

  static defaultProps = {
    zAxisId: 0,
    range: [10, 10],
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }
}

export default ZAxis;

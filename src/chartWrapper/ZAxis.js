import React, {PropTypes} from 'react';

class ZAxis extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'ZAxis';

  static propTypes = {
    //轴所对应的数据的名称
    name: PropTypes.any,
    zAxisId: PropTypes.number,
    // 当y轴为类目轴时，需要传入此属性
    dataKey: PropTypes.string.isRequired,
    range: PropTypes.arrayOf(PropTypes.number)
  };

  static defaultProps = {
    zAxisId: 0,
    range: [10, 10]
  };

  render () {
    return null;
  }
};

export default ZAxis;

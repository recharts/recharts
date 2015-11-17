import React, {PropTypes} from 'react';

class ZAxis extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'ZAxis';

  static propTypes = {
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

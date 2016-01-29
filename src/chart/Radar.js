import React, { PropTypes } from 'react';

class Radar extends React.Component {

  static displayName = 'Radar';

  static propTypes = {
    className: PropTypes.string,
    dataKey: PropTypes.string,
  };

  static defaultProps = {
    dataKey: 'value',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }
}

export default Radar;

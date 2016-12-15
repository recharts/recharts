/**
 * @fileOverview Cross
 */
import { Component } from 'react';

import { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';

class Cell extends Component {

  static displayName = 'Cell';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
  };

  render() {
    return null;
  }
}

export default Cell;

import React from 'react';
import {Surface, Triangle} from 'recharts';

export default React.createClass({
  render () {
    return (
      <Surface width={400} height={400}>
        <Triangle points={[{x: 100, y: 300}, {x: 300, y: 300}, {x: 200, y : 50}]} fill='#ff7300'/>
      </Surface>
    );
  }
});

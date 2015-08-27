'use strict';

import React from 'react/addons';
import {Surface, Legend} from 'recharts';

export default React.createClass({
  render () {
    let data = [{value: '苹果'}, {value: '三星'}, {value: '华为'}, {value: '索尼'}];

    return (
      <Surface width={500} height={500}>
        <Legend width={500} height={500} data={data} />
      </Surface>
    );
  }
});


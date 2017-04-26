import React, { Component } from 'react';
import { Surface, Brush } from 'recharts';

export default class Demo extends Component {

  static displayName = 'BrushDemo';

  render () {
    let data = [
        '2015-10-01',
        '2015-10-02',
        '2015-10-03',
        '2015-10-04',
        '2015-10-05',
        '2015-10-06',
        '2015-10-07',
        '2015-10-08',
        '2015-10-09',
        '2015-10-10',
        '2015-10-11',
        '2015-10-12',
        '2015-10-13',
        '2015-10-14',
        '2015-10-15',
        '2015-10-16',
        '2015-10-17',
        '2015-10-18',
        '2015-10-19',
        '2015-10-20',
        '2015-10-21',
        '2015-10-22',
        '2015-10-23',
        '2015-10-24',
        '2015-10-25',
        '2015-10-26',
        '2015-10-27',
        '2015-10-28',
        '2015-10-29',
        '2015-10-30'
      ];

    return (
      <Surface width={800} height={200}>
        <Brush startIndex={0} endIndex={data.length - 1} x={100} y={50} width={400} height={40} data={data}/>
      </Surface>
    );
  }
}


import React, { Component } from 'react';
import { BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const testData = [
  {
    name: "Hello",
    value: 20
  },
  {
    name: "World",
    value: 30
  }
];

export default class PieDemo extends React.Component {
  static displayName = 'PieDemo';

  render () {
    return (
      <BarChart data={testData} width={500} height={500}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" />
        </BarChart>
    );
  }
}



import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data1 = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

// X Axis mirrored
const data2 = [
  { name: 'Page F', uv: 500, pv: 4800, amt: 2400 },
  { name: 'Page E', uv: 550, pv: 3908, amt: 2400 },
  { name: 'Page D', uv: 800, pv: 9800, amt: 2400 },
  { name: 'Page C', uv: 100, pv: 1398, amt: 2400 },
  { name: 'Page B', uv: 678, pv: 4567, amt: 2400 },
  { name: 'Page A', uv: 230, pv: 2400, amt: 2400 },
];

const margin = { top: 20, right: 20, bottom: 20, left: 20 };
const height = 400;
const width = 400;

const initialState = {
  syncMethod: '',
};

// Example callback function that can be used to specify the algorithm
const syncMethodFunction = (index: number, data: any) => index + 1;

// eslint-disable-next-line import/no-default-export
export default class Demo extends Component<any, any> {
  static displayName = 'LineChartDemo Sync Method';

  state: any = initialState;

  setSyncMethodToValue = () => {
    this.setState((prevState: { syncMethod: string }) => {
      let method: any = 'index';
      if (prevState.syncMethod === 'value') {
        method = syncMethodFunction;
      } else if (prevState.syncMethod === 'index') {
        method = 'value';
      }
      return {
        ...prevState,
        syncMethod: method,
      };
    });
  };

  render() {
    const { syncMethod } = this.state;
    return (
      <div className="line-charts">
        <button type="button" onClick={this.setSyncMethodToValue}>
          change sync Method
        </button>
        <p>
          Sync Method used:
          {!syncMethod || syncMethod === 'value' || syncMethod === 'index'
            ? syncMethod
            : 'callback function (index + 1)'}
        </p>
        <p>A simple LineChart with syncId = test</p>
        <div className="line-chart-wrapper">
          <LineChart width={width} height={height} data={data1} margin={margin} syncId="test" syncMethod={syncMethod}>
            <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>

        <p>A simple LineChart with syncId = test with axis labels in reverse order</p>
        <div className="line-chart-wrapper">
          <LineChart width={width} height={height} data={data2} margin={margin} syncId="test" syncMethod={syncMethod}>
            <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
      </div>
    );
  }
}

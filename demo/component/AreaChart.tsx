import * as React from 'react';
import * as _ from 'lodash';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceArea,
  ReferenceLine,
  ReferenceDot,
  LabelList,
  Label,
} from 'recharts';
import { curveCardinal } from 'victory-vendor/d3-shape';
import { changeNumberOfData } from './utils';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: 'Page C', uv: 2000, pv: -9800, amt: 2290, time: 9 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18 },
  { name: 'Page H', time: 24 },
];
const data01 = [
  { day: '05-01', weather: 'sunny' },
  { day: '05-02', weather: 'sunny' },
  { day: '05-03', weather: 'cloudy' },
  { day: '05-04', weather: 'rain' },
  { day: '05-05', weather: 'rain' },
  { day: '05-06', weather: 'cloudy' },
  { day: '05-07', weather: 'cloudy' },
  { day: '05-08', weather: 'sunny' },
  { day: '05-09', weather: 'sunny' },
];

const rangeData = [
  { day: '05-01', temperature: [-1, 10] },
  { day: '05-02', temperature: [2, 15] },
  { day: '05-03', temperature: [3, 12] },
  { day: '05-04', temperature: [4, 12] },
  { day: '05-05', temperature: [12, 16] },
  { day: '05-06', temperature: [5, 16] },
  { day: '05-07', temperature: [3, 12] },
  { day: '05-08', temperature: [0, 8] },
  { day: '05-09', temperature: [-3, 5] },
];

const initialState = { data, data01 };

const CustomTooltip: React.FunctionComponent<any> = (props: any) => {
  const { active, payload, external, label } = props;

  if (active) {
    const style = {
      padding: 6,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
    };

    const currData = external.filter((entry: any) => entry.name === label)[0];

    return (
      <div className="area-chart-tooltip" style={style}>
        <p>
          {`${payload?.[0]?.name} : `}
          <em>{payload?.[0]?.value}</em>
        </p>
        <p>
          {'uv : '}
          <em>{currData.uv}</em>
        </p>
      </div>
    );
  }

  return null;
};

const renderCustomizedActiveDot: React.FunctionComponent = (props: any) => {
  const { cx, cy, stroke, dataKey } = props;

  return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={`dot-${dataKey}`} />;
};

const renderLabel = (props: any) => {
  const { index, x, y } = props;

  return (
    <text x={x} y={y} className="customized-label">
      {index}
    </text>
  );
};

// custom curve cardinal `type` prop
const stepAround = curveCardinal.tension(0.5);

// eslint-disable-next-line import/no-default-export
export default class AreaChartDemo extends React.Component<any, any> {
  static displayName = 'AreaChartDemo';

  state = initialState;

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  render() {
    return (
      <div className="area-charts">
        <button type="button" onClick={this.handleChangeData}>change data</button>
        <br />

        <p>Stacked AreaChart</p>
        <div className="area-chart-wrapper">
          <AreaChart
            width={800}
            height={400}
            data={this.state.data}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
            syncId="test"
          >
            <XAxis dataKey="time" type="number">
              <Label position="insideTopRight" offset={-30}>
                province
              </Label>
            </XAxis>
            <YAxis />
            <Tooltip />
            <Area
              stackId="0"
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              fill="#ff7300"
              dot
              activeDot={renderCustomizedActiveDot}
              hide
            >
              <LabelList position="top" />
            </Area>
            <Area
              stackId="0"
              type="monotone"
              dataKey="amt"
              stroke="#82ca9d"
              fill="#82ca9d"
              dot
              activeDot={renderCustomizedActiveDot}
              label={renderLabel}
            />
            <Area
              stackId="0"
              type="monotone"
              dataKey="pv"
              stroke="#387908"
              fill="#387908"
              animationBegin={1300}
              dot
              activeDot={renderCustomizedActiveDot}
            >
              <LabelList position="top" />
            </Area>
            <Legend layout="vertical" align="left" verticalAlign="middle" />
          </AreaChart>
        </div>

        <p>Stacked AreaChart | Stack Offset Expand</p>
        <div className="area-chart-wrapper">
          <AreaChart
            width={400}
            height={300}
            data={this.state.data}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
            stackOffset="expand"
            syncId="test"
          >
            <XAxis />
            <YAxis />
            <Tooltip />
            <Area
              stackId="0"
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              fill="#ff7300"
              dot
              activeDot={renderCustomizedActiveDot}
            >
              <LabelList position="top" />
            </Area>
            <Area
              stackId="0"
              type="monotone"
              dataKey="pv"
              stroke="#387908"
              fill="#387908"
              dot
              activeDot={renderCustomizedActiveDot}
            >
              <LabelList />
            </Area>
          </AreaChart>
        </div>

        <p>Stacked AreaChart | Stack Offset Silhouette</p>
        <div className="area-chart-wrapper">
          <AreaChart
            width={800}
            height={400}
            data={this.state.data}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
            stackOffset="silhouette"
          >
            <XAxis dataKey="name">
              <Label position="insideBottom">province</Label>
            </XAxis>
            <YAxis />
            <Tooltip />
            <Area
              stackId="0"
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              fill="#ff7300"
              dot
              activeDot={renderCustomizedActiveDot}
            >
              <LabelList position="top" />
            </Area>
            <Area
              stackId="0"
              type="monotone"
              dataKey="pv"
              stroke="#387908"
              fill="#387908"
              dot
              activeDot={renderCustomizedActiveDot}
            />
          </AreaChart>
        </div>

        <p>Tiny AreaChart</p>
        <div className="area-chart-wrapper">
          <AreaChart width={100} height={50} data={data.slice(0, 1)} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          </AreaChart>
        </div>

        <p>AreaChart with three y-axes</p>
        <div className="area-chart-wrapper">
          <AreaChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <YAxis type="number" yAxisId={0} stroke="#ff7300">
              <Label position="top" offset={10}>
                uv
              </Label>
            </YAxis>
            <YAxis type="number" orientation="right" yAxisId={1} stroke="#387908">
              <Label position="top" offset={10}>
                pv
              </Label>
            </YAxis>
            <YAxis type="number" orientation="right" yAxisId={2} stroke="#38abc8">
              <Label position="top" offset={10}>
                amt
              </Label>
            </YAxis>
            <XAxis dataKey="name" interval={0} />
            <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" strokeWidth={2} yAxisId={0} />
            <Area dataKey="pv" stroke="#387908" fill="#387908" strokeWidth={2} yAxisId={1} />
            <Area dataKey="amt" stroke="#38abc8" fill="#38abc8" strokeWidth={2} yAxisId={2} />
          </AreaChart>
        </div>

        <p>AreaChart of vertical layout </p>
        <div className="area-chart-wrapper" style={{ margin: 40 }}>
          <AreaChart
            width={400}
            height={400}
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, bottom: 5, left: 5 }}
          >
            <YAxis type="category" dataKey="name" />
            <XAxis type="number" xAxisId={0} orientation="top" />
            <XAxis type="number" xAxisId={1} orientation="bottom" />
            <Area dataKey="uv" type="monotone" stroke="#ff7300" fill="#ff7300" strokeWidth={2} xAxisId={0} />
            <Area dataKey="pv" type="monotone" stroke="#387908" fill="#387908" strokeWidth={2} xAxisId={1} />
            <Tooltip />
          </AreaChart>
        </div>

        <p>AreaChart with custom tooltip</p>
        <div className="area-chart-wrapper">
          <AreaChart width={900} height={250} data={data} margin={{ top: 10, right: 30, bottom: 10, left: 10 }}>
            <XAxis dataKey="name" />
            <YAxis tickCount={7} />
            <Tooltip content={<CustomTooltip external={data} />} />
            <CartesianGrid stroke="#f5f5f5" />
            <ReferenceArea x1="Page A" x2="Page E" />
            <ReferenceLine y={7500} stroke="#387908" />
            <ReferenceDot x="Page C" y={1398} r={10} fill="#387908" isFront />
            <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
          </AreaChart>
        </div>

        <p>AreaChart filled with linear gradient</p>
        <div>
          <AreaChart
            width={800}
            height={400}
            data={this.state.data}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(0, 136, 254, 0.8)" />
                <stop offset="95%" stopColor="rgba(0, 136, 254, 0)" />
              </linearGradient>
            </defs>
            <XAxis dataKey="name">
              <Label position="insideBottom" value="province" />
            </XAxis>
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#0088FE"
              strokeWidth="2"
              fillOpacity="1"
              fill="url(#MyGradient)"
              dot
            />
          </AreaChart>
        </div>

        <p>AreaChart of discrete values</p>
        <div className="area-chart-wrapper">
          <AreaChart width={400} height={400} data={data01} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="day" />
            <YAxis type="category" />
            <Tooltip />
            <Area type="stepAfter" dataKey="weather" stroke="#0088FE" />
          </AreaChart>
        </div>

        <p>AreaChart of range values</p>
        <div className="area-chart-wrapper">
          <AreaChart width={400} height={400} data={rangeData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area dataKey="temperature" stroke="#0088FE" />
          </AreaChart>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { ResponsiveContainer, FunnelChart, Funnel, Cell, Tooltip } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors1 = scaleOrdinal(schemeCategory10).range();
const colors2 = scaleOrdinal(schemeCategory10).range();

const data01 = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

const data02 = [
  { value: 60, name: '展现' },
  { value: 50, name: '点击' },
  { value: 30, name: '访问' },
  { value: 20, name: '咨询' },
  { value: 6, name: '订单' },
];


const initialState = {
  data01,
};

export default class Demo extends Component {

  static displayName = 'FunnelChartDemo';

  state = initialState;

  render() {
    return (
      <div className="funnel-charts">
        <p>Simple FunnelChart</p>
        <div className="funnel-chart-wrapper" style={{ width: '50%', height: '300', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <FunnelChart>
              <Tooltip />
              <Funnel
                dataKey="value"
                data={data01}
                label
                // label={(payload) => {
                //   return <text x={payload.x} y={payload.y} textAnchor="middle">hehe</text>
                // }}
                // label={{ position: 'right' }}
                // labelLine
                isAnimationActive={false}
              >
                {
                  data01.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={colors1[index % 10]}/>
                  ))
                }
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
        <p>Nest FunnelChart</p>
        <div className="funnel-chart-wrapper" style={{ width: '50%', height: '300', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <FunnelChart margin={{ top: 20, right: 50, left: 20, bottom: 0 }}>
              <Tooltip />
              <Funnel
                dataKey="value"
                data={data01}
                label={{ position: 'right' }}
                labelLine
                isAnimationActive={false}
              >
                {
                  data01.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={colors1[index % 10]}/>
                  ))
                }
              </Funnel>
              <Funnel
                dataKey="value"
                data={data02}
                isAnimationActive={false}
                width="80%"
                label
              >
                {
                  data02.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={colors2[index % 10]}/>
                  ))
                }
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { ResponsiveContainer, FunnelChart, Funnel, Cell, Tooltip, LabelList } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import * as _ from 'lodash';
import { changeNumberOfData } from './utils';

const colors1 = scaleOrdinal(schemeCategory10).range();
const colors2 = scaleOrdinal(schemeCategory10).range();

const data = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

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
  data
};

export default class Demo extends Component {

  static displayName = 'FunnelChartDemo';

  state = initialState;

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  render() {
    const { data } = this.state;
    return (
      <div className="funnel-charts">
        <button type="button" className="btn update" onClick={this.handleChangeData} >
          change data
        </button>
        <p>Simple FunnelChart</p>
        <div className="funnel-chart-wrapper" style={{ width: '50%', height: '300', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <FunnelChart>
              <Tooltip />
              <Funnel
                dataKey="value"
                data={data}
                isAnimationActive
              >
                {
                  data01.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={colors1[index % 10]} className="custom-cell" />
                  ))
                }
                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
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
                isAnimationActive
              >
                {
                  data01.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={colors1[index % 10]} />
                  ))
                }
                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
              </Funnel>
              <Funnel
                dataKey="value"
                data={data02}
                width="80%"
                isAnimationActive
              >
                {
                  data02.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={colors2[index % 10]} />
                  ))
                }
                <LabelList position="center" fill="#fff" stroke="none" dataKey="value" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
        <p>active FunnelChart</p>
        <div className="funnel-chart-wrapper" style={{ width: '50%', height: '300', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <FunnelChart>
              <Tooltip />
              <Funnel
                dataKey="value"
                data={data}
                activeIndex={1}
                isAnimationActive={false}
                activeShape={(payload) => {
                  return (
                    <rect
                      className="custom-active-shape"
                      x={payload.x}
                      y={payload.y}
                      height={payload.height}
                      width={payload.upperWidth}
                      fill="red"
                      strokeWidth="4"
                      stroke="#fff"
                    />);
                }}
              >
                {
                  data.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={colors1[index % 10]} opacity={0.5} />
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

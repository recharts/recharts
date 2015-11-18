'use strict';

import React from 'react/addons';
import R from 'ramda';
import {ColorUtils} from 'recharts'
import {LineChart, LineItem, XAxis, YAxis} from 'recharts';

export default React.createClass({
  getInitialState() {
    return {
      l: 60,
      c: 60,
      h: 60,
      currentScheme: 'complementary'
    };
  },

  handleH(e) {
    let n = e.target.value;
    if (n < 0) {n = 359;}
    else if (n > 359) {n = 0};
    this.setState({
      h: parseInt(n)
    });
  },

  handleC(e) {
    let n = e.target.value;
    if (n < 0) {n = 0;}
    else if (n > 99) {n = 99};
    this.setState({
      c: parseInt(n)
    });
  },

  handleL(e) {
    let n = e.target.value;
    if (n < 0) {n = 0;}
    else if (n > 99) {n = 99};
    this.setState({
      l: parseInt(n)
    });
  },

  handleScheme(scheme) {
    this.setState({
      currentScheme: scheme
    });
  },

  render() {
    const {h, c, l, currentScheme} = this.state;
    const cu = new ColorUtils(c/100, l/100);
    const data = [
      {name: '上海', v0: 400, v1: 200, v2:500, v3: 300},
      {name: '北京', v0: 330, v1: 567, v2:270, v3: 450},
      {name: '杭州', v0: 370, v1: 598, v2:140, v3: 490},
      {name: '上饶', v0: 200, v1: 780, v2:670, v3: 410},
      {name: '台湾', v0: 278, v1: 908, v2:360, v3: 440},
      {name: '香港', v0: 189, v1: 480, v2:560, v3: 700}
    ];

    return (
      <div>
        <div style={{float: 'left'}}>
          <div style={{padding: '2px'}}>
            {
              R.repeat({}, 360).map((v, i) => (
                <div key={i} style={{
                  background: cu.getHclColor(i),
                  display: 'inline-block',
                  width: '2px',
                  height: '60px'
                }}></div>
              ))
            }
            <span>&nbsp;</span>
          </div>
          <div style={{width: '2px',height: '6px',background:'#f33',marginBottom:'6px',marginLeft:2*h+'px'}}></div>
          <div>
            {
              R.repeat({}, 13).map(()=>(
                <div style={{width: '2px',height: '2px',background:'#000',marginRight:'58px',display:'inline-block'}}></div>
              ))
            }
          </div>
          <br/>
          <div>
            <span>h, 0-359：&nbsp;</span>
            <input value={h} type='number' onChange={this.handleH} />
            &emsp;&emsp;&emsp;&emsp;
            <span>c, 0-99：&nbsp;</span>
            <input value={c} type='number' onChange={this.handleC} />
            &emsp;&emsp;&emsp;&emsp;
            <span>l, 0-99：&nbsp;</span>
            <input value={l} type='number' onChange={this.handleL} />
            &emsp;&emsp;&emsp;&emsp;
          </div>
          <br/>
          <div>
            <LineChart width={720} height={400} data={data}>
              <XAxis dataKey='name'/>
              {
                cu.getHclColorGroups(h, currentScheme).map((v, i) => (
                  <LineItem type='smooth' dataKey={'v'+i} stroke={v} strokeWidth={3}/>
                ))
              }
            </LineChart>
          </div>
        </div>
        <div style={{borderLeft:'2px solid #eee',paddingLeft:'58px',overflow:'hidden'}}>
          {
            ['complementary','analogous','split-complementary','triadic','rectangle','square']
            .map((scheme, index) => (
              <div key={index} style={{marginBottom: '30px'}}>

                {
                  cu.getHclColorGroups(h, scheme).map((v, i) => (
                    <div key={i} style={{
                      background: v,
                      display: 'inline-block',
                      width: i === 0 ? '120px' : '60px',
                      height: '60px',
                      marginRight: '5px'
                    }}></div>
                  ))
                }
                <span onClick={this.handleScheme.bind(this,scheme)} style={{
                  color: scheme === currentScheme ? '#f33' : '#000',
                  cursor: 'pointer'
                }}>&nbsp;{scheme}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
});
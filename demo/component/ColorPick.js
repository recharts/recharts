'use strict';

import React from 'react/addons';
import R from 'ramda';
import {ColorUtils} from 'recharts'

export default React.createClass({
  getInitialState() {
    return {
      l: 50,
      r: 50,
      h: Math.ceil(360 * Math.random()),
    };
  },

  handleR(e) {
    this.setState({
      r: parseInt(e.target.value)
    });
  },

  handleL(e) {
    this.setState({
      l: parseInt(e.target.value)
    });
  },

  handleH(e) {
    this.setState({
      h: Math.ceil(360 * Math.random())
    });
  },

  render() {
    const {r, l, h} = this.state;
    const colorCircle = ColorUtils.getLabColorCircle(r/100, l/100);

    return (
      <div>
        <span>欢乐or抑郁(L值, 0-100)：&nbsp;</span>
        <input value={r} type='number' onChange={this.handleR} />
        <br/><br/>
        <span>光明or黑暗(半径, 0-100)：&nbsp;</span>
        <input value={l} type='number' onChange={this.handleL} />
        <br/><br/>
        <div style={{padding: '2px'}}>
          {
            R.repeat({}, 360).map((v, i) => (
              <div key={i} style={{
                background: colorCircle(i),
                display: 'inline-block',
                width: '3px',
                height: '60px'
              }}></div>
            ))
          }
          <span>&nbsp;color circle</span>
        </div>
        <br/><hr/>
        <div><button onClick={this.handleH}>Reset</button></div>
        <br/>
        <div>
          {
            ['complementary','triadic','split-complementary']
            .map((schema, index) => (
              <div key={index} style={{marginBottom: '40px'}}>
                {
                  ColorUtils.getColorGroups(h, schema).map((v, i) => (
                    <div key={i} style={{
                      background: colorCircle(v),
                      display: 'inline-block',
                      width: '60px',
                      height: '60px',
                      marginRight: '10px'
                    }}></div>
                  ))
                }
                <span>&nbsp;{schema}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
});
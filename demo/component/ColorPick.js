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
      isLab: true
    };
  },

  handleR(e) {
    let n = e.target.value;
    if (n < 0) {n = 0;}
    else if (n > 100) {n=100};
    this.setState({
      r: parseInt(n)
    });
  },

  handleL(e) {
    let n = e.target.value;
    if (n < 0) {n = 0;}
    else if (n > 100) {n=100};
    this.setState({
      l: parseInt(n)
    });
  },

  handleH(e) {
    this.setState({
      h: Math.ceil(360 * Math.random())
    });
  },

  handleType(e) {
    this.setState({
      isLab: !this.state.isLab
    })
  },

  render() {
    const {r, l, h, isLab} = this.state;
    const cu = new ColorUtils(r/100, l/100)
    const colorCircle = isLab ? cu.getLabColor : cu.getColor;
    const type = isLab ? 'lab':'hsv';

    return (
      <div>
        <span>r(lab)/s(hsv), 0-100：&nbsp;</span>
        <input value={l} type='number' onChange={this.handleL} />
        <br/><br/>
        <span>l(lab)/v(hsv), 0-100：&nbsp;</span>
        <input value={r} type='number' onChange={this.handleR} />
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
        <div>
          <button onClick={this.handleH}>Reset Hue</button>
        </div>
        <br/>
        <div>
          <button onClick={this.handleType}>Change Type</button>
          <span>&nbsp;current type: {{type}}</span>
        </div>
        <br/>
        <div>
          {
            ['complementary','analogous','split-complementary','triadic','rectangle','square']
            .map((scheme, index) => (
              <div key={index} style={{marginBottom: '40px'}}>
                {
                  cu.getColorGroups(h, scheme, type).map((v, i) => (
                    <div key={i} style={{
                      background: v,
                      display: 'inline-block',
                      width: '60px',
                      height: '60px',
                      marginRight: '10px'
                    }}></div>
                  ))
                }
                <span>&nbsp;{scheme}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
});
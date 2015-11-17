'use strict';

import React from 'react/addons';
import R from 'ramda';
import {ColorUtils} from 'recharts'

export default React.createClass({
  getInitialState() {
    return {
      l: 60,
      c: 60,
      h: 60
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

  render() {
    const {h, c, l} = this.state;
    const cu = new ColorUtils(c/100, l/100);

    return (
      <div>
        <div style={{padding: '2px'}}>
          {
            R.repeat({}, 360).map((v, i) => (
              <div key={i} style={{
                background: cu.getHclColor(i),
                display: 'inline-block',
                width: '3px',
                height: '60px'
              }}></div>
            ))
          }
          <span>&nbsp;</span>
        </div>
        <div style={{width: '3px',height: '9px',background:'#F33',marginBottom:'6px',marginLeft:3*h+'px'}}></div>
        <div>
          {
            R.repeat({}, 13).map(()=>(
              <div style={{width: '3px',height: '3px',background:'#000',marginRight:'87px',display:'inline-block'}}></div>
            ))
          }
        </div>
        <br/>
        <div>
          <span>h, 0-359：&nbsp;</span>
          <input value={h} type='number' onChange={this.handleH} />
          <br/><br/>
          <span>c, 0-99：&nbsp;</span>
          <input value={c} type='number' onChange={this.handleC} />
          <br/><br/>
          <span>l, 0-99：&nbsp;</span>
          <input value={l} type='number' onChange={this.handleL} />
          <br/><br/>
        </div>
        <br/>
        <div>
          {
            ['complementary','analogous','split-complementary','triadic','rectangle','square']
            .map((scheme, index) => (
              <div key={index} style={{marginBottom: '40px'}}>
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
                <span>&nbsp;{scheme}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
});
'use strict';

import React from 'react';
import R from 'ramda';

export default React.createClass({
  getInitialState() {
    return {
      L: 50,
      R: 50
    };
  },

  handleR(e) {
    this.setState({
      R: parseInt(e.target.value)
    });
  },

  handleL(e) {
    this.setState({
      L: parseInt(e.target.value)
    });
  },

  render() {
    const {R, L} = this.state;
    const colorCircle = this.getColorCircle(R/100, L/100);
    return (
      <div>
        <span>欢乐or抑郁(0-100)：&emsp;</span>
        <input value={R} type='number' onChange={this.handleR} />
        <br/><br/>
        <span>光明or黑暗(0-100)：&emsp;</span>
        <input value={L} type='number' onChange={this.handleL} />
        <br/><br/>
        <div style={{padding: '2px'}}>
          <span>color circle: </span>
          {
            R.repeat({}, 360).map((v, i) => (
              <div key={i} style={{
                background: colorCircle(i),
                display: 'inline-block',
                width: '3px',
                height: '300px'
              }}></div>
            ))
          }
        </div>
        <br/><hr/><br/>
        <div>
          {
            ['complementary','triadic','split-complementary'].map((schema, index) => (
              <div key={index} style={{marginBottom: '40px'}}>
                <span>{schema+': '}</span>
                {
                  this.getColorGroups(schema).map((v, i) => (
                    <div key={i} style={{
                      background: colorCircle(v),
                      display: 'inline-block',
                      width: '80px',
                      height: '80px',
                      marginRight: '10px'
                    }}></div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
});
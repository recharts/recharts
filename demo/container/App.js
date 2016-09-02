import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import components from '../component/index';

import { LineChart, Line } from 'recharts';
import chartdata from './chartdata2';
import _ from 'lodash';

const App = React.createClass({
  propTypes: {
    params: PropTypes.object,
    location: PropTypes.object,
  },

  renderList() {
    const items = Object.keys(components).map(key => {
      const group = components[key];
      const list = Object.keys(group).map(c => {
        const entry = group[c];

        return (
          <li key={'component-' + c}>
            <Link to={{ pathname: '/', query: { page: c, group: key } }}>{c}</Link>
          </li>
        );
      });

      return (
        <div key={'group-' + key} className="component-list-container">
          <p className="group-name">{key}</p>
          <ul className="component-list">
            {list}
          </ul>
        </div>
      );
    });

    return (
      <div className="component-list-wrapper">
        <p className="title">components</p>
        {items}
      </div>
    );
  },

  renderPageDetail() {
    const { params, location } = this.props;
    const { query } = location;
    const { group, page } = query;

    return (
      <div className="component-wrapper">
        <p className="back"><Link to={{ pathname: '/' }}>Back to homepage</Link></p>
        <p className="title">{page}</p>
        {components[group] && components[group][page] ? React.createElement(components[group][page]) : null}
      </div>
    );
  },

  render() {

    var data = chartdata;
    data.items = _.orderBy(data.obj, 'timestamp')

    return (
      <div style={{ backgroundColor: '#000000', height: '100%', padding: '50px 0' }}>
      <LineChart width={400} height={400} data={data.items} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line
          type="stepAfter"
          dataKey="avg_jitter"
          dot={false}
          stroke="#ff7300"/>
      </LineChart>
    </div>
    );
    // const { location, params } = this.props;
    //
    // if (!location.query || !location.query.page) {
    //   return this.renderList();
    // }
    //
    // return this.renderPageDetail();
  },
});

export default App;

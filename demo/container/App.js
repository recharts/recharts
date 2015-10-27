import React, {PropTypes} from 'react/addons';
import Router, {Route, Link} from 'react-router';
import components from '../component/index';


const App = React.createClass({
  propTypes: {
    query: PropTypes.object
  },

  renderList () {
    let items = Object.keys(components).map(key => {
      let group = components[key],
          list = Object.keys(group).map(c => {
            let entry = group[c];

            return (
              <li key={'component-' + c}>
                <Link to='app' query={{page: c, group: key}}>{c}</Link>
              </li>
            );
          });

      return (
        <div key={'group-' + key} className='component-list-container'>
          <p className='group-name'>{key}</p>
          <ul className='component-list'>
            {list}
          </ul>
        </div>
      );
    });

    return (
      <div className='component-list-wrapper'>
        <p className='title'>组件列表</p>
        {items}
      </div>
    );
  },

  renderPageDetail () {
    let {query} = this.props,
        group = query.group,
        page = query.page;

    return (
      <div className='component-wrapper'>
        <p className='back'><Link to='app' query={{}}>回到首页</Link></p>
        <p className='title'>{query.page}</p>
        {components[group] && components[group][page] ? React.createElement(components[group][page]) : null}
      </div>
    );
  },

  render () {
    let {query} = this.props;

    if (!query.page) {
      return this.renderList();
    }

    return this.renderPageDetail();
  }
});

export default App;

import React, {PropTypes} from 'react/addons';
import Router, {Route, Link} from 'react-router';
import components from '../component/index'


const App = React.createClass({
  propTypes: {
    query: PropTypes.object
  },

  renderList () {
    let items = {};

    for (let key in components) {
      if (components.hasOwnProperty(key)) {
        items[key] = (
          <li key={'component-' + key}>
            <Link to='app' query={{page: key}}>{key}</Link>
          </li>
        );
      }
    }


    return (
      <div className='component-list-wrapper'>
        <p className='title'>组件列表</p>
        <ul className='component-list'>
          {React.addons.createFragment(items)}
        </ul>
      </div>
    );
  },

  renderPageDetail () {
    let {query} = this.props,
        page = query.page;

    return (
      <div className='component-wrapper'>
        <p className='back'><Link to='app' query={{}}>回到首页</Link></p>
        <p className='title'>{query.page}</p>
        {components[page] ? React.createElement(components[page]) : null}
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

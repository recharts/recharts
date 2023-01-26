/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import API from '../docs/api';
import APIExamples from '../docs/apiExamples';
import Highlight from '../utils/Highlight';
import NewMenuTag from '../components/Shared/NewMenuTag';
import { getLocaleType, localeGet, parseLocalObj } from '../utils/LocaleUtils';
import apiCates, { NEW_APIS } from '../docs/apiCates';
import './APIView.scss';

@connect((state, ownProps) => {
  const pathname = ownProps.location.pathname || '';
  const paths = pathname.split('/');

  return {
    page: paths && paths.length === 4 ? paths[3] : 'AreaChart',
  };
})
class APIView extends PureComponent {
  static propTypes = {
    page: PropTypes.string,
  };

  state = {
    indexesPage: '',
    activeDataCodeIndexes: [],
  };

  handleSwitchDataCode = (index, e) => {
    const { page } = this.props;
    const { activeDataCodeIndexes, indexesPage } = this.state;
    const indexes = page === indexesPage ? activeDataCodeIndexes : [];
    const i = indexes.indexOf(index);

    if (i >= 0) {
      this.setState({
        indexesPage: page,
        activeDataCodeIndexes: [...indexes.slice(0, i - 1), ...indexes.slice(i + 1)],
      });
    } else {
      this.setState({
        indexesPage: page,
        activeDataCodeIndexes: [...indexes, index],
      });
    }
  };

  renderExamples(examples, locale) {
    if (!examples || !examples.length) {
      return null;
    }

    const { page } = this.props;
    const { activeDataCodeIndexes, indexesPage } = this.state;

    return (
      <div className="examples">
        <ul className="example-list">
          {examples.map((item, i) => {
            const isDataCodeActive = page === indexesPage && activeDataCodeIndexes.indexOf(i) >= 0;

            return (
              <li key={`example-${i}`}>
                {item.demo ? <div className="iframe-wrapper">{item.demo(locale)}</div> : null}
                {item.code ? (
                  <div className="code">
                    {item.dataCode ? (
                      <button
                        type="button"
                        className="view-data-button"
                        onClick={this.handleSwitchDataCode.bind(this, i)}
                        onKeyPress={this.handleSwitchDataCode.bind(this, i)}
                      >
                        {localeGet(locale, 'api', isDataCodeActive ? 'hideData' : 'showData')}
                      </button>
                    ) : null}
                    <Highlight className="e4x">
                      {_.trim(
                        item.dataCode && isDataCodeActive
                          ? `
                            ${item.dataCode}

                            ${item.code}
                          `
                          : item.code,
                      )}
                    </Highlight>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  renderPropsExamples(examples, locale) {
    return examples.map((entry, i) => (
      <li key={`example-${i}`}>
        {entry.isExternal ? (
          <a href={entry.url} target="_blank" rel="noreferrer">
            {entry.name}
          </a>
        ) : (
          <Link to={`/${locale}${entry.url}`}>{entry.name}</Link>
        )}
      </li>
    ));
  }

  renderProps(props, locale) {
    if (!props || !props.length) {
      return null;
    }

    return props.map((entry, i) => (
      <li className="props-item" key={`props-${i}`} id={entry.name}>
        <p className={`header ${entry.deprecated ? 'deprecated' : ''}`}>
          <span className="title">
            <a href={`#${entry.name}`}>{entry.name}</a>
          </span>
          <span className="type">{entry.type}</span>
          {entry.isOptional ? <em className="optional">optional</em> : null}
          {entry.deprecated ? <em className="deprecated-label">@deprecated</em> : null}
        </p>
        <p className="desc">{parseLocalObj(locale, entry.desc)}</p>
        {entry.defaultVal !== null &&
        entry.defaultVal !== undefined &&
        entry.defaultVal !== 'null' &&
        entry.defaultVal !== 'undefined' ? (
          <p className="default">
            <span className="title">{localeGet(locale, 'api', 'default')}</span>
            <span>{entry.defaultVal}</span>
          </p>
        ) : null}
        {entry.format && entry.format.length ? (
          <div className="format">
            <p className="title">{localeGet(locale, 'api', 'format')}</p>
            <Highlight className="jsx">{entry.format.join('\n')}</Highlight>
          </div>
        ) : null}
        {entry.examples && entry.examples.length ? (
          <div className="examples">
            <p className="title">{localeGet(locale, 'api', 'examples')}</p>
            <ul className="list">{this.renderPropsExamples(entry.examples, locale)}</ul>
          </div>
        ) : null}
      </li>
    ));
  }

  renderParent(components, locale) {
    return (
      <div>
        <h4 className="sub-title">{localeGet(locale, 'api', 'parent')}</h4>
        <ul className="props-list">
          {components.map((entry, index) => (
            <li key={`item-${index}`} className="api-component-item">
              {entry.indexOf('svg') < 0 ? (
                <code>
                  <Link to={`/${locale}/api/${entry}`}>{`<${entry} />`}</Link>
                </code>
              ) : (
                <span>{entry}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderChildren(components, locale) {
    return (
      <div>
        <h4 className="sub-title">{localeGet(locale, 'api', 'children')}</h4>
        <ul className="props-list">
          {components.map((entry, index) => (
            <li key={`item-${index}`} className="api-component-item">
              {entry.indexOf('svg') < 0 ? (
                <code>
                  <Link to={`/${locale}/api/${entry}`}>{`<${entry} />`}</Link>
                </code>
              ) : (
                <span>{entry}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { page } = this.props;
    const api = API[page];
    const apiExamples = APIExamples[page];
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-api">
        <Helmet title={page} />
        <div className="sidebar">
          <h2>API</h2>
          {apiCates.map(({ name, items }, index) => (
            <div className="sidebar-cate" key={`cate-${index}`}>
              <h4>{localeGet(locale, 'api', name)}</h4>
              <ul className="menu">
                {items.map((compName, j) => (
                  <li key={`item-${j}`}>
                    <Link className={page === compName ? 'active' : ''} to={`/${locale}/api/${compName}`}>
                      <NewMenuTag name={compName} isNew={NEW_APIS.indexOf(compName) >= 0} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="content">
          <h3 className="page-title">{page}</h3>
          {api.desc && <p className="survey">{parseLocalObj(locale, api.desc)}</p>}
          {this.renderExamples(apiExamples, locale)}

          {api.parentComponents && api.parentComponents.length ? this.renderParent(api.parentComponents, locale) : null}
          {api.childrenComponents && api.childrenComponents.length
            ? this.renderChildren(api.childrenComponents, locale)
            : null}

          <h4 className="sub-title">Properties</h4>
          <ul className="props-list">{this.renderProps(api && api.props, locale)}</ul>
        </div>
      </div>
    );
  }
}

export default APIView;

/* eslint-disable class-methods-use-this */
import { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import API from '../docs/api';
import APIExamples from '../docs/apiExamples';
import Highlight from '../utils/Highlight.tsx';
import NewMenuTag from '../components/Shared/NewMenuTag';
import { getLocaleType, localeGet, parseLocalObj } from '../utils/LocaleUtils.ts';
import apiCates, { NEW_APIS } from '../docs/apiCates.ts';
import './APIView.scss';
import { SupportedLocale } from '../locale';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { ApiDoc, ApiExample, ApiProps, PropExample } from '../docs/api/types.ts';

type APIViewState = {
  indexesPage: string;
  activeDataCodeIndexes: number[];
};

class APIView extends PureComponent<RouteComponentProps, APIViewState> {
  state: APIViewState = {
    indexesPage: '',
    activeDataCodeIndexes: [],
  };

  handleSwitchDataCode = (index: number, page: string) => {
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

  renderExamples(examples: ReadonlyArray<ApiExample>, locale: SupportedLocale, page: string) {
    if (!examples || !examples.length) {
      return null;
    }

    const { activeDataCodeIndexes, indexesPage } = this.state;

    return (
      <div className="examples">
        <ul className="example-list">
          {examples.map((item: ApiExample, i) => {
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
                        onClick={this.handleSwitchDataCode.bind(this, i, page)}
                      >
                        {localeGet(locale, 'api', isDataCodeActive ? 'hideData' : 'showData')}
                      </button>
                    ) : null}
                    <Highlight className="jsx">
                      {item.dataCode && isDataCodeActive
                        ? `
                            ${item.dataCode}

                            ${item.code}
                          `.trim()
                        : item.code.trim()}
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

  renderPropsExamples(examples: ReadonlyArray<PropExample>, locale: string) {
    return examples.map((entry: PropExample) => (
      <li key={entry.name}>
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

  renderProps(props: ReadonlyArray<ApiProps>, locale: SupportedLocale) {
    if (!props || !props.length) {
      return null;
    }

    return props.map((entry: ApiProps) => (
      <li className="props-item" key={entry.name} id={entry.name}>
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

  renderParent(components: ReadonlyArray<string>, locale: SupportedLocale) {
    return (
      <div>
        <h4 className="sub-title">{localeGet(locale, 'api', 'parent')}</h4>
        <ul className="props-list">
          {components.map(entry => (
            <li key={entry} className="api-component-item">
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

  renderChildren(components: ReadonlyArray<string>, locale: SupportedLocale) {
    return (
      <div>
        <h4 className="sub-title">{localeGet(locale, 'api', 'children')}</h4>
        <ul className="props-list">
          {components.map((entry: string) => (
            <li key={entry} className="api-component-item">
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
    const { params } = this.props;
    const page = params?.name ?? 'AreaChart';

    if (!(page in API)) {
      return (
        <div className="page page-api">
          <Helmet title={page} />
          <div className="content">
            <h3 className="page-title">API Not Found</h3>
            <p>The API documentation for &#34;{page}&#34; does not exist.</p>
          </div>
        </div>
      );
    }

    const api: ApiDoc = API[page];
    const apiExamples = APIExamples[page];
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-api">
        <Helmet title={page} />
        <div className="sidebar">
          <h2>API</h2>
          {apiCates.map(({ name, items }) => (
            <div className="sidebar-cate" key={name}>
              <h4>{localeGet(locale, 'api', name)}</h4>
              <ul className="menu">
                {items.map(compName => (
                  <li key={compName}>
                    <Link className={page === compName ? 'active' : ''} to={`/${locale}/api/${compName}`}>
                      {/* @ts-ignore */}
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
          {this.renderExamples(apiExamples, locale, page)}

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

export default withRouter(APIView);

import { PureComponent } from 'react';
import { Link } from 'react-router';
import { getLocaleType, localeGet } from '../../utils/LocaleUtils.ts';
import './IndexView.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import { users } from '../../docs/users/users';
import { RouteComponentProps, withRouter } from '../../routes/withRouter.tsx';
import { CodeEditorWithPreview } from '../../components/CodeEditorWithPreview.tsx';
import IndexLineChart from './IndexLineChart.tsx';
import IndexLineChartSource from './IndexLineChart.tsx?raw';

class IndexViewImpl extends PureComponent<RouteComponentProps> {
  render() {
    const locale = getLocaleType(this.props);
    return (
      <div className="page page-index">
        <div className="desc">
          <p className="title">Recharts</p>
          <p className="subtitle">{localeGet(locale, 'home', 'slogan')}</p>
          <p>
            <Link to={`/${locale}/guide/installation/`} className="button install-btn">
              <i className="icon-energy" />
              &nbsp;
              {localeGet(locale, 'home', 'install')}
              {import.meta.env.VITE_RECHARTS_LATEST_VERSION
                ? ` v${import.meta.env.VITE_RECHARTS_LATEST_VERSION}`
                : undefined}
            </Link>
          </p>
          <iframe
            title="star"
            src="https://ghbtns.com/github-btn.html?user=recharts&repo=recharts&type=star&count=true&size=median"
            width="120px"
            height="22px"
          />
        </div>

        <div className="examples">
          <CodeEditorWithPreview
            Component={IndexLineChart}
            sourceCode={IndexLineChartSource}
            stackBlitzTitle="Recharts Line Chart Example"
          />
        </div>

        <div className="features block">
          <h2 className="block-title">{localeGet(locale, 'home', 'feature')}</h2>
          <ul className="feat">
            <li>
              <i className="icon-puzzle" />
              <strong>{localeGet(locale, 'home', 'composable')}</strong>
              <p className="text">{localeGet(locale, 'home', 'composableContent')}</p>
            </li>
            <li>
              <i className="icon-layers" />
              <strong>{localeGet(locale, 'home', 'reliable')}</strong>
              <p className="text">{localeGet(locale, 'home', 'reliableContent')}</p>
            </li>
            <li>
              <i className="icon-energy" />
              <strong>{localeGet(locale, 'home', 'powerful')}</strong>
              <p className="text">{localeGet(locale, 'home', 'powerfulContent')}</p>
            </li>
          </ul>
        </div>

        <div className="who block">
          <h2 className="block-title">{localeGet(locale, 'home', 'whoUse')}</h2>

          <ul className="users">
            {users.map(entry => (
              <li className="user" key={`user-${entry.url}`}>
                <a href={entry.url} target="_blank" title={entry.name} rel="noreferrer">
                  <img src={entry.logoImgUrl} title={entry.name} alt={entry.name} />
                </a>
              </li>
            ))}
          </ul>

          <div className="users-desc">
            <p>{localeGet(locale, 'home', 'logoDesc')}</p>
            <p>
              {localeGet(locale, 'home', 'addUser')}
              &nbsp;
              <a target="_self" href="https://github.com/recharts/recharts/wiki/Who-uses-recharts%3F">
                {localeGet(locale, 'home', 'edit')}
              </a>
            </p>
            <p>{localeGet(locale, 'home', 'logoSize')}</p>
          </div>
        </div>

        <div className="like block">
          <i className="icon-rocket" />
          <p className="text">{localeGet(locale, 'home', 'like')}</p>
          <p className="btn">
            <Link to={`/${locale}/guide/getting-started/`} className="button getting-started-btn">
              {localeGet(locale, 'home', 'get-started')}
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export const IndexView = withRouter(IndexViewImpl);

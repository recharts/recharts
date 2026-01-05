import { PureComponent } from 'react';
import { Link } from 'react-router';
import { LuLayers, LuPuzzle, LuRocket, LuZap } from 'react-icons/lu';
import { getLocaleType, localeGet } from '../../utils/LocaleUtils.ts';
import './IndexView.css';
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
        <div className="desc block">
          <h1>Recharts</h1>
          <p className="subtitle">{localeGet(locale, 'home', 'slogan')}</p>
          <Link to={`/${locale}/guide/installation/`} className="button install-btn">
            <LuZap />
            &nbsp;
            {localeGet(locale, 'home', 'install')}
            {import.meta.env.VITE_RECHARTS_LATEST_VERSION
              ? ` v${import.meta.env.VITE_RECHARTS_LATEST_VERSION}`
              : undefined}
          </Link>
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
              <LuPuzzle />
              <strong>{localeGet(locale, 'home', 'composable')}</strong>
              <p className="text">{localeGet(locale, 'home', 'composableContent')}</p>
            </li>
            <li>
              <LuLayers />
              <strong>{localeGet(locale, 'home', 'reliable')}</strong>
              <p className="text">{localeGet(locale, 'home', 'reliableContent')}</p>
            </li>
            <li>
              <LuZap />
              <strong>{localeGet(locale, 'home', 'powerful')}</strong>
              <p className="text">{localeGet(locale, 'home', 'powerfulContent')}</p>
            </li>
          </ul>
        </div>

        <div className="block">
          <h2 className="block-title">Thanks to our sponsors</h2>
          <p style={{ fontSize: '21px', color: 'black' }}>
            Browser testing via{' '}
            <a
              href="https://www.lambdatest.com/?utm_source=recharts&utm_medium=sponsor"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.lambdatest.com/blue-logo.png"
                style={{ verticalAlign: 'middle' }}
                width="250"
                height="45"
                alt="LambdaTest"
              />
            </a>
          </p>
        </div>

        <div className="who block">
          <h2 className="block-title">{localeGet(locale, 'home', 'whoUse')}</h2>

          <ul className="users">
            {users.map(entry => (
              <li className="user" key={`user-${entry.url}`}>
                <a href={entry.url} target="_blank" title={entry.name} rel="noreferrer">
                  <img src={entry.logoImgUrl} title={entry.name} alt={entry.name} />
                  <span className="user-name">{entry.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="like block">
          <i className="icon-rocket" />
          <LuRocket />
          <p className="text">{localeGet(locale, 'home', 'like')}</p>
          <Link to={`/${locale}/guide/getting-started/`} className="button getting-started-btn">
            {localeGet(locale, 'home', 'get-started')}
          </Link>
        </div>
      </div>
    );
  }
}

export const IndexView = withRouter(IndexViewImpl);

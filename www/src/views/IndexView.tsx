import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Link } from 'react-router';
import Highlight from '../utils/Highlight.tsx';
import { getLocaleType, localeGet } from '../utils/LocaleUtils.ts';
import './IndexView.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import users from '../docs/users/users';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';

const data = [
  {
    name: 'A',
    uv: 400,
    pv: 240,
    amt: 2400,
  },
  {
    name: 'B',
    uv: 300,
    pv: 456,
    amt: 2400,
  },
  {
    name: 'C',
    uv: 300,
    pv: 139,
    amt: 2400,
  },
  {
    name: 'D',
    uv: 200,
    pv: 980,
    amt: 2400,
  },
  {
    name: 'E',
    uv: 278,
    pv: 390,
    amt: 2400,
  },
  {
    name: 'F',
    uv: 189,
    pv: 480,
    amt: 2400,
  },
];

class IndexView extends PureComponent<RouteComponentProps> {
  render() {
    const locale = getLocaleType(this.props);

    const exCode = `<LineChart width={500} height={300} data={data}>
  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
  <XAxis dataKey="name"/>
  <YAxis/>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
</LineChart>
    `;

    return (
      <div className="page page-index">
        <div className="desc">
          <p className="title">Recharts</p>
          <p className="subtitle">{localeGet(locale, 'home', 'slogan')}</p>
          <p>
            <Link to={`/${locale}/guide/installation`} className="button install-btn">
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
          <div className="ex-code">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 5,
                bottom: 5,
                left: 0,
              }}
            >
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
            <Highlight className="jsx">{exCode}</Highlight>
          </div>
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
            {users.map((entry, index) => (
              <li className="user" key={`user-${index}`}>
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
            <Link to={`/${locale}/guide/getting-started`} className="button getting-started-btn">
              {localeGet(locale, 'home', 'get-started')}
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexView);

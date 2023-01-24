import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Highlight from '../utils/Highlight';
import { getLocaleType, localeGet } from '../utils/LocaleUtils';
import './IndexView.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import users from '../docs/users/users';

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

class IndexView extends PureComponent {
  render() {
    const locale = getLocaleType(this.props);

    const exCode = `
  <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
    `;

    return (
      <div className="page page-index">
        <div className="desc">
          <p className="title">Recharts</p>
          <p className="subtitle">{localeGet(locale, 'home', 'solgan')}</p>
          <p>
            <Link to={`/${locale}/guide/installation`} className="button install-btn">
              <i className="icon-energy" />
              {localeGet(locale, 'home', 'install')}
              &nbsp;v2.3.2
            </Link>
          </p>
          <iframe
            title="star"
            src="https://ghbtns.com/github-btn.html?user=recharts&repo=recharts&type=star&count=true&size=median"
            frameBorder="0"
            scrolling="0"
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
            <Highlight className="e4x">{exCode}</Highlight>
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
                <a href={entry.url} target="_blank" title={entry.anme} rel="noreferrer">
                  <img src={entry.logoImgUrl} title={entry.anme} alt={entry.anme} />
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

export default IndexView;

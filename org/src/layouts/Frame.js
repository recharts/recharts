import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { getLocaleType, localeGet } from '../utils/LocaleUtils';
import Affix from '../components/Affix';
import '../styles/app.scss';

const modules = ['guide', 'api', 'examples', 'blog', 'storybook'];

const locales = [
  { locale: 'en-US', text: 'En' },
  { locale: 'zh-CN', text: '中文' },
];

@connect((state, ownProps) => ({
  page: ownProps.location.pathname.split('/').filter((item) => !!item)[1] || 'index',
}))
class Frame extends Component {
  static propTypes = {
    page: PropTypes.string,
    children: PropTypes.node,
  };

  renderLocaleSwitch(curLocale) {
    const { location } = this.props;
    const pathName = location.pathname || '/';

    return (
      <span className="language-switch">
        {locales.map(({ locale, text }, index) => {
          const isActive = locale === curLocale;
          const linkPath = pathName.indexOf(curLocale) >= 0 ? pathName.replace(curLocale, locale) : `/${locale}`;

          return (
            <span key={`item-${index}`}>
              {index ? <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span> : null}
              {isActive ? (
                <span className="switch-item active">{text}</span>
              ) : (
                <Link className="switch-item" to={linkPath}>
                  {text}
                </Link>
              )}
            </span>
          );
        })}
      </span>
    );
  }

  render() {
    const { page, children } = this.props;
    const locale = getLocaleType(this.props);

    return (
      <div className="container">
        <Helmet titleTemplate="%s | Recharts" />
        <Affix>
          <header>
            <div className="header-wrapper">
              <h1 className="logo">
                <Link className="nav-logo" to={`/${locale}`}>
                  &lt;Recharts /&gt;
                </Link>
              </h1>
              <nav>
                <ul className="nav" id="nav">
                  {modules.map((entry, index) => (
                    <li key={`item-${index}`}>
                      <Link className={`nav-link ${entry === page ? 'active' : ''}`} to={`/${locale}/${entry}`}>
                        {localeGet(locale, 'frame', entry)}
                      </Link>
                    </li>
                  ))}
                  <li className="github-wrapper">
                    <a
                      href="https://github.com/recharts/recharts"
                      target="_blank"
                      className="nav-github"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="language-switch-wrapper">{this.renderLocaleSwitch(locale)}</li>
                </ul>
              </nav>
            </div>
          </header>
        </Affix>
        {children}
        <footer>
          <p>
            <span>Released under the </span>
            <a href="http://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">
              MIT License
            </a>
          </p>
          <p>Copyright (c) 2016-2021 Recharts Group</p>
        </footer>
      </div>
    );
  }
}

export default Frame;

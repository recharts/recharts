import { Component, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Link, NavLink } from 'react-router';
import { getLocaleType, localeGet } from '../utils/LocaleUtils.ts';
import '../styles/app.scss';
import { TargetBlankLink } from '../components/Shared/TargetBlankLink.tsx';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';

const modules = ['guide', 'api', 'examples', 'storybook'];

const locales = [
  { locale: 'en-US', text: 'En' },
  { locale: 'zh-CN', text: '中文' },
];

type FrameProps = RouteComponentProps & {
  children: ReactNode;
};

class Frame extends Component<FrameProps> {
  renderLocaleSwitch(curLocale: string) {
    const { location } = this.props;
    const pathName = location.pathname || '/';

    return (
      <span className="language-switch">
        {locales.map(({ locale, text }, index) => {
          const isActive = locale === curLocale;
          const linkPath = pathName.indexOf(curLocale) >= 0 ? pathName.replace(curLocale, locale) : `/${locale}`;

          return (
            <span key={locale}>
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
    const { children } = this.props;
    const locale = getLocaleType(this.props);

    return (
      <div className="container">
        <Helmet titleTemplate="%s | Recharts" />
        <header>
          <div className="header-wrapper">
            <h1 className="logo">
              <Link className="nav-logo" to={`/${locale}`}>
                &lt;Recharts /&gt;
              </Link>
            </h1>
            <nav>
              <ul className="nav" id="nav">
                {modules.map(entry => (
                  <li key={entry}>
                    <NavLink to={`/${locale}/${entry}`}>{localeGet(locale, 'frame', entry)}</NavLink>
                  </li>
                ))}
                <li className="github-wiki">
                  <TargetBlankLink href="https://github.com/recharts/recharts/wiki">Wiki</TargetBlankLink>
                </li>
                <li className="github-wrapper">
                  <TargetBlankLink href="https://github.com/recharts/recharts">GitHub</TargetBlankLink>
                </li>
                <li className="language-switch-wrapper">{this.renderLocaleSwitch(locale)}</li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <p>
            <span>Released under the </span>
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">
              MIT License
            </a>
          </p>
          <p>Copyright (c) 2016-{new Date().getFullYear()} Recharts Group</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(Frame);

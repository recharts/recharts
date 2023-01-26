import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Installation, GettingStarted, Customize } from '../components/GuideView';
import { getLocaleType, localeGet } from '../utils/LocaleUtils';

const modules = ['installation', 'getting-started', 'customize'];

@connect((state, ownProps) => {
  const pathname = ownProps.location.pathname || '';
  const paths = pathname.split('/');

  return {
    page: paths && paths.length === 4 ? paths[3] : modules[0],
  };
})
class GuideView extends PureComponent {
  renderGuide(locale) {
    const { page } = this.props;

    if (page === 'installation') {
      return <Installation locale={locale} />;
    }
    if (page === 'getting-started') {
      return <GettingStarted locale={locale} />;
    }
    if (page === 'customize') {
      return <Customize locale={locale} />;
    }
    return null;
  }

  render() {
    const { page } = this.props;
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-guide">
        <div className="sidebar">
          <div className="sidebar-cate">
            <h2>{localeGet(locale, 'guide', 'guide')}</h2>
            <ul className="menu">
              {modules.map((entry, index) => (
                <li key={`item-${index}`}>
                  <Link to={`/${locale}/guide/${entry}`} className={entry === page ? 'active' : ''}>
                    {localeGet(locale, 'guide', entry)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content">{this.renderGuide(locale)}</div>
      </div>
    );
  }
}

export default GuideView;

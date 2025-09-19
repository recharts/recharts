import { ComponentType, PureComponent } from 'react';
import { Link } from 'react-router';
import { Installation, GettingStarted, Customize } from '../components/GuideView';
import { getLocaleType, localeGet } from '../utils/LocaleUtils.ts';
import { SupportedLocale } from '../locale';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { ActiveIndex } from '../components/GuideView/ActiveIndex.tsx';

const guideMap: Record<string, ComponentType<{ locale: SupportedLocale }>> = {
  installation: Installation,
  'getting-started': GettingStarted,
  customize: Customize,
  activeIndex: ActiveIndex,
};

const allGuides = Object.keys(guideMap);

function Guide({ locale, page }: { locale: SupportedLocale; page: string }) {
  const GuideComponent = guideMap[page];
  if (GuideComponent) {
    return <GuideComponent locale={locale} />;
  }
  return null;
}

class GuideView extends PureComponent<RouteComponentProps> {
  render() {
    const { params } = this.props;
    const page = params?.name ?? allGuides[0];

    const locale = getLocaleType(this.props);

    return (
      <div className="page page-guide">
        <div className="sidebar">
          <div className="sidebar-cate">
            <h2>{localeGet(locale, 'guide', 'guide')}</h2>
            <ul className="menu">
              {allGuides.map(entry => (
                <li key={entry}>
                  <Link to={`/${locale}/guide/${entry}`} className={entry === page ? 'active' : ''}>
                    {localeGet(locale, 'guide', entry)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content">
          <Guide locale={locale} page={page} />
        </div>
      </div>
    );
  }
}

export default withRouter(GuideView);

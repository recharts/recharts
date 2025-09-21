import { ComponentType, PureComponent } from 'react';
import { Installation, GettingStarted, Customize } from '../components/GuideView';
import { getLocaleType, localeGet } from '../utils/LocaleUtils.ts';
import { SupportedLocale } from '../locale';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { ActiveIndex } from '../components/GuideView/ActiveIndex.tsx';
import { SidebarNav } from '../components/Shared/SidebarNav';

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
        <SidebarNav
          title={localeGet(locale, 'guide', 'guide')}
          activePage={page}
          categories={[
            {
              name: '',
              items: allGuides.map(entry => ({
                name: entry,
                url: `/${locale}/guide/${entry}`,
              })),
            },
          ]}
          renderItem={item => localeGet(locale, 'guide', item.name)}
        />
        <div className="content">
          <Guide locale={locale} page={page} />
        </div>
      </div>
    );
  }
}

export default withRouter(GuideView);

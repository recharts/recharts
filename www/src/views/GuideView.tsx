import { ComponentType, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Installation, GettingStarted, Customize } from '../components/GuideView';
import { getLocaleType, localeGet } from '../utils/LocaleUtils.ts';
import { SupportedLocale } from '../locale';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { ActiveIndex } from '../components/GuideView/ActiveIndex';
import { ChartSizing } from '../components/GuideView/ChartSizing.tsx';

const guideMap: Record<string, ComponentType<{ locale: SupportedLocale }>> = {
  installation: Installation,
  'getting-started': GettingStarted,
  customize: Customize,
  activeIndex: ActiveIndex,
  sizes: ChartSizing,
};

export const allGuides = Object.keys(guideMap);

function Guide({ locale, page }: { locale: SupportedLocale; page: string }) {
  const GuideComponent = guideMap[page];
  if (GuideComponent) {
    return <GuideComponent locale={locale} />;
  }
  return null;
}

class GuideViewImpl extends PureComponent<RouteComponentProps> {
  render() {
    const { params } = this.props;
    const page = params?.name ?? allGuides[0];

    const locale = getLocaleType(this.props);
    const title = localeGet(locale, 'guide', page) || page;

    return (
      <div className="page page-guide">
        <Helmet title={title} />
        <div className="content">
          <Guide locale={locale} page={page} />
        </div>
      </div>
    );
  }
}

export const GuideView = withRouter(GuideViewImpl);

import { ComponentType, PureComponent } from 'react';
import Helmet from 'react-helmet';
import {
  Installation,
  GettingStarted,
  Customize,
  ZIndex,
  CoordinateSystems,
  TypeScript,
} from '../components/GuideView';
import { getLocaleType, localeGet } from '../utils/LocaleUtils.ts';
import { SupportedLocale } from '../locale';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { ActiveIndex } from '../components/GuideView/ActiveIndex';
import { ChartSizing } from '../components/GuideView/ChartSizing';
import { DomainAndTicks } from '../components/GuideView/DomainAndTicks';
import { AxisTicks } from '../components/GuideView/AxisTicks';
import { Performance } from '../components/GuideView/Performance';
import { RoundedBars } from '../components/GuideView/RoundedBars';
import { BarAlign } from '../components/GuideView/BarAlign';
import { CellDeprecationNotice } from '../components/GuideView/CellDeprecationNotice';
import { AnimationsGuide } from '../components/GuideView/Animations';
import { ThemingGuide } from '../components/GuideView/Theming';
import { ThemeColorTesting } from '../components/GuideView/ThemeColorTesting';
import { DataStyles } from '../components/GuideView/DataStyles';
import { LabelColors } from '../components/GuideView/LabelColors';
import { Patterns } from '../components/GuideView/Patterns';

/**
 * Sections group guides in the navigation. They are displayed in this order.
 * Each section needs a translated name in `guideSections` in every locale file in `www/src/locale`.
 */
export const guideSections = [
  'getting-started',
  'layout-and-axes',
  'styling',
  'theming',
  'advanced',
  'migration',
] as const;

export type GuideSection = (typeof guideSections)[number];

type GuideDefinition = {
  Component: ComponentType<{ locale: SupportedLocale }>;
  /**
   * The navigation section this guide belongs to.
   * Within a section, guides are listed in the order in which they appear in `guideMap`.
   */
  section: GuideSection;
};

const guideMap: Record<string, GuideDefinition> = {
  installation: { Component: Installation, section: 'getting-started' },
  'getting-started': { Component: GettingStarted, section: 'getting-started' },
  typescript: { Component: TypeScript, section: 'getting-started' },
  customize: { Component: Customize, section: 'getting-started' },
  sizes: { Component: ChartSizing, section: 'layout-and-axes' },
  domainAndTicks: { Component: DomainAndTicks, section: 'layout-and-axes' },
  axisTicks: { Component: AxisTicks, section: 'layout-and-axes' },
  barAlignment: { Component: BarAlign, section: 'layout-and-axes' },
  dataStyles: { Component: DataStyles, section: 'styling' },
  roundedBars: { Component: RoundedBars, section: 'styling' },
  'label-colors': { Component: LabelColors, section: 'styling' },
  patterns: { Component: Patterns, section: 'styling' },
  animations: { Component: AnimationsGuide, section: 'styling' },
  theming: { Component: ThemingGuide, section: 'theming' },
  'theme-color-testing': { Component: ThemeColorTesting, section: 'theming' },
  coordinateSystems: { Component: CoordinateSystems, section: 'advanced' },
  zIndex: { Component: ZIndex, section: 'advanced' },
  performance: { Component: Performance, section: 'advanced' },
  activeIndex: { Component: ActiveIndex, section: 'migration' },
  cell: { Component: CellDeprecationNotice, section: 'migration' },
};

/**
 * Guide names grouped by section, in navigation order.
 */
export const guidesBySection: ReadonlyArray<{ section: GuideSection; guides: ReadonlyArray<string> }> =
  guideSections.map(section => ({
    section,
    guides: Object.keys(guideMap).filter(name => guideMap[name]?.section === section),
  }));

export const allGuides: ReadonlyArray<string> = guidesBySection.flatMap(({ guides }) => guides);

function Guide({ locale, page }: { locale: SupportedLocale; page: string }) {
  const guide = guideMap[page];
  if (guide) {
    return <guide.Component locale={locale} />;
  }
  return null;
}

class GuideViewImpl extends PureComponent<RouteComponentProps> {
  render() {
    const { params } = this.props;
    const defaultGuide = allGuides[0];
    if (defaultGuide == null) {
      throw new Error('Expected at least one guide to be registered');
    }
    const page = params?.name ?? defaultGuide;

    const locale = getLocaleType(this.props);
    const title = localeGet(locale, 'guide', page) || page;

    return (
      <div className="page page-guide">
        <Helmet title={title} />
        <div className="content">
          <Guide locale={locale} page={page} key={page} />
        </div>
      </div>
    );
  }
}

export const GuideView = withRouter(GuideViewImpl);

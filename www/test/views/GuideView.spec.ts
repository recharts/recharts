import { describe, it, expect } from 'vitest';
import { allGuides, guideSections, guidesBySection } from '../../src/views/GuideView';
import { supportedLocales } from '../../src/locale';
import { localeGet } from '../../src/utils/LocaleUtils';
import { getAllNavigationItems } from '../../src/navigation';

describe('guide sections', () => {
  it.each(supportedLocales)('should have a name for every section in %s', locale => {
    guideSections.forEach(section => {
      expect(localeGet(locale, 'guideSections', section), `section "${section}"`).toEqual(expect.any(String));
    });
  });

  it.each(supportedLocales)('should have a title for every guide in %s', locale => {
    allGuides.forEach(guide => {
      expect(localeGet(locale, 'guide', guide), `guide "${guide}"`).toEqual(expect.any(String));
    });
  });

  it('should not have empty sections', () => {
    guidesBySection.forEach(({ section, guides }) => {
      expect(guides.length, `section "${section}"`).toBeGreaterThan(0);
    });
  });

  it('should start with the installation guide, which is also the default guide page', () => {
    expect(allGuides[0]).toBe('installation');
  });

  it('should show every guide in the navigation, grouped by section', () => {
    const guideNav = getAllNavigationItems('en-US').find(item => item.key === 'guide');
    expect(guideNav?.categories?.map(category => category.displayName)).toEqual([
      'Getting started',
      'Layout and axes',
      'Styling',
      'Theming',
      'Advanced',
      'Migration',
    ]);
    const guidesInNav = guideNav?.categories?.flatMap(category => category.items.map(item => item.key));
    expect(guidesInNav).toEqual(allGuides);
  });
});

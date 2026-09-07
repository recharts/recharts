/*
 * Shared Playwright test fixtures for the VR tests.
 *
 * mountStory() wraps Playwright's built-in mount() fixture and scopes the
 * returned locator the same way the old Playwright component testing runtime
 * did: when the gallery root has exactly one element child, the locator
 * points at that child, otherwise it points at the root itself.
 * This keeps toHaveScreenshot() capturing the same bounding box as before.
 */
import { test as base, expect, type Locator, type PlaywrightTestArgs, type TestInfo } from '@playwright/test';

export type RechartsThemeVariant = 'legacy' | 'light' | 'dark';

type MountStory = PlaywrightTestArgs['mount'];

type TestOptions = {
  /**
   * Recharts theme variants allowed for the current test.
   *
   * This is an option fixture so it can be configured with test.use() at file,
   * describe, or individual test scope.
   */
  rechartsThemes: readonly RechartsThemeVariant[];
};

type TestFixtures = {
  mountStory: MountStory;
  rechartsTheme: RechartsThemeVariant;
};

const allRechartsThemes: readonly RechartsThemeVariant[] = ['legacy', 'light', 'dark'];

function isRechartsThemeVariant(value: unknown): value is RechartsThemeVariant {
  return value === 'legacy' || value === 'light' || value === 'dark';
}

function getProjectRechartsTheme(testInfo: TestInfo): RechartsThemeVariant {
  const projectTheme = testInfo.project.metadata?.rechartsTheme;
  return isRechartsThemeVariant(projectTheme) ? projectTheme : 'legacy';
}

function getTaggedRechartsThemes(testInfo: TestInfo): RechartsThemeVariant[] {
  const taggedThemes = testInfo.tags.flatMap(tag => {
    const match = /^@recharts-theme-(legacy|light|dark)$/.exec(tag);
    if (match === null || !isRechartsThemeVariant(match[1])) {
      return [];
    }
    return [match[1]];
  });

  return [...new Set(taggedThemes)];
}

function getAllowedRechartsThemes(
  rechartsThemes: readonly RechartsThemeVariant[],
  testInfo: TestInfo,
): readonly RechartsThemeVariant[] {
  const taggedThemes = getTaggedRechartsThemes(testInfo);
  return taggedThemes.length > 0 ? taggedThemes : rechartsThemes;
}

function createTest(defaultThemes: readonly RechartsThemeVariant[]) {
  return base.extend<TestOptions & TestFixtures>({
    rechartsThemes: [defaultThemes, { option: true }],

    rechartsTheme: async ({ rechartsThemes: _rechartsThemes }, use, testInfo) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks -- we are in a test fixture not a React hook
      await use(getProjectRechartsTheme(testInfo));
    },

    mountStory: async ({ mount, rechartsTheme, rechartsThemes }, use, testInfo) => {
      const allowedThemes = getAllowedRechartsThemes(rechartsThemes, testInfo);
      if (!allowedThemes.includes(rechartsTheme)) {
        testInfo.skip(true, `Recharts theme "${rechartsTheme}" is not enabled for this test`);
      }

      const mountStory: MountStory = async (storyId, props) => {
        const root = await mount(storyId, props);
        const children = root.locator(':scope > *');
        const component: Locator = (await children.count()) === 1 ? children.first() : root;

        return Object.assign(component, {
          update: root.update,
          unmount: root.unmount,
        });
      };

      // eslint-disable-next-line react-hooks/rules-of-hooks -- we are in a test fixture not a React hook
      await use(mountStory);
    },
  });
}

/*
 * Existing specs use this fixture and therefore keep their legacy-only
 * snapshot set while they are migrated. `legacyTest` is the explicit name for
 * new specs that intentionally need the compatibility behavior.
 */
export const legacyTest = createTest(['legacy']);
export const test = legacyTest;

/*
 * New specs should use this fixture. It creates one test execution for each
 * browser/theme project and automatically supplies the selected theme to the
 * gallery boundary.
 */
export const testWithThemes = createTest(allRechartsThemes);

export { expect };

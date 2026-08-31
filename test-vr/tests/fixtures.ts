/*
 * Shared Playwright test fixtures for the VR tests.
 *
 * mountStory() wraps Playwright's built-in mount() fixture and scopes the
 * returned locator the same way the old Playwright component testing runtime
 * did: when the gallery root has exactly one element child, the locator
 * points at that child, otherwise it points at the root itself.
 * This keeps toHaveScreenshot() capturing the same bounding box as before.
 */
import { test as base, expect, type Locator, type PlaywrightTestArgs } from '@playwright/test';

type MountStory = PlaywrightTestArgs['mount'];

export const test = base.extend<{ mountStory: MountStory }>({
  mountStory: async ({ mount }, use) => {
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

export { expect };

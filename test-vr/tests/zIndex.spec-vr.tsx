import { expect, test } from './fixtures';

test('bar and line without z-index', async ({ mountStory }) => {
  const component = await mountStory('zIndex/BarAndLineWithoutZIndex');
  await expect(component).toHaveScreenshot();
});

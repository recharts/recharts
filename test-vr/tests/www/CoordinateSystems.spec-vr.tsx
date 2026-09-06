import type { AxisTickSnapExample, DataSnapExample } from './CoordinateSystems.story';
import { expect, test } from '../fixtures';

test('DataSnapExample', async ({ mountStory }) => {
  const component = await mountStory<typeof DataSnapExample>('www/CoordinateSystems/DataSnapExample', {
    initialPointers: [{ relativeX: 200, relativeY: 100 }],
  });
  await expect(component).toHaveScreenshot();
});

test('AxisTickSnapExample', async ({ mountStory }) => {
  const component = await mountStory<typeof AxisTickSnapExample>('www/CoordinateSystems/AxisTickSnapExample', {
    initialPointers: [{ relativeX: 200, relativeY: 100 }],
  });
  await expect(component).toHaveScreenshot();
});

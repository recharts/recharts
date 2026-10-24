import type { AxisTickSnapExample, DataSnapExample } from './CoordinateSystems.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('DataSnapExample', async ({ mountStory }) => {
  const component = await mountStory<typeof DataSnapExample>('www/CoordinateSystems/DataSnapExample', {
    initialPointers: [{ relativeX: 200, relativeY: 100 }],
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('AxisTickSnapExample', async ({ mountStory }) => {
  const component = await mountStory<typeof AxisTickSnapExample>('www/CoordinateSystems/AxisTickSnapExample', {
    initialPointers: [{ relativeX: 200, relativeY: 100 }],
  });
  await expect(component).toHaveScreenshot();
});

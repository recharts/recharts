import type { CustomBandScaleExample } from './BarAlign.story';
import { expect, test } from '../fixtures';

test('CustomBandScaleExample', async ({ mountStory }) => {
  const component = await mountStory<typeof CustomBandScaleExample>('www/BarAlign/CustomBandScaleExample', {
    testTheme: 'light',
    align: 0.2,
    barGap: 0.2,
    barCategoryGap: 0.1,
    paddingInner: 0.2,
    paddingOuter: 0.2,
  });
  await expect(component).toHaveScreenshot();
});

test('CustomBandScaleExample - left aligned', async ({ mountStory }) => {
  const component = await mountStory<typeof CustomBandScaleExample>('www/BarAlign/CustomBandScaleExample', {
    testTheme: 'light',
    align: 0.1,
    barGap: 0.01,
    barCategoryGap: 0.01,
    paddingInner: 0,
    paddingOuter: 10,
  });
  await expect(component).toHaveScreenshot();
});

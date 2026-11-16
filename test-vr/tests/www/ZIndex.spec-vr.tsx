import { PrahaMetro, ShadowDomExample } from './ZIndex.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('ZIndex PrahaMetro', async ({ mountStory }) => {
  const component = await mountStory<typeof PrahaMetro>('www/ZIndex/PrahaMetro');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ShadowDomExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ShadowDomExample>('www/ZIndex/ShadowDomExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

import type {
  LegendAlign,
  LegendPosition as LegendPositionStory,
  VeryLongLegendTextStory,
} from './LegendPosition.story';
import { expect, testWithThemes } from './fixtures';

testWithThemes('Legend.position with default offset', async ({ mountStory }) => {
  const component = await mountStory<typeof LegendPositionStory>('LegendPosition/LegendPosition');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Legend.position with custom offset', async ({ mountStory }) => {
  const component = await mountStory<typeof LegendPositionStory>('LegendPosition/LegendPosition', { offset: 30 });
  await expect(component).toHaveScreenshot();
});

testWithThemes('Legend.align without offset', async ({ mountStory }) => {
  const component = await mountStory<typeof LegendAlign>('LegendPosition/LegendAlign');
  await expect(component).toHaveScreenshot();
});

testWithThemes('VeryLongLegendText with position "bottom"', async ({ mountStory }) => {
  const component = await mountStory<typeof VeryLongLegendTextStory>('LegendPosition/VeryLongLegendTextStory', {
    position: 'bottom',
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('VeryLongLegendText with position "left"', async ({ mountStory }) => {
  const component = await mountStory<typeof VeryLongLegendTextStory>('LegendPosition/VeryLongLegendTextStory', {
    position: 'left',
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('VeryLongLegendText with position "insideRight"', async ({ mountStory }) => {
  const component = await mountStory<typeof VeryLongLegendTextStory>('LegendPosition/VeryLongLegendTextStory', {
    position: 'insideRight',
  });
  await expect(component).toHaveScreenshot();
});

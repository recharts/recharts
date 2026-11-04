import type {
  DataStylesBarExample,
  DataStylesLineDotsExample,
  DataStylesPrecedenceExample,
} from './DataStylesExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('DataStylesBarExample', async ({ mountStory }) => {
  const component = await mountStory<typeof DataStylesBarExample>('www/DataStylesExamples/DataStylesBarExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('DataStylesLineDotsExample', async ({ mountStory }) => {
  const component = await mountStory<typeof DataStylesLineDotsExample>(
    'www/DataStylesExamples/DataStylesLineDotsExample',
    { isAnimationActive: false },
  );
  await expect(component).toHaveScreenshot();
});

testWithThemes('DataStylesPrecedenceExample', async ({ mountStory }) => {
  const component = await mountStory<typeof DataStylesPrecedenceExample>(
    'www/DataStylesExamples/DataStylesPrecedenceExample',
    { isAnimationActive: false },
  );
  await expect(component).toHaveScreenshot();
});

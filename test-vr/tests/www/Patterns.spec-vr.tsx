import type {
  BuiltInPatternsExample,
  CustomFillsExample,
  GradientsExample,
  ThemePatternsExample,
} from './Patterns.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('Patterns guide: built-in patterns', async ({ mountStory }) => {
  const component = await mountStory<typeof BuiltInPatternsExample>('www/Patterns/BuiltInPatternsExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('Patterns guide: gradients', async ({ mountStory }) => {
  const component = await mountStory<typeof GradientsExample>('www/Patterns/GradientsExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('Patterns guide: custom fills', async ({ mountStory }) => {
  const component = await mountStory<typeof CustomFillsExample>('www/Patterns/CustomFillsExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('Patterns guide: theme patterns', async ({ mountStory }) => {
  const component = await mountStory<typeof ThemePatternsExample>('www/Patterns/ThemePatternsExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

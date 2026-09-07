import { expect, testWithThemes } from './fixtures';

testWithThemes('renders the selected Recharts theme variant', async ({ mountStory, rechartsTheme }) => {
  const component = await mountStory('ThemeVariants/ThemeVariants');

  await expect(component).toHaveAttribute('data-recharts-theme', rechartsTheme);
});

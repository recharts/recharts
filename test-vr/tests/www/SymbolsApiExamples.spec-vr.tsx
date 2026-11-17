import { expect, testWithThemes } from '../fixtures';

testWithThemes('SymbolsTypes', async ({ mountStory }) => {
  const component = await mountStory('www/SymbolsApiExamples/SymbolsTypes');
  await expect(component).toHaveScreenshot();
});

import { expect, testWithThemes } from '../fixtures';

testWithThemes.describe('padding with Area', () => {
  testWithThemes('default', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/AreaDefault');
    await expect(component).toHaveScreenshot();
  });

  testWithThemes('no-gap', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/AreaNoGap');
    await expect(component).toHaveScreenshot();
  });

  testWithThemes('gap', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/AreaGap');
    await expect(component).toHaveScreenshot();
  });

  testWithThemes('custom padding', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/AreaCustomPadding');
    await expect(component).toHaveScreenshot();
  });
});

testWithThemes.describe('padding with Bar', () => {
  testWithThemes('default', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/BarDefault');
    await expect(component).toHaveScreenshot();
  });

  testWithThemes('no-gap', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/BarNoGap');
    await expect(component).toHaveScreenshot();
  });

  testWithThemes('gap', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/BarGap');
    await expect(component).toHaveScreenshot();
  });

  testWithThemes('custom padding', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/BarCustomPadding');
    await expect(component).toHaveScreenshot();
  });
});

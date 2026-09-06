import { expect, test } from '../fixtures';

test.describe('padding with Area', () => {
  test('default', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/AreaDefault');
    await expect(component).toHaveScreenshot();
  });

  test('no-gap', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/AreaNoGap');
    await expect(component).toHaveScreenshot();
  });

  test('gap', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/AreaGap');
    await expect(component).toHaveScreenshot();
  });

  test('custom padding', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/AreaCustomPadding');
    await expect(component).toHaveScreenshot();
  });
});

test.describe('padding with Bar', () => {
  test('default', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/BarDefault');
    await expect(component).toHaveScreenshot();
  });

  test('no-gap', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/BarNoGap');
    await expect(component).toHaveScreenshot();
  });

  test('gap', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/BarGap');
    await expect(component).toHaveScreenshot();
  });

  test('custom padding', async ({ mountStory }) => {
    const component = await mountStory('CartesianAxis/CartesianAxis.padding/BarCustomPadding');
    await expect(component).toHaveScreenshot();
  });
});

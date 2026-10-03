import { expect, testWithThemes } from './fixtures';

/*
 * The text assertions check the full list of sizes that the chart SVG had,
 * which catches a chart that renders in a wrong size first and then corrects itself.
 * The screenshots check where the chart ends up.
 */
const cases = [
  { story: 'PercentSizeWithPadding', sizes: '360x160' },
  { story: 'PercentSizeWithBorder', sizes: '380x180' },
  { story: 'ResponsiveWithPadding', sizes: '360x160' },
  { story: 'PercentSizeInScaledParent', sizes: '400x200' },
  { story: 'ResponsiveInScaledParent', sizes: '400x200' },
  { story: 'ResponsiveContainerWithPadding', sizes: '360x160' },
  { story: 'ResponsiveContainerInScaledParent', sizes: '400x200' },
];

for (const { story, sizes } of cases) {
  testWithThemes(story, async ({ mountStory, page }) => {
    const component = await mountStory(`ChartSizeMeasurement/${story}`);
    await expect(page.getByTestId('rendered-sizes')).toHaveText(`Rendered sizes: ${sizes}`);
    await expect(component).toHaveScreenshot();
  });
}

testWithThemes('MountedInScaledParentThenUnscaled', async ({ mountStory, page }) => {
  const component = await mountStory('ChartSizeMeasurement/MountedInScaledParentThenUnscaled');
  await expect(page.getByTestId('rendered-sizes')).toHaveText('Rendered sizes: 400x200');
  await page.getByRole('button', { name: 'Remove transform' }).click();
  await expect(page.getByTestId('rendered-sizes')).toHaveText('Rendered sizes: 400x200');
  await expect(component).toHaveScreenshot();
});

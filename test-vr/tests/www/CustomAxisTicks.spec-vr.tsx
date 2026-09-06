import type { AxisTicksPlayground, CustomAxisTicks } from './CustomAxisTicks.story';
import { expect, test } from '../fixtures';

test('AxisTicksPlayground with linear scale', async ({ mountStory }) => {
  const component = await mountStory<typeof AxisTicksPlayground>('www/CustomAxisTicks/AxisTicksPlayground', {
    niceTicks: 'snap125',
    scale: 'linear',
    tickCount: 6,
  });
  await expect(component).toHaveScreenshot();
});

test('AxisTicksPlayground with symlog scale', async ({ mountStory }) => {
  const component = await mountStory<typeof AxisTicksPlayground>('www/CustomAxisTicks/AxisTicksPlayground', {
    niceTicks: 'adaptive',
    scale: 'symlog',
    tickCount: 4,
  });
  await expect(component).toHaveScreenshot();
});

test('CustomAxisTicks', async ({ mountStory }) => {
  const component = await mountStory<typeof CustomAxisTicks>('www/CustomAxisTicks/CustomAxisTicks', {
    scale: 'linear',
  });
  await expect(component).toHaveScreenshot();
});

import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import LegendPositionExample from '../../www/src/docs/exampleComponents/Legend/LegendPositionExample.tsx';
import { testWithLightTheme } from './www/fixtures.tsx';

const positions = [
  'top',
  'left',
  'right',
  'bottom',
  'center',
  'insideLeft',
  'insideRight',
  'insideTop',
  'insideBottom',
  'insideTopLeft',
  'insideBottomLeft',
  'insideTopRight',
  'insideBottomRight',
] as const;

for (const position of positions) {
  testWithLightTheme(`LegendPositionExample - ${position}`, async ({ mount }) => {
    const component = await mount(<LegendPositionExample position={position} />);
    await expect(component).toHaveScreenshot();
  });
}

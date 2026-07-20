import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import LegendPositionExample from '../../www/src/docs/exampleComponents/Legend/LegendPositionExample.tsx';

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
  test(`LegendPositionExample - ${position}`, async ({ mount }) => {
    const component = await mount(<LegendPositionExample position={position} />);
    await expect(component).toHaveScreenshot();
  });
}

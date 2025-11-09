import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { IfOverflowTestWithSegment } from './ReferenceLineComponents';

test.describe('ReferenceLine ifOverflow with segment', () => {
  test('ifOverflow="hidden" does not render overflowed parts', async ({ mount }) => {
    const component = await mount(<IfOverflowTestWithSegment ifOverflow="hidden" />);
    await expect(component).toHaveScreenshot();
  });

  test('ifOverflow="visible" renders overflowed parts', async ({ mount }) => {
    const component = await mount(<IfOverflowTestWithSegment ifOverflow="visible" />);
    await expect(component).toHaveScreenshot();
  });

  test('ifOverflow="discard" does not render overflowed parts', async ({ mount }) => {
    const component = await mount(<IfOverflowTestWithSegment ifOverflow="discard" />);
    await expect(component).toHaveScreenshot();
  });

  test('ifOverflow="extendDomain" extends the domain to include overflowed parts', async ({ mount }) => {
    const component = await mount(<IfOverflowTestWithSegment ifOverflow="extendDomain" />);
    await expect(component).toHaveScreenshot();
  });

  test('ifOverflow default behavior is "discard"', async ({ mount }) => {
    const component = await mount(<IfOverflowTestWithSegment ifOverflow={undefined} />);
    await expect(component).toHaveScreenshot();
  });
});

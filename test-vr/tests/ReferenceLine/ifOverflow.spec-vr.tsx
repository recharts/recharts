import type { IfOverflowWithSegment } from './ifOverflow.story';
import { expect, test } from '../fixtures';

test.describe('ReferenceLine ifOverflow with segment', () => {
  // Leaving ifOverflow unset is documented to behave as "discard" — asserted here
  // rather than left as two baselines that happen to match.
  const IF_OVERFLOW_DEFAULT_EQUALS_DISCARD = 'ReferenceLine-ifOverflow-default-equals-discard.png';
  test('ifOverflow="hidden" does not render overflowed parts', async ({ mountStory }) => {
    const component = await mountStory<typeof IfOverflowWithSegment>('ReferenceLine/ifOverflow/IfOverflowWithSegment', {
      ifOverflow: 'hidden',
    });
    await expect(component).toHaveScreenshot();
  });

  test('ifOverflow="visible" renders overflowed parts', async ({ mountStory }) => {
    const component = await mountStory<typeof IfOverflowWithSegment>('ReferenceLine/ifOverflow/IfOverflowWithSegment', {
      ifOverflow: 'visible',
    });
    await expect(component).toHaveScreenshot();
  });

  test('ifOverflow="discard" does not render overflowed parts', async ({ mountStory }) => {
    const component = await mountStory<typeof IfOverflowWithSegment>('ReferenceLine/ifOverflow/IfOverflowWithSegment', {
      ifOverflow: 'discard',
    });
    await expect(component).toHaveScreenshot(IF_OVERFLOW_DEFAULT_EQUALS_DISCARD);
  });

  test('ifOverflow="extendDomain" extends the domain to include overflowed parts', async ({ mountStory }) => {
    const component = await mountStory<typeof IfOverflowWithSegment>('ReferenceLine/ifOverflow/IfOverflowWithSegment', {
      ifOverflow: 'extendDomain',
    });
    await expect(component).toHaveScreenshot();
  });

  test('ifOverflow default behavior is "discard"', async ({ mountStory }) => {
    const component = await mountStory<typeof IfOverflowWithSegment>('ReferenceLine/ifOverflow/IfOverflowWithSegment');
    await expect(component).toHaveScreenshot(IF_OVERFLOW_DEFAULT_EQUALS_DISCARD);
  });
});

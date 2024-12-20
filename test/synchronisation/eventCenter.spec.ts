import { describe, it, expect, vi } from 'vitest';
import { eventCenter, TOOLTIP_SYNC_EVENT } from '../../src/util/Events';
import { setSyncInteraction } from '../../src/state/tooltipSlice';

describe('eventCenter', () => {
  it('should send and receive events', () => {
    const spy = vi.fn();
    eventCenter.on(TOOLTIP_SYNC_EVENT, spy);
    expect(spy).toHaveBeenCalledTimes(0);
    const symbol = Symbol('my-emitter');
    eventCenter.emit(
      TOOLTIP_SYNC_EVENT,
      'my-sync-id',
      setSyncInteraction({
        active: true,
        coordinate: { x: 1, y: 2 },
        dataKey: 'key',
        index: '9',
        label: 'foo',
      }),
      symbol,
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(
      'my-sync-id',
      setSyncInteraction({
        active: true,
        coordinate: { x: 1, y: 2 },
        dataKey: 'key',
        index: '9',
        label: 'foo',
      }),
      symbol,
    );
  });
});

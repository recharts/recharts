import { describe, it, expect } from 'vitest';
import { adaptEventHandlers } from '../../src/util/types';

describe('adaptEventHandlers', () => {
  it('should not wrap event handlers that are not functions', () => {
    const props = {
      onMouseEnter: undefined,
      onClick: () => {},
      nonEventProp: 'test',
    };
    const handlers = adaptEventHandlers(props);

    expect(handlers).not.toBeNull();
    if (handlers) {
      expect(handlers.onMouseEnter).toBeUndefined();
      expect(handlers.onClick).toBeDefined();
      expect(typeof handlers.onClick).toBe('function');
    }
  });

  it('should return null if props is null or undefined', () => {
    expect(adaptEventHandlers(null)).toBeNull();
    expect(adaptEventHandlers(undefined)).toBeNull();
  });

  it('should return null if props is a function or boolean', () => {
    expect(adaptEventHandlers(() => {})).toBeNull();
    expect(adaptEventHandlers(true)).toBeNull();
    expect(adaptEventHandlers(false)).toBeNull();
  });
});

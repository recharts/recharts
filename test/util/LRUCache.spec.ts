import { LRUCache } from '../../src/util/LRUCache';

describe('LRUCache', () => {
  let cache: LRUCache<string, number>;

  beforeEach(() => {
    cache = new LRUCache<string, number>(3);
  });

  test('should store and retrieve values', () => {
    cache.set('a', 1);
    expect(cache.get('a')).toBe(1);
  });

  test('should return undefined for non-existent keys', () => {
    expect(cache.get('nonexistent')).toBeUndefined();
  });

  test('should update existing values', () => {
    cache.set('a', 1);
    cache.set('a', 2);
    expect(cache.get('a')).toBe(2);
    expect(cache.size()).toBe(1);
  });

  test('should evict least recently used items when capacity is exceeded', () => {
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);

    expect(cache.size()).toBe(3);

    cache.set('d', 4);

    expect(cache.size()).toBe(3);
    expect(cache.get('a')).toBeUndefined();
    expect(cache.get('b')).toBe(2);
    expect(cache.get('c')).toBe(3);
    expect(cache.get('d')).toBe(4);
  });

  test('should update LRU order when accessing items', () => {
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3);

    cache.get('a');

    cache.set('d', 4);

    expect(cache.get('a')).toBe(1);
    expect(cache.get('b')).toBeUndefined();
    expect(cache.get('c')).toBe(3);
    expect(cache.get('d')).toBe(4);
  });

  test('should clear all items', () => {
    cache.set('a', 1);
    cache.set('b', 2);

    expect(cache.size()).toBe(2);

    cache.clear();

    expect(cache.size()).toBe(0);
    expect(cache.get('a')).toBeUndefined();
    expect(cache.get('b')).toBeUndefined();
  });

  test('should handle single-item capacity', () => {
    const singleCache = new LRUCache<string, number>(1);

    singleCache.set('a', 1);
    expect(singleCache.get('a')).toBe(1);

    singleCache.set('b', 2);
    expect(singleCache.get('a')).toBeUndefined();
    expect(singleCache.get('b')).toBe(2);
    expect(singleCache.size()).toBe(1);
  });

  test('should evict when the oldest key is nullish', () => {
    const nullishCache = new LRUCache<string | null | undefined, number>(2);

    nullishCache.set(null, 1);
    nullishCache.set(undefined, 2);
    nullishCache.set('c', 3);

    expect(nullishCache.size()).toBe(2);
    expect(nullishCache.get(null)).toBeUndefined();
    expect(nullishCache.get(undefined)).toBe(2);
    expect(nullishCache.get('c')).toBe(3);
  });

  test('should update LRU order when accessing an entry stored as undefined', () => {
    const undefinedCache = new LRUCache<string, number | undefined>(2);

    undefinedCache.set('a', undefined);
    undefinedCache.set('b', 2);

    // Reading 'a' makes it the most recently used, so 'b' is the one to evict.
    undefinedCache.get('a');
    undefinedCache.set('c', 3);

    expect(undefinedCache.size()).toBe(2);
    expect(undefinedCache.get('b')).toBeUndefined();
    expect(undefinedCache.get('c')).toBe(3);
  });
});

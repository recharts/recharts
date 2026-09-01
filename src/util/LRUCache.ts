/**
 * Simple LRU (Least Recently Used) cache implementation
 */
export class LRUCache<K, V> {
  private cache = new Map<K, V>();

  private maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  get(key: K): V | undefined {
    // `has` rather than an `undefined` check on the value: `undefined` is a storable
    // value, and treating it as a miss would leave that entry's recency unchanged.
    if (!this.cache.has(key)) {
      return undefined;
    }
    const value = this.cache.get(key) as V;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      // Ask the iterator whether it produced a key, instead of testing the key itself:
      // `null` and `undefined` are valid Map keys, so a nullish check would skip the
      // eviction and let the cache grow past `maxSize`.
      const oldest = this.cache.keys().next();
      if (!oldest.done) {
        this.cache.delete(oldest.value);
      }
    }
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

import { describe, it, expect } from 'vitest';
import { alignPreviousItems, matchByDataKey, matchByIndex } from '../../src/animation/matchBy';

interface TestItem {
  x: number;
  y: number;
  payload?: Record<string, unknown>;
}

describe('matchByIndex', () => {
  it('should be the string "index"', () => {
    expect(matchByIndex).toBe('index');
  });
});

describe('matchByDataKey', () => {
  it('should extract a string key from payload', () => {
    const matchFn = matchByDataKey('name');
    const item: TestItem = { x: 10, y: 20, payload: { name: 'Alice' } };
    expect(matchFn(item, 0)).toBe('Alice');
  });

  it('should extract a numeric key from payload', () => {
    const matchFn = matchByDataKey('id');
    const item: TestItem = { x: 10, y: 20, payload: { id: 42 } };
    expect(matchFn(item, 0)).toBe(42);
  });

  it('should return null when payload is missing', () => {
    const matchFn = matchByDataKey('name');
    const item: TestItem = { x: 10, y: 20 };
    expect(matchFn(item, 0)).toBeNull();
  });

  it('should return null when the key is not in payload', () => {
    const matchFn = matchByDataKey('missing');
    const item: TestItem = { x: 10, y: 20, payload: { name: 'Alice' } };
    expect(matchFn(item, 0)).toBeNull();
  });

  it('should JSON-stringify object values', () => {
    const matchFn = matchByDataKey('complex');
    const item: TestItem = { x: 10, y: 20, payload: { complex: { a: 1 } } };
    expect(matchFn(item, 0)).toBe('{"a":1}');
  });
});

describe('alignPreviousItems', () => {
  const matchByName = matchByDataKey('name') as (item: TestItem, index: number) => string | number | null;

  it('should align previous items to next items by key', () => {
    const prev: TestItem[] = [
      { x: 10, y: 100, payload: { name: 'A' } },
      { x: 20, y: 200, payload: { name: 'B' } },
      { x: 30, y: 300, payload: { name: 'C' } },
    ];
    const next: TestItem[] = [
      { x: 15, y: 150, payload: { name: 'B' } },
      { x: 25, y: 250, payload: { name: 'C' } },
      { x: 35, y: 350, payload: { name: 'D' } },
    ];

    const aligned = alignPreviousItems(prev, next, matchByName);

    expect(aligned).toHaveLength(3);
    // B matches B
    expect(aligned[0]).toBe(prev[1]);
    // C matches C
    expect(aligned[1]).toBe(prev[2]);
    // D has no match
    expect(aligned[2]).toBeUndefined();
  });

  it('should handle sliding window left: [A,B,C] -> [B,C,D]', () => {
    const prev: TestItem[] = [
      { x: 10, y: 10, payload: { name: 'A' } },
      { x: 20, y: 20, payload: { name: 'B' } },
      { x: 30, y: 30, payload: { name: 'C' } },
    ];
    const next: TestItem[] = [
      { x: 10, y: 20, payload: { name: 'B' } },
      { x: 20, y: 30, payload: { name: 'C' } },
      { x: 30, y: 40, payload: { name: 'D' } },
    ];

    const aligned = alignPreviousItems(prev, next, matchByName);

    // B→B, C→C, D→undefined (new)
    expect(aligned[0]).toBe(prev[1]);
    expect(aligned[1]).toBe(prev[2]);
    expect(aligned[2]).toBeUndefined();
  });

  it('should handle sliding window right: [B,C,D] -> [A,B,C]', () => {
    const prev: TestItem[] = [
      { x: 10, y: 20, payload: { name: 'B' } },
      { x: 20, y: 30, payload: { name: 'C' } },
      { x: 30, y: 40, payload: { name: 'D' } },
    ];
    const next: TestItem[] = [
      { x: 10, y: 10, payload: { name: 'A' } },
      { x: 20, y: 20, payload: { name: 'B' } },
      { x: 30, y: 30, payload: { name: 'C' } },
    ];

    const aligned = alignPreviousItems(prev, next, matchByName);

    // A→undefined (new), B→B, C→C
    expect(aligned[0]).toBeUndefined();
    expect(aligned[1]).toBe(prev[0]);
    expect(aligned[2]).toBe(prev[1]);
  });

  it('should handle complete data replacement', () => {
    const prev: TestItem[] = [
      { x: 10, y: 10, payload: { name: 'A' } },
      { x: 20, y: 20, payload: { name: 'B' } },
    ];
    const next: TestItem[] = [
      { x: 10, y: 100, payload: { name: 'X' } },
      { x: 20, y: 200, payload: { name: 'Y' } },
    ];

    const aligned = alignPreviousItems(prev, next, matchByName);

    expect(aligned[0]).toBeUndefined();
    expect(aligned[1]).toBeUndefined();
  });

  it('should handle same data (all matched)', () => {
    const prev: TestItem[] = [
      { x: 10, y: 10, payload: { name: 'A' } },
      { x: 20, y: 20, payload: { name: 'B' } },
    ];
    const next: TestItem[] = [
      { x: 15, y: 15, payload: { name: 'A' } },
      { x: 25, y: 25, payload: { name: 'B' } },
    ];

    const aligned = alignPreviousItems(prev, next, matchByName);

    expect(aligned[0]).toBe(prev[0]);
    expect(aligned[1]).toBe(prev[1]);
  });

  it('should use first occurrence for duplicate keys in prev', () => {
    const prev: TestItem[] = [
      { x: 10, y: 10, payload: { name: 'A' } },
      { x: 20, y: 99, payload: { name: 'A' } }, // duplicate
      { x: 30, y: 30, payload: { name: 'B' } },
    ];
    const next: TestItem[] = [
      { x: 15, y: 15, payload: { name: 'A' } },
      { x: 35, y: 35, payload: { name: 'B' } },
    ];

    const aligned = alignPreviousItems(prev, next, matchByName);

    // First A (y=10) wins, not second A (y=99)
    expect(aligned[0]).toBe(prev[0]);
    expect(aligned[1]).toBe(prev[2]);
  });

  it('should handle growing arrays', () => {
    const prev: TestItem[] = [{ x: 10, y: 10, payload: { name: 'A' } }];
    const next: TestItem[] = [
      { x: 10, y: 10, payload: { name: 'A' } },
      { x: 20, y: 20, payload: { name: 'B' } },
      { x: 30, y: 30, payload: { name: 'C' } },
    ];

    const aligned = alignPreviousItems(prev, next, matchByName);

    expect(aligned).toHaveLength(3);
    expect(aligned[0]).toBe(prev[0]);
    expect(aligned[1]).toBeUndefined();
    expect(aligned[2]).toBeUndefined();
  });

  it('should handle shrinking arrays', () => {
    const prev: TestItem[] = [
      { x: 10, y: 10, payload: { name: 'A' } },
      { x: 20, y: 20, payload: { name: 'B' } },
      { x: 30, y: 30, payload: { name: 'C' } },
    ];
    const next: TestItem[] = [{ x: 10, y: 15, payload: { name: 'B' } }];

    const aligned = alignPreviousItems(prev, next, matchByName);

    expect(aligned).toHaveLength(1);
    expect(aligned[0]).toBe(prev[1]);
  });

  it('should work with a custom match function', () => {
    const matchByTimestamp = (item: TestItem) => (item.payload?.ts as number) ?? null;

    const prev: TestItem[] = [
      { x: 10, y: 10, payload: { ts: 1000 } },
      { x: 20, y: 20, payload: { ts: 2000 } },
    ];
    const next: TestItem[] = [
      { x: 15, y: 25, payload: { ts: 2000 } },
      { x: 25, y: 35, payload: { ts: 3000 } },
    ];

    const aligned = alignPreviousItems(prev, next, matchByTimestamp);

    expect(aligned[0]).toBe(prev[1]); // ts:2000 matches
    expect(aligned[1]).toBeUndefined(); // ts:3000 is new
  });
});

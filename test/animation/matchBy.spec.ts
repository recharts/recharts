import { describe, it, expect } from 'vitest';
import {
  alignItems,
  matchAppend,
  matchAnimationItems,
  matchByDataKey,
  matchByIndex,
} from '../../src/animation/matchBy';

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

describe('matchAppend', () => {
  it('should be the string "append"', () => {
    expect(matchAppend).toBe('append');
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

describe('alignItems', () => {
  const matchByName = matchByDataKey('name') as (item: TestItem, index: number) => string | number | null;

  describe('with matchByIndex (proportional stretch)', () => {
    it('should return same items when arrays have equal length', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
        { x: 30, y: 30 },
      ];
      const next: TestItem[] = [
        { x: 15, y: 15 },
        { x: 25, y: 25 },
        { x: 35, y: 35 },
      ];

      const aligned = alignItems(prev, next, matchByIndex);

      expect(aligned).toHaveLength(3);
      expect(aligned[0]).toBe(prev[0]);
      expect(aligned[1]).toBe(prev[1]);
      expect(aligned[2]).toBe(prev[2]);
    });

    it('should stretch when growing from 3 to 6 items', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
        { x: 30, y: 30 },
      ];
      const next: TestItem[] = [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
      ];

      // factor = 3/6 = 0.5
      // indices: floor(0*0.5)=0, floor(1*0.5)=0, floor(2*0.5)=1, floor(3*0.5)=1, floor(4*0.5)=2, floor(5*0.5)=2
      const aligned = alignItems(prev, next, matchByIndex);

      expect(aligned).toHaveLength(6);
      expect(aligned[0]).toBe(prev[0]);
      expect(aligned[1]).toBe(prev[0]);
      expect(aligned[2]).toBe(prev[1]);
      expect(aligned[3]).toBe(prev[1]);
      expect(aligned[4]).toBe(prev[2]);
      expect(aligned[5]).toBe(prev[2]);
    });

    it('should compress when shrinking from 6 to 3 items', () => {
      const prev: TestItem[] = [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
      ];
      const next: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
        { x: 30, y: 30 },
      ];

      // factor = 6/3 = 2
      // indices: floor(0*2)=0, floor(1*2)=2, floor(2*2)=4
      const aligned = alignItems(prev, next, matchByIndex);

      expect(aligned).toHaveLength(3);
      expect(aligned[0]).toBe(prev[0]);
      expect(aligned[1]).toBe(prev[2]);
      expect(aligned[2]).toBe(prev[4]);
    });

    it('should stretch from 5 to 15 items', () => {
      const prev: TestItem[] = Array.from({ length: 5 }, (_, i) => ({ x: i, y: i }));
      const next: TestItem[] = Array.from({ length: 15 }, (_, i) => ({ x: i, y: i }));

      // factor = 5/15 = 1/3
      const aligned = alignItems(prev, next, matchByIndex);

      expect(aligned).toHaveLength(15);
      // Each prev item covers 3 next items
      expect(aligned[0]).toBe(prev[0]);
      expect(aligned[1]).toBe(prev[0]);
      expect(aligned[2]).toBe(prev[0]);
      expect(aligned[3]).toBe(prev[1]);
      expect(aligned[6]).toBe(prev[2]);
      expect(aligned[9]).toBe(prev[3]);
      expect(aligned[12]).toBe(prev[4]);
      expect(aligned[14]).toBe(prev[4]);
    });
  });

  describe('with matchAppend (sequential)', () => {
    it('should return same items when arrays have equal length', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
        { x: 30, y: 30 },
      ];
      const next: TestItem[] = [
        { x: 15, y: 15 },
        { x: 25, y: 25 },
        { x: 35, y: 35 },
      ];

      const aligned = alignItems(prev, next, matchAppend);

      expect(aligned).toHaveLength(3);
      expect(aligned[0]).toBe(prev[0]);
      expect(aligned[1]).toBe(prev[1]);
      expect(aligned[2]).toBe(prev[2]);
    });

    it('should leave extras undefined when growing', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
      ];
      const next: TestItem[] = [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
      ];

      const aligned = alignItems(prev, next, matchAppend);

      expect(aligned).toHaveLength(5);
      expect(aligned[0]).toBe(prev[0]);
      expect(aligned[1]).toBe(prev[1]);
      expect(aligned[2]).toBeUndefined();
      expect(aligned[3]).toBeUndefined();
      expect(aligned[4]).toBeUndefined();
    });

    it('should truncate when shrinking', () => {
      const prev: TestItem[] = [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
      ];
      const next: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
      ];

      const aligned = alignItems(prev, next, matchAppend);

      expect(aligned).toHaveLength(2);
      expect(aligned[0]).toBe(prev[0]);
      expect(aligned[1]).toBe(prev[1]);
    });

    it('should match 1:1 from 5 to 15 items — first 5 match, rest undefined', () => {
      const prev: TestItem[] = Array.from({ length: 5 }, (_, i) => ({ x: i, y: i }));
      const next: TestItem[] = Array.from({ length: 15 }, (_, i) => ({ x: i, y: i }));

      const aligned = alignItems(prev, next, matchAppend);

      expect(aligned).toHaveLength(15);
      for (let i = 0; i < 5; i++) {
        expect(aligned[i]).toBe(prev[i]);
      }
      for (let i = 5; i < 15; i++) {
        expect(aligned[i]).toBeUndefined();
      }
    });
  });

  describe('with custom key function (matchByDataKey)', () => {
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

      const aligned = alignItems(prev, next, matchByName);

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

      const aligned = alignItems(prev, next, matchByName);

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

      const aligned = alignItems(prev, next, matchByName);

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

      const aligned = alignItems(prev, next, matchByName);

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

      const aligned = alignItems(prev, next, matchByName);

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

      const aligned = alignItems(prev, next, matchByName);

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

      const aligned = alignItems(prev, next, matchByName);

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

      const aligned = alignItems(prev, next, matchByName);

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

      const aligned = alignItems(prev, next, matchByTimestamp);

      expect(aligned[0]).toBe(prev[1]); // ts:2000 matches
      expect(aligned[1]).toBeUndefined(); // ts:3000 is new
    });
  });

  describe('strategy comparison: 5 to 15 items', () => {
    const prev: TestItem[] = Array.from({ length: 5 }, (_, i) => ({ x: i * 10, y: i * 10 }));
    const next: TestItem[] = Array.from({ length: 15 }, (_, i) => ({ x: i * 10, y: i * 10 }));

    it('matchByIndex should stretch old items across all new positions', () => {
      const aligned = alignItems(prev, next, matchByIndex);
      expect(aligned).toHaveLength(15);
      // Every position should have a defined value (stretched from prev)
      for (let i = 0; i < 15; i++) {
        expect(aligned[i]).toBeDefined();
      }
      // First maps to first, last maps to last
      expect(aligned[0]).toBe(prev[0]);
      expect(aligned[14]).toBe(prev[4]);
    });

    it('matchAppend should leave extras undefined', () => {
      const aligned = alignItems(prev, next, matchAppend);
      expect(aligned).toHaveLength(15);
      // First 5 have defined values
      for (let i = 0; i < 5; i++) {
        expect(aligned[i]).toBe(prev[i]);
      }
      // Remaining 10 are undefined
      for (let i = 5; i < 15; i++) {
        expect(aligned[i]).toBeUndefined();
      }
    });
  });
});

describe('matchAnimationItems', () => {
  const matchByName = matchByDataKey('name') as (item: TestItem, index: number) => string | number | null;

  describe('with matchByIndex', () => {
    it('should return matched items only (index strategy never tracks removals)', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
        { x: 30, y: 30 },
      ];
      const next: TestItem[] = [
        { x: 15, y: 15 },
        { x: 25, y: 25 },
      ];

      const result = matchAnimationItems(prev, next, matchByIndex);

      expect(result).toEqual([
        { status: 'matched', prev: prev[0], next: next[0] },
        { status: 'matched', prev: prev[1], next: next[1] },
      ]);
    });
  });

  describe('with matchAppend', () => {
    it('should return matched items only (append strategy never tracks removals)', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
        { x: 30, y: 30 },
      ];
      const next: TestItem[] = [
        { x: 15, y: 15 },
        { x: 25, y: 25 },
      ];

      const result = matchAnimationItems(prev, next, matchAppend);

      expect(result).toEqual([
        { status: 'matched', prev: prev[0], next: next[0] },
        { status: 'matched', prev: prev[1], next: next[1] },
      ]);
    });
  });

  describe('with custom key function (matchByDataKey)', () => {
    it('should return matched, added, and removed items for sliding window [A,B,C] -> [B,C,D]', () => {
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

      const result = matchAnimationItems(prev, next, matchByName);

      expect(result).toEqual([
        { status: 'matched', prev: prev[1], next: next[0] },
        { status: 'matched', prev: prev[2], next: next[1] },
        { status: 'added', next: next[2] },
        { status: 'removed', prev: prev[0] },
      ]);
    });

    it('should return removed items after next items in sliding window [B,C,D] -> [A,B,C]', () => {
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

      const result = matchAnimationItems(prev, next, matchByName);

      expect(result).toEqual([
        { status: 'added', next: next[0] },
        { status: 'matched', prev: prev[0], next: next[1] },
        { status: 'matched', prev: prev[1], next: next[2] },
        { status: 'removed', prev: prev[2] },
      ]);
    });

    it('should detect multiple removed items', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10, payload: { name: 'A' } },
        { x: 20, y: 20, payload: { name: 'B' } },
        { x: 30, y: 30, payload: { name: 'C' } },
        { x: 40, y: 40, payload: { name: 'D' } },
        { x: 50, y: 50, payload: { name: 'E' } },
      ];
      const next: TestItem[] = [
        { x: 10, y: 30, payload: { name: 'C' } },
        { x: 20, y: 40, payload: { name: 'D' } },
        { x: 30, y: 50, payload: { name: 'E' } },
        { x: 40, y: 60, payload: { name: 'F' } },
        { x: 50, y: 70, payload: { name: 'G' } },
      ];

      const result = matchAnimationItems(prev, next, matchByName);

      expect(result).toEqual([
        { status: 'matched', prev: prev[2], next: next[0] },
        { status: 'matched', prev: prev[3], next: next[1] },
        { status: 'matched', prev: prev[4], next: next[2] },
        { status: 'added', next: next[3] },
        { status: 'added', next: next[4] },
        { status: 'removed', prev: prev[0] },
        { status: 'removed', prev: prev[1] },
      ]);
    });

    it('should return empty removed when all previous items match', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10, payload: { name: 'A' } },
        { x: 20, y: 20, payload: { name: 'B' } },
      ];
      const next: TestItem[] = [
        { x: 15, y: 15, payload: { name: 'A' } },
        { x: 25, y: 25, payload: { name: 'B' } },
      ];

      const result = matchAnimationItems(prev, next, matchByName);

      expect(result).toEqual([
        { status: 'matched', prev: prev[0], next: next[0] },
        { status: 'matched', prev: prev[1], next: next[1] },
      ]);
    });

    it('should return all previous items as removed when none match', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10, payload: { name: 'A' } },
        { x: 20, y: 20, payload: { name: 'B' } },
      ];
      const next: TestItem[] = [
        { x: 10, y: 100, payload: { name: 'X' } },
        { x: 20, y: 200, payload: { name: 'Y' } },
      ];

      const result = matchAnimationItems(prev, next, matchByName);

      expect(result).toEqual([
        { status: 'added', next: next[0] },
        { status: 'added', next: next[1] },
        { status: 'removed', prev: prev[0] },
        { status: 'removed', prev: prev[1] },
      ]);
    });
  });

  it('should return added items on first render', () => {
    const next: TestItem[] = [
      { x: 10, y: 100, payload: { name: 'X' } },
      { x: 20, y: 200, payload: { name: 'Y' } },
    ];

    const result = matchAnimationItems(null, next, matchByName);

    expect(result).toEqual([
      { status: 'added', next: next[0] },
      { status: 'added', next: next[1] },
    ]);
  });

  it('should return null when next items are undefined', () => {
    const prev: TestItem[] = [{ x: 10, y: 10, payload: { name: 'A' } }];

    const result = matchAnimationItems(prev, undefined, matchByName);

    expect(result).toBeNull();
  });
});

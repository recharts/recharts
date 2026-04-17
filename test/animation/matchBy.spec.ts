import { describe, it, expect } from 'vitest';
import {
  alignItems,
  alignItemsWithRemovals,
  matchAppend,
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

describe('alignItemsWithRemovals', () => {
  const matchByName = matchByDataKey('name') as (item: TestItem, index: number) => string | number | null;

  describe('with matchByIndex', () => {
    it('should return empty removed array (index strategy never tracks removals)', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
        { x: 30, y: 30 },
      ];
      const next: TestItem[] = [
        { x: 15, y: 15 },
        { x: 25, y: 25 },
      ];

      const result = alignItemsWithRemovals(prev, next, matchByIndex);

      expect(result.aligned).toHaveLength(2);
      expect(result.removed).toHaveLength(0);
    });
  });

  describe('with matchAppend', () => {
    it('should return empty removed array (append strategy never tracks removals)', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
        { x: 30, y: 30 },
      ];
      const next: TestItem[] = [
        { x: 15, y: 15 },
        { x: 25, y: 25 },
      ];

      const result = alignItemsWithRemovals(prev, next, matchAppend);

      expect(result.aligned).toHaveLength(2);
      expect(result.removed).toHaveLength(0);
    });
  });

  describe('with custom key function (matchByDataKey)', () => {
    it('should detect removed items in sliding window [A,B,C] -> [B,C,D]', () => {
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

      const result = alignItemsWithRemovals(prev, next, matchByName);

      // Aligned should match B->B, C->C, D->undefined
      expect(result.aligned).toHaveLength(3);
      expect(result.aligned[0]).toBe(prev[1]); // B
      expect(result.aligned[1]).toBe(prev[2]); // C
      expect(result.aligned[2]).toBeUndefined(); // D is new

      // A was removed
      expect(result.removed).toHaveLength(1);
      expect(result.removed[0]).toBe(prev[0]);
    });

    it('should detect removed items in sliding window [B,C,D] -> [A,B,C]', () => {
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

      const result = alignItemsWithRemovals(prev, next, matchByName);

      // Aligned: A->undefined, B->B, C->C
      expect(result.aligned[0]).toBeUndefined();
      expect(result.aligned[1]).toBe(prev[0]); // B
      expect(result.aligned[2]).toBe(prev[1]); // C

      // D was removed
      expect(result.removed).toHaveLength(1);
      expect(result.removed[0]).toBe(prev[2]);
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

      const result = alignItemsWithRemovals(prev, next, matchByName);

      // A and B were removed
      expect(result.removed).toHaveLength(2);
      expect(result.removed[0]).toBe(prev[0]); // A
      expect(result.removed[1]).toBe(prev[1]); // B

      // C, D, E matched; F, G are new
      expect(result.aligned[0]).toBe(prev[2]); // C
      expect(result.aligned[1]).toBe(prev[3]); // D
      expect(result.aligned[2]).toBe(prev[4]); // E
      expect(result.aligned[3]).toBeUndefined(); // F new
      expect(result.aligned[4]).toBeUndefined(); // G new
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

      const result = alignItemsWithRemovals(prev, next, matchByName);

      expect(result.removed).toHaveLength(0);
      expect(result.aligned[0]).toBe(prev[0]);
      expect(result.aligned[1]).toBe(prev[1]);
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

      const result = alignItemsWithRemovals(prev, next, matchByName);

      expect(result.removed).toHaveLength(2);
      expect(result.removed[0]).toBe(prev[0]);
      expect(result.removed[1]).toBe(prev[1]);
      expect(result.aligned[0]).toBeUndefined();
      expect(result.aligned[1]).toBeUndefined();
    });
  });
});

describe('tagged animation items pattern (as used by AnimatedItems)', () => {
  const matchByName = matchByDataKey('name') as (item: TestItem, index: number) => string | number | null;

  function buildTaggedItems(prev: TestItem[], next: TestItem[]) {
    const { aligned, removed } = alignItemsWithRemovals(prev, next, matchByName);
    const tagged: Array<
      | { status: 'matched'; prev: TestItem; next: TestItem }
      | { status: 'added'; next: TestItem }
      | { status: 'removed'; prev: TestItem }
    > = [];
    for (let i = 0; i < next.length; i++) {
      const p = aligned[i];
      const n = next[i];
      if (p != null) {
        tagged.push({ status: 'matched', prev: p, next: n });
      } else {
        tagged.push({ status: 'added', next: n });
      }
    }
    for (const p of removed) {
      tagged.push({ status: 'removed', prev: p });
    }
    return tagged;
  }

  it('should produce correct tagged items for sliding window [A,B,C] -> [B,C,D]', () => {
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

    const tagged = buildTaggedItems(prev, next);

    expect(tagged).toHaveLength(4);

    // B matched
    expect(tagged[0]).toEqual({ status: 'matched', prev: prev[1], next: next[0] });
    // C matched
    expect(tagged[1]).toEqual({ status: 'matched', prev: prev[2], next: next[1] });
    // D added
    expect(tagged[2]).toEqual({ status: 'added', next: next[2] });
    // A removed
    expect(tagged[3]).toEqual({ status: 'removed', prev: prev[0] });
  });

  it('should produce correct tagged items for multi-step slide [A,B,C,D,E] -> [C,D,E,F,G]', () => {
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

    const tagged = buildTaggedItems(prev, next);

    expect(tagged).toHaveLength(7);

    // C, D, E matched
    expect(tagged[0]).toEqual({ status: 'matched', prev: prev[2], next: next[0] });
    expect(tagged[1]).toEqual({ status: 'matched', prev: prev[3], next: next[1] });
    expect(tagged[2]).toEqual({ status: 'matched', prev: prev[4], next: next[2] });

    // F, G added
    expect(tagged[3]).toEqual({ status: 'added', next: next[3] });
    expect(tagged[4]).toEqual({ status: 'added', next: next[4] });

    // A, B removed
    expect(tagged[5]).toEqual({ status: 'removed', prev: prev[0] });
    expect(tagged[6]).toEqual({ status: 'removed', prev: prev[1] });
  });

  it('should not produce removed items when there are no removals', () => {
    const prev: TestItem[] = [
      { x: 10, y: 10, payload: { name: 'A' } },
      { x: 20, y: 20, payload: { name: 'B' } },
    ];
    const next: TestItem[] = [
      { x: 15, y: 15, payload: { name: 'A' } },
      { x: 25, y: 25, payload: { name: 'B' } },
      { x: 35, y: 35, payload: { name: 'C' } },
    ];

    const tagged = buildTaggedItems(prev, next);

    expect(tagged).toHaveLength(3);
    expect(tagged[0]).toEqual({ status: 'matched', prev: prev[0], next: next[0] });
    expect(tagged[1]).toEqual({ status: 'matched', prev: prev[1], next: next[1] });
    expect(tagged[2]).toEqual({ status: 'added', next: next[2] });
  });
});

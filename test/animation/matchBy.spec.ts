import { describe, expect, it } from 'vitest';
import type { AnimationItem } from '../../src';
import { matchAppend, matchAnimationItems, matchByDataKey, matchByIndex } from '../../src/animation/matchBy';

interface TestItem {
  x: number;
  y: number;
  payload?: Record<string, unknown>;
}

const matchByName = matchByDataKey('name');

function expectAlignedPrevItems(
  result: ReadonlyArray<AnimationItem<TestItem>> | null,
  expected: ReadonlyArray<TestItem | undefined>,
): void {
  expect(result).not.toBeNull();
  const alignedPrevItems = result!
    .filter(item => item.status !== 'removed')
    .map(item => (item.status === 'matched' ? item.prev : undefined));
  expect(alignedPrevItems).toEqual(expected);
}

function expectRemovedPrevItems(
  result: ReadonlyArray<AnimationItem<TestItem>> | null,
  expected: ReadonlyArray<TestItem>,
): void {
  expect(result).not.toBeNull();
  const removedPrevItems = result!.filter(item => item.status === 'removed').map(item => item.prev);
  expect(removedPrevItems).toEqual(expected);
}

function expectStatuses(
  result: ReadonlyArray<AnimationItem<TestItem>> | null,
  expected: ReadonlyArray<AnimationItem<TestItem>['status']>,
): void {
  expect(result).not.toBeNull();
  expect(result!.map(item => item.status)).toEqual(expected);
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

describe('matchAnimationItems', () => {
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

      const result = matchAnimationItems(prev, next, matchByIndex);

      expectStatuses(result, ['matched', 'matched', 'matched']);
      expectAlignedPrevItems(result, [prev[0], prev[1], prev[2]]);
      expectRemovedPrevItems(result, []);
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

      const result = matchAnimationItems(prev, next, matchByIndex);

      expectStatuses(result, ['matched', 'matched', 'matched', 'matched', 'matched', 'matched']);
      expectAlignedPrevItems(result, [prev[0], prev[0], prev[1], prev[1], prev[2], prev[2]]);
      expectRemovedPrevItems(result, []);
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

      const result = matchAnimationItems(prev, next, matchByIndex);

      expectAlignedPrevItems(result, [prev[0], prev[2], prev[4]]);
      expectRemovedPrevItems(result, []);
    });

    it('should stretch from 5 to 15 items', () => {
      const prev: TestItem[] = Array.from({ length: 5 }, (_, i) => ({ x: i, y: i }));
      const next: TestItem[] = Array.from({ length: 15 }, (_, i) => ({ x: i, y: i }));

      const result = matchAnimationItems(prev, next, matchByIndex);

      expectStatuses(
        result,
        Array.from({ length: 15 }, () => 'matched'),
      );
      expectAlignedPrevItems(result, [
        prev[0],
        prev[0],
        prev[0],
        prev[1],
        prev[1],
        prev[1],
        prev[2],
        prev[2],
        prev[2],
        prev[3],
        prev[3],
        prev[3],
        prev[4],
        prev[4],
        prev[4],
      ]);
      expectRemovedPrevItems(result, []);
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

      const result = matchAnimationItems(prev, next, matchAppend);

      expectStatuses(result, ['matched', 'matched', 'matched']);
      expectAlignedPrevItems(result, [prev[0], prev[1], prev[2]]);
      expectRemovedPrevItems(result, []);
    });

    it('should leave extras added when growing', () => {
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

      const result = matchAnimationItems(prev, next, matchAppend);

      expectStatuses(result, ['matched', 'matched', 'added', 'added', 'added']);
      expectAlignedPrevItems(result, [prev[0], prev[1], undefined, undefined, undefined]);
      expectRemovedPrevItems(result, []);
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

      const result = matchAnimationItems(prev, next, matchAppend);

      expectAlignedPrevItems(result, [prev[0], prev[1]]);
      expectRemovedPrevItems(result, []);
    });

    it('should match 1:1 from 5 to 15 items', () => {
      const prev: TestItem[] = Array.from({ length: 5 }, (_, i) => ({ x: i, y: i }));
      const next: TestItem[] = Array.from({ length: 15 }, (_, i) => ({ x: i, y: i }));

      const result = matchAnimationItems(prev, next, matchAppend);

      expectAlignedPrevItems(result, [
        prev[0],
        prev[1],
        prev[2],
        prev[3],
        prev[4],
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ]);
      expectRemovedPrevItems(result, []);
    });
  });

  describe('with custom key function (matchByDataKey)', () => {
    it('should return removed items first, then matched and added items for [A,B,C] -> [B,C,D]', () => {
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
        { status: 'removed', prev: prev[0] },
        { status: 'matched', prev: prev[1], next: next[0] },
        { status: 'matched', prev: prev[2], next: next[1] },
        { status: 'added', next: next[2] },
      ]);
    });

    it('should return removed items first, then preserve next-item order for [B,C,D] -> [A,B,C]', () => {
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
        { status: 'removed', prev: prev[2] },
        { status: 'added', next: next[0] },
        { status: 'matched', prev: prev[0], next: next[1] },
        { status: 'matched', prev: prev[1], next: next[2] },
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
        { status: 'removed', prev: prev[0] },
        { status: 'removed', prev: prev[1] },
        { status: 'matched', prev: prev[2], next: next[0] },
        { status: 'matched', prev: prev[3], next: next[1] },
        { status: 'matched', prev: prev[4], next: next[2] },
        { status: 'added', next: next[3] },
        { status: 'added', next: next[4] },
      ]);
    });

    it('should return only matched items when all previous items match', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10, payload: { name: 'A' } },
        { x: 20, y: 20, payload: { name: 'B' } },
      ];
      const next: TestItem[] = [
        { x: 15, y: 15, payload: { name: 'A' } },
        { x: 25, y: 25, payload: { name: 'B' } },
      ];

      const result = matchAnimationItems(prev, next, matchByName);

      expectStatuses(result, ['matched', 'matched']);
      expectAlignedPrevItems(result, [prev[0], prev[1]]);
      expectRemovedPrevItems(result, []);
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

      expectStatuses(result, ['removed', 'removed', 'added', 'added']);
      expectAlignedPrevItems(result, [undefined, undefined]);
      expectRemovedPrevItems(result, [prev[0], prev[1]]);
    });

    it('should use first occurrence for duplicate keys in prev', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10, payload: { name: 'A' } },
        { x: 20, y: 99, payload: { name: 'A' } },
        { x: 30, y: 30, payload: { name: 'B' } },
      ];
      const next: TestItem[] = [
        { x: 15, y: 15, payload: { name: 'A' } },
        { x: 35, y: 35, payload: { name: 'B' } },
      ];

      const result = matchAnimationItems(prev, next, matchByName);

      expectAlignedPrevItems(result, [prev[0], prev[2]]);
      expectRemovedPrevItems(result, []);
    });

    it('should handle growing arrays', () => {
      const prev: TestItem[] = [{ x: 10, y: 10, payload: { name: 'A' } }];
      const next: TestItem[] = [
        { x: 10, y: 10, payload: { name: 'A' } },
        { x: 20, y: 20, payload: { name: 'B' } },
        { x: 30, y: 30, payload: { name: 'C' } },
      ];

      const result = matchAnimationItems(prev, next, matchByName);

      expectAlignedPrevItems(result, [prev[0], undefined, undefined]);
      expectRemovedPrevItems(result, []);
    });

    it('should handle shrinking arrays', () => {
      const prev: TestItem[] = [
        { x: 10, y: 10, payload: { name: 'A' } },
        { x: 20, y: 20, payload: { name: 'B' } },
        { x: 30, y: 30, payload: { name: 'C' } },
      ];
      const next: TestItem[] = [{ x: 10, y: 15, payload: { name: 'B' } }];

      const result = matchAnimationItems(prev, next, matchByName);

      expectStatuses(result, ['removed', 'removed', 'matched']);
      expectAlignedPrevItems(result, [prev[1]]);
      expectRemovedPrevItems(result, [prev[0], prev[2]]);
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

      const result = matchAnimationItems(prev, next, matchByTimestamp);

      expectStatuses(result, ['removed', 'matched', 'added']);
      expectAlignedPrevItems(result, [prev[1], undefined]);
      expectRemovedPrevItems(result, [prev[0]]);
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

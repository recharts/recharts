import { describe, it, expect } from 'vitest';
import { matchPointsByStrategy, getNewPointEntryDirection, AnimatablePoint } from '../../src/animation/pointMatching';

interface TestPoint extends AnimatablePoint {
  x: number | null;
  y: number | null;
  payload?: { id?: string; name?: string; timestamp?: number; x?: number };
}

describe('matchPointsByStrategy', () => {
  describe('with strategy="index"', () => {
    it('should match points by array index when lengths are equal', () => {
      const previous: TestPoint[] = [
        { x: 0, y: 10, payload: { id: 'a' } },
        { x: 1, y: 20, payload: { id: 'b' } },
        { x: 2, y: 30, payload: { id: 'c' } },
      ];
      const current: TestPoint[] = [
        { x: 0, y: 15, payload: { id: 'a' } },
        { x: 1, y: 25, payload: { id: 'b' } },
        { x: 2, y: 35, payload: { id: 'c' } },
      ];

      const result = matchPointsByStrategy(current, previous, 'index');

      expect(result).toHaveLength(3);
      expect(result[0].current).toBe(current[0]);
      expect(result[0].previous).toBe(previous[0]);
      expect(result[1].current).toBe(current[1]);
      expect(result[1].previous).toBe(previous[1]);
      expect(result[2].current).toBe(current[2]);
      expect(result[2].previous).toBe(previous[2]);
    });

    it('should use ratio-based stretching when lengths differ (legacy behavior)', () => {
      // Previous: 2 points, Current: 4 points
      // prevPointsDiffFactor = 2/4 = 0.5
      // index 0: floor(0 * 0.5) = 0 → prev[0]
      // index 1: floor(1 * 0.5) = 0 → prev[0]
      // index 2: floor(2 * 0.5) = 1 → prev[1]
      // index 3: floor(3 * 0.5) = 1 → prev[1]
      const previous: TestPoint[] = [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
      ];
      const current: TestPoint[] = [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
        { x: 2, y: 30 },
        { x: 3, y: 40 },
      ];

      const result = matchPointsByStrategy(current, previous, 'index');

      expect(result).toHaveLength(4);
      expect(result[0].previous).toBe(previous[0]);
      expect(result[1].previous).toBe(previous[0]);
      expect(result[2].previous).toBe(previous[1]);
      expect(result[3].previous).toBe(previous[1]);
    });

    it('should handle more previous points than current (shrinking)', () => {
      // Previous: 4 points, Current: 2 points
      // prevPointsDiffFactor = 4/2 = 2
      // index 0: floor(0 * 2) = 0 → prev[0]
      // index 1: floor(1 * 2) = 2 → prev[2]
      const previous: TestPoint[] = [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
        { x: 2, y: 30 },
        { x: 3, y: 40 },
      ];
      const current: TestPoint[] = [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
      ];

      const result = matchPointsByStrategy(current, previous, 'index');

      expect(result).toHaveLength(2);
      expect(result[0].previous).toBe(previous[0]);
      expect(result[1].previous).toBe(previous[2]);
    });
  });

  describe('with strategy="x" (matches by payload.x)', () => {
    it('should match points by payload.x value', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } },
        { x: 50, y: 20, payload: { x: 1 } },
        { x: 90, y: 30, payload: { x: 2 } },
      ];
      const current: TestPoint[] = [
        { x: 10, y: 25, payload: { x: 1 } },
        { x: 50, y: 35, payload: { x: 2 } },
        { x: 90, y: 45, payload: { x: 3 } },
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(3);
      // current[0] (payload.x=1) should match previous[1] (payload.x=1)
      expect(result[0].current).toBe(current[0]);
      expect(result[0].previous).toBe(previous[1]);
      // current[1] (payload.x=2) should match previous[2] (payload.x=2)
      expect(result[1].current).toBe(current[1]);
      expect(result[1].previous).toBe(previous[2]);
      // current[2] (payload.x=3) has no match
      expect(result[2].current).toBe(current[2]);
      expect(result[2].previous).toBeNull();
    });

    it('should handle sliding window prepend [B,C,D] -> [A,B,C,D]', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 20, payload: { x: 1 } },
        { x: 50, y: 30, payload: { x: 2 } },
        { x: 90, y: 40, payload: { x: 3 } },
      ];
      const current: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // new
        { x: 40, y: 20, payload: { x: 1 } },
        { x: 70, y: 30, payload: { x: 2 } },
        { x: 100, y: 40, payload: { x: 3 } },
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      // A (payload.x=0) is new, no previous match
      expect(result[0].previous).toBeNull();
      // B, C, D should match their previous positions by payload.x
      expect(result[1].previous).toBe(previous[0]);
      expect(result[2].previous).toBe(previous[1]);
      expect(result[3].previous).toBe(previous[2]);
    });

    it('should handle sliding window append [A,B,C] -> [A,B,C,D]', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } },
        { x: 50, y: 20, payload: { x: 1 } },
        { x: 90, y: 30, payload: { x: 2 } },
      ];
      const current: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } },
        { x: 40, y: 20, payload: { x: 1 } },
        { x: 70, y: 30, payload: { x: 2 } },
        { x: 100, y: 40, payload: { x: 3 } }, // new
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      // A, B, C should match their previous positions
      expect(result[0].previous).toBe(previous[0]);
      expect(result[1].previous).toBe(previous[1]);
      expect(result[2].previous).toBe(previous[2]);
      // D (payload.x=3) is new, no previous match
      expect(result[3].previous).toBeNull();
    });

    it('should handle sliding window shift left [A,B,C] -> [B,C,D]', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A
        { x: 50, y: 20, payload: { x: 1 } }, // B
        { x: 90, y: 30, payload: { x: 2 } }, // C
      ];
      const current: TestPoint[] = [
        { x: 10, y: 20, payload: { x: 1 } }, // B
        { x: 50, y: 30, payload: { x: 2 } }, // C
        { x: 90, y: 40, payload: { x: 3 } }, // D (new)
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      // B (payload.x=1) should match previous B (payload.x=1)
      expect(result[0].previous).toBe(previous[1]);
      // C (payload.x=2) should match previous C (payload.x=2)
      expect(result[1].previous).toBe(previous[2]);
      // D (payload.x=3) is new, no previous match
      expect(result[2].previous).toBeNull();
    });

    it('should handle sliding window shift right [B,C,D] -> [A,B,C]', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 20, payload: { x: 1 } }, // B
        { x: 50, y: 30, payload: { x: 2 } }, // C
        { x: 90, y: 40, payload: { x: 3 } }, // D
      ];
      const current: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A (new)
        { x: 50, y: 20, payload: { x: 1 } }, // B
        { x: 90, y: 30, payload: { x: 2 } }, // C
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      // A (payload.x=0) is new, no previous match
      expect(result[0].previous).toBeNull();
      // B (payload.x=1) should match previous B (payload.x=1)
      expect(result[1].previous).toBe(previous[0]);
      // C (payload.x=2) should match previous C (payload.x=2)
      expect(result[2].previous).toBe(previous[1]);
    });

    it('should handle missing payload.x', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } },
        { x: 50, y: 20 }, // no payload
        { x: 90, y: 30, payload: { x: 2 } },
      ];
      const current: TestPoint[] = [
        { x: 10, y: 15, payload: { x: 0 } },
        { x: 50, y: 25 }, // no payload
        { x: 90, y: 35, payload: { x: 2 } },
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result[0].previous).toBe(previous[0]);
      // no payload means no match
      expect(result[1].previous).toBeNull();
      expect(result[2].previous).toBe(previous[2]);
    });
  });

  describe('with strategy as DataKey (string)', () => {
    it('should match points by payload data key', () => {
      const previous: TestPoint[] = [
        { x: 0, y: 10, payload: { id: 'a' } },
        { x: 1, y: 20, payload: { id: 'b' } },
        { x: 2, y: 30, payload: { id: 'c' } },
      ];
      const current: TestPoint[] = [
        { x: 10, y: 100, payload: { id: 'b' } },
        { x: 20, y: 200, payload: { id: 'c' } },
        { x: 30, y: 300, payload: { id: 'd' } },
      ];

      const result = matchPointsByStrategy(current, previous, 'id');

      // current[0] (id=b) should match previous[1] (id=b)
      expect(result[0].previous).toBe(previous[1]);
      // current[1] (id=c) should match previous[2] (id=c)
      expect(result[1].previous).toBe(previous[2]);
      // current[2] (id=d) has no match
      expect(result[2].previous).toBeNull();
    });

    it('should handle missing payload', () => {
      const previous: TestPoint[] = [
        { x: 0, y: 10, payload: { id: 'a' } },
        { x: 1, y: 20 },
      ];
      const current: TestPoint[] = [
        { x: 0, y: 15 },
        { x: 1, y: 25, payload: { id: 'a' } },
      ];

      const result = matchPointsByStrategy(current, previous, 'id');

      // current[0] has no payload, no match
      expect(result[0].previous).toBeNull();
      // current[1] (id=a) matches previous[0] (id=a)
      expect(result[1].previous).toBe(previous[0]);
    });
  });

  describe('with strategy as custom function', () => {
    it('should use custom function for matching', () => {
      const previous: TestPoint[] = [
        { x: 0, y: 10, payload: { timestamp: 1000 } },
        { x: 1, y: 20, payload: { timestamp: 2000 } },
        { x: 2, y: 30, payload: { timestamp: 3000 } },
      ];
      const current: TestPoint[] = [
        { x: 10, y: 100, payload: { timestamp: 2000 } },
        { x: 20, y: 200, payload: { timestamp: 3000 } },
        { x: 30, y: 300, payload: { timestamp: 4000 } },
      ];

      const customMatcher = (point: TestPoint) => point.payload?.timestamp ?? null;
      const result = matchPointsByStrategy(current, previous, customMatcher);

      expect(result[0].previous).toBe(previous[1]);
      expect(result[1].previous).toBe(previous[2]);
      expect(result[2].previous).toBeNull();
    });

    it('should pass index to custom function', () => {
      const previous: TestPoint[] = [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
      ];
      const current: TestPoint[] = [
        { x: 0, y: 15 },
        { x: 1, y: 25 },
      ];

      const indices: number[] = [];
      const customMatcher = (point: TestPoint, index: number) => {
        indices.push(index);
        return index;
      };

      matchPointsByStrategy(current, previous, customMatcher);

      expect(indices).toEqual([0, 1, 0, 1]); // previous then current
    });
  });

  describe('with null previousPoints', () => {
    it('should return all current points with null previous', () => {
      const current: TestPoint[] = [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
      ];

      const result = matchPointsByStrategy(current, null, 'x');

      expect(result).toHaveLength(2);
      expect(result[0].previous).toBeNull();
      expect(result[1].previous).toBeNull();
    });
  });

  describe('with empty previousPoints', () => {
    it('should return all current points with null previous', () => {
      const current: TestPoint[] = [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
      ];

      const result = matchPointsByStrategy(current, [], 'x');

      expect(result).toHaveLength(2);
      expect(result[0].previous).toBeNull();
      expect(result[1].previous).toBeNull();
    });
  });

  describe('with duplicate keys', () => {
    it('should use first occurrence for duplicates', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 1 } },
        { x: 50, y: 20, payload: { x: 1 } }, // duplicate payload.x
        { x: 90, y: 30, payload: { x: 2 } },
      ];
      const current: TestPoint[] = [
        { x: 15, y: 15, payload: { x: 1 } },
        { x: 95, y: 35, payload: { x: 2 } },
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      // Should match the first occurrence (y=10)
      expect(result[0].previous).toBe(previous[0]);
      expect(result[1].previous).toBe(previous[2]);
    });
  });
});

describe('getNewPointEntryDirection', () => {
  describe('with strategy="index" (uses pixel x)', () => {
    it('should return "left" when point x is less than min previous x', () => {
      const previous: TestPoint[] = [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 30 },
      ];
      const newPoint: TestPoint = { x: 0, y: 5 };

      expect(getNewPointEntryDirection(newPoint, previous, 'index')).toBe('left');
    });

    it('should return "right" when point x is greater than max previous x', () => {
      const previous: TestPoint[] = [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 30 },
      ];
      const newPoint: TestPoint = { x: 4, y: 40 };

      expect(getNewPointEntryDirection(newPoint, previous, 'index')).toBe('right');
    });

    it('should return "right" when point x is within previous range', () => {
      const previous: TestPoint[] = [
        { x: 1, y: 10 },
        { x: 3, y: 30 },
      ];
      const newPoint: TestPoint = { x: 2, y: 20 };

      expect(getNewPointEntryDirection(newPoint, previous, 'index')).toBe('right');
    });
  });

  describe('with strategy="x" (uses payload.x)', () => {
    it('should return "left" when payload.x is less than min previous payload.x', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 1 } },
        { x: 50, y: 20, payload: { x: 2 } },
        { x: 90, y: 30, payload: { x: 3 } },
      ];
      const newPoint: TestPoint = { x: 10, y: 5, payload: { x: 0 } };

      expect(getNewPointEntryDirection(newPoint, previous, 'x')).toBe('left');
    });

    it('should return "right" when payload.x is greater than max previous payload.x', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 1 } },
        { x: 50, y: 20, payload: { x: 2 } },
        { x: 90, y: 30, payload: { x: 3 } },
      ];
      const newPoint: TestPoint = { x: 90, y: 40, payload: { x: 4 } };

      expect(getNewPointEntryDirection(newPoint, previous, 'x')).toBe('right');
    });
  });

  it('should return "right" when previousPoints is null', () => {
    const newPoint: TestPoint = { x: 0, y: 10 };

    expect(getNewPointEntryDirection(newPoint, null)).toBe('right');
  });

  it('should return "right" when previousPoints is empty', () => {
    const newPoint: TestPoint = { x: 0, y: 10 };

    expect(getNewPointEntryDirection(newPoint, [])).toBe('right');
  });

  it('should return "right" when comparison value is null', () => {
    const previous: TestPoint[] = [{ x: 1, y: 10, payload: { x: 1 } }];
    const newPoint: TestPoint = { x: 10, y: 10 }; // no payload.x

    expect(getNewPointEntryDirection(newPoint, previous, 'x')).toBe('right');
  });
});

describe('bulk operations with strategy="x" (uses payload.x)', () => {
  describe('bulk add right: [A,B,C] → [A,B,C,D,E,F]', () => {
    it('should match existing points and mark new ones as unmatched', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A
        { x: 50, y: 20, payload: { x: 1 } }, // B
        { x: 90, y: 30, payload: { x: 2 } }, // C
      ];
      const current: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A
        { x: 30, y: 20, payload: { x: 1 } }, // B
        { x: 50, y: 30, payload: { x: 2 } }, // C
        { x: 70, y: 40, payload: { x: 3 } }, // D (new)
        { x: 90, y: 50, payload: { x: 4 } }, // E (new)
        { x: 110, y: 60, payload: { x: 5 } }, // F (new)
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(6);
      // A, B, C should match by payload.x
      expect(result[0].previous).toBe(previous[0]);
      expect(result[1].previous).toBe(previous[1]);
      expect(result[2].previous).toBe(previous[2]);
      // D, E, F are new
      expect(result[3].previous).toBeNull();
      expect(result[4].previous).toBeNull();
      expect(result[5].previous).toBeNull();

      // D, E, F should enter from right
      expect(getNewPointEntryDirection(current[3], previous, 'x')).toBe('right');
      expect(getNewPointEntryDirection(current[4], previous, 'x')).toBe('right');
      expect(getNewPointEntryDirection(current[5], previous, 'x')).toBe('right');
    });
  });

  describe('bulk add left: [D,E,F] → [A,B,C,D,E,F]', () => {
    it('should match existing points and mark new ones as unmatched', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 40, payload: { x: 3 } }, // D
        { x: 50, y: 50, payload: { x: 4 } }, // E
        { x: 90, y: 60, payload: { x: 5 } }, // F
      ];
      const current: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A (new)
        { x: 30, y: 20, payload: { x: 1 } }, // B (new)
        { x: 50, y: 30, payload: { x: 2 } }, // C (new)
        { x: 70, y: 40, payload: { x: 3 } }, // D
        { x: 90, y: 50, payload: { x: 4 } }, // E
        { x: 110, y: 60, payload: { x: 5 } }, // F
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(6);
      // A, B, C are new
      expect(result[0].previous).toBeNull();
      expect(result[1].previous).toBeNull();
      expect(result[2].previous).toBeNull();
      // D, E, F should match by payload.x
      expect(result[3].previous).toBe(previous[0]);
      expect(result[4].previous).toBe(previous[1]);
      expect(result[5].previous).toBe(previous[2]);

      // A, B, C should enter from left
      expect(getNewPointEntryDirection(current[0], previous, 'x')).toBe('left');
      expect(getNewPointEntryDirection(current[1], previous, 'x')).toBe('left');
      expect(getNewPointEntryDirection(current[2], previous, 'x')).toBe('left');
    });
  });

  describe('bulk sliding right: [A,B,C,D,E] → [D,E,F,G,H]', () => {
    it('should match overlapping points and mark others as new', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A (will be removed)
        { x: 30, y: 20, payload: { x: 1 } }, // B (will be removed)
        { x: 50, y: 30, payload: { x: 2 } }, // C (will be removed)
        { x: 70, y: 40, payload: { x: 3 } }, // D
        { x: 90, y: 50, payload: { x: 4 } }, // E
      ];
      const current: TestPoint[] = [
        { x: 10, y: 40, payload: { x: 3 } }, // D
        { x: 30, y: 50, payload: { x: 4 } }, // E
        { x: 50, y: 60, payload: { x: 5 } }, // F (new)
        { x: 70, y: 70, payload: { x: 6 } }, // G (new)
        { x: 90, y: 80, payload: { x: 7 } }, // H (new)
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(5);
      // D, E should match by payload.x
      expect(result[0].previous).toBe(previous[3]);
      expect(result[1].previous).toBe(previous[4]);
      // F, G, H are new
      expect(result[2].previous).toBeNull();
      expect(result[3].previous).toBeNull();
      expect(result[4].previous).toBeNull();

      // F, G, H should enter from right
      expect(getNewPointEntryDirection(current[2], previous, 'x')).toBe('right');
      expect(getNewPointEntryDirection(current[3], previous, 'x')).toBe('right');
      expect(getNewPointEntryDirection(current[4], previous, 'x')).toBe('right');
    });
  });

  describe('bulk sliding left: [D,E,F,G,H] → [A,B,C,D,E]', () => {
    it('should match overlapping points and mark others as new', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 40, payload: { x: 3 } }, // D
        { x: 30, y: 50, payload: { x: 4 } }, // E
        { x: 50, y: 60, payload: { x: 5 } }, // F (will be removed)
        { x: 70, y: 70, payload: { x: 6 } }, // G (will be removed)
        { x: 90, y: 80, payload: { x: 7 } }, // H (will be removed)
      ];
      const current: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A (new)
        { x: 30, y: 20, payload: { x: 1 } }, // B (new)
        { x: 50, y: 30, payload: { x: 2 } }, // C (new)
        { x: 70, y: 40, payload: { x: 3 } }, // D
        { x: 90, y: 50, payload: { x: 4 } }, // E
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(5);
      // A, B, C are new
      expect(result[0].previous).toBeNull();
      expect(result[1].previous).toBeNull();
      expect(result[2].previous).toBeNull();
      // D, E should match by payload.x
      expect(result[3].previous).toBe(previous[0]);
      expect(result[4].previous).toBe(previous[1]);

      // A, B, C should enter from left
      expect(getNewPointEntryDirection(current[0], previous, 'x')).toBe('left');
      expect(getNewPointEntryDirection(current[1], previous, 'x')).toBe('left');
      expect(getNewPointEntryDirection(current[2], previous, 'x')).toBe('left');
    });
  });

  describe('asymmetric: add more than remove [B,C,D] → [A,B,C,D,E]', () => {
    it('should match existing and add new on both ends', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 20, payload: { x: 1 } }, // B
        { x: 50, y: 30, payload: { x: 2 } }, // C
        { x: 90, y: 40, payload: { x: 3 } }, // D
      ];
      const current: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A (new, left)
        { x: 30, y: 20, payload: { x: 1 } }, // B
        { x: 50, y: 30, payload: { x: 2 } }, // C
        { x: 70, y: 40, payload: { x: 3 } }, // D
        { x: 90, y: 50, payload: { x: 4 } }, // E (new, right)
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(5);
      expect(result[0].previous).toBeNull(); // A new
      expect(result[1].previous).toBe(previous[0]); // B matches
      expect(result[2].previous).toBe(previous[1]); // C matches
      expect(result[3].previous).toBe(previous[2]); // D matches
      expect(result[4].previous).toBeNull(); // E new

      // A enters from left, E enters from right
      expect(getNewPointEntryDirection(current[0], previous, 'x')).toBe('left');
      expect(getNewPointEntryDirection(current[4], previous, 'x')).toBe('right');
    });
  });

  describe('asymmetric: remove more than add [A,B,C,D,E] → [C,D]', () => {
    it('should match remaining points', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A (removed)
        { x: 30, y: 20, payload: { x: 1 } }, // B (removed)
        { x: 50, y: 30, payload: { x: 2 } }, // C
        { x: 70, y: 40, payload: { x: 3 } }, // D
        { x: 90, y: 50, payload: { x: 4 } }, // E (removed)
      ];
      const current: TestPoint[] = [
        { x: 10, y: 30, payload: { x: 2 } }, // C
        { x: 50, y: 40, payload: { x: 3 } }, // D
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(2);
      expect(result[0].previous).toBe(previous[2]); // C matches by payload.x
      expect(result[1].previous).toBe(previous[3]); // D matches by payload.x
    });
  });

  describe('complete replacement: [A,B,C] → [D,E,F] (no overlap)', () => {
    it('should have no matches, all new points', () => {
      const previous: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } }, // A
        { x: 50, y: 20, payload: { x: 1 } }, // B
        { x: 90, y: 30, payload: { x: 2 } }, // C
      ];
      const current: TestPoint[] = [
        { x: 10, y: 50, payload: { x: 5 } }, // D (new)
        { x: 50, y: 60, payload: { x: 6 } }, // E (new)
        { x: 90, y: 70, payload: { x: 7 } }, // F (new)
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(3);
      expect(result[0].previous).toBeNull();
      expect(result[1].previous).toBeNull();
      expect(result[2].previous).toBeNull();

      // All should enter from right since payload.x > max previous payload.x
      expect(getNewPointEntryDirection(current[0], previous, 'x')).toBe('right');
      expect(getNewPointEntryDirection(current[1], previous, 'x')).toBe('right');
      expect(getNewPointEntryDirection(current[2], previous, 'x')).toBe('right');
    });
  });

  describe('single point operations', () => {
    it('should handle [A] → [B] single point replacement', () => {
      const previous: TestPoint[] = [{ x: 10, y: 10, payload: { x: 0 } }];
      const current: TestPoint[] = [{ x: 10, y: 20, payload: { x: 1 } }];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(1);
      expect(result[0].previous).toBeNull();
      expect(getNewPointEntryDirection(current[0], previous, 'x')).toBe('right');
    });

    it('should handle [] → [A,B,C] empty to data', () => {
      const previous: TestPoint[] = [];
      const current: TestPoint[] = [
        { x: 10, y: 10, payload: { x: 0 } },
        { x: 50, y: 20, payload: { x: 1 } },
        { x: 90, y: 30, payload: { x: 2 } },
      ];

      const result = matchPointsByStrategy(current, previous, 'x');

      expect(result).toHaveLength(3);
      expect(result[0].previous).toBeNull();
      expect(result[1].previous).toBeNull();
      expect(result[2].previous).toBeNull();
    });
  });
});

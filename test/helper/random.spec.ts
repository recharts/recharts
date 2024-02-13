import { between, random } from './random';

describe('random', () => {
  test.each([
    [0.1, 7574, 43828, 10324, 53467, 12342, 8206, 25691, 26326, 8414, 41291],
    [0.2, 15074, 16495, 57533, 55144, 7043, 4003, 38151, 43308, 36861, 12095],
    [0.3, 22574, 54699, 39205, 56821, 1744, 65337, 50611, 60290, 65308, 48436],
    [0, 74, 5624, 28652, 51790, 17641, 12409, 13231, 9344, 45504, 4950],
    [-5, 65236, 43036, 16461, 54983, 60505, 15896, 12608, 28156, 14590, 45732],
  ])('should provide pseudorandom numbers for seed %d', (seed: number, ...numbers: Array<number>) => {
    const gen: Generator<number> = random(seed);
    numbers.forEach(n => {
      expect(gen.next().value).toBe(n);
    });
  });
});

describe('between', () => {
  test.each([
    [100, 5, 10, 5],
    [100, 5, 17, 9],
    [101, 5, 17, 10],
  ])('should take a generator %d and boundaries <%d, %d> and return %d', (value, min, max, expected) => {
    function* gen() {
      yield value;
      return value;
    }
    expect(between(gen(), min, max)).toBe(expected);
  });
});

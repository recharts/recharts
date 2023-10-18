/**
 * Returns a random number generator.
 *
 * IMPORTANT: this number generator is based on LCG and
 * IS NOT SAFE for anything security related!
 *
 * It is only really good for random mock data and visualisation and maybe colors.
 *
 * From wikipedia: https://en.wikipedia.org/wiki/Linear_congruential_generator
 * >  LCGs are not intended, and must not be used, for cryptographic applications
 *
 * @param {number} seed use this for deterministic random generators in tests or storybooks
 * @return {Function} generator
 */
export function* random(seed: number): Generator<number> {
  // LCG good enough for our purposes https://en.wikipedia.org/wiki/Linear_congruential_generator
  const m = 2 ** 16 + 1;
  const a = 75;
  const c = 74;
  let x = seed;
  // let's make Math.random() seeds a bit more random
  if (x > 0 && x < 1) {
    x = Math.round(x * 1000);
  }
  while (x < 0) {
    x += m;
  }
  while (true) {
    x = (a * x + c) % m;
    yield Math.round(x);
  }
}

export function between(rng: Generator<number, number, unknown>, min: number, max: number): number {
  const val = rng.next().value;
  return (val % (max - min)) + min;
}

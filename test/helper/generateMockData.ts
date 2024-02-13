import { between, random } from './random';

export function generateMockData(
  length: number,
  seed: number,
): Array<{ label: string; x: number; y: number; z: number }> {
  const result: Array<{ label: string; x: number; y: number; z: number }> = [];
  const gen = random(seed);
  for (let i = 0; i < length; i++) {
    result.push({
      label: `Iter: ${i}`,
      x: between(gen, 100, 300),
      y: between(gen, 400, 800),
      z: between(gen, 1000, 2000),
    });
  }
  return result;
}

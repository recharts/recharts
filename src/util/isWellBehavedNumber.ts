export function isWellBehavedNumber(n: unknown): n is number {
  return Number.isFinite(n);
}

export function isPositiveNumber(n: unknown): n is number {
  return typeof n === 'number' && n > 0 && Number.isFinite(n);
}

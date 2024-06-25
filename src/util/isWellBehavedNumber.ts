export function isWellBehavedNumber(n: unknown): n is number {
  return Number.isFinite(n);
}

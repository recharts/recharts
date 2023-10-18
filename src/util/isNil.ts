export function isNil(value: unknown): value is null | undefined {
  return value == null;
}

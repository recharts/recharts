export function getClassNameFromUnknown(u: unknown): string {
  if (u && typeof u === 'object' && 'className' in u && typeof u.className === 'string') {
    return u.className;
  }
  return '';
}

import { propsToShallowCompare } from '../util/propsAreEqual';

function isShallowMergeableObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function mergeThemeProps<TBase extends object, TOverride extends object>(
  base: TBase,
  override: TOverride,
): TBase & TOverride;
export function mergeThemeProps<TBase extends object>(base: TBase, override: undefined): TBase;
export function mergeThemeProps<TOverride extends object>(base: undefined, override: TOverride): TOverride;
export function mergeThemeProps<TBase extends object, TOverride extends object>(
  base: TBase | undefined,
  override: TOverride | undefined,
): TBase | TOverride | (TBase & TOverride) | undefined;
export function mergeThemeProps<TBase extends object, TOverride extends object>(
  base: TBase | undefined,
  override: TOverride | undefined,
): TBase | TOverride | (TBase & TOverride) | undefined {
  if (base == null) {
    return override;
  }
  if (override == null) {
    return base;
  }

  const result = { ...base, ...override };
  const baseProps: Partial<TBase & TOverride> = base;
  const overrideProps: Partial<TBase & TOverride> = override;
  /*
   * Object.keys always returns string[], even though these keys are guaranteed
   * to come from `override`. This local assertion keeps the type escape hatch
   * in one place instead of repeating it throughout the theming code.
   */
  const keys = Object.keys(override) as Array<Extract<keyof (TBase & TOverride), string>>;

  keys.forEach(key => {
    const baseValue = baseProps[key];
    const overrideValue = overrideProps[key];

    if (overrideValue === undefined) {
      Object.assign(result, { [key]: baseValue });
      return;
    }

    if (
      propsToShallowCompare.has(key) &&
      isShallowMergeableObject(baseValue) &&
      isShallowMergeableObject(overrideValue)
    ) {
      Object.assign(result, { [key]: { ...baseValue, ...overrideValue } });
    }
  });

  return result;
}

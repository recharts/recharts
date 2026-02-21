/** The component being imported */
export const component = 'BarStack' as const;

/**
 * All components expected to appear in the bundle when importing this component.
 * BarStack unexpectedly pulls in Bar due to a shared internal dependency.
 */
export const expectedInBundle = ['BarStack', 'Bar'] as const;

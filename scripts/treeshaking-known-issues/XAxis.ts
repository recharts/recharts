/** The component being imported */
export const component = 'XAxis' as const;

/**
 * All components expected to appear in the bundle when importing this component.
 * XAxis unexpectedly pulls in CartesianAxis due to a shared internal dependency.
 */
export const expectedInBundle = ['XAxis', 'CartesianAxis'] as const;

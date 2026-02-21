/** The component being imported */
export const component = 'YAxis' as const;

/**
 * All components expected to appear in the bundle when importing this component.
 * YAxis unexpectedly pulls in CartesianAxis due to a shared internal dependency.
 */
export const expectedInBundle = ['YAxis', 'CartesianAxis'] as const;

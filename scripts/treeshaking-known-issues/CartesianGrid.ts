/** The component being imported */
export const component = 'CartesianGrid' as const;

/**
 * All components expected to appear in the bundle when importing this component.
 * CartesianGrid unexpectedly pulls in CartesianAxis due to a shared internal dependency.
 */
export const expectedInBundle = ['CartesianGrid', 'CartesianAxis'] as const;

/** The component being imported */

/**
 * All components expected to appear in the bundle when importing this component.
 * XAxis unexpectedly pulls in CartesianAxis due to a shared internal dependency.
 */
export const expectedInBundle = [
  'CartesianAxis',
  'DefaultZIndexes',
  'getNiceTickValues',
  'Global',
  'Label',
  'Layer',
  'Text',
  'XAxis',
  'ZIndexLayer',
] as const;

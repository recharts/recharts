/**
 * All components expected to appear in the bundle when importing this component.
 * CartesianGrid unexpectedly pulls in CartesianAxis due to a shared internal dependency.
 */
export const expectedInBundle = [
  'CartesianAxis',
  'CartesianGrid',
  'DefaultZIndexes',
  'getNiceTickValues',
  'Global',
  'Label',
  'Layer',
  'Text',
  'useChartHeight',
  'useChartWidth',
  'ZIndexLayer',
] as const;

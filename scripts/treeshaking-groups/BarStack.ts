/**
 * All components expected to appear in the bundle when importing this component.
 * BarStack pulls in Bar due to a shared internal dependency.
 */
export const expectedInBundle = [
  'Bar',
  'BarStack',
  'Cell',
  'DefaultZIndexes',
  'getNiceTickValues',
  'Global',
  'interpolate',
  'Label',
  'LabelList',
  'Layer',
  'matchAppend',
  'matchByIndex',
  'Rectangle',
  'Text',
  'usePlotArea',
  'ZIndexLayer',
  'useChartLayout',
] as const;

/**
 * All components expected to appear in the bundle when importing this component.
 * BarStack pulls in Bar due to a shared internal dependency.
 */
export const expectedInBundle = [
  'Bar',
  'BarStack',
  'Cell',
  'Curve',
  'DefaultZIndexes',
  'getNiceTickValues',
  'Global',
  'Label',
  'LabelList',
  'Layer',
  'Rectangle',
  'Sector',
  'Symbols',
  'Text',
  'Trapezoid',
  'usePlotArea',
  'ZIndexLayer',
] as const;

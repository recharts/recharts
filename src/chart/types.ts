import { Margin, LayoutType, BaseAxisProps } from '../util/types';

interface CategoricalChartPropTypes {
  syncId?: number | string;
  compact?: boolean;
  width?: number;
  height?: number;
  data?: any[];
  layout?: LayoutType;
  stackOffset?: 'sign' | 'expand' | 'none' | 'wiggle' | 'silhouette';
  throttleDelay?: number;
  margin?: Margin;
  barCategoryGap?: number | string;
  barGap?: number | string;
  barSize?: number | string;
  maxBarSize?: number;
  style?: any;
  className?: string;
  children?: any;
  defaultShowTooltip?: boolean;
  onClick?: any;
  onMouseLeave?: any;
  onMouseEnter?: any;
  onMouseMove?: any;
  onMouseDown?: any;
  onMouseUp?: any;
  reverseStackOrder?: boolean;
  id?: string;

  startAngle?: number;
  endAngle?: number;
  cx?: number | string;
  cy?: number | string;
  innerRadius?: number | string;
  outerRadius?: number | string;
}

interface CategoricalChart {
  chartName?: string;
  GraphicalChild?: any;
  eventType?: string;
  axisComponents?: BaseAxisProps[];
  legendContent?: any;
  formatAxisMap?: any;
  defaultProps?: any;
}

interface TreemapNode {
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  index: number;
  children?: any;
  name: string;
  value: number;
  [k: string]: any;
}

interface SankeyNode {
  x: number;
  y: number;
  dx: number;
  dy: number;
  depth: number;
  value: number;
}
interface SankeyLink {
  target: number;
  source: number;
  value: number;
  sy: number;
  dy: number;
  ty: number;
}

export {
  CategoricalChartPropTypes,
  CategoricalChart,
  LayoutType,
  TreemapNode,
  SankeyNode,
  SankeyLink,
};
type ILayout = 'horizontal' | 'vertical' | 'centric';

interface IMargin {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

interface ICommonPropTypes {
  syncId?: number | string;
  compact?: boolean;
  width?: number;
  height?: number;
  data?: any[];
  layout?: ILayout;
  stackOffset?: 'sign' | 'expand' | 'none' | 'wiggle' | 'silhouette';
  throttleDelay?: number;
  margin?: IMargin;
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
}

interface IPiePropTypes {

}

interface ICategoricalChart {
  chartName?: string;
  GraphicalChild?: any;
  eventType?: string;
  axisComponents?: any;
  legendContent?: any;
  formatAxisMap?: any;
  defaultProps?: any;
  propTypes?: any;
}

interface ICoordinate {
  xAxis?: any;
  yAxis?: any;
  width: any;
  height: any;
  offset: any;
}

interface IAxis {
  axisType: string;

}

interface ITreemapNode {
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  index: number;
  children: any;
  name: string;
}

export {
  IMargin,
  ICommonPropTypes,
  ICategoricalChart,
  ICoordinate,
  IAxis,
  ILayout,
  ITreemapNode,
};
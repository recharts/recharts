import PropTypes from 'prop-types';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES } from '../../util/ReactUtils';

export default {
  ...PRESENTATION_ATTRIBUTES,
  ...EVENT_ATTRIBUTES,
  className: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.oneOf([
    'basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural',
    'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter',
  ]), PropTypes.func]),
  unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  yAxis: PropTypes.object,
  xAxis: PropTypes.object,
  legendType: PropTypes.oneOf(LEGEND_TYPES),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  connectNulls: PropTypes.bool,
  hide: PropTypes.bool,

  // whether have dot in line
  activeDot: PropTypes.oneOfType([
    PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
  ]),
  dot: PropTypes.oneOfType([
    PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
  ]),

  top: PropTypes.number,
  left: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    value: PropTypes.value,
  })),
  onAnimationStart: PropTypes.func,
  onAnimationEnd: PropTypes.func,

  isAnimationActive: PropTypes.bool,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf([
    'ease',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'linear',
  ]),
  animationId: PropTypes.number,
};

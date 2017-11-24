import PropTypes from 'prop-types';

export default {
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
    'spring',
  ]),
  animationId: PropTypes.number,
};

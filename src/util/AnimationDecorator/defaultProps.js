
import { isSsr } from '../ReactUtils';

export default {
  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  onAnimationStart: () => {},
  onAnimationEnd: () => {},
};

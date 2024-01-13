import memoize from 'lodash/memoize';
import { CartesianViewBox, ChartOffset } from './types';

export const calculateViewBox: (offset: ChartOffset) => CartesianViewBox = memoize(
  (offset: ChartOffset): CartesianViewBox => {
    return {
      x: offset.left,
      y: offset.top,
      width: offset.width,
      height: offset.height,
    };
  },
  offset => ['l', offset.left, 't', offset.top, 'w', offset.width, 'h', offset.height].join(''),
);

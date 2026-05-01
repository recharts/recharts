import { CategoricalDomain, NumberDomain } from '../../../util/types';
import { isWellFormedNumberDomain } from '../../../util/isDomainSpecifiedByUser';
import { isWellBehavedNumber } from '../../../util/isWellBehavedNumber';

/**
 * This function validates and transforms the axis domain so that it is safe to use in the provided scale.
 */
export const combineCheckedDomain = (
  realScaleType: string | undefined,
  axisDomain: NumberDomain | CategoricalDomain | undefined,
): NumberDomain | CategoricalDomain | undefined => {
  if (axisDomain == null) {
    return undefined;
  }
  switch (realScaleType) {
    case 'linear': {
      /*
       * linear scale only reads the first two numbers in the domain, and ignores everything else.
       * So if it happens that someone somehow gave us a bigger domain,
       * let's pick the min and max from it.
       */
      if (!isWellFormedNumberDomain(axisDomain)) {
        let min: number | undefined, max: number | undefined;
        for (let i = 0; i < axisDomain.length; i++) {
          const value = axisDomain[i];
          if (!isWellBehavedNumber(value)) {
            continue;
          }
          if (min === undefined || value < min) {
            min = value;
          }
          if (max === undefined || value > max) {
            max = value;
          }
        }
        if (min !== undefined && max !== undefined) {
          /*
           * A degenerate domain where min === max causes a d3 linear scale to return NaN for all
           * inputs (division by zero in the interpolation). Expand the domain by 1 on each side
           * so the scale remains well-behaved.
           */
          if (min === max) {
            return [min - 1, max + 1];
          }
          return [min, max];
        }
        return undefined;
      }
      /*
       * A degenerate domain where min === max causes a d3 linear scale to return NaN for all
       * inputs (division by zero in the interpolation). Expand the domain by 1 on each side
       * so the scale remains well-behaved. This is the common case when all data values are
       * equal (e.g. a stacked bar chart where every value is 0).
       */
      if (axisDomain[0] === axisDomain[1]) {
        return [axisDomain[0] - 1, axisDomain[1] + 1];
      }
      return axisDomain;
    }
    default:
      return axisDomain;
  }
};

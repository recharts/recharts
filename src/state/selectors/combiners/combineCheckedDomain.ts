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
          return [min, max];
        }
        return undefined;
      }
      return axisDomain;
    }
    default:
      return axisDomain;
  }
};

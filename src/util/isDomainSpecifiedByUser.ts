import { MAX_VALUE_REG, MIN_VALUE_REG } from './ChartUtils';
import { isNumber } from './DataUtils';
import { AxisDomain, NumberDomain } from './types';
import { isWellBehavedNumber } from './isWellBehavedNumber';

export function isWellFormedNumberDomain(v: unknown): v is NumberDomain {
  if (Array.isArray(v) && v.length === 2) {
    const [min, max] = v;
    if (isWellBehavedNumber(min) && isWellBehavedNumber(max)) {
      return true;
    }
  }
  return false;
}

export function extendDomain(
  providedDomain: NumberDomain,
  boundaryDomain: NumberDomain,
  allowDataOverflow: boolean,
): NumberDomain {
  if (allowDataOverflow) {
    // If the data are allowed to overflow - we're fine with whatever user provided
    return providedDomain;
  }
  /*
   * If the data are not allowed to overflow - we need to extend the domain.
   * Means that effectively the user is allowed to make the domain larger
   * but not smaller.
   */
  return [Math.min(providedDomain[0], boundaryDomain[0]), Math.max(providedDomain[1], boundaryDomain[1])];
}

/**
 * So Recharts allows users to provide their own domains,
 * but it also places some expectations on what the domain is.
 * We can improve on the typescript typing, but we also need a runtime test
 to observe that the user-provided domain is well-formed,
 * that is: an array with exactly two numbers.
 *
 * This function does not accept data as an argument.
 * This is to enable a performance optimization - if the domain is there,
 * and we know what it is without traversing all the data,
 * then we don't have to traverse all the data!
 *
 * If the user-provided domain is not well-formed,
 * this function will return undefined - in which case we should traverse the data to calculate the real domain.
 *
 * This function is for parsing the numerical domain only.
 *
 * @param userDomain external prop, user provided, before validation. Can have various shapes: array, function, special magical strings inside too.
 * @param allowDataOverflow boolean, provided by users. If true then the data domain wins
 *
 * @return [min, max] domain if it's well-formed; undefined if the domain is invalid
 */
export function numericalDomainSpecifiedWithoutRequiringData(
  userDomain: AxisDomain | undefined,
  allowDataOverflow: boolean,
) {
  if (!allowDataOverflow) {
    // Cannot compute data overflow if the data is not provided
    return undefined;
  }
  if (typeof userDomain === 'function') {
    // The user function expects the data to be provided as an argument
    return undefined;
  }
  if (Array.isArray(userDomain) && userDomain.length === 2) {
    const [providedMin, providedMax] = userDomain;
    let finalMin, finalMax: string | number | undefined;

    if (isWellBehavedNumber(providedMin)) {
      finalMin = providedMin;
    } else if (typeof providedMin === 'function') {
      // The user function expects the data to be provided as an argument
      return undefined;
    }

    if (isWellBehavedNumber(providedMax)) {
      finalMax = providedMax;
    } else if (typeof providedMax === 'function') {
      // The user function expects the data to be provided as an argument
      return undefined;
    }

    const candidate = [finalMin, finalMax];
    if (isWellFormedNumberDomain(candidate)) {
      return candidate;
    }
  }
  return undefined;
}

/**
 * So Recharts allows users to provide their own domains,
 * but it also places some expectations on what the domain is.
 * We can improve on the typescript typing, but we also need a runtime test
 * to observe that the user-provided domain is well-formed,
 * that is: an array with exactly two numbers.
 * If the user-provided domain is not well-formed,
 * this function will return undefined - in which case we should traverse the data to calculate the real domain.
 *
 * This function is for parsing the numerical domain only.
 *
 * You are probably thinking, why does domain need tick count?
 * Well it adjusts the domain based on where the "nice ticks" land, and nice ticks depend on the tick count.
 *
 * @param userDomain external prop, user provided, before validation. Can have various shapes: array, function, special magical strings inside too.
 * @param dataDomain calculated from data. Can be undefined, as an option for performance optimization
 * @param allowDataOverflow provided by users. If true then the data domain wins
 *
 * @return [min, max] domain if it's well-formed; undefined if the domain is invalid
 */
export function parseNumericalUserDomain(
  userDomain: AxisDomain | undefined,
  dataDomain: NumberDomain | undefined,
  allowDataOverflow: boolean,
): NumberDomain | undefined {
  if (!allowDataOverflow && dataDomain == null) {
    // Cannot compute data overflow if the data is not provided
    return undefined;
  }
  if (typeof userDomain === 'function' && dataDomain != null) {
    try {
      const result = userDomain(dataDomain, allowDataOverflow);
      if (isWellFormedNumberDomain(result)) {
        return extendDomain(result, dataDomain, allowDataOverflow);
      }
    } catch {
      /* ignore the exception and compute domain from data later */
    }
  }
  if (Array.isArray(userDomain) && userDomain.length === 2) {
    const [providedMin, providedMax] = userDomain;
    let finalMin, finalMax: string | number | undefined;

    if (providedMin === 'auto') {
      if (dataDomain != null) {
        finalMin = Math.min(...dataDomain);
      }
    } else if (isNumber(providedMin)) {
      finalMin = providedMin;
    } else if (typeof providedMin === 'function') {
      try {
        if (dataDomain != null) {
          finalMin = providedMin(dataDomain?.[0]);
        }
      } catch {
        /* ignore the exception and compute domain from data later */
      }
    } else if (typeof providedMin === 'string' && MIN_VALUE_REG.test(providedMin)) {
      const match = MIN_VALUE_REG.exec(providedMin);
      if (match == null || dataDomain == null) {
        finalMin = undefined;
      } else {
        const value = +match[1];
        finalMin = dataDomain[0] - value;
      }
    } else {
      finalMin = dataDomain?.[0];
    }

    if (providedMax === 'auto') {
      if (dataDomain != null) {
        finalMax = Math.max(...dataDomain);
      }
    } else if (isNumber(providedMax)) {
      finalMax = providedMax;
    } else if (typeof providedMax === 'function') {
      try {
        if (dataDomain != null) {
          finalMax = providedMax(dataDomain?.[1]);
        }
      } catch {
        /* ignore the exception and compute domain from data later */
      }
    } else if (typeof providedMax === 'string' && MAX_VALUE_REG.test(providedMax)) {
      const match = MAX_VALUE_REG.exec(providedMax);
      if (match == null || dataDomain == null) {
        finalMax = undefined;
      } else {
        const value = +match[1];
        finalMax = dataDomain[1] + value;
      }
    } else {
      finalMax = dataDomain?.[1];
    }

    const candidate = [finalMin, finalMax];
    if (isWellFormedNumberDomain(candidate)) {
      if (dataDomain == null) {
        return candidate;
      }
      return extendDomain(candidate, dataDomain, allowDataOverflow);
    }
  }
  return undefined;
}

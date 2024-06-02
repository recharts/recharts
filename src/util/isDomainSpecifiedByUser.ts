import { MAX_VALUE_REG, MIN_VALUE_REG } from './ChartUtils';
import { isNumber } from './DataUtils';
import { getNiceTickValues } from './scale';
import { AxisDomain, AxisDomainType, NumberDomain } from './types';

/**
 * Takes a domain and user props to determine whether he provided the domain via props or if we need to calculate it.
 * @param   {AxisDomain}  domain              The potential domain from props
 * @param   {Boolean}     allowDataOverflow   from props
 * @param   {String}      axisType            from props
 * @returns {Boolean}                         `true` if domain is specified by user
 */
export function isDomainSpecifiedByUser(
  domain: AxisDomain,
  allowDataOverflow: boolean,
  axisType: AxisDomainType,
): boolean {
  if (axisType === 'number' && allowDataOverflow === true && Array.isArray(domain)) {
    const domainStart: unknown | null | undefined = domain?.[0];
    const domainEnd: unknown | null | undefined = domain?.[1];

    /*
     * The `isNumber` check is needed because the user could also provide strings like "dataMin" via the domain props.
     * In such case, we have to compute the domain from the data.
     */
    if (!!domainStart && !!domainEnd && isNumber(domainStart) && isNumber(domainEnd)) {
      return true;
    }
  }

  return false;
}

function isWellBehavedNumber(n: unknown): n is number {
  return Number.isFinite(n);
}

function isWellFormedNumberDomain(v: unknown): v is NumberDomain {
  if (Array.isArray(v) && v.length === 2) {
    const [min, max] = v;
    if (isWellBehavedNumber(min) && isWellBehavedNumber(max) && min <= max) {
      return true;
    }
  }
  return false;
}

function extendDomain(
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
    try {
      const result = userDomain(undefined, allowDataOverflow);
      if (isWellFormedNumberDomain(result)) {
        return result;
      }
    } catch (ex) {
      /* ignore the exception and compute domain from data later */
    }
  }
  if (Array.isArray(userDomain) && userDomain.length === 2) {
    const [providedMin, providedMax] = userDomain;
    let finalMin, finalMax: number;

    if (isWellBehavedNumber(providedMin)) {
      finalMin = providedMin;
    } else if (typeof providedMin === 'function') {
      try {
        finalMin = providedMin(undefined);
      } catch (ex) {
        /* ignore the exception and compute domain from data later */
      }
    }

    if (isWellBehavedNumber(providedMax)) {
      finalMax = providedMax;
    } else if (typeof providedMax === 'function') {
      try {
        finalMax = providedMax(undefined);
      } catch (ex) {
        /* ignore the exception and compute domain from data later */
      }
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
 * @param userDomain external prop, user provided, before validation. Can have various shapes: array, function, special magical strings inside too.
 * @param dataDomain calculated from data. Can be undefined, as an option for performance optimization
 * @param allowDataOverflow provided by users. If true then the data domain wins
 * @param allowDecimals if true then recharts is allowed to generate domain with decimal numbers; if false the numbers are always integers
 *
 * @return [min, max] domain if it's well-formed; undefined if the domain is invalid
 */
export function parseNumericalUserDomain(
  userDomain: AxisDomain | undefined,
  dataDomain: NumberDomain | undefined,
  allowDataOverflow: boolean,
  allowDecimals: boolean,
): NumberDomain | undefined {
  if (!allowDataOverflow && dataDomain == null) {
    // Cannot compute data overflow if the data is not provided
    return undefined;
  }
  if (typeof userDomain === 'function') {
    try {
      const result = userDomain(dataDomain, allowDataOverflow);
      if (isWellFormedNumberDomain(result)) {
        return extendDomain(result, dataDomain, allowDataOverflow);
      }
    } catch (ex) {
      /* ignore the exception and compute domain from data later */
    }
  }
  if (Array.isArray(userDomain) && userDomain.length === 2) {
    const [providedMin, providedMax] = userDomain;
    let finalMin, finalMax: number, niceTicks: ReadonlyArray<number>;

    if (providedMin === 'auto') {
      if (dataDomain != null) {
        niceTicks = getNiceTickValues(dataDomain, undefined, allowDecimals);
        finalMin = Math.min(...niceTicks);
      }
    } else if (typeof providedMin === 'number' && !Number.isNaN(providedMin)) {
      finalMin = providedMin;
    } else if (typeof providedMin === 'function') {
      try {
        finalMin = providedMin(dataDomain?.[0]);
      } catch (ex) {
        /* ignore the exception and compute domain from data later */
      }
    } else if (typeof providedMin === 'string' && MIN_VALUE_REG.test(providedMin)) {
      const value = +MIN_VALUE_REG.exec(providedMin)[1];
      finalMin = dataDomain?.[0] - value;
    } else if (providedMin === 'dataMin') {
      finalMin = dataDomain?.[0];
    }

    if (providedMax === 'auto') {
      if (dataDomain != null) {
        if (niceTicks == null) {
          niceTicks = getNiceTickValues(dataDomain, undefined, allowDecimals);
        }
        finalMax = Math.max(...niceTicks);
      }
    } else if (typeof providedMax === 'number' && !Number.isNaN(providedMax)) {
      finalMax = providedMax;
    } else if (typeof providedMax === 'function') {
      try {
        finalMax = providedMax(dataDomain?.[1]);
      } catch (ex) {
        /* ignore the exception and compute domain from data later */
      }
    } else if (typeof providedMax === 'string' && MAX_VALUE_REG.test(providedMax)) {
      const value = +MAX_VALUE_REG.exec(providedMax)[1];
      finalMax = dataDomain?.[1] + value;
    } else if (providedMax === 'dataMax') {
      finalMax = dataDomain?.[1];
    }

    const candidate = [finalMin, finalMax];
    if (isWellFormedNumberDomain(candidate)) {
      return extendDomain(candidate, dataDomain, allowDataOverflow);
    }
  }
  return undefined;
}

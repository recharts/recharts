import { isNumber } from './DataUtils';
import { AxisDomain, BaseAxisProps } from './types';

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
  axisType: BaseAxisProps['type'],
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

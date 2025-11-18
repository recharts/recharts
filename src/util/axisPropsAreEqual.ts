import { XAxisProps, YAxisProps } from '../index';
import { AxisDomain } from './types';
import { AxisRange } from '../state/selectors/axisSelectors';
import { propsAreEqual } from './propsAreEqual';

function shortArraysAreEqual(
  arr1: AxisDomain | AxisRange | undefined,
  arr2: AxisDomain | AxisRange | undefined,
): boolean {
  if (arr1 === arr2) {
    return true;
  }

  if (Array.isArray(arr1) && arr1.length === 2 && Array.isArray(arr2) && arr2.length === 2) {
    return arr1[0] === arr2[0] && arr1[1] === arr2[1];
  }

  return false;
}

/**
 * Usually we would not compare array props deeply for performance consideration.
 * However, for axis props, domain is sometimes defined as a two-elements array, and range is always
 * a two-elements array. So we can do a shallow comparison for the rest props and a shallow
 * comparison for these two array props.
 * @param prevProps
 * @param nextProps
 */
export function axisPropsAreEqual<T extends YAxisProps | XAxisProps>(prevProps: T, nextProps: T): boolean {
  if (prevProps === nextProps) {
    return true;
  }
  const { domain: prevDomain, range: prevRange, ...prevRest } = prevProps;
  const { domain: nextDomain, range: nextRange, ...nextRest } = nextProps;

  if (!shortArraysAreEqual(prevDomain, nextDomain)) {
    return false;
  }

  if (!shortArraysAreEqual(prevRange, nextRange)) {
    return false;
  }

  return propsAreEqual(prevRest, nextRest);
}

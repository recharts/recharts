import { ReactElement } from 'react';
import min from 'lodash/min';
import max from 'lodash/max';
import { AxisType, BaseAxisProps, CategoricalDomain, DataKey, LayoutType, NumberDomain } from './types';
import { findAllByType } from './ReactUtils';
import { ErrorBar } from '../cartesian/ErrorBar';
import { getDomainOfDataByKey, getValueByDataKey, isErrorBarRelevantForAxis } from './ChartUtils';
import { isNullish } from './DataUtils';

/**
 * @deprecated - this is using direct DOM access. Use different approach.
 * @param data do not use
 * @param item do not use
 * @param dataKey do not use
 * @param layout do not use
 * @param axisType do not use
 * @returns do not use
 */
export const getDomainOfErrorBars = (
  data: Array<object>,
  item: ReactElement,
  dataKey: DataKey<any>,
  layout?: LayoutType,
  axisType?: AxisType,
): NumberDomain | null => {
  const { children } = item.props;
  const errorBars = findAllByType(children, ErrorBar).filter(errorBarChild =>
    isErrorBarRelevantForAxis(layout, axisType, errorBarChild.props.direction),
  );

  if (errorBars && errorBars.length) {
    const keys: ReadonlyArray<DataKey<any>> = errorBars.map(errorBarChild => errorBarChild.props.dataKey);

    return data.reduce<NumberDomain>(
      (result: NumberDomain, entry: object): NumberDomain => {
        const entryValue = getValueByDataKey(entry, dataKey);
        if (isNullish(entryValue)) return result;

        const mainValue = Array.isArray(entryValue) ? [min(entryValue), max(entryValue)] : [entryValue, entryValue];
        const errorDomain = keys.reduce(
          (prevErrorArr: [number, number], k: DataKey<any>): NumberDomain => {
            const errorValue = getValueByDataKey(entry, k, 0);
            const lowerValue = mainValue[0] - Math.abs(Array.isArray(errorValue) ? errorValue[0] : errorValue);
            const upperValue = mainValue[1] + Math.abs(Array.isArray(errorValue) ? errorValue[1] : errorValue);

            return [Math.min(lowerValue, prevErrorArr[0]), Math.max(upperValue, prevErrorArr[1])];
          },
          [Infinity, -Infinity],
        );

        return [Math.min(errorDomain[0], result[0]), Math.max(errorDomain[1], result[1])];
      },
      [Infinity, -Infinity],
    );
  }

  return null;
};

/**
 * @deprecated this is relying on direct DOM access, do not use
 * @param data do not use
 * @param items do not use
 * @param dataKey do not use
 * @param axisType do not use
 * @param layout do not use
 * @returns do not use
 */
export const parseErrorBarsOfAxis = (
  data: any[],
  items: any[],
  dataKey: any,
  axisType: AxisType,
  layout?: LayoutType,
): NumberDomain | null => {
  const domains = items
    .map(item => getDomainOfErrorBars(data, item, dataKey, layout, axisType))
    .filter(entry => !isNullish(entry));

  if (domains && domains.length) {
    return domains.reduce(
      (result, entry) => [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])],
      [Infinity, -Infinity],
    );
  }

  return null;
};

/**
 * @deprecated this is relying on direct DOM access, do not use.
 *
 * Get domain of data by the configuration of item element
 * @param  {Array}   data      The data displayed in the chart
 * @param  {Array}   items     The instances of item
 * @param  {String}  type      The type of axis, number - Number Axis, category - Category Axis
 * @param  {LayoutType} layout The type of layout
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array}        Domain
 */
export const getDomainOfItemsWithSameAxis = (
  data: any[],
  items: ReactElement[],
  type: BaseAxisProps['type'],
  layout?: LayoutType,
  filterNil?: boolean,
) => {
  const domains: (NumberDomain | CategoricalDomain | null)[] = items.map(item => {
    const { dataKey } = item.props;

    if (type === 'number' && dataKey) {
      return getDomainOfErrorBars(data, item, dataKey, layout) || getDomainOfDataByKey(data, dataKey, type, filterNil);
    }
    return getDomainOfDataByKey(data, dataKey, type, filterNil);
  });

  if (type === 'number') {
    // Calculate the domain of number axis
    return domains.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      (result, entry) => [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])],
      [Infinity, -Infinity],
    );
  }

  const tag: Record<string, any> = {};
  // Get the union set of category axis
  return domains.reduce((result, entry) => {
    for (let i = 0, len = entry.length; i < len; i++) {
      // @ts-expect-error Date cannot index an object
      if (!tag[entry[i]]) {
        // @ts-expect-error Date cannot index an object
        tag[entry[i]] = true;

        // @ts-expect-error Date cannot index an object
        result.push(entry[i]);
      }
    }
    return result;
  }, []);
};

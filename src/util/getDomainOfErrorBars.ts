import { ReactElement } from 'react';
import min from 'lodash/min';
import max from 'lodash/max';
import { AxisType, DataKey, LayoutType, NumberDomain } from './types';
import { findAllByType } from './ReactUtils';
import { ErrorBar } from '../cartesian/ErrorBar';
import { getValueByDataKey, isErrorBarRelevantForAxis } from './ChartUtils';
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

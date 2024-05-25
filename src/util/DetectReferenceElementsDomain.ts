import { ReactNode } from 'react';
import { ReferenceDot } from '../cartesian/ReferenceDot';
import { ReferenceLine } from '../cartesian/ReferenceLine';
import { ReferenceArea } from '../cartesian/ReferenceArea';
import { findAllByType } from './ReactUtils';
import { isNumber } from './DataUtils';

/**
 * @deprecated this is relying on direct DOM access, do not use
 * @param children do not use
 * @param domain do not use
 * @param axisId do not use
 * @param axisType do not use
 * @param specifiedTicks do not use
 * @returns do not use
 */
export const detectReferenceElementsDomain = (
  children: ReactNode[],
  domain: number[],
  axisId: string,
  axisType: string,
  specifiedTicks?: any[],
) => {
  const lines = findAllByType(children, ReferenceLine);
  const dots = findAllByType(children, ReferenceDot);
  const elements = [...lines, ...dots];
  const areas = findAllByType(children, ReferenceArea);
  const idKey = `${axisType}Id`;
  const valueKey = axisType[0];
  let finalDomain = domain;

  if (elements.length) {
    finalDomain = elements.reduce((result: number[], el: any) => {
      const ifOverflow = el.props?.ifOverflow;
      if (el.props[idKey] === axisId && ifOverflow === 'extendDomain' && isNumber(el.props[valueKey])) {
        const value = el.props[valueKey];

        return [Math.min(result[0], value), Math.max(result[1], value)];
      }
      return result;
    }, finalDomain);
  }

  if (areas.length) {
    const key1 = `${valueKey}1`;
    const key2 = `${valueKey}2`;

    finalDomain = areas.reduce((result: number[], el: any) => {
      const ifOverflow = el.props?.ifOverflow;
      if (
        el.props[idKey] === axisId &&
        ifOverflow === 'extendDomain' &&
        isNumber(el.props[key1]) &&
        isNumber(el.props[key2])
      ) {
        const value1 = el.props[key1];
        const value2 = el.props[key2];

        return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
      }
      return result;
    }, finalDomain);
  }

  if (specifiedTicks && specifiedTicks.length) {
    finalDomain = specifiedTicks.reduce((result, tick) => {
      if (isNumber(tick)) {
        return [Math.min(result[0], tick), Math.max(result[1], tick)];
      }

      return result;
    }, finalDomain);
  }

  return finalDomain;
};

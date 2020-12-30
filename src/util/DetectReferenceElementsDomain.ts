import { ReactNode } from 'react';
import { ReferenceDot } from '../cartesian/ReferenceDot';
import { ReferenceLine } from '../cartesian/ReferenceLine';
import { ReferenceArea } from '../cartesian/ReferenceArea';
import { ifOverflowMatches } from './IfOverflowMatches';
import { findAllByType } from './ReactUtils';
import { isNumber } from './DataUtils';

export const detectReferenceElementsDomain = (
  children: ReactNode[],
  domain: number[],
  axisId: string,
  axisType: string,
  specifiedTicks?: any[],
) => {
  const lines = findAllByType(children, ReferenceLine.displayName);
  const dots = findAllByType(children, ReferenceDot.displayName);
  const elements = lines.concat(dots);
  const areas = findAllByType(children, ReferenceArea.displayName);
  const idKey = `${axisType}Id`;
  const valueKey = axisType[0];
  let finalDomain = domain;

  if (elements.length) {
    finalDomain = elements.reduce((result: number[], el: any) => {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, 'extendDomain') && isNumber(el.props[valueKey])) {
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
      if (
        el.props[idKey] === axisId &&
        ifOverflowMatches(el.props, 'extendDomain') &&
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

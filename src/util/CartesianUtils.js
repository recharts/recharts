import { findAllByType } from './ReactUtils';
import ReferenceDot from '../cartesian/ReferenceDot';
import ReferenceLine from '../cartesian/ReferenceLine';
import _ from 'lodash';

export const detectReferenceElementsDomain = (children, domain, axisId, axisType) => {
  const lines = findAllByType(children, ReferenceLine);
  const dots = findAllByType(children, ReferenceDot);
  const elements = lines.concat(dots);
  const idKey = axisType + 'Id';
  const valueKey = axisType[0];

  return elements.reduce((result, el) => {
    if (el.props[idKey] === axisId && el.props.alwaysShow &&
      _.isNumber(el.props[valueKey])) {
      const value = el.props[valueKey];

      return [Math.min(result[0], value), Math.max(result[1], value)];
    }
    return result;
  }, domain);
}

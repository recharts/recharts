import * as _ from 'lodash'

export function changeNumberOfData(data: any): any {
  if (Array.isArray(data)) {
    return data.map(changeNumberOfData);
  }

  if (typeof data === 'object') {
    return _.mapValues(data, val => {
      if (typeof val === 'number') {
        return Math.floor(val * Math.random() * 2);
      }

      return changeNumberOfData(val);
    });
  }

  return data;
}

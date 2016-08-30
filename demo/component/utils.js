/*
 * change number in data
 */

const randomChangeArray = (array) => {

};

export function changeNumberOfData(data) {
  if (Array.isArray(data)) {
    return data.map(changeNumberOfData);
  }

  if (typeof data === 'object') {
    return _.mapValues(data, val => {
      if (typeof val === 'number') {
        return parseInt(val * Math.random() * 2, 10);
      }

      return changeNumberOfData(val);
    });
  }

  return data;
}

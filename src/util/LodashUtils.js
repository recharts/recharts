'use strict';

const numberClass = '[object Number]';
const stringClass = '[object String]';
const arrayClass = '[object Array]';

let idStart = 0x0907;

/**
* 判断是否是数组
*/
const isArray = Array.isArray || function(value) {
  return Object.prototype.toString.call(value) == arrayClass;
};
/**
 * 判断是否是字符串
 */
const isString = (value) => {
  return typeof value === 'string' ||
    value && typeof value === 'object' && Object.prototype.toString.call(value) === stringClass || false;
};
/**
 * 判断是否是数值类型
 * @return {Boolean}
 */
const isNumber = (value) => {
  return typeof value === 'number' ||
          value && typeof value === 'object' && Object.prototype.toString.call(value) === numberClass || false;
};
/**
 * 获取一个惟一的id
 * @param {String} prefix 前缀
 * @return {String}
 */
const getUniqueId = (prefix) => {
  return (prefix || '_') + (idStart++);
};
/**
 * 获取数值类型的数组的范围
 * @param  {Array} ary 数组
 * @return {Object}     {min, max}
 */
const extent = (ary) => {
  return ary.reduce((result, entry) => {
    let min = Math.min.apply(null, entry);
    let max = Math.max.apply(null, entry);

    return {
      min: Math.min(min, result.min),
      max: Math.max(max, result.max)
    };
  }, {min: Infinity, max: -Infinity})
};

const range = (from, to) => {
  let result = [];
  let n = from;

  while (n < to) {
    result.push(n);
    n += 1;
  }

  return result;
};

/**
 * 获取百分比宽度
 * @param {Number} totalValue 100%所对应的值
 * @param {Number|String} percent 百分比
 * @return {Number}
 */
const getPercentValue = (totalValue, percent) => {
  let str = '' + percent;
  let index = str.indexOf('%');
  let value;

  if (index > 0) {
    value = totalValue * parseFloat(str.slice(0, index)) / 100;
  } else {
    value = parseFloat(percent);
  }

  if (isNaN(value) || value > totalValue) {
    value = totalValue
  }

  return value;
};
const getElementOfObject = (obj) => {
  const keys = Object.keys(obj);

  return keys.length ? obj[keys[0]] : null;
};


export default {
  isArray, isNumber, isString,

  extent,

  getUniqueId,

  range
};

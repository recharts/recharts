const numberClass = '[object Number]';
const stringClass = '[object String]';
const arrayClass = '[object Array]';

let idStart = 0x0907;

const isArray = Array.isArray || (value => {
  return Object.prototype.toString.call(value) === arrayClass;
});

const isString = (value) => {
  return typeof value === 'string' ||
    value && typeof value === 'object' && Object.prototype.toString.call(value) === stringClass || false;
};

const isNumber = (value) => {
  return value === +value;
};

const isFunction = (value) => {
  return typeof value === 'function';
};

const getUniqueId = (prefix) => {
  return (prefix || '_') + (idStart++);
};

const extent = (ary) => {
  return ary.reduce((result, entry) => {
    const min = Math.min.apply(null, entry);
    const max = Math.max.apply(null, entry);

    return {
      min: Math.min(min, result.min),
      max: Math.max(max, result.max),
    };
  }, { min: Infinity, max: -Infinity });
};
/**
 * Generate a array of number which is greater than or equal to from and sma than less than to
 * @param  {Number} from Start value
 * @param  {Number} to   End value
 * @return {Array}       An array
 */
const range = (from, to) => {
  const result = [];
  let n = from;

  while (n < to) {
    result.push(n);
    n += 1;
  }

  return result;
};

/**
 * Get percent value of a total value
 * @param {Number|String} percent A percent
 * @param {Number} totalValue     Total value
 * @return {Number} value
 */
const getPercentValue = (percent, totalValue) => {
  const str = '' + percent;
  const index = str.indexOf('%');
  let value;

  if (index > 0) {
    value = totalValue * parseFloat(str.slice(0, index)) / 100;
  } else if (percent === +percent) {
    value = percent;
  }

  if (isNaN(value) || value > totalValue) {
    value = totalValue;
  }

  return value;
};
/**
 * Get all values of an object
 * @param  {Object} obj An object
 * @return {Array}      Array
 */
const getElementOfObject = (obj) => {
  const keys = Object.keys(obj);

  return keys.length ? obj[keys[0]] : null;
};

const maxBy = (fn, a, b) => {
  return fn(a) > fn(b) ? a : b;
};
/**
 * Pad symbol
 * @param  {number} num    A number
 * @param  {string} symbol pad sring
 * @return {array}  the value after pad
 */
const pad = (num, symbol) => {
  let total = '';
  let temp = num;

  while (temp > 0) {
    total += symbol;
    temp--;
  }

  return total;
};
/**
 * Covert number to a string which has a fixed number of bits
 * @param  {Object} num    A number
 * @param  {Object} fixed  A number of bits
 * @return {String}        result
 */
const toFixed = (num, fixed = 0) => {
  const fixedNum = num.toFixed(fixed + 1);

  const sNum = fixedNum + '';
  const sep = sNum.split('.');
  const pint = parseInt(sep[0], 10) || 0;
  let dec = '0';
  let res = '';

  if (sep[1] !== undefined && parseInt(sep[1], 10) !== 0) {
    dec = sep[1];
  }

  if (parseInt(dec, 10) !== 0) {
    const fDec = parseFloat('0.' + dec);
    const fixedDec = Math.floor(fDec * Math.pow(10, fixed)) + '';
    const len = fixedDec.length;

    if (fixed !== 0) {
      if (len === (fixed + 1)) {
        res = [pint + 1, pad(fixed, '0')].join('.');
      } else if (len < fixed) {
        res = [pint, pad(fixed - len, '0') + fixedDec].join('.');
      } else {
        res = [pint, fixedDec.substring(0, fixed)].join('.');
      }
    } else {
      res = pint;
    }
  } else {
    if (fixed !== 0 && pint !== 0) {
      res = [pint, pad(fixed, '0')].join('.');
    } else {
      res = pint;
    }
  }

  return (res + '');
};
/**
 * convert a number to percentage
 * @param  {Number} num  A float number
 * @param  {String} unit The unit of percentage
 * @param  {Number} max  The maximum value of percentage
 * @return {String}      percentage
 */
const toPercentage = (num, unit = '%', max = 99999) => {
  if (num !== +num) {
    return '-';
  }

  let res = num || '';

  const fixedNum = toFixed(num * 100, 2);
  const fNum = parseFloat(fixedNum);
  const iNum = parseInt(fixedNum, 10);

  // if (fNum > 100000) {
  if (fNum > max) {
    res = '>' + max;
  } else {
    if (fNum === iNum) {
      res = iNum;
    } else {
      res = fixedNum;
    }
  }

  res += unit;

  return res;
};


export default {
  isArray, isNumber, isString, isFunction,

  extent, maxBy,

  getUniqueId,

  range,

  getElementOfObject,

  getPercentValue,

  toFixed, toPercentage,
};

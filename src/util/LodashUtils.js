const numberClass = '[object Number]';
const stringClass = '[object String]';
const arrayClass = '[object Array]';

let idStart = 0x0907;

/**
* 判断是否是数组
* @param {Any} value 待判断的值
* @return {Boolean} 是否为数组
*/
const isArray = Array.isArray || (value => {
  return Object.prototype.toString.call(value) === arrayClass;
});
/**
 * 判断是否是字符串
 * @param {Any} value 待判断的值
 * @return {Boolean} 是否为字符串
 */
const isString = (value) => {
  return typeof value === 'string' ||
    value && typeof value === 'object' && Object.prototype.toString.call(value) === stringClass || false;
};
/**
 * 判断是否是数值类型
 * @param {Any} value 待判断的值
 * @return {Boolean} 是否为数值类型
 */
const isNumber = (value) => {
  return typeof value === 'number' ||
          value && typeof value === 'object' && Object.prototype.toString.call(value) === numberClass || false;
};
/**
 * 获取一个惟一的id
 * @param {String} prefix 前缀
 * @return {String} id
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
    const min = Math.min.apply(null, entry);
    const max = Math.max.apply(null, entry);

    return {
      min: Math.min(min, result.min),
      max: Math.max(max, result.max),
    };
  }, {min: Infinity, max: -Infinity});
};
/**
 * 生成从from到to（不包含to）的一个数组
 * @param  {Number} from 开始值
 * @param  {Number} to   结束值
 * @return {Array}      数组
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
 * 获取百分比宽度
 * @param {Number|String} percent 百分比
 * @param {Number} totalValue 100%所对应的值
 * @return {Number} 具体的数值
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
 * 获取一个对象的所有元素
 * @param  {Object} obj 输入对象
 * @return {Array}     所有的元素集合
 */
const getElementOfObject = (obj) => {
  const keys = Object.keys(obj);

  return keys.length ? obj[keys[0]] : null;
};

const maxBy = (fn, a, b) => {
  return fn(a) > fn(b) ? a : b;
};
/**
 * 转化成特定的位数
 * @param  {Object} num    数值
 * @param  {Object} fixed  固定的位数
 * @return {String}        转化后的值
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
      // 对数据做舍零处理
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
      // res = fDec >= 0.5 ? (pint + 1) : pint;
      // 不做 round，全部舍去
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
 * 转化为百分比
 * @param  {Number} num  小数
 * @param  {String} unit 单位
 * @param  {Number} max  最大的百分比
 * @return {String}      百分比
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
  isArray, isNumber, isString,

  extent, maxBy,

  getUniqueId,

  range,

  getElementOfObject,

  getPercentValue,

  toFixed, toPercentage,
};

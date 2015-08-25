'use strict';

const numberClass = '[object Number]';
const stringClass = '[object String]';

let idStart = 0x0907;

export default {
  /**
   * 判断是否是字符串
   */
  isString (value) {
    return typeof value === 'string' ||
      value && typeof value === 'object' && Object.prototype.toString.call(value) === stringClass || false;
  },
  /**
   * 判断是否是数值类型
   * @return {Boolean}
   */
  isNumber (value) {
    return typeof value === 'number' ||
            value && typeof value === 'object' && Object.prototype.toString.call(value) === numberClass || false;
  },
  /**
   * 获取一个惟一的id
   * @param {String} prefix 前缀
   * @return {String}
   */
  getUniqueId (prefix) {
    return (prefix || '_') + (idStart++);
  }

};

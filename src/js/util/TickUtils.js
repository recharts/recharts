import R from 'ramda';
/**
 * 判断数据是否为浮点类型
 *
 * @param {Number} num 输入值
 * @return {Boolean} 是否是浮点类型
 */
function isFloat(num) {
  return /^([+-]?)\d*\.\d+$/.test(num);
}
/**
 * 按照固定的步长获取[start, end)这个区间的数据
 * 并且需要处理js计算精度的问题
 *
 * @param  {Number} start 起点
 * @param  {Number} end   终点，不包含该值
 * @param  {Number} step  步长
 * @return {Array}        若干数值
 */
function rangeStep(start, end, step) {
  let num = start;
  let result = [];

  while (num < end) {
    result.push(num);

    num = num + step;
  }

  return result;
}
/**
 * 获取数值的位数
 * 其中绝对值属于区间[0.1, 1)， 得到的值为0
 * 绝对值属于区间[0.01, 0.1)，得到的位数为 -1
 * 绝对值属于区间[0.001, 0.01)，得到的位数为 -2
 *
 * @param  {Number} value 数值
 * @return {Integer} 位数
 */
function getDigitCount(value) {
  const abs = Math.abs(value);
  let result;

  if (value === 0) {
    result = 1;
  } else if (abs < 1) {
    result = Math.floor(Math.log(abs) / Math.log(10)) + 1;
  } else {
    const str = '' + value;
    const ary = str.split('.');

    result = ary[0].length;
  }

  return result;
}
/**
 * 判断是否为合法的区间，并返回处理后的合法区间
 *
 * @param  {Number} min       最小值
 * @param  {Number} max       最大值
 * @return {Array} 最小最大值数组
 */
function getValidInterval([min, max]) {
  let [validMin, validMax] = [min, max];

  // 交换最大值和最小值
  if (min > max) {
    [validMin, validMax] = [max, min];
  }

  return [validMin, validMax];
}

/**
 * 计算可读性高的刻度间距，如 10, 20
 *
 * @param  {Number}  roughStep 计算的原始间隔
 * @param  {Integer} amendIndex 修正系数
 * @return {Number}  刻度间距
 */
function getFormatStep(roughStep, amendIndex) {
  if (roughStep <= 0) { return 0; }

  const digitCount = getDigitCount(roughStep);
  // 间隔数与上一个数量级的占比
  const stepRatio = roughStep / Math.pow(10, digitCount);

  // 整数与浮点数相乘，需要处理JS精度问题
  const amendStepRatio = (Math.ceil(stepRatio / 0.05) + amendIndex) * 0.05;

  const formatStep = amendStepRatio * Math.pow(10, digitCount);

  return formatStep;
}

/**
 * 获取最大值和最小值相等的区间的刻度
 *
 * @param  {Number}  value     最大值也是最小值
 * @param  {Integer} tickCount 刻度数
 * @return {Array}   刻度组
 */
function getTickOfSingleValue(value, tickCount) {
  const isFlt = isFloat(value);
  let step = 1;
  // 计算刻度的一个中间值
  let middle = value;

  if (isFlt) {
    const absVal = Math.abs(value);

    if (absVal < 1) {
      // 小于1的浮点数，刻度的间隔也计算得到一个浮点数
      step = Math.pow(10, getDigitCount(value) - 1);

      middle = Math.floor(value / step) * step;
    } else if (absVal > 1) {
      // 大于1的浮点数，向下取最接近的整数作为一个刻度
      middle = Math.floor(value);
    }
  }

  const middleIndex = Math.floor((tickCount - 1) / 2);

  const fn = R.compose(
    R.map(n => { return middle + (n - middleIndex) * step; }),
    R.range
  );

  return fn(0, tickCount);
}

/**
 * 计算步长
 *
 * @param  {Number}  min        最小值
 * @param  {Number}  max        最大值
 * @param  {Integer} tickCount  刻度数
 * @param  {Number}  amendIndex 修正系数
 * @return {Object}  步长相关对象
 */
function calculateStep(min, max, tickCount, amendIndex = 0) {
  // 获取间隔步长
  const step = getFormatStep((max - min) / (tickCount - 1), amendIndex);
  // 计算刻度的一个中间值
  let middle;

  // 当0属于取值范围时
  if (min <= 0 && max >= 0) {
    middle = 0;
  } else {
    middle = (min + max) / 2;
    middle = middle - middle % step;
  }

  let belowCount = Math.ceil((middle - min) / step);
  let upCount =  Math.ceil((max - middle) / step);
  const scaleCount = belowCount + upCount + 1;

  if (scaleCount > tickCount) {
    // 当计算得到的刻度数大于需要的刻度数时，将步长修正的大一些
    return calculateStep(min, max, tickCount, amendIndex + 1);
  } else if (scaleCount < tickCount) {
    // 当计算得到的刻度数小于需要的刻度数时，人工的增加一些刻度
    upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }

  return {
    step: step,
    tickMin: middle - belowCount * step,
    tickMax: middle + upCount * step
  };
}
/**
 * 获取刻度
 *
 * @param  {Number}  min        最小值
 * @param  {Number}  max        最大值
 * @param  {Integer} tickCount  刻度数
 * @return {Array}   取刻度数组
 */
function getTickValues([min, max], tickCount = 6) {
  // 刻度的数量不能小于1
  const count = Math.max(tickCount, 2);
  const [cormin, cormax] = getValidInterval([min, max]);

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount);
  }

  // 获取间隔步长
  const {step, tickMin, tickMax} = calculateStep(cormin, cormax, count);

  const values = rangeStep(tickMin, tickMax + 0.1 * step, step);

  return min > max ? R.reverse(values) : values;
}

export default {
  getTickValues
};

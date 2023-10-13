import reduceCSSCalc from 'reduce-css-calc';
import { log } from 'console';

const MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
const ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
const CSS_LENGTH_UNIT_REGEX = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/;
const NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;

const CONVERSION_RATES: Record<string, number> = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1,
} as const;

const FIXED_CSS_LENGTH_UNITS: Array<keyof typeof CONVERSION_RATES> = Object.keys(CONVERSION_RATES);
const STR_NAN = 'NaN';

function convertToPx(value: number, unit: string): number {
  return value * CONVERSION_RATES[unit];
}

class DecimalCSS {
  static parse(str: string) {
    const [, numStr, unit] = NUM_SPLIT_REGEX.exec(str) ?? [];

    return new DecimalCSS(parseFloat(numStr), unit ?? '');
  }

  constructor(public num: number, public unit: string) {
    this.num = num;
    this.unit = unit;

    if (Number.isNaN(num)) {
      this.unit = '';
    }

    if (unit !== '' && !CSS_LENGTH_UNIT_REGEX.test(unit)) {
      this.num = NaN;
      this.unit = '';
    }

    if (FIXED_CSS_LENGTH_UNITS.includes(unit)) {
      this.num = convertToPx(num, unit);
      this.unit = 'px';
    }
  }

  add(other: DecimalCSS) {
    if (this.unit !== other.unit) {
      return new DecimalCSS(NaN, '');
    }

    return new DecimalCSS(this.num + other.num, this.unit);
  }

  subtract(other: DecimalCSS) {
    if (this.unit !== other.unit) {
      return new DecimalCSS(NaN, '');
    }

    return new DecimalCSS(this.num - other.num, this.unit);
  }

  multiply(other: DecimalCSS) {
    if (this.unit !== '' && other.unit !== '' && this.unit !== other.unit) {
      return new DecimalCSS(NaN, '');
    }

    return new DecimalCSS(this.num * other.num, this.unit || other.unit);
  }

  divide(other: DecimalCSS) {
    if (this.unit !== '' && other.unit !== '' && this.unit !== other.unit) {
      return new DecimalCSS(NaN, '');
    }

    return new DecimalCSS(this.num / other.num, this.unit || other.unit);
  }

  toString() {
    return `${this.num}${this.unit}`;
  }

  isNaN() {
    return Number.isNaN(this.num);
  }
}

function calculateArithmetic(expr: string): string {
  if (expr.includes(STR_NAN)) {
    return STR_NAN;
  }

  let newExpr = expr;
  while (newExpr.includes('*') || newExpr.includes('/')) {
    const [, leftOperand, operator, rightOperand] = MULTIPLY_OR_DIVIDE_REGEX.exec(newExpr) ?? [];
    const lTs = DecimalCSS.parse(leftOperand ?? '');
    const rTs = DecimalCSS.parse(rightOperand ?? '');
    const result = operator === '*' ? lTs.multiply(rTs) : lTs.divide(rTs);
    if (result.isNaN()) {
      return STR_NAN;
    }
    newExpr = newExpr.replace(MULTIPLY_OR_DIVIDE_REGEX, result.toString());
  }

  while (newExpr.includes('+') || /.-\d+(?:\.\d+)?/.test(newExpr)) {
    const [, leftOperand, operator, rightOperand] = ADD_OR_SUBTRACT_REGEX.exec(newExpr) ?? [];
    const lTs = DecimalCSS.parse(leftOperand ?? '');
    const rTs = DecimalCSS.parse(rightOperand ?? '');
    const result = operator === '+' ? lTs.add(rTs) : lTs.subtract(rTs);
    if (result.isNaN()) {
      return STR_NAN;
    }
    newExpr = newExpr.replace(ADD_OR_SUBTRACT_REGEX, result.toString());
  }

  return newExpr;
}

const PARENTHESES_REGEX = /\(([^()]*)\)/;

function calculateParentheses(expr: string): string {
  let newExpr = expr;
  while (newExpr.includes('(')) {
    const [, parentheticalExpression] = PARENTHESES_REGEX.exec(newExpr);
    newExpr = newExpr.replace(PARENTHESES_REGEX, calculateArithmetic(parentheticalExpression));
  }

  return newExpr;
}

function evaluateExpression(expression: string): string {
  let newExpr = expression.replace(/\s+/g, '');
  newExpr = calculateParentheses(newExpr);
  newExpr = calculateArithmetic(newExpr);

  return newExpr;
}

function safeEvaluateExpression(expression: string): string {
  try {
    return evaluateExpression(expression);
  } catch (e) {
    // error(e);
    return STR_NAN;
  }
}

function newReduceCSSCalc(expression: string): string {
  const result = safeEvaluateExpression(expression.slice(5, -1));

  if (result === STR_NAN) {
    // notify the user
    return '';
  }

  return result;
}

describe('number calculate', () => {
  const evaluateExpressionFloat = (str: string) => parseFloat(safeEvaluateExpression(str));
  it('without parentheses, simple', () => {
    expect(evaluateExpressionFloat('1 + 2 + 3')).toEqual(6);
    expect(evaluateExpressionFloat('1 - 2 - 3')).toEqual(-4);
    expect(evaluateExpressionFloat('1 * 2 * 3')).toEqual(6);
    expect(evaluateExpressionFloat('1 / 2 / 3')).toBeCloseTo(0.16666666, 5);

    expect(evaluateExpressionFloat('1.1 + 2.2 + 3.3')).toEqual(6.6);
    expect(evaluateExpressionFloat('1.1 - 2.2 - 3.3')).toEqual(-4.4);
    expect(evaluateExpressionFloat('1.1 * 2.2 * 3.3')).toBeCloseTo(7.986, 5);
    expect(evaluateExpressionFloat('1.1 / 2.2 / 3.3')).toBeCloseTo(0.15151515, 5);

    expect(evaluateExpressionFloat('1.111 + 2 + 3.333')).toEqual(6.444);
    expect(evaluateExpressionFloat('1.111 - 2 - 3.333')).toEqual(-4.222);
    expect(evaluateExpressionFloat('1.111 * 2 * 3.333')).toBeCloseTo(7.405926, 5);
    expect(evaluateExpressionFloat('1.111 / 2 / 3.333')).toBeCloseTo(0.16666666, 5);

    expect(evaluateExpressionFloat('zxcvdf + asdqwe')).toEqual(NaN);
    expect(evaluateExpressionFloat('zxcvdf - asdqwe')).toEqual(NaN);
    expect(evaluateExpressionFloat('zxcvdf * asdqwe')).toEqual(NaN);
    expect(evaluateExpressionFloat('zxcvdf / asdqwe')).toEqual(NaN);
  });

  it('without parentheses, composite', () => {
    expect(evaluateExpressionFloat('1 + 2 - 3 / 4 * 5')).toEqual(-0.75);
    expect(evaluateExpressionFloat('1 * 2 + 3 - 4 / 5')).toEqual(4.2);
    expect(evaluateExpressionFloat('1 / 2 * 3 + 4 - 5')).toEqual(0.5);
    expect(evaluateExpressionFloat('1 - 2 / 3 * 4 + 5')).toBeCloseTo(3.3333333, 5);

    expect(evaluateExpressionFloat('1.1 + 2.2 - 3.3 / 4.4 * 5.5')).toBeCloseTo(-0.825, 5);
    expect(evaluateExpressionFloat('1.1 * 2.2 + 3.3 - 4.4 / 5.5')).toBeCloseTo(4.92, 5);
    expect(evaluateExpressionFloat('1.1 / 2.2 * 3.3 + 4.4 - 5.5')).toBeCloseTo(0.55, 5);
    expect(evaluateExpressionFloat('1.1 - 2.2 / 3.3 * 4.4 + 5.5')).toBeCloseTo(3.6666666, 5);

    expect(evaluateExpressionFloat('1.111 + 2.222 - 3.333 / 4.444 * 5.555')).toBeCloseTo(-0.83325, 5);
    expect(evaluateExpressionFloat('1.111 * 2.222 + 3.333 - 4.444 / 5.555')).toBeCloseTo(5.001642, 5);
    expect(evaluateExpressionFloat('1.111 / 2.222 * 3.333 + 4.444 - 5.555')).toBeCloseTo(0.5555, 5);
    expect(evaluateExpressionFloat('1.111 - 2.222 / 3.333 * 4.444 + 5.555')).toBeCloseTo(3.70333, 5);

    expect(evaluateExpressionFloat('1.3 + asdqwe - 1 / qwea * zxcv')).toEqual(NaN);
    expect(evaluateExpressionFloat('1.3 * asdqwe + 1 - qwea / zxcv')).toEqual(NaN);
    expect(evaluateExpressionFloat('1.3 / asdqwe * 1 + qwea - zxcv')).toEqual(NaN);
    expect(evaluateExpressionFloat('1.3 - asdqwe / 1 * qwea + zxcv')).toEqual(NaN);
  });

  it('with parentheses', () => {
    expect(evaluateExpressionFloat('(2 + 3) * 5')).toEqual(25);
    expect(evaluateExpressionFloat('6 / (2 + 1)')).toEqual(2);
    expect(evaluateExpressionFloat('4 * (6 - (3 + 2))')).toEqual(4);
    expect(evaluateExpressionFloat('5 + ((3 - 1) * (6 / 2))')).toEqual(11);
    expect(evaluateExpressionFloat('((10 + 5) / 3) * (2 - 1)')).toEqual(5);
    expect(evaluateExpressionFloat('3 + 4 * (2 / (1 - 5))')).toEqual(1);
    expect(evaluateExpressionFloat('((3 + 2) * 5) / (4 - 1)')).toBeCloseTo(8.333333, 5);

    expect(evaluateExpressionFloat('(2.1 + 3.1) * 5.1')).toEqual(26.52);
    expect(evaluateExpressionFloat('6.11 / (2.11 + 1.11)')).toBeCloseTo(1.89751552, 5);
    expect(evaluateExpressionFloat('4.111 * (6.111 - (3.111 + 2.111))')).toBeCloseTo(3.654679, 5);
    expect(evaluateExpressionFloat('5.241 + ((3.1 - 1.9) * (6.0 / 2.00))')).toBeCloseTo(8.841, 5);
    expect(evaluateExpressionFloat('((10.00001 + 5.1) / 3) * (2 - 1.232)')).toBeCloseTo(3.865602, 5);
    expect(evaluateExpressionFloat('3 + 4 * (2.123 / (1 - 5))')).toBeCloseTo(0.8769999, 5);
    expect(evaluateExpressionFloat('((3 + 2.3) * 5.3) / (4 - 1.3)')).toBeCloseTo(10.403703, 5);

    expect(evaluateExpressionFloat('((asd + 2.3) * 5.d) / (4 - d.3)')).toEqual(NaN);
    expect(evaluateExpressionFloat('3 + 4 * (2.123 / (1.d - 5))')).toEqual(NaN);
  });
});

const cssLengthUnits = ['', 'ch', 'em', 'rem', 'vh', 'vw', 'px', '%'];
const cssLengthPair = cssLengthUnits.reduce((result, unit1, index1) => {
  cssLengthUnits.slice(index1).forEach(unit2 => {
    result.push([unit1, unit2]);
  });
  return result;
}, []);

describe('reduce-css-calc', () => {
  cssLengthPair.forEach(([unit1, unit2]) => {
    [
      { capHeight: `123${unit1}`, lineHeight: `456${unit2}`, wordsByLines: 3 },
      { capHeight: `0.123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 3 },
      { capHeight: `0.123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 0 },
      { capHeight: `123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 0 },
    ].forEach(({ capHeight, lineHeight, wordsByLines }) => {
      it(`${capHeight} ${lineHeight} ${wordsByLines}`, () => {
        [
          `calc(${capHeight})`,
          `calc(${(wordsByLines - 1) / 2} * -${lineHeight} + (${capHeight} / 2))`,
          `calc(${wordsByLines - 1} * -${lineHeight})`,
        ].forEach(calcString => {
          const prevCalc = reduceCSSCalc(calcString);
          const newCalc = newReduceCSSCalc(calcString);

          if (prevCalc.includes('calc') || prevCalc.includes(' ')) {
            log('invalid');
          } else {
            expect(prevCalc).toEqual(newCalc);
          }
        });
      });
    });
  });
});

describe('benchmark', () => {
  it('reduce-css-calc', () => {
    const start = Date.now();
    cssLengthPair.forEach(([unit1, unit2]) => {
      [
        { capHeight: `123${unit1}`, lineHeight: `456${unit2}`, wordsByLines: 3 },
        { capHeight: `0.123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 3 },
        { capHeight: `0.123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 0 },
        { capHeight: `123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 0 },
      ].forEach(({ capHeight, lineHeight, wordsByLines }) => {
        [
          `calc(${capHeight})`,
          `calc(${(wordsByLines - 1) / 2} * -${lineHeight} + (${capHeight} / 2))`,
          `calc(${wordsByLines - 1} * -${lineHeight})`,
        ].forEach(calcString => {
          for (let i = 0; i < 1000; i++) {
            reduceCSSCalc(calcString);
          }
        });
      });
    });

    log(`reduce-css-calc: ${Date.now() - start}`);
  });
  it('new reduce', () => {
    const start = Date.now();
    cssLengthPair.forEach(([unit1, unit2]) => {
      [
        { capHeight: `123${unit1}`, lineHeight: `456${unit2}`, wordsByLines: 3 },
        { capHeight: `0.123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 3 },
        { capHeight: `0.123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 0 },
        { capHeight: `123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 0 },
      ].forEach(({ capHeight, lineHeight, wordsByLines }) => {
        [
          `calc(${capHeight})`,
          `calc(${(wordsByLines - 1) / 2} * -${lineHeight} + (${capHeight} / 2))`,
          `calc(${wordsByLines - 1} * -${lineHeight})`,
        ].forEach(calcString => {
          for (let i = 0; i < 1000; i++) {
            newReduceCSSCalc(calcString);
          }
        });
      });
    });

    log(`new reduce-css-calc: ${Date.now() - start}`);
  });
});

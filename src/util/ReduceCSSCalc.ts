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

export function safeEvaluateExpression(expression: string): string {
  try {
    return evaluateExpression(expression);
  } catch (e) {
    /* istanbul ignore next */
    return STR_NAN;
  }
}

export function reduceCSSCalc(expression: string): string {
  const result = safeEvaluateExpression(expression.slice(5, -1));

  if (result === STR_NAN) {
    // notify the user
    return '';
  }

  return result;
}

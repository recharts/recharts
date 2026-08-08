import { isNan } from './DataUtils';

const MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
const ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
const CSS_LENGTH_UNIT_REGEX = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/;
const NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;

type SupportedUnits = 'cm' | 'mm' | 'pt' | 'pc' | 'in' | 'Q' | 'px';

const CONVERSION_RATES: Record<SupportedUnits, number> = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1,
};

const FIXED_CSS_LENGTH_UNITS: ReadonlyArray<SupportedUnits> = ['cm', 'mm', 'pt', 'pc', 'in', 'Q', 'px'];

function isSupportedUnit(unit: string): unit is SupportedUnits {
  return FIXED_CSS_LENGTH_UNITS.includes(unit as SupportedUnits);
}

const STR_NAN = 'NaN';

function convertToPx(value: number, unit: SupportedUnits): number {
  return value * CONVERSION_RATES[unit];
}

class DecimalCSS {
  static parse(str: string) {
    const [, numStr, unit] = NUM_SPLIT_REGEX.exec(str) ?? [];

    if (numStr == null) {
      return DecimalCSS.NaN;
    }

    return new DecimalCSS(parseFloat(numStr), unit ?? '');
  }

  static NaN = new DecimalCSS(NaN, '');

  constructor(
    public num: number,
    public unit: string,
  ) {
    this.num = num;
    this.unit = unit;

    if (isNan(num)) {
      this.unit = '';
    }

    if (unit !== '' && !CSS_LENGTH_UNIT_REGEX.test(unit)) {
      this.num = NaN;
      this.unit = '';
    }

    if (isSupportedUnit(unit)) {
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
    return isNan(this.num);
  }
}

function calculateArithmetic(expr: string | undefined): string {
  if (expr == null || expr.includes(STR_NAN)) {
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
  let match: ReturnType<typeof RegExp.prototype.exec> | null;
  // eslint-disable-next-line no-cond-assign
  while ((match = PARENTHESES_REGEX.exec(newExpr)) != null) {
    const [, parentheticalExpression] = match;
    /*
     * Use a replacer function, not a replacement string. In a replacement string
     * `$&`, `` $` ``, `$'`, `$1` and `$$` are substitution patterns.
     * calculateArithmetic returns its input unchanged when the input has no
     * arithmetic operator, so `($&)` expanded to `($&)` and the loop never advanced.
     * A replacer function returns its value literally.
     */
    const replacement = calculateArithmetic(parentheticalExpression);
    newExpr = newExpr.replace(PARENTHESES_REGEX, () => replacement);
  }

  return newExpr;
}

/*
 * Guard against pathological input. A long run of digits followed by an
 * arithmetic operator with no valid right-hand operand makes the operand
 * regexes above backtrack quadratically (a ReDoS), which can freeze the
 * rendering thread. Legitimate CSS length expressions used for text layout
 * are only a few dozen characters, so anything longer is treated as invalid.
 */
const MAX_EXPRESSION_LENGTH = 1000;

function evaluateExpression(expression: string): string {
  if (expression.length > MAX_EXPRESSION_LENGTH) {
    return STR_NAN;
  }

  let newExpr = expression.replace(/\s+/g, '');
  newExpr = calculateParentheses(newExpr);
  newExpr = calculateArithmetic(newExpr);

  return newExpr;
}

export function safeEvaluateExpression(expression: string): string {
  try {
    return evaluateExpression(expression);
  } catch {
    return STR_NAN;
  }
}

export function reduceCSSCalc(expression: string): string {
  const result = safeEvaluateExpression(expression.slice(5, -1));

  if (result === STR_NAN) {
    return '';
  }

  return result;
}

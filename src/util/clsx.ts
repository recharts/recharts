/*!
 * Adapted from clsx v2.1.1.
 *
 * MIT License
 *
 * Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
export type ClassValue = ClassArray | ClassDictionary | string | number | bigint | null | boolean | undefined;
export type ClassDictionary = Record<string, unknown>;
export type ClassArray = ClassValue[];

function toClassName(value: ClassValue): string {
  if (typeof value === 'string' || typeof value === 'number') return String(value);

  let result = '';
  if (Array.isArray(value)) {
    const { length } = value;
    for (let index = 0; index < length; index++) {
      if (value[index]) {
        const className = toClassName(value[index]);
        if (className) result = result ? `${result} ${className}` : className;
      }
    }
  } else if (value != null && typeof value === 'object') {
    // clsx includes inherited enumerable keys, not just own keys.
    for (const key in value) {
      if (value[key]) result = result ? `${result} ${key}` : key;
    }
  }
  return result;
}

export function clsx(...inputs: ClassValue[]): string {
  let result = '';
  for (const input of inputs) {
    if (input) {
      const className = toClassName(input);
      if (className) result = result ? `${result} ${className}` : className;
    }
  }
  return result;
}

import { describe, it, expect } from 'vitest';
import { reduxDevtoolsJsonStringifyReplacer } from '../../src/state/reduxDevtoolsJsonStringifyReplacer';

describe('reduxDevtoolsJsonStringifyReplacer', () => {
  it('should return the original value if the value is not an object', () => {
    expect(reduxDevtoolsJsonStringifyReplacer('', 'foo')).toBe('foo');
  });

  it('should return string if the value is an HTML element', () => {
    const p = document.createElement('p');
    p.classList.add('my-example-class');
    expect(reduxDevtoolsJsonStringifyReplacer('', p)).toBe('HTMLElement <P class="my-example-class">');
  });

  it('should return string if the value is a global window object', () => {
    /*
     * Firefox devtools throw exceptions when attempting to deeply serialize window object
     * because some of the properties inside belong to another iframe
     * and that other iframe sometimes has cross-origin access limitations.
     */
    expect(reduxDevtoolsJsonStringifyReplacer('', window)).toBe('global.window');
  });
});

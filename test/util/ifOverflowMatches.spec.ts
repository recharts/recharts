import { IfOverflow, ifOverflowMatches } from '../../src/util/IfOverflowMatches';

describe('ifOverflowMatches', () => {
  const allOverflows: ReadonlyArray<IfOverflow> = ['discard', 'extendDomain', 'hidden', 'visible'];

  test.each(allOverflows)('should return false if no props are specified: %s', overflow => {
    expect(ifOverflowMatches({}, overflow)).toBe(false);
  });

  it('should return true if alwaysShow expects extendDomain and ifOverflow is not defined', () => {
    expect(ifOverflowMatches({ alwaysShow: true }, 'extendDomain')).toBe(true);
  });

  it('should match ifOverflow prop when alwaysShow is not defined', () => {
    expect(ifOverflowMatches({ ifOverflow: 'hidden' }, 'hidden')).toBe(true);
    expect(ifOverflowMatches({ ifOverflow: 'visible' }, 'visible')).toBe(true);
    expect(ifOverflowMatches({ ifOverflow: 'visible', alwaysShow: false }, 'visible')).toBe(true);
    expect(ifOverflowMatches({ ifOverflow: 'visible' }, 'hidden')).toBe(false);
    expect(ifOverflowMatches({ ifOverflow: 'visible' }, 'extendDomain')).toBe(false);
  });

  it('should ignore ifOverflow prop when alwaysShow is true', () => {
    expect(ifOverflowMatches({ ifOverflow: 'discard', alwaysShow: true }, 'discard')).toBe(false);
    expect(ifOverflowMatches({ ifOverflow: 'discard', alwaysShow: true }, 'extendDomain')).toBe(true);
  });
});

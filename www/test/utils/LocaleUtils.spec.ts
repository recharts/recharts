import { describe, it, expect } from 'vitest';
import { getLocaleType } from '../../src/utils/LocaleUtils';

describe('getLocaleType', () => {
  it('should return default locale if the params are empty', () => {
    const result = getLocaleType({ params: {}, location: {} });
    expect(result).toBe('en-US');
  });

  it('should return the locale from params', () => {
    const result = getLocaleType({ params: { locale: 'zh-CN' }, location: {} });
    expect(result).toBe('zh-CN');
  });

  it('should return default locale for unsupported locale', () => {
    const result = getLocaleType({ params: { locale: 'fr-FR' }, location: {} });
    expect(result).toBe('en-US');
  });
});

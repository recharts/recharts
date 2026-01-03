import { describe, it, expect } from 'vitest';
import { parseJSDocLinkTag } from './generateApiDoc';

describe('parseJSDocLinkTag', () => {
  describe('should parse external url', () => {
    it.each(['https://example.com', '{@link https://example.com}'])('input: %s', input => {
      const actual = parseJSDocLinkTag(input);
      expect(actual).toEqual({
        name: 'https://example.com',
        url: 'https://example.com',
        isExternal: true,
      });
    });
  });

  describe('should parse external URL with custom name', () => {
    it.each([
      [
        '{@link https://example.com|Example Site}',
        { name: 'Example Site', url: 'https://example.com', isExternal: true },
      ],
      [
        '{@link https://example.com Example Site}',
        { name: 'Example Site', url: 'https://example.com', isExternal: true },
      ],
    ])('input: %s', (input, expected) => {
      const actual = parseJSDocLinkTag(input);
      expect(actual).toEqual({
        name: expected.name,
        url: expected.url,
        isExternal: true,
      });
    });
  });

  describe('should parse internal reference', () => {
    it.each(['SomeComponent', '{@link SomeComponent}'])('input: %s', input => {
      const actual = parseJSDocLinkTag(input);
      expect(actual).toEqual({
        name: 'SomeComponent',
        url: 'SomeComponent',
        isExternal: false,
      });
    });
  });

  describe('should parse Recharts website URL', () => {
    it.each(['https://recharts.github.io/en-US/guide/', '{@link https://recharts.github.io/en-US/guide/}'])(
      'input: %s',
      input => {
        const actual = parseJSDocLinkTag(input);
        expect(actual).toEqual({
          name: 'https://recharts.github.io/en-US/guide/',
          url: '/guide/',
          isExternal: false,
        });
      },
    );
  });

  describe('should parse Recharts website URL with custom name', () => {
    it.each([
      '{@link https://recharts.github.io/en-US/guide/|Recharts Guide}',
      '{@link https://recharts.github.io/en-US/guide/ Recharts Guide}',
    ])('input: %s', input => {
      const actual = parseJSDocLinkTag(input);
      expect(actual).toEqual({
        name: 'Recharts Guide',
        url: '/guide/',
        isExternal: false,
      });
    });
  });
});

import { render } from '@testing-library/react';
import React from 'react';
import {
  getStringSize,
  getStringSizes,
  clearStringCache,
  getStringCacheStats,
  configureTextMeasurement,
  getTextMeasurementConfig,
} from '../../src/util/DOMUtils';
import { getMockDomRect, mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

describe('DOMUtils', () => {
  beforeEach(() => {
    configureTextMeasurement({
      cacheSize: 2000,
      enableCache: true,
    });
    clearStringCache();
  });

  test('getStringSize() returns 0', () => {
    // @ts-expect-error typescript is correct here, but we are testing runtime behavior with invalid input
    expect(getStringSize(undefined)).toEqual({ width: 0, height: 0 });
  });

  test('getStringSize() with value returns mocked getBoundingClientRect values', () => {
    render(<span id="recharts_measurement_span">test</span>);
    mockGetBoundingClientRect({
      x: 200,
      y: 100,
      width: 25,
      height: 17,
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    });

    expect(getStringSize('test')).toEqual({
      width: 25,
      height: 17,
    });
  });

  test('cache should store and retrieve values correctly', () => {
    render(<span id="recharts_measurement_span">test</span>);
    mockGetBoundingClientRect({
      width: 25,
      height: 17,
    });

    const result1 = getStringSize('test', { fontSize: '14px' });
    expect(result1).toEqual({ width: 25, height: 17 });
    expect(getStringCacheStats().size).toBe(1);

    const result2 = getStringSize('test', { fontSize: '14px' });
    expect(result2).toEqual({ width: 25, height: 17 });
    expect(getStringCacheStats().size).toBe(1);
  });

  test('clearStringCache should clear the cache', () => {
    render(<span id="recharts_measurement_span">test</span>);
    mockGetBoundingClientRect({
      width: 25,
      height: 17,
    });

    getStringSize('test');
    expect(getStringCacheStats().size).toBe(1);

    clearStringCache();
    expect(getStringCacheStats().size).toBe(0);
  });

  test('cache should handle different styles separately', () => {
    render(<span id="recharts_measurement_span">test</span>);
    mockGetBoundingClientRect({
      width: 25,
      height: 17,
    });

    getStringSize('test', { fontSize: '14px' });
    getStringSize('test', { fontSize: '16px' });

    expect(getStringCacheStats().size).toBe(2);
  });

  test('configureTextMeasurement should update configuration', () => {
    const newConfig = {
      cacheSize: 1000,
      enableCache: false,
    };

    configureTextMeasurement(newConfig);
    const config = getTextMeasurementConfig();

    expect(config.cacheSize).toBe(1000);
    expect(config.enableCache).toBe(false);
  });

  test('should not cache when caching is disabled', () => {
    configureTextMeasurement({ enableCache: false });

    render(<span id="recharts_measurement_span">test</span>);
    mockGetBoundingClientRect({
      width: 25,
      height: 17,
    });

    getStringSize('test');
    getStringSize('test');

    expect(getStringCacheStats().size).toBe(0);
  });

  describe('getStringSizes', () => {
    beforeEach(() => {
      // jsdom has no layout: make the width follow the text, so the sizes can be told apart.
      vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function mock(this: Element) {
        return getMockDomRect({ width: (this.textContent ?? '').length * 10, height: 17 });
      });
    });

    test('returns the sizes in the same order as the texts, and 0 for missing texts', () => {
      expect(getStringSizes(['a', 'abc', null, 12, undefined])).toEqual([
        { width: 10, height: 17 },
        { width: 30, height: 17 },
        { width: 0, height: 0 },
        { width: 20, height: 17 },
        { width: 0, height: 0 },
      ]);
    });

    test('measures every distinct uncached text once, and removes its spans afterwards', () => {
      getStringSize('cached');
      const spy = vi.mocked(Element.prototype.getBoundingClientRect);
      spy.mockClear();

      getStringSizes(['cached', 'x', 'y', 'x']);

      expect(spy).toHaveBeenCalledTimes(2);
      expect(document.querySelectorAll('.recharts-measurement-container')).toHaveLength(0);
    });

    test('fills the cache that getStringSize reads', () => {
      getStringSizes(['shared'], { fontSize: '14px' });

      expect(getStringCacheStats().size).toBe(1);
      expect(getStringSize('shared', { fontSize: '14px' })).toEqual({ width: 60, height: 17 });
    });

    test('measures each span in the document, inheriting the given style from its container', () => {
      const seen: Array<{ text: string | null; fontSize?: string; letterSpacing?: string; isConnected: boolean }> = [];
      vi.mocked(Element.prototype.getBoundingClientRect).mockImplementation(function mock(this: Element) {
        const container = this.parentElement;
        seen.push({
          text: this.textContent,
          fontSize: container?.style.fontSize,
          letterSpacing: container?.style.letterSpacing,
          isConnected: this.isConnected,
        });
        return getMockDomRect();
      });

      getStringSizes(['styled'], { fontSize: '14px', letterSpacing: '2px' });

      expect(seen).toEqual([{ text: 'styled', fontSize: '14px', letterSpacing: '2px', isConnected: true }]);
    });
  });

  afterAll(() => {
    configureTextMeasurement({
      cacheSize: 2000,
      enableCache: true,
    });
    clearStringCache();
  });
});

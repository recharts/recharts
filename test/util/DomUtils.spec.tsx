import { render } from '@testing-library/react';
import React from 'react';
import {
  getStringSize,
  clearStringCache,
  getStringCacheStats,
  configureTextMeasurement,
  getTextMeasurementConfig,
} from '../../src/util/DOMUtils';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

describe('DOMUtils', () => {
  beforeEach(() => {
    configureTextMeasurement({
      cacheSize: 2000,
      enableCache: true,
    });
    clearStringCache();
  });

  test('getStringSize() returns 0', () => {
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
});

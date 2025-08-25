import { CSSProperties } from 'react';
import { Global } from './Global';
import { Size } from './types';
import { LRUCache } from './LRUCache';

export interface TextMeasurementConfig {
  /** Maximum number of items to cache */
  cacheSize: number;
  /** Whether to enable caching */
  enableCache: boolean;
}

const defaultConfig: TextMeasurementConfig = {
  cacheSize: 2000,
  enableCache: true,
};

let currentConfig = { ...defaultConfig };

let stringCache = new LRUCache<string, Size>(currentConfig.cacheSize);
const SPAN_STYLE = {
  position: 'absolute',
  top: '-20000px',
  left: 0,
  padding: 0,
  margin: 0,
  border: 'none',
  whiteSpace: 'pre',
};
const MEASUREMENT_SPAN_ID = 'recharts_measurement_span';

function createCacheKey(text: string | number, style: CSSProperties): string {
  // Simple string concatenation for better performance than JSON.stringify
  const fontSize = style.fontSize || '';
  const fontFamily = style.fontFamily || '';
  const fontWeight = style.fontWeight || '';
  const fontStyle = style.fontStyle || '';
  const letterSpacing = style.letterSpacing || '';
  const textTransform = style.textTransform || '';

  return `${text}|${fontSize}|${fontFamily}|${fontWeight}|${fontStyle}|${letterSpacing}|${textTransform}`;
}

/**
 * Measure text using DOM (accurate but slower)
 * @param text - The text to measure
 * @param style - CSS style properties to apply
 * @returns The size of the text
 */
const measureTextWithDOM = (text: string | number, style: CSSProperties): Size => {
  try {
    let measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement('span');
      measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
      measurementSpan.setAttribute('aria-hidden', 'true');
      document.body.appendChild(measurementSpan);
    }

    // Apply styles directly without unnecessary object creation
    Object.assign(measurementSpan.style, SPAN_STYLE, style);
    measurementSpan.textContent = `${text}`;

    const rect = measurementSpan.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  } catch {
    return { width: 0, height: 0 };
  }
};

export const getStringSize = (text: string | number, style: CSSProperties = {}): Size => {
  if (text === undefined || text === null || Global.isSsr) {
    return { width: 0, height: 0 };
  }

  // If caching is disabled, measure directly
  if (!currentConfig.enableCache) {
    return measureTextWithDOM(text, style);
  }

  const cacheKey = createCacheKey(text, style);
  const cachedResult = stringCache.get(cacheKey);

  if (cachedResult) {
    return cachedResult;
  }

  // Measure using DOM
  const result = measureTextWithDOM(text, style);

  // Store in LRU cache
  stringCache.set(cacheKey, result);

  return result;
};

/**
 * Configure text measurement behavior
 * @param config - Partial configuration to apply
 * @returns void
 */
export const configureTextMeasurement = (config: Partial<TextMeasurementConfig>): void => {
  const newConfig = { ...currentConfig, ...config };

  if (newConfig.cacheSize !== currentConfig.cacheSize) {
    stringCache = new LRUCache<string, Size>(newConfig.cacheSize);
  }

  currentConfig = newConfig;
};

/**
 * Get current text measurement configuration
 * @returns Current configuration
 */
export const getTextMeasurementConfig = (): TextMeasurementConfig => ({ ...currentConfig });

/**
 * Clear the string size cache. Useful for testing or memory management.
 * @returns void
 */
export const clearStringCache = (): void => {
  stringCache.clear();
};

/**
 * Get cache statistics for debugging purposes.
 * @returns Cache statistics including size and max size
 */
export const getStringCacheStats = (): { size: number; maxSize: number } => ({
  size: stringCache.size(),
  maxSize: currentConfig.cacheSize,
});

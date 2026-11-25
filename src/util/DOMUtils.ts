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
  /*
   * A category axis measures one label per data point, and CartesianGrid measures them again.
   * The cache must hold all of them, or every render evicts and re-measures them.
   * ponytail: fixed size, so charts with more than ~10,000 labels still re-measure on each render.
   */
  cacheSize: 20000,
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
const MEASUREMENT_CONTAINER_CLASS = 'recharts-measurement-container';

/**
 * The style properties that text measurement takes into account; they are also the cache key.
 */
export type TextMeasurementStyle = Pick<
  CSSProperties,
  'fontSize' | 'fontFamily' | 'fontWeight' | 'fontStyle' | 'letterSpacing' | 'textTransform'
>;

function createCacheKey(text: string | number, style: TextMeasurementStyle): string {
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
 * Measures many strings with a single layout pass.
 *
 * getStringSize forces a browser layout for every uncached string, which is slow when there are
 * thousands of them (for example the tick labels of a category axis with a lot of data).
 * This renders every uncached string first and reads them all afterwards, so the browser lays out only once.
 *
 * The strings are inline-block spans inside one container that carries the measurement style,
 * so the spans inherit the font instead of each getting its own inline style, which is the slow part.
 * An inline-block sizes to its text and to the line height, like the absolutely positioned span
 * getStringSize uses, so both return the same sizes.
 *
 * @param texts - The texts to measure
 * @param style - The font of every text. Only these properties are inherited by the spans.
 * @returns The sizes, in the same order as `texts`
 */
export const getStringSizes = (
  texts: ReadonlyArray<string | number | null | undefined>,
  style: TextMeasurementStyle = {},
): ReadonlyArray<Size> => {
  const sizes: Array<Size> = texts.map(() => ({ width: 0, height: 0 }));
  if (Global.isSsr) {
    return sizes;
  }

  const misses = new Map<string, { text: string | number; indexes: Array<number> }>();
  texts.forEach((text, index) => {
    if (text === undefined || text === null) {
      return;
    }
    const cacheKey = createCacheKey(text, style);
    const cachedResult = currentConfig.enableCache ? stringCache.get(cacheKey) : undefined;
    if (cachedResult) {
      sizes[index] = cachedResult;
      return;
    }
    const miss = misses.get(cacheKey);
    if (miss) {
      miss.indexes.push(index);
    } else {
      misses.set(cacheKey, { text, indexes: [index] });
    }
  });

  if (misses.size === 0) {
    return sizes;
  }

  let container: HTMLDivElement | undefined;
  try {
    container = document.createElement('div');
    container.setAttribute('aria-hidden', 'true');
    container.className = MEASUREMENT_CONTAINER_CLASS;
    Object.assign(container.style, SPAN_STYLE, style);
    const parent = container;
    const measured = Array.from(misses.entries(), ([cacheKey, { text, indexes }]) => {
      const span = document.createElement('span');
      span.style.cssText = 'display:inline-block;padding:0;margin:0;border:none';
      span.textContent = `${text}`;
      parent.appendChild(span);
      return { cacheKey, indexes, span };
    });
    document.body.appendChild(container);

    // Read every size before touching the DOM again, so the browser lays out only once.
    measured.forEach(({ cacheKey, indexes, span }) => {
      const rect = span.getBoundingClientRect();
      const size = { width: rect.width, height: rect.height };
      indexes.forEach(index => {
        sizes[index] = size;
      });
      if (currentConfig.enableCache) {
        stringCache.set(cacheKey, size);
      }
    });
  } catch {
    // Leave the remaining sizes at 0, as getStringSize does when measurement fails.
  } finally {
    container?.remove();
  }

  return sizes;
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
export const getStringCacheStats = () => ({
  size: stringCache.size(),
  maxSize: currentConfig.cacheSize,
});

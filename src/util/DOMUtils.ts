import { isSsr } from './ReactUtils';
import { CSSProperties, MouseEvent } from 'react';

interface StringCache {
  widthCache: Record<string, any>;
  cacheCount: number;
}

const stringCache: StringCache = {
  widthCache: {},
  cacheCount: 0,
};
const MAX_CACHE_NUM = 2000;
const SPAN_STYLE = {
  position: 'absolute',
  top: '-20000px',
  left: 0,
  padding: 0,
  margin: 0,
  border: 'none',
  whiteSpace: 'pre',
};
const STYLE_LIST = [
  'minWidth', 'maxWidth', 'width', 'minHeight', 'maxHeight', 'height',
  'top', 'left', 'fontSize', 'lineHeight', 'padding', 'margin',
  'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom',
  'marginLeft', 'marginRight', 'marginTop', 'marginBottom',
];
const MEASUREMENT_SPAN_ID = 'recharts_measurement_span';

function autoCompleteStyle(name: string, value: number) {
  if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
    return `${value}px`;
  }

  return value;
}

function camelToMiddleLine(text: string) {
  const strs = text.split('');

  const formatStrs = strs.reduce((result, entry) => {
    if (entry === entry.toUpperCase()) {
      return [...result, '-', entry.toLowerCase()];
    }

    return [...result, entry];
  }, []);

  return formatStrs.join('');
}

export const getStyleString = (style: CSSProperties) => (
  Object.keys(style).reduce((result, s) => (
    `${result}${camelToMiddleLine(s)}:${autoCompleteStyle(s, (style as Record<string, any>)[s])};`
  ), '')
);

export const getStringSize = (text: string | number, style: CSSProperties = {}) => {
  if (text === undefined || text === null || isSsr()) { return { width: 0, height: 0 }; }

  const str = `${text}`;
  const styleString = getStyleString(style);
  const cacheKey = `${str}-${styleString}`;

  if (stringCache.widthCache[cacheKey]) { return stringCache.widthCache[cacheKey]; }

  try {
    let measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement('span');
      measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
      document.body.appendChild(measurementSpan);
    }
    // Need to use CSS Object Model (CSSOM) to be able to comply with Content Security Policy (CSP)
    // https://en.wikipedia.org/wiki/Content_Security_Policy
    const measurementSpanStyle: Record<string, any> = { ...SPAN_STYLE, ...style };
    Object.keys(measurementSpanStyle).map((styleKey) => {
      (measurementSpan.style as Record<string, any>)[styleKey] = measurementSpanStyle[styleKey];
      return styleKey;
    });

    measurementSpan.textContent = str;

    const rect = measurementSpan.getBoundingClientRect();
    const result = { width: rect.width, height: rect.height };

    stringCache.widthCache[cacheKey] = result;

    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }

    return result;
  } catch (e) {
    return { width: 0, height: 0 };
  }
};

interface ContainerOffset {
  top: number;
  left: number;
}

export const getOffset = (el: HTMLElement): ContainerOffset => {
  const html = el.ownerDocument.documentElement;
  let box = { top: 0, left: 0 };

  // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)
  if (typeof el.getBoundingClientRect !== 'undefined') {
    box = el.getBoundingClientRect();
  }

  return {
    top: box.top + window.pageYOffset - html.clientTop,
    left: box.left + window.pageXOffset - html.clientLeft,
  };
};

/**
 * Calculate coordinate of cursor in chart
 * @param  {Object} event  Event object
 * @param  {Object} offset The offset of main part in the svg element
 * @return {Object}        {chartX, chartY}
 */
export const calculateChartCoordinate = (event: MouseEvent, offset: ContainerOffset) => (
  {
    chartX: Math.round(event.pageX - offset.left),
    chartY: Math.round(event.pageY - offset.top),
  }
);

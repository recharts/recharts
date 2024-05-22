import { CSSProperties } from 'react';
import { Global } from './Global';
import { Size } from './types';

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
  'minWidth',
  'maxWidth',
  'width',
  'minHeight',
  'maxHeight',
  'height',
  'top',
  'left',
  'fontSize',
  'lineHeight',
  'padding',
  'margin',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
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

export const getStyleString = (style: CSSProperties) =>
  Object.keys(style).reduce(
    (result, s) => `${result}${camelToMiddleLine(s)}:${autoCompleteStyle(s, (style as Record<string, any>)[s])};`,
    '',
  );

function removeInvalidKeys(obj: Record<string, any>) {
  const copyObj = { ...obj };
  Object.keys(copyObj).forEach(key => {
    if (!copyObj[key]) {
      delete copyObj[key];
    }
  });
  return copyObj;
}

export const getStringSize = (text: string | number, style: CSSProperties = {}): Size => {
  if (text === undefined || text === null || Global.isSsr) {
    return { width: 0, height: 0 };
  }

  const copyStyle = removeInvalidKeys(style);
  const cacheKey = JSON.stringify({ text, copyStyle });

  if (stringCache.widthCache[cacheKey]) {
    return stringCache.widthCache[cacheKey];
  }

  try {
    let measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement('span');
      measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
      measurementSpan.setAttribute('aria-hidden', 'true');
      document.body.appendChild(measurementSpan);
    }
    // Need to use CSS Object Model (CSSOM) to be able to comply with Content Security Policy (CSP)
    // https://en.wikipedia.org/wiki/Content_Security_Policy
    const measurementSpanStyle: Record<string, any> = { ...SPAN_STYLE, ...copyStyle };
    Object.assign(measurementSpan.style, measurementSpanStyle);

    measurementSpan.textContent = `${text}`;

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

export interface ContainerOffset {
  top: number;
  left: number;
}

export const getOffset = (rect: ContainerOffset): ContainerOffset => {
  return {
    top: rect.top + window.scrollY - document.documentElement.clientTop,
    left: rect.left + window.scrollX - document.documentElement.clientLeft,
  };
};

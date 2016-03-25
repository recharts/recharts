import { isSsr } from './ReactUtils';

const stringCache = {
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

function autoCompleteStyle(name, value) {
  if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
    return `${value}px`;
  }

  return value;
}

function camelToMiddleLine(text) {
  const strs = text.split('');

  const formatStrs = strs.reduce((result, entry) => {
    if (entry === entry.toUpperCase()) {
      return [...result, '-', entry.toLowerCase()];
    }

    return [...result, entry];
  }, []);

  return formatStrs.join('');
}

function getComputedStyles(el) {
  return el.ownerDocument.defaultView.getComputedStyle(el, null);
}

export const getStyleString = (style) => {
  let result = '';

  for (const s in style) {
    if (style.hasOwnProperty(s)) {
      result += `${camelToMiddleLine(s)}:${autoCompleteStyle(s, style[s])};`;
    }
  }
  return result;
};

export const getStringSize = (text, style = {}) => {
  if (text === undefined || text === null || isSsr()) {return 0;}

  const str = `${text}`;
  const styleString = getStyleString(style);
  const cacheKey = `${str}-${styleString}`;

  if (stringCache.widthCache[cacheKey]) { return stringCache.widthCache[cacheKey];}

  if (!stringCache.span) {
    const span = document.createElement('span');
    span.setAttribute('style', getStyleString(SPAN_STYLE));
    document.body.appendChild(span);

    stringCache.span = span;
  }

  stringCache.span.setAttribute('style', getStyleString({ ...SPAN_STYLE, ...style }));
  stringCache.span.textContent = str;

  const rect = stringCache.span.getBoundingClientRect();
  const result = { width: rect.width, height: rect.height };

  stringCache.widthCache[cacheKey] = result;

  if (++stringCache.cacheCount > MAX_CACHE_NUM) {
    stringCache.cacheCount = 0;
    stringCache.widthCache = {};
  }

  return result;
};

export const getWidth = (el) => {
  const styles = getComputedStyles(el);
  const width = parseFloat(styles.width.indexOf('px') !== -1 ? styles.width : 0);

  const boxSizing = styles.boxSizing || 'content-box';
  if (boxSizing === 'border-box') {
    return width;
  }

  const borderLeftWidth = parseFloat(styles.borderLeftWidth);
  const borderRightWidth = parseFloat(styles.borderRightWidth);
  const paddingLeft = parseFloat(styles.paddingLeft);
  const paddingRight = parseFloat(styles.paddingRight);
  return width - borderRightWidth - borderLeftWidth - paddingLeft - paddingRight;
};

export const getHeight = (el) => {
  const styles = getComputedStyles(el);
  const height = parseFloat(styles.height.indexOf('px') !== -1 ? styles.height : 0);

  const boxSizing = styles.boxSizing || 'content-box';
  if (boxSizing === 'border-box') {
    return height;
  }

  const borderTopWidth = parseFloat(styles.borderTopWidth);
  const borderBottomWidth = parseFloat(styles.borderBottomWidth);
  const paddingTop = parseFloat(styles.paddingTop);
  const paddingBottom = parseFloat(styles.paddingBottom);
  return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
};

export const getOffset = (el) => {
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

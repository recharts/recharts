function offset(el) {
  let box = {top: 0, left: 0};

  if (el.getBoundingClientRect) {
    box = el.getBoundingClientRect();
  }

  const docElem = document.documentElement;
  const body = document.body;
  const clientTop = docElem.clientTop || body.clientTop || 0;
  const clientLeft = docElem.clientLeft || body.clientLeft || 0;
  const scrollTop = window.pageYOffset || docElem.scrollTop;
  const scrollLeft = window.pageXOffset || docElem.scrollLeft;

  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft,
  };
}

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
  'top', 'left', 'fontSize', 'lineHeight',
];
function autoCompleteStyle(name, value) {
  if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
    return value + 'px';
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

function getStyleString(style) {
  let result = '';

  for (const s in style) {
    if (style.hasOwnProperty(s)) {
      result += `${camelToMiddleLine(s)}:${autoCompleteStyle(s, style[s])};`;
    }
  }
  return result;
}

function getStringSize(text, style = {}) {
  if (text === undefined || text === null) {return 0;}

  const str = text + '';
  const styleString = getStyleString(style);
  const cacheKey = str + '-' + styleString;

  if (stringCache.widthCache[cacheKey]) { return stringCache.widthCache[cacheKey];}

  if (!stringCache.span) {
    const span = document.createElement('span');
    span.setAttribute('style', getStyleString(SPAN_STYLE));
    document.body.appendChild(span);

    stringCache.span = span;
  }

  stringCache.span.setAttribute('style', getStyleString({...SPAN_STYLE, ...style}));
  stringCache.span.textContent = str;

  const rect = stringCache.span.getBoundingClientRect();
  const result = {width: rect.width, height: rect.height};

  stringCache.widthCache[cacheKey] = result;

  if (++stringCache.cacheCount > MAX_CACHE_NUM) {
    stringCache.cacheCount = 0;
    stringCache.widthCache = {};
  }

  return result;
}

export default {
  offset,
  getStringSize,
  getStyleString,
};

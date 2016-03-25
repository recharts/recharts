/**
* Detect Element Resize.
* Forked in order to guard against unsafe 'window' and 'document' references.
*
* https://github.com/sdecima/javascript-detect-element-resize
* Sebastian Decima
*
* version: 0.5.3
**/

// Check `document` and `window` in case of server-side rendering
//
const animationName = 'resizeanim';

const getWindow = () => {
  if (typeof window !== 'undefined') {
    return window;
  }

  return null;
};
const getAttachEvent = () => {
  if (typeof document !== 'undefined' && document.attachEvent) {
    return document.attachEvent;
  }
  return null;
};

let stylesCreated = false;

const requestFrame = (fn) => {
  const _window = getWindow();
  let raf;

  if (_window) {
    raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame ||
    _window.webkitRequestAnimationFrame || ((callback) => {
      _window.setTimeout(callback, 20);
    });
  } else {
    raf = () => {};
  }

  return raf(fn);
};

const cancelFrame = (id) => {
  const _window = getWindow();

  let cancel;
  if (_window) {
    cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame ||
    _window.webkitCancelAnimationFrame || _window.clearTimeout;
  } else {
    cancel = () => {};
  }
  return cancel(id);
};

const resetTriggers = (element) => {
  if (element) {
    const triggers = element.__resizeTriggers__;
    const expand = triggers.firstElementChild;
    const contract = triggers.lastElementChild;
    const expandChild = expand.firstElementChild;

    const contractScrollWidth = contract.scrollWidth;
    const contractScrollHeight = contract.scrollHeight;
    const expandOffsetWidth = expand.offsetWidth;
    const expandOffsetHeight = expand.offsetHeight;
    const expandScrollWidth = expand.scrollWidth;
    const expandScrollHeight = expand.scrollHeight;

    contract.scrollLeft = contractScrollWidth;
    contract.scrollTop = contractScrollHeight;
    expandChild.style.width = `${expandOffsetWidth + 1}px`;
    expandChild.style.height = `${expandOffsetHeight + 1}px`;
    expand.scrollLeft = expandScrollWidth;
    expand.scrollTop = expandOffsetHeight;
  }
};

const checkTriggers = (element) => (
  element.offsetWidth !== element.__resizeLast__.width ||
      element.offsetHeight !== element.__resizeLast__.height
);

function scrollListener(e) {
  const element = this;

  if (element) {
    resetTriggers(element);

    if (element.__resizeRAF__) {
      cancelFrame(element.__resizeRAF__);
    }

    element.__resizeRAF__ = requestFrame(() => {
      if (checkTriggers(element)) {
        element.__resizeLast__.width = element.offsetWidth;
        element.__resizeLast__.height = element.offsetHeight;
        element.__resizeListeners__.forEach(fn => {
          fn.call(element, e);
        });
      }
    });
  }
}

const removeNode = (elm) => {
  if (elm && elm.parentNode && elm.parentNode.removeChild) {
    elm.parentNode.removeChild(elm);
  }
};

/* Detect CSS Animations support to detect element display/re-attach */
const detectCssAnimation = () => {
  const domPrefixes = 'Webkit Moz O ms'.split(' ');
  const startEvents = [
    'webkitAnimationStart', 'animationstart', 'oAnimationStart', 'MSAnimationStart',
  ];
  const _window = getWindow();

  if (_window) {
    const elm = document.createElement('fakeelement');
    if (elm.style.animationName !== undefined) {
      removeNode(elm);
      return {
        animationstartevent: 'animationstart',
        animationKeyframes: `keyframes ${animationName} { from {opacity:0;} to {opacity:0;} } `,
        animationStyle: `animation: 1ms ${animationName};`,
      };
    }

    for (let i = 0, len = domPrefixes.length; i < len; i++) {
      if (elm.style[`${domPrefixes[i]}AnimationName`] !== undefined) {
        removeNode(elm);
        const pfx = domPrefixes[i];
        const keyframeprefix = `-${pfx.toLowerCase()}-`;

        return {
          animationstartevent: startEvents[i],
          animationKeyframes: `@${keyframeprefix}keyframes ${animationName} {from{opacity:0;} to{opacity:0;}} `,
          animationStyle: `${keyframeprefix}animation: 1ms ${animationName};`,
        };
      }
    }
  }

  return {
    animationKeyframes: '',
    animationStyle: '',
  };
};

const createStyles = (animationKeyframes, animationStyle) => {
  if (!stylesCreated) {
    // opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
    const css = `
        ${animationKeyframes}
        .resize-triggers {
          ${animationStyle} visibility: hidden; opacity: 0;
        }
        .resize-triggers, .resize-triggers > div,
        .contract-trigger:before {
          content: \" \";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        } .resize-triggers > div {
          background: #eee;
          overflow: auto;
        } .contract-trigger:before {
          width: 200%; height: 200%;
        }`;
    const head = document && (document.head || document.getElementsByTagName('head')[0]);
    const style = document && document.createElement('style');

    if (style) {
      style.type = 'text/css';
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document && document.createTextNode(css));
      }

      head.appendChild(style);
      stylesCreated = true;
    }
  }
};

const addResizeListener = (element, fn) => {
  const attachEvent = getAttachEvent();

  if (attachEvent) {
    element.attachEvent('onresize', fn);
  } else if (typeof document !== 'undefined') {
    if (!element.__resizeTriggers__) {
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
      }
      const { animationstartevent, animationKeyframes, animationStyle } = detectCssAnimation();
      createStyles(animationKeyframes, animationStyle);
      element.__resizeLast__ = {};
      element.__resizeListeners__ = [];
      (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
      element.__resizeTriggers__.innerHTML =
        `
          <div class="expand-trigger"><div></div></div>
          <div class="contract-trigger"></div>
        `;
      element.appendChild(element.__resizeTriggers__);
      resetTriggers(element);
      element.addEventListener('scroll', scrollListener, true);

      /* Listen for a css animation to detect element display/re-attach */
      animationstartevent && element.__resizeTriggers__.addEventListener(
        animationstartevent, (e) => {
          if (e.animationName === animationName) resetTriggers(element);
        }
      );
    }
    element.__resizeListeners__.push(fn);
  }
};

const removeResizeListener = (element, fn) => {
  const attachEvent = getAttachEvent();

  if (attachEvent) {
    element.detachEvent('onresize', fn);
  } else {
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      element.removeEventListener('scroll', scrollListener);
      element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
    }
  }
};

export {
  addResizeListener,
  removeResizeListener,
};

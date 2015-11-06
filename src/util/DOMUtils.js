function offset (el) {
  let box = {top: 0, left: 0};

  if (el.getBoundingClientRect) {
    box = el.getBoundingClientRect();
  }

  let docElem = document.documentElement;
  let body = document.body;
  let clientTop = docElem.clientTop || body.clientTop || 0;
  let clientLeft = docElem.clientLeft || body.clientLeft || 0;
  let scrollTop = window.pageYOffset || docElem.scrollTop;
  let scrollLeft = window.pageXOffset || docElem.scrollLeft;

  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}

export default {
  offset
};

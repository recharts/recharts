/**
 * 对事件对象进行跨浏览器标准化处理
 * @param {Object} e 浏览器返回的事件对象
 */
function normalize (e, chartPosition) {
  // common IE normalizing
  e = e || window.event;

  // Framework specific normalizing (#1165)
  e = washMouseEvent(e);

  // More IE normalizing, needs to go after washMouseEvent
  if (!e.target) {
      e.target = e.srcElement;
  }

  // iOS (#2757)
  let ePos = e.touches ?  (e.touches.length ? e.touches.item(0) : e.changedTouches[0]) : e;
  let chartX, chartY;
  // chartX and chartY
  if (ePos.pageX === undefined) { // IE < 9. #886.
    chartX = Math.max(e.x, e.clientX - chartPosition.left); // #2005, #2129: the second case is
    // for IE10 quirks mode within framesets
    chartY = e.y;
  } else {
    chartX = ePos.pageX - chartPosition.left;
    chartY = ePos.pageY - chartPosition.top;
  }

  e.chartX = Math.round(chartX);
  e.chartY = Math.round(chartY);

  return e
}

function washMouseEvent (e) {
  let ret = e.originalEvent || e;

  // computed by jQuery, needed by IE8
  if (ret.pageX === undefined) {
    ret.pageX = e.pageX;
    ret.pageY = e.pageY;
  }

  return ret;
}

export default {
  normalize,
  washMouseEvent
}

function washMouseEvent(e) {
  const ret = e.originalEvent || e;

  // computed by jQuery, needed by IE8
  if (ret.pageX === undefined) {
    ret.pageX = e.pageX;
    ret.pageY = e.pageY;
  }

  return ret;
}

/**
 * 对事件对象进行跨浏览器标准化处理
 * @param {Object} e 浏览器返回的事件对象
 * @param {Object} chartPosition 图表的位置
 * @return {Object} 事件对象
 */
function normalize(e, chartPosition) {
  // common IE normalizing
  let eventObj = e || window.event;

  // Framework specific normalizing (#1165)
  eventObj = washMouseEvent(eventObj);

  // More IE normalizing, needs to go after washMouseEvent
  if (!eventObj.target) {
    eventObj.target = eventObj.srcElement;
  }

  let ePos;
  if (eventObj.touches) {
    ePos = eventObj.touches.length ? eventObj.touches.item(0) : eventObj.changedTouches[0];
  } else {
    ePos = eventObj;
  }

  let chartX;
  let chartY;
  // chartX and chartY
  if (ePos.pageX === undefined) { // IE < 9. #886.
    chartX = Math.max(eventObj.x, eventObj.clientX - chartPosition.left); // #2005, #2129: the second case is
    // for IE10 quirks mode within framesets
    chartY = eventObj.y;
  } else {
    chartX = ePos.pageX - chartPosition.left;
    chartY = ePos.pageY - chartPosition.top;
  }

  eventObj.chartX = Math.round(chartX);
  eventObj.chartY = Math.round(chartY);

  return eventObj;
}
export default {
  normalize,
  washMouseEvent,
};

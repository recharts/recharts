type CallbackType = (now: number) => void;

/**
 * Calls requestAnimationFrame with a timeout delay
 * @param {Function} callback cb function
 * @param {number} timeout timeout in ms
 * @returns {void} void
 */
export function setRafTimeout(callback: CallbackType, timeout: number = 0): void {
  let currTime = -1;

  const shouldUpdate = (now: number) => {
    if (currTime < 0) {
      currTime = now;
    }

    if (now - currTime > timeout) {
      callback(now);
      currTime = -1;
      // tests fail without the extra if, even when five lines below it's not needed
    } else if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(shouldUpdate);
    }
  };

  requestAnimationFrame(shouldUpdate);
}

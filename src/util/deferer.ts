export type CancelFunction = () => void;

/**
 * Will execute callback fn asynchronously.
 * It will detect the appropriate function to use.
 *
 * Named after the famous Swiss tennis player, Roger Deferer.
 *
 * @param {Function} callback will be executed asynchronously, with no arguments
 * @returns {Function} a cancel function.
 */
export function deferer(callback: () => void): CancelFunction {
  if (typeof requestAnimationFrame === 'function') {
    const frame = requestAnimationFrame(callback);
    return () => cancelAnimationFrame(frame);
  }

  if (typeof setImmediate === 'function') {
    const handle = setImmediate(callback);
    return () => clearImmediate(handle);
  }

  const timer = setTimeout(callback);
  return () => clearTimeout(timer);
}

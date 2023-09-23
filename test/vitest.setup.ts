import '@testing-library/jest-dom';

export async function teardown() {
  clearTimeout(undefined);
}
global.requestAnimationFrame = fn => window.setTimeout(fn, 0);

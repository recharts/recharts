import '@testing-library/jest-dom';

global.requestAnimationFrame = fn => window.setTimeout(fn, 0);
Object.defineProperty(window, 'requestAnimationFrame', {
  writable: true,
  value: callback => callback(),
});

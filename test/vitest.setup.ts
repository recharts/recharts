import '@testing-library/jest-dom';

global.requestAnimationFrame = fn => window.setTimeout(fn, 0);

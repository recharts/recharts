import '@testing-library/jest-dom';

global.requestAnimationFrame = fn => setTimeout(fn, 0);

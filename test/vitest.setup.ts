import '@testing-library/jest-dom';
import { ResizeObserverMock } from './helper/resizeObserverMock';

global.requestAnimationFrame = fn => window.setTimeout(fn, 0);

beforeAll(() => {
  window.ResizeObserver = ResizeObserverMock;
});

afterEach(() => {
  ResizeObserverMock.mockClear();
});

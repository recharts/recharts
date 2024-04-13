import { Mock, vi } from 'vitest';

type ResizeObserverMockType = Mock & { notify?: (entries: any[]) => void };

export const ResizeObserverMock: ResizeObserverMockType = vi.fn().mockImplementation(callback => {
  ResizeObserverMock.notify = callback;

  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  };
});

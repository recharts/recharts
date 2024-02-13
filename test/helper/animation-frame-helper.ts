import { vi } from 'vitest';

export function mockAnimation() {
  let time = 0;

  vi.spyOn(global, 'requestAnimationFrame').mockImplementation(fn => {
    time += 100;
    fn(time);
    return 0;
  });
}
export function cleanupMockAnimation() {
  (global.requestAnimationFrame as any).mockRestore();
}

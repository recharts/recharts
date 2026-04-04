import { describe, expect, it, vi } from 'vitest';
import { ProgressAnimationManager } from '../../src/animation/ProgressAnimationManager';

describe('ProgressAnimationManager', () => {
  const animationStart = vi.fn();
  const animationActive = vi.fn();
  const animationEnd = vi.fn();

  function makeQueue(duration: number = 1000, begin: number = 0) {
    return [animationStart, begin, animationActive, duration, animationEnd] as const;
  }

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('initial state', () => {
    it('should start as idle', () => {
      const mgr = new ProgressAnimationManager('test-1');
      expect(mgr.getStatus()).toBe('idle');
      expect(mgr.getProgress()).toBe(0);
      expect(mgr.isAnimating()).toBe(false);
    });
  });

  describe('start()', () => {
    it('should transition to pending status', () => {
      const mgr = new ProgressAnimationManager('test-2');
      mgr.start(makeQueue());
      expect(mgr.getStatus()).toBe('pending');
      expect(mgr.isAnimating()).toBe(true);
    });
  });

  describe('stop()', () => {
    it('should reset to idle and call onStop', () => {
      const onStop = vi.fn();
      const mgr = new ProgressAnimationManager('test-3', onStop);
      mgr.start(makeQueue());
      mgr.stop();
      expect(mgr.getStatus()).toBe('idle');
      expect(mgr.getProgress()).toBe(0);
      expect(mgr.isAnimating()).toBe(false);
      expect(onStop).toHaveBeenCalledTimes(1);
    });
  });

  describe('setProgress()', () => {
    it('should prime the animation and call onAnimationStart and onAnimationActive', () => {
      const mgr = new ProgressAnimationManager('test-4');
      mgr.start(makeQueue());
      mgr.setProgress(0.5);

      expect(animationStart).toHaveBeenCalledTimes(1);
      expect(animationActive).toHaveBeenCalledTimes(1);
      expect(mgr.getStatus()).toBe('active');
      expect(mgr.getProgress()).toBe(0.5);
    });

    it('should clamp progress to [0, 0.999]', () => {
      const mgr = new ProgressAnimationManager('test-5');
      mgr.start(makeQueue());

      mgr.setProgress(1.5);
      expect(mgr.getProgress()).toBe(0.999);

      mgr.setProgress(-0.5);
      expect(mgr.getProgress()).toBe(0);
    });

    it('should not do anything after complete()', () => {
      const mgr = new ProgressAnimationManager('test-6');
      mgr.start(makeQueue());
      mgr.complete();
      expect(mgr.getStatus()).toBe('complete');

      mgr.setProgress(0.5);
      // Status should remain complete, progress should remain 1
      expect(mgr.getStatus()).toBe('complete');
      expect(mgr.getProgress()).toBe(1);
    });

    it('should only prime once even with multiple setProgress calls', () => {
      const mgr = new ProgressAnimationManager('test-7');
      mgr.start(makeQueue());
      mgr.setProgress(0.2);
      mgr.setProgress(0.5);
      mgr.setProgress(0.8);

      // animationStart and animationActive should only be called once (during priming)
      expect(animationStart).toHaveBeenCalledTimes(1);
      expect(animationActive).toHaveBeenCalledTimes(1);
    });

    it('should do nothing if queue is empty', () => {
      const mgr = new ProgressAnimationManager('test-8');
      // No queue started
      mgr.setProgress(0.5);
      expect(mgr.getStatus()).toBe('idle');
    });
  });

  describe('complete()', () => {
    it('should process remaining queue items and call onAnimationEnd', () => {
      const mgr = new ProgressAnimationManager('test-9');
      mgr.start(makeQueue());
      mgr.complete();

      expect(animationStart).toHaveBeenCalledTimes(1);
      expect(animationActive).toHaveBeenCalledTimes(1);
      expect(animationEnd).toHaveBeenCalledTimes(1);
      expect(mgr.getStatus()).toBe('complete');
      expect(mgr.getProgress()).toBe(1);
      expect(mgr.isAnimating()).toBe(false);
    });

    it('should call onStop callback', () => {
      const onStop = vi.fn();
      const mgr = new ProgressAnimationManager('test-10', onStop);
      mgr.start(makeQueue());
      mgr.complete();
      expect(onStop).toHaveBeenCalledTimes(1);
    });

    it('should not do anything if already complete', () => {
      const onStop = vi.fn();
      const mgr = new ProgressAnimationManager('test-11', onStop);
      mgr.start(makeQueue());
      mgr.complete();
      expect(onStop).toHaveBeenCalledTimes(1);

      mgr.complete();
      expect(onStop).toHaveBeenCalledTimes(1); // Not called again
    });
  });

  describe('subscribe()', () => {
    it('should call listener with style objects from queue', () => {
      const mgr = new ProgressAnimationManager('test-12');
      const handleChange = vi.fn();
      mgr.subscribe(handleChange);

      // Put a style object in the queue after the standard items
      const styleObj = { opacity: 1 };
      mgr.start([animationStart, 0, animationActive, 1000, animationEnd, styleObj as never]);

      // After complete, all items should be processed including the style object
      mgr.complete();
      expect(handleChange).toHaveBeenCalledWith(styleObj);
    });

    it('should return unsubscribe function', () => {
      const mgr = new ProgressAnimationManager('test-13');
      const handleChange = vi.fn();
      const unsubscribe = mgr.subscribe(handleChange);

      unsubscribe();

      // After unsubscribe, style objects should not be forwarded
      mgr.start([{ opacity: 1 } as never]);
      mgr.complete();
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('getTimeoutController()', () => {
    it('should return a ManualTimeoutController', () => {
      const mgr = new ProgressAnimationManager('test-14');
      const tc = mgr.getTimeoutController();
      expect(tc).toBeDefined();
      expect(typeof tc.setTimeout).toBe('function');
    });
  });
});

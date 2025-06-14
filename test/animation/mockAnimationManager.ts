import { act } from '@testing-library/react';
import { AnimationManager, HandleChangeFn, ReactSmoothQueue } from '../../src/animation/AnimationManager';
import { TimeoutController } from '../../src/animation/timeoutController';
import { MockTimeoutController } from './mockTimeoutController';

/**
 * It's a faff trying to match function so let's have another type for the easy assertions
 */
export type SerializableQueue = ReadonlyArray<string | number | Record<string, any>>;

export class MockAnimationManager implements AnimationManager {
  private queue: ReactSmoothQueue | null = null;

  private readonly timeoutController: MockTimeoutController = new MockTimeoutController();

  private listener: HandleChangeFn | null = null;

  private isRunningPrivate: boolean = false;

  start(queue: ReactSmoothQueue): void {
    this.isRunningPrivate = true;
    this.queue = queue;
  }

  stop(): void {
    this.isRunningPrivate = false;
    this.queue = null;
  }

  isRunning(): boolean {
    return this.isRunningPrivate;
  }

  subscribe(handleChange: HandleChangeFn): () => void {
    this.listener = handleChange;
    return () => {
      this.listener = null;
    };
  }

  getTimeoutController(): TimeoutController {
    return this.timeoutController;
  }

  assertQueue(expectedQueue: SerializableQueue | null): void {
    if (expectedQueue === null) {
      expect(this.queue).toBeNull();
      return;
    }
    const serializedQueue: SerializableQueue = this.queue.map(item => {
      if (typeof item === 'function') {
        const name = 'getMockName' in item && typeof item.getMockName === 'function' ? item.getMockName() : item.name;
        return `[function ${name || 'anonymous'}]`;
      }
      return item;
    });
    expect(serializedQueue).toEqual(expectedQueue);
  }

  private async pollPrivate(): Promise<void> {
    if (this.queue === null || this.queue.length === 0) {
      throw new Error('Queue is empty');
    }
    const head = this.queue[0];

    this.queue = this.queue.slice(1);
    if (typeof head === 'function') {
      head();
    } else if (typeof head === 'object') {
      this.listener?.(head);
    } else if (typeof head === 'number') {
      // just pretending that there was a timeout, good enough for testing
      await Promise.resolve();
    }
  }

  async poll(count: number = 1) {
    for (let i = 0; i < count; i++) {
      // eslint-disable-next-line no-await-in-loop
      await act(async () => {
        await this.pollPrivate();
      });
    }
  }

  async triggerNextTimeout(now: number): Promise<void> {
    if (this.timeoutController.getCallbacksCount() === 0) {
      throw new Error('No timeouts to trigger');
    }

    await this.timeoutController.triggerNextTimeout(now);
  }
}

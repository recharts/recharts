import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useUniqueId } from '../../src/util/useUniqueId';
import { useIdFallback } from '../../src/util/useId';

describe('useIdFallback', () => {
  it('should generate a random ID without prefix', () => {
    const { result } = renderHook(() => useIdFallback());
    expect(result.current.length).toBeGreaterThanOrEqual(1);
  });

  it('continues to return the same ID on rerender', () => {
    const { result, rerender } = renderHook(() => useIdFallback());
    const firstId = result.current;
    rerender();
    expect(result.current).toBe(firstId);
  });

  it('should return the same ID even when props change', () => {
    const { result, rerender } = renderHook(() => useIdFallback());
    const firstId = result.current;
    rerender({ prefix: 'new-prefix' });
    expect(result.current).toBe(firstId);
  });
});

describe('useUniqueId (React 18+)', () => {
  describe('without prefix', () => {
    it('should generate a random ID without prefix', () => {
      const { result } = renderHook(() => useUniqueId());
      expect(result.current.length).toBeGreaterThanOrEqual(1);
    });

    it('continues to return the same ID on rerender', () => {
      const { result, rerender } = renderHook(() => useUniqueId());
      const firstId = result.current;
      rerender();
      expect(result.current).toBe(firstId);
    });

    it('should return the same ID even when props change', () => {
      const { result, rerender } = renderHook(() => useUniqueId());
      const firstId = result.current;
      rerender({ id: 'new-id', prefix: 'new-prefix' });
      expect(result.current).toBe(firstId);
    });
  });

  describe('with prefix', () => {
    it('should generate a random ID with prefix', () => {
      const { result } = renderHook(() => useUniqueId('bar'));
      expect(result.current).toMatch(/^bar-.+$/);
    });

    it('should return the same ID on rerender with prefix', () => {
      const { result, rerender } = renderHook(() => useUniqueId('bar'));
      const firstId = result.current;
      rerender();
      expect(result.current).toBe(firstId);
    });

    it('should return the same ID even when props change', () => {
      const { result, rerender } = renderHook(() => useUniqueId('bar'));
      const firstId = result.current;
      rerender({ id: 'new-id', prefix: 'new-prefix' });
      expect(result.current).toBe(firstId);
    });
  });

  describe('with customId', () => {
    it('should return custom ID if provided, and ignore the prefix', () => {
      const { result } = renderHook(() => useUniqueId('bar', 'custom-id-modern'));
      expect(result.current).toBe('custom-id-modern');
    });

    it('should return the same custom ID on rerender', () => {
      const { result, rerender } = renderHook(() => useUniqueId('bar', 'custom-id-modern'));
      expect(result.current).toBe('custom-id-modern');
      rerender();
      expect(result.current).toBe('custom-id-modern');
    });

    it('should return the same custom ID even when props change', () => {
      const { result, rerender } = renderHook(() => useUniqueId('bar', 'custom-id-modern'));
      expect(result.current).toBe('custom-id-modern');
      rerender({ id: 'new-id', prefix: 'new-prefix' });
      expect(result.current).toBe('custom-id-modern');
    });
  });
});

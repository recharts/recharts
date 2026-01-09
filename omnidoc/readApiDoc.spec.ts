import { describe, it, expect } from 'vitest';
import { ApiDocReader } from './readApiDoc';

describe('readApiDoc', () => {
  const reader = new ApiDocReader();
  it('should identify all exported symbols', () => {
    const publicSymbolNames = reader.getPublicSymbolNames();
    expect(publicSymbolNames).toContain('ReferenceLine');
    expect(publicSymbolNames).toContain('LineChart');
    expect(publicSymbolNames).toContain('Legend');
    expect(publicSymbolNames).toContain('Brush');
    expect(publicSymbolNames).toContain('PolarGrid');
  });

  it('should return props', () => {
    expect(reader.getRechartsPropsOf('ReferenceLine')).toMatchInlineSnapshot(`
      [
        "className",
        "ifOverflow",
        "label",
        "position",
        "segment",
        "shape",
        "strokeWidth",
        "x",
        "xAxisId",
        "y",
        "yAxisId",
        "zIndex",
      ]
    `);
  });

  it('should return null when SVG parent info not available in API docs', () => {
    expect(reader.getSVGParentOf('ReferenceLine')).toBe(null);
  });

  it('should return empty array for unknown component props', () => {
    expect(reader.getRechartsPropsOf('UnknownComponent')).toEqual([]);
  });

  it('should get default value of a prop', () => {
    expect(reader.getDefaultValueOf('ReferenceLine', 'strokeWidth')).toEqual({ type: 'known', value: 1 });
  });

  it('should get comment of known prop', () => {
    const comment = reader.getCommentOf('ReferenceLine', 'xAxisId');
    expect(comment).toBeTruthy();
    expect(typeof comment).toBe('object');
  });

  it('should return undefined for comment of unknown component', () => {
    expect(reader.getCommentOf('UnknownComponent', 'someProp')).toBe(undefined);
  });

  it('should return undefined for comment of unknown prop', () => {
    expect(reader.getCommentOf('ReferenceLine', 'unknownProp')).toBe(undefined);
  });
});

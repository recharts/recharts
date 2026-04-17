import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { Line, LineChart, XAxis, YAxis } from '../../src';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { useNeedsClip } from '../../src/cartesian/GraphicalItemClipPath';
import { selectXAxisSettings, selectYAxisSettings } from '../../src/state/selectors/axisSelectors';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 30 },
  { name: 'D', value: 40 },
  { name: 'E', value: 50 },
];

const numericData = [
  { x: 1, y: 10 },
  { x: 2, y: 20 },
  { x: 3, y: 30 },
  { x: 4, y: 40 },
  { x: 5, y: 50 },
];

describe('GraphicalItemClipPath', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 500, height: 300 });
  });

  describe('useNeedsClip', () => {
    describe('with no XAxis or YAxis', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <Line isAnimationActive={false} dataKey="value" />
          {children}
        </LineChart>
      ));

      it('should return needClip=false when there are no axes', () => {
        const { spy } = renderTestCase(function useNeedsClipDefault() {
          return useNeedsClip(0, 0);
        });
        expectLastCalledWith(spy, { needClip: false, needClipX: false, needClipY: false });
      });
    });

    describe('with default categorical XAxis (no allowDataOverflow)', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line isAnimationActive={false} dataKey="value" />
          {children}
        </LineChart>
      ));

      it('should return needClip=false because allowDataOverflow defaults to false', () => {
        const { spy } = renderTestCase(function useNeedsClipCategorical() {
          return useNeedsClip(0, 0);
        });
        expectLastCalledWith(spy, { needClip: false, needClipX: false, needClipY: false });
      });

      it('should have allowDataOverflow=false in XAxis settings', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, 0));
        expect(spy).toHaveBeenCalled();
        const settings = spy.mock.lastCall?.[0];
        expect(settings?.allowDataOverflow).toBe(false);
      });

      it('should not render a GraphicalItemClipPath element (only the global chart-level clipPath)', () => {
        const { container } = renderTestCase();
        // The global chart-level clipPath from ClipPathProvider is always rendered,
        // but GraphicalItemClipPath (which clips graphical items to axis ranges) should not be.
        const clipPaths = container.querySelectorAll('clipPath');
        // Only the global chart clipPath should exist
        expect(clipPaths).toHaveLength(1);
        // Verify it's the global one (has "-clip" suffix), not a per-item one (has "clipPath-" prefix)
        expect(clipPaths[0].id).toMatch(/-clip$/);
      });
    });

    describe('with numerical XAxis type="number" and domain={["dataMin", "dataMax"]} (no allowDataOverflow)', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={numericData}>
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
          <YAxis />
          <Line isAnimationActive={false} dataKey="y" />
          {children}
        </LineChart>
      ));

      it('should return needClip=false because allowDataOverflow defaults to false even with type="number"', () => {
        const { spy } = renderTestCase(function useNeedsClipNumerical() {
          return useNeedsClip(0, 0);
        });
        expectLastCalledWith(spy, { needClip: false, needClipX: false, needClipY: false });
      });

      it('should have allowDataOverflow=false in XAxis settings even with type="number"', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, 0));
        expect(spy).toHaveBeenCalled();
        const settings = spy.mock.lastCall?.[0];
        expect(settings?.allowDataOverflow).toBe(false);
      });

      it('should not render a GraphicalItemClipPath element', () => {
        const { container } = renderTestCase();
        const clipPaths = container.querySelectorAll('clipPath');
        // Only the global chart clipPath should exist
        expect(clipPaths).toHaveLength(1);
        expect(clipPaths[0].id).toMatch(/-clip$/);
      });
    });

    describe('with XAxis allowDataOverflow={true}', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" allowDataOverflow />
          <YAxis />
          <Line isAnimationActive={false} dataKey="value" />
          {children}
        </LineChart>
      ));

      it('should return needClip=true when XAxis has allowDataOverflow', () => {
        const { spy } = renderTestCase(function useNeedsClipWithOverflow() {
          return useNeedsClip(0, 0);
        });
        expectLastCalledWith(spy, { needClip: true, needClipX: true, needClipY: false });
      });

      it('should have allowDataOverflow=true in XAxis settings', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, 0));
        expect(spy).toHaveBeenCalled();
        const settings = spy.mock.lastCall?.[0];
        expect(settings?.allowDataOverflow).toBe(true);
      });

      it('should render a GraphicalItemClipPath element in addition to the global one', () => {
        const { container } = renderTestCase();
        const clipPaths = container.querySelectorAll('clipPath');
        // Global clipPath + per-item GraphicalItemClipPath
        expect(clipPaths.length).toBeGreaterThanOrEqual(2);
        const itemClipPaths = Array.from(clipPaths).filter(cp => cp.id.startsWith('clipPath-'));
        expect(itemClipPaths.length).toBeGreaterThan(0);
      });
    });

    describe('with YAxis allowDataOverflow={true}', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDataOverflow />
          <Line isAnimationActive={false} dataKey="value" />
          {children}
        </LineChart>
      ));

      it('should return needClip=true when YAxis has allowDataOverflow', () => {
        const { spy } = renderTestCase(function useNeedsClipYOverflow() {
          return useNeedsClip(0, 0);
        });
        expectLastCalledWith(spy, { needClip: true, needClipX: false, needClipY: true });
      });
    });

    describe('with both axes having allowDataOverflow={true}', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" allowDataOverflow />
          <YAxis allowDataOverflow />
          <Line isAnimationActive={false} dataKey="value" />
          {children}
        </LineChart>
      ));

      it('should return needClip=true with both axes clipping', () => {
        const { spy } = renderTestCase(function useNeedsClipBothOverflow() {
          return useNeedsClip(0, 0);
        });
        expectLastCalledWith(spy, { needClip: true, needClipX: true, needClipY: true });
      });
    });

    describe('with numerical XAxis type="number", domain, AND allowDataOverflow', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={numericData}>
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} allowDataOverflow />
          <YAxis />
          <Line isAnimationActive={false} dataKey="y" />
          {children}
        </LineChart>
      ));

      it('should return needClip=true when allowDataOverflow is explicitly set', () => {
        const { spy } = renderTestCase(function useNeedsClipNumericalOverflow() {
          return useNeedsClip(0, 0);
        });
        expectLastCalledWith(spy, { needClip: true, needClipX: true, needClipY: false });
      });

      it('should render a GraphicalItemClipPath element', () => {
        const { container } = renderTestCase();
        const clipPaths = container.querySelectorAll('clipPath');
        expect(clipPaths.length).toBeGreaterThanOrEqual(2);
        const itemClipPaths = Array.from(clipPaths).filter(cp => cp.id.startsWith('clipPath-'));
        expect(itemClipPaths.length).toBeGreaterThan(0);
      });
    });
  });

  describe('clipPath in the DOM', () => {
    describe('Line with categorical XAxis, no allowDataOverflow', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line isAnimationActive={false} dataKey="value" />
          {children}
        </LineChart>
      ));

      it('should not apply clip-path attribute to the line curve', () => {
        const { container } = renderTestCase();
        const curve = container.querySelector('.recharts-line-curve');
        expect(curve).not.toBeNull();
        expect(curve?.getAttribute('clip-path')).toBeNull();
      });
    });

    describe('Line with categorical XAxis, with allowDataOverflow', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" allowDataOverflow />
          <YAxis />
          <Line isAnimationActive={false} dataKey="value" id="test-line" />
          {children}
        </LineChart>
      ));

      it('should apply clip-path attribute to the line curve', () => {
        const { container } = renderTestCase();
        // The clip-path is applied to the curve path element itself
        const curve = container.querySelector('.recharts-line-curve');
        expect(curve).not.toBeNull();
        const clipPathAttr = curve?.getAttribute('clip-path');
        expect(clipPathAttr).not.toBeNull();
        expect(clipPathAttr!).toContain('url(#clipPath-');
      });

      it('should render a GraphicalItemClipPath SVG element', () => {
        const { container } = renderTestCase();
        const clipPaths = container.querySelectorAll('clipPath');
        expect(clipPaths.length).toBeGreaterThanOrEqual(2);
        const itemClipPaths = Array.from(clipPaths).filter(cp => cp.id.startsWith('clipPath-'));
        expect(itemClipPaths.length).toBeGreaterThan(0);
      });
    });

    describe('Line with numerical XAxis type="number", no allowDataOverflow', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={numericData}>
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
          <YAxis />
          <Line isAnimationActive={false} dataKey="y" />
          {children}
        </LineChart>
      ));

      it('should NOT apply clip-path attribute even with type="number" and domain', () => {
        const { container } = renderTestCase();
        const curve = container.querySelector('.recharts-line-curve');
        expect(curve).not.toBeNull();
        expect(curve?.getAttribute('clip-path')).toBeNull();
      });

      it('should NOT render a GraphicalItemClipPath element (only the global chart-level clipPath)', () => {
        const { container } = renderTestCase();
        const clipPaths = container.querySelectorAll('clipPath');
        // Only the global chart clipPath from ClipPathProvider
        expect(clipPaths).toHaveLength(1);
        expect(clipPaths[0].id).toMatch(/-clip$/);
      });
    });
  });

  describe('Root cause investigation: type="number" does not enable clipping', () => {
    it('categorical XAxis settings should have allowDataOverflow=false by default', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <Line isAnimationActive={false} dataKey="value" />
          {children}
        </LineChart>
      ));
      const { spy } = renderTestCase(state => selectXAxisSettings(state, 0));
      const settings = spy.mock.lastCall?.[0];
      expect(settings?.type).toBe('category');
      expect(settings?.allowDataOverflow).toBe(false);
    });

    it('numerical XAxis type="number" settings should also have allowDataOverflow=false by default', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={numericData}>
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
          <Line isAnimationActive={false} dataKey="y" />
          {children}
        </LineChart>
      ));
      const { spy } = renderTestCase(state => selectXAxisSettings(state, 0));
      const settings = spy.mock.lastCall?.[0];
      expect(settings?.type).toBe('number');
      expect(settings?.allowDataOverflow).toBe(false);
    });

    it('useNeedsClip is purely driven by allowDataOverflow prop, not by axis type or domain', () => {
      // This test documents the root cause finding:
      // Switching from categorical to type="number" does NOT enable clipping.
      // The visual difference in animation is because type="number" with domain=['dataMin','dataMax']
      // causes the axis scale to recompute so that all points stay within the plot area naturally,
      // while categorical axes redistribute points to fill the full width when categories change.

      // Categorical axis - no clip
      const renderCategorical = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <Line isAnimationActive={false} dataKey="value" />
          {children}
        </LineChart>
      ));
      const { spy: catSpy } = renderCategorical(function useNeedsClipCat() {
        return useNeedsClip(0, 0);
      });
      expect(catSpy.mock.lastCall?.[0]).toEqual({ needClip: false, needClipX: false, needClipY: false });

      // Numerical axis - also no clip
      const renderNumerical = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={numericData}>
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
          <Line isAnimationActive={false} dataKey="y" />
          {children}
        </LineChart>
      ));
      const { spy: numSpy } = renderNumerical(function useNeedsClipNum() {
        return useNeedsClip(0, 0);
      });
      expect(numSpy.mock.lastCall?.[0]).toEqual({ needClip: false, needClipX: false, needClipY: false });

      // Only explicit allowDataOverflow enables clip
      const renderWithOverflow = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={numericData}>
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} allowDataOverflow />
          <Line isAnimationActive={false} dataKey="y" />
          {children}
        </LineChart>
      ));
      const { spy: overflowSpy } = renderWithOverflow(function useNeedsClipOverflow() {
        return useNeedsClip(0, 0);
      });
      expect(overflowSpy.mock.lastCall?.[0]).toEqual({ needClip: true, needClipX: true, needClipY: false });
    });

    it('YAxis settings also have allowDataOverflow=false by default', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line isAnimationActive={false} dataKey="value" />
          {children}
        </LineChart>
      ));
      const { spy } = renderTestCase(state => selectYAxisSettings(state, 0));
      const settings = spy.mock.lastCall?.[0];
      expect(settings?.allowDataOverflow).toBe(false);
    });
  });
});

import { describe, expect, it } from 'vitest';
import {
  getCameraZoomState,
  getUniformZoomState,
  getZoomTransformForPlot,
  transformCoordinateByCameraZoom,
  transformCoordinateByZoom,
} from '../../../src/util/zoom/transform';
import { AxisViewport, FULL_VIEWPORT } from '../../../src/util/zoom/viewport';

const plot = { x: 10, y: 20, width: 100, height: 200 };

const partialZoom = {
  x: { startRatio: 0.2, endRatio: 0.6 },
  y: { startRatio: 0.25, endRatio: 0.75 },
};

describe('zoom transforms', () => {
  describe('getZoomTransformForPlot', () => {
    it('does not transform a full viewport', () => {
      expect(getZoomTransformForPlot(plot, { x: FULL_VIEWPORT, y: FULL_VIEWPORT })).toBeNull();
    });

    it('projects independent partial viewports into the plot', () => {
      expect(getZoomTransformForPlot(plot, partialZoom)).toBe('translate(10 20) scale(2.5 2) translate(-30 -70)');
    });
  });

  describe('camera zoom modes', () => {
    it('keeps a fully visible uniform camera viewport unchanged', () => {
      const zoom = { x: FULL_VIEWPORT, y: FULL_VIEWPORT };

      expect(getCameraZoomState('PieChart', zoom)).toEqual(zoom);
      expect(getUniformZoomState(zoom)).toEqual(zoom);
    });

    it('keeps independent camera viewports unchanged', () => {
      expect(getCameraZoomState('FunnelChart', partialZoom)).toBe(partialZoom);
      expect(getCameraZoomState('LineChart', partialZoom)).toBeUndefined();
    });

    it('uses the narrowest centered viewport for uniform camera charts', () => {
      const zoom = {
        x: { startRatio: 0.1, endRatio: 0.9 },
        y: { startRatio: 0.25, endRatio: 0.75 },
      };

      expect(getCameraZoomState('PieChart', zoom)).toEqual({
        x: { startRatio: 0.25, endRatio: 0.75 },
        y: { startRatio: 0.25, endRatio: 0.75 },
      });
      expect(getUniformZoomState(zoom)).toEqual({
        x: { startRatio: 0.25, endRatio: 0.75 },
        y: { startRatio: 0.25, endRatio: 0.75 },
      });
    });
  });

  describe('coordinate projection', () => {
    it('leaves coordinates unchanged for a full viewport', () => {
      const coordinate = { x: 50, y: 120 };

      expect(transformCoordinateByZoom(coordinate, plot, { x: FULL_VIEWPORT, y: FULL_VIEWPORT })).toBe(coordinate);
      expect(
        transformCoordinateByCameraZoom(coordinate, plot, 'PieChart', { x: FULL_VIEWPORT, y: FULL_VIEWPORT }),
      ).toBe(coordinate);
    });

    it('projects coordinates through independent camera zoom', () => {
      expect(transformCoordinateByZoom({ x: 50, y: 120 }, plot, partialZoom)).toEqual({ x: 60, y: 120 });
      expect(transformCoordinateByCameraZoom({ x: 50, y: 120 }, plot, 'FunnelChart', partialZoom)).toEqual({
        x: 60,
        y: 120,
      });
    });

    it('projects coordinates through uniform camera zoom', () => {
      const zoom: { x: AxisViewport; y: AxisViewport } = {
        x: { startRatio: 0.1, endRatio: 0.9 },
        y: { startRatio: 0.25, endRatio: 0.75 },
      };

      expect(transformCoordinateByCameraZoom({ x: 50, y: 120 }, plot, 'PieChart', zoom)).toEqual({ x: 40, y: 120 });
    });

    it('returns undefined when no coordinate is provided', () => {
      expect(transformCoordinateByZoom(undefined, plot, partialZoom)).toBeUndefined();
      expect(transformCoordinateByCameraZoom(undefined, plot, 'PieChart', partialZoom)).toBeUndefined();
    });
  });
});

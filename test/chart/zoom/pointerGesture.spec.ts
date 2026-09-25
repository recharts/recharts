import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { installPointerGesture } from '../../../src/chart/zoom/pointerGesture';
import { cleanupMockZoomApi, createMockZoomApi, MockZoomApi, pointerEvent } from './zoomGestureTestHelpers';

describe('installPointerGesture', () => {
  let api: MockZoomApi, uninstall: () => void;

  const install = (): void => {
    uninstall = installPointerGesture(api);
  };

  const down = (init: PointerEventInit = {}): void => {
    api.element.dispatchEvent(pointerEvent('pointerdown', init));
  };
  const move = (init: PointerEventInit = {}): void => {
    window.dispatchEvent(pointerEvent('pointermove', init));
  };
  const up = (init: PointerEventInit = {}): void => {
    window.dispatchEvent(pointerEvent('pointerup', init));
  };
  const cancel = (init: PointerEventInit = {}): void => {
    window.dispatchEvent(pointerEvent('pointercancel', init));
  };

  beforeEach(() => {
    api = createMockZoomApi();
  });

  afterEach(() => {
    uninstall?.();
    cleanupMockZoomApi(api);
  });

  describe('pan', () => {
    it('pans by the pointer delta while dragging', () => {
      install();
      down({ clientX: 50, clientY: 50 });
      move({ clientX: 60, clientY: 45 });

      expect(api.panByPixels).toHaveBeenCalledWith('x', 10);
      expect(api.panByPixels).toHaveBeenCalledWith('y', -5);
      expect(api.refreshPointer).toHaveBeenCalledWith(60, 45);
    });

    it('pans by the delta since the previous move, not since the start', () => {
      install();
      down({ clientX: 50, clientY: 50 });
      move({ clientX: 60, clientY: 50 });
      api.panByPixels.mockClear();
      move({ clientX: 65, clientY: 50 });

      expect(api.panByPixels).toHaveBeenCalledWith('x', 5);
    });

    it('stops panning after pointerup', () => {
      install();
      down({ clientX: 50, clientY: 50 });
      up({ clientX: 60, clientY: 50 });
      api.panByPixels.mockClear();
      move({ clientX: 80, clientY: 50 });

      expect(api.panByPixels).not.toHaveBeenCalled();
    });

    it('does not pan when panning is disabled', () => {
      api = createMockZoomApi({ pan: false, dragToZoom: false });
      install();
      down({ clientX: 50, clientY: 50 });
      move({ clientX: 60, clientY: 50 });

      expect(api.panByPixels).not.toHaveBeenCalled();
    });
  });

  describe('active pointer ownership', () => {
    /*
     * The move/up/cancel listeners are on `window`, so they see every pointer on the page. A second
     * pointer must neither drive nor commit the gesture the first one started.
     */
    it('ignores moves from a pointer that did not start the gesture', () => {
      install();
      down({ pointerId: 1, clientX: 50, clientY: 50 });
      move({ pointerId: 2, clientX: 90, clientY: 90 });

      expect(api.panByPixels).not.toHaveBeenCalled();
    });

    it('ignores pointerup from a foreign pointer and lets the original one finish', () => {
      install();
      down({ pointerId: 1, clientX: 50, clientY: 50 });
      up({ pointerId: 2, clientX: 90, clientY: 90 });

      // The gesture is still live, so the original pointer keeps panning.
      move({ pointerId: 1, clientX: 60, clientY: 50 });
      expect(api.panByPixels).toHaveBeenCalledWith('x', 10);

      up({ pointerId: 1, clientX: 60, clientY: 50 });
      api.panByPixels.mockClear();
      move({ pointerId: 1, clientX: 70, clientY: 50 });
      expect(api.panByPixels).not.toHaveBeenCalled();
    });

    it('ignores pointercancel from a foreign pointer', () => {
      api = createMockZoomApi({ pan: false });
      install();
      down({ pointerId: 1, clientX: 20, clientY: 20 });
      api.setSelection.mockClear();
      cancel({ pointerId: 2 });

      expect(api.setSelection).not.toHaveBeenCalled();
      // The original selection is still live and can be updated.
      move({ pointerId: 1, clientX: 80, clientY: 80 });
      expect(api.setSelection).toHaveBeenCalled();
    });

    /*
     * A second pointerdown must not take the gesture over: doing so would strand the first pointer's
     * pointerup behind the active-pointer guard, leaving the drag stuck until the second one ends.
     */
    it('ignores a second pointerdown while a gesture is active', () => {
      install();
      down({ pointerId: 1, clientX: 50, clientY: 50 });
      down({ pointerId: 2, clientX: 10, clientY: 10 });

      // Pointer 2 never became the owner, so its moves are still ignored.
      move({ pointerId: 2, clientX: 30, clientY: 10 });
      expect(api.panByPixels).not.toHaveBeenCalled();

      // Pointer 1 still owns the gesture and pans relative to its own start.
      move({ pointerId: 1, clientX: 60, clientY: 50 });
      expect(api.panByPixels).toHaveBeenCalledWith('x', 10);
    });

    it('lets a new pointer start a gesture once the previous one has ended', () => {
      install();
      down({ pointerId: 1, clientX: 50, clientY: 50 });
      up({ pointerId: 1, clientX: 50, clientY: 50 });

      down({ pointerId: 2, clientX: 20, clientY: 20 });
      move({ pointerId: 2, clientX: 30, clientY: 20 });

      expect(api.panByPixels).toHaveBeenCalledWith('x', 10);
    });

    it('releases ownership after a cancel so a later pointer can start', () => {
      install();
      down({ pointerId: 1, clientX: 50, clientY: 50 });
      cancel({ pointerId: 1 });

      down({ pointerId: 2, clientX: 20, clientY: 20 });
      move({ pointerId: 2, clientX: 30, clientY: 20 });

      expect(api.panByPixels).toHaveBeenCalledWith('x', 10);
    });
  });

  describe('pointerdown opt-outs', () => {
    it('ignores non-primary mouse buttons', () => {
      install();
      down({ button: 2, clientX: 50, clientY: 50 });
      move({ clientX: 60, clientY: 50 });

      expect(api.panByPixels).not.toHaveBeenCalled();
    });

    it('leaves touch to the dedicated touch gesture', () => {
      install();
      down({ pointerType: 'touch', clientX: 50, clientY: 50 });
      move({ pointerType: 'touch', clientX: 60, clientY: 50 });

      expect(api.panByPixels).not.toHaveBeenCalled();
    });

    it('ignores interactive targets', () => {
      const button = document.createElement('button');
      api.element.appendChild(button);
      install();
      button.dispatchEvent(pointerEvent('pointerdown', { clientX: 50, clientY: 50 }));
      move({ clientX: 60, clientY: 50 });

      expect(api.panByPixels).not.toHaveBeenCalled();
    });

    it('leaves axis bands to the axis gesture', () => {
      api.pointerRegion.mockReturnValue('xAxis');
      install();
      down({ clientX: 50, clientY: 50 });
      move({ clientX: 60, clientY: 50 });

      expect(api.panByPixels).not.toHaveBeenCalled();
    });
  });

  describe('drag to zoom', () => {
    it('shows a selection rectangle while shift-dragging', () => {
      install();
      down({ clientX: 20, clientY: 20, shiftKey: true });
      expect(api.setSelection).toHaveBeenCalledWith({ x: 20, y: 20, width: 0, height: 0 });

      move({ clientX: 60, clientY: 50, shiftKey: true });
      expect(api.setSelection).toHaveBeenCalledWith({ x: 20, y: 20, width: 40, height: 30 });
    });

    it('normalizes a selection dragged up and to the left', () => {
      install();
      down({ clientX: 60, clientY: 50, shiftKey: true });
      move({ clientX: 20, clientY: 20, shiftKey: true });

      expect(api.setSelection).toHaveBeenCalledWith({ x: 20, y: 20, width: 40, height: 30 });
    });

    it('zooms into the dragged region and clears the rectangle on release', () => {
      install();
      down({ clientX: 20, clientY: 80, shiftKey: true });
      move({ clientX: 60, clientY: 40, shiftKey: true });
      up({ clientX: 60, clientY: 40, shiftKey: true });

      expect(api.selectInto).toHaveBeenCalledWith('x', 0.2, 0.6);
      // y fractions follow the data direction, so the drag runs from 0.2 up to 0.6.
      const [, fromY, toY] = api.selectInto.mock.calls.find(([dimension]) => dimension === 'y') ?? [];
      expect(fromY).toBeCloseTo(0.2);
      expect(toY).toBeCloseTo(0.6);
      expect(api.setSelection).toHaveBeenLastCalledWith(null);
    });

    it('only zooms the dimension that was actually dragged', () => {
      install();
      down({ clientX: 20, clientY: 50, shiftKey: true });
      up({ clientX: 60, clientY: 50, shiftKey: true });

      expect(api.selectInto).toHaveBeenCalledWith('x', 0.2, 0.6);
      expect(api.selectInto).not.toHaveBeenCalledWith('y', expect.anything(), expect.anything());
    });

    it('ignores a drag shorter than the minimum selection fraction', () => {
      install();
      down({ clientX: 50, clientY: 50, shiftKey: true });
      up({ clientX: 50.5, clientY: 50.5, shiftKey: true });

      expect(api.selectInto).not.toHaveBeenCalled();
      expect(api.setSelection).toHaveBeenLastCalledWith(null);
    });

    it('constrains the rectangle to the full height when only x zooms', () => {
      api = createMockZoomApi({ axis: 'x' });
      install();
      down({ clientX: 20, clientY: 30, shiftKey: true });
      move({ clientX: 60, clientY: 70, shiftKey: true });

      expect(api.setSelection).toHaveBeenCalledWith({ x: 20, y: 0, width: 40, height: 100 });
    });

    it('does not commit the zoom when the drag is cancelled', () => {
      install();
      down({ clientX: 20, clientY: 20, shiftKey: true });
      move({ clientX: 60, clientY: 60, shiftKey: true });
      cancel({});

      expect(api.selectInto).not.toHaveBeenCalled();
      expect(api.setSelection).toHaveBeenLastCalledWith(null);
    });

    it('selects on a plain drag when panning is off', () => {
      api = createMockZoomApi({ pan: false });
      install();
      down({ clientX: 20, clientY: 20 });

      expect(api.setSelection).toHaveBeenCalledWith({ x: 20, y: 20, width: 0, height: 0 });
    });
  });

  describe('drag to select', () => {
    it('emits the selected window instead of zooming', () => {
      const onSelectRegion = vi.fn();
      api = createMockZoomApi({ onSelectRegion });
      install();
      down({ clientX: 20, clientY: 50, shiftKey: true });
      up({ clientX: 60, clientY: 50, shiftKey: true });

      expect(onSelectRegion).toHaveBeenCalledWith({ x: { start: 0.25, end: 0.75 } });
      expect(api.selectInto).not.toHaveBeenCalled();
    });

    it('does not emit when nothing was dragged far enough', () => {
      const onSelectRegion = vi.fn();
      api = createMockZoomApi({ onSelectRegion });
      install();
      down({ clientX: 50, clientY: 50, shiftKey: true });
      up({ clientX: 50.2, clientY: 50.2, shiftKey: true });

      expect(onSelectRegion).not.toHaveBeenCalled();
    });
  });

  describe('pointerMode', () => {
    it('pan mode leaves shift drags to a coexisting select component', () => {
      api = createMockZoomApi({ pointerMode: 'pan' });
      install();
      down({ clientX: 50, clientY: 50, shiftKey: true });
      move({ clientX: 60, clientY: 50, shiftKey: true });

      expect(api.panByPixels).not.toHaveBeenCalled();
      expect(api.setSelection).not.toHaveBeenCalled();
    });

    it('select mode selects on a plain drag', () => {
      api = createMockZoomApi({ pointerMode: 'select' });
      install();
      down({ clientX: 20, clientY: 20 });

      expect(api.setSelection).toHaveBeenCalledWith({ x: 20, y: 20, width: 0, height: 0 });
      expect(api.panByPixels).not.toHaveBeenCalled();
    });

    it('selectShift mode ignores a plain drag and selects with shift', () => {
      api = createMockZoomApi({ pointerMode: 'selectShift' });
      install();
      down({ clientX: 20, clientY: 20 });
      expect(api.setSelection).not.toHaveBeenCalled();

      down({ clientX: 20, clientY: 20, shiftKey: true });
      expect(api.setSelection).toHaveBeenCalledWith({ x: 20, y: 20, width: 0, height: 0 });
    });
  });

  it('removes its listeners on cleanup', () => {
    install();
    uninstall();
    down({ clientX: 50, clientY: 50 });
    move({ clientX: 60, clientY: 50 });

    expect(api.panByPixels).not.toHaveBeenCalled();
  });
});

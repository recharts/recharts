export function applyZoomToScale(scale: any, zoomScale: number, offset: number, axisRange: [number, number]): any {
  if (zoomScale === 1 && offset === 0) return scale;
  const [r0, r1] = axisRange;
  const base: any = scale;
  const min = Math.min(r0, r1);
  const max = Math.max(r0, r1);
  const zoomed = (value: unknown) => {
    const raw = base(value) * zoomScale + offset;
    return Math.min(Math.max(raw, min), max);
  };
  zoomed.domain = base.domain;
  zoomed.range = () => [r0, r1];
  if (typeof base.invert === 'function') {
    zoomed.invert = (val: number) => base.invert((val - offset) / zoomScale);
  }
  if (typeof base.bandwidth === 'function') {
    zoomed.bandwidth = () => base.bandwidth() * zoomScale;
  }
  if (typeof base.step === 'function') {
    zoomed.step = () => base.step() * zoomScale;
  }
  if (typeof base.ticks === 'function') {
    zoomed.ticks = (...args: any[]) => base.ticks(...args);
  }
  return zoomed;
}

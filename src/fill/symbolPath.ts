import type { CanvasPath_D3Shape as D3CanvasPath, SymbolType as D3SymbolType } from 'victory-vendor/d3-shape';

const TAU = 2 * Math.PI;
const EPSILON = 1e-6;

/**
 * Rounds to 3 decimal places, the same as d3 symbols do.
 * @param value the number to round
 */
function round(value: number): number {
  return Math.round(value * 1000) / 1000;
}

/**
 * A drawing context for d3 symbols that writes SVG path data, moved by an offset.
 * d3 draws symbols around the point (0, 0). Patterns need them inside their tile.
 */
class OffsetPathContext implements D3CanvasPath {
  private path = '';

  constructor(
    private readonly dx: number,
    private readonly dy: number,
  ) {}

  moveTo(x: number, y: number): void {
    this.path += `M${round(x + this.dx)},${round(y + this.dy)}`;
  }

  lineTo(x: number, y: number): void {
    this.path += `L${round(x + this.dx)},${round(y + this.dy)}`;
  }

  closePath(): void {
    this.path += 'Z';
  }

  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
    this.path += `Q${round(cpx + this.dx)},${round(cpy + this.dy)},${round(x + this.dx)},${round(y + this.dy)}`;
  }

  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
    this.path += `C${round(cp1x + this.dx)},${round(cp1y + this.dy)},${round(cp2x + this.dx)},${round(cp2y + this.dy)},${round(x + this.dx)},${round(y + this.dy)}`;
  }

  rect(x: number, y: number, w: number, h: number): void {
    this.path += `M${round(x + this.dx)},${round(y + this.dy)}h${round(w)}v${round(h)}h${round(-w)}Z`;
  }

  arc(x: number, y: number, r: number, startAngle: number, endAngle: number, anticlockwise = false): void {
    const sweep = anticlockwise ? 0 : 1;
    const x0 = x + this.dx + r * Math.cos(startAngle);
    const y0 = y + this.dy + r * Math.sin(startAngle);
    if (Math.abs(endAngle - startAngle) >= TAU - EPSILON) {
      // SVG can't draw a full circle in one arc: draw two halves
      const x1 = x + this.dx - r * Math.cos(startAngle);
      const y1 = y + this.dy - r * Math.sin(startAngle);
      this.path += `A${round(r)},${round(r)},0,1,${sweep},${round(x1)},${round(y1)}A${round(r)},${round(r)},0,1,${sweep},${round(x0)},${round(y0)}`;
      return;
    }
    const delta = anticlockwise ? startAngle - endAngle : endAngle - startAngle;
    const largeArc = ((delta % TAU) + TAU) % TAU > Math.PI ? 1 : 0;
    const x1 = x + this.dx + r * Math.cos(endAngle);
    const y1 = y + this.dy + r * Math.sin(endAngle);
    this.path += `A${round(r)},${round(r)},0,${largeArc},${sweep},${round(x1)},${round(y1)}`;
  }

  // No d3 symbol draws with these, and they don't map to SVG path commands directly.
  arcTo(): void {
    throw new Error('arcTo is not supported in pattern symbols');
  }

  ellipse(): void {
    throw new Error('ellipse is not supported in pattern symbols');
  }

  toString(): string {
    return this.path;
  }
}

/**
 * Returns SVG path data of a d3 symbol, centered at the given point.
 * @param symbolType d3 symbol type, such as `symbolStar`
 * @param size area of the symbol, in square pixels
 * @param cx x coordinate of the center
 * @param cy y coordinate of the center
 */
export function getSymbolPath(symbolType: D3SymbolType, size: number, cx: number, cy: number): string {
  const context = new OffsetPathContext(cx, cy);
  symbolType.draw(context, size);
  return context.toString();
}

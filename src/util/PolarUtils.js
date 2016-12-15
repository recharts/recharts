export const RADIAN = Math.PI / 180;

export const polarToCartesian = (cx, cy, radius, angle) => ({
  x: cx + Math.cos(-RADIAN * angle) * radius,
  y: cy + Math.sin(-RADIAN * angle) * radius,
});

export const getMaxRadius = (width, height, margin = {
  top: 0, right: 0, bottom: 0, left: 0,
}) => (
  Math.min(
    Math.abs(width - (margin.left || 0) - (margin.right || 0)),
    Math.abs(height - (margin.left || 0) - (margin.right || 0))
  ) / 2);

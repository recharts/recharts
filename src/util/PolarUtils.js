const RADIAN = Math.PI / 180;

export const polarToCartesian = (cx, cy, radius, angle) => {
  return {
    x: cx + Math.cos(-RADIAN * angle) * radius,
    y: cy + Math.sin(-RADIAN * angle) * radius,
  };
};

export const getMaxRadius = (width, height, cx, cy, margin = {
  top: 0, right: 0, bottom: 0, left: 0,
}) => {
  return Math.min(
    Math.abs(cx - margin.left || 0),
    Math.abs(width - cx - margin.right || 0),
    Math.abs(cy - margin.top || 0),
    Math.abs(height - cy - margin.bottom || 0)
  );
};

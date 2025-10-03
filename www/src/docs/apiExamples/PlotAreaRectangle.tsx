import { PlotArea, Rectangle, usePlotArea } from 'recharts';

export const PlotAreaRectangle = () => {
  const plotArea: PlotArea | undefined = usePlotArea();
  if (plotArea == null) {
    return null;
  }
  return (
    <Rectangle
      x={plotArea.x}
      y={plotArea.y}
      width={plotArea.width}
      height={plotArea.height}
      stroke="#000"
      fill="none"
    />
  );
};

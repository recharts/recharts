import { Label, LineChart, PlotArea, Rectangle, usePlotArea } from 'recharts';

const PlotAreaRectangle = () => {
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

const LabelCartesianPositions = () => {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '500px', maxHeight: '200px', aspectRatio: 1 }}
      responsive
      margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
    >
      <PlotAreaRectangle />
      <Label position="top">top</Label>
      <Label position="bottom">bottom</Label>
      <Label position="left">left</Label>
      <Label position="right">right</Label>
      <Label position="center">center</Label>
      <Label position="insideLeft">insideLeft</Label>
      <Label position="insideRight">insideRight</Label>
      <Label position="insideTop">insideTop</Label>
      <Label position="insideBottom">insideBottom</Label>
      <Label position="insideTopLeft">insideTopLeft</Label>
      <Label position="insideTopRight">insideTopRight</Label>
      <Label position="insideBottomLeft">insideBottomLeft</Label>
      <Label position="insideBottomRight">insideBottomRight</Label>
    </LineChart>
  );
};

export default LabelCartesianPositions;

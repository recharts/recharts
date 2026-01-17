import { Label, LineChart, PlotArea, Rectangle, usePlotArea } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region helper component
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
      stroke="var(--color-border-1)"
      fill="none"
    />
  );
};

// #endregion
const LabelCartesianPositions = () => {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '500px', maxHeight: '200px', aspectRatio: 1 }}
      responsive
      margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
    >
      <PlotAreaRectangle />
      <Label position="top" fill="var(--color-text-3)">
        top
      </Label>
      <Label position="bottom" fill="var(--color-text-3)">
        bottom
      </Label>
      <Label position="left" fill="var(--color-text-3)">
        left
      </Label>
      <Label position="right" fill="var(--color-text-3)">
        right
      </Label>
      <Label position="center" fill="var(--color-text-3)">
        center
      </Label>
      <Label position="insideLeft" fill="var(--color-text-3)">
        insideLeft
      </Label>
      <Label position="insideRight" fill="var(--color-text-3)">
        insideRight
      </Label>
      <Label position="insideTop" fill="var(--color-text-3)">
        insideTop
      </Label>
      <Label position="insideBottom" fill="var(--color-text-3)">
        insideBottom
      </Label>
      <Label position="insideTopLeft" fill="var(--color-text-3)">
        insideTopLeft
      </Label>
      <Label position="insideTopRight" fill="var(--color-text-3)">
        insideTopRight
      </Label>
      <Label position="insideBottomLeft" fill="var(--color-text-3)">
        insideBottomLeft
      </Label>
      <Label position="insideBottomRight" fill="var(--color-text-3)">
        insideBottomRight
      </Label>
      <RechartsDevtools />
    </LineChart>
  );
};

export default LabelCartesianPositions;

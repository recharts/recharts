import { LineChart, Line, XAxis, YAxis, CartesianGrid, usePlotArea } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

/**
 * Custom component that renders annotations using pixel coordinates
 * relative to the chart's plot area (offset-based).
 */
function PixelAnnotations() {
  const plotArea = usePlotArea();

  if (!plotArea) return null;

  // Draw a rectangle at specific pixel coordinates within the plot area
  const rectX = plotArea.x + 50;
  const rectY = plotArea.y + 30;

  // Draw a circle in the center of the plot area
  const centerX = plotArea.x + plotArea.width / 2;
  const centerY = plotArea.y + plotArea.height / 2;

  return (
    <g>
      {/* Rectangle at fixed pixel position */}
      <rect x={rectX} y={rectY} width={80} height={40} fill="rgba(255, 165, 0, 0.3)" stroke="orange" strokeWidth={2} />
      <text x={rectX + 40} y={rectY + 25} textAnchor="middle" fill="orange" fontSize={12}>
        50px, 30px
      </text>

      {/* Circle at center of plot area */}
      <circle cx={centerX} cy={centerY} r={20} fill="rgba(0, 128, 255, 0.3)" stroke="blue" strokeWidth={2} />
      <text x={centerX} y={centerY + 40} textAnchor="middle" fill="blue" fontSize={12}>
        Center
      </text>
    </g>
  );
}

/**
 * This example demonstrates pixel/chart-range based coordinates.
 * The annotations use usePlotArea() to get the chart's plot area dimensions
 * and position elements at specific pixel offsets within that area.
 */
export default function PixelCoordinatesExample() {
  return (
    <LineChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
      <PixelAnnotations />
    </LineChart>
  );
}

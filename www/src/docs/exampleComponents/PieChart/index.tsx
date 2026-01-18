import { Link } from 'react-router';
import CustomActiveShapePieChart from './CustomActiveShapePieChart';
import PieChartWithCustomizedLabel from './PieChartWithCustomizedLabel';
import PieChartWithPaddingAngle from './PieChartWithPaddingAngle';
import StraightAnglePieChart from './StraightAnglePieChart';
import TwoLevelPieChart from './TwoLevelPieChart';
import PieChartWithNeedle from './PieChartWithNeedle';
import customActiveShapePieChartSource from './CustomActiveShapePieChart?raw';
import pieChartWithCustomizedLabelSource from './PieChartWithCustomizedLabel?raw';
import pieChartWithPaddingAngleSource from './PieChartWithPaddingAngle?raw';
import straightAnglePieChartSource from './StraightAnglePieChart?raw';
import twoLevelPieChartSource from './TwoLevelPieChart?raw';
import pieChartWithNeedleSource from './PieChartWithNeedle?raw';
import { ChartExample } from '../types.ts';
import PieChartInFlexbox from './PieChartInFlexbox.tsx';
import pieChartInFlexboxSource from './PieChartInFlexbox?raw';
import PieChartInGrid from './PieChartInGrid.tsx';
import pieChartInGridSource from './PieChartInGrid?raw';
import PieChartNavExample from './PieChartNavExample';
import PieWithGradient from './PieWithGradient';
import pieWithGradientSource from './PieWithGradient?raw';
import { TargetBlankLink } from '../../../components/Shared/TargetBlankLink.tsx';

export { PieChartNavExample };

export const pieChartExamples: Record<string, ChartExample> = {
  TwoLevelPieChart: {
    Component: TwoLevelPieChart,
    sourceCode: twoLevelPieChartSource,
    name: 'Two Level Pie Chart',
  },
  StraightAnglePieChart: {
    Component: StraightAnglePieChart,
    sourceCode: straightAnglePieChartSource,
    name: 'Straight Angle Pie Chart',
  },
  CustomActiveShapePieChart: {
    Component: CustomActiveShapePieChart,
    sourceCode: customActiveShapePieChartSource,
    name: 'Custom Active Shape Pie Chart',
  },
  PieChartWithCustomizedLabel: {
    Component: PieChartWithCustomizedLabel,
    sourceCode: pieChartWithCustomizedLabelSource,
    name: 'Pie Chart With Customized Label',
  },
  PieChartWithPaddingAngle: {
    Component: PieChartWithPaddingAngle,
    sourceCode: pieChartWithPaddingAngleSource,
    name: 'Pie Chart with gap and rounded corners',
  },
  PieChartWithNeedle: {
    Component: PieChartWithNeedle,
    sourceCode: pieChartWithNeedleSource,
    name: 'Pie Chart With Needle',
  },
  PieChartInFlexbox: {
    Component: () => (
      <div style={{ width: '100%', minHeight: '400px' }}>
        <p>
          The <code>responsive</code> prop works well with flexbox. The charts below are in a flex container. Resize the
          window to see how they behave. Each chart is a flex item.
        </p>
        <PieChartInFlexbox />
      </div>
    ),
    sourceCode: pieChartInFlexboxSource,
    name: 'Pie Chart in Flexbox',
  },
  PieChartInGrid: {
    Component: PieChartInGrid,
    sourceCode: pieChartInGridSource,
    name: 'Pie Chart in Grid',
  },
  PieWithGradient: {
    Component: PieWithGradient,
    sourceCode: pieWithGradientSource,
    name: 'Pie Chart with Gradient',
    description: (
      <>
        <p>
          This example demonstrates the use of{' '}
          <TargetBlankLink href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/gradientUnits">
            gradientUnits SVG attribute
          </TargetBlankLink>{' '}
          to create a radial gradient effect on pie sectors.
        </p>
        <p>
          This example uses two different gradients:
          <ol>
            <li>
              <code>{`gradientUnits="userSpaceOnUse"`}</code> creates a gradient that is centered on the whole chart
              element. This is used as the inactive fill background.
            </li>
            <li>
              <code>{`gradientUnits="userSpaceOnUse"`}</code> (the default) with center at each Sector&apos;s center
              coordinates. This makes the gradient appear to radiate out from the center of each individual Sector. This
              is used for fill on hover.
            </li>
          </ol>
          <code>{`gradientUnits="objectBoundingBox"`}</code> (the default value) scales the gradient relative to the{' '}
          <Link to="/api/Sector">Sector</Link> shape, while uses the entire SVG canvas as the reference for the gradient
          position and size.
        </p>
        <p>Also uses a custom clipPath so that the thick stroke on mouse hover does not overlay other Sectors.</p>
      </>
    ),
  },
};

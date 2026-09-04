import React from 'react';
import { Surface, Text } from '../../src';

function Crosshair({ x, y, className, color = 'red' }: { x: number; y: number; className?: string; color?: string }) {
  const coordinateText = `${x.toFixed(1)}, ${y.toFixed(1)}`;
  // Approximate text width calculation (roughly 6.5 pixels per character for 10px bold monospace)
  const textWidth = coordinateText.length * 6.5;

  return (
    <g className={className}>
      <line
        x1={x}
        y1={0}
        x2={x}
        y2="100%"
        stroke={color}
        strokeWidth={2}
        fill="none"
        pointerEvents="none"
        strokeDasharray={4}
      />
      <line
        x1={0}
        y1={y}
        x2="100%"
        y2={y}
        stroke={color}
        strokeWidth={2}
        fill="none"
        pointerEvents="none"
        strokeDasharray={4}
      />
      {/* Background rectangles for text readability */}
      <rect
        x={x + 5}
        y={y - 25}
        width={textWidth + 6}
        height="16"
        fill="rgba(255, 255, 255, 0.9)"
        stroke={color}
        strokeWidth="1"
        rx="2"
        pointerEvents="none"
      />
      {/* Coordinate text labels */}
      <text
        x={x + 8}
        y={y - 12}
        fill={color}
        fontSize="10"
        fontWeight="bold"
        fontFamily="'Courier New', Courier, monospace"
        pointerEvents="none"
      >
        {coordinateText}
      </text>
    </g>
  );
}

export const TextWithDefaultProps = () => {
  return (
    <Surface width={500} height={50}>
      <Crosshair x={10} y={30} />
      <Text x={10} y={30}>
        {'<Text x={10} y={30}>'.repeat(10)}
      </Text>
    </Surface>
  );
};

export const TextWithVerticalAnchor = () => {
  return (
    <Surface width={500} height={300}>
      <Crosshair x={10} y={50} />
      <Text x={10} y={50} verticalAnchor="start">
        {'<Text x={10} y={50} verticalAnchor="start">'.repeat(10)}
      </Text>
      <Crosshair x={10} y={150} />
      <Text x={10} y={150} verticalAnchor="middle">
        {'<Text x={10} y={150} verticalAnchor="middle">'.repeat(10)}
      </Text>
      <Crosshair x={10} y={250} />
      <Text x={10} y={250} verticalAnchor="end">
        {'<Text x={10} y={250} verticalAnchor="end">'.repeat(10)}
      </Text>
    </Surface>
  );
};

export const TextWithMaxLines = () => {
  return (
    <Surface width={500} height={200}>
      <Text x={10} y={30} lineHeight="20px" maxLines={3}>
        {'<Text x={10} y={30} lineHeight="20px" maxLines={3}>'.repeat(10)}
      </Text>
      <Crosshair x={10} y={30} color="red" />
    </Surface>
  );
};

export const TextWithMaxLinesAndWidth = () => {
  return (
    <Surface width={500} height={200}>
      <Text x={10} y={150} lineHeight="20px" maxLines={3} width={400}>
        {'<Text x={10} y={150} lineHeight="20px" maxLines={3} width={400}>'.repeat(10)}
      </Text>
      <Crosshair x={10} y={150} color="red" />
      <Crosshair x={10 + 400} y={150 - 3 * 20} color="blue" />
    </Surface>
  );
};

export const TextWithWidthAndVerticalAnchor = () => {
  return (
    <Surface width={500} height={500}>
      <Text x={10} y={30} width={400} verticalAnchor="start">
        {"<Text x={10} y={30} width={400} verticalAnchor='start'>".repeat(5)}
      </Text>
      <Crosshair x={10} y={30} color="red" />

      <Text x={10} y={250} width={400} verticalAnchor="middle">
        {"<Text x={10} y={250} width={400} verticalAnchor='middle'>".repeat(5)}
      </Text>
      <Crosshair x={10} y={250} color="red" />

      <Text x={10} y={450} width={400} verticalAnchor="end">
        {"<Text x={10} y={450} width={400} verticalAnchor='end'>".repeat(5)}
      </Text>
      <Crosshair x={10} y={450} color="red" />
    </Surface>
  );
};

export const TextWithScaleToFitAndWidth = () => {
  // The text is at different y-coordinate than the props say
  return (
    <Surface width={500} height={200}>
      <Text x={10} y={50} width={200} scaleToFit>
        This is a very long text that should be scaled to fit within 200px width
      </Text>
      <Crosshair x={10} y={50} color="red" />
      <Crosshair x={210} y={50} color="blue" />

      <Text x={10} y={150} width={400} scaleToFit>
        This is a very long text that should be scaled to fit within 400px width and should be larger than above.
      </Text>
      <Crosshair x={10} y={150} color="red" />
      <Crosshair x={410} y={150} color="blue" />
    </Surface>
  );
};

export const TextWithScaleToFitWithoutWidth = () => {
  return (
    <Surface width={500} height={100}>
      <Text x={10} y={50} scaleToFit>
        This text has scaleToFit but no width, so it should render normally without scaling
      </Text>
      <Crosshair x={10} y={50} color="red" />
    </Surface>
  );
};

export const TextWithAngleRotationAroundPivotPoint = () => {
  return (
    <Surface width={500} height={300}>
      <Text x={100} y={50} angle={0}>
        Rotation 0°
      </Text>
      <Crosshair x={100} y={50} color="red" />

      <Text x={200} y={50} angle={45}>
        Rotation 45°
      </Text>
      <Crosshair x={200} y={50} color="red" />

      <Text x={100} y={200} angle={90}>
        Rotation 90°
      </Text>
      <Crosshair x={100} y={200} color="red" />

      <Text x={200} y={200} angle={-45}>
        Rotation -45°
      </Text>
      <Crosshair x={200} y={200} color="red" />
    </Surface>
  );
};

export const TextWithMaxLinesWithoutWidth = () => {
  return (
    <Surface width={500} height={100}>
      <Text x={10} y={50} maxLines={2}>
        This text has maxLines but no width, so it should render as a single line without line breaking or ellipsis
      </Text>
      <Crosshair x={10} y={50} color="red" />
    </Surface>
  );
};

export const TextWithScaleToFitBypassingMaxLines = () => {
  return (
    <Surface width={500} height={200}>
      <Text x={10} y={50} width={300} maxLines={2} lineHeight="20px">
        Normal text with maxLines=2 and width=300: This should wrap to multiple lines and show ellipsis if it overflows
      </Text>
      <Crosshair x={10} y={50} color="red" />

      <Text x={10} y={130} width={300} maxLines={2} scaleToFit lineHeight="20px">
        ScaleToFit text with maxLines=2: This should ignore maxLines and scale to fit in one line instead of wrapping
      </Text>
      <Crosshair x={10} y={130} color="red" />
    </Surface>
  );
};

export const TextWithEllipsisTruncation = () => {
  return (
    <Surface width={500} height={300}>
      <Text x={10} y={50} width={200} maxLines={1} lineHeight="20px">
        This is a very long text that should be truncated with ellipsis when it exceeds the width
      </Text>

      <Text x={10} y={100} width={200} maxLines={2} lineHeight="20px">
        This is a very long text that should wrap to multiple lines and then be truncated with ellipsis when it exceeds
        maxLines
      </Text>

      <Text x={10} y={180} width={200} maxLines={3} lineHeight="20px">
        Short text that fits within constraints should not show ellipsis
      </Text>
    </Surface>
  );
};

export const TextWithBreakAllCharacterBreaking = () => {
  return (
    <Surface width={500} height={200}>
      <Text x={10} y={50} width={150} breakAll={false} lineHeight="20px">
        This text breaks at word boundaries by default
      </Text>
      <Crosshair x={10} y={50} color="red" />
      <Crosshair x={160} y={50} color="blue" />

      <Text x={10} y={130} width={150} breakAll lineHeight="20px">
        Thistextbreaksatcharacterboundarieswhenbreakallisenabledregardlessofspaces
      </Text>
      <Crosshair x={10} y={130} color="red" />
      <Crosshair x={160} y={130} color="blue" />
    </Surface>
  );
};

export const TextWithDifferentTextAnchorAlignments = () => {
  return (
    <Surface width={500} height={200}>
      <Text x={250} y={50} textAnchor="start">
        textAnchor=start
      </Text>
      <Crosshair x={250} y={50} color="red" />

      <Text x={250} y={100} textAnchor="middle">
        textAnchor=middle
      </Text>
      <Crosshair x={250} y={100} color="red" />

      <Text x={250} y={150} textAnchor="end">
        textAnchor=end
      </Text>
      <Crosshair x={250} y={150} color="red" />
    </Surface>
  );
};

export const TextWithUndefinedAndNullChildren = () => {
  return (
    <Surface width={500} height={150}>
      <Text x={10} y={50}>
        {undefined}
      </Text>
      <Text x={10} y={50}>
        Normal text after undefined
      </Text>
      <Crosshair x={10} y={50} color="red" />

      <Text x={10} y={100}>
        {null}
      </Text>
      <Text x={10} y={100}>
        Normal text after null
      </Text>
      <Crosshair x={10} y={100} color="red" />
    </Surface>
  );
};

export const TextWithNumericChildren = () => {
  return (
    <Surface width={500} height={100}>
      <Text x={10} y={50}>
        {42}
      </Text>
      <Text x={100} y={50}>
        {3.14159}
      </Text>
      <Text x={200} y={50}>
        {0}
      </Text>
      <Crosshair x={10} y={50} color="red" />
      <Crosshair x={100} y={50} color="red" />
      <Crosshair x={200} y={50} color="red" />
    </Surface>
  );
};

export const TextWithComplexStyleAndLineHeightCombinations = () => {
  return (
    <Surface width={500} height={300}>
      <Text x={10} y={50} width={200} lineHeight={15} style={{ fontSize: '16px', fontWeight: 'bold' }}>
        Bold text with 1.5 line height that wraps to multiple lines
      </Text>
      <Crosshair x={10} y={50} color="red" />

      <Text x={10} y={150} width={200} lineHeight="30px" style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Italic text with 30px line height that wraps to multiple lines with larger spacing
      </Text>
      <Crosshair x={10} y={150} color="red" />
    </Surface>
  );
};

export const TextWithAngleAndTextAnchorCombinations = () => {
  return (
    <Surface width={500} height={300}>
      <Text x={150} y={100} angle={45} textAnchor="start">
        start + 45°
      </Text>
      <Crosshair x={150} y={100} color="red" />

      <Text x={250} y={150} angle={45} textAnchor="middle">
        middle + 45°
      </Text>
      <Crosshair x={250} y={150} color="red" />

      <Text x={350} y={200} angle={45} textAnchor="end">
        end + 45°
      </Text>
      <Crosshair x={350} y={200} color="red" />
    </Surface>
  );
};

export const TextWithScaleToFitAndAngleCombination = () => {
  return (
    <Surface width={500} height={200}>
      <Text x={100} y={100} width={200} scaleToFit angle={30}>
        This long text should be scaled to fit 200px width and then rotated 30 degrees around the anchor point
      </Text>
      <Crosshair x={100} y={100} color="red" />
      <Crosshair x={300} y={100} color="blue" />
    </Surface>
  );
};

export const TextWithWidthVerticalAnchorAndScaleToFitCombination = () => {
  // All text in this text is placed wrong, looks like a bug to me
  return (
    <Surface width={500} height={400}>
      <Text x={10} y={100} width={300} scaleToFit verticalAnchor="start">
        This long text should be scaled to fit 300px width with verticalAnchor start - text should appear below the
        crosshair
      </Text>
      <Crosshair x={10} y={100} color="red" />

      <Text x={10} y={200} width={300} scaleToFit verticalAnchor="middle">
        This long text should be scaled to fit 300px width with verticalAnchor middle - text should be centered on the
        crosshair
      </Text>
      <Crosshair x={10} y={200} color="red" />

      <Text x={10} y={300} width={300} scaleToFit verticalAnchor="end">
        This long text should be scaled to fit 300px width with verticalAnchor end - text should appear above the
        crosshair
      </Text>
      <Crosshair x={10} y={300} color="red" />
    </Surface>
  );
};

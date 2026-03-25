import { CodeEditorWithPreview } from '../../CodeEditorWithPreview';
import AxisTicksPlayground, { AxisTicksControls } from './NiceTicksPlayground';
import axisTicksPlaygroundSource from './NiceTicksPlayground?raw';
import CustomAxisTicks, { CustomAxisTicksControls } from './CustomAxisTicks.tsx';
import customAxisTicksSource from './CustomAxisTicks.tsx?raw';

export function AxisTicks() {
  return (
    <article>
      <h1>How axis ticks work</h1>
      <p>
        Recharts supports multiple tick generation strategies for numeric axes through the <code>niceTicks</code> prop.
        This guide explains how the strategy, <code>tickCount</code>, and <code>domain</code> interact.
      </p>
      <p>
        The available <code>niceTicks</code> modes are:
      </p>
      <ul>
        <li>
          <code>&apos;none&apos;</code>: Recharts does not apply tick-rounding. Domain is decided by data and{' '}
          <code>domain</code> settings. This option may produce non-round labels and uneven spacing.
        </li>
        <li>
          <code>&apos;auto&apos;</code> (default): Recharts decides the algorithm based on domain settings.
        </li>
        <li>
          <code>&apos;adaptive&apos;</code>: Always uses the space-efficient algorithm, which tends to use chart space
          tightly. It produces round-ish labels like 0/20/40/60/80 or 0/25/50/75, but may skip some round numbers.
        </li>
        <li>
          <code>&apos;snap125&apos;</code>: Always snaps ticks to values from the set {`{(1, 2, 2.5, 5)} × 10ⁿ`}, which
          produces very human-friendly labels like 0/20/40/60/80 or 0/50/100 but may leave extra space at the edges of
          the chart.
        </li>
      </ul>
      <p>
        This prop is available since Recharts 3.8. Before that, the only available mode was <code>{`"auto"`}</code>.
      </p>
      <p>
        Use the controls below to compare strategies and see how <code>tickCount</code> and domain settings influence
        the final ticks.
      </p>
      <CodeEditorWithPreview
        Component={AxisTicksPlayground}
        sourceCode={axisTicksPlaygroundSource}
        Controls={AxisTicksControls}
        stackBlitzTitle="Recharts niceTicks Playground"
        defaultTool="controls"
      />
      <p>
        If you don&apos;t like any of these options, you can also provide your own tick values directly via the{' '}
        <code>ticks</code> prop. This gives you full control over tick positions and labels.
      </p>
      <CodeEditorWithPreview
        Component={CustomAxisTicks}
        sourceCode={customAxisTicksSource}
        stackBlitzTitle="Custom Axis Ticks Example"
        Controls={CustomAxisTicksControls}
        defaultTool="source"
      />
    </article>
  );
}

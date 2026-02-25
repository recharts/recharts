import { CodeEditorWithPreview } from '../../CodeEditorWithPreview';
import AxisTicksPlayground, { AxisTicksControls } from './NiceTicksPlayground';
import axisTicksPlaygroundSource from './NiceTicksPlayground?raw';

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
          <code>&apos;none&apos;</code>: Recharts does not apply its tick-rounding helpers and leaves tick placement to
          d3.
        </li>
        <li>
          <code>&apos;auto&apos;</code> (default): Recharts applies the existing automatic behavior using the
          space-efficient algorithm.
        </li>
        <li>
          <code>&apos;equidistant&apos;</code>: Always uses the space-efficient algorithm, which tends to use chart
          space tightly.
        </li>
        <li>
          <code>&apos;nice&apos;</code>: Always uses the round-number algorithm, which prefers cleaner labels like
          0/5/10/15.
        </li>
      </ul>
      <p>
        Domain shape also matters. When at least one domain endpoint is <code>&apos;auto&apos;</code>, Recharts can
        expand the domain to fit generated ticks. With a fully fixed numeric domain, ticks stay inside that fixed range.
      </p>
      <p>
        Use the controls below to compare strategies and see how <code>tickCount</code> and domain settings influence
        the final ticks.
      </p>
      <CodeEditorWithPreview
        Component={AxisTicksPlayground}
        sourceCode={axisTicksPlaygroundSource}
        Controls={AxisTicksControls}
        stackBlitzTitle="Recharts Axis Ticks Playground"
        defaultTool="controls"
      />
    </article>
  );
}

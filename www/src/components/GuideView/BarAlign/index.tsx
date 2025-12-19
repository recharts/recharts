import { CodeEditorWithPreview } from '../../CodeEditorWithPreview';
import CustomBandScaleExample, { BarAlignControls } from './CustomBandScaleExample';
import customBandScaleExampleSource from './CustomBandScaleExample?raw';
import { TargetBlankLink } from '../../Shared/TargetBlankLink';

export function BarAlign() {
  return (
    <article>
      <h1>Aligning Bars in a BarChart</h1>
      <p>
        BarChart comes with some default settings for aligning bars within their categories. You can use the following
        props to customize the alignment:
      </p>

      <ul>
        <li>
          <strong>barSize</strong>: Controls the width of each Bar. This can be defined in pixels or in percent. If
          undefined, it&apos;s computed based on the available space and number of bars.
        </li>
        <li>
          <strong>barGap</strong>: Controls the distance between Bars in the same category. Increasing this gap will
          shrink the Bar rectangles. This can be defined in pixels or in percent.
        </li>
        <li>
          <strong>barCategoryGap</strong>: This prop controls the gap between categories. It can be specified as a
          percentage of the category width or as a fixed pixel value. This is a shortcut for setting the inner and outer
          padding of the band scale used for the XAxis. Notice how changing this value affects the alignment of the bars
          and XAxis ticks below. This can be defined in pixels or in percent.
        </li>
        <li>
          <strong>scale</strong>: You can provide a custom band scale to the XAxis component to have more control over
          the alignment of bars within their categories. This allows you to set properties like{' '}
          <code>paddingInner</code>, <code>paddingOuter</code>, and <code>align</code> on the scale itself. See{' '}
          <TargetBlankLink href="https://d3js.org/d3-scale/band">d3-scale/band docs</TargetBlankLink> and{' '}
          <TargetBlankLink href="https://observablehq.com/@d3/d3-scaleband">d3-scaleband notebook</TargetBlankLink> for
          more information on band scales.
        </li>
      </ul>

      <h2>Bar alignment playground</h2>

      <CodeEditorWithPreview
        Component={CustomBandScaleExample}
        sourceCode={customBandScaleExampleSource}
        Controls={BarAlignControls}
        stackBlitzTitle="Bar Chart with custom scale"
        defaultTool="controls"
      />
    </article>
  );
}

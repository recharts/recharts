import { CodeEditorWithPreview } from '../../CodeEditorWithPreview';
import CustomBandScaleExample from './CustomBandScaleExample';
import customBandScaleExampleSource from './CustomBandScaleExample?raw';

export function BarAlign() {
  return (
    <article>
      <h1>Bar Chart - barAlign</h1>
      <p>
        The <code>barAlign</code> prop on the <code>&lt;Bar&gt;</code> component allows you to control the alignment of
        bars within their category. It accepts three values: <code>'left'</code>, <code>'center'</code>, and{' '}
        <code>'right'</code>.
      </p>

      <h2>Examples</h2>

      <CodeEditorWithPreview
        Component={CustomBandScaleExample}
        sourceCode={customBandScaleExampleSource}
        stackBlitzTitle={'Bar Chart with custom scale'}
      />

      <h3>Left Aligned Bars</h3>
      <p>Bars aligned to the left of their category.</p>
      {/* Example component for left aligned bars would go here */}

      <h3>Center Aligned Bars</h3>
      <p>Bars centered within their category.</p>
      {/* Example component for center aligned bars would go here */}

      <h3>Right Aligned Bars</h3>
      <p>Bars aligned to the right of their category.</p>
      {/* Example component for right aligned bars would go here */}
    </article>
  );
}

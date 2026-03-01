import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import Step1 from './Step1.tsx';
import step1Source from './Step1.tsx?raw';
import Step2 from './Step2.tsx';
import step2Source from './Step2.tsx?raw';
import Step3 from './Step3.tsx';
import step3Source from './Step3.tsx?raw';

export function TypeScript() {
  return (
    <div className="mod-typescript" id="TypeScript">
      <h3 className="page-title">TypeScript</h3>
      <p>
        Recharts has full support for TypeScript. We ship the type definition directly in the main npm package so you
        don&apos;t need to install any additional packages.
      </p>
      <p>Most components come with strong typing, with one notable exception: data, and dataKeys.</p>
      <h4 className="sub-title">1. Default Usage (everything is &lt;any, any&gt;)</h4>
      <p className="paragraph-title">
        By default, Recharts components fall back to <code>any</code>. This means that if you make a typo in your{' '}
        <code>dataKey</code> or provide the wrong data shape, you won&apos;t be warned by TypeScript.
      </p>
      <div className="step-1">
        <CodeEditorWithPreview
          Component={Step1}
          sourceCode={step1Source}
          stackBlitzTitle="Recharts TypeScript - Default Usage"
        />
      </div>

      <h4 className="sub-title">2. Explicit Typing using Generics</h4>
      <p>This feature is available since Recharts version 3.8.</p>
      <p className="paragraph-title">
        You can provide explicit types to most graphical components and axes (e.g.,{' '}
        <code>&lt;Area&lt;MyDataType, number&gt;&gt;</code>). This enforces that the <code>dataKey</code> actually
        exists on your data, catching errors early.
      </p>
      <p>Once you do this, your IDE should also autocomplete your dataKeys based on your data shape.</p>
      <div className="step-2">
        <CodeEditorWithPreview
          Component={Step2}
          sourceCode={step2Source}
          stackBlitzTitle="Recharts TypeScript - Explicit Generics"
        />
      </div>

      <h4 className="sub-title">3. Strict Typing with Chart Helpers</h4>
      <p>This feature is available since Recharts version 3.8.</p>
      <p className="paragraph-title">
        To perfectly align your layout properties and ensure all your charts, axes, and lines work in harmony, Recharts
        provides four new chart helper functions:
        <ul>
          <li>
            <LinkToApi>createHorizontalChart</LinkToApi>
          </li>
          <li>
            <LinkToApi>createVerticalChart</LinkToApi>
          </li>
          <li>
            <LinkToApi>createRadialChart</LinkToApi>
          </li>
          <li>
            <LinkToApi>createCentricChart</LinkToApi>
          </li>
        </ul>
        Once you define the helper with your generic types, all returned components strictly enforce your data
        structure.
      </p>
      <div className="step-3">
        <CodeEditorWithPreview
          Component={Step3}
          sourceCode={step3Source}
          stackBlitzTitle="Recharts TypeScript - Chart Helpers"
        />
      </div>
    </div>
  );
}

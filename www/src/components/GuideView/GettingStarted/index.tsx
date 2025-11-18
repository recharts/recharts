import { SupportedLocale } from '../../../locale';
import { localeGet } from '../../../utils/LocaleUtils.ts';
import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import Step1 from './Step1.tsx';
import step1Source from './Step1.tsx?raw';
import Step2 from './Step2.tsx';
import step2Source from './Step2.tsx?raw';
import Step3 from './Step3.tsx';
import step3Source from './Step3.tsx?raw';
import Step4 from './Step4.tsx';
import step4Source from './Step4.tsx?raw';
import Step5 from './Step5.tsx';
import step5Source from './Step5.tsx?raw';

export function GettingStarted({ locale }: { locale: SupportedLocale }) {
  return (
    <div className="mod-getting-started" id="Getting_Started">
      <h3 className="page-title">{localeGet(locale, 'getting-started', 'getting-started')}</h3>
      <h4 className="sub-title">{localeGet(locale, 'getting-started', 'step-1-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'getting-started', 'step-1-desc')}</p>
      <div className="step-1">
        <CodeEditorWithPreview
          Component={Step1}
          sourceCode={step1Source}
          stackBlitzTitle="Recharts Getting Started - Step 1"
        />
      </div>

      <h4 className="sub-title">{localeGet(locale, 'getting-started', 'step-2-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'getting-started', 'step-2-desc')}</p>
      <div className="step-2">
        <CodeEditorWithPreview
          Component={Step2}
          sourceCode={step2Source}
          stackBlitzTitle="Recharts Getting Started - Step 2"
        />
      </div>

      <h4 className="sub-title">{localeGet(locale, 'getting-started', 'step-3-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'getting-started', 'step-3-desc')}</p>
      <div className="step-3">
        <CodeEditorWithPreview
          Component={Step3}
          sourceCode={step3Source}
          stackBlitzTitle="Recharts Getting Started - Step 3"
        />
      </div>

      <h4 className="sub-title">{localeGet(locale, 'getting-started', 'step-4-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'getting-started', 'step-4-desc')}</p>
      <div className="step-4">
        <CodeEditorWithPreview
          Component={Step4}
          sourceCode={step4Source}
          stackBlitzTitle="Recharts Getting Started - Step 4"
        />
      </div>

      <h4 className="sub-title">{localeGet(locale, 'getting-started', 'step-5-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'getting-started', 'step-5-desc')}</p>
      <div className="step-5">
        <CodeEditorWithPreview
          Component={Step5}
          sourceCode={step5Source}
          stackBlitzTitle="Recharts Getting Started - Step 5"
        />
      </div>
    </div>
  );
}

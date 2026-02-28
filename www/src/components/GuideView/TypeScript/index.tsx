import { SupportedLocale } from '../../../locale';
import { localeGet } from '../../../utils/LocaleUtils.ts';
import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import Step1 from './Step1.tsx';
import step1Source from './Step1.tsx?raw';
import Step2 from './Step2.tsx';
import step2Source from './Step2.tsx?raw';
import Step3 from './Step3.tsx';
import step3Source from './Step3.tsx?raw';

export function TypeScript({ locale }: { locale: SupportedLocale }) {
  return (
    <div className="mod-typescript" id="TypeScript">
      <h3 className="page-title">{localeGet(locale, 'typescript', 'typescript')}</h3>
      <h4 className="sub-title">{localeGet(locale, 'typescript', 'step-1-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'typescript', 'step-1-desc')}</p>
      <div className="step-1">
        <CodeEditorWithPreview
          Component={Step1}
          sourceCode={step1Source}
          stackBlitzTitle="Recharts TypeScript - Default Usage"
        />
      </div>

      <h4 className="sub-title">{localeGet(locale, 'typescript', 'step-2-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'typescript', 'step-2-desc')}</p>
      <div className="step-2">
        <CodeEditorWithPreview
          Component={Step2}
          sourceCode={step2Source}
          stackBlitzTitle="Recharts TypeScript - Explicit Generics"
        />
      </div>

      <h4 className="sub-title">{localeGet(locale, 'typescript', 'step-3-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'typescript', 'step-3-desc')}</p>
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

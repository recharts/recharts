import { localeGet } from '../../../utils/LocaleUtils.ts';
import { SupportedLocale } from '../../../locale';
import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import CustomizeLabels from './CustomizeLabels.tsx';
import CustomizeLabelsSource from './CustomizeLabels.tsx?raw';
import CustomizeBarShape from './CustomizeBarShape.tsx';
import CustomizeBarShapeSource from './CustomizeBarShape.tsx?raw';
import CustomizeTooltipContent from './CustomizeTooltipContent.tsx';
import CustomizeTooltipContentSource from './CustomizeTooltipContent.tsx?raw';
import CustomizeSizeAndStroke from './CustomizeSizeAndStroke.tsx';
import CustomizeSizeAndStrokeSource from './CustomizeSizeAndStroke.tsx?raw';
import CustomizeLegendAndTooltipStyle from './CustomizeLegendAndTooltipStyle.tsx';
import CustomizeLegendAndTooltipStyleSource from './CustomizeLegendAndTooltipStyle.tsx?raw';

export function Customize({ locale }: { locale: SupportedLocale }) {
  return (
    <article>
      <h3 className="page-title">{localeGet(locale, 'customize', 'customize')}</h3>

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-1-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-1-desc')}</p>
      <CodeEditorWithPreview
        Component={CustomizeLabels}
        sourceCode={CustomizeLabelsSource}
        stackBlitzTitle="Recharts Customize Labels Example"
      />

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-2-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-2-desc')}</p>
      <CodeEditorWithPreview
        Component={CustomizeBarShape}
        sourceCode={CustomizeBarShapeSource}
        stackBlitzTitle="Recharts Customize Bar Shape Example"
      />

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-3-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-3-desc')}</p>
      <CodeEditorWithPreview
        Component={CustomizeTooltipContent}
        sourceCode={CustomizeTooltipContentSource}
        stackBlitzTitle="Recharts Customize Tooltip Content Example"
      />

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-4-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-4-desc')}</p>
      <CodeEditorWithPreview
        Component={CustomizeSizeAndStroke}
        sourceCode={CustomizeSizeAndStrokeSource}
        stackBlitzTitle="Recharts Customize Size And Stroke Example"
      />

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-5-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-5-desc')}</p>
      <CodeEditorWithPreview
        Component={CustomizeLegendAndTooltipStyle}
        sourceCode={CustomizeLegendAndTooltipStyleSource}
        stackBlitzTitle="Recharts Customize Legend And Tooltip Style Example"
      />
    </article>
  );
}

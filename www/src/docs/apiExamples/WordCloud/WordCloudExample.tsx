import { RechartsDevtools } from '@recharts/devtools';
import { Tooltip, WordCloud } from 'recharts';
import type {
  WordCloudDataPoint,
  WordCloudPropAccessor,
  WordCloudProps,
  WordCloudSpiralType,
  WordCloudWord,
} from 'recharts';

type WordCloudExampleDatum = WordCloudDataPoint & {
  term: string;
  score: number;
  tone: 'cool' | 'warm' | 'neutral';
};

const data: ReadonlyArray<WordCloudExampleDatum> = [
  { term: 'React', score: 46, tone: 'cool' },
  { term: 'TypeScript', score: 41, tone: 'cool' },
  { term: 'Accessibility', score: 37, tone: 'warm' },
  { term: 'Performance', score: 35, tone: 'warm' },
  { term: 'Storybook', score: 32, tone: 'warm' },
  { term: 'Responsive', score: 29, tone: 'neutral' },
  { term: 'Tooltip', score: 25, tone: 'cool' },
  { term: 'Layout', score: 24, tone: 'neutral' },
  { term: 'Animation', score: 22, tone: 'warm' },
  { term: 'Recharts', score: 31, tone: 'cool' },
  { term: 'Testing', score: 28, tone: 'neutral' },
  { term: 'SVG', score: 27, tone: 'cool' },
];

const fillAccessor: WordCloudPropAccessor<WordCloudExampleDatum, string | undefined> = entry => {
  if (entry.tone === 'cool') {
    return '#2563eb';
  }
  if (entry.tone === 'warm') {
    return '#ea580c';
  }
  return '#475569';
};

const fontFamilyAccessor: WordCloudPropAccessor<WordCloudExampleDatum, string | undefined> = entry =>
  entry.tone === 'neutral' ? 'Georgia, serif' : 'Trebuchet MS, sans-serif';

const fontStyleAccessor: WordCloudPropAccessor<WordCloudExampleDatum, 'normal' | 'italic'> = entry =>
  entry.tone === 'neutral' ? 'italic' : 'normal';

const fontWeightAccessor: WordCloudPropAccessor<WordCloudExampleDatum, number> = entry =>
  entry.score >= 35 ? 700 : 500;

const fontSizeAccessor: WordCloudPropAccessor<WordCloudExampleDatum, number> = entry => 12 + Math.sqrt(entry.score) * 5;

const rotateAccessor: WordCloudPropAccessor<WordCloudExampleDatum, number> = (_entry, index) =>
  [0, 0, -45, 45][index % 4] ?? 0;

const paddingAccessor: WordCloudPropAccessor<WordCloudExampleDatum, number> = entry => (entry.score >= 35 ? 4 : 3);

const spiral: WordCloudSpiralType = 'archimedean';

const handleWordMouseEnter = (_word: WordCloudWord<WordCloudExampleDatum>) => {};
const handleWordMouseLeave = (_word: WordCloudWord<WordCloudExampleDatum>) => {};
const handleWordClick = (_word: WordCloudWord<WordCloudExampleDatum>) => {};

const wordCloudMetadata: Pick<WordCloudProps<WordCloudExampleDatum>, 'title' | 'desc'> = {
  title: 'Word cloud API example',
  desc: 'A compact word cloud with accessor-driven styling.',
};

const WordCloudExample = () => (
  <div style={{ width: '100%', maxWidth: '860px', height: '520px', margin: '0 auto' }}>
    <WordCloud
      className="word-cloud-api-example"
      data={data}
      dataKey="score"
      nameKey="term"
      desc={wordCloudMetadata.desc}
      fill={fillAccessor}
      fontFamily={fontFamilyAccessor}
      fontSize={fontSizeAccessor}
      fontSizeRange={[14, 46]}
      fontStyle={fontStyleAccessor}
      fontWeight={fontWeightAccessor}
      height="100%"
      id="word-cloud-api-example"
      padding={paddingAccessor}
      responsive
      rotate={rotateAccessor}
      rotationAngles={[0, -45, 45, 90]}
      seed={14}
      spiral={spiral}
      style={{ width: '100%', height: '100%' }}
      throttleDelay={24}
      throttledEvents={['mousemove', 'touchmove']}
      title={wordCloudMetadata.title}
      width="100%"
      onClick={handleWordClick}
      onMouseEnter={handleWordMouseEnter}
      onMouseLeave={handleWordMouseLeave}
    >
      <Tooltip />
      <RechartsDevtools />
    </WordCloud>
  </div>
);

export default WordCloudExample;

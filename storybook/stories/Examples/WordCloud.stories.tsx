import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResponsiveContainer, Tooltip, WordCloud } from '../../../src';
import type { WordCloudProps } from '../../../src';
import { RechartsHookInspector } from '../../storybook-addon-recharts';

type WordCloudDatum = {
  term: string;
  score: number;
  fill?: string;
};

const engineeringTopics: ReadonlyArray<WordCloudDatum> = [
  { term: 'React', score: 48, fill: '#264653' },
  { term: 'TypeScript', score: 44, fill: '#2a9d8f' },
  { term: 'Accessibility', score: 40, fill: '#e9c46a' },
  { term: 'Performance', score: 38, fill: '#f4a261' },
  { term: 'Storybook', score: 34, fill: '#e76f51' },
  { term: 'Recharts', score: 36, fill: '#577590' },
  { term: 'SVG', score: 32, fill: '#43aa8b' },
  { term: 'Hooks', score: 31, fill: '#4d908e' },
  { term: 'Tooltip', score: 27, fill: '#277da1' },
  { term: 'Testing', score: 29, fill: '#90be6d' },
  { term: 'Animation', score: 25, fill: '#f9844a' },
  { term: 'Scales', score: 22, fill: '#577590' },
  { term: 'Layout', score: 28, fill: '#f3722c' },
  { term: 'Data', score: 33, fill: '#f94144' },
  { term: 'Axis', score: 20, fill: '#f8961e' },
  { term: 'Legend', score: 18, fill: '#8ab17d' },
  { term: 'Composable', score: 24, fill: '#6d597a' },
  { term: 'Charts', score: 30, fill: '#355070' },
  { term: 'Design', score: 17, fill: '#b56576' },
  { term: 'Geometry', score: 19, fill: '#457b9d' },
  { term: 'Interaction', score: 23, fill: '#1d3557' },
  { term: 'Docs', score: 16, fill: '#7f5539' },
  { term: 'Open Source', score: 21, fill: '#588157' },
  { term: 'Responsiveness', score: 26, fill: '#bc4749' },
];

const engineeringTopicsMonochrome: ReadonlyArray<Omit<WordCloudDatum, 'fill'>> = engineeringTopics.map(
  ({ fill, ...rest }) => rest,
);

const greetingsCloudData: ReadonlyArray<Omit<WordCloudDatum, 'fill'>> = [
  { term: 'hello', score: 42 },
  { term: 'bonjour', score: 34 },
  { term: 'hola', score: 36 },
  { term: 'ciao', score: 26 },
  { term: 'namaste', score: 33 },
  { term: 'salaam', score: 30 },
  { term: 'shalom', score: 28 },
  { term: 'hej', score: 20 },
  { term: 'olá', score: 25 },
  { term: 'hallo', score: 24 },
  { term: 'szia', score: 21 },
  { term: 'ahoj', score: 20 },
  { term: 'merhaba', score: 31 },
  { term: 'sawubona', score: 29 },
  { term: 'konnichiwa', score: 30 },
  { term: 'annyeong', score: 27 },
  { term: 'ni hao', score: 35 },
  { term: 'xin chao', score: 18 },
  { term: 'molo', score: 19 },
  { term: 'habari', score: 22 },
  { term: 'mbote', score: 24 },
  { term: 'servus', score: 17 },
  { term: 'zdravo', score: 23 },
  { term: 'privet', score: 26 },
  { term: 'γειά', score: 28 },
  { term: 'سلام', score: 34 },
  { term: 'שלום', score: 22 },
  { term: 'مرحبا', score: 32 },
  { term: 'नमस्ते', score: 28 },
  { term: 'สวัสดี', score: 24 },
  { term: 'გამარჯობა', score: 23 },
  { term: 'gamarjoba', score: 19 },
  { term: 'добрый день', score: 21 },
  { term: 'saluton', score: 18 },
  { term: 'hyvää päivää', score: 20 },
  { term: 'god dag', score: 18 },
  { term: 'goedendag', score: 20 },
  { term: 'assalomu alaykum', score: 29 },
  { term: 'selamat pagi', score: 20 },
  { term: 'kumusta', score: 21 },
  { term: 'buna ziua', score: 24 },
  { term: 'kaixo', score: 17 },
  { term: 'tere', score: 16 },
  { term: 'velem', score: 14 },
  { term: 'yo', score: 13 },
  { term: 'salve', score: 19 },
  { term: 'halo', score: 18 },
  { term: 'bon dia', score: 17 },
  { term: 'guten tag', score: 18 },
  { term: 'buongiorno', score: 20 },
  { term: 'dzień dobry', score: 19 },
  { term: 'dobar dan', score: 20 },
  { term: 'god kveld', score: 14 },
  { term: 'god morgon', score: 14 },
  { term: 'goedemorgen', score: 15 },
  { term: 'hyvää huomenta', score: 17 },
  { term: 'grüezi', score: 16 },
  { term: 'bom dia', score: 18 },
  { term: 'boa tarde', score: 17 },
  { term: 'buenas', score: 14 },
  { term: 'qué tal', score: 14 },
  { term: 'aloha', score: 16 },
  { term: 'yo yo', score: 10 },
  { term: 'sup', score: 9 },
  { term: 'howdy', score: 14 },
  { term: 'hiya', score: 13 },
  { term: 'gday', score: 12 },
  { term: 'morning', score: 13 },
  { term: 'evening', score: 12 },
  { term: 'hiya mate', score: 12 },
  { term: 'wassup', score: 11 },
  { term: 'oi', score: 10 },
  { term: 'hej hej', score: 11 },
  { term: 'hei', score: 11 },
  { term: 'tere päevast', score: 13 },
  { term: 'sveiki', score: 13 },
  { term: 'labas', score: 12 },
  { term: 'cześć', score: 14 },
  { term: 'ahlan', score: 16 },
  { term: 'marhaba', score: 17 },
  { term: 'selam', score: 16 },
  { term: 'xin chào', score: 17 },
  { term: 'kumusta ka', score: 16 },
  { term: 'magandang araw', score: 18 },
  { term: 'sawasdee', score: 16 },
  { term: 'mingalaba', score: 17 },
  { term: 'namaskar', score: 18 },
  { term: 'vanakkam', score: 18 },
  { term: 'sat sri akal', score: 17 },
  { term: 'adaab', score: 16 },
  { term: 'kem cho', score: 15 },
  { term: 'ram ram', score: 14 },
  { term: 'jora', score: 10 },
  { term: 'szervusz', score: 15 },
  { term: 'servas', score: 12 },
  { term: 'moin', score: 11 },
  { term: 'tagchen', score: 10 },
  { term: 'halløj', score: 11 },
  { term: 'tjena', score: 11 },
  { term: 'moro', score: 11 },
  { term: 'päivää', score: 12 },
  { term: 'hei maailma', score: 11 },
  { term: 'zdrasti', score: 13 },
  { term: 'dobry večer', score: 12 },
  { term: 'bok', score: 12 },
  { term: 'živjo', score: 12 },
  { term: 'merħba', score: 12 },
  { term: 'salama', score: 11 },
  { term: 'habari gani', score: 14 },
  { term: 'hujambo', score: 13 },
  { term: 'moni', score: 11 },
  { term: 'bawo ni', score: 13 },
  { term: 'ẹ n lẹ', score: 11 },
  { term: 'ndaa', score: 10 },
  { term: 'yáʼátʼééh', score: 11 },
  { term: 'ansi', score: 10 },
  { term: 'tansi', score: 11 },
  { term: 'boozhoo', score: 11 },
  { term: 'osiyo', score: 11 },
  { term: 'skoden', score: 9 },
  { term: 'ʔéy swayel', score: 10 },
  { term: 'talofa', score: 14 },
  { term: 'kia ora', score: 18 },
  { term: 'mālō e lelei', score: 16 },
  { term: 'bula', score: 17 },
  { term: 'ia orana', score: 15 },
  { term: 'rani', score: 9 },
  { term: 'yokwe', score: 12 },
  { term: 'rani kyau', score: 10 },
  { term: 'salam aleikum', score: 11 },
  { term: 'habari yako', score: 10 },
  { term: 'yassas', score: 9 },
  { term: 'alo', score: 8 },
  { term: 'hei hei', score: 9 },
  { term: 'heippa', score: 8 },
  { term: 'hei sun', score: 8 },
  { term: 'ahlan wa sahlan', score: 12 },
  { term: 'marahaba', score: 10 },
  { term: 'namaskara', score: 11 },
  { term: 'nomoshkar', score: 10 },
  { term: 'sain uu', score: 10 },
  { term: 'manao ahoana', score: 12 },
  { term: 'bonjourno', score: 8 },
  { term: 'ave', score: 8 },
  { term: 'hafa adai', score: 12 },
  { term: 'iakwe', score: 10 },
  { term: 'goeie dag', score: 10 },
  { term: 'mbolo', score: 9 },
  { term: 'raa', score: 8 },
  { term: 'ande moien', score: 10 },
  { term: 'gaelic hallo', score: 9 },
  { term: 'sawasdee kha', score: 10 },
  { term: 'me shashte', score: 10 },
  { term: 'saluton amikoj', score: 9 },
  { term: 'warro', score: 8 },
  { term: 'gude', score: 8 },
  { term: 'goeie môre', score: 9 },
  { term: 'tashi delek', score: 13 },
  { term: 'sut mae', score: 11 },
  { term: 'yarama', score: 8 },
  { term: 'bongu', score: 10 },
  { term: 'ni sa bula', score: 11 },
  { term: 'chào bạn', score: 10 },
  { term: 'annyeong haseyo', score: 12 },
  { term: 'mingalarpar', score: 10 },
  { term: 'ass-iyessbhene', score: 9 },
  { term: 'ameggaz', score: 10 },
  { term: 'azul', score: 11 },
  { term: 'oj', score: 8 },
  { term: 'nyob zoo', score: 13 },
  { term: 'sabaï dii', score: 9 },
  { term: 'manahoana', score: 10 },
  { term: 'dobry den', score: 9 },
  { term: 'zdravo ("hi")', score: 8 },
  { term: 'guete tog', score: 10 },
  { term: 'laba diena', score: 9 },
  { term: 'servas di', score: 8 },
];

const greetingsPalette = [
  '#1e88e5',
  '#e53935',
  '#8e24aa',
  '#43a047',
  '#fb8c00',
  '#00acc1',
  '#7cb342',
  '#f4511e',
  '#5e35b1',
  '#6d4c41',
  '#d81b60',
  '#546e7a',
];

function getGreetingsWeight(score: number): number {
  if (score >= 34) {
    return 700;
  }

  if (score >= 20) {
    return 500;
  }

  return 400;
}

type WordCloudStoryProps = WordCloudProps<WordCloudDatum>;
type Story = StoryObj<WordCloudStoryProps>;

function renderWordCloud(args: WordCloudStoryProps, height: number) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <WordCloud {...args}>
        <Tooltip />
        <RechartsHookInspector />
      </WordCloud>
    </ResponsiveContainer>
  );
}

const meta = {
  component: WordCloud as React.ComponentType<WordCloudStoryProps>,
  parameters: {
    docs: {
      autodocs: false,
    },
    controls: {
      include: [
        'dataKey',
        'nameKey',
        'fill',
        'fontFamily',
        'fontStyle',
        'fontWeight',
        'fontSize',
        'fontSizeRange',
        'rotate',
        'rotationAngles',
        'spiral',
        'seed',
        'padding',
      ],
    },
  },
} satisfies Meta<WordCloudStoryProps>;

export default meta;

export const EngineeringTopics: Story = {
  render: args => renderWordCloud(args, 500),
  args: {
    data: engineeringTopics,
    dataKey: 'score',
    nameKey: 'term',
    fontSizeRange: [12, 54],
    rotationAngles: [0, 0, 90],
    spiral: 'archimedean',
    padding: 5,
  },
};

export const SingleColor: Story = {
  render: args => renderWordCloud(args, 420),
  args: {
    data: engineeringTopics,
    dataKey: 'score',
    nameKey: 'term',
    fill: '#2b2d42',
    fontFamily: 'Georgia, serif',
    fontWeight: 600,
    fontSizeRange: [12, 48],
    rotationAngles: [0],
    spiral: 'archimedean',
    padding: 5,
  },
};

export const AccessorStyles: Story = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <WordCloud
          data={engineeringTopicsMonochrome}
          dataKey="score"
          nameKey="term"
          fill={(_entry, index) => ['#264653', '#2a9d8f', '#e76f51', '#577590'][index % 4] ?? '#264653'}
          fontFamily={(_entry, index) => (index % 2 === 0 ? 'Georgia, serif' : 'Trebuchet MS, sans-serif')}
          fontStyle={(_entry, index) => (index % 3 === 0 ? 'italic' : 'normal')}
          fontWeight={entry => (entry.score >= 32 ? 700 : 400)}
          fontSize={entry => 10 + entry.score * 0.72}
          rotate={(_entry, index) => (index % 4) * 30}
          padding={entry => Math.max(3, Math.round(entry.score / 10))}
          spiral="archimedean"
          seed={24}
        >
          <Tooltip />
          <RechartsHookInspector />
        </WordCloud>
      </ResponsiveContainer>
    );
  },
};

export const GreetingsCloud: Story = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height={560}>
        <WordCloud
          data={greetingsCloudData}
          dataKey="score"
          nameKey="term"
          fill={(_entry, index) => greetingsPalette[index % greetingsPalette.length] ?? '#1e88e5'}
          fontFamily='"Noto Sans", "Arial Unicode MS", "Segoe UI Symbol", sans-serif'
          fontWeight={entry => getGreetingsWeight(entry.score)}
          fontSize={entry => 2 + Math.sqrt(entry.score) * 4.2}
          rotate={(_entry, index) => [0, 0, -45, 45, -90, 90, -30, 30, 0, 60, -60][index % 11] ?? 0}
          padding={entry => (entry.score >= 30 ? 1 : 0)}
          spiral="archimedean"
          seed={7}
        >
          <Tooltip />
          <RechartsHookInspector />
        </WordCloud>
      </ResponsiveContainer>
    );
  },
};

export const SpiralComparison: Story = {
  render: () => {
    const comparisonArgs = {
      data: engineeringTopicsMonochrome,
      dataKey: 'score',
      nameKey: 'term',
      fill: '#2b2d42',
      fontFamily: 'Georgia, serif',
      fontWeight: 600,
      fontSizeRange: [12, 44] as [number, number],
      rotationAngles: [0],
      padding: 4,
      seed: 18,
    } satisfies WordCloudStoryProps;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}
      >
        <div>
          <div style={{ marginBottom: 8, fontFamily: 'sans-serif', fontSize: 13, fontWeight: 600 }}>Archimedean</div>
          <ResponsiveContainer width="100%" height={420}>
            <WordCloud {...comparisonArgs} spiral="archimedean">
              <Tooltip />
              <RechartsHookInspector />
            </WordCloud>
          </ResponsiveContainer>
        </div>
        <div>
          <div style={{ marginBottom: 8, fontFamily: 'sans-serif', fontSize: 13, fontWeight: 600 }}>Rectangular</div>
          <ResponsiveContainer width="100%" height={420}>
            <WordCloud {...comparisonArgs} spiral="rectangular">
              <Tooltip />
              <RechartsHookInspector />
            </WordCloud>
          </ResponsiveContainer>
        </div>
      </div>
    );
  },
};

import React from 'react';
import { describe, it } from 'vitest';
import { WordCloud, WordCloudWord, getRelativeCoordinate } from '../../src';

const data = [
  { name: 'alpha', value: 20 },
  { name: 'beta', value: 15 },
];

describe('WordCloud types', () => {
  it('supports typed item callbacks', () => {
    return (
      <WordCloud
        data={data}
        fill={(entry, index) => (index === 0 ? '#f00' : entry.name)}
        fontFamily={entry => (entry.value > 18 ? 'Georgia' : 'Verdana')}
        fontStyle={entry => (entry.value > 18 ? 'italic' : 'normal')}
        fontWeight={entry => (entry.value > 18 ? 700 : 400)}
        fontSize={entry => entry.value + 12}
        rotate={(_entry, index) => index * 15}
        padding={entry => entry.value / 10}
        seed={12}
        spiral="rectangular"
        onClick={(_word: WordCloudWord<(typeof data)[number]>, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseEnter={(_word: WordCloudWord<(typeof data)[number]>, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseLeave={(_word: WordCloudWord<(typeof data)[number]>, e) => {
          getRelativeCoordinate(e);
        }}
      />
    );
  });
});

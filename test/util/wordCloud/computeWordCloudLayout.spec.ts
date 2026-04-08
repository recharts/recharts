import { describe, expect, it, vi } from 'vitest';
import * as DOMUtils from '../../../src/util/DOMUtils';
import { computeWordCloudLayout } from '../../../src/util/wordCloud/computeWordCloudLayout';

describe('computeWordCloudLayout', () => {
  const data = [
    {
      payload: { name: 'Accessibility' },
      text: 'Accessibility',
      value: 50,
      fontSize: 72,
      rotate: 0,
      padding: 4,
      fill: '#000',
      fontFamily: 'Georgia',
      fontStyle: 'normal',
      fontWeight: 700,
      tooltipIndex: '0',
    },
    {
      payload: { name: 'Recharts' },
      text: 'Recharts',
      value: 40,
      fontSize: 54,
      rotate: 0,
      padding: 4,
      fill: '#000',
      fontFamily: 'Georgia',
      fontStyle: 'normal',
      fontWeight: 700,
      tooltipIndex: '1',
    },
    {
      payload: { name: 'Performance' },
      text: 'Performance',
      value: 35,
      fontSize: 42,
      rotate: 0,
      padding: 4,
      fill: '#000',
      fontFamily: 'Georgia',
      fontStyle: 'normal',
      fontWeight: 700,
      tooltipIndex: '2',
    },
    {
      payload: { name: 'Tooltip' },
      text: 'Tooltip',
      value: 25,
      fontSize: 30,
      rotate: 0,
      padding: 4,
      fill: '#000',
      fontFamily: 'Georgia',
      fontStyle: 'normal',
      fontWeight: 700,
      tooltipIndex: '3',
    },
  ] as const;

  it('uses measured word bounds to avoid overlaps', () => {
    vi.spyOn(DOMUtils, 'getStringSize').mockImplementation((text, style) => {
      const fontSize = typeof style.fontSize === 'string' ? Number.parseFloat(style.fontSize) : Number(style.fontSize);

      return {
        width: text.toString().length * fontSize * 0.6,
        height: fontSize,
      };
    });

    const words = computeWordCloudLayout(data, {
      width: 700,
      height: 400,
      spiral: 'archimedean',
      seed: 0,
    });

    expect(words).toHaveLength(4);

    words.forEach((word, index) => {
      words.slice(index + 1).forEach(otherWord => {
        const overlapsHorizontally = Math.abs(word.x - otherWord.x) < (word.width + otherWord.width) / 2;
        const overlapsVertically = Math.abs(word.y - otherWord.y) < (word.height + otherWord.height) / 2;

        expect(overlapsHorizontally && overlapsVertically).toBe(false);
      });
    });
  });

  it('supports rectangular placement', () => {
    vi.spyOn(DOMUtils, 'getStringSize').mockImplementation((text, style) => {
      const fontSize = typeof style.fontSize === 'string' ? Number.parseFloat(style.fontSize) : Number(style.fontSize);

      return {
        width: text.toString().length * fontSize * 0.6,
        height: fontSize,
      };
    });

    const words = computeWordCloudLayout(data, {
      width: 700,
      height: 400,
      spiral: 'rectangular',
      seed: 0,
    });

    expect(words).toHaveLength(4);
    expect(words.some(word => word.x !== 350 || word.y !== 200)).toBe(true);
  });

  it('uses seed to vary the layout deterministically', () => {
    vi.spyOn(DOMUtils, 'getStringSize').mockImplementation((text, style) => {
      const fontSize = typeof style.fontSize === 'string' ? Number.parseFloat(style.fontSize) : Number(style.fontSize);

      return {
        width: text.toString().length * fontSize * 0.6,
        height: fontSize,
      };
    });

    const wordsWithSeedA = computeWordCloudLayout(data, {
      width: 700,
      height: 400,
      spiral: 'archimedean',
      seed: 0,
    });
    const wordsWithSeedB = computeWordCloudLayout(data, {
      width: 700,
      height: 400,
      spiral: 'archimedean',
      seed: 90,
    });

    expect(wordsWithSeedA).toHaveLength(4);
    expect(wordsWithSeedB).toHaveLength(4);
    expect(wordsWithSeedA.map(word => `${word.x},${word.y}`)).not.toEqual(
      wordsWithSeedB.map(word => `${word.x},${word.y}`),
    );
  });
});

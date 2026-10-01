import { render } from '@testing-library/react';
import React, { createRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { darkTheme, emptyTheme, lightTheme, RechartsThemeProvider, Surface, Text } from '../../src';
import { getTextBackgroundRect, resolveBackgroundPadding } from '../../src/component/Text';
import { assertNotNull } from '../helper/assertNotNull';
import { mockGetBBox, restoreMockGetBBox } from '../helper/mockGetBBox';

const textBox = { x: 10, y: 20, width: 50, height: 14 };

function getBackground(container: Element): SVGRectElement | null {
  return container.querySelector('rect.recharts-text-background');
}

describe('resolveBackgroundPadding', () => {
  it('returns the default padding when undefined', () => {
    expect(resolveBackgroundPadding(undefined)).toEqual({ x: 4, y: 2 });
  });

  it('applies a number to both directions', () => {
    expect(resolveBackgroundPadding(7)).toEqual({ x: 7, y: 7 });
  });

  it('allows zero', () => {
    expect(resolveBackgroundPadding(0)).toEqual({ x: 0, y: 0 });
  });

  it('fills in missing directions with defaults', () => {
    expect(resolveBackgroundPadding({ x: 10 })).toEqual({ x: 10, y: 2 });
    expect(resolveBackgroundPadding({ y: 10 })).toEqual({ x: 4, y: 10 });
    expect(resolveBackgroundPadding({})).toEqual({ x: 4, y: 2 });
  });
});

describe('getTextBackgroundRect', () => {
  it('adds padding around the text box', () => {
    expect(getTextBackgroundRect(textBox, { x: 3, y: 1 })).toEqual({ x: 7, y: 19, width: 56, height: 16 });
  });

  it('uses the default padding', () => {
    expect(getTextBackgroundRect(textBox, undefined)).toEqual({ x: 6, y: 18, width: 58, height: 18 });
  });

  it('returns null for an empty text box', () => {
    expect(getTextBackgroundRect({ x: 1, y: 2, width: 0, height: 0 }, 3)).toBeNull();
    expect(getTextBackgroundRect({ x: 1, y: 2, width: 10, height: 0 }, 3)).toBeNull();
    expect(getTextBackgroundRect({ x: 1, y: 2, width: 0, height: 10 }, 3)).toBeNull();
  });
});

describe('<Text background />', () => {
  beforeEach(() => {
    mockGetBBox(() => textBox);
  });

  afterEach(() => {
    restoreMockGetBBox();
  });

  it('renders only the text element when background is not set', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20}>
          text
        </Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text.parentElement?.tagName).toBe('svg');
    expect(container.querySelector('.recharts-text-with-background')).toBeNull();
    expect(getBackground(container)).toBeNull();
  });

  it('renders only the text element when background is false', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} background={false}>
          text
        </Text>
      </Surface>,
    );

    expect(container.querySelector('.recharts-text-with-background')).toBeNull();
    expect(getBackground(container)).toBeNull();
  });

  it('renders a rounded white rectangle behind the text when no theme is set', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} background>
          text
        </Text>
      </Surface>,
    );

    const group = container.querySelector('g.recharts-text-with-background');
    assertNotNull(group);
    expect(group.children).toHaveLength(2);
    const [rect, text] = Array.from(group.children);
    expect(rect.tagName).toBe('rect');
    expect(text.tagName).toBe('text');

    expect(rect).toHaveAttribute('class', 'recharts-text-background');
    expect(rect).toHaveAttribute('fill', '#fff');
    expect(rect).toHaveAttribute('rx', '4');
    expect(rect).toHaveAttribute('x', '6');
    expect(rect).toHaveAttribute('y', '18');
    expect(rect).toHaveAttribute('width', '58');
    expect(rect).toHaveAttribute('height', '18');
    expect(rect).not.toHaveAttribute('transform');
    expect(rect).not.toHaveAttribute('padding');
  });

  it('does not render the rectangle when the element cannot be measured', () => {
    restoreMockGetBBox();
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} background>
          text
        </Text>
      </Surface>,
    );

    expect(container.querySelector('g.recharts-text-with-background text')).not.toBeNull();
    expect(getBackground(container)).toBeNull();
  });

  it('does not render the rectangle when the text has no size', () => {
    mockGetBBox(() => ({ x: 10, y: 20, width: 0, height: 0 }));
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} background>
          text
        </Text>
      </Surface>,
    );

    expect(getBackground(container)).toBeNull();
  });

  it('applies rect props, padding and className from the background object', () => {
    const onClick = vi.fn();
    const { container } = render(
      <Surface width={300} height={300}>
        <Text
          x={10}
          y={20}
          background={{
            fill: 'gold',
            stroke: 'black',
            strokeWidth: 2,
            rx: 0,
            fillOpacity: 0.5,
            className: 'my-background',
            padding: { x: 1, y: 3 },
            onClick,
          }}
        >
          text
        </Text>
      </Surface>,
    );

    const rect = getBackground(container);
    assertNotNull(rect);
    expect(rect).toHaveAttribute('class', 'recharts-text-background my-background');
    expect(rect).toHaveAttribute('fill', 'gold');
    expect(rect).toHaveAttribute('stroke', 'black');
    expect(rect).toHaveAttribute('stroke-width', '2');
    expect(rect).toHaveAttribute('fill-opacity', '0.5');
    expect(rect).toHaveAttribute('rx', '0');
    expect(rect).toHaveAttribute('x', '9');
    expect(rect).toHaveAttribute('y', '17');
    expect(rect).toHaveAttribute('width', '52');
    expect(rect).toHaveAttribute('height', '20');

    rect.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('gives the rectangle the same transform as the text', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} angle={-30} background>
          text
        </Text>
      </Surface>,
    );

    const rect = getBackground(container);
    const text = container.querySelector('text');
    assertNotNull(rect);
    assertNotNull(text);
    expect(text).toHaveAttribute('transform', 'rotate(-30, 10, 20)');
    expect(rect).toHaveAttribute('transform', 'rotate(-30, 10, 20)');
  });

  it('ignores the background when textPath is set', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text textPath="M0,0 L100,100" background>
          text
        </Text>
      </Surface>,
    );

    expect(container.querySelector('.recharts-text-with-background')).toBeNull();
    expect(getBackground(container)).toBeNull();
    expect(container.querySelector('textPath')).not.toBeNull();
  });

  it('resizes the rectangle when the text changes', () => {
    mockGetBBox(element => ({ x: 0, y: 0, width: (element.textContent?.length ?? 0) * 10, height: 10 }));
    const { container, rerender } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} background={{ padding: 0 }}>
          ab
        </Text>
      </Surface>,
    );

    expect(getBackground(container)).toHaveAttribute('width', '20');

    rerender(
      <Surface width={300} height={300}>
        <Text x={10} y={20} background={{ padding: 0 }}>
          abcde
        </Text>
      </Surface>,
    );

    expect(getBackground(container)).toHaveAttribute('width', '50');
  });

  it('measures the text once per render without looping', () => {
    const getBox = vi.fn(() => textBox);
    mockGetBBox(getBox);
    const { rerender } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} background>
          text
        </Text>
      </Surface>,
    );

    // first render measures and stores the box, the second render measures again and finds no change
    expect(getBox).toHaveBeenCalledTimes(2);

    rerender(
      <Surface width={300} height={300}>
        <Text x={10} y={20} background>
          text
        </Text>
      </Surface>,
    );

    expect(getBox).toHaveBeenCalledTimes(3);
  });

  it('removes the rectangle when the background is turned off', () => {
    const { container, rerender } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} background>
          text
        </Text>
      </Surface>,
    );

    expect(getBackground(container)).not.toBeNull();

    rerender(
      <Surface width={300} height={300}>
        <Text x={10} y={20}>
          text
        </Text>
      </Surface>,
    );

    expect(getBackground(container)).toBeNull();
    expect(container.querySelector('.recharts-text-with-background')).toBeNull();
  });

  it.each([
    { name: 'no background', background: undefined },
    { name: 'with background', background: true },
  ])('forwards ref objects to the text element with $name', ({ background }) => {
    const ref = createRef<SVGTextElement>();
    const { container } = render(
      <Surface width={300} height={300}>
        <Text ref={ref} x={10} y={20} background={background}>
          text
        </Text>
      </Surface>,
    );

    expect(ref.current).toBe(container.querySelector('text'));
  });

  it('forwards callback refs to the text element', () => {
    const ref = vi.fn();
    const { container, unmount } = render(
      <Surface width={300} height={300}>
        <Text ref={ref} x={10} y={20} background>
          text
        </Text>
      </Surface>,
    );

    expect(ref).toHaveBeenLastCalledWith(container.querySelector('text'));
    unmount();
    expect(ref).toHaveBeenLastCalledWith(null);
  });

  describe('theme', () => {
    it.each([
      { name: 'light', theme: lightTheme, expected: '#fff' },
      { name: 'dark', theme: darkTheme, expected: '#18181b' },
    ])('fills the background with chart.backgroundColor of the $name theme', ({ theme, expected }) => {
      const { container } = render(
        <RechartsThemeProvider value={theme}>
          <Surface width={300} height={300}>
            <Text x={10} y={20} background>
              text
            </Text>
          </Surface>
        </RechartsThemeProvider>,
      );

      expect(getBackground(container)).toHaveAttribute('fill', expected);
    });

    it('prefers the explicit fill over the theme', () => {
      const { container } = render(
        <RechartsThemeProvider value={darkTheme}>
          <Surface width={300} height={300}>
            <Text x={10} y={20} background={{ fill: 'pink' }}>
              text
            </Text>
          </Surface>
        </RechartsThemeProvider>,
      );

      expect(getBackground(container)).toHaveAttribute('fill', 'pink');
    });

    it('does not apply the legacy fill with an empty theme', () => {
      const { container } = render(
        <RechartsThemeProvider value={emptyTheme}>
          <Surface width={300} height={300}>
            <Text x={10} y={20} background>
              text
            </Text>
          </Surface>
        </RechartsThemeProvider>,
      );

      const rect = getBackground(container);
      assertNotNull(rect);
      expect(rect).not.toHaveAttribute('fill');
    });

    it('does not apply the legacy fill when the theme background is not a string', () => {
      const { container } = render(
        <RechartsThemeProvider value={{ ...lightTheme, chart: { ...lightTheme.chart, backgroundColor: undefined } }}>
          <Surface width={300} height={300}>
            <Text x={10} y={20} background>
              text
            </Text>
          </Surface>
        </RechartsThemeProvider>,
      );

      const rect = getBackground(container);
      assertNotNull(rect);
      expect(rect).not.toHaveAttribute('fill');
    });
  });
});

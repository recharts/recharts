import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { darkTheme, emptyTheme, lightTheme, RechartsThemeProvider, Surface, Text } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

function getText(container: Element): SVGTextElement | null {
  return container.querySelector('text');
}

describe('<Text halo />', () => {
  it('renders no stroke attributes when halo is not set', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20}>
          text
        </Text>
      </Surface>,
    );

    const text = getText(container);
    assertNotNull(text);
    expect(text).not.toHaveAttribute('stroke');
    expect(text).not.toHaveAttribute('paint-order');
  });

  it('renders no stroke attributes when halo is false', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} halo={false}>
          text
        </Text>
      </Surface>,
    );

    const text = getText(container);
    assertNotNull(text);
    expect(text).not.toHaveAttribute('stroke');
    expect(text).not.toHaveAttribute('paint-order');
  });

  it('draws a white halo with default styles when no theme is set', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} halo>
          text
        </Text>
      </Surface>,
    );

    const text = getText(container);
    assertNotNull(text);
    expect(text).toHaveAttribute('stroke', '#fff');
    expect(text).toHaveAttribute('stroke-width', '3');
    expect(text).toHaveAttribute('stroke-linejoin', 'round');
    expect(text).toHaveAttribute('paint-order', 'stroke fill');
  });

  it('applies explicit stroke, strokeWidth, strokeOpacity and strokeLinejoin from the halo object', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} halo={{ stroke: 'gold', strokeWidth: 5, strokeOpacity: 0.5, strokeLinejoin: 'miter' }}>
          text
        </Text>
      </Surface>,
    );

    const text = getText(container);
    assertNotNull(text);
    expect(text).toHaveAttribute('stroke', 'gold');
    expect(text).toHaveAttribute('stroke-width', '5');
    expect(text).toHaveAttribute('stroke-opacity', '0.5');
    expect(text).toHaveAttribute('stroke-linejoin', 'miter');
    expect(text).toHaveAttribute('paint-order', 'stroke fill');
  });

  it('overrides an explicit stroke prop with the halo stroke', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} stroke="black" halo>
          text
        </Text>
      </Surface>,
    );

    const text = getText(container);
    assertNotNull(text);
    expect(text).toHaveAttribute('stroke', '#fff');
  });

  it('still draws the halo when textPath is set, unlike background', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text textPath="M0,0 L100,100" halo>
          text
        </Text>
      </Surface>,
    );

    const text = getText(container);
    assertNotNull(text);
    expect(text).toHaveAttribute('stroke', '#fff');
    expect(text).toHaveAttribute('paint-order', 'stroke fill');
    expect(container.querySelector('textPath')).not.toBeNull();
  });

  it('removes the halo attributes when halo is turned off', () => {
    const { container, rerender } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20} halo>
          text
        </Text>
      </Surface>,
    );

    expect(getText(container)).toHaveAttribute('stroke', '#fff');

    rerender(
      <Surface width={300} height={300}>
        <Text x={10} y={20}>
          text
        </Text>
      </Surface>,
    );

    const text = getText(container);
    assertNotNull(text);
    expect(text).not.toHaveAttribute('stroke');
    expect(text).not.toHaveAttribute('paint-order');
  });

  describe('theme', () => {
    it.each([
      { name: 'light', theme: lightTheme, expected: '#fff' },
      { name: 'dark', theme: darkTheme, expected: '#18181b' },
    ])('strokes the halo with pageBackground of the $name theme', ({ theme, expected }) => {
      const { container } = render(
        <RechartsThemeProvider value={theme}>
          <Surface width={300} height={300}>
            <Text x={10} y={20} halo>
              text
            </Text>
          </Surface>
        </RechartsThemeProvider>,
      );

      expect(getText(container)).toHaveAttribute('stroke', expected);
    });

    it('prefers the explicit stroke over the theme', () => {
      const { container } = render(
        <RechartsThemeProvider value={darkTheme}>
          <Surface width={300} height={300}>
            <Text x={10} y={20} halo={{ stroke: 'pink' }}>
              text
            </Text>
          </Surface>
        </RechartsThemeProvider>,
      );

      expect(getText(container)).toHaveAttribute('stroke', 'pink');
    });

    it('does not apply the legacy stroke with an empty theme', () => {
      const { container } = render(
        <RechartsThemeProvider value={emptyTheme}>
          <Surface width={300} height={300}>
            <Text x={10} y={20} halo>
              text
            </Text>
          </Surface>
        </RechartsThemeProvider>,
      );

      const text = getText(container);
      assertNotNull(text);
      expect(text).not.toHaveAttribute('stroke');
    });

    it('does not apply the legacy stroke when the theme pageBackground is not set', () => {
      const { container } = render(
        <RechartsThemeProvider value={{ ...lightTheme, pageBackground: undefined }}>
          <Surface width={300} height={300}>
            <Text x={10} y={20} halo>
              text
            </Text>
          </Surface>
        </RechartsThemeProvider>,
      );

      const text = getText(container);
      assertNotNull(text);
      expect(text).not.toHaveAttribute('stroke');
    });

    it('strokes the halo with chart.backgroundColor when the theme pageBackground is not set', () => {
      const { container } = render(
        <RechartsThemeProvider
          value={{ ...lightTheme, pageBackground: undefined, chart: { backgroundColor: '#f8fafc' } }}
        >
          <Surface width={300} height={300}>
            <Text x={10} y={20} halo>
              text
            </Text>
          </Surface>
        </RechartsThemeProvider>,
      );

      expect(getText(container)).toHaveAttribute('stroke', '#f8fafc');
    });
  });
});

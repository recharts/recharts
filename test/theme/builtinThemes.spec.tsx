import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { darkTheme, legacyTheme, lightTheme, useRechartsTheme } from '../../src';

function ThemeNameProbe() {
  const theme = useRechartsTheme();
  return <div data-testid="theme-name">{theme.meta?.name}</div>;
}

describe('built-in theme exports', () => {
  it('uses the legacy theme as the default context value', () => {
    const { getByTestId } = render(<ThemeNameProbe />);

    expect(getByTestId('theme-name')).toHaveTextContent('legacy');
  });

  it('preserves the current legacy styling defaults', () => {
    expect(legacyTheme.components?.Area).toMatchObject({
      fillOpacity: 0.6,
    });
    expect(legacyTheme.components?.Pie).toMatchObject({
      fill: '#808080',
      stroke: '#fff',
    });
    expect(legacyTheme.components?.CartesianGrid).toMatchObject({
      stroke: '#ccc',
    });
  });

  it('maps the light theme to the website light CSS tokens', () => {
    expect(lightTheme.meta).toMatchObject({ name: 'light', mode: 'light' });
    expect(lightTheme.colors).toMatchObject({
      surface: '#fff',
      text: '#18181b',
      border: '#a8a29e',
      grid: '#d6d3d1',
      axis: '#52525b',
    });
    expect(lightTheme.series?.palette?.slice(0, 3)).toEqual(['#8884d8', '#82ca9d', '#ffc658']);
    expect(lightTheme.components?.Tooltip?.contentStyle).toMatchObject({
      backgroundColor: '#fff',
      border: '1px solid #a8a29e',
    });
  });

  it('maps the dark theme to the website dark CSS tokens', () => {
    expect(darkTheme.meta).toMatchObject({ name: 'dark', mode: 'dark' });
    expect(darkTheme.colors).toMatchObject({
      surface: '#18181b',
      text: '#f5f5f4',
      border: '#52525b',
      grid: '#3f3f46',
      axis: '#d6d3d1',
    });
    expect(darkTheme.series?.palette?.slice(0, 3)).toEqual(['#8884d8', '#82ca9d', '#ffc658']);
    expect(darkTheme.components?.Tooltip?.contentStyle).toMatchObject({
      backgroundColor: '#18181b',
      border: '1px solid #52525b',
    });
  });
});

import * as React from 'react';
import { darkTheme, lightTheme, RechartsThemeProvider } from 'recharts';

export type RechartsThemeVariant = 'legacy' | 'light' | 'dark';

export const RECHARTS_THEME_VARIANTS = ['legacy', 'light', 'dark'] as const;

export const RECHARTS_THEME_PANEL_LABELS: Record<RechartsThemeVariant, string> = {
  legacy: 'Legacy',
  light: 'Light',
  dark: 'Dark',
};

export function isRechartsThemeVariant(value: unknown): value is RechartsThemeVariant {
  return value === 'legacy' || value === 'light' || value === 'dark';
}

export function getRechartsTheme(): RechartsThemeVariant {
  const value = new URLSearchParams(window.location.search).get('rechartsTheme');
  return isRechartsThemeVariant(value) ? value : 'legacy';
}

export function setCanvasBackground(element: HTMLElement, theme: RechartsThemeVariant) {
  /* eslint-disable no-param-reassign -- intentional DOM style mutation */
  if (theme === 'dark') {
    element.style.backgroundColor = 'black';
  } else if (theme === 'light') {
    element.style.backgroundColor = 'white';
  } else {
    element.style.backgroundColor = '';
  }
  /* eslint-enable no-param-reassign */
}

export function renderWithRechartsTheme(theme: RechartsThemeVariant, story: React.ReactNode): React.ReactNode {
  switch (theme) {
    case 'light':
      return React.createElement(RechartsThemeProvider, { value: lightTheme }, story);
    case 'dark':
      return React.createElement(RechartsThemeProvider, { value: darkTheme }, story);
    default:
      return story;
  }
}

export function getIframeSeamFillBackground(theme: RechartsThemeVariant): string {
  return theme === 'dark' ? 'black' : 'white';
}

export function buildMountUrl(storyId: string, variant: RechartsThemeVariant): string {
  const params = new URLSearchParams({ story: storyId, rechartsTheme: variant });
  return `./index.html?${params.toString()}`;
}

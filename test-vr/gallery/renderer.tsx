import * as React from 'react';
import { flushSync } from 'react-dom';
import type { Root } from 'react-dom/client';
import { darkTheme, lightTheme, RechartsThemeProvider } from 'recharts';
import { contrastBackgroundClassNames } from './canvas';

export type StoryComponent = React.ComponentType<Record<string, unknown>>;
export type RechartsThemeVariant = 'legacy' | 'light' | 'dark';

export function isRechartsThemeVariant(value: unknown): value is RechartsThemeVariant {
  return value === 'legacy' || value === 'light' || value === 'dark';
}

export function getRechartsTheme(): RechartsThemeVariant {
  const value = new URLSearchParams(window.location.search).get('rechartsTheme');
  return isRechartsThemeVariant(value) ? value : 'legacy';
}

export function setCanvasBackground(canvas: HTMLElement, theme: RechartsThemeVariant): void {
  const canvasStyle = canvas.style;
  const isPreviewFrame = new URLSearchParams(window.location.search).get('preview') === 'true';
  const isDarkTheme = theme === 'dark';
  canvas.classList.remove(...Object.values(contrastBackgroundClassNames));

  if (isPreviewFrame) {
    canvas.classList.add(isDarkTheme ? contrastBackgroundClassNames.dark : contrastBackgroundClassNames.light);
    canvasStyle.backgroundColor = '';
    canvasStyle.backgroundImage = '';
    canvasStyle.backgroundPosition = '';
    canvasStyle.backgroundSize = '';
    return;
  }

  if (theme === 'dark') {
    canvasStyle.backgroundColor = 'black';
  } else if (theme === 'light') {
    canvasStyle.backgroundColor = 'white';
  } else {
    canvasStyle.backgroundColor = '';
  }
  canvasStyle.backgroundImage = '';
  canvasStyle.backgroundPosition = '';
  canvasStyle.backgroundSize = '';
}

function renderWithRechartsTheme(theme: RechartsThemeVariant, story: React.ReactNode): React.ReactNode {
  switch (theme) {
    case 'light':
      return <RechartsThemeProvider value={lightTheme}>{story}</RechartsThemeProvider>;
    case 'dark':
      return <RechartsThemeProvider value={darkTheme}>{story}</RechartsThemeProvider>;
    default:
      return story;
  }
}

export function renderStory(
  root: Root,
  canvas: HTMLElement,
  Story: StoryComponent,
  props: Record<string, unknown>,
  theme: RechartsThemeVariant,
): void {
  setCanvasBackground(canvas, theme);

  /*
   * flushSync makes a render error reject the promise returned by mount()
   * instead of being swallowed by React.
   */
  flushSync(() => {
    root.render(renderWithRechartsTheme(theme, <Story {...props} />));
  });
}

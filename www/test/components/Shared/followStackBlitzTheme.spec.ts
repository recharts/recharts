import { afterEach, describe, expect, test } from 'vitest';
import { handleStackBlitzMessage, isDarkColor } from '../../../src/components/Shared/stackblitz/followStackBlitzTheme';

function stackBlitzMessage(background: unknown, origin = 'https://stackblitz.com') {
  return new MessageEvent('message', {
    origin,
    data: { type: 'STACKBLITZ_LOCALSERVICE_OPTIONS', style: { background, foreground: 'hsl(0 0% 80%)', accent: '' } },
  });
}

afterEach(() => {
  document.documentElement.removeAttribute('data-mode');
});

describe('isDarkColor', () => {
  test.each([
    { color: 'hsl(220 10% 14%)', expected: true },
    { color: 'hsl(0 0% 95%)', expected: false },
    { color: '#000', expected: true },
    { color: 'rgb(255, 255, 255)', expected: false },
    { color: 'not a color', expected: undefined },
    { color: '', expected: undefined },
  ])('$color -> $expected', ({ color, expected }) => {
    expect(isDarkColor(color)).toBe(expected);
  });
});

describe('handleStackBlitzMessage', () => {
  test('switches to dark when the StackBlitz editor turns dark', () => {
    handleStackBlitzMessage(stackBlitzMessage('hsl(220 10% 14%)'));
    expect(document.documentElement.dataset.mode).toBe('dark');
  });

  test('switches to light when the StackBlitz editor turns light', () => {
    document.documentElement.dataset.mode = 'dark';
    handleStackBlitzMessage(stackBlitzMessage('hsl(0 0% 95%)'));
    expect(document.documentElement.dataset.mode).toBe('light');
  });

  test('is registered as a window message listener', () => {
    window.dispatchEvent(stackBlitzMessage('hsl(220 10% 14%)'));
    expect(document.documentElement.dataset.mode).toBe('dark');
  });

  test.each([
    { name: 'another origin', event: stackBlitzMessage('hsl(220 10% 14%)', 'https://example.com') },
    {
      name: 'another message type',
      event: new MessageEvent('message', { origin: 'https://stackblitz.com', data: { type: 'OTHER' } }),
    },
    {
      name: 'a string payload',
      event: new MessageEvent('message', { origin: 'https://stackblitz.com', data: 'hello' }),
    },
    { name: 'a missing background', event: stackBlitzMessage(undefined) },
    { name: 'an unreadable background', event: stackBlitzMessage('nope') },
  ])('ignores $name', ({ event }) => {
    document.documentElement.dataset.mode = 'light';
    handleStackBlitzMessage(event);
    expect(document.documentElement.dataset.mode).toBe('light');
  });
});

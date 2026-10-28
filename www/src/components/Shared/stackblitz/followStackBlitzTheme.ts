/*
 * This file is copied as-is into the exported StackBlitz project.
 *
 * It makes the preview follow the StackBlitz editor theme: when you switch the editor
 * between light and dark, the page (and the Recharts autoTheme) switches too.
 *
 * StackBlitz does not document a theme-change event, so this listens to a message it sends
 * to the preview when the theme changes, and reads the editor background color from it.
 * If StackBlitz stops sending that message, the preview keeps the mode from index.html.
 */

type StackBlitzOptionsMessage = {
  type: 'STACKBLITZ_LOCALSERVICE_OPTIONS';
  style?: { background?: unknown };
};

function isStackBlitzOptionsMessage(data: unknown): data is StackBlitzOptionsMessage {
  return typeof data === 'object' && data !== null && 'type' in data && data.type === 'STACKBLITZ_LOCALSERVICE_OPTIONS';
}

/**
 * Returns true for a dark color, false for a light one, and undefined if the color can't be read.
 * The browser parses the color, so any CSS color format works (hsl, rgb, hex, ...).
 */
export function isDarkColor(cssColor: string): boolean | undefined {
  const probe = document.createElement('span');
  probe.style.color = cssColor;
  if (!probe.style.color) {
    return undefined;
  }
  document.body.appendChild(probe);
  const channels = getComputedStyle(probe)
    .color.match(/[\d.]+/g)
    ?.map(Number);
  probe.remove();
  if (!channels || channels.length < 3) {
    return undefined;
  }
  const [r, g, b] = channels;
  // Perceived brightness on a 0-255 scale
  return 0.299 * r + 0.587 * g + 0.114 * b < 128;
}

export function handleStackBlitzMessage(event: MessageEvent): void {
  if (event.origin !== 'https://stackblitz.com' || !isStackBlitzOptionsMessage(event.data)) {
    return;
  }
  const background = event.data.style?.background;
  if (typeof background !== 'string') {
    return;
  }
  const dark = isDarkColor(background);
  if (dark === undefined) {
    return;
  }
  document.documentElement.dataset.mode = dark ? 'dark' : 'light';
}

window.addEventListener('message', handleStackBlitzMessage);

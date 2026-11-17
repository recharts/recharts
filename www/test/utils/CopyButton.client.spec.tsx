import { afterEach, expect, test } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import { CopyButton } from '../../src/utils/CopyButton';

function getMultilineString() {
  return 'line one\nline "two"';
}

function getObject() {
  return { a: 1 };
}

function getNothing(): undefined {
  return undefined;
}

function getEmptyString() {
  return '';
}

afterEach(() => {
  cleanup();
});

test('copies a string as-is, without JSON quoting', async () => {
  // userEvent.setup() installs a clipboard stub that jsdom lacks.
  const user = userEvent.setup();
  render(<CopyButton getValueToCopy={getMultilineString} />);

  await user.click(screen.getByRole('button', { name: 'Copy to clipboard' }));

  await waitFor(async () => expect(await navigator.clipboard.readText()).toBe('line one\nline "two"'));
});

test('copies other values as formatted JSON', async () => {
  const user = userEvent.setup();
  render(<CopyButton getValueToCopy={getObject} />);

  await user.click(screen.getByRole('button', { name: 'Copy to clipboard' }));

  await waitFor(async () => expect(await navigator.clipboard.readText()).toBe('{\n  "a": 1\n}'));
});

test('copies nothing when there is no value', async () => {
  const user = userEvent.setup();
  render(<CopyButton getValueToCopy={getNothing} />);

  await user.click(screen.getByRole('button', { name: 'Copy to clipboard' }));

  expect(await navigator.clipboard.readText()).toBe('');
});

test('uses the toolbar class by default and accepts a custom class', () => {
  const { rerender } = render(<CopyButton getValueToCopy={getEmptyString} />);
  expect(screen.getByRole('button')).toHaveClass('codemirror-toolbar-item');

  rerender(<CopyButton getValueToCopy={getEmptyString} className="custom" />);
  expect(screen.getByRole('button')).toHaveClass('custom');
  expect(screen.getByRole('button')).not.toHaveClass('codemirror-toolbar-item');
});

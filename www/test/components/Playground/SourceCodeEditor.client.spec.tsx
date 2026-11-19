import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { EditorView } from '@codemirror/view';

import { SourceCodeEditor } from '../../../src/components/Playground/SourceCodeEditor';
import { ColorModeProvider, useColorModeStore } from '../../../src/components/color-mode';

const STORAGE_KEY = 'recharts-color-mode';

afterEach(() => {
  localStorage.removeItem(STORAGE_KEY);
  cleanup();
  vi.restoreAllMocks();
});

function ToggleColorModeButton() {
  const { dispatch } = useColorModeStore();
  return (
    <button type="button" onClick={() => dispatch('dark')}>
      switch to dark
    </button>
  );
}

test('preserves in-progress edits when the color mode changes', async () => {
  const { container } = render(
    <ColorModeProvider>
      <SourceCodeEditor value="const answer = 42;" readOnly={false} />
      <ToggleColorModeButton />
    </ColorModeProvider>,
  );

  const editorContent = await waitFor(() => {
    const el = container.querySelector('.cm-content');
    expect(el).toBeTruthy();
    return el as HTMLElement;
  });

  const view = EditorView.findFromDOM(editorContent);
  expect(view).not.toBeNull();

  // Simulate a user edit directly on the editor view.
  view!.dispatch({
    changes: { from: view!.state.doc.length, insert: '\nconst extra = 1;' },
  });
  expect(view!.state.doc.toString()).toContain('const extra = 1;');

  await userEvent.click(screen.getByRole('button', { name: 'switch to dark' }));
  await waitFor(() => {
    expect(document.documentElement).toHaveAttribute('data-mode', 'dark');
  });

  // The editor DOM node and view instance must be reused in place, not recreated,
  // so a stale reference to either one proves the edit survived rather than merely
  // reflecting a detached leftover from before the color-mode change.
  expect(document.body.contains(editorContent)).toBe(true);
  expect(container.querySelector('.cm-content')).toBe(editorContent);
  expect(EditorView.findFromDOM(editorContent)).toBe(view);
  expect(view!.state.doc.toString()).toContain('const extra = 1;');
});

test('shows a copy button that copies the current editor content', async () => {
  // userEvent.setup() installs a clipboard stub that jsdom lacks.
  const user = userEvent.setup();

  const { container } = render(
    <ColorModeProvider>
      <SourceCodeEditor value={'\nnpm install recharts\n'} />
    </ColorModeProvider>,
  );
  await waitFor(() => expect(container.querySelector('.cm-content')).toBeTruthy());

  await user.click(screen.getByRole('button', { name: 'Copy to clipboard' }));

  await waitFor(async () => expect(await navigator.clipboard.readText()).toBe('npm install recharts'));
});

test('hides the copy button when showCopyButton is false', () => {
  render(
    <ColorModeProvider>
      <SourceCodeEditor value="const answer = 42;" showCopyButton={false} />
    </ColorModeProvider>,
  );

  expect(screen.queryByRole('button', { name: 'Copy to clipboard' })).not.toBeInTheDocument();
});

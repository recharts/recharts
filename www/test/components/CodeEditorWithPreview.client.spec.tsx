import { afterEach, expect, test } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { MemoryRouter } from 'react-router';

import { CodeEditorWithPreview } from '../../src/components/CodeEditorWithPreview';
import { ColorModeProvider } from '../../src/components/color-mode';

const sourceCode = `export default function Example() {
  return <p>Example from react-runner</p>;
}
`;

function Example() {
  return <p>Example from the component</p>;
}

function renderEditor() {
  return render(
    <ColorModeProvider>
      <MemoryRouter>
        <CodeEditorWithPreview Component={Example} sourceCode={sourceCode} stackBlitzTitle="Example" />
      </MemoryRouter>
    </ColorModeProvider>,
  );
}

afterEach(() => {
  cleanup();
  sessionStorage.clear();
});

test('copies the source code from the source code toolbar', async () => {
  // userEvent.setup() installs a clipboard stub that jsdom lacks.
  const user = userEvent.setup();
  renderEditor();

  await user.click(screen.getByRole('button', { name: 'Copy to clipboard' }));

  await waitFor(async () => expect(await navigator.clipboard.readText()).toBe(sourceCode));
});

test('switches to edit mode and runs the code with react-runner', async () => {
  const user = userEvent.setup();
  renderEditor();
  expect(screen.getByText('Example from the component')).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Run' })).not.toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: 'Edit' }));

  expect(screen.queryByRole('button', { name: 'Edit' })).not.toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: 'Run' }));

  expect(await screen.findByText('Example from react-runner')).toBeInTheDocument();
  expect(screen.queryByText('Example from the component')).not.toBeInTheDocument();
});

test('shows the hook inspector copy button, which does not copy the source code', async () => {
  const user = userEvent.setup();
  renderEditor();

  await user.selectOptions(screen.getByRole('combobox'), 'devtools');

  expect(screen.queryByRole('button', { name: 'Edit' })).not.toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: 'Copy to clipboard' }));

  // No hook value was reported, so there is nothing to copy.
  expect(await navigator.clipboard.readText()).toBe('');
});

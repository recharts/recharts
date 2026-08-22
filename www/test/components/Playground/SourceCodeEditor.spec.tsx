import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SourceCodeEditor } from '../../../src/components/Playground/SourceCodeEditor';
import { ColorModeProvider } from '../../../src/components/color-mode';

describe('SourceCodeEditor', () => {
  it('renders the source code into server-rendered HTML', () => {
    const sourceCode = 'const answer = 42;';

    const html = renderToString(
      <ColorModeProvider>
        <SourceCodeEditor value={sourceCode} />
      </ColorModeProvider>,
    );

    expect(html).toContain('<pre>');
    expect(html).toContain(sourceCode);
  });
});

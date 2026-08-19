import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SourceCodeEditor } from '../../../src/components/Playground/SourceCodeEditor';

describe('SourceCodeEditor', () => {
  it('renders the source code into server-rendered HTML', () => {
    const sourceCode = 'const answer = 42;';

    const html = renderToString(<SourceCodeEditor value={sourceCode} />);

    expect(html).toContain('<pre>');
    expect(html).toContain(sourceCode);
  });
});

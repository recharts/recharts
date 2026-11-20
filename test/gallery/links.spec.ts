import { describe, expect, it } from 'vitest';
import { getStackBlitzUrl, getStoryFrameUrl } from '../../test-vr/gallery/links';

describe('gallery links', () => {
  it.each(['legacy', 'light', 'dark'] as const)('keeps %s inspection separate from the ordinary preview', theme => {
    const base = 'https://example.com/recharts/canary/vr-gallery/preview.html?story=old';
    const preview = new URL(getStoryFrameUrl('www/GettingStarted/Step1', theme, base));
    const inspection = new URL(getStoryFrameUrl('www/GettingStarted/Step1', theme, base, true));
    expect(preview.pathname).toBe('/recharts/canary/vr-gallery/index.html');
    expect(preview.searchParams.get('preview')).toBe('true');
    expect(preview.searchParams.get('story')).toBe('www/GettingStarted/Step1');
    expect(preview.searchParams.get('rechartsTheme')).toBe(theme);
    expect(preview.searchParams.has('inspect')).toBe(false);
    expect(inspection.searchParams.get('inspect')).toBe('true');
    inspection.searchParams.delete('inspect');
    expect(inspection.toString()).toBe(preview.toString());
  });

  it('resolves inspection from the local gallery path', () => {
    const url = new URL(getStoryFrameUrl('App/LineChart', 'dark', 'http://localhost:3100/gallery/preview.html', true));
    expect(url.origin).toBe('http://localhost:3100');
    expect(url.pathname).toBe('/gallery/index.html');
  });

  it.each(['nested/Example.story.tsx', 'nested/Example.story.jsx'])(
    'opens the selected source file %s and story in StackBlitz',
    file => {
      const url = new URL(getStackBlitzUrl('nested/Example/SelectedStory', file));
      expect(url.origin).toBe('https://stackblitz.com');
      expect(url.pathname).toBe('/github/recharts/recharts/tree/main');
      expect(url.searchParams.get('file')).toBe(`test-vr/tests/${file}`);
      expect(url.searchParams.get('startScript')).toBe('test-vr:dev');
      const initialPath = new URL(url.searchParams.get('initialpath') ?? '', 'https://example.com');
      expect(initialPath.pathname).toBe('/gallery/preview.html');
      expect(initialPath.searchParams.get('story')).toBe('nested/Example/SelectedStory');
    },
  );

  it('supports a committed fork or ref without losing the selected story', () => {
    const url = new URL(getStackBlitzUrl('App/LineChart', 'App.story.tsx', 'contributor/recharts/tree/fix/gallery'));
    expect(url.pathname).toBe('/github/contributor/recharts/tree/fix/gallery');
    expect(url.searchParams.get('file')).toBe('test-vr/tests/App.story.tsx');
  });

  it('encodes special characters in story IDs through both query strings', () => {
    const id = 'Example/Spaces & symbols+#';
    const frame = new URL(getStoryFrameUrl(id, 'legacy', 'https://example.com/preview.html', true));
    expect(frame.searchParams.get('story')).toBe(id);
    const stackblitz = new URL(getStackBlitzUrl(id, 'Example.story.tsx'));
    const initialPath = new URL(stackblitz.searchParams.get('initialpath') ?? '', 'https://example.com');
    expect(initialPath.searchParams.get('story')).toBe(id);
  });
});

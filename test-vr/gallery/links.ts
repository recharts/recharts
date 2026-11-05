import type { RechartsThemeVariant } from './renderer';

/** Resolves the mount page at local or published paths, with optional inspection. */
export function getStoryFrameUrl(
  storyId: string,
  theme: RechartsThemeVariant,
  baseUrl: string,
  inspect = false,
): string {
  const url = new URL('./index.html', baseUrl);
  url.searchParams.set('preview', 'true');
  url.searchParams.set('rechartsTheme', theme);
  url.searchParams.set('story', storyId);
  if (inspect) {
    url.searchParams.set('inspect', 'true');
  }
  return url.toString();
}

/** Builds a source-sharing link that retains the selected story and repository dependencies. */
export function getStackBlitzUrl(
  storyId: string,
  storyFile: string,
  repositoryRef = 'recharts/recharts/tree/main',
): string {
  const url = new URL(`https://stackblitz.com/github/${repositoryRef}`);
  const previewParams = new URLSearchParams({ story: storyId });
  url.searchParams.set('file', `test-vr/tests/${storyFile}`);
  url.searchParams.set('startScript', 'test-vr:dev');
  url.searchParams.set('initialpath', `/gallery/preview.html?${previewParams}`);
  return url.toString();
}

/*
 * The gallery page for Playwright component tests.
 *
 * Playwright's mount() fixture navigates to this page (see baseURL in
 * test-vr/playwright.config.ts) and calls window.mount({ story, props }) to
 * render a story from test-vr/tests/**\/*.story.tsx into #root.
 *
 * See https://playwright.dev/docs/test-components for the stories and
 * galleries model.
 */
import { createRoot, type Root } from 'react-dom/client';
import { getRechartsTheme, renderStory, setCanvasBackground, type StoryComponent } from './renderer';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('The gallery page must contain an element with id "root".');
}
const galleryElement = rootElement;

/*
 * Vite analyzes import.meta.glob statically, relative to this file, so the
 * glob and the story id derivation have to stay here.
 */
const stories = import.meta.glob('../tests/**/*.story.{tsx,jsx}');

function storyIdFromFile(file: string): string {
  return file.replace(/^\.\.\/tests\//, '').replace(/\.story\.\w+$/, '');
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isComponent(value: unknown): value is StoryComponent {
  return typeof value === 'function';
}

async function resolveStory(storyId: string): Promise<StoryComponent> {
  const separator = storyId.lastIndexOf('/');
  const path = separator === -1 ? storyId : storyId.slice(0, separator);
  const name = separator === -1 ? storyId : storyId.slice(separator + 1);
  const file = Object.keys(stories).find(candidate => storyIdFromFile(candidate) === path);
  if (file === undefined) {
    throw new Error(`Unknown story: ${storyId}`);
  }
  const loadStory = stories[file];
  if (loadStory === undefined) {
    throw new Error(`Unknown story: ${storyId}`);
  }
  const module = await loadStory();
  if (!isRecord(module)) {
    throw new Error(`Unknown story: ${storyId}`);
  }
  const story = module[name];
  if (!isComponent(story)) {
    throw new Error(`Unknown story: ${storyId}`);
  }
  return story;
}

/*
 * The root is created once and reused across window.mount calls. Re-rendering
 * into the same root lets React reconcile in place, which is what preserves
 * component state when a test calls component.update(props).
 */
let root: Root | undefined;
const urlParameters = new URLSearchParams(window.location.search);
const isPreviewFrame = urlParameters.get('preview') === 'true';
const previewMessageSource = 'recharts-vr-gallery';

if (isPreviewFrame) {
  document.documentElement.style.margin = '0';
  document.body.style.margin = '0';
  document.body.style.minWidth = '0';
}

declare global {
  interface Window {
    mount: (params: { story: string; props?: Record<string, unknown> }) => Promise<void>;
    unmount: () => Promise<void>;
  }
}

window.mount = async ({ story, props }) => {
  const Story = await resolveStory(story);
  const storyProps: Record<string, unknown> = props ?? {};
  const theme = getRechartsTheme();
  const galleryRoot = root ?? createRoot(galleryElement);
  root = galleryRoot;
  renderStory(galleryRoot, galleryElement, Story, storyProps, theme);
};

window.unmount = async () => {
  root?.unmount();
  root = undefined;
  setCanvasBackground(galleryElement, 'legacy');
};

function postPreviewMessage(message: Record<string, unknown>): void {
  if (!isPreviewFrame || window.parent === window) {
    return;
  }

  window.parent.postMessage({ ...message, source: previewMessageSource }, window.location.origin);
}

if (isPreviewFrame && window.parent !== window) {
  const storyId = urlParameters.get('story');
  if (storyId !== null) {
    window
      .mount({ story: storyId })
      .then(() => {
        requestAnimationFrame(() => {
          postPreviewMessage({ type: 'ready' });
        });
      })
      .catch(error => {
        const message = error instanceof Error ? error.message : String(error);
        galleryElement.textContent = message;
        postPreviewMessage({ message, type: 'error' });
      });
  }
}

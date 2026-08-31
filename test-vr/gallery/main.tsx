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
import * as React from 'react';
import { flushSync } from 'react-dom';
import { createRoot, type Root } from 'react-dom/client';

type StoryComponent = React.ComponentType<Record<string, unknown>>;

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

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('The gallery page must contain an element with id "root".');
}

/*
 * The root is created once and reused across window.mount calls. Re-rendering
 * into the same root lets React reconcile in place, which is what preserves
 * component state when a test calls component.update(props).
 */
let root: Root | undefined;

declare global {
  interface Window {
    mount: (params: { story: string; props?: Record<string, unknown> }) => Promise<void>;
    unmount: () => Promise<void>;
  }
}

window.mount = async ({ story, props }) => {
  const Story = await resolveStory(story);
  const storyProps: Record<string, unknown> = props ?? {};
  const galleryRoot = root ?? createRoot(rootElement);
  root = galleryRoot;
  /*
   * flushSync makes a render error reject the promise returned by mount()
   * instead of being swallowed by React.
   */
  flushSync(() => {
    galleryRoot.render(<Story {...storyProps} />);
  });
};

window.unmount = async () => {
  root?.unmount();
  root = undefined;
};

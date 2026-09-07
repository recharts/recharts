import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  buildMountUrl,
  getIframeSeamFillBackground,
  RECHARTS_THEME_PANEL_LABELS,
  RECHARTS_THEME_VARIANTS,
  type RechartsThemeVariant,
} from './theme';
import './preview.css';

type StoryModule = Record<string, unknown>;

type Story = {
  id: string;
  file: string;
  name: string;
};

const storyModules = import.meta.glob<StoryModule>('../tests/**/*.story.{tsx,jsx}', { eager: true });

function storyFileFromPath(file: string): string {
  return file.replace(/^\.\.\/tests\//, '').replace(/\.story\.\w+$/, '');
}

function isComponent(value: unknown): value is React.ComponentType<Record<string, unknown>> {
  return typeof value === 'function';
}

const stories: Story[] = Object.entries(storyModules)
  .flatMap(([file, module]) => {
    const storyFile = storyFileFromPath(file);

    return Object.entries(module).flatMap(([name, value]) => {
      if (!isComponent(value)) {
        return [];
      }

      return [
        {
          id: `${storyFile}/${name}`,
          file: storyFile,
          name,
        },
      ];
    });
  })
  .sort((left, right) => left.id.localeCompare(right.id));

const storyGroups = Array.from(
  stories
    .reduce((groups, story) => {
      const group = groups.get(story.file);
      if (group === undefined) {
        groups.set(story.file, [story]);
      } else {
        group.push(story);
      }
      return groups;
    }, new Map<string, Story[]>())
    .entries(),
).map(([file, groupedStories]) => ({ file, stories: groupedStories }));

function getStoryIdFromUrl(): string | undefined {
  const storyId = new URLSearchParams(window.location.search).get('story');
  return storyId !== null && stories.some(story => story.id === storyId) ? storyId : stories[0]?.id;
}

const AUTOSIZE_DEADBAND_PX = 2;
const IFRAME_MIN_HEIGHT_PX = 200;

/*
 * Size each iframe to its document scroll box. Width uses max(panel width,
 * document scroll width) so wide charts scroll the panel, not the iframe.
 * Writes are deferred out of ResizeObserver callbacks and guarded by a 2px
 * deadband to avoid layout feedback loops.
 */
function autosizeIframe(
  iframe: HTMLIFrameElement,
  panel: HTMLElement,
  onSizeChange: (width: number, height: number) => void,
): () => void {
  let currentWidth = 0,
    currentHeight = 0,
    contentObserver: ResizeObserver | undefined,
    rafId: number | undefined;

  const measureAndUpdate = () => {
    const doc = iframe.contentWindow?.document;
    if (doc === undefined) {
      return;
    }

    const { scrollWidth, scrollHeight } = doc.documentElement;
    const panelWidth = panel.clientWidth;
    const nextWidth = Math.max(panelWidth, scrollWidth);
    const nextHeight = scrollHeight;

    if (
      Math.abs(nextWidth - currentWidth) < AUTOSIZE_DEADBAND_PX &&
      Math.abs(nextHeight - currentHeight) < AUTOSIZE_DEADBAND_PX
    ) {
      return;
    }

    currentWidth = nextWidth;
    currentHeight = nextHeight;

    if (rafId !== undefined) {
      cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(() => {
      onSizeChange(currentWidth, currentHeight);
      rafId = undefined;
    });
  };

  const setupContentObserver = () => {
    const { contentWindow } = iframe;
    if (contentWindow === null) {
      return;
    }

    const { document: doc } = contentWindow;
    const ResizeObserverCtor = (contentWindow as Window & typeof globalThis).ResizeObserver;
    if (ResizeObserverCtor === undefined) {
      return;
    }

    contentObserver?.disconnect();
    const observer = new ResizeObserverCtor(() => {
      measureAndUpdate();
    });
    contentObserver = observer;
    observer.observe(doc.documentElement);
    measureAndUpdate();
  };

  const handleLoad = () => {
    setupContentObserver();
  };

  iframe.addEventListener('load', handleLoad);
  if (iframe.contentDocument?.readyState === 'complete') {
    handleLoad();
  }

  const panelObserver = new ResizeObserver(() => {
    measureAndUpdate();
    if (iframe.contentDocument?.readyState === 'complete') {
      setupContentObserver();
    }
  });
  panelObserver.observe(panel);

  return () => {
    iframe.removeEventListener('load', handleLoad);
    contentObserver?.disconnect();
    panelObserver.disconnect();
    if (rafId !== undefined) {
      cancelAnimationFrame(rafId);
    }
  };
}

function StoryVariantPanel({ storyId, variant }: { storyId: string; variant: RechartsThemeVariant }) {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [size, setSize] = React.useState({ width: 0, height: IFRAME_MIN_HEIGHT_PX });
  const mountUrl = buildMountUrl(storyId, variant);

  React.useEffect(() => {
    const panel = panelRef.current;
    const iframe = iframeRef.current;
    if (panel === null || iframe === null) {
      return undefined;
    }

    return autosizeIframe(iframe, panel, (width, height) => {
      setSize({ width, height });
    });
  }, [storyId, variant]);

  return (
    <section className="story-panel">
      <header className="story-panel-header">
        <h3>{RECHARTS_THEME_PANEL_LABELS[variant]}</h3>
        <a className="story-panel-link" href={mountUrl} target="_blank" rel="noreferrer">
          Open in new tab
        </a>
      </header>
      <div className="story-panel-frame" ref={panelRef}>
        <iframe
          ref={iframeRef}
          key={`${storyId}-${variant}`}
          title={`${storyId} (${variant})`}
          src={mountUrl}
          className="story-panel-iframe"
          style={{
            width: size.width > 0 ? `${size.width}px` : '100%',
            height: `${size.height}px`,
            background: getIframeSeamFillBackground(variant),
          }}
        />
      </div>
    </section>
  );
}

function StoryVariants({ storyId }: { storyId: string }) {
  return (
    <div className="story-variants">
      {RECHARTS_THEME_VARIANTS.map(variant => (
        <StoryVariantPanel key={variant} storyId={storyId} variant={variant} />
      ))}
    </div>
  );
}

function PreviewApp() {
  const [selectedStoryId, setSelectedStoryId] = React.useState<string | undefined>(getStoryIdFromUrl);
  const selectedStory = stories.find(story => story.id === selectedStoryId);

  React.useEffect(() => {
    const handlePopState = () => {
      setSelectedStoryId(getStoryIdFromUrl());
    };
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function selectStory(storyId: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('story', storyId);
    window.history.pushState(null, '', url);
    setSelectedStoryId(storyId);
  }

  if (selectedStory === undefined) {
    return <main className="gallery-empty">No stories were found.</main>;
  }

  return (
    <div className="gallery">
      <aside className="gallery-sidebar">
        <h1>Recharts story gallery</h1>
        <p>Select a visual-regression story to preview it.</p>
        {storyGroups.map(group => (
          <details
            key={group.file}
            className="story-group"
            open={group.stories.some(story => story.id === selectedStory.id)}
          >
            <summary>{group.file}</summary>
            <nav className="story-list" aria-label={`${group.file} stories`}>
              {group.stories.map(story => (
                <button
                  key={story.id}
                  type="button"
                  className="story-button"
                  aria-current={story.id === selectedStory.id}
                  onClick={() => selectStory(story.id)}
                >
                  {story.name}
                </button>
              ))}
            </nav>
          </details>
        ))}
      </aside>
      <main className="gallery-content">
        <header className="gallery-header">
          <h2>
            {selectedStory.name} <code>{selectedStory.id}</code>
          </h2>
        </header>
        <StoryVariants key={selectedStory.id} storyId={selectedStory.id} />
      </main>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('The gallery preview page must contain an element with id "root".');
}

createRoot(rootElement).render(<PreviewApp />);

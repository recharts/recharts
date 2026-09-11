import * as React from 'react';
import type { RechartsThemeVariant } from './renderer';
import './preview.css';

type StoryComponent = React.ComponentType<Record<string, unknown>>;
type StoryModule = Record<string, unknown>;

type Story = {
  id: string;
  file: string;
  name: string;
  component: StoryComponent;
};

const storyModules = import.meta.glob<StoryModule>('../tests/**/*.story.{tsx,jsx}', { eager: true });

function storyFileFromPath(file: string): string {
  return file.replace(/^\.\.\/tests\//, '').replace(/\.story\.\w+$/, '');
}

function isComponent(value: unknown): value is StoryComponent {
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
          component: value,
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

const themeVariants: readonly {
  theme: RechartsThemeVariant;
  label: string;
  description: string;
}[] = [
  {
    theme: 'legacy',
    label: 'Legacy',
    description: 'No RechartsThemeProvider',
  },
  {
    theme: 'light',
    label: 'Light',
    description: 'lightTheme',
  },
  {
    theme: 'dark',
    label: 'Dark',
    description: 'darkTheme',
  },
];

const STORY_FRAME_WIDTH = 1280;
const STORY_FRAME_HEIGHT = 500;

function getStoryIdFromUrl(): string | undefined {
  const storyId = new URLSearchParams(window.location.search).get('story');
  return storyId !== null && stories.some(story => story.id === storyId) ? storyId : stories[0]?.id;
}

function getStoryFrameUrl(storyId: string, theme: RechartsThemeVariant): string {
  // Preview the same mount page that Playwright uses so story rendering cannot diverge.
  const url = new URL('./index.html', window.location.href);
  url.searchParams.set('preview', 'true');
  url.searchParams.set('rechartsTheme', theme);
  url.searchParams.set('story', storyId);
  return url.toString();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getFrameStatus(value: unknown): { status: 'ready' } | { status: 'error'; message: string } | undefined {
  if (!isRecord(value) || value.source !== 'recharts-vr-gallery') {
    return undefined;
  }

  if (value.type === 'ready') {
    return { status: 'ready' };
  }

  if (value.type === 'error' && typeof value.message === 'string') {
    return { status: 'error', message: value.message };
  }

  return undefined;
}

function StoryPanel({
  story,
  theme,
  label,
  description,
  enabled,
  onSettled,
}: {
  story: Story;
  theme: RechartsThemeVariant;
  label: string;
  description: string;
  enabled: boolean;
  onSettled: () => void;
}) {
  const frameRef = React.useRef<HTMLIFrameElement>(null);
  const [frameStatus, setFrameStatus] = React.useState<
    { status: 'waiting' } | { status: 'loading' } | { status: 'ready' } | { status: 'error'; message: string }
  >({ status: enabled ? 'loading' : 'waiting' });
  const hasSettled = React.useRef(false);

  React.useEffect(() => {
    function handleMessage(event: MessageEvent<unknown>) {
      if (event.origin !== window.location.origin || event.source !== frameRef.current?.contentWindow) {
        return;
      }

      const nextStatus = getFrameStatus(event.data);
      if (nextStatus !== undefined) {
        setFrameStatus(nextStatus);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  React.useEffect(() => {
    if (!enabled) {
      hasSettled.current = false;
      setFrameStatus({ status: 'waiting' });
      return;
    }

    if (frameStatus.status === 'waiting') {
      setFrameStatus({ status: 'loading' });
      return;
    }

    if ((frameStatus.status === 'ready' || frameStatus.status === 'error') && !hasSettled.current) {
      hasSettled.current = true;
      onSettled();
    }
  }, [enabled, frameStatus.status, onSettled]);

  return (
    <section
      className={`story-panel story-panel--${theme}`}
      data-recharts-theme={theme}
      data-status={frameStatus.status}
      aria-busy={frameStatus.status === 'waiting' || frameStatus.status === 'loading'}
    >
      <header className="story-panel-header">
        <h3>{label}</h3>
        <p>{description}</p>
      </header>
      <div className="story-panel-content">
        {enabled ? (
          <iframe
            ref={frameRef}
            className="story-panel-frame"
            title={`${story.name} ${label} theme`}
            src={getStoryFrameUrl(story.id, theme)}
            width={STORY_FRAME_WIDTH}
            height={STORY_FRAME_HEIGHT}
            onError={() => setFrameStatus({ message: 'Failed to load story frame.', status: 'error' })}
          />
        ) : null}
        {frameStatus.status === 'waiting' ? (
          <div className="story-panel-status" role="status">
            Waiting for previous panel...
          </div>
        ) : null}
        {frameStatus.status === 'loading' ? (
          <div className="story-panel-status" role="status">
            Loading story...
          </div>
        ) : null}
        {frameStatus.status === 'error' ? (
          <div className="story-panel-status story-panel-status--error" role="alert">
            {frameStatus.message}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function StoryPreview({ story }: { story: Story }) {
  const [enabledThemeCount, setEnabledThemeCount] = React.useState(1);

  function enableNextTheme(index: number) {
    setEnabledThemeCount(currentCount => Math.max(currentCount, index + 2));
  }

  return (
    <div className="story-variants">
      {themeVariants.map((variant, index) => {
        const enabled = index < enabledThemeCount;
        return (
          <StoryPanel
            key={variant.theme}
            story={story}
            theme={variant.theme}
            label={variant.label}
            description={variant.description}
            enabled={enabled}
            onSettled={() => enableNextTheme(index)}
          />
        );
      })}
    </div>
  );
}

export function PreviewApp() {
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
        <StoryPreview key={selectedStory.id} story={selectedStory} />
      </main>
    </div>
  );
}

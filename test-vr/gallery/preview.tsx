import * as React from 'react';
import { createRoot } from 'react-dom/client';
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

function getStoryIdFromUrl(): string | undefined {
  const storyId = new URLSearchParams(window.location.search).get('story');
  return storyId !== null && stories.some(story => story.id === storyId) ? storyId : stories[0]?.id;
}

function StoryPreview({ story }: { story: Story }) {
  const Story = story.component;
  const props: Record<string, unknown> = {};

  return (
    <div className="story-canvas">
      <Story {...props} />
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
        <StoryPreview key={selectedStory.id} story={selectedStory} />
      </main>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('The gallery preview page must contain an element with id "root".');
}

createRoot(rootElement).render(<PreviewApp />);

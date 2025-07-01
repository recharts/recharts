import React from 'react';
import { useStorybookState, StoryEntry, HashEntry } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { StackBlitzLink } from './StackBlitzLink';
import stackBlitzIcon from './stackblitz.svg';
import { generateImports } from './generateImports';
import { transformRechartsStory } from './transformRechartsStory';

export const StackBlitzButton = () => {
  const storybookState = useStorybookState();

  const { storyId, index } = storybookState;
  const rootEntry: HashEntry = index?.[storyId];

  if (!storyId || index == null || rootEntry == null || rootEntry.type !== 'story') {
    return null;
  }

  const story: StoryEntry = rootEntry;

  const { name, title, args } = story;
  const storySourceCode = story.parameters?.docs.source.originalSource;

  if (storySourceCode == null) {
    return null;
  }

  const modifiedSource = `
import React from 'react';
${generateImports(storySourceCode)}

const args = ${JSON.stringify(args, null, 2)};

${transformRechartsStory(storySourceCode)}
`.trim();

  return (
    <StackBlitzLink code={modifiedSource} title={`Recharts: ${title}/${name}`}>
      <IconButton key="stackblitz" title="Open in StackBlitz">
        <img src={stackBlitzIcon} alt="StackBlitz Icon" style={{ width: '20px', height: '20px' }} />
      </IconButton>
    </StackBlitzLink>
  );
};

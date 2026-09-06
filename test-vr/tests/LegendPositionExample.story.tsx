import * as React from 'react';
import LegendPositionExampleComponent from '../../www/src/docs/exampleComponents/Legend/LegendPositionExample.tsx';
import { WithLightTheme } from './www/StoryTheme';

export const LegendPositionExample = (props: React.ComponentProps<typeof LegendPositionExampleComponent>) => {
  return (
    <WithLightTheme>
      <LegendPositionExampleComponent {...props} />
    </WithLightTheme>
  );
};

import * as React from 'react';
import CellBarExampleComponent from '../../../www/src/docs/exampleComponents/Cell/CellBarExample';
import CellPieExampleComponent from '../../../www/src/docs/exampleComponents/Cell/CellPieExample';

export const CellPieExample = (props: React.ComponentProps<typeof CellPieExampleComponent>) => (
  <CellPieExampleComponent {...props} />
);

export const CellBarExample = (props: React.ComponentProps<typeof CellBarExampleComponent>) => (
  <CellBarExampleComponent {...props} />
);

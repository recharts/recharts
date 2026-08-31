import * as React from 'react';
import DataSnapExampleComponent from '../../../www/src/docs/exampleComponents/useXAxisInverseDataSnapScale/DataSnapExample';
import AxisTickSnapExampleComponent from '../../../www/src/docs/exampleComponents/useXAxisInverseTickSnapScale/AxisTicksSnapExample';

export const DataSnapExample = (props: React.ComponentProps<typeof DataSnapExampleComponent>) => (
  <DataSnapExampleComponent {...props} />
);

export const AxisTickSnapExample = (props: React.ComponentProps<typeof AxisTickSnapExampleComponent>) => (
  <AxisTickSnapExampleComponent {...props} />
);

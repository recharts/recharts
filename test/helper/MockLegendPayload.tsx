import { ReactElement, useCallback } from 'react';
import { useLegendPayloadDispatch } from '../../src/context/legendPayloadContext';
import { LegendPayload } from '../../src/component/DefaultLegendContent';

export const exampleLegendPayload: LegendPayload[] = [
  {
    type: 'cross',
    value: 'test',
  },
];

export function MockLegendPayload({ payload }: { payload: LegendPayload[] }): ReactElement {
  const computeLegendPayload = useCallback(() => payload, [payload]);
  useLegendPayloadDispatch(computeLegendPayload, undefined);
  return null;
}

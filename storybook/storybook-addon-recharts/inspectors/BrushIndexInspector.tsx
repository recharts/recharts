import React from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectChartDataWithIndexes } from '../../../src/state/selectors/dataSelectors';

export function BrushIndexInspector() {
  const { dataStartIndex, dataEndIndex } = useAppSelector(state => selectChartDataWithIndexes(state));
  return (
    <>
      dataStartIndex: {dataStartIndex}, dataEndIndex: {dataEndIndex}
    </>
  );
}

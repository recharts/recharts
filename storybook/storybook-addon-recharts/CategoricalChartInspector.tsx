import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../src/state/hooks';
import { selectAxisScale, selectRealScaleType } from '../../src/state/selectors/axisSelectors';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { ScaleInspector } from './ScaleInspector';
import { selectChartDataWithIndexes } from '../../src/state/selectors/dataSelectors';

// TODO come up with better styling solution, perhaps reuse a component library
const tableStyle: CSSProperties = { border: '1px solid black', borderCollapse: 'collapse' };

// TODO: add more useful things
export function CategoricalChartInspector() {
  const xAxisScale = useAppSelector(state => selectAxisScale(state, 'xAxis', 0, false));
  const xAxisRealScaleType = useAppSelector(state => selectRealScaleType(state, 'xAxis', 0));
  const yAxisScale = useAppSelector(state => selectAxisScale(state, 'yAxis', 0, false));
  const yAxisRealScaleType = useAppSelector(state => selectRealScaleType(state, 'yAxis', 0));
  const { dataStartIndex, dataEndIndex } = useAppSelector(state => selectChartDataWithIndexes(state));

  const layout = useChartLayout();
  return (
    <table style={tableStyle}>
      <tbody>
        <tr style={tableStyle}>
          <th style={tableStyle}>Layout</th>
          <td style={tableStyle}>{layout}</td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>XAxis Scale</th>
          <td style={tableStyle}>
            <ScaleInspector scale={xAxisScale} realScaleType={xAxisRealScaleType} />
          </td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>YAxis Scale</th>
          <td style={tableStyle}>
            <ScaleInspector scale={yAxisScale} realScaleType={yAxisRealScaleType} />
          </td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Brush Indices</th>
          <td style={tableStyle}>StartIndex: {dataStartIndex}</td>
          <td style={tableStyle}>EndIndex: {dataEndIndex}</td>
        </tr>
      </tbody>
    </table>
  );
}

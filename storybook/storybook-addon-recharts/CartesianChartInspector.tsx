import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../src/state/hooks';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { ScaleInspector } from './ScaleInspector';
import { ArrayInspector } from './ArrayInspector';
import {
  selectTooltipAxisRealScaleType,
  selectTooltipAxisScale,
  selectTooltipAxisTicks,
  selectTooltipAxisType,
} from '../../src/state/selectors/tooltipSelectors';
import { ObjectInspector } from './ObjectInspector';
import { selectAxisScale, selectRealScaleType } from '../../src/state/selectors/axisSelectors';
import { selectChartDataWithIndexes } from '../../src/state/selectors/dataSelectors';

// TODO come up with better styling solution, perhaps reuse a component library
const tableStyle: CSSProperties = { border: '1px solid black', borderCollapse: 'collapse' };

export function CartesianChartInspector() {
  const layout = useChartLayout();

  const tooltipAxisType = useAppSelector(selectTooltipAxisType);
  const tooltipAxisScale = useAppSelector(selectTooltipAxisScale);
  const tooltipAxisRealScaleType = useAppSelector(selectTooltipAxisRealScaleType);
  const tooltipAxisTicks = useAppSelector(selectTooltipAxisTicks);

  const tooltipState = useAppSelector(state => state.tooltip);

  const xAxisScale = useAppSelector(state => selectAxisScale(state, 'xAxis', 0, false));
  const xAxisRealScaleType = useAppSelector(state => selectRealScaleType(state, 'xAxis', 0));
  const yAxisScale = useAppSelector(state => selectAxisScale(state, 'yAxis', 0, false));
  const yAxisRealScaleType = useAppSelector(state => selectRealScaleType(state, 'yAxis', 0));
  const { dataStartIndex, dataEndIndex } = useAppSelector(state => selectChartDataWithIndexes(state));

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
        <tr style={tableStyle}>
          <th style={tableStyle}>Tooltip axis type</th>
          <td style={tableStyle}>{tooltipAxisType}</td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Tooltip axis scale</th>
          <td style={tableStyle}>
            <ScaleInspector scale={tooltipAxisScale} realScaleType={tooltipAxisRealScaleType} />
          </td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Tooltip axis ticks</th>
          <td style={tableStyle}>
            <ArrayInspector arr={tooltipAxisTicks} />
          </td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Tooltip state</th>
          <td style={tableStyle}>
            <ObjectInspector obj={tooltipState} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

import React, { CSSProperties, useState } from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { useChartLayout } from '../../../src/context/chartLayoutContext';
import { ScaleInspector } from './generic/ScaleInspector';
import { ArrayInspector } from './generic/ArrayInspector';
import {
  selectTooltipAxisRealScaleType,
  selectTooltipAxisScale,
  selectTooltipAxisTicks,
  selectTooltipAxisType,
} from '../../../src/state/selectors/tooltipSelectors';
import { ObjectInspector } from './generic/ObjectInspector';
import { selectAxisScale, selectRealScaleType } from '../../../src/state/selectors/axisSelectors';
import { selectChartDataWithIndexes } from '../../../src/state/selectors/dataSelectors';

// TODO come up with better styling solution, perhaps reuse a component library
const tableStyle: CSSProperties = { border: '1px solid black', borderCollapse: 'collapse' };

const HOOKS = [
  { key: 'layout', label: 'Layout' },
  { key: 'xAxisScale', label: 'XAxis Scale' },
  { key: 'yAxisScale', label: 'YAxis Scale' },
  { key: 'brushIndices', label: 'Brush Indices' },
  { key: 'tooltipAxisType', label: 'Tooltip axis type' },
  { key: 'tooltipAxisScale', label: 'Tooltip axis scale' },
  { key: 'tooltipAxisTicks', label: 'Tooltip axis ticks' },
  { key: 'tooltipState', label: 'Tooltip state' },
];

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

  const [selected, setSelected] = useState<string[]>(['layout']);

  function handleCheckboxChange(key: string) {
    setSelected(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]));
  }

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        {HOOKS.map(hook => (
          <label key={hook.key} style={{ marginRight: 12 }}>
            <input
              type="checkbox"
              checked={selected.includes(hook.key)}
              onChange={() => handleCheckboxChange(hook.key)}
            />
            {hook.label}
          </label>
        ))}
      </div>
      <table style={tableStyle}>
        <tbody>
          {selected.includes('layout') && (
            <tr style={tableStyle}>
              <th style={tableStyle}>Layout</th>
              <td style={tableStyle}>{layout}</td>
            </tr>
          )}
          {selected.includes('xAxisScale') && (
            <tr style={tableStyle}>
              <th style={tableStyle}>XAxis Scale</th>
              <td style={tableStyle}>
                <ScaleInspector scale={xAxisScale} realScaleType={xAxisRealScaleType} />
              </td>
            </tr>
          )}
          {selected.includes('yAxisScale') && (
            <tr style={tableStyle}>
              <th style={tableStyle}>YAxis Scale</th>
              <td style={tableStyle}>
                <ScaleInspector scale={yAxisScale} realScaleType={yAxisRealScaleType} />
              </td>
            </tr>
          )}
          {selected.includes('brushIndices') && (
            <tr style={tableStyle}>
              <th style={tableStyle}>Brush Indices</th>
              <td style={tableStyle}>StartIndex: {dataStartIndex}</td>
              <td style={tableStyle}>EndIndex: {dataEndIndex}</td>
            </tr>
          )}
          {selected.includes('tooltipAxisType') && (
            <tr style={tableStyle}>
              <th style={tableStyle}>Tooltip axis type</th>
              <td style={tableStyle}>{tooltipAxisType}</td>
            </tr>
          )}
          {selected.includes('tooltipAxisScale') && (
            <tr style={tableStyle}>
              <th style={tableStyle}>Tooltip axis scale</th>
              <td style={tableStyle}>
                <ScaleInspector scale={tooltipAxisScale} realScaleType={tooltipAxisRealScaleType} />
              </td>
            </tr>
          )}
          {selected.includes('tooltipAxisTicks') && (
            <tr style={tableStyle}>
              <th style={tableStyle}>Tooltip axis ticks</th>
              <td style={tableStyle}>
                <ArrayInspector arr={tooltipAxisTicks} />
              </td>
            </tr>
          )}
          {selected.includes('tooltipState') && (
            <tr style={tableStyle}>
              <th style={tableStyle}>Tooltip state</th>
              <td style={tableStyle}>
                <ObjectInspector obj={tooltipState} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

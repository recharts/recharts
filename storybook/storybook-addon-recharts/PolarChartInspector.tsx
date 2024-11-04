import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../src/state/hooks';
import { selectRealScaleType } from '../../src/state/selectors/axisSelectors';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { selectPolarAxisScale } from '../../src/state/selectors/polarScaleSelectors';
import { ScaleInspector } from './ScaleInspector';
import { selectPolarAppliedValues, selectPolarDisplayedData } from '../../src/state/selectors/polarSelectors';
import { ArrayInspector } from './ArrayInspector';

// TODO come up with better styling solution, perhaps reuse a component library
const tableStyle: CSSProperties = { border: '1px solid black', borderCollapse: 'collapse' };

export function PolarChartInspector() {
  const angleAxisScale = useAppSelector(state => selectPolarAxisScale(state, 'angleAxis', 0));
  const angleAxisRealScaleType = useAppSelector(state => selectRealScaleType(state, 'angleAxis', 0));
  const angleAxisDisplayedData = useAppSelector(state => selectPolarDisplayedData(state, 'angleAxis', 0));
  const angleAxisAppliedValues = useAppSelector(state => selectPolarAppliedValues(state, 'angleAxis', 0));
  const layout = useChartLayout();
  const radiusAxisScale = useAppSelector(state => selectPolarAxisScale(state, 'radiusAxis', 0));
  const radiusAxisRealScaleType = useAppSelector(state => selectRealScaleType(state, 'radiusAxis', 0));
  const radiusAxisDisplayedData = useAppSelector(state => selectPolarDisplayedData(state, 'radiusAxis', 0));
  const radiusAxisAppliedValues = useAppSelector(state => selectPolarAppliedValues(state, 'radiusAxis', 0));
  return (
    <table style={tableStyle}>
      <tbody>
        <tr style={tableStyle}>
          <th style={tableStyle}>Layout</th>
          <td style={tableStyle}>{layout}</td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Angle axis scale</th>
          <td style={tableStyle}>
            <ScaleInspector scale={angleAxisScale} realScaleType={angleAxisRealScaleType} />
          </td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Angle axis displayed data</th>
          <td style={tableStyle}>
            <ArrayInspector arr={angleAxisDisplayedData} />
          </td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Angle axis applied values</th>
          <td style={tableStyle}>
            <ArrayInspector arr={angleAxisAppliedValues} />
          </td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Radius axis scale</th>
          <td style={tableStyle}>
            <ScaleInspector scale={radiusAxisScale} realScaleType={radiusAxisRealScaleType} />
          </td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Radius axis displayed data</th>
          <td style={tableStyle}>
            <ArrayInspector arr={radiusAxisDisplayedData} />
          </td>
        </tr>
        <tr style={tableStyle}>
          <th style={tableStyle}>Radius axis applied values</th>
          <td style={tableStyle}>
            <ArrayInspector arr={radiusAxisAppliedValues} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

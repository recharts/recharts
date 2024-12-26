import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../src/state/hooks';
import { selectRealScaleType } from '../../src/state/selectors/axisSelectors';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { selectPolarAxisScale, selectPolarAxisTicks } from '../../src/state/selectors/polarScaleSelectors';
import { ScaleInspector } from './ScaleInspector';
import { selectPolarAppliedValues, selectPolarDisplayedData } from '../../src/state/selectors/polarSelectors';
import { ArrayInspector } from './ArrayInspector';
import {
  selectTooltipAxisRealScaleType,
  selectTooltipAxisScale,
  selectTooltipAxisTicks,
  selectTooltipAxisType,
} from '../../src/state/selectors/tooltipSelectors';
import { ObjectInspector } from './ObjectInspector';

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
  const radiusAxisTicks = useAppSelector(state => selectPolarAxisTicks(state, 'radiusAxis', 0, false));

  const tooltipAxisType = useAppSelector(selectTooltipAxisType);
  const tooltipAxisScale = useAppSelector(selectTooltipAxisScale);
  const tooltipAxisRealScaleType = useAppSelector(selectTooltipAxisRealScaleType);
  const tooltipAxisTicks = useAppSelector(selectTooltipAxisTicks);

  const tooltipState = useAppSelector(state => state.tooltip);

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
        <tr style={tableStyle}>
          <th style={tableStyle}>Radius axis ticks</th>
          <td style={tableStyle}>
            <ArrayInspector arr={radiusAxisTicks} />
          </td>
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

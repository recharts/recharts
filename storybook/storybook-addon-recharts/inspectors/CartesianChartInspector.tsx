import React, { ComponentType, CSSProperties, useEffect } from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectTooltipAxisType } from '../../../src/state/selectors/tooltipSelectors';
import { LayoutTypeInspector } from './LayoutTypeInspector';
import { XAxisScaleInspector } from './XAxisScaleInspector';
import { YAxisScaleInspector } from './YAxisScaleInspector';
import { BrushIndexInspector } from './BrushIndexInspector';
import { TooltipAxisScaleInspector } from './TooltipAxisScaleInspector';
import { TooltipAxisTicksInspector } from './TooltipAxisTicksInspector';
import { TooltipStateInspector } from './TooltipStateInspector';
import { ChartDimensionInspector } from './ChartDimensionInspector';
import { ChartInspectorProps } from './types';
import { useLocalStorageState } from '../useLocalStorageState';
import { OffsetInspector } from './OffsetInspector';
import { SelectChartViewBoxInspector } from './SelectChartViewBoxInspector';
import { UseViewBoxInspector } from './UseViewBoxInspector';
import { BrushSettingsInspector } from './BrushSettingsInspector';
import { SelectBrushDimensionsInspector } from './SelectBrushDimensionsInspector';

/**
 * These are available publicly, are part of the external Recharts API.
 */
const externalInspectors: Record<string, ComponentType> = {
  'useChartWidth, useChartHeight': ChartDimensionInspector,
};

/**
 * These are internal inspectors, not part of the external Recharts API.
 * They are used for debugging and development purposes and are not intended for public use.
 * So we're only going to show them when running on localhost.
 */
const internalInspectors: Record<string, ComponentType> = {
  useChartLayout: LayoutTypeInspector,
  useOffset: OffsetInspector,
  selectChartViewBox: SelectChartViewBoxInspector,
  useViewBox: UseViewBoxInspector,
  'XAxis Scale': XAxisScaleInspector,
  'YAxis Scale': YAxisScaleInspector,
  'Tooltip Axis Scale': TooltipAxisScaleInspector,
  selectTooltipAxisTicks: TooltipAxisTicksInspector,
  selectTooltipState: TooltipStateInspector,
  'Brush Indices': BrushIndexInspector,
  selectBrushSettings: BrushSettingsInspector,
  selectBrushDimensions: SelectBrushDimensionsInspector,
  selectTooltipAxisType: () => useAppSelector(selectTooltipAxisType),
};

const isLocalhost = window.location.hostname === 'localhost';

const allInspectors: Record<string, ComponentType> = {
  ...externalInspectors,
  ...(isLocalhost ? internalInspectors : {}),
};

// TODO come up with better styling solution, perhaps reuse a component library
const tableStyle: CSSProperties = {
  border: '1px solid black',
  borderCollapse: 'collapse',
  padding: '1ex',
};

export function CartesianChartInspector({ setEnabledOverlays }: ChartInspectorProps) {
  const [selected, setSelected] = useLocalStorageState<ReadonlyArray<string>>('CartesianChartInspector', []);

  function handleCheckboxChange(key: string) {
    setSelected(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]));
  }

  useEffect(() => {
    const enabledOverlays = selected.filter(k => ['useChartWidth, useChartHeight', 'useOffset'].includes(k));
    setEnabledOverlays(enabledOverlays);
  }, [selected, setEnabledOverlays]);

  const enabledInspectors: ReadonlyArray<[string, ComponentType]> = Object.entries(allInspectors).filter(([name]) =>
    selected.includes(name),
  );

  return (
    <div>
      <div style={{ marginBottom: 8, display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(allInspectors).map(name => (
          <label key={name} style={{ marginRight: 12, whiteSpace: 'nowrap' }}>
            <input type="checkbox" checked={selected.includes(name)} onChange={() => handleCheckboxChange(name)} />
            {name}
          </label>
        ))}
      </div>
      <table style={tableStyle}>
        <tbody>
          {enabledInspectors.map(([name, Component]) => (
            <tr style={tableStyle}>
              <th style={tableStyle}>{name}</th>
              <td style={tableStyle}>
                <Component />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

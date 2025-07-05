import React, { ComponentType, CSSProperties, useEffect } from 'react';
import { useLocalStorageState } from '../useLocalStorageState';

export type InspectorProps = {
  setEnabledOverlays: (overlays: ReadonlyArray<string>) => void;
  allInspectors: Record<string, ComponentType>;
  defaultOpened?: string;
};

// TODO come up with better styling solution, perhaps reuse a component library
const tableStyle: CSSProperties = {
  border: '1px solid black',
  borderCollapse: 'collapse',
  padding: '1ex',
};

export function ChartInspector({ setEnabledOverlays, allInspectors, defaultOpened }: InspectorProps) {
  const [selected, setSelected] = useLocalStorageState('CartesianChartInspector', [defaultOpened]);

  function handleCheckboxChange(key: string) {
    setSelected(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]));
  }

  useEffect(() => {
    setEnabledOverlays(selected);
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

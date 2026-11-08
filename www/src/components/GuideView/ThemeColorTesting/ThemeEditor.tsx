import { useCallback, useState } from 'react';
import { toHex } from '@recharts/devtools/theme';
import { type CheckerState, isValidColor, stateFromPreset } from './checkerState.ts';
import styles from './themeChecker.module.css';

type ColorFieldProps = {
  /** Passed back to `onChange`, so that one callback can serve several fields. */
  name: string;
  label: string;
  value: string;
  onChange: (value: string, name: string) => void;
};

/** A native color picker next to a text field, so any CSS color can be typed in. */
function ColorField({ name, label, value, onChange }: ColorFieldProps) {
  const valid = isValidColor(value);
  return (
    <span className={styles.colorField}>
      <input
        type="color"
        aria-label={`${label}, color picker`}
        value={valid ? toHex(value) : '#000000'}
        onChange={e => onChange(e.target.value, name)}
      />
      <input
        type="text"
        aria-label={label}
        aria-invalid={!valid}
        className={valid ? undefined : styles.invalid}
        value={value}
        onChange={e => onChange(e.target.value, name)}
      />
    </span>
  );
}

type ThemeEditorProps = {
  state: CheckerState;
  onChange: (state: CheckerState) => void;
};

export default function ThemeEditor({ state, onChange }: ThemeEditorProps) {
  const [pasted, setPasted] = useState('');
  const update = (patch: Partial<CheckerState>) => onChange({ ...state, ...patch });

  const setSeries = useCallback(
    (color: string, index: string) =>
      onChange({ ...state, series: state.series.map((c, i) => (i === Number(index) ? color : c)) }),
    [state, onChange],
  );
  const setColor = useCallback(
    (color: string, name: string) =>
      onChange(name === 'pageBackground' ? { ...state, pageBackground: color } : { ...state, labelColor: color }),
    [state, onChange],
  );
  const removeSeries = (index: number) => update({ series: state.series.filter((_, i) => i !== index) });
  const moveSeries = (index: number, by: -1 | 1) => {
    const series = [...state.series];
    const target = index + by;
    if (target < 0 || target >= series.length) {
      return;
    }
    [series[index], series[target]] = [series[target], series[index]];
    update({ series });
  };

  const pastedColors = pasted.split(/[\s,;]+/).filter(Boolean);
  const pastedValid = pastedColors.length > 0 && pastedColors.every(isValidColor);

  return (
    <div className={styles.panel}>
      <h3>Theme</h3>
      <div className={styles.row}>
        <span>Start from:</span>
        <button
          type="button"
          aria-pressed={state.preset === 'lightTheme'}
          onClick={() => onChange(stateFromPreset('lightTheme'))}
        >
          lightTheme
        </button>
        <button
          type="button"
          aria-pressed={state.preset === 'darkTheme'}
          onClick={() => onChange(stateFromPreset('darkTheme'))}
        >
          darkTheme
        </button>
      </div>

      <h4>
        Series colors, <code>graphicalItems</code>
      </h4>
      <ol className={styles.seriesList}>
        {state.series.map((color, index) => (
          // The position is the identity of a series: the same color may appear twice while editing.
          <li key={index} className={styles.seriesItem}>
            <span>{index + 1}.</span>
            <ColorField name={String(index)} label={`Series ${index + 1}`} value={color} onChange={setSeries} />
            <button type="button" aria-label={`Move series ${index + 1} up`} onClick={() => moveSeries(index, -1)}>
              ↑
            </button>
            <button type="button" aria-label={`Move series ${index + 1} down`} onClick={() => moveSeries(index, 1)}>
              ↓
            </button>
            <button type="button" aria-label={`Remove series ${index + 1}`} onClick={() => removeSeries(index)}>
              ×
            </button>
          </li>
        ))}
      </ol>
      <div className={styles.row}>
        <button type="button" onClick={() => update({ series: [...state.series, '#808080'] })}>
          Add a series
        </button>
      </div>
      <label>
        Or paste a list of colors, separated by spaces, commas or new lines:
        <textarea className={styles.pasteArea} value={pasted} onChange={e => setPasted(e.target.value)} />
      </label>
      <div className={styles.row}>
        <button
          type="button"
          disabled={!pastedValid}
          onClick={() => {
            update({ series: pastedColors });
            setPasted('');
          }}
        >
          Replace the series colors
        </button>
        {pasted !== '' && !pastedValid && <span className={styles.error}>Some of these are not colors.</span>}
      </div>
      <div className={styles.row}>
        <label>
          Fill opacity, <code>fillOpacity</code>{' '}
          <input
            type="number"
            min={0}
            max={1}
            step={0.05}
            value={state.fillOpacity}
            onChange={e => update({ fillOpacity: Math.min(1, Math.max(0, Number(e.target.value))) })}
          />
        </label>
      </div>

      <h4>Page and labels</h4>
      <div className={styles.row}>
        <span>
          Page background, <code>pageBackground</code>
        </span>
        <ColorField name="pageBackground" label="Page background" value={state.pageBackground} onChange={setColor} />
      </div>
      <div className={styles.row}>
        <span>
          Label color, <code>typography.color</code>
        </span>
        <ColorField name="labelColor" label="Label color" value={state.labelColor} onChange={setColor} />
        <label>
          <input type="checkbox" checked={state.labels} onChange={e => update({ labels: e.target.checked })} /> My
          charts show labels
        </label>
      </div>

      <h4>Requirements</h4>
      <div className={styles.row}>
        <label>
          Smallest ΔE00 between series, typical vision{' '}
          <input
            type="number"
            min={0}
            step={1}
            value={state.seriesDifference}
            onChange={e => update({ seriesDifference: Number(e.target.value) })}
          />
        </label>
        <label>
          with a color vision deficiency{' '}
          <input
            type="number"
            min={0}
            step={0.5}
            value={state.seriesDifferenceCvd}
            onChange={e => update({ seriesDifferenceCvd: Number(e.target.value) })}
          />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          <input
            type="checkbox"
            checked={state.seriesTouch}
            onChange={e => update({ seriesTouch: e.target.checked })}
          />{' '}
          My series touch each other without a border, like pie slices or stacked bars, so they need 3:1 contrast
          between them
        </label>
      </div>
      <div className={styles.row}>
        <label>
          Severity of the simulated deficiency{' '}
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.1}
            value={state.severity}
            onChange={e => update({ severity: Number(e.target.value) })}
          />{' '}
          {state.severity.toFixed(1)}
        </label>
      </div>
    </div>
  );
}

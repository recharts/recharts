import { ComponentType, createElement, CSSProperties, ReactNode, useCallback, useEffect, useId, useRef } from 'react';

type LeverStateUpdate<TState> = Partial<TState> | ((state: TState) => Partial<TState>);

export type LeverProps<TState> = {
  state: TState;
  setState: (update: LeverStateUpdate<TState>) => void;
  /**
   * Put this ID into the input element so that it can link to its associated <label>
   */
  htmlId: string;
};

export type Lever<TState> = {
  key: string;
  label?: ReactNode;
  Component: ComponentType<LeverProps<TState>>;
};

export type SelectOption<TValue extends string> = {
  value: TValue;
  label: ReactNode;
};

const tableStyle: CSSProperties = {
  borderCollapse: 'collapse',
};

const cellStyle: CSSProperties = {
  padding: '1ex',
  border: '1px solid var(--color-border-4)',
};

type LeverRowProps<TState> = {
  lever: Lever<TState>;
  state: TState;
  setState: (update: LeverStateUpdate<TState>) => void;
};

function LeverRow<TState>({ lever, state, setState }: LeverRowProps<TState>) {
  const htmlId = useId();

  return (
    <tr key={lever.key}>
      <td style={cellStyle}>
        <label htmlFor={htmlId}>{lever.label ?? lever.key}</label>
      </td>
      <td style={cellStyle}>{createElement(lever.Component, { state, setState, htmlId })}</td>
    </tr>
  );
}

export function Levers<TState>({
  levers,
  onChange,
  defaultState,
  state,
}: {
  levers: ReadonlyArray<Lever<TState>>;
  onChange: (nextState: TState) => void;
  defaultState: TState;
  state: TState | null;
}) {
  const effectiveState = state ?? defaultState;
  const hasEmittedInitialState = useRef(false);
  const stateRef = useRef(effectiveState);
  stateRef.current = effectiveState;

  useEffect(() => {
    if (state == null && !hasEmittedInitialState.current) {
      hasEmittedInitialState.current = true;
      onChange(defaultState);
    }
  }, [defaultState, onChange, state]);

  const setState = useCallback(
    (update: LeverStateUpdate<TState>) => {
      const currentState = stateRef.current;
      const nextValues = typeof update === 'function' ? update(currentState) : update;
      onChange({ ...currentState, ...nextValues });
    },
    [onChange],
  );

  return (
    <form>
      <table style={tableStyle}>
        <tbody>
          {levers.map(lever => (
            <LeverRow lever={lever} key={lever.key} state={effectiveState} setState={setState} />
          ))}
        </tbody>
      </table>
    </form>
  );
}

export function createActionLever<TState>({
  key,
  label,
  buttonLabel,
  onClick,
}: {
  key: string;
  label?: ReactNode;
  buttonLabel: ReactNode | ((state: TState) => ReactNode);
  onClick: (state: TState) => Partial<TState>;
}): Lever<TState> {
  return {
    key,
    label,
    Component: ({ state, setState, htmlId }) => {
      const resolvedButtonLabel = typeof buttonLabel === 'function' ? buttonLabel(state) : buttonLabel;

      return (
        <button id={htmlId} type="button" onClick={() => setState(onClick(state))}>
          {resolvedButtonLabel}
        </button>
      );
    },
  };
}

export function createRangeLever<TState>({
  key,
  label,
  min,
  max,
  step,
  getValue,
  onChange,
  formatValue = value => value,
}: {
  key: string;
  label?: ReactNode;
  min: number;
  max: number;
  step?: number;
  getValue: (state: TState) => number;
  onChange: (value: number, state: TState) => Partial<TState>;
  formatValue?: (value: number, state: TState) => ReactNode;
}): Lever<TState> {
  return {
    key,
    label,
    Component: ({ state, setState, htmlId }) => {
      const value = getValue(state);

      return (
        <>
          <input
            id={htmlId}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={event => setState(onChange(Number(event.target.value), state))}
          />
          {formatValue(value, state)}
        </>
      );
    },
  };
}

export function createNumberLever<TState>({
  key,
  label,
  min,
  max,
  step,
  getValue,
  onChange,
}: {
  key: string;
  label?: ReactNode;
  min?: number;
  max?: number;
  step?: number;
  getValue: (state: TState) => number;
  onChange: (value: number, state: TState) => Partial<TState>;
}): Lever<TState> {
  return {
    key,
    label,
    Component: ({ state, setState, htmlId }) => (
      <input
        id={htmlId}
        type="number"
        min={min}
        max={max}
        step={step}
        value={getValue(state)}
        onChange={event => setState(onChange(Number(event.target.value), state))}
      />
    ),
  };
}

export function createSelectLever<TState, TValue extends string>({
  key,
  label,
  options,
  getValue,
  onChange,
}: {
  key: string;
  label?: ReactNode;
  options: ReadonlyArray<SelectOption<TValue>>;
  getValue: (state: TState) => TValue;
  onChange: (value: TValue, state: TState) => Partial<TState>;
}): Lever<TState> {
  return {
    key,
    label,
    Component: ({ state, setState, htmlId }) => {
      const value = getValue(state);

      return (
        <select
          id={htmlId}
          value={value}
          onChange={event => {
            const nextOption = options.find(option => option.value === event.target.value);

            if (nextOption == null) {
              throw new Error(`Unexpected value "${event.target.value}" for lever "${key}"`);
            }

            setState(onChange(nextOption.value, state));
          }}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    },
  };
}

export function createCheckboxLever<TState>({
  key,
  label,
  getValue,
  onChange,
}: {
  key: string;
  label?: ReactNode;
  getValue: (state: TState) => boolean;
  onChange: (checked: boolean, state: TState) => Partial<TState>;
}): Lever<TState> {
  return {
    key,
    label,
    Component: ({ state, setState, htmlId }) => (
      <input
        id={htmlId}
        type="checkbox"
        checked={getValue(state)}
        onChange={event => setState(onChange(event.target.checked, state))}
      />
    ),
  };
}

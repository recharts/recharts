import React, { ComponentType, CSSProperties, useId } from 'react';
import { EasingInput, matchAppend, matchByIndex } from 'recharts';
import { useSessionStorageState } from '@recharts/devtools';

export type LeverProps = {
  state: LeverState;
  handleChange: (newState: Partial<LeverState>) => void;
  /**
   * Put this ID into the input element so that it can link to its associated <label>
   */
  htmlId: string;
};

export type Lever = {
  name: string;
  Component: ComponentType<LeverProps>;
};

export type LeverState = {
  isAnimationActive?: boolean | 'auto';
  animationBegin?: number;
  animationDuration?: number;
  animationEasing?: Extract<EasingInput, string>;
  animationMatchBy?: typeof matchByIndex | typeof matchAppend;
  replayKey?: number;
  dataSet?: 'a' | 'b';
};

export type LeverChangeHandler = (newState: Partial<LeverState>) => void;

const tableStyle: CSSProperties = {
  borderCollapse: 'collapse',
};

const cellStyle: CSSProperties = {
  padding: '1ex',
  border: '1px solid var(--color-border-4)',
};

type LeverRowProps = Lever & {
  handleChange: LeverChangeHandler;
  state: LeverState;
};

const LeverRow = ({ name, Component, handleChange, state }: LeverRowProps) => {
  const htmlId = useId();
  return (
    <tr key={name}>
      <td style={cellStyle}>
        <label htmlFor={htmlId}>{name}</label>
      </td>
      <td style={cellStyle}>
        <Component handleChange={handleChange} state={state} htmlId={htmlId} />
      </td>
    </tr>
  );
};

export const Levers = ({
  levers,
  onChange,
  defaultState,
}: {
  levers: ReadonlyArray<Lever>;
  onChange: LeverChangeHandler;
  defaultState: Partial<LeverState>;
}) => {
  const id = useId();
  const [state, setState] = useSessionStorageState<LeverState>(id, defaultState);

  const handleChange = (nextValues: Partial<LeverState>) => {
    const newState = { ...state, ...nextValues };
    setState(newState);
    onChange(newState);
  };

  // Emit initial state only on mount so the chart renders correctly
  React.useEffect(() => {
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      Leversss
      <table style={tableStyle}>
        <tbody>
          {levers.map(({ name, Component }) => (
            <LeverRow name={name} Component={Component} key={name} state={state} handleChange={handleChange} />
          ))}
        </tbody>
      </table>
    </form>
  );
};

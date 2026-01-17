import * as C from 'recharts';
import * as React from 'react';

function determineDotProps(dot: C.LineProps['dot']) {
  if (typeof dot === 'boolean') {
    return dot;
  }
  if (typeof dot === 'function') {
    return dot;
  }
  if (React.isValidElement(dot)) {
    return dot;
  }
  return {
    fill: 'var(--color-surface-base)',
    ...dot,
  };
}

function determineActiveDotProps(activeDot: C.LineProps['activeDot']) {
  if (typeof activeDot === 'boolean') {
    return activeDot;
  }
  if (typeof activeDot === 'function') {
    return activeDot;
  }
  if (React.isValidElement(activeDot)) {
    return activeDot;
  }
  return {
    stroke: 'var(--color-surface-base)',
    ...activeDot,
  };
}

export function Line(props: C.LineProps) {
  return <C.Line {...props} dot={determineDotProps(props.dot)} activeDot={determineActiveDotProps(props.activeDot)} />;
}

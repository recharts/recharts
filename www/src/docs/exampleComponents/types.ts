import { ComponentType, ReactNode } from 'react';

export type ChartExample = {
  /**
   * The React component that represents the example.
   * It should be a functional or class component that renders a chart.
   * It does not accept any props.
   */
  Component: ComponentType;
  /**
   * The source code of the example.
   */
  sourceCode: string;
  /**
   * Used to display the example in the sidebar.
   * Human-readable string with spaces and special characters.
   */
  name: string;
  /**
   * Extra information about the example.
   */
  description?: ReactNode;
};

export type ComponentExamples = {
  examples: Record<string, ChartExample>;
  order: number;
  NavPreview: null | ((props: { isAnimationActive?: boolean }) => ReactNode);
};

export type AllExamples = Record<string, ComponentExamples>;

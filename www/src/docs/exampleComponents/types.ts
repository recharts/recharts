import { ComponentType } from 'react';

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
   * The key is used to identify the example in the examples list, and is passed through the URL.
   */
  // key: string;
  /**
   * Used to display the example in the sidebar.
   * Human-readable string with spaces and special characters.
   */
  name: string;
};

export type ComponentExamples = {
  examples: Record<string, ChartExample>;
  order: number;
};

export type AllExamples = Record<string, ComponentExamples>;

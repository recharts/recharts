import { ComponentType, ReactNode } from 'react';
import { ToolType } from '../../components/Playground/ToolFrame.tsx';

export type ChartExample<ControlsType = any> = {
  /**
   * The React component that represents the example.
   * It should be a functional or class component that renders a chart.
   * It may accept props coming from its associated controls
   */
  Component: ComponentType<ControlsType>;
  /**
   * This component renders knobs, controls, and various other activities that change the chart
   */
  Controls?: ComponentType<{ onChange: (values: ControlsType) => void }>;
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
  defaultTool?: ToolType;
  defaultToolTab?: string;
};

export type ComponentExamples = {
  examples: Record<string, ChartExample>;
  order: number;
  NavPreview: null | ((props: { isAnimationActive?: boolean }) => ReactNode);
};

export type AllExamples = Record<string, ComponentExamples>;

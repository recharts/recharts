import React, { useState, useEffect, ComponentType, ReactNode } from 'react';
import * as RechartsScope from 'recharts';
import * as D3ShapeScope from 'd3-shape';
import * as RechartsDevtoolsScope from '@recharts/devtools';
import { RechartsDevtoolsContext } from '@recharts/devtools';
import { LuPencil, LuPlay, LuShare2 } from 'react-icons/lu';
import { StackBlitzLink } from './Shared/StackBlitzLink';
import { sendEvent } from './analytics';
import { ToolFrame, ToolType, ToolItem } from './Playground/ToolFrame';
import { SourceCodeEditor } from './Playground/SourceCodeEditor';
import { DevToolsPanel } from './Playground/DevToolsPanel';
import { CopyButton } from '../utils/CopyButton';

/**
 * Props passed to the previewed component.
 */
type CodeEditorWithPreviewProps<ControlsType> = {
  /**
   * The component to render by default (before any edits).
   */
  Component: ComponentType<ControlsType>;
  /**
   * This component renders knobs, controls, and various other activities that change the chart
   */
  Controls?: ComponentType<{ onChange: (values: ControlsType) => void }>;
  /**
   * The source code of the component.
   */
  sourceCode: string;
  /**
   * The title for the StackBlitz project.
   */
  stackBlitzTitle: string;
  /**
   * Label for analytics tracking.
   */
  analyticsLabel?: string;
  defaultTool?: ToolType;
};

type PreviewResultProps = {
  Component: ComponentType<any>;
  isEditMode: boolean;
  codeToRun: string | null;
  Runner: any;
  componentProps?: any;
};

const PreviewResult = React.memo(({ Component, isEditMode, codeToRun, Runner, componentProps }: PreviewResultProps) => {
  // If in edit mode and code has been run, use react-runner
  if (isEditMode && codeToRun && Runner) {
    const scope = {
      import: {
        react: React,
        recharts: RechartsScope,
        'd3-shape': D3ShapeScope,
        '@recharts/devtools': RechartsDevtoolsScope,
      },
    };

    // Note: react-runner might not easily support passing props to the default export.
    // If codeToRun defines a component that expects props, they might not be passed unless we wrap the runner.
    // For now, controls mainly affect the non-edited component.
    return <Runner code={codeToRun} scope={scope} />;
  }

  // Otherwise, render the actual component (faster, no parsing needed)
  return <Component {...componentProps} />;
});

/**
 * A component that displays a live preview of a React component alongside
 * an editable code editor. Supports lazy-loading of editing features.
 *
 * By default, renders the Component directly (fast, no parsing).
 * When user clicks "Edit", switches to react-runner for live editing.
 */
export function CodeEditorWithPreview<T>({
  Component,
  Controls,
  sourceCode,
  stackBlitzTitle,
  analyticsLabel,
  defaultTool = 'source',
}: CodeEditorWithPreviewProps<T>) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedCode, setEditedCode] = useState<string | null>(null);
  const [codeToRun, setCodeToRun] = useState<string | null>(null);
  const [Runner, setRunner] = useState<any>(null);
  const [activeTool, setActiveTool] = useState<ToolType>(defaultTool);
  const [controlsState, setControlsState] = useState<T | null>(null);

  // Lazy load react-runner when entering edit mode
  useEffect(() => {
    if (isEditMode && !Runner) {
      import('react-runner').then(module => {
        setRunner(() => module.Runner);
      });
    }
  }, [isEditMode, Runner]);

  const handleEditClick = () => {
    sendEvent({
      category: 'Examples',
      action: 'Edit Code',
      label: analyticsLabel,
    });

    setIsEditMode(true);
    setEditedCode(sourceCode);
  };

  const handleRunCode = () => {
    if (editedCode === sourceCode) {
      sendEvent({
        category: 'Examples',
        action: 'Run Code',
        label: analyticsLabel,
      });
    } else {
      sendEvent({
        category: 'Examples',
        action: 'Run Code - Code Changed',
        label: analyticsLabel,
      });
    }

    setCodeToRun(editedCode);
  };

  const codeToDisplay = editedCode ?? sourceCode;

  // Actions for the Source tool (Edit/Run buttons)
  const sourceActions: ReactNode[] = [
    <CopyButton key="copy" getValueToCopy={() => codeToDisplay} />,
    isEditMode ? (
      <button key="run" type="button" className="codemirror-toolbar-item" onClick={handleRunCode}>
        <LuPlay />
        <span>Run</span>
      </button>
    ) : (
      <button key="edit" type="button" className="codemirror-toolbar-item" onClick={handleEditClick}>
        <LuPencil />
        <span>Edit</span>
      </button>
    ),
    <StackBlitzLink key="stackblitz-link" code={codeToDisplay} title={stackBlitzTitle}>
      <LuShare2 />
      <span>Open in StackBlitz</span>
    </StackBlitzLink>,
  ];

  // Fix for DevTools Copy Button:
  // DevToolsPanel needs to expose the value to the parent if we want the button in the Toolbar.
  /* Rethinking:
     DevToolsPanel captures the value.
     ToolFrame renders actions.
     We need shared state for devToolsValue in this component to pass to CopyButton.
  */
  // Refactor for DevTools Copy State
  const [devToolsValue, setDevToolsValue] = useState<unknown>(undefined);

  // Update tools definition
  const actualTools: ToolItem[] = [
    {
      name: 'source',
      label: 'Source code',
      component: (
        <SourceCodeEditor
          value={codeToDisplay}
          onChange={isEditMode ? setEditedCode : undefined}
          readOnly={!isEditMode}
          className="tsx"
        />
      ),
      actions: sourceActions,
    },
    {
      name: 'devtools',
      label: 'Hook inspector',
      component: <DevToolsPanel onValueChange={setDevToolsValue} />,
      actions: [<CopyButton key="copy-devtools" getValueToCopy={() => devToolsValue} />],
    },
  ];

  if (Controls) {
    actualTools.push({
      name: 'controls',
      label: 'Controls',
      component: (
        <div style={{ padding: '10px', height: '100%', overflow: 'auto' }}>
          <Controls onChange={setControlsState} />
        </div>
      ),
    });
  }

  return (
    <RechartsDevtoolsContext>
      <PreviewResult
        Component={Component}
        isEditMode={isEditMode}
        codeToRun={codeToRun}
        Runner={Runner}
        componentProps={controlsState}
      />

      <ToolFrame activeTool={activeTool} onToolChange={setActiveTool} tools={actualTools} />
    </RechartsDevtoolsContext>
  );
}

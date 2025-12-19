import React, { useState, useEffect, ComponentType } from 'react';
import * as RechartsScope from 'recharts';
import * as D3ShapeScope from 'd3-shape';
import * as RechartsDevtoolsScope from '@recharts/devtools';
import { RechartsDevtoolsContext } from '@recharts/devtools';
import { CodeMirrorEditor, EditorMode } from '../utils/CodeMirrorEditor.tsx';
import { StackBlitzLink } from './Shared/StackBlitzLink.tsx';
import { sendEvent } from './analytics.ts';

type CodeEditorWithPreviewProps = {
  /**
   * The component to render by default (before any edits).
   */
  Component: ComponentType;
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
};

type PreviewResultProps = {
  Component: ComponentType;
  isEditMode: boolean;
  codeToRun: string | null;
  Runner: any;
};

const PreviewResult = React.memo(({ Component, isEditMode, codeToRun, Runner }: PreviewResultProps) => {
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

    return <Runner code={codeToRun} scope={scope} />;
  }

  // Otherwise, render the actual component (faster, no parsing needed)
  return <Component />;
});

/**
 * A component that displays a live preview of a React component alongside
 * an editable code editor. Supports lazy-loading of editing features.
 *
 * By default, renders the Component directly (fast, no parsing).
 * When user clicks "Edit", switches to react-runner for live editing.
 */
export function CodeEditorWithPreview({
  Component,
  sourceCode,
  stackBlitzTitle,
  analyticsLabel,
}: CodeEditorWithPreviewProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedCode, setEditedCode] = useState<string | null>(null);
  const [codeToRun, setCodeToRun] = useState<string | null>(null);
  const [Runner, setRunner] = useState<any>(null);

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

  const [activeMode, setActiveMode] = useState<EditorMode>('source');

  return (
    <RechartsDevtoolsContext>
      <PreviewResult Component={Component} isEditMode={isEditMode} codeToRun={codeToRun} Runner={Runner} />

      <CodeMirrorEditor
        value={codeToDisplay}
        onChange={isEditMode ? setEditedCode : undefined}
        readOnly={!isEditMode}
        className="tsx"
        activeMode={activeMode}
        onModeChange={setActiveMode}
        tools={[
          { name: 'source', label: 'Source code' },
          { name: 'devtools', label: 'Hook inspector' },
        ]}
        toolbarItems={{
          source: [
            isEditMode ? (
              <button key="run" type="button" className="codemirror-toolbar-item" onClick={handleRunCode}>
                <i className="icon-control-play" />
                <span>Run</span>
              </button>
            ) : (
              <button key="edit" type="button" className="codemirror-toolbar-item" onClick={handleEditClick}>
                <i className="icon-pencil" />
                <span>Edit</span>
              </button>
            ),
            <StackBlitzLink key="stackblitz-link" code={codeToDisplay} title={stackBlitzTitle}>
              <i className="icon-share" />
              <span>Open in StackBlitz</span>
            </StackBlitzLink>,
          ],
        }}
      />
    </RechartsDevtoolsContext>
  );
}

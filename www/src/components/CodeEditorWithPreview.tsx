import React, { useState, useEffect, ComponentType } from 'react';
import * as RechartsScope from 'recharts';
import * as D3ShapeScope from 'd3-shape';
import { CodeMirrorEditor } from '../utils/CodeMirrorEditor.tsx';
import { StackBlitzLink } from './Shared/StackBlitzLink.tsx';
import { sendEvent } from './analytics.ts';
import '../views/ExampleView.scss';

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

  const renderResult = () => {
    // If in edit mode and code has been run, use react-runner
    if (isEditMode && codeToRun && Runner) {
      const scope = {
        import: {
          react: React,
          recharts: RechartsScope,
          'd3-shape': D3ShapeScope,
        },
      };

      return <Runner code={codeToRun} scope={scope} />;
    }

    // Otherwise, render the actual component (faster, no parsing needed)
    return <Component />;
  };

  const codeToDisplay = editedCode ?? sourceCode;

  return (
    <>
      {renderResult()}
      <div className="codemirror-wrapper">
        <div className="codemirror-toolbar">
          {!isEditMode ? (
            <button type="button" className="codemirror-toolbar-item" onClick={handleEditClick}>
              <i className="icon-pencil" />
              <span>Edit</span>
            </button>
          ) : (
            <button type="button" className="codemirror-toolbar-item" onClick={handleRunCode}>
              <i className="icon-control-play" />
              <span>Run</span>
            </button>
          )}
          <StackBlitzLink code={codeToDisplay} title={stackBlitzTitle}>
            <i className="icon-share" />
            <span>Open in StackBlitz</span>
          </StackBlitzLink>
        </div>
        <div id="codemirror-container">
          <CodeMirrorEditor
            value={codeToDisplay}
            onChange={isEditMode ? setEditedCode : undefined}
            readOnly={!isEditMode}
            className="codemirror-example-editor"
          />
        </div>
      </div>
    </>
  );
}

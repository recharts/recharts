import React, { useState, useEffect, ComponentType, ReactNode } from 'react';
import Helmet from 'react-helmet';
import * as RechartsScope from 'recharts';
import * as D3ShapeScope from 'd3-shape';
import { allExamples } from '../docs/exampleComponents';
import './ExampleView.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { StackBlitzLink } from '../components/Shared/StackBlitzLink.tsx';
import { sendEvent } from '../components/analytics.ts';
import { ComponentExamples } from '../docs/exampleComponents/types.ts';
import { CodeMirrorEditor } from '../utils/CodeMirrorEditor.tsx';

type ExampleComponent = {
  cateName: string;
  exampleName: string;
  ExampleComponent: ComponentType;
  sourceCode: string;
};

const parseExampleComponent = (compName: string): ExampleComponent | null => {
  const typeList = Object.keys(allExamples);
  const res = typeList.filter(key => {
    const entry: ComponentExamples = allExamples[key];

    return !!entry.examples[compName];
  });

  if (res && res.length) {
    const example = allExamples[res[0]].examples[compName];
    return {
      cateName: res[0],
      exampleName: example.name,
      ExampleComponent: example.Component,
      sourceCode: example.sourceCode,
    };
  }
  return null;
};

type ExamplesViewNewImplProps = RouteComponentProps;

function ExamplesViewNewImpl({ params }: ExamplesViewNewImplProps) {
  const page = params?.name;
  const exampleResult = parseExampleComponent(page);

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedCode, setEditedCode] = useState<string | null>(null);
  const [codeToRun, setCodeToRun] = useState<string | null>(null);
  const [Runner, setRunner] = useState<any>(null);

  // Reset state when navigating to a different example
  useEffect(() => {
    setIsEditMode(false);
    setEditedCode(null);
    setCodeToRun(null);
  }, [page]);

  // Lazy load react-runner when entering edit mode
  useEffect(() => {
    if (isEditMode && !Runner) {
      import('react-runner').then(module => {
        setRunner(() => module.Runner);
      });
    }
  }, [isEditMode, Runner]);

  const handleEditClick = () => {
    if (!exampleResult) return;

    sendEvent({
      category: 'Examples',
      action: 'Edit Code',
      label: page,
    });

    setIsEditMode(true);
    setEditedCode(exampleResult.sourceCode);
  };

  const handleRunCode = () => {
    if (!exampleResult) return;

    if (editedCode === exampleResult.sourceCode) {
      sendEvent({
        category: 'Examples',
        action: 'Run Code',
        label: page,
      });
    } else {
      sendEvent({
        category: 'Examples',
        action: 'Run Code - Code Changed',
        label: page,
      });
    }

    // Update the code to run
    setCodeToRun(editedCode);
  };

  const renderResult = (): ReactNode => {
    if (!exampleResult) return null;

    // If in edit mode and code has been run, use react-runner
    if (isEditMode && codeToRun && Runner) {
      const scope = {
        // scope used by import statement in editor
        import: {
          react: React,
          recharts: RechartsScope,
          'd3-shape': D3ShapeScope,
        },
      };

      return <Runner code={codeToRun} scope={scope} />;
    }

    // Otherwise, render the actual component (faster, no parsing needed)
    const { ExampleComponent } = exampleResult;
    return <ExampleComponent />;
  };

  const renderEditor = () => {
    if (!exampleResult) return null;

    const codeToDisplay = editedCode ?? exampleResult.sourceCode;

    return (
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
          <StackBlitzLink
            code={codeToDisplay}
            title={`Recharts example: ${exampleResult.cateName} - ${exampleResult.exampleName}`}
          >
            <i className="icon-share" />
            <span>Open in StackBlitz</span>
          </StackBlitzLink>
        </div>
        <div id="codemirror-container">
          <CodeMirrorEditor
            key={`editor-${exampleResult.exampleName}`}
            value={codeToDisplay}
            onChange={isEditMode ? setEditedCode : undefined}
            readOnly={!isEditMode}
            className="codemirror-example-editor"
          />
        </div>
      </div>
    );
  };

  const title = exampleResult?.exampleName ?? page;

  return (
    <div className="page page-examples">
      <Helmet title={title} />
      <div className="content">
        <h3 className="page-title">{title}</h3>
        {exampleResult ? (
          <div className="example-wrapper">
            <div className="example-inner-wrapper">
              {renderResult()}
              {renderEditor()}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export const ExamplesViewNew = withRouter(ExamplesViewNewImpl);

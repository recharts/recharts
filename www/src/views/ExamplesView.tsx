import React, * as ReactScope from 'react';
import { ComponentType, PureComponent, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Runner } from 'react-runner';
import * as RechartsScope from 'recharts';
import * as D3ShapeScope from 'd3-shape';
import { Editor } from '@monaco-editor/react';
import { allExamples } from '../docs/exampleComponents';
import './ExampleView.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { StackBlitzLink } from '../components/Shared/StackBlitzLink.tsx';
import { sendEvent } from '../components/analytics.ts';
import { ComponentExamples } from '../docs/exampleComponents/types.ts';

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

type ExamplesViewProps = RouteComponentProps;

type ExamplesViewState = {
  name: string | null;
  exampleCode: string | null;
};

class ExamplesView extends PureComponent<ExamplesViewProps, ExamplesViewState> {
  state: ExamplesViewState = {
    name: null,
    exampleCode: null,
  };

  editorRef = React.createRef();

  static getDerivedStateFromProps(
    nextProps: ExamplesViewProps,
    nextState: ExamplesViewState,
  ): ExamplesViewState | null {
    const { params } = nextProps;
    const page = params?.name;

    const exampleResult = parseExampleComponent(page);
    if (exampleResult && exampleResult.exampleName !== nextState.name) {
      return {
        name: exampleResult.exampleName,
        exampleCode: exampleResult.sourceCode,
      };
    }

    return null;
  }

  handleRunCode = () => {
    if (this.editorRef.current) {
      // @ts-expect-error property getValue not found in type
      const newCode = this.editorRef.current.getValue();
      if (newCode === this.state.exampleCode) {
        sendEvent({
          category: 'Examples',
          action: 'Run Code',
          label: this.getPage(),
        });
      } else {
        sendEvent({
          category: 'Examples',
          action: 'Run Code - Code Changed',
          label: this.getPage(),
        });
        this.setState({
          exampleCode: newCode,
        });
      }
    }
  };

  renderEditor(exampleResult: ExampleComponent) {
    return exampleResult && this.state.exampleCode ? (
      <div className="monaco-editor-wrapper">
        <div className="monaco-editor-toolbar">
          <button type="button" className="monaco-editor-toolbar-item" onClick={this.handleRunCode}>
            <i className="icon-control-play" />
            <span>&nbsp;</span>
            <span>Run</span>
          </button>
          <span className="monaco-editor-toolbar-item example-link-wrapper">
            <StackBlitzLink
              code={this.state.exampleCode}
              title={`Recharts example: ${exampleResult.cateName} - ${exampleResult.exampleName}`}
            >
              Open in StackBlitz
            </StackBlitzLink>
          </span>
        </div>
        <div id="monaco-editor-container">
          <Editor
            key={`editor-${exampleResult.exampleName}`}
            value={this.state.exampleCode}
            defaultLanguage="typescript"
            options={{ tabSize: 2 }}
            beforeMount={monaco => {
              monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                jsx: monaco.languages.typescript.JsxEmit.React, // enables TSX/JSX
                allowJs: true,
              });
            }}
            onMount={editor => {
              // @ts-expect-error current is readonly
              // noinspection JSConstantReassignment
              this.editorRef.current = editor;
            }}
          />
        </div>
      </div>
    ) : null;
  }

  renderResult(): ReactNode {
    const scope = {
      // scope used by import statement in editor
      import: {
        react: ReactScope,
        recharts: RechartsScope,
        'd3-shape': D3ShapeScope,
      },
    };

    if (this.state.exampleCode == null) {
      return null;
    }

    return <Runner code={this.state.exampleCode} scope={scope} />;
  }

  getPage(): string {
    const { params } = this.props;
    return params?.name ?? undefined;
  }

  render() {
    const page = this.getPage();

    const exampleResult = parseExampleComponent(page);

    const title = exampleResult?.exampleName ?? page;

    return (
      <div className="page page-examples">
        <Helmet title={title} />
        <div className="content">
          <h3 className="page-title">{title}</h3>
          {exampleResult ? (
            <div className="example-wrapper">
              <div className="example-inner-wrapper">
                {this.renderResult()}
                {this.renderEditor(exampleResult)}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(ExamplesView);

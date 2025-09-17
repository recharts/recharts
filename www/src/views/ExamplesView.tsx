import React, * as ReactScope from 'react';
import { ComponentType, PureComponent, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Runner } from 'react-runner';
import * as RechartsScope from 'recharts';
import * as D3ShapeScope from 'd3-shape';
import { Editor } from '@monaco-editor/react';
import { Link } from 'react-router';
import { allExamples } from '../docs/exampleComponents';
import { getLocaleType } from '../utils/LocaleUtils.ts';
import './ExampleView.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { StackBlitzLink } from '../components/Shared/StackBlitzLink.tsx';
import { sendEvent } from '../components/analytics.ts';
import { ComponentExamples } from '../docs/exampleComponents/types.ts';

const categoryNames = Object.keys(allExamples).sort((a, b) => allExamples[a].order - allExamples[b].order);

type ExampleComponent = {
  cateName: string;
  exampleName: string;
  exampleComponent: ComponentType;
  sourceCode: string;
};

const parseExampleComponent = (compName: string): ExampleComponent | null => {
  const typeList = Object.keys(allExamples);
  const res = typeList.filter((key) => {
    const entry: ComponentExamples = allExamples[key];

    return !!entry.examples[compName];
  });

  if (res && res.length) {
    return {
      cateName: res[0],
      exampleName: compName,
      exampleComponent: allExamples[res[0]].examples[compName].Component,
      sourceCode: allExamples[res[0]].examples[compName].sourceCode,
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
      // @ts-ignore
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

  renderMenuList(type: string, locale: string) {
    const page = this.getPage();
    const { examples } = allExamples[type];
    const typeNameList = Object.keys(examples);

    const items = typeNameList.map((name) => (
      <li key={name}>
        <Link to={`/${locale}/examples/${name}`} className={page === name ? 'active' : ''}>
          {name}
        </Link>
      </li>
    ));

    return <ul className="menu">{items}</ul>;
  }

  renderEditor(exampleResult: ExampleComponent) {
    return exampleResult && this.state.exampleCode ? (
      <div className="monaco-editor-wrapper">
        <div className="monaco-editor-toolbar">
          <button type="button" className="monaco-editor-toolbar-item" onClick={this.handleRunCode}>
            <i className="icon-control-play" />
            <span>&nbsp;</span>
            <span>Run</span>
          </button>
        </div>
        <div id="monaco-editor-container">
          <Editor
            key={`editor-${exampleResult.exampleName}`}
            value={this.state.exampleCode}
            defaultLanguage="javascript"
            options={{ tabSize: 2 }}
            onMount={(editor) => {
              // @ts-ignore
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

    return (
      <div className="example-chart-wrapper">
        <div className="example-chart-responsive-container">
          <Runner code={this.state.exampleCode} scope={scope} />
        </div>
      </div>
    );
  }

  getPage(): string {
    const { params } = this.props;
    return params?.name ?? undefined;
  }

  render() {
    const page = this.getPage();

    const exampleResult = parseExampleComponent(page);
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-examples">
        <Helmet title={page} />
        <div className="sidebar">
          <h2>Examples</h2>

          {categoryNames.map((cate) => (
            <div className="sidebar-cate" key={cate}>
              <h4>{cate}</h4>
              {this.renderMenuList(cate, locale)}
            </div>
          ))}
        </div>
        <div className="content">
          <h3 className="page-title">{page}</h3>
          {exampleResult ? (
            <div className="example-wrapper">
              <div className="example-inner-wrapper">
                {this.renderResult()}
                {this.renderEditor(exampleResult)}
              </div>
              {this.state.exampleCode ? (
                <p className="example-link-wrapper">
                  <StackBlitzLink
                    code={this.state.exampleCode}
                    title={`Recharts example: ${exampleResult.cateName} - ${exampleResult.exampleName}`}
                  >
                    Try the demo in StackBlitz
                  </StackBlitzLink>
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(ExamplesView);

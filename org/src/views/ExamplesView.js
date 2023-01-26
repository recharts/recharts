/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import MonacoEditor from 'react-monaco-editor/lib';
import { Runner } from 'react-runner';
import * as ReactScope from 'react';
import * as RechartsScope from 'recharts';
import Examples from '../docs/exampleComponents';
import { getLocaleType } from '../utils/LocaleUtils';
import './ExampleView.scss';
import fetchFile from '../utils/fetchUtils';
import 'simple-line-icons/scss/simple-line-icons.scss';

const cates = Object.keys(Examples).sort((a, b) => Examples[a].order - Examples[b].order);
const parseExampleComponent = (compName) => {
  const typeList = Object.keys(Examples);
  const res = typeList.filter((key) => {
    const entry = Examples[key];

    return !!entry.examples[compName];
  });

  if (res && res.length) {
    return {
      cateName: res[0],
      exampleName: compName,
      exampleComponent: Examples[res[0]].examples[compName],
    };
  }
  return null;
};

const EXAMPLE_CODE_CACHE = {};

@connect((state, ownProps) => {
  const pathname = ownProps.location.pathname || '';
  const paths = pathname.split('/');

  return {
    page: paths && paths.length === 4 ? paths[3] : 'SimpleLineChart',
  };
})
class ExamplesView extends PureComponent {
  static propTypes = {
    page: PropTypes.string,
  };

  state = {
    isLoading: null,
    hasError: null,
    exampleCode: null,
    prevPage: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.page !== prevState.prevPage) {
      return {
        prevPage: nextProps.page,
      };
    }

    return null;
  }

  componentDidMount() {
    const { page } = this.props;
    const exampleResult = parseExampleComponent(page);

    if (exampleResult) {
      this.fetchExampleCode(exampleResult.cateName, exampleResult.exampleName);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { prevPage } = this.state;

    if (prevState.prevPage !== prevPage) {
      // page change
      const exampleResult = parseExampleComponent(this.props.page);

      if (exampleResult) {
        this.fetchExampleCode(exampleResult.cateName, exampleResult.exampleName);
      }
    }
  }

  fetchExampleCode = (cateName, exampleName) => {
    // read code from cache
    if (EXAMPLE_CODE_CACHE[exampleName]) {
      this.setState({
        isLoading: false,
        hasError: false,
        exampleCode: EXAMPLE_CODE_CACHE[exampleName],
      });

      return;
    }

    this.setState({
      isLoading: true,
    });
    const url = `/examples/${cateName}/${exampleName}.js`;

    fetchFile(url).then(
      (res) => {
        EXAMPLE_CODE_CACHE[exampleName] = res;

        this.setState({
          isLoading: false,
          hasError: false,
          exampleCode: res,
        });
      },
      () => {
        this.setState({
          isLoading: false,
          hasError: true,
          exampleCode: null,
        });
      },
    );
  };

  handleRunCode = () => {
    if (this.editor) {
      const newCode = this.editor.getValue();

      this.setState({
        exampleCode: newCode,
      });
    }
  };

  renderMenuList(type, locale) {
    const { page } = this.props;
    const { examples } = Examples[type];
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

  renderEditor(exampleResult) {
    const { isLoading, hasError, exampleCode } = this.state;
    let editorValue = '';

    if (isLoading === true) {
      editorValue = 'loading code ....';
    } else if (isLoading === false && hasError === true) {
      editorValue = 'loading code error';
    } else if (isLoading === false && hasError === false) {
      editorValue = exampleCode;
      this.setState({
        exampleCode: editorValue,
      });
    }

    return exampleResult && isLoading !== null ? (
      <div className="monaco-editor-wrapper">
        <div className="monaco-editor-toolbar">
          <span role="button" className="monaco-editor-toolbar-item" onClick={this.handleRunCode}>
            <i className="icon-control-play" />
            <span>&nbsp;</span>
            <span>Run</span>
          </span>
        </div>
        <div id="monaco-editor-container">
          <MonacoEditor
            ref={(el) => {
              this.editor = el && el.editor;
            }}
            key={`editor-${exampleResult.exampleName}`}
            value={editorValue}
            language="javascript"
            lineNumbers
            scrollBeyondLastLine
            automaticLayout
            renderLineHighlight="none"
            readOnly={false}
            theme="vs"
            minimap={{ enabled: false }}
            options={{ tabSize: 2 }}
          />
        </div>
      </div>
    ) : null;
  }

  renderResult() {
    const scope = {
      // scope used by import statement in editor
      import: {
        react: ReactScope,
        recharts: RechartsScope,
      },
    };

    return (
      <div className="example-chart-wrapper">
        <div className="example-chart-responsive-container">
          <Runner code={this.state.exampleCode} scope={scope} />
        </div>
      </div>
    );
  }

  render() {
    const { page } = this.props;
    const exampleResult = parseExampleComponent(page);
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-examples">
        <Helmet title={page} />
        <div className="sidebar">
          <h2>Examples</h2>

          {cates.map((cate, index) => (
            <div className="sidebar-cate" key={`cate-${index}`}>
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
              {exampleResult.exampleComponent.demoUrl ? (
                <p className="example-link-wrapper">
                  <a
                    className="example-code-sandbox-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={exampleResult.exampleComponent.demoUrl}
                  >
                    Try the demo in CodeSandbox &gt;&gt;
                  </a>
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ExamplesView;

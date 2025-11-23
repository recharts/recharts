import React from 'react';
import Helmet from 'react-helmet';
import { allExamples } from '../docs/exampleComponents';
import './ExampleView.css';
import 'simple-line-icons/css/simple-line-icons.css';
import { RouteComponentProps, withRouter } from '../routes/withRouter';
import { ComponentExamples } from '../docs/exampleComponents/types.ts';
import { CodeEditorWithPreview } from '../components/CodeEditorWithPreview';

type ExampleComponent = {
  cateName: string;
  exampleName: string;
  ExampleComponent: React.ComponentType;
  sourceCode: string;
  description?: React.ReactNode;
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
      description: example.description,
    };
  }
  return null;
};

type ExamplesViewImplProps = RouteComponentProps;

function ExamplesViewImpl({ params }: ExamplesViewImplProps) {
  const page = params?.name;
  const exampleResult = parseExampleComponent(page);

  const title = exampleResult?.exampleName ?? page;

  return (
    <div className="page page-examples">
      <Helmet title={title} />
      <div className="content">
        <h3 className="page-title">{title}</h3>
        {exampleResult ? (
          <div className="example-wrapper">
            {exampleResult.description ? <div className="example-description">{exampleResult.description}</div> : null}
            <div className="example-inner-wrapper">
              <CodeEditorWithPreview
                key={page}
                Component={exampleResult.ExampleComponent}
                sourceCode={exampleResult.sourceCode}
                stackBlitzTitle={`Recharts example: ${exampleResult.cateName} - ${exampleResult.exampleName}`}
                analyticsLabel={page}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export const ExamplesView = withRouter(ExamplesViewImpl);

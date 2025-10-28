import React from 'react';
import Helmet from 'react-helmet';
import { allExamples } from '../docs/exampleComponents';
import './ExampleView.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { ComponentExamples } from '../docs/exampleComponents/types.ts';
import { CodeEditorWithPreview } from '../components/CodeEditorWithPreview.tsx';

type ExampleComponent = {
  cateName: string;
  exampleName: string;
  ExampleComponent: React.ComponentType;
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

  const title = exampleResult?.exampleName ?? page;

  return (
    <div className="page page-examples">
      <Helmet title={title} />
      <div className="content">
        <h3 className="page-title">{title}</h3>
        {exampleResult ? (
          <div className="example-wrapper">
            <div className="example-inner-wrapper">
              <CodeEditorWithPreview
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

export const ExamplesViewNew = withRouter(ExamplesViewNewImpl);

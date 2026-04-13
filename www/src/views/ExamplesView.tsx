import Helmet from 'react-helmet';
import { allExamples } from '../docs/exampleComponents';
import './ExampleView.css';
import { RouteComponentProps, withRouter } from '../routes/withRouter';
import { ChartExample } from '../docs/exampleComponents/types.ts';
import { CodeEditorWithPreview } from '../components/CodeEditorWithPreview';
import { NotFoundView } from './NotFoundView.tsx';

const allExamplesFlattened: ReadonlyArray<[string, ChartExample]> = Object.values(allExamples)
  .map(e => e.examples)
  .flatMap(Object.entries);

const parseExampleComponent = (exampleName: string): ChartExample | undefined => {
  return allExamplesFlattened.find(examples => examples[0] === exampleName)?.[1];
};

type ExamplesViewImplProps = RouteComponentProps;

function ExamplesViewImpl({ params }: ExamplesViewImplProps) {
  const page = params?.name;
  const exampleResult = parseExampleComponent(page);

  if (!exampleResult) {
    return <NotFoundView />;
  }

  const title = exampleResult?.name ?? page;

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
                Component={exampleResult.Component}
                sourceCode={exampleResult.sourceCode}
                Controls={exampleResult.Controls}
                defaultTool={exampleResult.defaultTool}
                stackBlitzTitle={`Recharts example: ${exampleResult.name}`}
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

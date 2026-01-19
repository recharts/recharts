import { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import './ExamplesIndexView.css';

import { allExamples } from '../docs/exampleComponents';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { getLocaleType } from '../utils/LocaleUtils.ts';

type ExamplesIndexViewProps = RouteComponentProps;

class ExamplesIndexViewImpl extends PureComponent<ExamplesIndexViewProps> {
  render() {
    const locale = getLocaleType(this.props);

    const categories = Object.entries(allExamples)
      .sort(([, a], [, b]) => a.order - b.order)
      .map(([categoryName, categoryData]) => {
        const firstExampleKey = Object.keys(categoryData.examples)[0];
        const firstExample = categoryData.examples[firstExampleKey];

        return {
          categoryName,
          firstExampleKey,
          Preview: firstExample.Component,
        };
      });

    return (
      <div className="page page-examples-index">
        <Helmet title="Examples" />
        <div className="content">
          <h1 className="page-title">Examples</h1>
          <p className="page-description">
            Explore interactive examples of different chart types and features. Click on any category to see it in
            action.
          </p>
          <div className="examples-grid">
            {categories.map(({ categoryName, firstExampleKey, Preview }) => (
              <Link key={categoryName} to={`/${locale}/examples/${firstExampleKey}/`} className="example-card">
                <div className="example-card-preview">
                  {Preview ? <Preview /> : <div className="example-card-placeholder" />}
                </div>
                <div className="example-card-content">
                  <h3 className="example-card-title">{categoryName}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export const ExamplesIndexView = withRouter(ExamplesIndexViewImpl);

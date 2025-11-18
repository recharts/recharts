import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { allExamples as API } from '../docs/api';
import { localeGet, parseLocalObj, useLocale } from '../utils/LocaleUtils.ts';
import './APIView.css';
import { SupportedLocale } from '../locale';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';
import { ApiDoc, ApiProps, PropExample } from '../docs/api/types.ts';
import { ChartExample } from '../docs/exampleComponents/types.ts';
import { CodeEditorWithPreview } from '../components/CodeEditorWithPreview.tsx';
import { allApiExamples } from '../docs/apiExamples';

type APIViewNewImplProps = RouteComponentProps;

type PropsExamplesProps = {
  examples: ReadonlyArray<PropExample>;
  locale: string;
};

function PropsExamples({ examples, locale }: PropsExamplesProps) {
  return (
    <>
      {examples.map((entry: PropExample) => (
        <li key={entry.name}>
          {entry.isExternal ? (
            <a href={entry.url} target="_blank" rel="noreferrer">
              {entry.name}
            </a>
          ) : (
            <Link to={`/${locale}${entry.url}`}>{entry.name}</Link>
          )}
        </li>
      ))}
    </>
  );
}

type PropsListProps = {
  props: ReadonlyArray<ApiProps>;
  locale: SupportedLocale;
};

function PropsList({ props, locale }: PropsListProps) {
  if (!props || !props.length) {
    return null;
  }

  return (
    <>
      {props.map((entry: ApiProps) => (
        <li className="props-item" key={entry.name} id={entry.name}>
          <p className={`header ${entry.deprecated ? 'deprecated' : ''}`}>
            <span className="title">
              <a href={`#${entry.name}`}>{entry.name}</a>
            </span>
            <span className="type">{entry.type}</span>
            {entry.isOptional ? <em className="optional">optional</em> : null}
            {entry.deprecated ? <em className="deprecated-label">@deprecated</em> : null}
          </p>
          <p className="desc">{parseLocalObj(locale, entry.desc)}</p>
          {entry.defaultVal !== null &&
          entry.defaultVal !== undefined &&
          entry.defaultVal !== 'null' &&
          entry.defaultVal !== 'undefined' ? (
            <p className="default">
              <span className="title">{localeGet(locale, 'api', 'default')}</span>
              <code>{JSON.stringify(entry.defaultVal)}</code>
            </p>
          ) : null}
          {entry.format && entry.format.length ? (
            <div className="format">
              <p className="title">{localeGet(locale, 'api', 'format')}</p>
              <pre className="format-code">
                <code>{entry.format.join('\n')}</code>
              </pre>
            </div>
          ) : null}
          {entry.examples && entry.examples.length ? (
            <div className="examples">
              <p className="title">{localeGet(locale, 'api', 'examples')}</p>
              <ul className="list">
                <PropsExamples examples={entry.examples} locale={locale} />
              </ul>
            </div>
          ) : null}
        </li>
      ))}
    </>
  );
}

type ParentComponentsProps = {
  components: ReadonlyArray<string>;
  locale: SupportedLocale;
};

function ParentComponents({ components, locale }: ParentComponentsProps) {
  return (
    <div>
      <h4 className="sub-title">{localeGet(locale, 'api', 'parent')}</h4>
      <ul className="props-list">
        {components.map(entry => (
          <li key={entry} className="api-component-item">
            {entry.indexOf('svg') < 0 ? (
              <code>
                <Link to={`/${locale}/api/${entry}/`}>{`<${entry} />`}</Link>
              </code>
            ) : (
              <span>{entry}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

type ChildrenComponentsProps = {
  components: ReadonlyArray<string>;
  locale: SupportedLocale;
};

function ChildrenComponents({ components, locale }: ChildrenComponentsProps) {
  return (
    <div>
      <h4 className="sub-title">{localeGet(locale, 'api', 'children')}</h4>
      <ul className="props-list">
        {components.map((entry: string) => (
          <li key={entry} className="api-component-item">
            {entry.indexOf('svg') < 0 ? (
              <code>
                <Link to={`/${locale}/api/${entry}/`}>{`<${entry} />`}</Link>
              </code>
            ) : (
              <span>{entry}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

type ApiExamplesProps = {
  examples: ReadonlyArray<ChartExample> | undefined;
  componentName: string;
};

function ApiExamples({ examples, componentName }: ApiExamplesProps) {
  if (!examples || !examples.length) {
    return null;
  }

  return (
    <div className="examples">
      <div className="example-list">
        {examples.map((example, i) => (
          <div key={`example-${i}`} className="example-item">
            <div className="example-wrapper">
              <div className="example-inner-wrapper">
                <CodeEditorWithPreview
                  Component={example.Component}
                  sourceCode={example.sourceCode}
                  stackBlitzTitle={`Recharts API example: ${componentName} - ${example.name || `Example ${i + 1}`}`}
                  analyticsLabel={`${componentName}-api-example-${i}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function APIViewNewImpl({ params }: APIViewNewImplProps) {
  const locale = useLocale();
  const page = params?.name ?? 'AreaChart';

  if (!(page in API)) {
    return (
      <div className="page page-api">
        <Helmet title={page} />
        <div className="content">
          <h3 className="page-title">API Not Found</h3>
          <p>The API documentation for &#34;{page}&#34; does not exist.</p>
        </div>
      </div>
    );
  }

  const api: ApiDoc = API[page];
  const examples = allApiExamples[page];

  return (
    <div className="page page-api">
      <Helmet title={page} />
      <div className="content" key={page}>
        <h3 className="page-title">{page}</h3>
        {api.desc && <p className="survey">{parseLocalObj(locale, api.desc)}</p>}
        <ApiExamples examples={examples} componentName={page} />

        {api.parentComponents && api.parentComponents.length ? (
          <ParentComponents components={api.parentComponents} locale={locale} />
        ) : null}
        {api.childrenComponents && api.childrenComponents.length ? (
          <ChildrenComponents components={api.childrenComponents} locale={locale} />
        ) : null}

        <h4 className="sub-title">Properties</h4>
        <ul className="props-list">
          <PropsList props={api && api.props} locale={locale} />
        </ul>
      </div>
    </div>
  );
}

export const APIViewNew = withRouter(APIViewNewImpl);

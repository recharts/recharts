import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { allApiDocs as API } from '../docs/api';
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

type PropsSection = 'current' | 'deprecated' | 'events';

const PROPS_SECTION_STORAGE_KEY = 'recharts-api-props-sections';

const DEFAULT_EXPANDED_SECTIONS: Record<PropsSection, boolean> = { current: true, deprecated: false, events: false };

/*
 * Reads the stored state only after hydration; reading it during the first render
 * would make the client differ from the prerendered HTML.
 */
function readStoredExpandedSections(): Record<PropsSection, boolean> {
  try {
    const storedValue = window.localStorage.getItem(PROPS_SECTION_STORAGE_KEY);
    if (storedValue === null) {
      return DEFAULT_EXPANDED_SECTIONS;
    }
    const parsedValue: unknown = JSON.parse(storedValue);
    if (typeof parsedValue !== 'object' || parsedValue === null) {
      return DEFAULT_EXPANDED_SECTIONS;
    }
    return {
      current: !('current' in parsedValue) || parsedValue.current === true,
      deprecated: 'deprecated' in parsedValue && parsedValue.deprecated === true,
      events: 'events' in parsedValue && parsedValue.events === true,
    };
  } catch {
    return DEFAULT_EXPANDED_SECTIONS;
  }
}

function getHashTarget(): string {
  try {
    return decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return window.location.hash.slice(1);
  }
}

type PropsSectionProps = {
  entries: ReadonlyArray<ApiProps>;
  locale: SupportedLocale;
  section: PropsSection;
  isExpanded: boolean;
  onToggle: (section: PropsSection) => void;
};

function PropsSection({ entries, locale, section, isExpanded, onToggle }: PropsSectionProps) {
  if (entries.length === 0) {
    return null;
  }

  const sectionId = `props-${section}`;
  return (
    <section className="props-section">
      <h4 className="sub-title">
        <button type="button" aria-expanded={isExpanded} aria-controls={sectionId} onClick={() => onToggle(section)}>
          {localeGet(locale, 'api', section)}{' '}
          <i className="expander">{isExpanded ? 'Click to collapse' : 'Click to expand'}</i>
        </button>
      </h4>
      {isExpanded ? (
        <ul className="props-list" id={sectionId}>
          {entries.map((entry: ApiProps) => (
            <li className="props-item" key={entry.name} id={entry.name}>
              <p className={`header ${entry.deprecated ? 'deprecated' : ''}`}>
                <span className="title">
                  <a href={`#${entry.name}`}>{entry.name}</a>
                </span>
                <span className="type">{entry.type}</span>
                {entry.isOptional ? <em className="optional">optional</em> : null}
                {entry.deprecated ? <em className="deprecated-label">@deprecated</em> : null}
              </p>
              {entry.deprecated && entry.deprecated !== true ? (
                <div className="deprecated-message">
                  <strong>Deprecated:</strong> {parseLocalObj(locale, entry.deprecated)}
                </div>
              ) : null}
              <div className="desc">{parseLocalObj(locale, entry.desc)}</div>
              {entry.since ? (
                <p className="since">
                  {localeGet(locale, 'api', 'since')} {entry.since}
                </p>
              ) : null}
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
        </ul>
      ) : null}
    </section>
  );
}

function PropsList({ props, locale }: PropsListProps) {
  const [expandedSections, setExpandedSections] = useState(DEFAULT_EXPANDED_SECTIONS);

  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    const hashTarget = getHashTarget();
    if (hashTarget !== '' && document.getElementById(hashTarget) === null) {
      // The target may be in a section that only expands now, so the browser could not scroll to it on load.
      setPendingScrollTarget(hashTarget);
    }
    setExpandedSections(readStoredExpandedSections());
  }, []);

  useEffect(() => {
    if (pendingScrollTarget) {
      document.getElementById(pendingScrollTarget)?.scrollIntoView();
      setPendingScrollTarget(null);
    }
  }, [pendingScrollTarget]);

  const toggleSection = (section: PropsSection) => {
    setExpandedSections(previousSections => {
      const nextSections = { ...previousSections, [section]: !previousSections[section] };
      try {
        window.localStorage.setItem(PROPS_SECTION_STORAGE_KEY, JSON.stringify(nextSections));
      } catch {
        // Storage may be unavailable, so preserve the state for this page only.
      }
      return nextSections;
    });
  };

  if (!props.length) {
    return null;
  }

  const currentProps = props.filter(prop => !prop.deprecated && !prop.name.startsWith('on'));
  const deprecatedProps = props.filter(prop => prop.deprecated);
  const events = props.filter(prop => !prop.deprecated && prop.name.startsWith('on'));

  return (
    <>
      <PropsSection
        entries={currentProps}
        locale={locale}
        section="current"
        isExpanded={expandedSections.current}
        onToggle={toggleSection}
      />
      <PropsSection
        entries={deprecatedProps}
        locale={locale}
        section="deprecated"
        isExpanded={expandedSections.deprecated}
        onToggle={toggleSection}
      />
      <PropsSection
        entries={events}
        locale={locale}
        section="events"
        isExpanded={expandedSections.events}
        onToggle={toggleSection}
      />
    </>
  );
}

type ParentComponentsProps = {
  componentName: string;
  components: ReadonlyArray<string>;
  locale: SupportedLocale;
};

function ParentComponents({ componentName, components, locale }: ParentComponentsProps) {
  return (
    <div>
      <h4 className="sub-title">{localeGet(locale, 'api', 'parent')}</h4>
      <p>{componentName} consumes context provided by these components:</p>
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
  componentName: string;
  components: ReadonlyArray<string>;
  locale: SupportedLocale;
};

function ChildrenComponents({ componentName, components, locale }: ChildrenComponentsProps) {
  return (
    <div>
      <h4 className="sub-title">{localeGet(locale, 'api', 'children')}</h4>
      <p>{componentName} provides context for these components:</p>
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
                  defaultControlsState={example.defaultControlsState}
                  levers={example.levers}
                  stackBlitzTitle={`Recharts API example: ${componentName} - ${example.name || `Example ${i + 1}`}`}
                  analyticsLabel={`${componentName}-api-example-${i}`}
                  defaultTool={example.defaultTool}
                  defaultToolTab={example.defaultToolTab}
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
        {api.deprecated && (
          <div className="deprecated-message">
            <strong>Deprecated:</strong>{' '}
            {api.deprecated === true ? 'This component is deprecated.' : parseLocalObj(locale, api.deprecated)}
          </div>
        )}
        {api.desc && <div className="survey">{parseLocalObj(locale, api.desc)}</div>}
        {api.links && api.links.length ? (
          <div className="links">
            <h4 className="sub-title">{localeGet(locale, 'api', 'links')}</h4>
            <ul className="list">
              <PropsExamples examples={api.links} locale={locale} />
            </ul>
          </div>
        ) : null}
        <ApiExamples examples={examples} componentName={page} />

        {api.parentComponents && api.parentComponents.length ? (
          <ParentComponents componentName={api.name} components={api.parentComponents} locale={locale} />
        ) : null}
        {api.childrenComponents && api.childrenComponents.length ? (
          <ChildrenComponents componentName={api.name} components={api.childrenComponents} locale={locale} />
        ) : null}

        {api.returnValue && (
          <div>
            <h4 className="sub-title">Return value</h4>
            <p>
              <code>{api.returnValue}</code>
            </p>
            {api.returnDesc && <div className="desc">{parseLocalObj(locale, api.returnDesc)}</div>}
          </div>
        )}

        <PropsList props={api && api.props} locale={locale} />
      </div>
    </div>
  );
}

export const APIViewNew = withRouter(APIViewNewImpl);

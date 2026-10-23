import { SourceCodeEditor } from '../../Playground/SourceCodeEditor.tsx';
import { TargetBlankLink } from '../../Shared/TargetBlankLink.tsx';
import { RechartsLink } from '../../Shared/RechartsLink.tsx';
import styles from '../guideTable.module.css';
import ThemeChecker from './ThemeChecker.tsx';

const unitTestExample = `import { analyzeTheme, themeFailures } from '@recharts/devtools/theme';
import { myTheme } from './myTheme';

test('my theme is readable', () => {
  const report = analyzeTheme(myTheme, {
    // No standard defines these two. Pick numbers that fit your marks, see "Telling series apart".
    thresholds: { seriesDifference: 10, seriesDifferenceCvd: 2 },
    // Our labels sit outside the bars, never on top of a series fill.
    checks: { textOnSeries: false },
  });
  expect(themeFailures(report)).toEqual([]);
});
`;

const backgroundsExample = `// The theme also shows on cards, so check both surfaces.
analyzeTheme(myTheme, { backgrounds: { page: '#ffffff', card: '#f4f4f5' } });

// A light and a dark theme are two themes: check each one.
analyzeTheme(myLightTheme);
analyzeTheme(myDarkTheme);
`;

const WCAG_OVERVIEW = 'https://www.w3.org/WAI/standards-guidelines/wcag/';

export function ThemeColorTesting() {
  return (
    <article>
      <h1>Theme color testing</h1>
      <p>
        The colors of a chart theme have more jobs than the colors of buttons and text. Readers have to tell the series
        apart from the page, and from each other. Some charts print labels in the series colors, others put labels on
        top of the series. All of that has to work for readers with a color vision deficiency too.
      </p>
      <p>
        This page checks the colors of a theme for all of these at once. Start from a built-in theme, change the series
        colors, the page background or the label color, and see the results, with what each failure means and which
        color would fix it. The same checks run in unit tests with <code>@recharts/devtools/theme</code>, which takes
        your <code>RechartsTheme</code> as it is, so you can keep your theme readable as it changes. Every threshold
        links to the standard that defines it, and where no standard exists, this page says so.
      </p>

      <h2>Theme checker</h2>
      <ThemeChecker />

      <h2>What each check measures</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Check</th>
            <th>What it compares</th>
            <th>Default threshold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>seriesOnBackground</code>
            </td>
            <td>
              Each series against the page: the fill painted at its <code>fillOpacity</code>, and the opaque stroke.
            </td>
            <td>
              3:1,{' '}
              <TargetBlankLink href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html">
                WCAG 2.2 SC 1.4.11 Non-text Contrast
              </TargetBlankLink>
            </td>
          </tr>
          <tr>
            <td>
              <code>seriesVsSeries</code>
            </td>
            <td>The CIEDE2000 color difference (ΔE00) between every pair of series.</td>
            <td>None, you choose. See below.</td>
          </tr>
          <tr>
            <td>
              <code>seriesContrast</code>
            </td>
            <td>The WCAG contrast ratio between every pair of series, for marks that touch, like pie slices.</td>
            <td>None, you choose. See below.</td>
          </tr>
          <tr>
            <td>
              <code>textOnBackground</code>
            </td>
            <td>
              The label color, <code>typography.color</code>, on the page.
            </td>
            <td>
              4.5:1,{' '}
              <TargetBlankLink href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">
                WCAG 2.2 SC 1.4.3 Contrast (Minimum)
              </TargetBlankLink>
            </td>
          </tr>
          <tr>
            <td>
              <code>seriesAsText</code>
            </td>
            <td>A series color used for label text on the page, like the default pie labels.</td>
            <td>4.5:1, SC 1.4.3</td>
          </tr>
          <tr>
            <td>
              <code>textOnSeries</code>
            </td>
            <td>The label color on each series fill, like labels inside bars.</td>
            <td>4.5:1, SC 1.4.3</td>
          </tr>
        </tbody>
      </table>
      <p>
        Every check runs for every page background, and for typical vision plus three simulated color vision
        deficiencies.
      </p>

      <h2>Contrast</h2>
      <p>
        <TargetBlankLink href="https://www.w3.org/TR/WCAG22/">WCAG 2.2</TargetBlankLink> sets contrast ratios between
        1:1 and 21:1, computed from the{' '}
        <TargetBlankLink href="https://www.w3.org/TR/WCAG22/#dfn-relative-luminance">
          relative luminance
        </TargetBlankLink>{' '}
        of the two colors, as its{' '}
        <TargetBlankLink href="https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio">contrast ratio</TargetBlankLink>{' '}
        definition describes. Three success criteria matter for charts:
      </p>
      <ul>
        <li>
          <TargetBlankLink href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">
            SC 1.4.3 Contrast (Minimum)
          </TargetBlankLink>
          , level AA: text needs 4.5:1, or 3:1 when it is{' '}
          <TargetBlankLink href="https://www.w3.org/TR/WCAG22/#dfn-large-scale">large-scale</TargetBlankLink>.
        </li>
        <li>
          <TargetBlankLink href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html">
            SC 1.4.6 Contrast (Enhanced)
          </TargetBlankLink>
          , level AAA: text needs 7:1, or 4.5:1 when it is large-scale.
        </li>
        <li>
          <TargetBlankLink href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html">
            SC 1.4.11 Non-text Contrast
          </TargetBlankLink>
          , level AA: graphical objects that are required to understand the content need 3:1 against adjacent colors.
        </li>
      </ul>
      <p>
        The defaults are the level AA numbers for normal text. The <code>WCAG_CONTRAST</code> export holds the others,
        and you can pass any of them as <code>thresholds.textContrast</code>.
      </p>
      <p>
        The Understanding document for SC 1.4.11 has{' '}
        <TargetBlankLink href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html#graphical-objects">
          examples for charts
        </TargetBlankLink>
        . In a line chart, the lines need 3:1 against the background, but not against each other when they rarely
        overlap. In a{' '}
        <TargetBlankLink href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html#pie-charts">
          pie chart
        </TargetBlankLink>
        , readers have to tell the slices apart, so neighboring slices need 3:1 against each other, unless something
        else separates them, like a contrasting border, or labels that carry the same information. That is what the{' '}
        <code>seriesContrast</code> check measures. It has no default threshold, because whether it applies depends on
        your chart: in the checker, turn on &quot;My series touch each other&quot; to require 3:1, and in a unit test
        pass <code>thresholds: {'{ seriesContrast: 3 }'}</code>.
      </p>

      <h2>Telling series apart</h2>
      <p>
        No standard defines how different two series colors must be. WCAG asks for something else instead:{' '}
        <TargetBlankLink href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html">
          SC 1.4.1 Use of Color
        </TargetBlankLink>{' '}
        says color must not be the only visual means of conveying information. Direct labels, different markers or dash
        patterns give readers another way to tell series apart.
      </p>
      <p>
        Color difference still matters: the closer two colors are, the more often readers mix them up. The{' '}
        <code>seriesVsSeries</code> check measures it with CIEDE2000, the color difference formula of the CIE,
        standardized as ISO/CIE 11664-6. Gaurav Sharma publishes{' '}
        <TargetBlankLink href="https://hajim.rochester.edu/ece/sites/gsharma/ciede2000/">
          implementation notes and test data
        </TargetBlankLink>{' '}
        for it, and the devtools test suite checks against that data.
      </p>
      <p>
        How large a difference is large enough depends on the chart. In{' '}
        <TargetBlankLink href="https://cmci.colorado.edu/visualab/VisColors/">
          Modeling Color Difference for Visualization Design
        </TargetBlankLink>{' '}
        (IEEE TVCG, 2018), Danielle Albers Szafir found that people&apos;s ability to perceive color differences varies
        significantly across mark types: points, bars and lines. That is why <code>seriesDifference</code> and{' '}
        <code>seriesDifferenceCvd</code> have no default. The checker above starts with the numbers the built-in
        Recharts themes are tested with: ΔE00 10 in typical vision and 2 under simulation. These are project choices,
        not standards.
      </p>

      <h2>Color vision deficiencies</h2>
      <p>
        The checks simulate protanopia, deuteranopia and tritanopia with the model of Machado, Oliveira and Fernandes,{' '}
        <TargetBlankLink href="https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html">
          A Physiologically-based Model for Simulation of Color Vision Deficiency
        </TargetBlankLink>{' '}
        (IEEE TVCG, 2009,{' '}
        <TargetBlankLink href="https://doi.org/10.1109/TVCG.2009.113">doi:10.1109/TVCG.2009.113</TargetBlankLink>
        ). A severity below 1 approximates anomalous trichromacy, a milder form. The model is published in steps of 0.1.
      </p>
      <p>
        The model mixes amounts of light, so it applies to linear RGB, not to the gamma-encoded values of a hex color.
        The R package colorspace{' '}
        <TargetBlankLink href="https://www.zeileis.org/news/simulate_cvd/">fixed this in version 2.1-0</TargetBlankLink>
        . The difference is small for muted colors and noticeable for saturated reds, purples and oranges.
      </p>
      <p>
        A simulation approximates what some readers see. It does not replace testing with them. Also note that WCAG
        defines contrast for the colors as they are displayed. The contrast checks under simulation are an extra warning
        sign, not a WCAG requirement: turn them off by passing <code>visions: [&apos;normal&apos;]</code> to a separate{' '}
        <code>analyzeTheme</code> call.
      </p>

      <h2>How colors are measured</h2>
      <p>
        Colors are sRGB, as{' '}
        <TargetBlankLink href="https://www.w3.org/TR/css-color-4/">CSS Color Module Level 4</TargetBlankLink> defines
        them. A translucent fill is first painted over the page with{' '}
        <TargetBlankLink href="https://www.w3.org/TR/compositing-1/#simplealphacompositing">
          simple alpha compositing
        </TargetBlankLink>
        , which gives the color the reader actually sees, and then the color is simulated and measured.
      </p>
      <p>
        All the color math comes from <TargetBlankLink href="https://culorijs.org/api/">culori</TargetBlankLink>:
        parsing, compositing, WCAG contrast, CIEDE2000, the simulation matrices and the OKLCH lightness that the
        suggested fixes move along. The theme module only combines them.
      </p>

      <h2>Testing your own theme</h2>
      <p>
        Install <code>@recharts/devtools</code> as a development dependency. <code>analyzeTheme</code> takes your{' '}
        <code>RechartsTheme</code> object as it is and reads its <code>graphicalItems</code>,{' '}
        <code>typography.color</code> and <code>pageBackground</code>. Nothing from React or Recharts runs: the theme is
        plain data, and Recharts 3.11 or newer only provides its type. The <code>@recharts/devtools/theme</code> entry
        point runs in any test runner that supports ES modules.
      </p>
      <SourceCodeEditor value={unitTestExample} />
      <p>
        By default the checks run on the theme&apos;s <code>pageBackground</code>. Pass other backgrounds when the theme
        shows on more than one surface:
      </p>
      <SourceCodeEditor value={backgroundsExample} />
      <p>
        <code>analyzeTheme</code> returns plain data: every measured value with its threshold, its standard and, when it
        fails, the nearest color that would pass. <code>themeFailures</code> turns the failed checks into one readable
        line each, fix included. See the <RechartsLink to="guide/theming">Theming guide</RechartsLink> for how to write
        a theme.
      </p>

      <h2>Which standard applies to you</h2>
      <p>
        WCAG is the reference for most accessibility laws and standards, in one version or another. According to the W3C{' '}
        <TargetBlankLink href={WCAG_OVERVIEW}>WCAG overview</TargetBlankLink>, WCAG 2.2 is also the international
        standard ISO/IEC 40500:2025, and EN 301 549, the European standard used for the European Accessibility Act, uses
        WCAG 2.2 in its 2026 version. In the United States, the{' '}
        <TargetBlankLink href="https://www.access-board.gov/ict/">Section 508 standards</TargetBlankLink> incorporate
        WCAG 2.0 level A and AA, and the{' '}
        <TargetBlankLink href="https://www.ada.gov/resources/2024-03-08-web-rule/">ADA Title II rule</TargetBlankLink>{' '}
        adopts WCAG 2.1 level AA. Check which version applies to you: this page links WCAG 2.2.
      </p>
      <p>
        <TargetBlankLink href="https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/">WCAG 3</TargetBlankLink>{' '}
        is an early draft, not a standard yet, so this page does not use it.
      </p>
    </article>
  );
}

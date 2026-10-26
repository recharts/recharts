import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import { SourceCodeEditor } from '../../Playground/SourceCodeEditor.tsx';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import { RechartsLink } from '../../Shared/RechartsLink.tsx';
import styles from '../guideTable.module.css';
import LabelColorsExample from './LabelColorsExample.tsx';
import LabelColorsExampleSource from './LabelColorsExample.tsx?raw';
import PieLabelColorsExample from './PieLabelColorsExample.tsx';
import PieLabelColorsExampleSource from './PieLabelColorsExample.tsx?raw';
import LabelBackgroundExample from './LabelBackgroundExample.tsx';
import LabelBackgroundExampleSource from './LabelBackgroundExample.tsx?raw';

const explicitFillExample = `<Bar dataKey="desktop">
  {/* An explicit fill always wins */}
  <LabelList position="inside" fill="#000" />
</Bar>`;

const themeFillExample = `import { type RechartsTheme, lightTheme } from 'recharts';

const theme: RechartsTheme = {
  ...lightTheme,
  graphicalItems: lightTheme.graphicalItems.map(item => ({
    ...item,
    // Every data label of this series takes this color, wherever it is
    label: { style: { fill: '#18181b' } },
  })),
};
`;

const backgroundThemeExample = `import { type RechartsTheme, lightTheme } from 'recharts';

const theme: RechartsTheme = {
  ...lightTheme,
  graphicalItems: lightTheme.graphicalItems.map(item => ({
    ...item,
    // Every data label gets a background, and so takes the series color
    label: { background: { rx: 4 } },
  })),
};
`;

const customContentExample = `function CustomLabel({ x, y, value, fill }) {
  // fill is the automatic color, unless the LabelList sets its own
  return (
    <text x={x} y={y} fill={fill}>
      {value}
    </text>
  );
}

<LabelList content={CustomLabel} position="inside" />`;

export function LabelColors() {
  return (
    <article>
      <h1>Label colors</h1>
      <p>
        Inside a <RechartsLink to="guide/theming">theme</RechartsLink>, data labels pick their text color automatically.
        A label next to its shape takes the color of the shape, so that it reads as part of the series. A label on top
        of a filled shape takes the <code>pageBackground</code> color of the theme, like a cut-out of the shape. If it
        took the color of the shape, it would be invisible.
      </p>
      <CodeEditorWithPreview
        Component={LabelColorsExample}
        sourceCode={LabelColorsExampleSource}
        stackBlitzTitle="Recharts Label Colors Example"
      />
      <p>
        This applies to data labels: <LinkToApi>LabelList</LinkToApi>, and the <code>label</code> prop of graphical
        items. Other labels, such as axis labels and the labels of reference lines and areas, take the{' '}
        <code>typography</code> color of the theme, or the top-level <code>label</code> theme.
      </p>
      <p>Without a theme, nothing changes: data labels keep the colors they have always had.</p>

      <h2>The rules</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Label</th>
            <th>Text color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              On top of the shape of a <LinkToApi>Bar</LinkToApi>, <LinkToApi>Funnel</LinkToApi>,{' '}
              <LinkToApi>Pie</LinkToApi> or <LinkToApi>RadialBar</LinkToApi>
            </td>
            <td>
              <code>pageBackground</code>. If the theme has none, <code>chart.backgroundColor</code>, and if it has
              neither, the <code>typography</code> color.
            </td>
          </tr>
          <tr>
            <td>Next to the shape</td>
            <td>
              The color the shape is drawn with, the same color as in the Tooltip and the Legend. If a data entry sets
              its own <code>fill</code>, its label takes that color.
            </td>
          </tr>
          <tr>
            <td>
              Any label of a <LinkToApi>Line</LinkToApi>, <LinkToApi>Area</LinkToApi>, <LinkToApi>Radar</LinkToApi> or{' '}
              <LinkToApi>Scatter</LinkToApi>
            </td>
            <td>
              The color of the series: the <code>stroke</code> of a Line, Area or Radar, and the color of each point in
              Scatter. These labels never sit on a filled shape.
            </td>
          </tr>
          <tr>
            <td>
              With a <code>background</code> or a <code>halo</code>
            </td>
            <td>The color of the shape. The label sits on its own background, not on the shape.</td>
          </tr>
          <tr>
            <td>
              At an <code>{'{ x, y }'}</code> position
            </td>
            <td>
              The <code>typography</code> color. Recharts cannot tell where such a label ends up.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Which positions are on top of the shape</h3>
      <p>
        In cartesian charts, <code>top</code>, <code>left</code>, <code>right</code> and <code>bottom</code> are next to
        the shape. Every other position, including no position at all, is on top of it. Note that <code>outside</code>{' '}
        is not a cartesian position: in a Bar or Funnel, it is drawn in the center.
      </p>
      <p>
        In polar charts, <code>outside</code> is past the outer edge of the sector, <code>end</code> is past the end of
        a RadialBar, and <code>center</code>, <code>centerTop</code> and <code>centerBottom</code> are at the center of
        the chart. Every other position is on top of the sector, including <code>insideStart</code> and{' '}
        <code>insideEnd</code>.
      </p>
      <CodeEditorWithPreview
        Component={PieLabelColorsExample}
        sourceCode={PieLabelColorsExampleSource}
        stackBlitzTitle="Recharts Polar Label Colors Example"
      />
      <p>
        The default label of a <LinkToApi>Pie</LinkToApi>, which you get with <code>{'label={true}'}</code>, is drawn
        outside of the sector, so it takes the color of the sector.
      </p>

      <h2>Contrast</h2>
      <p>
        Every color of the built-in palettes has at least 4.5:1 contrast against the <code>pageBackground</code> of its
        theme, the WCAG contrast for normal text. That covers labels next to their shape. A label on top of a shape uses
        the same two colors the other way around. The built-in themes paint fills slightly transparent, so on some
        colors the contrast there is a little lower, but still above 3:1.
      </p>
      <p>
        Colors that come from your data or your own theme can be anything. A label in the page background color is hard
        to read on a pale fill. In that case, draw a <code>background</code> or a <code>halo</code>: the label then sits
        on the page color and takes the color of its shape.
      </p>
      <CodeEditorWithPreview
        Component={LabelBackgroundExample}
        sourceCode={LabelBackgroundExampleSource}
        stackBlitzTitle="Recharts Label Background Example"
      />
      <p>
        A <code>background</code> draws a rectangle behind each label. It is sized after the label renders, so it is not
        part of server-side rendering. A <code>halo</code> draws an outline around the letters instead: it needs no
        measuring, so it is drawn during server-side rendering, and it covers less of the chart. Both use{' '}
        <code>pageBackground</code> unless you set a color.
      </p>
      <p>
        To turn backgrounds on for every data label, set <code>label.background</code> in the theme:
      </p>
      <SourceCodeEditor value={backgroundThemeExample} />

      <h2>Choosing your own color</h2>
      <p>The automatic color is the last resort. In order, a data label takes:</p>
      <ol>
        <li>
          The <code>fill</code> prop of the <LinkToApi>LabelList</LinkToApi>, or of the object in the <code>label</code>{' '}
          prop.
        </li>
        <li>
          A <code>fill</code> or <code>color</code> in <code>graphicalItems[n].label.style</code> of the theme.
        </li>
        <li>The automatic color.</li>
      </ol>
      <SourceCodeEditor value={explicitFillExample} />
      <SourceCodeEditor value={themeFillExample} />
      <p>
        Custom <code>content</code> receives the resolved color as its <code>fill</code> prop, so it can use it or
        ignore it:
      </p>
      <SourceCodeEditor value={customContentExample} />
    </article>
  );
}

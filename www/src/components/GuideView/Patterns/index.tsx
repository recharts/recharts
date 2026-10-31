import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import { SourceCodeEditor } from '../../Playground/SourceCodeEditor.tsx';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import { RechartsLink } from '../../Shared/RechartsLink.tsx';
import styles from '../guideTable.module.css';
import BuiltInPatternsExample from './BuiltInPatternsExample.tsx';
import BuiltInPatternsExampleSource from './BuiltInPatternsExample.tsx?raw';
import GradientsExample from './GradientsExample.tsx';
import GradientsExampleSource from './GradientsExample.tsx?raw';
import CustomFillsExample from './CustomFillsExample.tsx';
import CustomFillsExampleSource from './CustomFillsExample.tsx?raw';
import ThemePatternsExample from './ThemePatternsExample.tsx';
import ThemePatternsExampleSource from './ThemePatternsExample.tsx?raw';

const fillObjectExample = `import { pattern, patterns } from 'recharts';

// A color, the same as always
<Bar dataKey="uv" fill="#8884d8" />

// A fill object: a solid color, and a definition that paints the shapes
<Bar dataKey="uv" fill={{ color: '#8884d8', definition: pattern(patterns.diagonal) }} />

// Without a color, the Bar keeps its theme color
<Bar dataKey="uv" fill={{ definition: pattern(patterns.diagonal) }} />`;

const adjustPatternExample = `import { pattern, patterns } from 'recharts';

// Built-in patterns are plain objects, so you can adjust them by spreading
const denseDots = pattern({ ...patterns.dots, width: 6, height: 6 });
const darkStripes = pattern({ ...patterns.diagonal, color: '#000', opacity: 0.3 });`;

const entryFillExample = `const data = [
  { name: 'Search', value: 400 },
  // This sector paints with its own pattern
  { name: 'Direct', value: 300, fill: { definition: pattern(patterns.star) } },
  // This sector has its own color, and no pattern
  { name: 'Social', value: 300, fill: '#ff7300' },
];

<Pie data={data} dataKey="value" fill={{ definition: pattern(patterns.diagonal) }} />`;

const otherPlacesExample = `const stripes = { color: '#eee', definition: pattern(patterns.diagonal) };

<CartesianGrid horizontalFill={['#fafafa', stripes]} />
<ReferenceArea x1="Feb" x2="Apr" fill={stripes} />
<Bar dataKey="uv" background={{ fill: stripes }} activeBar={{ fill: stripes }} />
<Tooltip cursor={{ fill: stripes }} />`;

export function Patterns() {
  return (
    <article>
      <h1>Patterns and gradients</h1>
      <p>
        Most charts tell their series apart by color alone. That leaves out people who see colors differently, and
        anyone looking at a printout in black and white. The{' '}
        <a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html">WCAG success criterion 1.4.1</a> asks
        for a second way. Patterns are that second way: stripes, dots, or shapes drawn over the color of the series.
      </p>
      <p>
        Wherever Recharts accepts a <code>fill</code> color for a shape that fills an area, it also accepts a fill
        object. A fill object has a solid <code>color</code>, and a <code>definition</code> that paints the shapes, such
        as a pattern or a gradient.
      </p>
      <SourceCodeEditor value={fillObjectExample} className="snippet" readOnly />
      <p>
        Recharts renders the definition in SVG <code>&lt;defs&gt;</code> with a unique ID, and paints the shapes with
        it. You never write <code>url(#…)</code> or manage IDs yourself. Everything that needs a plain color uses the{' '}
        <code>color</code>: the Tooltip, the Legend text, and the labels. The Legend icon draws the same pattern.
      </p>
      <p>
        If the fill object has no <code>color</code>, the shapes keep their color from the{' '}
        <RechartsLink to="guide/theming">theme</RechartsLink>, and the pattern is drawn in that color. The texture of
        the built-in patterns is drawn in the <code>pageBackground</code> color of the theme, so it looks cut out of the
        shape in light and dark mode alike.
      </p>

      <h2>Built-in patterns</h2>
      <p>
        <LinkToApi>patterns</LinkToApi> holds the built-in patterns, and <LinkToApi>pattern</LinkToApi> turns one into a
        definition. The stripes and grids come first, then the same shapes as the <LinkToApi>Symbols</LinkToApi> in the
        Legend and in Scatter, two per tile in staggered rows. <code>dots</code> is the same pattern as{' '}
        <code>circle</code>.
      </p>
      <CodeEditorWithPreview
        Component={BuiltInPatternsExample}
        sourceCode={BuiltInPatternsExampleSource}
        stackBlitzTitle="Recharts Built-in Patterns Example"
      />
      <p>
        A pattern is a plain object: the tile size, SVG path data, and how to draw it. Spread one of the built-in
        patterns to adjust it.
      </p>
      <SourceCodeEditor value={adjustPatternExample} className="snippet" readOnly />

      <h2>Gradients</h2>
      <p>
        <LinkToApi>gradients</LinkToApi> holds the built-in linear gradients, and <LinkToApi>linearGradient</LinkToApi>{' '}
        turns one into a definition. They fade the base color of the fill, so they work with any color. The gradient
        stretches over each shape: over each bar, or here, over each area.
      </p>
      <CodeEditorWithPreview
        Component={GradientsExample}
        sourceCode={GradientsExampleSource}
        stackBlitzTitle="Recharts Gradient Fill Example"
      />

      <h2>Custom patterns and definitions</h2>
      <p>
        There are two ways to draw your own fill. A custom pattern is a <code>RechartsPattern</code> object: a tile
        size, and SVG path data drawn in each tile. Recharts paints the base color under it. In small areas, such as a
        Legend icon, it draws the tiles smaller so that at least three fit.
      </p>
      <p>
        For full control, write the definition yourself. A definition is a React component that renders an SVG paint
        server, such as a <code>&lt;linearGradient&gt;</code>, <code>&lt;radialGradient&gt;</code>, or{' '}
        <code>&lt;pattern&gt;</code>. It receives the <code>id</code> to put on its root element, the base{' '}
        <code>color</code> of the fill, and <code>bounds</code>: the size of the painted area, when it paints one area
        of known size. It renders inside the chart, so it can call hooks, Recharts hooks included.
      </p>
      <CodeEditorWithPreview
        Component={CustomFillsExample}
        sourceCode={CustomFillsExampleSource}
        stackBlitzTitle="Recharts Custom Fill Example"
      />
      <p>
        Create definitions once, outside of your components. A new component on every render makes React remount the
        definition every time.
      </p>
      <p>
        The Legend icon draws the definition with its own ID, and gives it the size of the icon as <code>bounds</code>.
        A definition sized in pixels, such as a <code>&lt;pattern&gt;</code> with{' '}
        <code>patternUnits=&quot;userSpaceOnUse&quot;</code>, can read <code>bounds</code> to fit the small icon.
        Recharts also passes <code>bounds</code> from a ReferenceArea, a ReferenceDot, and the Rectangle, Dot,
        Trapezoid, and Symbols shapes. It is undefined where one definition paints shapes of different sizes, such as
        every bar of a series. Gradients in the default units stretch over each shape anyway.
      </p>

      <h2>A fill for each data entry</h2>
      <p>
        Graphical items that draw one shape per data entry, like <LinkToApi>Bar</LinkToApi>, <LinkToApi>Pie</LinkToApi>,{' '}
        <LinkToApi>Funnel</LinkToApi>, <LinkToApi>RadialBar</LinkToApi>, <LinkToApi>Scatter</LinkToApi>,{' '}
        <LinkToApi>Treemap</LinkToApi>, <LinkToApi>SunburstChart</LinkToApi>, and the nodes of{' '}
        <LinkToApi>Sankey</LinkToApi>, read <code>fill</code> from each data entry too. A data entry can set a color, or
        a fill object. The data entry wins over the graphical item.
      </p>
      <SourceCodeEditor value={entryFillExample} className="snippet" readOnly />

      <h2>Patterns in a theme</h2>
      <p>
        Each entry of the theme <code>graphicalItems</code> can set a <code>fillDefinition</code> next to its{' '}
        <code>fill</code> color. Graphical items without a fill of their own then paint with it. Give each entry a
        different pattern, and every chart that uses the theme tells its series apart without relying on color alone,
        without setting a single <code>fill</code>.
      </p>
      <CodeEditorWithPreview
        Component={ThemePatternsExample}
        sourceCode={ThemePatternsExampleSource}
        stackBlitzTitle="Recharts Theme Patterns Example"
      />
      <p>
        Pie, Funnel, Treemap, SunburstChart, and Sankey take one theme entry per sector, trapezoid, branch, or node. The
        other graphical items take one per series. A graphical item or data entry that sets its own color does not take
        the theme pattern. A theme with fill definitions holds React components, so it cannot be stored as JSON.
      </p>

      <h2>Where fill objects work</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>What</th>
            <th>Where</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Graphical items</td>
            <td>
              The <code>fill</code> of <LinkToApi>Bar</LinkToApi>, <LinkToApi>Area</LinkToApi>,{' '}
              <LinkToApi>Radar</LinkToApi>, <LinkToApi>Scatter</LinkToApi>, <LinkToApi>Pie</LinkToApi>,{' '}
              <LinkToApi>RadialBar</LinkToApi>, <LinkToApi>Funnel</LinkToApi>, <LinkToApi>Treemap</LinkToApi>, and{' '}
              <LinkToApi>SunburstChart</LinkToApi>, and the <code>fill</code> of their data entries
            </td>
          </tr>
          <tr>
            <td>Reference elements and grids</td>
            <td>
              The <code>fill</code> of <LinkToApi>ReferenceArea</LinkToApi>, <LinkToApi>ReferenceDot</LinkToApi>,{' '}
              <LinkToApi>CartesianGrid</LinkToApi>, and <LinkToApi>PolarGrid</LinkToApi>, and each entry of{' '}
              <code>horizontalFill</code> and <code>verticalFill</code>
            </td>
          </tr>
          <tr>
            <td>Active shapes and backgrounds</td>
            <td>
              The object form of <code>background</code>, <code>activeBar</code>, <code>activeShape</code>,{' '}
              <code>activeDot</code>, <code>dot</code>, and the Tooltip <code>cursor</code>
            </td>
          </tr>
          <tr>
            <td>Other components</td>
            <td>
              The background of <LinkToApi>Brush</LinkToApi>, and the shapes: <LinkToApi>Rectangle</LinkToApi>,{' '}
              <LinkToApi>Sector</LinkToApi>, <LinkToApi>Trapezoid</LinkToApi>, <LinkToApi>Polygon</LinkToApi>,{' '}
              <LinkToApi>Symbols</LinkToApi>, <LinkToApi>Curve</LinkToApi>, and <LinkToApi>Dot</LinkToApi>
            </td>
          </tr>
        </tbody>
      </table>
      <SourceCodeEditor value={otherPlacesExample} className="snippet" readOnly />
      <p>
        The shapes, active shapes, backgrounds, and the cursor have no theme color to fall back to, so give their fill
        objects a <code>color</code>. Labels and text keep plain colors, and so do the lines of a{' '}
        <LinkToApi>Line</LinkToApi>, the links of a Sankey, and the Brush travellers.
      </p>
    </article>
  );
}

import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import styles from '../guideTable.module.css';
import AnimationsExample, { AnimationsControls } from './AnimationsExample.tsx';
import AnimationsExampleSource from './AnimationsExample.tsx?raw';
import AnimatedTimeSeriesExample, {
  AnimatedTimeSeriesExampleControls,
} from '../../../docs/exampleComponents/LineChart/AnimatedTimeSeriesExample.tsx';
import MatchingExampleSource from '../../../docs/exampleComponents/LineChart/AnimatedTimeSeriesExample.tsx?raw';
import MatchingStrategiesExample, { MatchingStrategiesControls } from './MatchingStrategiesExample.tsx';
import MatchingStrategiesExampleSource from './MatchingStrategiesExample.tsx?raw';
import CustomAnimationExample, {
  CustomAnimationControls,
} from '../../../docs/exampleComponents/ScatterChart/CustomAnimationExample.tsx';
import CustomAnimationExampleSource from '../../../docs/exampleComponents/ScatterChart/CustomAnimationExample.tsx?raw';
import AreaChartCustomAnimationExample, {
  AreaChartCustomAnimationControls,
} from '../../../docs/exampleComponents/AreaChart/AreaChartCustomAnimationExample';
import AreaChartCustomAnimationExampleSource from '../../../docs/exampleComponents/AreaChart/AreaChartCustomAnimationExample/index.tsx?raw';
import LineChartCustomShapeExample, {
  LineChartCustomShapeControls,
} from '../../../docs/exampleComponents/LineChart/LineChartCustomShapeExample';
import LineChartCustomShapeExampleSource from '../../../docs/exampleComponents/LineChart/LineChartCustomShapeExample/index.tsx?raw';

export function AnimationsGuide() {
  return (
    <article>
      <h1>Recharts animations</h1>
      <p>
        Recharts supports rich animations out of the box. Animations come with default settings and are completely
        customizable too.
      </p>
      <p>Some Recharts components are animated out of the box. Those are:</p>
      <ul>
        <li>
          <LinkToApi>Area</LinkToApi>
        </li>
        <li>
          <LinkToApi>Bar</LinkToApi>
        </li>
        <li>
          <LinkToApi>ErrorBar</LinkToApi>
        </li>
        <li>
          <LinkToApi>Funnel</LinkToApi>
        </li>
        <li>
          <LinkToApi>Line</LinkToApi>
        </li>
        <li>
          <LinkToApi>Scatter</LinkToApi>
        </li>
        <li>
          <LinkToApi>Pie</LinkToApi>
        </li>
        <li>
          <LinkToApi>Radar</LinkToApi>
        </li>
        <li>
          <LinkToApi>RadialBar</LinkToApi>
        </li>
        <li>
          <LinkToApi>Treemap</LinkToApi>
        </li>
      </ul>
      <p>These components also support animations, but the animations are turned off by default:</p>
      <ul>
        <li>
          <LinkToApi>Rectangle</LinkToApi>
        </li>
        <li>
          <LinkToApi>Trapezoid</LinkToApi>
        </li>
      </ul>
      <h2>Basic animation settings</h2>
      <p>
        All of the animated components support the same controls. Different components will have different defaults:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>isAnimationActive</code>
            </td>
            <td>
              <code>boolean | &apos;auto&apos;</code>
            </td>
            <td>
              Turns the animation on or off. When set to <code>&apos;auto&apos;</code> (the default for most
              components), animation is enabled unless the user has requested reduced motion via their device settings.
              Setting <code>true</code> always animates, ignoring the settings.
            </td>
          </tr>
          <tr>
            <td>
              <code>animationBegin</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>Delay, in milliseconds, between the first render and when the animation starts playing.</td>
          </tr>
          <tr>
            <td>
              <code>animationDuration</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>Duration, in milliseconds, of the animation.</td>
          </tr>
          <tr>
            <td>
              <code>animationEasing</code>
            </td>
            <td>
              <code>string | function</code>
            </td>
            <td>
              Easing function. Can be one of the predefined string values, a custom{' '}
              <code>cubic-bezier(x1, y1, x2, y2)</code> string, or a custom easing function. More on easing below.
            </td>
          </tr>
          <tr>
            <td>
              <code>onAnimationStart</code>
            </td>
            <td>
              <code>function</code>
            </td>
            <td>
              Callback that gets called when the animation starts playing, after the first render and after{' '}
              <code>animationBegin</code> had elapsed.
            </td>
          </tr>
          <tr>
            <td>
              <code>onAnimationEnd</code>
            </td>
            <td>
              <code>function</code>
            </td>
            <td>Callback that gets called when the animation finishes playing.</td>
          </tr>
        </tbody>
      </table>
      <h3>Animation easing</h3>
      <p>Easing is a function that controls the pace of the animation. The predefined string values are:</p>
      <ul>
        <li>
          <code>ease</code> (default)
        </li>
        <li>
          <code>ease-in</code>
        </li>
        <li>
          <code>ease-out</code>
        </li>
        <li>
          <code>ease-in-out</code>
        </li>
        <li>
          <code>linear</code>
        </li>
        <li>
          <code>spring</code> — a spring physics simulation
        </li>
      </ul>
      <p>You can also pass a custom cubic-bezier string in the form:</p>
      <pre>cubic-bezier(x1, y1, x2, y2)</pre>
      <p>
        where <code>x1</code>, <code>y1</code>, <code>x2</code> and <code>y2</code> are numbers that define the shape of
        the easing curve. You can use <a href="https://cubic-bezier.com/">https://cubic-bezier.com/</a> to visually
        create and understand cubic-bezier functions.
      </p>
      <p>
        For full control, you can also pass a custom easing function directly. The function receives a progress value
        between 0 and 1 and returns a transformed progress value.
      </p>
      <CodeEditorWithPreview
        Component={AnimationsExample}
        Controls={AnimationsControls}
        sourceCode={AnimationsExampleSource}
        stackBlitzTitle="Recharts Animations Example"
        defaultTool="controls"
      />
      <h2>Accessibility</h2>
      <p>
        When <code>isAnimationActive</code> is set to <code>&apos;auto&apos;</code> (the default), Recharts respects the{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion">
          <code>prefers-reduced-motion</code>
        </a>{' '}
        media feature and will turn off animations for users that have requested reduced motion via their device
        settings. If you explicitly set <code>isAnimationActive={'{true}'}</code>, animations will always play
        regardless of this setting.
      </p>
      <h2>Advanced animations</h2>
      <p>
        On top of the basic animation props, since v3.9 Recharts also supports two new props that allow you to customize
        the animation completely.
      </p>
      <h3>Animation matching</h3>
      <p>
        When the data changes, Recharts needs to decide which items in the new data correspond to which items in the old
        data. This determines how each element animates from its old position to its new one.
      </p>
      <p>
        By default, items are matched by their <strong>array index</strong>: the first old item animates to the first
        new item, the second to the second, and so on. This works great when you are replacing the entire dataset.
      </p>
      <p>
        However, for <strong>time-series or streaming charts</strong> where new data points are appended and old points
        are removed, index-based matching causes every point to slide to the position of its neighbor. What you usually
        want instead is for each point to keep its identity and slide to its new position — or smoothly appear and
        disappear.
      </p>
      <p>
        The <code>animationMatchBy</code> prop lets you control this behavior. This prop is available since version 3.9.
        It is available on all animated components:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>matchByIndex</code>
            </td>
            <td>
              Match items by their array index with proportional stretching. When the old and new arrays have different
              lengths, old items are spread across all new positions. This is the default behavior.
            </td>
          </tr>
          <tr>
            <td>
              <code>matchAppend</code>
            </td>
            <td>
              Match items sequentially: old item 0 pairs with new item 0, old item 1 with new item 1, and so on. Extra
              new items have no match and animate in from their default position. Useful when data is appended at the
              end.
            </td>
          </tr>
          <tr>
            <td>
              <code>matchByDataKey(key)</code>
            </td>
            <td>
              Match items by a value in their data payload. Pass the data key name as an argument (e.g.,{' '}
              <code>matchByDataKey(&apos;timestamp&apos;)</code>). Items with the same key value are treated as the same
              logical item and animate between positions.
            </td>
          </tr>
          <tr>
            <td>Custom function</td>
            <td>
              A function <code>(item, index) =&gt; key</code> that extracts a unique key from each item. Return a string
              or number to pair items, or <code>null</code> for items that should not be matched.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Matching example: sliding window</h3>
      <p>
        This example shows a time-series chart with a sliding window. Use the controls to slide the window forward and
        compare how the two matching strategies behave:
      </p>
      <ul>
        <li>
          <strong>matchByIndex</strong> — points shift by position; the first point in the old window animates to the
          first point in the new window.
        </li>
        <li>
          <strong>matchByDataKey(&apos;time&apos;)</strong> — points keep their identity; each matched point animates to
          its new x-position, while new points fade in.
        </li>
      </ul>
      <p>
        For timeline-style motion, this works best with <code>type=&quot;linear&quot;</code> (and similarly local
        interpolations such as step curves). With spline-based line types such as <code>monotone</code>,{' '}
        <code>basis</code>, or <code>natural</code>, adding or removing a point also changes neighboring tangents, so
        the visible curve can still wiggle even when the points are matched correctly.
      </p>
      <p>
        Our recommendation is: use <code>linear</code> when you want the cleanest scrolling timeline animation. If you
        need a smoother spline, render a few extra offscreen points on both sides and clip them so the control points
        that shape the visible curve remain stable.
      </p>
      <p>
        How to clip? If you want a tighter domain you can set it explicitly using <LinkToApi>XAxis</LinkToApi>{' '}
        <code>domain</code> prop. It defaults to the extent of the data, but you can set it to a wider or narrower range
        to hide the points. Also note that by default, points outside of the domain are still rendered and visible! If
        you set <code>allowDataOverflow={true}</code> on your XAxis, then Line will render a clipPath and hide the extra
        points.
      </p>
      <CodeEditorWithPreview
        Component={AnimatedTimeSeriesExample}
        Controls={AnimatedTimeSeriesExampleControls}
        sourceCode={MatchingExampleSource}
        stackBlitzTitle="Recharts Animation Matching Example"
        defaultTool="controls"
      />
      <h3>Matching strategies: stretch vs. append</h3>
      <p>
        When the old and new data arrays have <strong>different lengths</strong>, the matching strategy decides how old
        points map to new positions:
      </p>
      <ul>
        <li>
          <strong>matchByIndex</strong> (stretch) — proportionally maps old points across all new positions. Going from
          5 to 15 items, each old point &quot;covers&quot; roughly 3 new points, creating a stretching effect.
        </li>
        <li>
          <strong>matchAppend</strong> (sequential) — pairs old and new items 1:1 by index. Going from 5 to 15 items,
          the first 5 match directly and the remaining 10 animate in as new elements.
        </li>
      </ul>
      <p>Swap between the 5-item and 15-item datasets below to see the difference:</p>
      <CodeEditorWithPreview
        Component={MatchingStrategiesExample}
        Controls={MatchingStrategiesControls}
        sourceCode={MatchingStrategiesExampleSource}
        stackBlitzTitle="Recharts Matching Strategies Example"
        defaultTool="controls"
      />
      <h3>Custom matching functions</h3>
      <p>
        For advanced use-cases, you can provide any function that returns a key from an item. The function receives the
        rendered item (which includes a <code>payload</code> property with your original data) and the item&apos;s
        index.
      </p>
      <pre>{`<Line
  animationMatchBy={(item) => item.payload?.id}
/>`}</pre>
      <p>
        Items in the old and new arrays that return the same key will animate between their positions. Items that have
        no match in the old data animate in as new elements, and items that have no match in the new data animate out.
      </p>
      <h2>Custom animation functions</h2>
      <p>
        The <code>animationInterpolateFn</code> prop lets you completely replace how items are interpolated during an
        animation. Instead of the default position-based transitions, you can create any visual effect: opacity fades,
        scale transforms, staggered entrances, or anything else.
      </p>
      <p>This prop is available since version 3.9.</p>
      <p>The function receives two arguments:</p>
      <ul>
        <li>
          <code>items</code> — an array of tagged items describing what changed, or <code>null</code> on the very first
          render (entrance animation). Each item is self-describing:
          <ul>
            <li>
              <code>{`{ status: 'matched', prev, next }`}</code> — item exists in both datasets, interpolate between{' '}
              <code>prev</code> and <code>next</code>
            </li>
            <li>
              <code>{`{ status: 'added', next }`}</code> — new item, animate in from a computed entry position
            </li>
            <li>
              <code>{`{ status: 'removed', prev }`}</code> — item was removed, animate out (exclude at <code>t=1</code>)
            </li>
          </ul>
        </li>
        <li>
          <code>t</code> — a normalized time from 0 (start) to 1 (end), already eased
        </li>
      </ul>
      <p>
        Return an array of items with any properties modified. The powerful trick: since each item carries both{' '}
        <code>prev</code> and <code>next</code>, you can return a combined array containing both — previous points
        fading out and new points fading in simultaneously.
      </p>
      <p>
        Try swapping the dataset below. Each animation style crossfades between two datasets using only a small custom
        function — open the source code to see how they work:
      </p>
      <CodeEditorWithPreview
        Component={CustomAnimationExample}
        Controls={CustomAnimationControls}
        sourceCode={CustomAnimationExampleSource}
        stackBlitzTitle="Recharts Custom Animation Example"
        defaultTool="controls"
      />

      <h2>Custom shape animations</h2>
      <p>
        While <code>animationInterpolateFn</code> controls how <em>data points</em> move during animation, some
        components have a built-in <strong>entrance animation</strong> that operates at the SVG level:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Component</th>
            <th>Default entrance animation</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <LinkToApi>Area</LinkToApi>
            </td>
            <td>
              <code>AreaRevealShape</code> (clip-path reveal)
            </td>
            <td>
              A <code>clipPath</code> rectangle expands from left-to-right (or top-to-bottom in vertical layout),
              progressively revealing the area.
            </td>
          </tr>
          <tr>
            <td>
              <LinkToApi>Line</LinkToApi>
            </td>
            <td>
              <code>LineDrawShape</code> (stroke-dasharray drawing)
            </td>
            <td>
              The line is drawn progressively using <code>strokeDasharray</code>, creating a &quot;pen drawing&quot;
              effect.
            </td>
          </tr>
          <tr>
            <td>All others</td>
            <td>Data interpolation only</td>
            <td>
              Bar, Scatter, Pie, Radar, RadialBar, and Funnel rely entirely on <code>animationInterpolateFn</code> for
              their entrance animation.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        To customize these entrance animations, use the <code>shape</code> prop. When you provide a custom shape, the
        built-in entrance animation (clipPath or strokeDasharray) is skipped, and your shape function receives animation
        state props:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>t</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>Normalized animation progress, from 0 (start) to 1 (complete), already eased.</td>
          </tr>
          <tr>
            <td>
              <code>isAnimating</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>Whether an animation is currently in progress.</td>
          </tr>
          <tr>
            <td>
              <code>isEntrance</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>Whether the current animation is the first render (entrance) vs. a data update.</td>
          </tr>
        </tbody>
      </table>
      <p>
        While the <code>shape</code> prop has been available on several Recharts components before, the animation
        arguments are being passed in since version 3.9.
      </p>
      <h3>Built-in shapes</h3>
      <p>Recharts exports the default shapes so you can reuse or extend them in your custom animations:</p>
      <pre>{`import { Area, Line, AreaRevealShape, LineDrawShape } from 'recharts';

// Use the default Area shape explicitly
<Area dataKey="value" shape={AreaRevealShape} />

// Use the default Line shape explicitly
<Line dataKey="value" shape={LineDrawShape} />`}</pre>
      <h3>Custom entrance: grow from bottom</h3>
      <p>
        This example combines <code>animationInterpolateFn</code> (to move points from the chart bottom) with a custom{' '}
        <code>shape</code> (to skip the default clip-path reveal). The shape wraps <code>AreaRevealShape</code> but
        overrides <code>isEntrance</code> to prevent the clip-path animation:
      </p>
      <p>
        Use the controls to toggle <code>animationInterpolateFn</code> and <code>shape</code> independently, then replay
        the entrance animation or swap datasets to see how they affect entrance vs. update motion.
      </p>
      <CodeEditorWithPreview
        Component={AreaChartCustomAnimationExample}
        Controls={AreaChartCustomAnimationControls}
        sourceCode={AreaChartCustomAnimationExampleSource}
        stackBlitzTitle="Recharts Area Custom Animation Example"
        defaultTool="controls"
      />
      <h3>Custom entrance: opacity fade</h3>
      <p>
        This Line example uses a custom <code>shape</code> to fade in during the entrance animation, replacing the
        default stroke-dasharray &quot;drawing&quot; effect:
      </p>
      <p>
        Replay the entrance animation to see <code>t</code> and <code>isEntrance</code> drive the fade, then swap the
        dataset to compare it with a normal update animation.
      </p>
      <CodeEditorWithPreview
        Component={LineChartCustomShapeExample}
        Controls={LineChartCustomShapeControls}
        sourceCode={LineChartCustomShapeExampleSource}
        stackBlitzTitle="Recharts Line Custom Shape Example"
        defaultTool="controls"
      />
      <h3>Three orthogonal props</h3>
      <p>Together, Recharts provides three orthogonal props for animation customization. Each handles one concern:</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Controls</th>
            <th>Available on</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>animationInterpolateFn (v3.9)</code>
            </td>
            <td>How data points transition between positions (data level)</td>
            <td>All animated components</td>
          </tr>
          <tr>
            <td>
              <code>animationMatchBy (v3.9)</code>
            </td>
            <td>How old data points pair with new data points</td>
            <td>All animated components</td>
          </tr>
          <tr>
            <td>
              <code>shape</code>
            </td>
            <td>How the SVG element is rendered, with access to animation state (v3.9)</td>
            <td>Area, Line (and Bar, Scatter via existing shape support)</td>
          </tr>
        </tbody>
      </table>
      {/* TODO https://software.es.net/react-timeseries-charts/#/example/realtime */}
    </article>
  );
}

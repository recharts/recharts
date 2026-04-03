import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import styles from '../guideTable.module.css';
import AnimationsExample, { AnimationsControls } from './AnimationsExample.tsx';
import AnimationsExampleSource from './AnimationsExample.tsx?raw';
import MatchingExample, { MatchingControls } from './MatchingExample.tsx';
import MatchingExampleSource from './MatchingExample.tsx?raw';

export function AnimationsGuide() {
  return (
    <article>
      <h1>Recharts animations</h1>
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
      <h2>Animation easing</h2>
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
      <h2>Animation matching</h2>
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
        The <code>animationMatchBy</code> prop lets you control this behavior. It is available on all animated
        components:
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Value</th>
            <th>Import</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>matchByIndex</code>
            </td>
            <td>
              <code>{`import { matchByIndex } from 'recharts'`}</code>
            </td>
            <td>
              Match items by their array index. This is the default behavior — you don&apos;t need to set it explicitly.
            </td>
          </tr>
          <tr>
            <td>
              <code>matchByDataKey(key)</code>
            </td>
            <td>
              <code>{`import { matchByDataKey } from 'recharts'`}</code>
            </td>
            <td>
              Match items by a value in their data payload. Pass the data key name as an argument (e.g.,{' '}
              <code>matchByDataKey(&apos;timestamp&apos;)</code>). Items with the same key value are treated as the same
              logical item and animate between positions.
            </td>
          </tr>
          <tr>
            <td>Custom function</td>
            <td>—</td>
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
          <strong>matchByDataKey(&apos;time&apos;)</strong> — points keep their identity; each timestamp moves smoothly
          to its new x-position, while new points fade in.
        </li>
      </ul>
      <CodeEditorWithPreview
        Component={MatchingExample}
        Controls={MatchingControls}
        sourceCode={MatchingExampleSource}
        stackBlitzTitle="Recharts Animation Matching Example"
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
        no match animate in as new elements.
      </p>
    </article>
  );
}

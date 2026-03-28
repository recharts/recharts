import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import styles from '../guideTable.module.css';
import AnimationsExample, { AnimationsControls } from './AnimationsExample.tsx';
import AnimationsExampleSource from './AnimationsExample.tsx?raw';

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
              components), animation is enabled unless the page is being server-side rendered or the user has requested
              reduced motion via their device settings. Setting <code>true</code> always animates, ignoring those
              conditions.
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
        where <code>x1</code>, <code>y1</code>, <code>x2</code> and <code>y2</code> are numbers between 0 and 1 that
        define the shape of the easing curve. You can use{' '}
        <a href="https://cubic-bezier.com/">https://cubic-bezier.com/</a> to visually create and understand cubic-bezier
        functions.
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
    </article>
  );
}

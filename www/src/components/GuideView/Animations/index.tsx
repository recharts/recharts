import { LinkToApi } from '../../Shared/LinkToApi.tsx';

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
      <table>
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
              <code>boolean</code>
            </td>
            <td>Turns the animation on or off</td>
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
              <code>string</code>
            </td>
            <td>Easing function. Can be one of the predefined ones, or a custom cubic-bezier function.</td>
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
        </tbody>
      </table>
      <h2>Accessibility</h2>
      <p>
        Recharts follows the{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion">
          <code>prefers-reduced-motion</code>
        </a>{' '}
        settings and will turn off animations for users that requested it using their device settings.
      </p>
    </article>
  );
}

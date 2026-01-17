import { ApiDoc } from './types';

export const ErrorBarAPI: ApiDoc = {
  name: 'ErrorBar',
  props: [
    {
      name: 'dataKey',
      type: 'Function | number | string',
      isOptional: false,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of this ErrorBar from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this ErrorBar.
              </li>
            </ul>
            <p>
              The error values can be a single value for symmetric error bars; or an array of a lower and upper error
              value for asymmetric error bars.
            </p>
          </section>
        ),
      },
      examples: [
        { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
        { name: 'Error Bar Example', url: '/api/ErrorBar/', isExternal: false },
      ],
    },
    { name: 'animationBegin', type: 'number', isOptional: true, defaultVal: 0 },
    { name: 'animationDuration', type: 'number', isOptional: true, defaultVal: 400 },
    {
      name: 'animationEasing',
      type: '"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"',
      isOptional: true,
      defaultVal: 'ease-in-out',
    },
    {
      name: 'direction',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Direction of the error bar. Usually determined by chart layout, except in Scatter chart. In Scatter chart,
              &quot;x&quot; means horizontal error bars, &quot;y&quot; means vertical error bars.
            </p>
          </section>
        ),
      },
      examples: [{ name: 'Error Bar Example', url: '/api/ErrorBar/', isExternal: false }],
    },
    {
      name: 'isAnimationActive',
      type: 'boolean',
      isOptional: true,
      defaultVal: true,
      examples: [{ name: 'Error Bar Example', url: '/api/ErrorBar/', isExternal: false }],
    },
    {
      name: 'stroke',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The stroke color. If &quot;none&quot;, no line will be drawn.</p>
          </section>
        ),
      },
      defaultVal: 'black',
      examples: [{ name: 'Error Bar Example', url: '/api/ErrorBar/', isExternal: false }],
    },
    {
      name: 'strokeWidth',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The width of the stroke</p>
          </section>
        ),
      },
      defaultVal: 1.5,
      examples: [{ name: 'Error Bar Example', url: '/api/ErrorBar/', isExternal: false }],
    },
    {
      name: 'width',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Width of the error bar ends (the serifs) in pixels. This is not the total width of the error bar, but just
              the width of the little lines at the ends.
            </p>
            <p>The total width of the error bar is determined by the data value plus/minus the error value.</p>
          </section>
        ),
      },
      defaultVal: 5,
      examples: [
        { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
        { name: 'Error Bar Example', url: '/api/ErrorBar/', isExternal: false },
      ],
    },
    {
      name: 'zIndex',
      type: 'number',
      isOptional: true,
      defaultVal: 400,
      examples: [{ name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false }],
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>ErrorBar renders whiskers to represent error margins on a chart.</p>
        <p>It must be a child of a graphical element.</p>
        <p>ErrorBar expects data in one of the following forms:</p>
        <ul>
          <li>Symmetric error bars: a single error value representing both lower and upper bounds.</li>
          <li>
            Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is
            the lower bound, second value is the upper bound.
          </li>
        </ul>
        <p>
          The values provided are relative to the main data value. For example, if the main data value is 10 and the
          error value is 2, the error bar will extend from 8 to 12 for symmetric error bars.
        </p>
        <p>In other words, what ErrorBar will render is:</p>
        <ul>
          <li>For symmetric error bars: [value - errorVal, value + errorVal]</li>
          <li>For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]</li>
        </ul>
        <p>
          In stacked or ranged Bar charts, ErrorBar will use the higher data value as the reference point for
          calculating the error bar positions.
        </p>
      </section>
    ),
  },
  links: [
    { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
    { name: 'Error Bar Example', url: '/api/ErrorBar/', isExternal: false },
  ],
  parentComponents: ['Bar', 'Line', 'Scatter'],
};

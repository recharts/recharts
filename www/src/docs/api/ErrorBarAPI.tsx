import { ApiDoc } from './types.ts';

export const ErrorBarAPI: ApiDoc = {
  name: 'ErrorBar',
  props: [
    {
      name: 'dataKey',
      type: 'string | number | Function',
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
    },
    { name: 'animationBegin', type: 'number', isOptional: true, defaultVal: 0 },
    { name: 'animationDuration', type: 'number', isOptional: true, defaultVal: 400 },
    {
      name: 'animationEasing',
      type: '"linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out"',
      isOptional: true,
      defaultVal: 'ease-in-out',
    },
    {
      name: 'direction',
      type: 'string | number',
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
    },
    { name: 'isAnimationActive', type: 'boolean', isOptional: true, defaultVal: true },
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
    },
    {
      name: 'strokeWidth',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The width of the stroke</p>
          </section>
        ),
      },
      defaultVal: 1.5,
    },
    {
      name: 'width',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Width of the error bar ends</p>
          </section>
        ),
      },
      defaultVal: 5,
    },
    { name: 'zIndex', type: 'number', isOptional: true, defaultVal: 400 },
  ],
  parentComponents: ['Bar', 'Line', 'Scatter'],
};

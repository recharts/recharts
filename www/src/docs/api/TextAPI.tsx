import { ApiDoc } from './types';

export const TextAPI: ApiDoc = {
  name: 'Text',
  props: [
    {
      name: 'angle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Text rotation angle in degrees. The text will be rotated around the (x, y) coordinates as the pivot point.
              Positive values rotate clockwise, negative values rotate counterclockwise. The rotation transform is
              applied as <code>rotate(angle, x, y)</code>.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'breakAll',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>When true, enables character-level breaking instead of word-level breaking.</p>
            <ul>
              <li>false: Text breaks at word boundaries (spaces, tabs, etc.)</li>
              <li>true: Text can break between any characters, useful for languages without spaces</li>
            </ul>
            <p>
              <strong>Note:</strong> Only effective when <code>width</code> is defined to enable line breaking.
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The text content to render. Can be a string or number. Numbers will be converted to strings. undefined or
              null values will result in no text being rendered.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'lineHeight',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Line height for multi-line text. Can be a number (height in pixels) or a string with CSS units. Used to
              calculate spacing between lines when text wraps to multiple lines. Also used in verticalAnchor
              calculations for positioning the text block.
            </p>
          </section>
        ),
      },
      defaultVal: '1em',
    },
    {
      name: 'maxLines',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Maximum number of lines to display when text wrapping is enabled. When text exceeds this limit, it will be
              truncated with an ellipsis (…).
            </p>
            <p>
              <strong>Important requirements for ellipsis truncation:</strong>
            </p>
            <ul>
              <li>
                <code>width</code> must be defined (no effect when width is undefined)
              </li>
              <li>
                <code>scaleToFit</code> must be false (when scaleToFit is true, maxLines is bypassed)
              </li>
              <li>Text must actually overflow the specified maxLines or width constraints</li>
            </ul>
            <p>
              <strong>Truncation behavior:</strong>
            </p>
            <ul>
              <li>Uses binary search to find the optimal truncation point</li>
              <li>Adds ellipsis (…) at the end of the truncated text</li>
              <li>Ensures the truncated text + ellipsis fits within the constraints</li>
            </ul>
            <p>
              <strong>Interaction with other props:</strong>
            </p>
            <ul>
              <li>
                When <code>scaleToFit</code> is true, this property is ignored
              </li>
              <li>
                Requires <code>width</code> to be set for line breaking to occur
              </li>
            </ul>
          </section>
        ),
      },
    },
    {
      name: 'scaleToFit',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              When true, scales the text to fit within the specified width. The text will be scaled down proportionally
              to fit the available space.
            </p>
            <p>
              <strong>Important interactions:</strong>
            </p>
            <ul>
              <li>
                Requires <code>width</code> to be defined to have any effect. If width is undefined, scaleToFit does
                nothing.
              </li>
              <li>
                When enabled, <code>maxLines</code> restrictions are bypassed and ellipsis truncation is disabled.
              </li>
              <li>Uses the first line&#39;s width to calculate the scale factor.</li>
              <li>
                The scaling transform is applied as <code>scale(width / lineWidth)</code>.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              CSS styles to apply to the text element. These styles are used for text measurement calculations when
              width constraints or scaleToFit are used. Font-related properties (fontSize, fontFamily, fontWeight, etc.)
              are particularly important for accurate measurements.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'textAnchor',
      type: '"end" | "middle" | "inherit" | "start"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Horizontal text alignment within the text element.</p>
            <ul>
              <li>&#39;start&#39;: Text starts at the x coordinate (left-aligned for LTR text)</li>
              <li>&#39;middle&#39;: Text is centered on the x coordinate</li>
              <li>&#39;end&#39;: Text ends at the x coordinate (right-aligned for LTR text)</li>
              <li>&#39;inherit&#39;: Inherits the text-anchor from parent element</li>
            </ul>
            <p>
              <strong>Note:</strong> This controls horizontal alignment only and does not affect RTL text behavior.
            </p>
          </section>
        ),
      },
      defaultVal: 'start',
    },
    {
      name: 'verticalAnchor',
      type: '"end" | "middle" | "start"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Vertical text alignment relative to the y coordinate.</p>
            <ul>
              <li>&#39;start&#39;: Text baseline starts at y coordinate (text appears below the y position)</li>
              <li>&#39;middle&#39;: Text is vertically centered on the y coordinate</li>
              <li>&#39;end&#39;: Text baseline ends at y coordinate (text appears above the y position)</li>
            </ul>
            <p>
              <strong>Note:</strong> This controls vertical positioning only and does not affect RTL (right-to-left)
              text behavior. The alignment calculation uses capHeight and lineHeight to determine the starting dy
              offset.
            </p>
          </section>
        ),
      },
      defaultVal: 'end',
    },
    {
      name: 'width',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>When width is specified, the text will automatically wrap by calculating the width of text.</p>
          </section>
        ),
      },
    },
  ],
};

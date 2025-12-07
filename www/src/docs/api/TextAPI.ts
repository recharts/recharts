import { ApiDoc } from './types.ts';

export const TextAPI: ApiDoc = {
  name: 'Text',
  props: [
    {
      name: 'angle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US':
          'Text rotation angle in degrees.\nThe text will be rotated around the (x, y) coordinates as the pivot point.\nPositive values rotate clockwise, negative values rotate counterclockwise.\nThe rotation transform is applied as `rotate(angle, x, y)`.',
      },
      defaultVal: 0,
    },
    {
      name: 'breakAll',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US':
          'When true, enables character-level breaking instead of word-level breaking.\n- false: Text breaks at word boundaries (spaces, tabs, etc.)\n- true: Text can break between any characters, useful for languages without spaces\n\n**Note:** Only effective when `width` is defined to enable line breaking.',
      },
      defaultVal: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
      desc: {
        'en-US':
          'The text content to render.\nCan be a string or number. Numbers will be converted to strings.\nundefined or null values will result in no text being rendered.',
      },
    },
    {
      name: 'lineHeight',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US':
          'Line height for multi-line text.\nCan be a number (height in pixels) or a string with CSS units.\nUsed to calculate spacing between lines when text wraps to multiple lines.\nAlso used in verticalAnchor calculations for positioning the text block.',
      },
      defaultVal: '1em',
    },
    {
      name: 'maxLines',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US':
          'Maximum number of lines to display when text wrapping is enabled.\nWhen text exceeds this limit, it will be truncated with an ellipsis (…).\n\n**Important requirements for ellipsis truncation:**\n- `width` must be defined (no effect when width is undefined)\n- `scaleToFit` must be false (when scaleToFit is true, maxLines is bypassed)\n- Text must actually overflow the specified maxLines or width constraints\n\n**Truncation behavior:**\n- Uses binary search to find the optimal truncation point\n- Adds ellipsis (…) at the end of the truncated text\n- Ensures the truncated text + ellipsis fits within the constraints\n\n**Interaction with other props:**\n- When `scaleToFit` is true, this property is ignored\n- Requires `width` to be set for line breaking to occur',
      },
    },
    {
      name: 'scaleToFit',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US':
          "When true, scales the text to fit within the specified width.\nThe text will be scaled down proportionally to fit the available space.\n\n**Important interactions:**\n- Requires `width` to be defined to have any effect. If width is undefined, scaleToFit does nothing.\n- When enabled, `maxLines` restrictions are bypassed and ellipsis truncation is disabled.\n- Uses the first line's width to calculate the scale factor.\n- The scaling transform is applied as `scale(width / lineWidth)`.",
      },
      defaultVal: false,
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      isOptional: true,
      desc: {
        'en-US':
          'CSS styles to apply to the text element.\nThese styles are used for text measurement calculations when width constraints or scaleToFit are used.\nFont-related properties (fontSize, fontFamily, fontWeight, etc.) are particularly important for accurate measurements.',
      },
    },
    {
      name: 'textAnchor',
      type: 'TextAnchor',
      isOptional: true,
      desc: {
        'en-US':
          "Horizontal text alignment within the text element.\n- 'start': Text starts at the x coordinate (left-aligned for LTR text)\n- 'middle': Text is centered on the x coordinate\n- 'end': Text ends at the x coordinate (right-aligned for LTR text)\n- 'inherit': Inherits the text-anchor from parent element\n\n**Note:** This controls horizontal alignment only and does not affect RTL text behavior.",
      },
      defaultVal: 'start',
    },
    {
      name: 'verticalAnchor',
      type: 'TextVerticalAnchor',
      isOptional: true,
      desc: {
        'en-US':
          "Vertical text alignment relative to the y coordinate.\n- 'start': Text baseline starts at y coordinate (text appears below the y position)\n- 'middle': Text is vertically centered on the y coordinate\n- 'end': Text baseline ends at y coordinate (text appears above the y position)\n\n**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.\nThe alignment calculation uses capHeight and lineHeight to determine the starting dy offset.",
      },
      defaultVal: 'end',
    },
    {
      name: 'width',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': 'When width is specified, the text will automatically wrap by calculating the width of text.',
      },
    },
  ],
};

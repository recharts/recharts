import { StorybookArg, StorybookArgs } from '../../../StorybookArgs';

export const legendType: StorybookArg = {
  description: "The type of icon in legend. If set to 'none', no legend item will be rendered.",
  table: {
    type: {
      summary: 'line | plainline | square | rect| circle | cross | diamond | square | star | triangle | wye | none',
    },
    defaultValue: 'line',
    category: 'Style',
  },
};

// Caveat: If any prop is added here, it would falsely be add to the documentation of the component
// where this group is used. If the group is to be extended, then only single props should be imported
// by each component that does not use all of them.
export const LegendProps: StorybookArgs = {
  width: {
    description: 'The width of legend.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of legend.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  layout: {
    description: 'The layout of legend items.',
    defaultValue: 'horizontal',
    table: {
      type: {
        summary: 'horizontal | vertical',
      },
      category: 'General',
    },
  },
  align: {
    description: `Sets horizontal position of the Legend relative to the chart:

- \`left\` shows the Legend to the left of the chart, and chart width reduces automatically to make space for it.
- \`right\` shows the Legend to the right of the chart, and chart width reduces automatically.
- \`center\` shows the Legend in the middle of chart, and chart width remains unchanged.

The exact behavior changes depending on \`verticalAlign\` prop.`,
    defaultValue: 'center',
    table: {
      type: {
        summary: 'left | center | right',
      },
      category: 'General',
    },
  },
  verticalAlign: {
    description: `Sets vertical position of the Legend relative to the chart:

- \`bottom\` shows the Legend below chart, and chart height reduces automatically to make space for it.
- \`top\` shows the Legend above chart, and chart height reduces automatically.
- \`middle\` shows the Legend in the middle of chart, covering other content, and chart height remains unchanged.

The exact behavior changes depending on \`align\` prop.`,
    table: {
      type: {
        summary: 'top | middle | bottom',
      },
      category: 'General',
    },
  },
  iconSize: {
    description: 'The size of icon in each legend item.',
    defaultValue: 14,
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  iconType: {
    description: 'The type of icon in each legend item.',
    defaultValue: 'line',
    table: {
      type: {
        summary: 'line | plainline | square | rect | circle | cross | diamond | star | triangle | wye',
      },
      category: 'General',
    },
  },
  itemSorter: {
    description: `How should Legend items be sorted.
      Can be either a string (the name of the key to sort by) or a function.
      The function should return one value to be compared. This sorts always in ascending order.`,
    defaultValue: 'value',
    options: ['value', 'dataKey'],
    control: {
      type: 'inline-radio',
    },
    table: {
      category: 'Content',
      type: {
        summary: 'value | dataKey | Function',
      },
    },
  },
  content: {
    description: `If set to a React element, the option will be used to render the legend.
    If set to a function, the function will be called to render the legend's content.`,
    table: {
      type: {
        summary: 'ReactElement | Function',
        detail: `<Legend content={<CustomizedLegend external={external} />} />

        const renderLegend = (props) => {
          const { payload } = props;

          return (
            <ul>
              {
                payload.map((entry, index) => (
                  <li key={'item'-index}>{entry.value}</li>
                ))
              }
            </ul>
          );
        }
        <Legend content={renderLegend} />`,
      },
      category: 'General',
    },
  },
  formatter: {
    description: 'The formatter function of each text in legend.',
    table: {
      type: {
        summary: 'Function',
        detail: '(value, entry, index) => ()',
      },
      category: 'General',
    },
  },
  wrapperStyle: {
    description: `The style of legend container which is a "position: absolute;" div element.
    Because the position of legend is quite flexible, so you can change the position by the value of top, left, right, bottom in this option.
    And the format of wrapperStyle is the same as React inline style.`,
    table: {
      type: {
        summary: 'Object',
      },
      category: 'General',
    },
  },
  portal: {
    description: `If portal is defined, then Legend will use this element as a target
    for rendering using React Portal: https://react.dev/reference/react-dom/createPortal.
    If this is undefined then Legend renders inside the recharts-wrapper element with absolute positioning.`,
    table: {
      category: 'Position',
      type: {
        summary: 'HTMLElement | null',
      },
    },
  },
};

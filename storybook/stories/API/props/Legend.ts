export const legendType = {
  description: "The type of icon in legend. If set to 'none', no legend item will be rendered.",
  table: {
    type: {
      summary:
        "'line' | 'plainline' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond'" +
        " | 'square' | 'star' | 'triangle' | 'wye' | 'none'",
    },
    defaultValue: 'line',
    category: 'Style',
  },
};

// Caveat: If any prop is added here, it would falsely be add to the documentation of the component
// where this group is used. If the group is to be extended, then only single props should be imported
// by each component that does not use all of them.
export const Legend = {
  legendType,
};

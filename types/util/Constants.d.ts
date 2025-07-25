export declare const COLOR_PANEL: string[];
/**
 * We use this attribute to identify which element is the one that the user is touching.
 * The index is the position of the element in the data array.
 * This can be either a number (for array-based charts) or a string (for the charts that have a matrix-shaped data).
 */
export declare const DATA_ITEM_INDEX_ATTRIBUTE_NAME = "data-recharts-item-index";
/**
 * We use this attribute to identify which element is the one that the user is touching.
 * DataKey works here as a kind of identifier for the element. It's not a perfect identifier for ~two~ three reasons:
 *
 * 1. There can be two different elements with the same dataKey; we won't know which is it
 * 2. DataKey can be a function, and that serialized will be a `[Function: anonymous]` string
 * which means we will be able to identify that it was a function but can't tell which one.
 * This will lead to some weird bugs. A proper fix would be to either:
 * a) use a unique identifier for each element (passed from props, or generated)
 * b) figure out how to compare the dataKey or graphical item by object reference
 *
 * a) is a fuss because we don't have the unique identifier in props,
 * and b) is possible most of the time except for touchMove events which work differently from mouseEnter/mouseLeave:
 * - while mouseEnter is fired for the element that the mouse is over,
 * touchMove is fired for the element where user has started touching. As the finger moves,
 * we can identify the element that the user is touching by using the elementFromPoint method,
 * but it keeps calling the handler on the element where touchStart was fired.
 *
 * Okay and now I discovered a third reason: the dataKey can be undefined and that's still fine
 * because if dataKey is undefined then graphical elements assume the dataKey of the axes.
 * Which makes it a convenient way of using recharts to render a chart but horrible identifier.
 */
export declare const DATA_ITEM_DATAKEY_ATTRIBUTE_NAME = "data-recharts-item-data-key";
export declare const DEFAULT_Y_AXIS_WIDTH = 60;

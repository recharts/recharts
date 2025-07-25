/**
 * TODO this documentation does not reflect what this hook is doing, update it.
 * Stores the `offsetHeight`, `offsetLeft`, `offsetTop`, and `offsetWidth` of a DOM element.
 */
export type ElementOffset = {
    /**
     * Height of an element, including vertical padding and borders, as an integer.
     *
     * Typically, offsetHeight is a measurement in pixels of the element's CSS height, including any borders, padding, and horizontal scrollbars (if rendered). It does not include the height of pseudo-elements such as ::before or ::after
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
     */
    height: number;
    /**
     * Number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft
     */
    left: number;
    /**
     * Distance from the outer border of the current element (including its margin) to the top padding edge of the offsetParent, the closest positioned ancestor element.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
     */
    top: number;
    /**
     * Layout width of an element as an integer.
     *
     * Typically, offsetWidth is a measurement in pixels of the element's CSS width, including any borders, padding, and vertical scrollbars (if rendered). It does not include the width of pseudo-elements such as ::before or ::after.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
     */
    width: number;
};
export type SetElementOffset = (node: HTMLElement | null) => void;
/**
 * Use this to listen to element layout changes.
 *
 * Very useful for reading actual sizes of DOM elements relative to the viewport.
 *
 * @param extraDependencies use this to trigger new DOM dimensions read when any of these change. Good for things like payload and label, that will re-render something down in the children array, but you want to read the layout box of a parent.
 * @returns [lastElementOffset, updateElementOffset] most recent value, and setter. Pass the setter to a DOM element ref like this: `<div ref={updateElementOffset}>`
 */
export declare function useElementOffset(extraDependencies?: ReadonlyArray<unknown>): [ElementOffset, SetElementOffset];

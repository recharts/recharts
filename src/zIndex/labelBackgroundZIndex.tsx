import { createContext, useContext } from 'react';

/**
 * The zIndex layer where `Text` draws its `background` rectangle.
 * `Label` and `LabelList` provide it, so all label backgrounds render below all label texts
 * and overlapping labels stay readable.
 *
 * `undefined` means there is no layer to use, so `Text` draws the background right before the text, as before.
 *
 * `Label` and `LabelList` also render an empty `ZIndexLayer` at this zIndex next to their own layer.
 * That registers a custom background layer in the same render as the label layer,
 * so the background doesn't appear a render later than its text.
 */
const LabelBackgroundZIndexContext = createContext<number | undefined>(undefined);

export const LabelBackgroundZIndexProvider = LabelBackgroundZIndexContext.Provider;

export function useLabelBackgroundZIndex(): number | undefined {
  return useContext(LabelBackgroundZIndexContext);
}

/**
 * Returns the zIndex for the backgrounds of labels rendered at `labelZIndex`: one layer below the labels.
 * Returns `undefined` for zIndex 0 or `undefined`, because those labels render in the default layer, without portals.
 *
 * @param labelZIndex zIndex of the label or label list
 * @returns zIndex of the label backgrounds
 */
export function getLabelBackgroundZIndex(labelZIndex: number | undefined): number | undefined {
  if (labelZIndex == null || labelZIndex === 0) {
    return undefined;
  }
  return labelZIndex - 1;
}

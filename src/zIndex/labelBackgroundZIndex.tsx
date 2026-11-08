import { createContext, useContext } from 'react';
import { DefaultZIndexes } from './DefaultZIndexes';
import type { TextBackgroundProps } from '../component/Text';

/**
 * The zIndex of the label that encloses a `Text`.
 * `Label` and `LabelList` provide it, and `Text` draws its `background` in the layer
 * that {@link getLabelBackgroundZIndex} returns for this zIndex and the background it draws.
 * So all label backgrounds render below all label texts and overlapping labels stay readable.
 * `Text` used on its own has no enclosing label and draws the background right before the text,
 * because `Text` has no zIndex either. Without knowing which layer the text renders in,
 * a background in any other layer could end up above its own text, so right before the text is the only safe place.
 *
 * Labels inside a `LabelList` render with zIndex 0, in the layer of the list, so they keep the zIndex of the list.
 *
 * `Label` and `LabelList` also render an empty `ZIndexLayer` at the background zIndex next to their own layer.
 * That registers a custom background layer in the same render as the label layer,
 * so the background doesn't appear a render later than its text.
 */
const LabelZIndexContext = createContext<number | undefined>(undefined);

export const LabelZIndexProvider = LabelZIndexContext.Provider;

export function useLabelZIndex(): number | undefined {
  return useContext(LabelZIndexContext);
}

/**
 * Space between a label and its background, so you can put your own elements between them.
 */
const labelBackgroundGap = DefaultZIndexes.label - DefaultZIndexes.labelBackground;

/**
 * Returns the zIndex for the backgrounds of labels rendered at `labelZIndex`.
 * An explicit `zIndex` in the background settings wins.
 * Otherwise, the backgrounds render `labelBackgroundGap` layers below the labels,
 * which is `DefaultZIndexes.labelBackground` for labels in the default label layer.
 * A result of 0 becomes -1, because zIndex 0 renders inside the label's own layer.
 * Labels in the default layer (zIndex 0 or `undefined`) render without portals,
 * so they get only the explicit `zIndex`, or `undefined`.
 *
 * @param labelZIndex zIndex of the label or label list
 * @param background `background` prop of the label or label list
 * @returns zIndex of the label backgrounds
 */
export function getLabelBackgroundZIndex(
  labelZIndex: number | undefined,
  background: boolean | TextBackgroundProps | undefined,
): number | undefined {
  const explicitZIndex = typeof background === 'object' ? background.zIndex : undefined;
  if (labelZIndex == null || labelZIndex === 0) {
    return explicitZIndex;
  }
  const zIndex = explicitZIndex ?? labelZIndex - labelBackgroundGap;
  // zIndex 0 renders without a portal, in the label's own layer, so go one layer lower
  return zIndex === 0 ? -1 : zIndex;
}

import { ComponentType, createContext, ReactNode, useContext } from 'react';
import { DefaultZIndexes } from './DefaultZIndexes';
import type { TextBackgroundProps } from '../component/Text';

/**
 * The zIndex layer where `Text` draws its `background` rectangle, and the component that renders into it.
 * `Label` and `LabelList` provide both, so all label backgrounds render below all label texts
 * and overlapping labels stay readable.
 *
 * `Label` passes `ZIndexLayer` through this context, so `Text` alone doesn't bundle the zIndex portal code.
 * Without a provider, `Text` draws the background right before the text.
 *
 * `Label` and `LabelList` also render an empty `ZIndexLayer` at this zIndex next to their own layer.
 * That registers a custom background layer in the same render as the label layer,
 * so the background doesn't appear a render later than its text.
 */
export type LabelBackgroundLayer = {
  zIndex: number | undefined;
  Layer: ComponentType<{ zIndex: number | undefined; children?: ReactNode }>;
};

const LabelBackgroundLayerContext = createContext<LabelBackgroundLayer | undefined>(undefined);

export const LabelBackgroundLayerProvider = LabelBackgroundLayerContext.Provider;

export function useLabelBackgroundLayer(): LabelBackgroundLayer | undefined {
  return useContext(LabelBackgroundLayerContext);
}

/**
 * Space between a label and its background, so you can put your own elements between them.
 */
const labelBackgroundGap = DefaultZIndexes.label - DefaultZIndexes.labelBackground;

/**
 * Returns the zIndex for the backgrounds of labels rendered at `labelZIndex`.
 * An explicit `zIndex` in the background settings wins.
 * Otherwise the backgrounds render `labelBackgroundGap` layers below the labels,
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

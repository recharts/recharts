import { createSelectorCreator, lruMemoize } from '@reduxjs/toolkit';

// noinspection JSUnusedGlobalSymbols
/**
 * From https://stackoverflow.com/questions/59376392/reselect-how-to-figure-out-which-argument-changed
 *
 * Useful for debugging why a selector is changing its output reference when you expect that it should not.
 * How to use:
 * 1. Replace `createSelector` with `createDebugSelector`
 * 2. observe console output
 *
 * @deprecated - do not actually use it in any production selectors! It's for debugging only.
 */
export const createDebugSelector = createSelectorCreator(lruMemoize, {
  equalityCheck: (previous, current) => {
    const rv = current === previous;
    if (!rv) console.warn('Selector param value changed', { current, previous });
    return rv;
  },
});

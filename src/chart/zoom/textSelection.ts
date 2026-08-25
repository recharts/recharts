/**
 * Prevents native page text selection while a chart pointer gesture is active. Gestures continue
 * on `window`, so suppressing only pointermove on the chart element would not cover text outside it.
 */
export function suppressTextSelectionWhile(isActive: () => boolean): () => void {
  const onSelectStart = (event: Event) => {
    if (isActive()) {
      event.preventDefault();
    }
  };

  document.addEventListener('selectstart', onSelectStart, true);
  return () => document.removeEventListener('selectstart', onSelectStart, true);
}

/**
 * Detects if any HTML ID attribute in a given Element is a duplicate.
 * If a duplicate is found, it throws an error.
 *
 * @throws {Error} If a duplicate ID is found.
 */
export function assertUniqueHtmlIds(): void {
  /*
   * Here it's important that we do not pass the `container` you just received from `render` call because
   * that's scoped to the latest run! Even though testing-library/react in fact appended the thing
   * and now your whole DOM is duplicated, quietly.
   *
   * In fact I figured let's remove the parameter, and have it always use document.body to avoid that problem
   * from coming back. Nobody used it for anything else anyway.
   */
  const container = document.body;

  const idMap = new Map<string, number>();
  const elementsWithIds = container.querySelectorAll('[id]');

  elementsWithIds.forEach(element => {
    const { id } = element;

    const currentCount = idMap.get(id) ?? 0;

    idMap.set(id, currentCount + 1);
  });

  idMap.forEach((count, id) => {
    if (count > 1) {
      const duplicateElements = Array.from(container.querySelectorAll(`[id="${id}"]`));
      const elementList = duplicateElements.map(el => `${el.tagName}.${el.classList.value}`).join(', ');
      const errorMessage = `Duplicate HTML ID found: "${id}", with ${count} occurrences: ${elementList}. This can happen when:
      - a chart or your component renders the same ID twice, or
      - you called render() twice, as it appends and does not clear the DOM between calls`;
      throw new Error(errorMessage);
    }
  });
}

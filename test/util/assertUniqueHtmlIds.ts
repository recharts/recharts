type ReturnsContainer = () => { container: Element };

/**
 * Detects if any HTML ID attribute in a given Element is a duplicate.
 * If a duplicate is found, it throws an error.
 *
 * @param root The element to search within.
 * @returns {void}
 * @throws {Error} If a duplicate ID is found.
 */
export function assertUniqueHtmlIds(root: Element | ReturnsContainer) {
  let container;
  if (typeof root === 'function') {
    container = root().container;
  } else {
    container = root;
  }

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
      const errorMessage = `Duplicate HTML ID found: "${id}", with ${count} occurrences: ${elementList}.`;
      throw new Error(errorMessage);
    }
  });
}

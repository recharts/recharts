import { assertNotNull } from './assertNotNull';

export type ExpectedLabel = {
  textContent: string;
  x: string;
  y: string;
  width: string;
  height: string;
  offset: string;
};

export function expectLabels(
  container: Element,
  expectedLabels: ReadonlyArray<ExpectedLabel>,
  cssSelector: string = '.recharts-text.recharts-label',
) {
  assertNotNull(container);
  const labels = container.querySelectorAll(cssSelector);

  const actualLabels: ReadonlyArray<ExpectedLabel> = Array.from(labels).map(label => ({
    textContent: label.textContent,
    x: label.getAttribute('x'),
    y: label.getAttribute('y'),
    width: label.getAttribute('width'),
    height: label.getAttribute('height'),
    offset: label.getAttribute('offset'),
  }));

  expect(actualLabels).toEqual(expectedLabels);
}

import { assertNotNull } from './assertNotNull';

export function getAllLines(container: Element) {
  return container.querySelectorAll('.recharts-curve.recharts-line-curve');
}

type ExpectedLine = {
  readonly d: string;
};

export function expectLines(container: Element, expectedLines: ReadonlyArray<ExpectedLine>) {
  assertNotNull(container);
  const allLinePaths = getAllLines(container);
  const actualLines: ReadonlyArray<ExpectedLine> = Array.from(allLinePaths).map(line => ({
    d: line.getAttribute('d'),
  }));
  expect(actualLines).toEqual(expectedLines);
}

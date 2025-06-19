export type ExpectedDot = {
  cx: string;
  cy: string;
};

export function expectDots(container: Element, expectedDots: ReadonlyArray<ExpectedDot>) {
  const dots = container.querySelectorAll<SVGCircleElement>('circle.recharts-dot');

  const actualDots = Array.from(dots).map(dot => ({
    cx: dot.getAttribute('cx') || '',
    cy: dot.getAttribute('cy') || '',
  }));
  expect(actualDots).toEqual(expectedDots);
}

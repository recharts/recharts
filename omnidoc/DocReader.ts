export interface DocReader {
  /**
   * Returns all exported public symbol names from the project.
   */
  getPublicSymbolNames(): ReadonlyArray<string>;

  /**
   * Returns prop names of a given component.
   * Only returns Rechart-specific props, it excludes the ones inherited from SVGElement
   */
  getPropsOf(component: string): ReadonlyArray<string>;

  /**
   * Returns name of the SVG element that this component extends, or null if it does not extend any SVG element.
   */
  getSVGParentOf(component: string): string | null;
}

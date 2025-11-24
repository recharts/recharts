export type DefaultValue = { type: 'known'; value: unknown | undefined } | { type: 'none' } | { type: 'unreadable' };

export interface DocReader {
  /**
   * Returns all exported public symbol names from the project.
   */
  getPublicSymbolNames(): ReadonlyArray<string>;

  /**
   * Returns all exported component names from the project, excluding hooks and utilities.
   */
  getPublicComponentNames(): ReadonlyArray<string>;

  /**
   * Returns prop names of a given component.
   * Only returns Rechart-specific props, it excludes the ones inherited from SVGElement
   */
  getRechartsPropsOf(component: string): ReadonlyArray<string>;

  /**
   * Returns prop names of a given component.
   * Returns Rechart-specific props combined with those inherited from SVGElement
   */
  getAllPropsOf(component: string): ReadonlyArray<string>;

  /**
   * Returns name of the SVG element that this component extends, or null if it does not extend any SVG element.
   */
  getSVGParentOf(component: string): string | null;

  /**
   * Returns the default value of a given prop of a given component.
   */
  getDefaultValueOf(component: string, prop: string): DefaultValue;

  /**
   * Returns the comment/documentation associated with a given prop of a given component.
   * @param component
   * @param prop
   */
  getCommentOf(component: string, prop: string): string | undefined;
}

import { DocReader } from './DocReader';
import * as allStories from '../storybook/stories/API/allStories';

/**
 * @fileOverview reads API docs from Storybook stories
 */
export class StorybookDocReader implements DocReader {
  private componentCache: Map<string, ReadonlyArray<string>> | null = null;

  getPublicSymbolNames(): ReadonlyArray<string> {
    this.ensureCache();
    return Array.from(this.componentCache!.keys()).sort();
  }

  getPropsOf(component: string): ReadonlyArray<string> {
    this.ensureCache();
    return this.componentCache!.get(component) || [];
  }

  getSVGParentOf(_component: string): string | null {
    /*
     * Storybook stories do not contain info about SVG parent elements
     */
    return null;
  }

  private ensureCache(): void {
    if (this.componentCache !== null) {
      return;
    }

    this.componentCache = new Map();
    this.loadAllStories();
  }

  private loadAllStories(): void {
    // allStories contains all story default exports
    for (const [exportName, storyModule] of Object.entries(allStories)) {
      if (typeof storyModule !== 'object' || storyModule === null) {
        continue;
      }

      const storyDefault = storyModule;

      // Extract component name from export name (e.g., "AreaStory" -> "Area")
      const componentName = exportName.replace(/Story$/, '');

      if (!componentName || !('argTypes' in storyDefault)) {
        continue;
      }

      const { argTypes } = storyDefault;
      if (!argTypes) {
        continue;
      }

      const props = this.extractPropsFromArgTypes(argTypes);
      if (props.length > 0) {
        this.componentCache!.set(componentName, props);
      }
    }
  }

  private extractPropsFromArgTypes(argTypes: Record<string, unknown>): ReadonlyArray<string> {
    return Object.keys(argTypes).sort();
  }
}

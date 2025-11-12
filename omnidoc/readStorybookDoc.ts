import { DefaultValue, DocReader } from './DocReader';
import * as allStories from '../storybook/stories/API/allStories';
import { StorybookArg } from '../storybook/StorybookArgs';

/**
 * @fileOverview reads API docs from Storybook stories
 */
export class StorybookDocReader implements DocReader {
  getAllPropsOf(component: string): ReadonlyArray<string> {
    return this.getRechartsPropsOf(component);
  }

  private componentCache: Map<string, ReadonlyArray<string>> | null = null;

  getPublicSymbolNames(): ReadonlyArray<string> {
    this.ensureCache();
    return Array.from(this.componentCache!.keys()).sort();
  }

  getPublicComponentNames(): ReadonlyArray<string> {
    return this.getPublicSymbolNames().filter(name => {
      // Exclude hooks (start with 'use')
      if (name.startsWith('use')) {
        return false;
      }
      // Exclude utility functions
      if (name === 'getNiceTickValues') {
        return false;
      }
      return true;
    });
  }

  getRechartsPropsOf(component: string): ReadonlyArray<string> {
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

  getDefaultValueOf(component: string, prop: string): DefaultValue {
    this.ensureCache();

    const storyModule = Object.entries(allStories).find(([exportName]) => {
      const componentName = exportName.replace(/Story$/, '');
      return componentName === component;
    });

    if (!storyModule) {
      return { type: 'unreadable' };
    }

    const [, storyDefault] = storyModule;
    if (typeof storyDefault !== 'object' || storyDefault === null || !('argTypes' in storyDefault)) {
      return { type: 'unreadable' };
    }

    const { argTypes } = storyDefault;
    if (!argTypes || typeof argTypes !== 'object') {
      return { type: 'unreadable' };
    }

    // @ts-expect-error our storybook types are not great
    const argType: StorybookArg = argTypes[prop];
    if (!argType) {
      return { type: 'unreadable' };
    }

    const tableDefaultValue = argType?.table?.defaultValue;
    if (tableDefaultValue != null && typeof tableDefaultValue === 'object' && 'summary' in tableDefaultValue) {
      return { type: 'known', value: tableDefaultValue.summary };
    }

    if (tableDefaultValue != null) {
      return { type: 'known', value: tableDefaultValue };
    }
    if (!('defaultValue' in argType)) {
      return { type: 'none' };
    }
    const { defaultValue } = argType;
    if (defaultValue === undefined) {
      return { type: 'known', value: undefined };
    }

    return { type: 'known', value: defaultValue };
  }
}

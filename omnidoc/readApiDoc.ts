import { DefaultValue, DocReader } from './DocReader';
import { allExamples } from '../www/src/docs/api';

/**
 * @fileOverview reads API docs from the website
 */
export class ApiDocReader implements DocReader {
  getPublicSymbolNames(): ReadonlyArray<string> {
    return Object.keys(allExamples);
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
    const apiDoc = allExamples[component];
    if (!apiDoc) {
      return [];
    }
    return apiDoc.props.map(prop => prop.name);
  }

  getAllPropsOf(component: string): ReadonlyArray<string> {
    return this.getRechartsPropsOf(component);
  }

  getSVGParentOf(_component: string): string | null {
    /*
     * API docs do not contain info about SVG parent elements
     */
    return null;
  }

  getDefaultValueOf(component: string, prop: string): DefaultValue {
    const apiDoc = allExamples[component];
    if (!apiDoc) {
      return { type: 'unreadable' };
    }

    const propDoc = apiDoc.props.find(p => p.name === prop);
    if (!propDoc) {
      return { type: 'unreadable' };
    }

    if (!('defaultVal' in propDoc)) {
      return { type: 'none' };
    }

    const { defaultVal } = propDoc;
    if (defaultVal === 'undefined') {
      return { type: 'known', value: undefined };
    }

    return { type: 'known', value: defaultVal };
  }
}

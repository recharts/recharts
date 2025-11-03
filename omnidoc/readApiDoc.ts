import { DocReader } from './DocReader';
import { allExamples } from '../www/src/docs/api';

/**
 * @fileOverview reads API docs from the website
 */
export class ApiDocReader implements DocReader {
  getPublicSymbolNames(): ReadonlyArray<string> {
    return Object.keys(allExamples);
  }

  getPropsOf(component: string): ReadonlyArray<string> {
    const apiDoc = allExamples[component];
    if (!apiDoc) {
      return [];
    }
    return apiDoc.props.map(prop => prop.name);
  }

  getSVGParentOf(_component: string): string | null {
    /*
     * API docs do not contain info about SVG parent elements
     */
    return null;
  }
}

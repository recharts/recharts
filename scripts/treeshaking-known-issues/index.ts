/**
 * Known pre-existing tree-shaking failures.
 *
 * Each file in this folder documents a component that unexpectedly pulls in other tracked
 * components when tree-shaken in isolation. The file exports:
 * - `component`: the component name being imported
 * - `expectedInBundle`: all component names expected to appear in the bundle (including
 *   the imported component itself and any that are currently pulled in as side effects)
 *
 * When a tree-shaking issue is fixed, remove the import and entry from this index.
 * When a new issue is introduced, create a new file and add it here.
 */

import * as BarStack from './BarStack';
import * as CartesianGrid from './CartesianGrid';
import * as XAxis from './XAxis';
import * as YAxis from './YAxis';

export type KnownIssue = {
  readonly component: string;
  readonly expectedInBundle: ReadonlyArray<string>;
};

export const knownTreeshakingIssues: ReadonlyArray<KnownIssue> = [BarStack, CartesianGrid, XAxis, YAxis];

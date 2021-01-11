/**
 * @fileOverview Cross
 */
import type { FunctionComponent } from 'react';
import { PresentationAttributes } from '../util/types';

export type Props = PresentationAttributes<SVGElement>;

export const Cell: FunctionComponent<Props> = () => null;

Cell.displayName = 'Cell';

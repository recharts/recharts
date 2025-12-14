import type { FunctionComponent, SVGProps } from 'react';

export type Props = SVGProps<SVGElement>;

/**
 * @consumes CellReader
 */
export const Cell: FunctionComponent<Props> = (_props: Props) => null;

Cell.displayName = 'Cell';

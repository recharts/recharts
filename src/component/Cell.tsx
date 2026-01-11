import type { FunctionComponent, SVGProps } from 'react';

export type Props = SVGProps<SVGElement>;

/**
 * Cell can be wrapped by Pie, Bar, or RadialBar to specify attributes of each child. In Pie , for example, we can specify the attributes of each child node through data, but the props of Cell have higher priority
 *
 * @consumes CellReader
 */
export const Cell: FunctionComponent<Props> = (_props: Props) => null;

Cell.displayName = 'Cell';

import * as React from 'react';
import { ActiveDotType, DataKey } from '../util/types';
export interface PointType {
    readonly x: number | null;
    readonly y: number | null;
    readonly value?: any;
    readonly payload?: any;
}
type ActivePointsProps = {
    points: ReadonlyArray<PointType>;
    /**
     * Different graphical elements have different opinion on what is their main color.
     * Sometimes stroke, sometimes fill, sometimes combination.
     * `undefined` means that the color is not set, and the point will be transparent.
     */
    mainColor: string | undefined;
    itemDataKey: DataKey<any>;
    activeDot: ActiveDotType;
};
export declare function ActivePoints({ points, mainColor, activeDot, itemDataKey }: ActivePointsProps): React.JSX.Element;
export {};

/**
 * @fileOverview Curve
 */
import * as React from 'react';
import { Ref } from 'react';
import { CurveFactory } from 'victory-vendor/d3-shape';
import { LayoutType, PresentationAttributesWithProps } from '../util/types';
export type CurveType = 'basis' | 'basisClosed' | 'basisOpen' | 'bumpX' | 'bumpY' | 'bump' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | CurveFactory;
/**
 * @deprecated use {@link Coordinate} instead
 * Duplicated with `Coordinate` in `util/types.ts`
 */
export interface Point {
    readonly x: number;
    readonly y: number;
}
/**
 * @deprecated use {@link NullableCoordinate} instead
 * Duplicated with `NullableCoordinate` in `util/types.ts`
 */
export interface NullablePoint {
    readonly x: number | null;
    readonly y: number | null;
}
interface CurveProps {
    className?: string;
    type?: CurveType;
    layout?: LayoutType;
    baseLine?: number | ReadonlyArray<NullablePoint>;
    points?: ReadonlyArray<NullablePoint>;
    connectNulls?: boolean;
    path?: string;
    pathRef?: Ref<SVGPathElement>;
}
export type Props = Omit<PresentationAttributesWithProps<CurveProps, SVGPathElement>, 'type' | 'points'> & CurveProps;
type GetPathProps = Pick<Props, 'type' | 'points' | 'baseLine' | 'layout' | 'connectNulls'>;
/**
 * Calculate the path of curve. Returns null if points is an empty array.
 * @return path or null
 */
export declare const getPath: ({ type, points, baseLine, layout, connectNulls, }: GetPathProps) => string | null;
export declare const Curve: React.FC<Props>;
export {};

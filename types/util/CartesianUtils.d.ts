import { Coordinate, AxisType } from './types';
export declare const formatAxisMap: (props: any, axisMap: any, offset: any, axisType: AxisType, chartName: string) => {};
export declare const rectWithPoints: ({ x: x1, y: y1 }: Coordinate, { x: x2, y: y2 }: Coordinate) => {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare const rectWithCoords: ({ x1, y1, x2, y2 }: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}) => {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare class ScaleHelper {
    static EPS: number;
    private scale;
    static create(obj: any): ScaleHelper;
    constructor(scale: any);
    get domain(): any;
    get range(): any;
    get rangeMin(): any;
    get rangeMax(): any;
    get bandwidth(): any;
    apply(value: any, { bandAware, position }?: {
        bandAware?: boolean;
        position?: any;
    }): any;
    isInRange(value: number): boolean;
}
declare type ScaleResult<T> = {
    [P in keyof T]: number;
};
declare type Scales<T> = {
    [P in keyof T]: ScaleHelper;
};
declare type ScalesApply<T> = (coord: {
    [P in keyof T]: any;
}, options: any) => ScaleResult<T>;
declare type ScalesIsInRange<T> = (coord: {
    [P in keyof T]: any;
}) => boolean;
declare type LabeledScales<T> = Scales<T> & {
    apply: ScalesApply<T>;
} & {
    isInRange: ScalesIsInRange<T>;
};
export declare const createLabeledScales: (options: Record<string, any>) => LabeledScales<Record<string, any>>;
export {};

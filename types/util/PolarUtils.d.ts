import { ReactElement, SVGProps } from 'react';
import { Coordinate, RangeObj, PolarViewBoxRequired, ChartOffsetInternal } from './types';
export declare const RADIAN: number;
export declare const degreeToRadian: (angle: number) => number;
export declare const radianToDegree: (angleInRadian: number) => number;
export declare const polarToCartesian: (cx: number, cy: number, radius: number, angle: number) => Coordinate;
export declare const getMaxRadius: (width: number, height: number, offset?: ChartOffsetInternal) => number;
export declare const distanceBetweenPoints: (point: Coordinate, anotherPoint: Coordinate) => number;
export declare const getAngleOfPoint: ({ x, y }: Coordinate, { cx, cy }: PolarViewBoxRequired) => {
    radius: number;
    angle: number;
    angleInRadian?: undefined;
} | {
    radius: number;
    angle: number;
    angleInRadian: number;
};
export declare const formatAngleOfSector: ({ startAngle, endAngle }: PolarViewBoxRequired) => {
    startAngle: number;
    endAngle: number;
};
export declare const inRangeOfSector: ({ x, y }: Coordinate, viewBox: PolarViewBoxRequired) => RangeObj | null;
export declare const getTickClassName: (tick?: SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | boolean) => string;

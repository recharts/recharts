import { CSSProperties } from 'react';
import { Coordinate, CartesianViewBox, AllowInDimension } from '../types';
export type Dimension2D = 'x' | 'y';
export declare function getTooltipCSSClassName({ coordinate, translateX, translateY, }: {
    translateX: number | undefined;
    translateY: number | undefined;
    coordinate: Partial<Coordinate> | undefined;
}): string;
export declare function getTooltipTranslateXY({ allowEscapeViewBox, coordinate, key, offsetTopLeft, position, reverseDirection, tooltipDimension, viewBox, viewBoxDimension, }: {
    allowEscapeViewBox: AllowInDimension;
    coordinate: Coordinate;
    key: Dimension2D;
    offsetTopLeft: number;
    position: Partial<Coordinate>;
    reverseDirection: AllowInDimension;
    tooltipDimension: number;
    viewBox: CartesianViewBox;
    viewBoxDimension: number | undefined;
}): number;
export declare function getTransformStyle({ translateX, translateY, useTranslate3d, }: {
    useTranslate3d: boolean;
    translateX: number;
    translateY: number;
}): CSSProperties;
export declare function getTooltipTranslate({ allowEscapeViewBox, coordinate, offsetTopLeft, position, reverseDirection, tooltipBox, useTranslate3d, viewBox, }: {
    allowEscapeViewBox: AllowInDimension;
    coordinate: Coordinate | undefined;
    offsetTopLeft: number;
    position: Partial<Coordinate>;
    reverseDirection: AllowInDimension;
    tooltipBox: {
        width: number;
        height: number;
    };
    useTranslate3d: boolean;
    viewBox: CartesianViewBox;
}): {
    cssProperties: CSSProperties;
    cssClasses: string;
};

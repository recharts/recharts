import * as React from 'react';
import { CartesianChartProps } from '../util/types';
export declare const CategoricalChart: React.ForwardRefExoticComponent<CartesianChartProps & {
    width: NonNullable<CartesianChartProps["width"]>;
    height: NonNullable<CartesianChartProps["height"]>;
} & React.RefAttributes<SVGSVGElement>>;

import * as React from 'react';
import { ReactElement, SVGProps } from 'react';
import { ChartCoordinate, ChartOffsetInternal, LayoutType, TooltipEventType } from '../util/types';
import { TooltipPayload } from '../state/tooltipSlice';
/**
 * If set false, no cursor will be drawn when tooltip is active.
 * If set an object, the option is the configuration of cursor.
 * If set a React element, the option is the custom react element of drawing cursor
 */
export type CursorDefinition = boolean | ReactElement | SVGProps<SVGElement>;
export type CursorProps = {
    cursor: CursorDefinition;
    tooltipEventType: TooltipEventType;
    coordinate: ChartCoordinate;
    payload: TooltipPayload;
    index: string;
};
export type CursorConnectedProps = CursorProps & {
    tooltipAxisBandSize: number;
    layout: LayoutType;
    offset: ChartOffsetInternal;
    coordinate: ChartCoordinate;
    payload: TooltipPayload;
    index: string;
    chartName: string;
};
export declare function CursorInternal(props: CursorConnectedProps): React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | React.FunctionComponentElement<any>;
export declare function Cursor(props: CursorProps): React.JSX.Element;

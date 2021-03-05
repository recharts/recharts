import React, { PureComponent, ReactText, MouseEvent, ReactElement, TouchEvent, SVGProps } from 'react';
import { ScalePoint } from 'd3-scale';
import { Padding, DataKey } from '../util/types';
declare type BrushTravellerType = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
interface BrushStartEndIndex {
    startIndex?: number;
    endIndex?: number;
}
interface InternalBrushProps {
    x?: number;
    y?: number;
    width?: number;
    data?: any[];
    updateId?: string | number;
}
interface BrushProps extends InternalBrushProps {
    className?: string;
    height: number;
    travellerWidth?: number;
    traveller?: BrushTravellerType;
    gap?: number;
    padding?: Padding;
    dataKey?: DataKey<any>;
    startIndex?: number;
    endIndex?: number;
    tickFormatter?: (value: any, index: number) => ReactText;
    children?: ReactElement;
    onChange?: (newIndex: BrushStartEndIndex) => void;
    leaveTimeOut?: number;
    alwaysShowText?: boolean;
}
export declare type Props = SVGProps<SVGElement> & BrushProps;
declare type BrushTravellerId = 'startX' | 'endX';
interface State {
    isTravellerMoving?: boolean;
    isSlideMoving?: boolean;
    startX?: number;
    endX?: number;
    slideMoveStartX?: number;
    movingTravellerId?: BrushTravellerId;
    isTextActive?: boolean;
    brushMoveStartX?: number;
    scale?: ScalePoint<number>;
    scaleValues?: number[];
    prevData?: any[];
    prevWidth?: number;
    prevX?: number;
    prevTravellerWidth?: number;
    prevUpdateId?: string | number;
}
export declare class Brush extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        height: number;
        travellerWidth: number;
        gap: number;
        fill: string;
        stroke: string;
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        leaveTimeOut: number;
        alwaysShowText: boolean;
    };
    constructor(props: Props);
    leaveTimer?: number;
    travellerDragStartHandlers?: Record<BrushTravellerId, (event: MouseEvent<SVGGElement> | TouchEvent<SVGGElement>) => void>;
    static renderDefaultTraveller(props: any): JSX.Element;
    static renderTraveller(option: BrushTravellerType, props: any): JSX.Element;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    componentWillUnmount(): void;
    static getIndexInRange(range: number[], x: number): number;
    getIndex({ startX, endX }: {
        startX: number;
        endX: number;
    }): {
        startIndex: number;
        endIndex: number;
    };
    getTextOfTick(index: number): any;
    handleDrag: (e: React.Touch | MouseEvent<SVGGElement>) => void;
    handleTouchMove: (e: TouchEvent<SVGGElement>) => void;
    attachDragEndListener(): void;
    detachDragEndListener(): void;
    handleDragEnd: () => void;
    handleLeaveWrapper: () => void;
    handleEnterSlideOrTraveller: () => void;
    handleLeaveSlideOrTraveller: () => void;
    handleSlideDragStart: (e: TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>) => void;
    handleSlideDrag(e: React.Touch | MouseEvent<SVGGElement>): void;
    handleTravellerDragStart(id: BrushTravellerId, e: MouseEvent<SVGGElement> | TouchEvent<SVGGElement>): void;
    handleTravellerMove(e: React.Touch | MouseEvent<SVGGElement>): void;
    renderBackground(): JSX.Element;
    renderPanorama(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    renderTravellerLayer(travellerX: number, id: BrushTravellerId): JSX.Element;
    renderSlide(startX: number, endX: number): JSX.Element;
    renderText(): JSX.Element;
    render(): JSX.Element;
}
export {};

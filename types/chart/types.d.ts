import { SyntheticEvent } from 'react';
import { MouseHandlerDataParam } from '../synchronisation/types';
export type TooltipTrigger = 'hover' | 'click';
export type CategoricalChartFunc = (nextState: MouseHandlerDataParam, event: SyntheticEvent) => void;
export interface ExternalMouseEvents {
    onClick: CategoricalChartFunc;
    onMouseLeave: CategoricalChartFunc;
    onMouseEnter: CategoricalChartFunc;
    onMouseMove: CategoricalChartFunc;
    onMouseDown: CategoricalChartFunc;
    onMouseUp: CategoricalChartFunc;
    onContextMenu: CategoricalChartFunc;
    onDoubleClick: CategoricalChartFunc;
    onTouchStart: CategoricalChartFunc;
    onTouchMove: CategoricalChartFunc;
    onTouchEnd: CategoricalChartFunc;
}

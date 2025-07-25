import * as React from 'react';
import { AxisId } from '../state/cartesianAxisSlice';
type GraphicalItemClipPathProps = {
    xAxisId: AxisId;
    yAxisId: AxisId;
    clipPathId: string;
};
export declare function useNeedsClip(xAxisId: AxisId, yAxisId: AxisId): {
    needClip: boolean;
    needClipX: boolean;
    needClipY: boolean;
};
export declare function GraphicalItemClipPath({ xAxisId, yAxisId, clipPathId }: GraphicalItemClipPathProps): React.JSX.Element;
export {};

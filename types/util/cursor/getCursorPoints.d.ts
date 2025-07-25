import { ChartCoordinate, Coordinate, LayoutType, ChartOffsetInternal } from '../types';
import { RadialCursorPoints } from './getRadialCursorPoints';
export declare function getCursorPoints(layout: LayoutType, activeCoordinate: ChartCoordinate, offset: ChartOffsetInternal): [Coordinate, Coordinate] | RadialCursorPoints;

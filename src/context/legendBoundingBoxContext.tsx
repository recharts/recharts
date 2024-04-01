import { createContext } from 'react';
import { BoundingBox } from '../util/useGetBoundingClientRect';

type OnLegendBoundingBoxUpdate = (legendBoundingBox: BoundingBox) => void;

export const LegendBoundingBoxContext = createContext<OnLegendBoundingBoxUpdate>(() => {});

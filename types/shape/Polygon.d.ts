import { PureComponent, SVGProps } from 'react';
import { Coordinate } from '../util/types';
interface PolygonProps {
    className?: string;
    points?: Coordinate[];
    baseLinePoints?: Coordinate[];
    connectNulls?: boolean;
}
export declare type Props = Omit<SVGProps<SVGPolygonElement>, 'points'> & PolygonProps;
export declare class Polygon extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};

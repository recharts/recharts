import { PureComponent, SVGProps } from 'react';
import { GeometrySector } from '../util/types';
interface SectorProps extends GeometrySector {
    className?: string;
}
export declare type Props = SVGProps<SVGPathElement> & SectorProps;
export declare class Sector extends PureComponent<Props> {
    static defaultProps: {
        cx: number;
        cy: number;
        innerRadius: number;
        outerRadius: number;
        startAngle: number;
        endAngle: number;
        cornerRadius: number;
        forceCornerRadius: boolean;
        cornerIsExternal: boolean;
    };
    render(): JSX.Element;
}
export {};

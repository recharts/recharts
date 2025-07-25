import * as React from 'react';
import { Component, ReactElement } from 'react';
import { Props as DotProps } from '../shape/Dot';
import { ImplicitLabelType } from '../component/Label';
import { IfOverflow } from '../util/IfOverflow';
interface ReferenceDotProps {
    r?: number;
    ifOverflow?: IfOverflow;
    /**
     * The x-coordinate of the center of the dot.
     * It should match a value from the XAxis, so if the XAxis is a number axis, this should be a number.
     * If the XAxis is a category axis, this should be a string.
     */
    x?: number | string;
    y?: number | string;
    className?: number | string;
    yAxisId?: number | string;
    xAxisId?: number | string;
    shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
    label?: ImplicitLabelType;
}
export type Props = DotProps & ReferenceDotProps;
export declare class ReferenceDot extends Component<Props> {
    static displayName: string;
    static defaultProps: Partial<Props>;
    render(): React.JSX.Element;
}
export {};

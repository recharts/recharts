import { ReactNode, SVGProps } from 'react';
interface LayerProps {
    className?: string;
    children?: ReactNode;
}
export declare type Props = SVGProps<SVGGElement> & LayerProps;
export declare function Layer(props: Props): JSX.Element;
export {};

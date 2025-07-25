import * as React from 'react';
import { CSSProperties, SVGProps } from 'react';
export type TextAnchor = 'start' | 'middle' | 'end' | 'inherit';
interface TextProps {
    scaleToFit?: boolean;
    angle?: number;
    textAnchor?: TextAnchor;
    verticalAnchor?: 'start' | 'middle' | 'end';
    style?: CSSProperties;
    lineHeight?: number | string;
    breakAll?: boolean;
    children?: string | number;
    maxLines?: number;
}
export type Props = Omit<SVGProps<SVGTextElement>, 'textAnchor' | 'verticalAnchor'> & TextProps;
interface Words {
    words: Array<string>;
    width?: number;
}
type GetWordsByLinesProps = Pick<Props, 'width' | 'scaleToFit' | 'children' | 'style' | 'breakAll' | 'maxLines'>;
export declare const getWordsByLines: ({ width, scaleToFit, children, style, breakAll, maxLines }: GetWordsByLinesProps) => Words[];
export declare const Text: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<SVGTextElement>>;
export {};

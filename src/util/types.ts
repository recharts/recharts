import { AriaAttributes, DOMAttributes, SVGProps } from 'react';

export type LayoutType = 'horizontal' | 'vertical';
export type PresentationAttributes<T> = AriaAttributes & DOMAttributes<T> & SVGProps<T>;

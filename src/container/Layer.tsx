import * as React from 'react';
import { ReactNode, SVGAttributes } from 'react';
import { clsx } from 'clsx';
import type { RechartsTheme } from '../theme/RechartsTheme';
import { useRechartsResolvedProps } from '../theme/useRechartsResolvedProps';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';

interface LayerProps {
  className?: string;
  children?: ReactNode;
}

export type Props = SVGAttributes<SVGGElement> & LayerProps;

const layerDefaultProps = {} as const satisfies Partial<Props>;

function getLayerComponentTheme(theme: RechartsTheme): Partial<Props> | undefined {
  return theme.components?.Layer;
}

/**
 * Creates an SVG group element to group other SVG elements.
 *
 * Useful if you want to apply transformations or styles to a set of elements
 * without affecting other elements in the SVG.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/g
 */
export const Layer = React.forwardRef<SVGGElement, Props>((props: Props, ref) => {
  const { children, className, ...others } = useRechartsResolvedProps(props, layerDefaultProps, getLayerComponentTheme);
  const layerClass = clsx('recharts-layer', className);

  return (
    <g className={layerClass} {...svgPropertiesAndEvents(others)} ref={ref}>
      {children}
    </g>
  );
});

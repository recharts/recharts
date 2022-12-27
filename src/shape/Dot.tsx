/**
 * @fileOverview Dot
 */
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { PresentationAttributesWithProps, adaptEventHandlers } from '../util/types';
import { filterProps } from '../util/ReactUtils';

interface DotProps {
  className?: string;
  cx?: number;
  cy?: number;
  r?: number;
}

export type Props = PresentationAttributesWithProps<DotProps, SVGCircleElement> & DotProps;

export class Dot extends PureComponent<Props> {
  render() {
    const { cx, cy, r, className } = this.props;
    const layerClass = classNames('recharts-dot', className);

    if (cx === +cx && cy === +cy && r === +r) {
      return (
        <circle
          {...filterProps(this.props)}
          {...adaptEventHandlers(this.props)}
          className={layerClass}
          cx={cx}
          cy={cy}
          r={r}
        />
      );
    }

    return null;
  }
}

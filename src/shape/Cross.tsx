/**
 * @fileOverview Cross
 */
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { isNumber } from '../util/DataUtils';
import { PresentationAttributes, filterProps } from '../util/types';

interface CrossProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  className?: number;
}

type Props = PresentationAttributes<SVGPathElement> & CrossProps;

class Cross extends PureComponent<Props> {
  static defaultProps = {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  };

  static getPath(x: number, y: number, width: number, height: number, top: number, left: number) {
    return `M${x},${top}v${height}M${left},${y}h${width}`;
  }

  render() {
    const { x, y, width, height, top, left,
      className } = this.props;

    if (!isNumber(x) || !isNumber(y) || !isNumber(width) ||
      !isNumber(height) || !isNumber(top) || !isNumber(left)) {
      return null;
    }

    return (
      <path
        {...filterProps(this.props, true)}
        className={classNames('recharts-cross', className)}
        d={Cross.getPath(x, y, width, height, top, left)}
      />
    );
  }
}

export default Cross;

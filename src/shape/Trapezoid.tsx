/**
 * @fileOverview Rectangle
 */
import React, { PureComponent, SVGProps } from 'react';
import classNames from 'classnames';
import Animate from 'react-smooth';
import { AnimationTiming, filterProps } from '../util/types';

const getTrapezoidPath = (x: number, y: number, upperWidth: number, lowerWidth: number, height: number) => {
  const widthGap = upperWidth - lowerWidth;
  let path;
  path = `M ${x},${y}`;
  path += `L ${x + upperWidth},${y}`;
  path += `L ${x + upperWidth - widthGap / 2},${y + height}`;
  path += `L ${x + upperWidth - widthGap / 2 - lowerWidth},${y + height}`;
  path += `L ${x},${y} Z`;
  return path;
};

interface TrapezoidProps {
  className?: string;
  x?: number;
  y?: number;
  upperWidth?: number;
  lowerWidth?: number;
  height?: number;

  isUpdateAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: number;
  animationEasing?: AnimationTiming;
}

export type Props = SVGProps<SVGPathElement> & TrapezoidProps;

export class Trapezoid extends PureComponent<Props> {
  static defaultProps = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  state = {
    totalLength: -1,
  };

  private node: SVGPathElement;

  /* eslint-disable  react/no-did-mount-set-state */
  componentDidMount() {
    if (this.node && this.node.getTotalLength) {
      try {
        const totalLength = this.node.getTotalLength();

        if (totalLength) {
          this.setState({
            totalLength,
          });
        }
      } catch (err) {
        // calculate total length error
      }
    }
  }

  render() {
    const { x, y, upperWidth, lowerWidth, height, className } = this.props;
    const { totalLength } = this.state;
    const { animationEasing, animationDuration, animationBegin, isUpdateAnimationActive } = this.props;

    if (
      x !== +x ||
      y !== +y ||
      upperWidth !== +upperWidth ||
      lowerWidth !== +lowerWidth ||
      height !== +height ||
      (upperWidth === 0 && lowerWidth === 0) ||
      height === 0
    ) {
      return null;
    }

    const layerClass = classNames('recharts-trapezoid', className);

    if (!isUpdateAnimationActive) {
      return (
        <g>
          <path
            {...filterProps(this.props, true)}
            className={layerClass}
            d={getTrapezoidPath(x, y, upperWidth, lowerWidth, height)}
          />
        </g>
      );
    }
    return (
      <Animate
        canBegin={totalLength > 0}
        from={{ upperWidth: 0, lowerWidth: 0, height, x, y }}
        to={{ upperWidth, lowerWidth, height, x, y }}
        duration={animationDuration}
        animationEasing={animationEasing}
        isActive={isUpdateAnimationActive}
      >
        {({
          upperWidth: currUpperWidth,
          lowerWidth: currLowerWidth,
          height: currHeight,
          x: currX,
          y: currY,
        }: {
          upperWidth: number;
          lowerWidth: number;
          height: number;
          x: number;
          y: number;
        }) => (
          <Animate
            canBegin={totalLength > 0}
            from={`0px ${totalLength === -1 ? 1 : totalLength}px`}
            to={`${totalLength}px 0px`}
            attributeName="strokeDasharray"
            begin={animationBegin}
            duration={animationDuration}
            easing={animationEasing}
          >
            <path
              {...filterProps(this.props, true)}
              className={layerClass}
              d={getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight)}
              ref={node => {
                this.node = node;
              }}
            />
          </Animate>
        )}
      </Animate>
    );
  }
}

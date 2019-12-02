/**
 * @fileOverview Render a group of radial bar
 */
import React, { PureComponent, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
// @ts-ignore
import Animate from 'react-smooth';
import _ from 'lodash';
import Sector, { Props as SectorProps } from '../shape/Sector';
import Layer from '../container/Layer';
import { findAllByType, isSsr } from '../util/ReactUtils';
import LabelList from '../component/LabelList';
import Cell from '../component/Cell';
import { mathSign, interpolateNumber } from '../util/DataUtils';
import { getCateCoordinateOfBar, findPositionOfBar, getValueByDataKey, truncateByDomain, getBaseValueOfBar } from '../util/ChartUtils';
import { LegendType, TooltipType, AnimationTiming, filterProps, PresentationAttributes, TickItem, adaptEventsOfChild } from '../util/types';
// TODO: Cause of circular dependency. Needs refactoring of functions that need them.
// import { AngleAxisProps, RadiusAxisProps } from './types';

type RadialBarDataItem = SectorProps & {
  value?: any;
  payload?: any;
  background?: SectorProps;
}

type RadialBarShape = ReactElement | ((props: Props) => ReactNode);
type RadialBarBackground =  ReactElement | ((props: Props) => ReactNode) | SectorProps | boolean;

interface RadialBarProps {
  animationId?: string | number;
  className?: string;
  angleAxisId?: string | number;
  radiusAxisId?: string | number;
  startAngle?: number;
  endAngle?: number;
  shape?: RadialBarShape;
  activeShape?: RadialBarShape;
  activeIndex?: number;
  dataKey: string | number | ((obj: any) => any);
  cornerRadius?: string | number;
  forceCornerRadius?: boolean;
  cornerIsExternal?: boolean;
  minPointSize?: number;
  maxBarSize?: number;
  data?: RadialBarDataItem[];
  legendType?: LegendType;
  tooltipType?: TooltipType;
  hide?: boolean;
  label?: any;
  background?: RadialBarBackground;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: number;
  animationEasing?: AnimationTiming;
}

type Props = PresentationAttributes<SVGElement> & RadialBarProps;

interface State {
  isAnimationFinished?: boolean;
  prevData?: RadialBarDataItem[];
}

class RadialBar extends PureComponent<Props, State> {

  static displayName = 'RadialBar';

  static defaultProps = {
    angleAxisId: 0,
    radiusAxisId: 0,
    minPointSize: 0,
    hide: false,
    legendType: 'rect',
    data: [] as RadialBarDataItem[],
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
    forceCornerRadius: false,
    cornerIsExternal: false,
  };

  static getComposedData = ({ item, props, radiusAxis, radiusAxisTicks, angleAxis, angleAxisTicks,
    displayedData, dataKey, stackedData, barPosition, bandSize, dataStartIndex }: {
      item: RadialBar;
      props: any;
      radiusAxis: any; // RadiusAxisProps;
      radiusAxisTicks: Array<TickItem>;
      angleAxis: any; // AngleAxisProps;
      angleAxisTicks: Array<TickItem>;
      displayedData: any[];
      dataKey: Props['dataKey'];
      stackedData?: any[];
      barPosition?: any[];
      bandSize?: number;
      dataStartIndex: number;
    }) => {
    const pos = findPositionOfBar(barPosition, item);
    if (!pos) { return null; }

    const { cx, cy } = angleAxis;
    const { layout } = props;
    const { children, minPointSize } = item.props;
    const numericAxis = layout === 'radial' ? angleAxis : radiusAxis;
    const stackedDomain = stackedData ? numericAxis.scale.domain() : null;
    const baseValue = getBaseValueOfBar({ numericAxis });
    const cells = findAllByType(children, Cell.displayName);
    const sectors = displayedData.map((entry: any, index: number) => {
      let value, innerRadius, outerRadius, startAngle, endAngle, backgroundSector;

      if (stackedData) {
        value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
      } else {
        value = getValueByDataKey(entry, dataKey);
        if (!_.isArray(value)) { value = [baseValue, value]; }
      }

      if (layout === 'radial') {
        innerRadius = getCateCoordinateOfBar({
          axis: radiusAxis,
          ticks: radiusAxisTicks,
          bandSize,
          offset: pos.offset,
          entry,
          index,
        });
        endAngle = angleAxis.scale(value[1]);
        startAngle = angleAxis.scale(value[0]);
        outerRadius = innerRadius + pos.size;
        const deltaAngle = endAngle - startAngle;

        if (Math.abs(minPointSize) > 0 && Math.abs(deltaAngle) < Math.abs(minPointSize)) {
          const delta = mathSign(deltaAngle || minPointSize) *
            (Math.abs(minPointSize) - Math.abs(deltaAngle));

          endAngle += delta;
        }
        backgroundSector = {
          background: {
            cx, cy, innerRadius, outerRadius, startAngle: props.startAngle,
            endAngle: props.endAngle,
          },
        };
      } else {
        innerRadius = radiusAxis.scale(value[0]);
        outerRadius = radiusAxis.scale(value[1]);
        startAngle = getCateCoordinateOfBar({
          axis: angleAxis,
          ticks: angleAxisTicks,
          bandSize,
          offset: pos.offset,
          entry,
          index,
        });
        endAngle = startAngle + pos.size;
        const deltaRadius = outerRadius - innerRadius;

        if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
          const delta = mathSign(deltaRadius || minPointSize) *
            (Math.abs(minPointSize) - Math.abs(deltaRadius));
          outerRadius += delta;
        }
      }

      return {
        ...entry,
        ...backgroundSector,
        payload: entry,
        value: stackedData ? value : value[1],
        cx, cy, innerRadius, outerRadius, startAngle, endAngle,
        ...(cells && cells[index] && cells[index].props),
      };
    });

    return { data: sectors, layout };
  };

  state: State = {
    isAnimationFinished: false,
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    const { animationId, data } = this.props;

    if (nextProps.animationId !== animationId) {
      this.cachePrevData(data);
    }
  }

  getDeltaAngle() {
    const { startAngle, endAngle } = this.props;
    const sign = mathSign(endAngle - startAngle);
    const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

    return sign * deltaAngle;
  }

  cachePrevData = (data: RadialBarDataItem[]) => {
    this.setState({ prevData: data });
  };

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;
    this.setState({ isAnimationFinished: true });

    if (_.isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;

    this.setState({ isAnimationFinished: false });

    if (_.isFunction(onAnimationStart)) {
      onAnimationStart();
    }
  };

  static renderSectorShape(shape: RadialBarBackground, props: any) {
    let sectorShape;

    if (React.isValidElement(shape)) {
      sectorShape = React.cloneElement(shape, props);
    } else if (_.isFunction(shape)) {
      sectorShape = shape(props);
    } else {
      sectorShape = React.createElement(Sector, props);
    }

    return sectorShape;
  }

  renderSectorsStatically(sectors: SectorProps[]) {
    const { shape, activeShape, activeIndex, cornerRadius, ...others } = this.props;
    const baseProps = filterProps(others);

    return sectors.map((entry, i) => {
      const props = {
        ...baseProps,
        cornerRadius,
        ...entry,
        ...adaptEventsOfChild(this.props, entry, i),
        key: `sector-${i}`,
        className: 'recharts-radial-bar-sector',
        forceCornerRadius: others.forceCornerRadius,
        cornerIsExternal: others.cornerIsExternal,
      };

      return RadialBar.renderSectorShape(i === activeIndex ? activeShape : shape, props);
    });
  }

  renderSectorsWithAnimation() {
    const { data, isAnimationActive, animationBegin, animationDuration,
      animationEasing, animationId } = this.props;
    const { prevData } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`radialBar-${animationId}`}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
      >
        {
          ({ t }: { t: number }) => {
            const stepData = data.map((entry, index) => {
              const prev = prevData && prevData[index];

              if (prev) {
                const interpolatorStartAngle = interpolateNumber(
                  prev.startAngle, entry.startAngle
                );
                const interpolatorEndAngle = interpolateNumber(
                  prev.endAngle, entry.endAngle
                );

                return {
                  ...entry,
                  startAngle: interpolatorStartAngle(t),
                  endAngle: interpolatorEndAngle(t),
                };
              }
              const { endAngle, startAngle } = entry;
              const interpolator = interpolateNumber(startAngle, endAngle);

              return { ...entry, endAngle: interpolator(t) };
            });

            return (
              <Layer>
                {this.renderSectorsStatically(stepData)}
              </Layer>
            );
          }
        }
      </Animate>
    );
  }

  renderSectors() {
    const { data, isAnimationActive } = this.props;
    const { prevData } = this.state;

    if (isAnimationActive && data && data.length &&
      (!prevData || !_.isEqual(prevData, data))) {
      return this.renderSectorsWithAnimation();
    }

    return this.renderSectorsStatically(data);
  }

  renderBackground(sectors?: RadialBarDataItem[]) {
    const { cornerRadius } = this.props;
    const backgroundProps = filterProps(this.props.background);

    return sectors.map((entry, i) => {
      // eslint-disable-next-line no-unused-vars
      const { value, background, ...rest } = entry;

      if (!background) { return null; }

      const props = {
        cornerRadius,
        ...rest,
        fill: '#eee',
        ...background,
        ...backgroundProps,
        ...adaptEventsOfChild(this.props, entry, i),
        index: i,
        key: `sector-${i}`,
        className: 'recharts-radial-bar-background-sector',
      };

      return RadialBar.renderSectorShape(background, props);
    });
  }

  render() {
    const { hide, data, className, background, isAnimationActive } = this.props;

    if (hide || !data || !data.length) { return null; }

    const { isAnimationFinished } = this.state;
    const layerClass = classNames('recharts-area', className);

    return (
      <Layer className={layerClass}>
        {
          background && (
            <Layer className="recharts-radial-bar-background">
              {this.renderBackground(data)}
            </Layer>
          )
        }

        <Layer className="recharts-radial-bar-sectors">
          {this.renderSectors()}
        </Layer>

        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent({
            ...this.props,
            clockWise: this.getDeltaAngle() < 0,
          }, data)
        }
      </Layer>
    );
  }
}

export default RadialBar;

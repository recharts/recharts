/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import classNames from 'classnames';
import _ from 'lodash';
import React, { Component, ReactElement } from 'react';
import ReactResizeDetector from 'react-resize-detector/build/withPolyfill';
import { isPercent } from '../util/DataUtils';
import { warn } from '../util/LogUtils';

export interface Props {
  aspect?: number;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: number;
  children: ReactElement;
  debounce?: number;
  id?: string | number;
  className?: string | number;
}

interface State {
  containerWidth: number;
  containerHeight: number;
}

export class ResponsiveContainer extends Component<Props, State> {
  static defaultProps = {
    width: '100%',
    height: '100%',
    debounce: 0,
  };

  private handleResize: () => void;

  private mounted: boolean;

  private containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      containerWidth: -1,
      containerHeight: -1,
    };

    this.handleResize =
      props.debounce > 0 ? _.debounce(this.updateDimensionsImmediate, props.debounce) : this.updateDimensionsImmediate;

    this.containerRef = React.createRef<HTMLDivElement>();
  }

  /* eslint-disable  react/no-did-mount-set-state */
  componentDidMount() {
    this.mounted = true;

    const size = this.getContainerSize();

    if (size) {
      this.setState(size);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getContainerSize() {
    if (!this.containerRef.current) {
      return null;
    }

    return {
      containerWidth: this.containerRef.current.clientWidth,
      containerHeight: this.containerRef.current.clientHeight,
    };
  }

  updateDimensionsImmediate = () => {
    if (!this.mounted) {
      return;
    }

    const newSize = this.getContainerSize();

    if (newSize) {
      const { containerWidth: oldWidth, containerHeight: oldHeight } = this.state;
      const { containerWidth, containerHeight } = newSize;

      if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
        this.setState({ containerWidth, containerHeight });
      }
    }
  };

  renderChart() {
    const { containerWidth, containerHeight } = this.state;

    if (containerWidth < 0 || containerHeight < 0) {
      return null;
    }

    const { aspect, width, height, minWidth, minHeight, maxHeight, children } = this.props;

    warn(
      isPercent(width) || isPercent(height),
      `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
      width,
      height,
    );

    warn(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);

    let calculatedWidth: number = isPercent(width) ? containerWidth : (width as number);
    let calculatedHeight: number = isPercent(height) ? containerHeight : (height as number);

    if (aspect && aspect > 0) {
      // Preserve the desired aspect ratio
      if (calculatedWidth) {
        // Will default to using width for aspect ratio
        calculatedHeight = calculatedWidth / aspect;
      } else if (calculatedHeight) {
        // But we should also take height into consideration
        calculatedWidth = calculatedHeight * aspect;
      }

      // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
      if (maxHeight && calculatedHeight > maxHeight) {
        calculatedHeight = maxHeight;
      }
    }

    warn(
      calculatedWidth > 0 || calculatedHeight > 0,
      `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
      calculatedWidth,
      calculatedHeight,
      width,
      height,
      minWidth,
      minHeight,
      aspect,
    );

    return React.cloneElement(children, {
      width: calculatedWidth,
      height: calculatedHeight,
    });
  }

  render() {
    const { minWidth, minHeight, width, height, maxHeight, id, className } = this.props;
    const style = { width, height, minWidth, minHeight, maxHeight };

    return (
      <ReactResizeDetector handleWidth handleHeight onResize={this.handleResize} targetRef={this.containerRef}>
        <div
          {...(id != null ? { id: `${id}` } : {})}
          className={classNames('recharts-responsive-container', className)}
          style={style}
          ref={this.containerRef}
        >
          {this.renderChart()}
        </div>
      </ReactResizeDetector>
    );
  }
}

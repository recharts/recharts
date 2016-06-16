/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import React, { Component, PropTypes } from 'react';
import ContainerDimensions from 'react-container-dimensions';
import pureRender from '../util/PureRender';
import { getPercentValue, isPercent } from '../util/DataUtils';
import { warn } from '../util/LogUtils';

const render = ({ width, height, container, children }) => {
  warn(isPercent(width) || isPercent(height),
    `The width(%s) and height(%s) are both fixed number,
     maybe you don't need to use ResponsiveContainer.`,
    width, height
  );

  const calculatedWidth = getPercentValue(width, container.width);
  const calculatedHeight = getPercentValue(height, container.height);

  warn(calculatedWidth > 0 && calculatedHeight > 0,
    `The width(%s) and height(%s) of chart should be greater than 0,
    please check the style of container, or the props width(%s) and height(%s).`,
     calculatedWidth, calculatedHeight, width, height
  );

  if (calculatedWidth > 0 && calculatedHeight > 0) {
    return React.cloneElement(children, {
      width: calculatedWidth,
      height: calculatedHeight,
    });
  }

  return null;
};

const style = {
  width: '100%',
  height: '100%',
};

const ResponsiveContainer = props => (
  <div className="recharts-responsive-container" style={style}>
    <ContainerDimensions>
      {
        container =>
          render({
            container,
            ...props,
          })
      }
    </ContainerDimensions>
  </div>
);

ResponsiveContainer.displayName = 'ResponsiveContainer';
ResponsiveContainer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

ResponsiveContainer.defaultProps = {
  width: '100%',
  height: '100%',
};

export default ResponsiveContainer;

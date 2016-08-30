/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import React, { Component, PropTypes } from 'react';
import ContainerDimensions from 'react-container-dimensions';
import pureRender from '../util/PureRender';
import { isPercent } from '../util/DataUtils';
import { warn } from '../util/LogUtils';

const render = ({ aspect, width, height, minWidth, minHeight, container, children }) => {
  warn(isPercent(width) || isPercent(height),
    `The width(%s) and height(%s) are both fixed numbers,
     maybe you don't need to use a ResponsiveContainer.`,
    width, height
  );

  warn(!aspect || aspect > 0,
       'The aspect(%s) must be greater than zero.',
       aspect);

  let calculatedWidth = isPercent(width) ? container.width : width;
  let calculatedHeight = isPercent(height) ? container.height : height;

  if (aspect && aspect > 0) {
    // Preserve the desired aspect ratio
    if (calculatedHeight > 0 &&
        (calculatedWidth === 0 || calculatedWidth / calculatedHeight > aspect)) {
      calculatedWidth = calculatedHeight * aspect;
    } else if (calculatedHeight === 0 || calculatedWidth / calculatedHeight < aspect) {
      calculatedHeight = calculatedWidth / aspect;
    }
  }

  warn(calculatedWidth > 0 && calculatedHeight > 0,
    `The width(%s) and height(%s) of chart should be greater than 0,
     please check the style of container, or the props width(%s) and height(%s),
     or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
     height and width.`,
    calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect
  );

  return React.cloneElement(children, {
    width: calculatedWidth,
    height: calculatedHeight,
  });
};

const ResponsiveContainer = props => {
  const { minWidth, minHeight, width, height } = props;
  const style = { width, height, minWidth, minHeight };
  return (
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
};

ResponsiveContainer.displayName = 'ResponsiveContainer';
ResponsiveContainer.propTypes = {
  aspect: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.number,
  minWidth: PropTypes.number,
  children: PropTypes.node.isRequired,
};

ResponsiveContainer.defaultProps = {
  width: '100%',
  height: '100%',
};

export default ResponsiveContainer;

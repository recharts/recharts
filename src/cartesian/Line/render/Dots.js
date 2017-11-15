import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import { getPresentationAttributes } from '../../../util/ReactUtils';
import Layer from '../../../container/Layer';
import Dot from '../../../shape/Dot';

const renderDotItem = (option, props) => {
  let dotItem;

  if (React.isValidElement(option)) {
    dotItem = React.cloneElement(option, props);
  } else if (_.isFunction(option)) {
    dotItem = option(props);
  } else {
    const className = classNames('recharts-line-dot', option.className);
    dotItem = <Dot {...props} className={className} />;
  }

  return dotItem;
};

const renderDots = (context) => {
  const { dot, points, isAnimationActive } = context.props;
  const { isAnimationFinished } = context.state;

  if (!dot || !points.length) {
    return null;
  }

  if (isAnimationActive && !isAnimationFinished) {
    return null;
  }

  const lineProps = getPresentationAttributes(context.props);
  const customDotProps = getPresentationAttributes(dot);
  const dots = points.map((entry, i) => {
    const dotProps = {
      key: `dot-${i}`,
      r: 3,
      ...lineProps,
      ...customDotProps,
      value: entry.value,
      cx: entry.x, cy: entry.y, index: i, payload: entry.payload,
    };

    return renderDotItem(dot, dotProps);
  });

  return <Layer className="recharts-line-dots" key="dots">{dots}</Layer>;
};

export default renderDots;

import _ from 'lodash';
import React from 'react';
import Animate from 'react-smooth';
import { filterEventAttributes, getPresentationAttributes } from '../../../util/ReactUtils';
import { interpolateNumber } from '../../../util/DataUtils';
import Curve from '../../../shape/Curve';

const repeat = (lines, count) => {
  const linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
  let result = [];

  for (let i = 0; i < count; ++i) {
    result = [...result, ...linesUnit];
  }

  return result;
};

const getStrokeDasharray = (length, totalLength, lines) => {
  const lineLength = lines.reduce((pre, next) => pre + next);

  const count = parseInt(length / lineLength, 10);
  const remainLength = length % lineLength;
  const restLength = totalLength - length;

  let remainLines = [];
  for (let i = 0, sum = 0; ; sum += lines[i], ++i) {
    if (sum + lines[i] > remainLength) {
      remainLines = [...lines.slice(0, i), remainLength - sum];
      break;
    }
  }

  const emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];

  return [...repeat(lines, count), ...remainLines, ...emptyLines]
    .map(line => `${line}px`)
    .join(', ');
};

/* eslint-disable no-param-reassign */
const pathRef = context => (node) => {
  context.mainCurve = node;
};

const handleAnimationEnd = context => () => {
  context.setState({ isAnimationFinished: true });
  context.props.onAnimationEnd();
};

const handleAnimationStart = context => () => {
  context.setState({ isAnimationFinished: false });
  context.props.onAnimationStart();
};

const renderCurveStatically = (context, points, needClip, props) => {
  const { type, layout, connectNulls } = props;
  const curveProps = {
    ...getPresentationAttributes(props),
    ...filterEventAttributes(props),
    fill: 'none',
    className: 'recharts-line-curve',
    clipPath: needClip ? `url(#clipPath-${props.id})` : null,
    points,
    ...props,
    type, layout, connectNulls,
  };

  return <Curve {...curveProps} pathRef={pathRef(context)} />;
};

const renderCurveWithAnimation = (context, needClip) => {
  const {
    points, strokeDasharray, isAnimationActive, animationBegin,
    animationDuration, animationEasing, animationId, ...other
  } = context.props;
  const { prevPoints, totalLength } = context.state;

  return (
    <Animate
      begin={animationBegin}
      duration={animationDuration}
      isActive={isAnimationActive}
      easing={animationEasing}
      from={{ t: 0 }}
      to={{ t: 1 }}
      key={`line-${animationId}`}
      onAnimationEnd={handleAnimationEnd(context)}
      onAnimationStart={handleAnimationStart(context)}
    >
      {
            ({ t }) => {
              if (prevPoints) {
                const stepData = points.map((entry, index) => {
                  if (prevPoints[index]) {
                    const prev = prevPoints[index];
                    const interpolatorX = interpolateNumber(prev.x, entry.x);
                    const interpolatorY = interpolateNumber(prev.y, entry.y);

                    return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
                  }

                  return entry;
                });
                return renderCurveStatically(context, stepData, needClip, context.props);
              }
              const interpolator = interpolateNumber(0, totalLength);
              const curLength = interpolator(t);
              let currentStrokeDasharray;

              if (strokeDasharray) {
                const lines = strokeDasharray.split(/[,\s]+/gim)
                  .map(num => parseFloat(num));
                currentStrokeDasharray = getStrokeDasharray(curLength, totalLength, lines);
              } else {
                currentStrokeDasharray = `${curLength}px ${totalLength - curLength}px`;
              }

              return renderCurveStatically(context, points, needClip, {
                ...context.props,
                strokeDasharray: currentStrokeDasharray,
              });
            }
          }
    </Animate>
  );
};

const renderCurve = (context, needClip) => {
  const { points, isAnimationActive } = context.props;

  if (points.length === 1) return null;

  const { prevPoints, totalLength } = context.state;

  if (isAnimationActive && points && points.length &&
      ((!prevPoints && totalLength > 0) || !_.isEqual(prevPoints, points))) {
    return renderCurveWithAnimation(context, needClip);
  }

  return renderCurveStatically(context, points, needClip, context.props);
};

export default renderCurve;

/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import _ from 'lodash';
import React from 'react';
import Animate from 'react-smooth';
import PropTypes from './propTypes';
import DefaultProps from './defaultProps';
import InitialState from './initialState';
import { getDisplayName } from '../ReactUtils';

function componentWillReceiveProps(nextProps) {
  const {
    isAnimationActive, animationId, points, data, baseLine, sectors,
  } = this.props;

  if (nextProps.isAnimationActive !== isAnimationActive) {
    if (sectors) this.setState({ prevSectors: [] }); // Pie
  } else if (nextProps.animationId !== animationId) {
    if (points) this.setState({ prevPoints: points }); // Line Area Scatter Radar
    if (data) this.setState({ prevData: data }); // Bar RadialBar
    if (baseLine) this.setState({ prevBaseLine: baseLine }); // Area
    if (sectors) this.setState({ prevSectors: sectors }); // Pie
  }
}

function handleAnimationEnd() {
  this.setState({ isAnimationFinished: true });
  this.props.onAnimationEnd();
}

function handleAnimationStart() {
  this.setState({ isAnimationFinished: false });
  this.props.onAnimationStart();
}

function renderDotsFn(fn) {
  return function (...args) {
    const { isAnimationActive } = this.props;
    const { isAnimationFinished } = this.state;
    if (isAnimationActive && !isAnimationFinished) return null;

    return fn.apply(this, args);
  };
}

function renderErrorBarFn(fn) {
  return function (...args) {
    const { isAnimationActive } = this.props;
    const { isAnimationFinished } = this.state;
    if (isAnimationActive && !isAnimationFinished) return null;

    return fn.apply(this, args);
  };
}

function renderLabelListFn(fn) {
  return function (...args) {
    const { isAnimationActive } = this.props;
    const { isAnimationFinished } = this.state;
    if (isAnimationActive && !isAnimationFinished) return null;

    return fn.apply(this, args);
  };
}

function renderLabelsFn(fn) {
  return function (...args) {
    const { isAnimationActive } = this.props;
    const { isAnimationFinished } = this.state;
    if (isAnimationActive && !isAnimationFinished) return null;

    return fn.apply(this, args);
  };
}

function renderWithAnimation(componentName) {
  return function (fn, ...args) {
    const {
      isAnimationActive, animationBegin,
      animationDuration, animationEasing, animationId,
    } = this.props;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`${componentName}-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd.bind(this)}
        onAnimationStart={this.handleAnimationStart.bind(this)}
      >
        {
          props => fn.call(this, props, ...args)
        }
      </Animate>
    );
  };
}

export default function animationDecorator(component) {

  const {
    renderDots, renderErrorBar, renderLabelList, renderLabels, createDefaultState,
  } = component.prototype;

  component.propTypes = {
    ...PropTypes,
    ...component.propTypes,
  };

  component.defaultProps = {
    ...DefaultProps,
    ...component.defaultProps,
  };

  component.prototype.componentWillReceiveProps = componentWillReceiveProps;
  component.prototype.handleAnimationStart = handleAnimationStart;
  component.prototype.handleAnimationEnd = handleAnimationEnd;
  component.prototype.renderWithAnimation = renderWithAnimation(getDisplayName(component));

  component.prototype.createDefaultState = () => ({
    ...InitialState,
    ...createDefaultState.call(this),
  });

  if (renderDots) {
    component.prototype.renderDots = renderDotsFn(renderDots);
  }

  if (renderErrorBar) {
    component.prototype.renderErrorBar = renderErrorBarFn(renderErrorBar);
  }

  if (renderLabelList) {
    component.prototype.renderLabelList = renderLabelListFn(renderLabelList);
  }

  if (renderLabels) {
    component.prototype.renderLabels = renderLabelsFn(renderLabels);
  }
}

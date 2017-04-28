/**
 * @fileOverview Pie Chart
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import generateCategoricalChart from './generateCategoricalChart';
import PolarGrid from '../polar/PolarGrid';
import PolarAngleAxis from '../polar/PolarAngleAxis';
import PolarRadiusAxis from '../polar/PolarRadiusAxis';
import { getMaxRadius, polarToCartesian, formatAxisMap } from '../util/PolarUtils';
import Pie from '../polar/Pie';

import Surface from '../container/Surface';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Cell from '../component/Cell';
import { getPercentValue, combineEventHandlers, getValueByDataKey } from '../util/DataUtils';
import { findChildByType, findAllByType, validateWidthHeight, filterSvgElements,
  getPresentationAttributes, isChildrenEqual } from '../util/ReactUtils';

export default generateCategoricalChart({
  chartName: 'PieChart',
  GraphicalChild: Pie,
  eventType: 'item',
  axisComponents: [
    { axisType: 'angleAxis', AxisComp: PolarAngleAxis },
    { axisType: 'radiusAxis', AxisComp: PolarRadiusAxis },
  ],
  formatAxisMap,
  defaultProps: {
    layout: 'centric',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%',
  },
  propTypes: {
    layout: PropTypes.oneOf(['centric']),
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  },
});

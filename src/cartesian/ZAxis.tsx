import * as React from 'react';
import { Component, useEffect } from 'react';
import { ScaleType, DataKey, AxisDomain } from '../util/types';
import { addZAxis, removeZAxis, ZAxisSettings } from '../state/cartesianAxisSlice';
import { useAppDispatch } from '../state/hooks';
import { RechartsScale } from '../util/ChartUtils';
import { AxisRange, implicitZAxis } from '../state/selectors/axisSelectors';

function SetZAxisSettings(settings: ZAxisSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addZAxis(settings));
    return () => {
      dispatch(removeZAxis(settings));
    };
  }, [settings, dispatch]);
  return null;
}

export interface Props {
  type?: 'number' | 'category';
  /** The name of data displayed in the axis */
  name?: string;
  /** The unit of data displayed in the axis */
  unit?: string;
  /** The unique id of z-axis */
  zAxisId?: string | number;
  /** The key of data displayed in the axis */
  dataKey?: DataKey<any>;
  /** The range of axis */
  range?: AxisRange;
  scale?: ScaleType | RechartsScale | undefined;
  /** The domain of scale in this axis */
  domain?: AxisDomain;
}

// eslint-disable-next-line react/prefer-stateless-function
export class ZAxis extends Component<Props> {
  static displayName = 'ZAxis';

  static defaultProps = {
    zAxisId: 0,
    range: implicitZAxis.range,
    scale: implicitZAxis.scale,
    type: implicitZAxis.type,
  };

  render() {
    return (
      <SetZAxisSettings
        domain={this.props.domain}
        id={this.props.zAxisId}
        dataKey={this.props.dataKey}
        name={this.props.name}
        unit={this.props.unit}
        range={this.props.range}
        scale={this.props.scale}
        type={this.props.type}
        allowDuplicatedCategory={implicitZAxis.allowDuplicatedCategory}
        allowDataOverflow={implicitZAxis.allowDataOverflow}
        reversed={implicitZAxis.reversed}
        includeHidden={implicitZAxis.includeHidden}
      />
    );
  }
}

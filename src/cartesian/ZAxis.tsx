import React, { Component, useEffect } from 'react';
import { ScaleType, DataKey, AxisDomain } from '../util/types';
import { addZAxis, removeZAxis, ZAxisSettings } from '../state/axisMapSlice';
import { useAppDispatch } from '../state/hooks';

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
  range?: number[];
  scale?: ScaleType | Function;
  /** The domain of scale in this axis */
  domain?: AxisDomain;
}

// eslint-disable-next-line react/prefer-stateless-function
export class ZAxis extends Component<Props> {
  static displayName = 'ZAxis';

  static defaultProps = {
    zAxisId: 0,
    range: [64, 64],
    scale: 'auto',
    type: 'number',
  };

  render() {
    return (
      <SetZAxisSettings
        id={this.props.zAxisId}
        dataKey={this.props.dataKey}
        name={this.props.name}
        unit={this.props.unit}
        range={this.props.range}
      />
    );
  }
}

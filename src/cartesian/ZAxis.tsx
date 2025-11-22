import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';
import { AxisDomain, DataKey, ScaleType } from '../util/types';
import { addZAxis, replaceZAxis, removeZAxis, ZAxisSettings, AxisId } from '../state/cartesianAxisSlice';
import { useAppDispatch } from '../state/hooks';
import { RechartsScale } from '../util/ChartUtils';
import { AxisRange, implicitZAxis } from '../state/selectors/axisSelectors';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

function SetZAxisSettings(settings: ZAxisSettings): null {
  const dispatch = useAppDispatch();
  const prevSettingsRef = useRef<ZAxisSettings | null>(null);

  useLayoutEffect(() => {
    if (prevSettingsRef.current === null) {
      dispatch(addZAxis(settings));
    } else if (prevSettingsRef.current !== settings) {
      dispatch(replaceZAxis({ prev: prevSettingsRef.current, next: settings }));
    }
    prevSettingsRef.current = settings;
  }, [settings, dispatch]);

  useLayoutEffect(() => {
    return () => {
      if (prevSettingsRef.current) {
        dispatch(removeZAxis(prevSettingsRef.current));
        prevSettingsRef.current = null;
      }
    };
  }, [dispatch]);

  return null;
}

export interface Props {
  /**
   * @defaultValue number
   */
  type?: 'number' | 'category';
  /** The name of data displayed in the axis */
  name?: string;
  /** The unit of data displayed in the axis */
  unit?: string;
  /**
   * The unique id of z-axis
   *
   * @defaultValue 0
   */
  zAxisId?: AxisId;
  /** The key of data displayed in the axis */
  dataKey?: DataKey<any>;
  /**
   * The range of axis
   *
   * @defaultValue [64, 64]
   */
  range?: AxisRange;
  /**
   * @defaultValue auto
   */
  scale?: ScaleType | RechartsScale | undefined;
  /** The domain of scale in this axis */
  domain?: AxisDomain;
}

export const zAxisDefaultProps = {
  zAxisId: 0,
  range: implicitZAxis.range,
  scale: implicitZAxis.scale,
  type: implicitZAxis.type,
} as const satisfies Partial<Props>;

export function ZAxis(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, zAxisDefaultProps);
  return (
    <SetZAxisSettings
      domain={props.domain}
      id={props.zAxisId}
      dataKey={props.dataKey}
      name={props.name}
      unit={props.unit}
      range={props.range}
      scale={props.scale}
      type={props.type}
      allowDuplicatedCategory={implicitZAxis.allowDuplicatedCategory}
      allowDataOverflow={implicitZAxis.allowDataOverflow}
      reversed={implicitZAxis.reversed}
      includeHidden={implicitZAxis.includeHidden}
    />
  );
}

ZAxis.displayName = 'ZAxis';

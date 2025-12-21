import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';
import { BaseAxisProps } from '../util/types';
import { addZAxis, AxisId, removeZAxis, replaceZAxis, ZAxisSettings } from '../state/cartesianAxisSlice';
import { useAppDispatch } from '../state/hooks';
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

export interface Props extends BaseAxisProps {
  /**
   * The type of axis. Numeric axis operates in a continuous range of numbers.
   * Category axis operates in a discrete set of categories.
   *
   * @defaultValue number
   */
  type?: 'number' | 'category';
  /**
   * The unique id of z-axis.
   *
   * @defaultValue 0
   */
  zAxisId?: AxisId;
  /**
   * The range of axis.
   * Unlike other axes, the range of z-axis is not informed by chart dimensions.
   *
   * @defaultValue [64,64]
   */
  range?: AxisRange;
}

export const zAxisDefaultProps = {
  zAxisId: 0,
  range: implicitZAxis.range,
  scale: implicitZAxis.scale,
  type: implicitZAxis.type,
} as const satisfies Partial<Props>;

/**
 * Virtual axis, does not render anything itself. Has no ticks, grid lines, or labels.
 * Useful for dynamically setting Scatter point size, based on data.
 *
 * @consumes CartesianViewBoxContext
 */
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

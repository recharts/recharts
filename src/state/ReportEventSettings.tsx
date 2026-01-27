import { useEffect, memo } from 'react';
import { useAppDispatch } from './hooks';
import { setEventSettings } from './eventSettingsSlice';
import { propsAreEqual } from '../util/propsAreEqual';
import { EventThrottlingProps } from '../util/types';

const ReportEventSettingsImpl = (props: EventThrottlingProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setEventSettings(props));
  }, [dispatch, props]);

  return null;
};

export const ReportEventSettings = memo(ReportEventSettingsImpl, propsAreEqual);

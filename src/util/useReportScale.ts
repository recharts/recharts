import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectContainerScale } from '../state/selectors/containerSelectors';
import { setScale } from '../state/layoutSlice';
import { isWellBehavedNumber } from './isWellBehavedNumber';

export function useReportScale() {
  const dispatch = useAppDispatch();
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const scale = useAppSelector(selectContainerScale);
  useEffect(() => {
    if (ref == null) {
      return;
    }
    const rect = ref.getBoundingClientRect();
    const newScale = rect.width / ref.offsetWidth;
    if (isWellBehavedNumber(newScale) && newScale !== scale) {
      dispatch(setScale(newScale));
    }
  }, [ref, dispatch, scale]);
  return setRef;
}

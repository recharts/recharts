import { useEffect, useState } from 'react';
import { useAppDispatch } from '../state/hooks';
import { setScale } from '../state/layoutSlice';
import { isWellBehavedNumber } from './isWellBehavedNumber';

export function useReportScale() {
  const dispatch = useAppDispatch();
  const [ref, setRef] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (ref == null) {
      return;
    }
    const rect = ref.getBoundingClientRect();
    const newScale = rect.width / ref.offsetWidth;
    if (isWellBehavedNumber(newScale)) {
      dispatch(setScale(newScale));
    }
  }, [ref, dispatch]);
  return setRef;
}

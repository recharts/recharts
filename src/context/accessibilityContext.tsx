import { useAppSelector } from '../state/hooks';

export const useAccessibilityLayer: () => boolean = () =>
  useAppSelector(state => state.rootProps.accessibilityLayer) ?? true;

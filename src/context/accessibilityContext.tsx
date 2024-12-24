import { useAppSelector } from '../state/hooks';

export const useAccessibilityLayer = () => useAppSelector(state => state.rootProps.accessibilityLayer);

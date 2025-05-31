import * as React from 'react';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useOffset } from '../context/chartLayoutContext';
import { uniqueId } from '../util/DataUtils';

const ClipPathIdContext = createContext<string | undefined>(undefined);
/**
 * Generates a unique clip path ID for use in SVG elements,
 * and puts it in a context provider.
 *
 * To read the clip path ID, use the `useClipPathId` hook,
 * or render `<ClipPath>` component which will automatically use the ID from this context.
 *
 * @param props optional `id` prop to set a custom ID for the clip path in case you want to use the same clip path in multiple charts.
 * @returns React Context Provider
 */
export const ClipPathProvider = (props: { id?: string; children: ReactNode }) => {
  const { id, children } = props;

  const [clipPathId, setClipPathId] = useState<string>(`${id ?? uniqueId('recharts')}-clip`);

  useEffect(() => {
    if (id == null) {
      return;
    }
    const newClipPathId = `${id}-clip`;
    if (clipPathId !== newClipPathId) {
      setClipPathId(newClipPathId);
    }
  }, [clipPathId, id]);

  return <ClipPathIdContext.Provider value={clipPathId}>{children}</ClipPathIdContext.Provider>;
};

export const useClipPathId = (): string | undefined => {
  return useContext(ClipPathIdContext);
};

export function ClipPath() {
  const offset = useOffset();
  const clipPathId = useClipPathId();
  if (offset == null) {
    return null;
  }
  const { left, top, height, width } = offset;

  return (
    <defs>
      <clipPath id={clipPathId}>
        <rect x={left} y={top} height={height} width={width} />
      </clipPath>
    </defs>
  );
}

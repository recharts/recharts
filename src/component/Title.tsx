import * as React from 'react';
import { useLayoutEffect, useMemo, useRef } from 'react';
import { clsx } from 'clsx';
import { useId } from '../util/useId';
import { Label } from './Label';
import { useIsPanorama } from '../context/PanoramaContext';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { setTitleIds } from '../state/layoutSlice';
import { selectMargin, TITLE_ROW_HEIGHT } from '../state/selectors/containerSelectors';
import { selectChartViewBox } from '../state/selectors/selectChartOffsetInternal';
import type { AppDispatch } from '../state/store';

/**
 * @public
 * @since 3.11
 */
export interface TitleProps {
  /** Single line of text to display above the plot. */
  children?: string | number;
  /** The SVG element's class name. */
  className?: string;
}

function createTitleGroup(svg: SVGSVGElement, dispatch: AppDispatch) {
  const elements = new Map<SVGGElement, string>();
  let order: string[] = [];

  function updateOrder() {
    const ids = Array.from(elements)
      .sort(([a], [b]) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      .map(([, id]) => id);
    if (order.length !== ids.length || ids.some((id, i) => id !== order[i])) {
      order = ids;
      dispatch(setTitleIds(ids));
    }
  }

  // Keyed siblings can move in the SVG without remounting their Title components.
  const observer = new MutationObserver(updateOrder);
  return {
    add(element: SVGGElement, id: string) {
      elements.set(element, id);
      if (elements.size === 2) {
        observer.observe(svg, { childList: true, subtree: true });
      }
      updateOrder();
    },
    remove(element: SVGGElement) {
      elements.delete(element);
      if (elements.size < 2) {
        observer.disconnect();
      }
      updateOrder();
      return elements.size === 0;
    },
  };
}

const titleGroups = new WeakMap<SVGSVGElement, ReturnType<typeof createTitleGroup>>();

/**
 * A single-line heading centered above the plot of a Cartesian or polar chart.
 * Each Title reserves 24 pixels above the axes and legend. Multiple titles stack in declaration order.
 * The chart's title prop supplies its accessible SVG name independently of the visible headings.
 * @since 3.11
 * @public
 */
export function Title({ children, className }: TitleProps) {
  const ref = useRef<SVGGElement>(null);
  const id = useId();
  const dispatch = useAppDispatch();
  const index = useAppSelector(state => state.layout.titleIds.indexOf(id));
  const plot = useAppSelector(selectChartViewBox);
  const margin = useAppSelector(selectMargin);
  const isPanorama = useIsPanorama();
  const visible = !isPanorama && children != null && String(children).trim() !== '';
  const row = useMemo(
    () =>
      plot && margin && index != null && index >= 0
        ? { x: plot.x, y: (margin.top ?? 0) + index * TITLE_ROW_HEIGHT, width: plot.width, height: TITLE_ROW_HEIGHT }
        : undefined,
    [plot, margin, index],
  );

  useLayoutEffect(() => {
    const element = ref.current;
    const svg = element?.ownerSVGElement;
    if (!visible || !element || !svg) {
      return undefined;
    }
    const group = titleGroups.get(svg) ?? createTitleGroup(svg, dispatch);
    titleGroups.set(svg, group);
    group.add(element, id);
    return () => {
      if (group.remove(element)) {
        titleGroups.delete(svg);
      }
    };
  }, [dispatch, id, visible]);

  if (!visible || !plot || !margin) {
    return null;
  }
  return (
    <g ref={ref}>
      {row && (
        <Label className={clsx('recharts-chart-title', className)} viewBox={row} position="center" zIndex={0}>
          {children}
        </Label>
      )}
    </g>
  );
}

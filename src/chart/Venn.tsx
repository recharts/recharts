import * as React from 'react';
import { CSSProperties, ReactNode, useMemo, useState } from 'react';
import { clsx } from 'clsx';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { getValueByDataKey } from '../util/ChartUtils';
import { COLOR_PANEL } from '../util/Constants';
import { isNotNil } from '../util/DataUtils';
import { ChartCoordinate, DataKey, EventThrottlingProps, Margin, Percent } from '../util/types';
import { ReportChartMargin, ReportChartSize, useChartHeight, useChartWidth } from '../context/chartLayoutContext';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ReportEventSettings } from '../state/ReportEventSettings';
import { ChartOptions } from '../state/optionsSlice';
import {
  mouseLeaveItem,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  TooltipIndex,
  TooltipPayloadConfiguration,
  TooltipPayloadSearcher,
} from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { useAppDispatch } from '../state/hooks';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { WithIdRequired } from '../util/useUniqueId';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { initialEventSettingsState } from '../state/eventSettingsSlice';

export interface VennDataItem {
  sets: ReadonlyArray<string>;
  size: number;
  fill?: string;
  color?: string;
  [key: string]: unknown;
}

interface VennCircle {
  setId: string;
  x: number;
  y: number;
  radius: number;
  fill: string;
}

interface NormalizedVennArea {
  index: number;
  sets: ReadonlyArray<string>;
  size: number;
  tooltipIndex: TooltipIndex;
  fill: string;
  explicitFill: string | undefined;
  datum: VennDataItem;
  label: string | undefined;
}

interface RenderedArea {
  area: NormalizedVennArea;
  coordinate: ChartCoordinate;
}

const vennSansFontFamily = 'system-ui, -apple-system, "Segoe UI", sans-serif';

type InternalVennProps = WithIdRequired<RequiresDefaultProps<VennProps, typeof defaultVennProps>>;

export interface VennProps extends EventThrottlingProps {
  /**
   * The source data. Each element should be an object.
   * The properties of each object represent the values of different data dimensions.
   *
   * Use the `dataKey` prop to specify which properties to use.
   */
  data: ReadonlyArray<VennDataItem>;
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  width?: number | Percent;
  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  height?: number | Percent;
  /**
   * If true, then it will listen to container size changes and adapt the SVG chart accordingly.
   * If false, then it renders the chart at the specified width and height and will stay that way
   * even if the container size changes.
   *
   * This is similar to ResponsiveContainer but without the need for an extra wrapper component.
   * The `responsive` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).
   */
  responsive?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
  children?: ReactNode;
  margin?: Margin;
  /**
   * The data that you provide via the `data` prop is an array of objects.
   * Each object can have multiple properties, each representing a different data dimension.
   * Use the `dataKey` prop to specify which property (or dimension) to use for this component.
   *
   * Typically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,
   * where they extract different values from the same data objects.
   *
   * Decides how to extract the value from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value.
   * @default size
   */
  dataKey?: DataKey<VennDataItem, number>;
  /**
   * Name represents each sector in the tooltip.
   * This allows you to extract the name from the data:
   *
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the name.
   */
  nameKey?: DataKey<VennDataItem, string>;
  /**
   * The background color used to fill the space between grid lines
   */
  fill?: string;
  stroke?: string;
  fillOpacity?: number;
  intersectionFillOpacity?: number;
  onMouseEnter?: (node: VennDataItem, e: React.MouseEvent<SVGGElement>) => void;
  onMouseLeave?: (node: VennDataItem, e: React.MouseEvent<SVGGElement>) => void;
  onClick?: (node: VennDataItem) => void;
}

const defaultVennMargin: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const defaultVennProps = {
  responsive: false,
  margin: defaultVennMargin,
  dataKey: 'size',
  fill: COLOR_PANEL[0] ?? '#8884d8',
  stroke: '#ffffff',
  fillOpacity: 0.35,
  intersectionFillOpacity: 0.55,
  ...initialEventSettingsState,
} as const satisfies Partial<VennProps>;

function areaKey(sets: ReadonlyArray<string>): string {
  return [...sets].sort().join('\u0000');
}

function getPaletteColor(index: number): string {
  return COLOR_PANEL[index % COLOR_PANEL.length] ?? '#8884d8';
}

function toSvgSafeId(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function hexToRgb(hexColor: string): { r: number; g: number; b: number } | null {
  const normalized = hexColor.trim();
  const shortHexMatch = /^#([0-9a-f]{3})$/i.exec(normalized);
  if (shortHexMatch != null) {
    const value = shortHexMatch[1] ?? '';
    const rHex = value.charAt(0);
    const gHex = value.charAt(1);
    const bHex = value.charAt(2);
    return {
      r: Number.parseInt(rHex + rHex, 16),
      g: Number.parseInt(gHex + gHex, 16),
      b: Number.parseInt(bHex + bHex, 16),
    };
  }

  const longHexMatch = /^#([0-9a-f]{6})$/i.exec(normalized);
  if (longHexMatch == null) {
    return null;
  }
  const value = longHexMatch[1] ?? '';
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function toHexChannel(value: number): string {
  return Math.max(0, Math.min(255, Math.round(value)))
    .toString(16)
    .padStart(2, '0');
}

function blendHexColors(colors: ReadonlyArray<string>): string | null {
  if (colors.length === 0) {
    return null;
  }
  const parsed = colors.map(hexToRgb).filter(isNotNil);
  if (parsed.length === 0) {
    return null;
  }
  const red = parsed.reduce((sum, color) => sum + color.r, 0) / parsed.length;
  const green = parsed.reduce((sum, color) => sum + color.g, 0) / parsed.length;
  const blue = parsed.reduce((sum, color) => sum + color.b, 0) / parsed.length;
  return `#${toHexChannel(red)}${toHexChannel(green)}${toHexChannel(blue)}`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function overlapArea(r1: number, r2: number, distance: number): number {
  if (distance >= r1 + r2) {
    return 0;
  }

  if (distance <= Math.abs(r1 - r2)) {
    const minRadius = Math.min(r1, r2);
    return Math.PI * minRadius * minRadius;
  }

  const alpha = Math.acos(clamp((distance * distance + r1 * r1 - r2 * r2) / (2 * distance * r1), -1, 1));
  const beta = Math.acos(clamp((distance * distance + r2 * r2 - r1 * r1) / (2 * distance * r2), -1, 1));
  const x = (-distance + r1 + r2) * (distance + r1 - r2) * (distance - r1 + r2) * (distance + r1 + r2);
  const lensArea = 0.5 * Math.sqrt(Math.max(0, x));

  return r1 * r1 * alpha + r2 * r2 * beta - lensArea;
}

function distanceByOverlap(r1: number, r2: number, targetArea: number): number {
  const minArea = 0;
  const maxArea = Math.PI * Math.min(r1, r2) * Math.min(r1, r2);
  const clampedArea = clamp(targetArea, minArea, maxArea);

  if (clampedArea === 0) {
    return r1 + r2;
  }

  if (clampedArea === maxArea) {
    return Math.abs(r1 - r2);
  }

  let low = Math.abs(r1 - r2);
  let high = r1 + r2;
  let result = (low + high) / 2;

  for (let i = 0; i < 48; i += 1) {
    const mid = (low + high) / 2;
    const currentArea = overlapArea(r1, r2, mid);
    result = mid;

    if (Math.abs(currentArea - clampedArea) < 1e-7) {
      break;
    }

    if (currentArea > clampedArea) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return result;
}

function getTooltipIndexFromActiveIndex(activeIndex: TooltipIndex): number | null {
  if (activeIndex == null) {
    return null;
  }

  if (typeof activeIndex === 'number' && Number.isInteger(activeIndex) && activeIndex >= 0) {
    return activeIndex;
  }

  if (typeof activeIndex !== 'string') {
    return null;
  }

  const numeric = Number(activeIndex.replace(/\[/g, '').replace(/\]/g, ''));
  if (!Number.isInteger(numeric) || numeric < 0) {
    return null;
  }
  return numeric;
}

export const vennPayloadSearcher: TooltipPayloadSearcher = (
  data: unknown,
  activeIndex: TooltipIndex,
): VennDataItem | undefined => {
  if (!Array.isArray(data)) {
    return undefined;
  }

  const index = getTooltipIndexFromActiveIndex(activeIndex);
  if (index == null) {
    return undefined;
  }

  const maybeData = data[index];
  if (maybeData == null || typeof maybeData !== 'object') {
    return undefined;
  }

  if (!('sets' in maybeData) || !('size' in maybeData)) {
    return undefined;
  }

  const maybeSets = maybeData.sets;
  const maybeSize = maybeData.size;

  if (!Array.isArray(maybeSets) || typeof maybeSize !== 'number') {
    return undefined;
  }

  return {
    ...maybeData,
    sets: maybeSets.filter((setId): setId is string => typeof setId === 'string'),
    size: maybeSize,
  };
};

const options: ChartOptions = {
  chartName: 'Venn',
  defaultTooltipEventType: 'item',
  validateTooltipEventTypes: ['item'],
  tooltipPayloadSearcher: vennPayloadSearcher,
  eventEmitter: undefined,
};

function getNumericDataValue(entry: VennDataItem, dataKey: DataKey<VennDataItem, number>): number {
  const rawValue = getValueByDataKey(entry, dataKey, 0);
  return typeof rawValue === 'number' && Number.isFinite(rawValue) && rawValue >= 0 ? rawValue : 0;
}

function getSets(entry: VennDataItem): ReadonlyArray<string> {
  if (!Array.isArray(entry.sets)) {
    return [];
  }

  return entry.sets.filter((setId): setId is string => typeof setId === 'string' && setId.length > 0);
}

function getLabel(entry: VennDataItem, nameKey: DataKey<VennDataItem, string> | undefined): string | undefined {
  if (nameKey == null) {
    return undefined;
  }

  const value = getValueByDataKey(entry, nameKey, undefined);
  return typeof value === 'string' ? value : undefined;
}

function getDefaultIntersectionName(entry: VennDataItem): string {
  const sets = getSets(entry);
  if (sets.length === 0) {
    return '';
  }
  return sets.join(' \u2229 ');
}

function getTrilateration(
  d12: number,
  d13: number,
  d23: number,
): {
  x: number;
  y: number;
} {
  const safeD12 = d12 <= 0 ? 1e-9 : d12;
  const x = (d13 * d13 - d23 * d23 + safeD12 * safeD12) / (2 * safeD12);
  const ySquared = Math.max(0, d13 * d13 - x * x);
  return {
    x,
    y: Math.sqrt(ySquared),
  };
}

type CircleSeed = { setId: string; radius: number; fill: string };

type PairConstraintType = 'normal' | 'disjoint' | 'subset';

interface PairConstraint {
  i: number;
  j: number;
  targetDistance: number;
  type: PairConstraintType;
}

function optimizeMultiSetLayout(
  singletonWithRadius: ReadonlyArray<CircleSeed>,
  pairAreas: ReadonlyMap<string, NormalizedVennArea>,
): ReadonlyArray<VennCircle> {
  const count = singletonWithRadius.length;
  const constraints: Array<PairConstraint> = [];

  for (let i = 0; i < count; i += 1) {
    for (let j = i + 1; j < count; j += 1) {
      const left = singletonWithRadius[i];
      const right = singletonWithRadius[j];
      if (left == null || right == null) {
        continue;
      }
      const overlap = pairAreas.get(areaKey([left.setId, right.setId]))?.size ?? 0;
      const maxOverlap = Math.PI * Math.min(left.radius, right.radius) ** 2;
      const targetDistance = distanceByOverlap(left.radius, right.radius, overlap);

      let type: PairConstraintType = 'normal';
      if (overlap <= 1e-9) {
        type = 'disjoint';
      } else if (maxOverlap > 0 && overlap >= maxOverlap * 0.999) {
        type = 'subset';
      }

      constraints.push({ i, j, targetDistance, type });
    }
  }

  const averageDistance =
    constraints.length > 0
      ? constraints.reduce((sum, constraint) => sum + constraint.targetDistance, 0) / constraints.length
      : Math.max(...singletonWithRadius.map(circle => circle.radius), 1) * 1.5;
  const seedRadius = Math.max(averageDistance * 0.9, 1e-3);

  const makeInitial = (phase: number) =>
    singletonWithRadius.map((_, index) => {
      const angle = (index / count) * Math.PI * 2 + phase;
      return { x: Math.cos(angle) * seedRadius, y: Math.sin(angle) * seedRadius };
    });

  const evaluate = (points: ReadonlyArray<{ x: number; y: number }>) => {
    let loss = 0;
    constraints.forEach(constraint => {
      const p1 = points[constraint.i];
      const p2 = points[constraint.j];
      if (p1 == null || p2 == null) {
        return;
      }
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distSquared = dx * dx + dy * dy;
      const targetSquared = constraint.targetDistance ** 2;
      const error = distSquared - targetSquared;

      if (constraint.type === 'disjoint' && distSquared >= targetSquared) {
        return;
      }
      if (constraint.type === 'subset' && distSquared <= targetSquared) {
        return;
      }

      loss += error * error;
    });
    return loss;
  };

  const runOptimization = (initialPoints: ReadonlyArray<{ x: number; y: number }>) => {
    const points = initialPoints.map(point => ({ ...point }));
    const learningRate = 0.0025;
    const gradientClip = 1000;

    for (let iter = 0; iter < 800; iter += 1) {
      const gradients = points.map(() => ({ x: 0, y: 0 }));

      constraints.forEach(constraint => {
        const { i, j } = constraint;
        const p1 = points[i];
        const p2 = points[j];
        if (p1 == null || p2 == null) {
          return;
        }
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSquared = dx * dx + dy * dy;
        const targetSquared = constraint.targetDistance ** 2;

        if (constraint.type === 'disjoint' && distSquared >= targetSquared) {
          return;
        }
        if (constraint.type === 'subset' && distSquared <= targetSquared) {
          return;
        }

        const error = distSquared - targetSquared;
        const gradX = 4 * error * dx;
        const gradY = 4 * error * dy;
        const firstGradient = gradients[i];
        const secondGradient = gradients[j];
        if (firstGradient == null || secondGradient == null) {
          return;
        }
        firstGradient.x += gradX;
        firstGradient.y += gradY;
        secondGradient.x -= gradX;
        secondGradient.y -= gradY;
      });

      for (let idx = 0; idx < points.length; idx += 1) {
        const point = points[idx];
        const gradient = gradients[idx];
        if (point == null || gradient == null) {
          continue;
        }
        const magnitude = Math.hypot(gradient.x, gradient.y);
        if (magnitude > gradientClip && magnitude > 0) {
          const scale = gradientClip / magnitude;
          gradient.x *= scale;
          gradient.y *= scale;
        }
        point.x -= gradient.x * learningRate;
        point.y -= gradient.y * learningRate;
      }

      const centerX = points.reduce((sum, point) => sum + point.x, 0) / points.length;
      const centerY = points.reduce((sum, point) => sum + point.y, 0) / points.length;
      for (let idx = 0; idx < points.length; idx += 1) {
        const point = points[idx];
        if (point == null) {
          continue;
        }
        point.x -= centerX;
        point.y -= centerY;
      }
    }

    return points;
  };

  let bestPoints = makeInitial(0);
  let bestLoss = evaluate(bestPoints);
  const phases = [0, Math.PI / 7, Math.PI / 5, Math.PI / 3, Math.PI / 2];

  phases.forEach(phase => {
    const points = runOptimization(makeInitial(phase));
    const loss = evaluate(points);
    if (loss < bestLoss) {
      bestLoss = loss;
      bestPoints = points;
    }
  });

  return singletonWithRadius.map((entry, idx) => {
    const point = bestPoints[idx];
    return {
      setId: entry.setId,
      radius: entry.radius,
      fill: entry.fill,
      x: point?.x ?? 0,
      y: point?.y ?? 0,
    };
  });
}

function normalizeCircles(
  circles: ReadonlyArray<VennCircle>,
  width: number,
  height: number,
): ReadonlyArray<VennCircle> {
  if (circles.length === 0) {
    return circles;
  }

  let minX = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  circles.forEach(circle => {
    minX = Math.min(minX, circle.x - circle.radius);
    maxX = Math.max(maxX, circle.x + circle.radius);
    minY = Math.min(minY, circle.y - circle.radius);
    maxY = Math.max(maxY, circle.y + circle.radius);
  });

  const rawWidth = Math.max(maxX - minX, 1e-9);
  const rawHeight = Math.max(maxY - minY, 1e-9);
  const padding = 8;
  const scale = Math.min((width - padding * 2) / rawWidth, (height - padding * 2) / rawHeight);
  const chartScale = Number.isFinite(scale) && scale > 0 ? scale : 1;
  const scaledWidth = rawWidth * chartScale;
  const scaledHeight = rawHeight * chartScale;
  const offsetX = (width - scaledWidth) / 2;
  const offsetY = (height - scaledHeight) / 2;

  return circles.map(circle => ({
    ...circle,
    x: (circle.x - minX) * chartScale + offsetX,
    y: (circle.y - minY) * chartScale + offsetY,
    radius: circle.radius * chartScale,
  }));
}

function layoutVennCircles(
  singletonAreas: ReadonlyArray<NormalizedVennArea>,
  pairAreas: ReadonlyMap<string, NormalizedVennArea>,
  width: number,
  height: number,
): ReadonlyArray<VennCircle> {
  if (singletonAreas.length === 0) {
    return [];
  }

  const setColors = new Map<string, string>();
  singletonAreas.forEach((area, index) => {
    const setId = area.sets[0];
    if (setId == null) {
      return;
    }
    const color = area.datum.fill ?? area.datum.color ?? getPaletteColor(index);
    setColors.set(setId, color);
  });

  const singletonWithRadius: Array<{ setId: string; radius: number; fill: string }> = [];
  singletonAreas.forEach((area, index) => {
    const setId = area.sets[0];
    if (setId == null) {
      return;
    }
    const areaFill = setColors.get(setId) ?? getPaletteColor(index);
    singletonWithRadius.push({
      setId,
      radius: Math.sqrt(area.size / Math.PI),
      fill: areaFill,
    });
  });

  if (singletonWithRadius.length === 0) {
    return [];
  }

  let circles: ReadonlyArray<VennCircle>;

  if (singletonWithRadius.length === 1) {
    const single = singletonWithRadius[0];
    if (single == null) {
      return [];
    }
    circles = [
      {
        setId: single.setId,
        x: 0,
        y: 0,
        radius: single.radius,
        fill: single.fill,
      },
    ];
  } else if (singletonWithRadius.length === 2) {
    const first = singletonWithRadius[0];
    const second = singletonWithRadius[1];
    if (first == null || second == null) {
      return [];
    }
    const key = areaKey([first.setId, second.setId]);
    const pairArea = pairAreas.get(key);
    const targetOverlap = pairArea?.size ?? 0;
    const distance = distanceByOverlap(first.radius, second.radius, targetOverlap);
    circles = [
      { setId: first.setId, x: -distance / 2, y: 0, radius: first.radius, fill: first.fill },
      { setId: second.setId, x: distance / 2, y: 0, radius: second.radius, fill: second.fill },
    ];
  } else if (singletonWithRadius.length === 3) {
    const first = singletonWithRadius[0];
    const second = singletonWithRadius[1];
    const third = singletonWithRadius[2];
    if (first == null || second == null || third == null) {
      return [];
    }
    const d12 = distanceByOverlap(
      first.radius,
      second.radius,
      pairAreas.get(areaKey([first.setId, second.setId]))?.size ?? 0,
    );
    const d13 = distanceByOverlap(
      first.radius,
      third.radius,
      pairAreas.get(areaKey([first.setId, third.setId]))?.size ?? 0,
    );
    const d23 = distanceByOverlap(
      second.radius,
      third.radius,
      pairAreas.get(areaKey([second.setId, third.setId]))?.size ?? 0,
    );
    const point3 = getTrilateration(d12, d13, d23);
    circles = [
      { setId: first.setId, x: 0, y: 0, radius: first.radius, fill: first.fill },
      { setId: second.setId, x: d12, y: 0, radius: second.radius, fill: second.fill },
      { setId: third.setId, x: point3.x, y: point3.y, radius: third.radius, fill: third.fill },
    ];
  } else {
    circles = optimizeMultiSetLayout(singletonWithRadius, pairAreas);
  }

  return normalizeCircles(circles, width, height);
}

function getAreaCoordinate(
  sets: ReadonlyArray<string>,
  circlesBySet: ReadonlyMap<string, VennCircle>,
): ChartCoordinate | null {
  const mappedCircles = sets.map(setId => circlesBySet.get(setId)).filter(isNotNil);
  if (mappedCircles.length === 0) {
    return null;
  }

  const x = mappedCircles.reduce((sum, circle) => sum + circle.x, 0) / mappedCircles.length;
  const y = mappedCircles.reduce((sum, circle) => sum + circle.y, 0) / mappedCircles.length;
  return { x, y };
}

function getTweakedLabelCoordinate(
  area: NormalizedVennArea,
  baseCoordinate: ChartCoordinate,
  circlesBySet: ReadonlyMap<string, VennCircle>,
  allAreas: ReadonlyArray<NormalizedVennArea>,
): ChartCoordinate {
  if (area.sets.length !== 1) {
    return baseCoordinate;
  }

  const setId = area.sets[0];
  if (setId == null) {
    return baseCoordinate;
  }

  const currentCircle = circlesBySet.get(setId);
  if (currentCircle == null) {
    return baseCoordinate;
  }

  let repelX = 0;
  let repelY = 0;
  let hasRepel = false;

  allAreas
    .filter(candidate => candidate.sets.length === 1)
    .forEach(candidate => {
      const otherSetId = candidate.sets[0];
      if (otherSetId == null || otherSetId === setId) {
        return;
      }

      const otherCircle = circlesBySet.get(otherSetId);
      if (otherCircle == null) {
        return;
      }

      // Keep smaller inner-circle labels near center; move larger-circle label away.
      if (currentCircle.radius < otherCircle.radius) {
        return;
      }

      const dx = currentCircle.x - otherCircle.x;
      const dy = currentCircle.y - otherCircle.y;
      const centerDistance = Math.hypot(dx, dy);
      const overlapDistance = currentCircle.radius + otherCircle.radius - centerDistance;

      if (overlapDistance <= 0) {
        return;
      }

      const strength = overlapDistance / (currentCircle.radius + otherCircle.radius);
      const safeDistance = centerDistance > 1e-6 ? centerDistance : 1;
      repelX += (dx / safeDistance) * strength;
      repelY += (dy / safeDistance) * strength;
      hasRepel = true;
    });

  if (!hasRepel) {
    return baseCoordinate;
  }

  const repelMagnitude = Math.hypot(repelX, repelY);
  if (repelMagnitude <= 1e-6) {
    return baseCoordinate;
  }

  const offset = Math.min(currentCircle.radius * 0.4, Math.max(currentCircle.radius * 0.16, repelMagnitude * 20));
  const shiftedX = baseCoordinate.x + (repelX / repelMagnitude) * offset;
  const shiftedY = baseCoordinate.y + (repelY / repelMagnitude) * offset;

  const fromCenterX = shiftedX - currentCircle.x;
  const fromCenterY = shiftedY - currentCircle.y;
  const fromCenterMagnitude = Math.hypot(fromCenterX, fromCenterY);
  const maxDistance = currentCircle.radius * 0.72;

  if (fromCenterMagnitude <= maxDistance || fromCenterMagnitude <= 1e-6) {
    return { x: shiftedX, y: shiftedY };
  }

  const clampedScale = maxDistance / fromCenterMagnitude;
  return {
    x: currentCircle.x + fromCenterX * clampedScale,
    y: currentCircle.y + fromCenterY * clampedScale,
  };
}

function renderAreaShape(
  area: NormalizedVennArea,
  circlesBySet: ReadonlyMap<string, VennCircle>,
  setClipPathIds: ReadonlyMap<string, string>,
  className: string,
  shapeProps?: {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  },
): React.ReactElement | null {
  const [firstSet, ...restSets] = area.sets;
  if (firstSet == null) {
    return null;
  }

  const firstCircle = circlesBySet.get(firstSet);
  if (firstCircle == null) {
    return null;
  }

  let node: React.ReactElement = (
    <circle
      cx={firstCircle.x}
      cy={firstCircle.y}
      r={firstCircle.radius}
      className={className}
      fill={shapeProps?.fill ?? area.fill}
      stroke={shapeProps?.stroke ?? 'none'}
      strokeWidth={shapeProps?.strokeWidth}
    />
  );

  restSets.forEach(setId => {
    const clipPathId = setClipPathIds.get(setId);
    if (clipPathId == null) {
      return;
    }

    node = (
      <g clipPath={`url(#${clipPathId})`} key={`clipped-${area.tooltipIndex}-${setId}`}>
        {node}
      </g>
    );
  });

  return node;
}

function renderIntersectionOutline(
  area: NormalizedVennArea,
  circlesBySet: ReadonlyMap<string, VennCircle>,
  setClipPathIds: ReadonlyMap<string, string>,
): React.ReactElement | null {
  if (area.sets.length < 2) {
    return null;
  }

  const outlineSegments = area.sets
    .map(setId => {
      const circle = circlesBySet.get(setId);
      if (circle == null) {
        return null;
      }

      let segment: React.ReactElement = (
        <circle
          cx={circle.x}
          cy={circle.y}
          r={circle.radius}
          fill="none"
          stroke="#ffffff"
          strokeWidth={2}
          strokeDasharray="6 4"
          strokeLinecap="round"
          style={{ pointerEvents: 'none' }}
        />
      );

      area.sets.forEach(otherSetId => {
        if (otherSetId === setId) {
          return;
        }
        const clipPathId = setClipPathIds.get(otherSetId);
        if (clipPathId == null) {
          return;
        }
        segment = <g clipPath={`url(#${clipPathId})`}>{segment}</g>;
      });

      return <g key={`intersection-outline-segment-${area.tooltipIndex}-${setId}`}>{segment}</g>;
    })
    .filter(isNotNil);

  if (outlineSegments.length === 0) {
    return null;
  }

  return <g className="recharts-venn-intersection-outline">{outlineSegments}</g>;
}

function SetVennTooltipEntrySettings({
  data,
  dataKey,
  nameKey,
  id,
  positions,
  fill,
  stroke,
}: {
  data: ReadonlyArray<VennDataItem>;
  dataKey: DataKey<VennDataItem, number>;
  nameKey?: DataKey<VennDataItem, string>;
  id: string;
  positions: ReadonlyMap<TooltipIndex, ChartCoordinate>;
  fill: string;
  stroke: string;
}) {
  const tooltipEntrySettings: TooltipPayloadConfiguration = {
    dataDefinedOnItem: data,
    getPosition: index => positions.get(index),
    settings: {
      stroke,
      strokeWidth: undefined,
      fill,
      nameKey,
      dataKey,
      name: undefined,
      hide: false,
      type: undefined,
      color: fill,
      unit: '',
      graphicalItemId: id,
    },
  };

  return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
}

const VennImpl = ({
  className,
  data,
  dataKey,
  nameKey,
  fill,
  stroke,
  fillOpacity,
  intersectionFillOpacity,
  onClick,
  onMouseEnter,
  onMouseLeave,
  id,
  children,
}: InternalVennProps) => {
  const width = useChartWidth();
  const height = useChartHeight();
  const dispatch = useAppDispatch();
  const [hoveredAreaIndex, setHoveredAreaIndex] = useState<TooltipIndex | null>(null);
  const tooltipNameKey: DataKey<VennDataItem, string> = nameKey ?? getDefaultIntersectionName;

  const rendered = useMemo(() => {
    if (width == null || height == null) {
      return null;
    }

    const normalizedAreasPreFill = data
      .map((datum, index): NormalizedVennArea | null => {
        const sets = getSets(datum);
        if (sets.length === 0) {
          return null;
        }

        const value = getNumericDataValue(datum, dataKey);
        if (value <= 0) {
          return null;
        }

        const indexAsTooltipIndex: TooltipIndex = `[${index}]`;
        const labelFromKey = getLabel(datum, nameKey);
        const derivedLabel = labelFromKey ?? (sets.length === 1 ? sets[0] : undefined);
        const explicitFill = datum.fill ?? datum.color;

        return {
          index,
          sets: [...sets].sort(),
          size: value,
          tooltipIndex: indexAsTooltipIndex,
          fill,
          explicitFill,
          datum,
          label: derivedLabel,
        };
      })
      .filter(isNotNil);

    const singletonAreasPreFill = normalizedAreasPreFill.filter(area => area.sets.length === 1);
    const setColorMap = new Map<string, string>();
    singletonAreasPreFill.forEach((area, index) => {
      const setId = area.sets[0];
      if (setId == null) {
        return;
      }
      setColorMap.set(setId, area.explicitFill ?? getPaletteColor(index));
    });

    const normalizedAreas: ReadonlyArray<NormalizedVennArea> = normalizedAreasPreFill.map((area, index) => {
      if (area.explicitFill != null) {
        return {
          ...area,
          fill: area.explicitFill,
        };
      }

      if (area.sets.length === 1) {
        const setId = area.sets[0];
        return {
          ...area,
          fill: setId != null ? (setColorMap.get(setId) ?? getPaletteColor(index)) : getPaletteColor(index),
        };
      }

      const setColors = area.sets.map(setId => setColorMap.get(setId)).filter(isNotNil);
      const blended = blendHexColors(setColors);
      return {
        ...area,
        fill: blended ?? getPaletteColor(index),
      };
    });

    const singletonAreas = normalizedAreas.filter(area => area.sets.length === 1);
    const pairAreasMap = new Map<string, NormalizedVennArea>();
    normalizedAreas
      .filter(area => area.sets.length === 2)
      .forEach(area => {
        pairAreasMap.set(areaKey(area.sets), area);
      });

    const circles = layoutVennCircles(singletonAreas, pairAreasMap, width, height);
    const circlesBySet = new Map(circles.map(circle => [circle.setId, circle]));

    const sortedAreas = [...normalizedAreas].sort((left, right) => left.sets.length - right.sets.length);
    const renderedAreas: ReadonlyArray<RenderedArea> = sortedAreas
      .map(area => {
        const coordinate = getAreaCoordinate(area.sets, circlesBySet);
        if (coordinate == null) {
          return null;
        }

        return {
          area,
          coordinate,
        };
      })
      .filter(isNotNil);

    const positions = new Map<TooltipIndex, ChartCoordinate>(
      renderedAreas.map(item => [item.area.tooltipIndex, item.coordinate]),
    );

    return {
      circles,
      circlesBySet,
      renderedAreas,
      positions,
    };
  }, [data, dataKey, fill, height, nameKey, width]);

  if (width == null || height == null || rendered == null) {
    return null;
  }

  const { circles, circlesBySet, renderedAreas, positions } = rendered;
  const layerClassName = clsx('recharts-venn', className);

  const setClipPathIds = new Map<string, string>(
    circles.map((circle, index) => [circle.setId, `${id}-clip-${index}-${toSvgSafeId(circle.setId)}`]),
  );

  return (
    <Surface width={width} height={height}>
      <defs>
        {circles.map(circle => {
          const clipPathId = setClipPathIds.get(circle.setId);
          if (clipPathId == null) {
            return null;
          }
          return (
            <clipPath id={clipPathId} key={`clip-path-${circle.setId}`}>
              <circle cx={circle.x} cy={circle.y} r={circle.radius} />
            </clipPath>
          );
        })}
      </defs>
      <Layer className={layerClassName}>
        {renderedAreas.map(({ area, coordinate }) => {
          const isSingleSet = area.sets.length === 1;
          const opacity = isSingleSet ? fillOpacity : intersectionFillOpacity;
          const shape = isSingleSet
            ? (() => {
                const setId = area.sets[0];
                if (setId == null) {
                  return null;
                }
                const circle = circlesBySet.get(setId);
                if (circle == null) {
                  return null;
                }
                return (
                  <circle
                    cx={circle.x}
                    cy={circle.y}
                    r={circle.radius}
                    className="recharts-venn-set"
                    fill={area.fill}
                    stroke={stroke}
                  />
                );
              })()
            : renderAreaShape(area, circlesBySet, setClipPathIds, 'recharts-venn-intersection');

          if (shape == null) {
            return null;
          }

          return (
            <g
              key={`venn-area-${area.tooltipIndex}`}
              opacity={opacity}
              onMouseEnter={event => {
                setHoveredAreaIndex(area.tooltipIndex);
                onMouseEnter?.(area.datum, event);
                dispatch(
                  setActiveMouseOverItemIndex({
                    activeIndex: area.tooltipIndex,
                    activeDataKey: dataKey,
                    activeCoordinate: coordinate,
                    activeGraphicalItemId: id,
                  }),
                );
              }}
              onMouseLeave={event => {
                setHoveredAreaIndex(null);
                onMouseLeave?.(area.datum, event);
                dispatch(mouseLeaveItem());
              }}
              onClick={() => {
                onClick?.(area.datum);
                dispatch(
                  setActiveClickItemIndex({
                    activeIndex: area.tooltipIndex,
                    activeDataKey: dataKey,
                    activeCoordinate: coordinate,
                    activeGraphicalItemId: id,
                  }),
                );
              }}
            >
              {shape}
            </g>
          );
        })}
        {renderedAreas.map(({ area, coordinate }) => {
          const { label, tooltipIndex } = area;
          if (label == null || label.length === 0) {
            return null;
          }
          const labelCoordinate = getTweakedLabelCoordinate(
            area,
            coordinate,
            circlesBySet,
            renderedAreas.map(item => item.area),
          );

          return (
            <text
              key={`venn-label-${tooltipIndex}`}
              x={labelCoordinate.x}
              y={labelCoordinate.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#000000"
              className="recharts-venn-label"
              style={{ pointerEvents: 'none', fontFamily: vennSansFontFamily }}
            >
              {label}
            </text>
          );
        })}
        {(() => {
          const hoveredArea = renderedAreas.find(areaNode => areaNode.area.tooltipIndex === hoveredAreaIndex);
          if (hoveredArea == null || hoveredArea.area.sets.length < 2) {
            return null;
          }
          return renderIntersectionOutline(hoveredArea.area, circlesBySet, setClipPathIds);
        })()}
      </Layer>
      <SetVennTooltipEntrySettings
        data={data}
        dataKey={dataKey}
        nameKey={tooltipNameKey}
        id={id}
        positions={positions}
        fill={fill}
        stroke={stroke}
      />
      {children}
    </Surface>
  );
};

/**
 * Venn charts visualize overlap between two or more sets.
 * Pass data in venn.js format where each item defines a set or an intersection.
 *
 * @consumes ResponsiveContainerContext
 * @provides TooltipEntrySettings
 */
export const Venn = (outsideProps: VennProps) => {
  const props = resolveDefaultProps(outsideProps, defaultVennProps);
  const { width, height, responsive, className, style, id: externalId, margin, throttleDelay, throttledEvents } = props;
  const wrapperStyle = {
    fontFamily: vennSansFontFamily,
    ...style,
  };
  const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);

  return (
    <RechartsStoreProvider
      preloadedState={{
        options,
      }}
      reduxStoreName={className ?? 'Venn'}
    >
      <ReportChartSize width={width} height={height} />
      <ReportChartMargin margin={margin} />
      <ReportEventSettings throttleDelay={throttleDelay} throttledEvents={throttledEvents} />
      <TooltipPortalContext.Provider value={tooltipPortal}>
        <RechartsWrapper
          className={className}
          width={width}
          height={height}
          responsive={responsive}
          style={wrapperStyle}
          ref={(node: HTMLDivElement) => {
            if (tooltipPortal == null && node != null) {
              setTooltipPortal(node);
            }
          }}
          onMouseEnter={undefined}
          onMouseLeave={undefined}
          onClick={undefined}
          onMouseMove={undefined}
          onMouseDown={undefined}
          onMouseUp={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onTouchStart={undefined}
          onTouchMove={undefined}
          onTouchEnd={undefined}
        >
          <RegisterGraphicalItemId id={externalId} type="venn">
            {id => <VennImpl {...props} id={id} />}
          </RegisterGraphicalItemId>
        </RechartsWrapper>
      </TooltipPortalContext.Provider>
    </RechartsStoreProvider>
  );
};

import { CSSProperties } from 'react';
import { getStringSize } from '../DOMUtils';

type Rectangle = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

type Point = {
  x: number;
  y: number;
};

type CollisionShape = {
  center: Point;
  halfWidth: number;
  halfHeight: number;
  angle: number;
  aabb: Rectangle;
};

export interface WordCloudCandidate<DataPointType> {
  payload: DataPointType;
  text: string;
  value: number;
  fontSize: number;
  rotate: number;
  padding: number;
  fill: string;
  fontFamily?: CSSProperties['fontFamily'];
  fontStyle?: CSSProperties['fontStyle'];
  fontWeight?: CSSProperties['fontWeight'];
  tooltipIndex: string;
}

export interface WordCloudLayoutItem<DataPointType> extends WordCloudCandidate<DataPointType> {
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
}

export type WordCloudSpiralType = 'archimedean' | 'rectangular';

export interface ComputeWordCloudLayoutOptions {
  width: number;
  height: number;
  spiral: WordCloudSpiralType;
  seed: number;
}

function normalizeFontSizeRange(minFontSize: number, maxFontSize: number): { min: number; max: number } {
  const min = Number.isFinite(minFontSize) ? minFontSize : 0;
  const max = Number.isFinite(maxFontSize) ? maxFontSize : 0;

  if (min <= max) {
    return { min, max };
  }

  return { min: max, max: min };
}

function getFontSize(
  value: number,
  minValue: number,
  maxValue: number,
  minFontSize: number,
  maxFontSize: number,
): number {
  if (maxValue === minValue) {
    return (minFontSize + maxFontSize) / 2;
  }

  const ratio = (value - minValue) / (maxValue - minValue);
  return minFontSize + ratio * (maxFontSize - minFontSize);
}

function getRotatedBounds(width: number, height: number, rotate: number): { width: number; height: number } {
  const angle = (rotate * Math.PI) / 180;
  const cos = Math.abs(Math.cos(angle));
  const sin = Math.abs(Math.sin(angle));

  return {
    width: width * cos + height * sin,
    height: width * sin + height * cos,
  };
}

function isInsideBounds(candidate: Rectangle, width: number, height: number): boolean {
  return candidate.left >= 0 && candidate.top >= 0 && candidate.right <= width && candidate.bottom <= height;
}

function rectanglesOverlap(a: Rectangle, b: Rectangle): boolean {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function toRectangle(x: number, y: number, width: number, height: number, padding: number): Rectangle {
  return {
    left: x - width / 2 - padding,
    right: x + width / 2 + padding,
    top: y - height / 2 - padding,
    bottom: y + height / 2 + padding,
  };
}

function getCollisionPadding(padding: number, fontSize: number): number {
  return Math.max(padding, fontSize * 0.02);
}

function getCollisionBoxSize(width: number, height: number, padding: number): { width: number; height: number } {
  return {
    width: width * 0.84 + padding * 1.4,
    height: height * 0.7 + padding * 1.4,
  };
}

function createDeterministicRandom(seed: number): () => number {
  let state = seed >>> 0 || 1;

  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getInitialPosition(width: number, height: number, random: () => number): Point {
  return {
    x: (width * (random() + 0.5)) / 2,
    y: (height * (random() + 0.5)) / 2,
  };
}

type SpiralPositioner = (stepIndex: number) => { x: number; y: number };

function createArchimedeanPositioner(
  width: number,
  height: number,
  originX: number,
  originY: number,
  direction: 1 | -1,
): SpiralPositioner {
  const aspectRatio = width / height;

  return (stepIndex: number) => {
    if (stepIndex === 0) {
      return { x: originX, y: originY };
    }

    const theta = direction * stepIndex * 0.1;

    return {
      x: originX + aspectRatio * theta * Math.cos(theta),
      y: originY + theta * Math.sin(theta),
    };
  };
}

function createRectangularPositioner(
  width: number,
  height: number,
  originX: number,
  originY: number,
  direction: 1 | -1,
): SpiralPositioner {
  const verticalStep = 4;
  const horizontalStep = (verticalStep * width) / height;
  let offsetX = 0;
  let offsetY = 0;

  return (stepIndex: number) => {
    if (stepIndex === 0) {
      return { x: originX, y: originY };
    }

    const t = direction * stepIndex;
    const sign = t < 0 ? -1 : 1;

    switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
      case 0:
        offsetX += horizontalStep;
        break;
      case 1:
        offsetY += verticalStep;
        break;
      case 2:
        offsetX -= horizontalStep;
        break;
      default:
        offsetY -= verticalStep;
        break;
    }

    return {
      x: originX + offsetX,
      y: originY + offsetY,
    };
  };
}

function createSpiralPositioner(
  spiral: WordCloudSpiralType,
  width: number,
  height: number,
  originX: number,
  originY: number,
  direction: 1 | -1,
): SpiralPositioner {
  if (spiral === 'rectangular') {
    return createRectangularPositioner(width, height, originX, originY, direction);
  }

  return createArchimedeanPositioner(width, height, originX, originY, direction);
}

function rotatePoint(point: Point, angle: number): Point {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return {
    x: point.x * cos - point.y * sin,
    y: point.x * sin + point.y * cos,
  };
}

function dotProduct(a: Point, b: Point): number {
  return a.x * b.x + a.y * b.y;
}

function getCollisionShapeCorners(shape: CollisionShape): ReadonlyArray<Point> {
  const localCorners = [
    { x: -shape.halfWidth, y: -shape.halfHeight },
    { x: shape.halfWidth, y: -shape.halfHeight },
    { x: shape.halfWidth, y: shape.halfHeight },
    { x: -shape.halfWidth, y: shape.halfHeight },
  ];

  return localCorners.map(corner => {
    const rotatedCorner = rotatePoint(corner, shape.angle);

    return {
      x: rotatedCorner.x + shape.center.x,
      y: rotatedCorner.y + shape.center.y,
    };
  });
}

function getCollisionAxes(shape: CollisionShape): ReadonlyArray<Point> {
  return [
    { x: Math.cos(shape.angle), y: Math.sin(shape.angle) },
    { x: -Math.sin(shape.angle), y: Math.cos(shape.angle) },
  ];
}

function projectShapeOntoAxis(shape: CollisionShape, axis: Point): { min: number; max: number } {
  const corners = getCollisionShapeCorners(shape);
  let min = Infinity;
  let max = -Infinity;

  corners.forEach(corner => {
    const projection = dotProduct(corner, axis);
    min = Math.min(min, projection);
    max = Math.max(max, projection);
  });

  return { min, max };
}

function projectionsOverlap(
  projectionA: { min: number; max: number },
  projectionB: { min: number; max: number },
): boolean {
  return projectionA.min < projectionB.max && projectionA.max > projectionB.min;
}

function collisionShapesOverlap(a: CollisionShape, b: CollisionShape): boolean {
  if (!rectanglesOverlap(a.aabb, b.aabb)) {
    return false;
  }

  const axes = [...getCollisionAxes(a), ...getCollisionAxes(b)];

  return axes.every(axis => {
    const projectionA = projectShapeOntoAxis(a, axis);
    const projectionB = projectShapeOntoAxis(b, axis);

    return projectionsOverlap(projectionA, projectionB);
  });
}

function createCollisionShape(
  x: number,
  y: number,
  width: number,
  height: number,
  rotate: number,
  padding: number,
): CollisionShape {
  const collisionBox = getCollisionBoxSize(width, height, padding);
  const rotatedBounds = getRotatedBounds(collisionBox.width, collisionBox.height, rotate);

  return {
    center: { x, y },
    halfWidth: collisionBox.width / 2,
    halfHeight: collisionBox.height / 2,
    angle: (rotate * Math.PI) / 180,
    aabb: toRectangle(x, y, rotatedBounds.width, rotatedBounds.height, 0),
  };
}

function canPlaceShape(
  candidate: CollisionShape,
  width: number,
  height: number,
  placedShapes: ReadonlyArray<CollisionShape>,
): boolean {
  if (!isInsideBounds(candidate.aabb, width, height)) {
    return false;
  }

  return !placedShapes.some(placedShape => collisionShapesOverlap(placedShape, candidate));
}

export function computeWordCloudLayout<DataPointType>(
  candidates: ReadonlyArray<WordCloudCandidate<DataPointType>>,
  options: ComputeWordCloudLayoutOptions,
): ReadonlyArray<WordCloudLayoutItem<DataPointType>> {
  const { width, height, spiral, seed } = options;

  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    return [];
  }

  const validCandidates = candidates
    .filter(candidate => Number.isFinite(candidate.value) && candidate.value > 0 && candidate.text.length > 0)
    .sort((a, b) => {
      if (b.value !== a.value) {
        return b.value - a.value;
      }

      return a.tooltipIndex.localeCompare(b.tooltipIndex);
    });

  if (validCandidates.length === 0) {
    return [];
  }

  const maxSteps = Math.max(1200, Math.ceil(Math.hypot(width, height) * 18), validCandidates.length * 320);
  const placedShapes: CollisionShape[] = [];
  const placedWords: WordCloudLayoutItem<DataPointType>[] = [];
  const random = createDeterministicRandom(seed);

  validCandidates.forEach(candidate => {
    const textSize = getStringSize(candidate.text, {
      fontFamily: candidate.fontFamily,
      fontStyle: candidate.fontStyle,
      fontWeight: candidate.fontWeight,
      fontSize: `${candidate.fontSize}px`,
    });
    const collisionPadding = getCollisionPadding(candidate.padding, candidate.fontSize);
    const initialPosition = getInitialPosition(width, height, random);
    const direction = random() > 0.5 ? 1 : -1;
    const getPosition = createSpiralPositioner(spiral, width, height, initialPosition.x, initialPosition.y, direction);

    for (let stepIndex = 0; stepIndex < maxSteps; stepIndex += 1) {
      const { x, y } = getPosition(stepIndex);
      const collisionShape = createCollisionShape(
        x,
        y,
        textSize.width,
        textSize.height,
        candidate.rotate,
        collisionPadding,
      );

      if (!canPlaceShape(collisionShape, width, height, placedShapes)) {
        continue;
      }

      placedShapes.push(collisionShape);
      placedWords.push({
        ...candidate,
        x,
        y,
        width: collisionShape.aabb.right - collisionShape.aabb.left,
        height: collisionShape.aabb.bottom - collisionShape.aabb.top,
        fontSize: candidate.fontSize,
      });
      break;
    }
  });

  return placedWords;
}

export { getFontSize, normalizeFontSizeRange };

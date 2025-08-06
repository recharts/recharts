import React, { useContext, useEffect, useState } from 'react';
import { AnimationManagerControlsContext, useRechartsInspectorState } from './RechartsInspectorDecorator';
import { useAllAnimationManagers } from '../../test/animation/CompositeAnimationManager';
import { MockAnimationManager } from '../../test/animation/MockProgressAnimationManager';

const useAnimationProgress = (allAnimationManagers: Map<string, MockAnimationManager>) => {
  const [progressMap, setProgressMap] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    setProgressMap(prev => {
      const newMap = new Map<string, number>();
      // eslint-disable-next-line no-restricted-syntax
      for (const animationId of allAnimationManagers.keys()) {
        newMap.set(animationId, prev.get(animationId) ?? 0);
      }
      return newMap;
    });
  }, [allAnimationManagers]);

  const setProgress = async (progress: number, animationId?: string) => {
    const safeProgress = Math.min(0.999, progress);
    if (animationId) {
      const manager = allAnimationManagers.get(animationId);
      if (manager) {
        await manager.setAnimationProgress(safeProgress);
        setProgressMap(prev => new Map(prev).set(animationId, progress));
      }
    } else {
      const promises: Promise<void>[] = [];
      const newProgressMap = new Map(progressMap);
      // eslint-disable-next-line no-restricted-syntax
      for (const [id, manager] of allAnimationManagers.entries()) {
        promises.push(manager.setAnimationProgress(safeProgress));
        newProgressMap.set(id, progress);
      }
      await Promise.all(promises);
      setProgressMap(newProgressMap);
    }
  };

  return { progressMap, setProgress };
};

function SingleAnimationControl({
  animationId,
  progress,
  onProgressChange,
  onComplete,
}: {
  animationId: string;
  progress: number;
  onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onComplete: (e: React.MouseEvent) => void;
}) {
  const inputId = `animation-progress-${animationId}`;

  return (
    <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
      <label htmlFor={inputId}>Animation {animationId}:</label>
      <input
        type="range"
        id={inputId}
        min={0}
        max={1}
        step={0.001}
        value={progress}
        onChange={onProgressChange}
        style={{ width: 200, marginLeft: 8 }}
      />
      <span style={{ marginLeft: 8, width: 40 }}>{Math.round(progress * 100)}%</span>
      <button type="button" onClick={onComplete}>
        Finish animation
      </button>
    </div>
  );
}

export function ManualAnimations() {
  const compositeAnimationManager = useContext(AnimationManagerControlsContext);
  const allAnimationManagers = useAllAnimationManagers(compositeAnimationManager);
  const { manualAnimationsEnabled } = useRechartsInspectorState();
  const { progressMap, setProgress } = useAnimationProgress(allAnimationManagers);

  if (!manualAnimationsEnabled) {
    return null;
  }

  if (allAnimationManagers.size === 0) {
    return <p>No animations are active</p>;
  }

  const handleProgressChange = (animationId: string) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    await setProgress(value, animationId);
  };

  const completeAnimation = (animationId: string) => async (e: React.MouseEvent) => {
    e.preventDefault();
    await setProgress(1, animationId);
  };

  const completeAll = async (e: React.MouseEvent) => {
    e.preventDefault();
    await setProgress(1);
  };

  const resetAll = async (e: React.MouseEvent) => {
    e.preventDefault();
    await setProgress(0);
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h3>Manual Animations</h3>
      {Array.from(allAnimationManagers.keys()).map(animationId => (
        <SingleAnimationControl
          key={animationId}
          animationId={animationId}
          progress={progressMap.get(animationId) ?? 0}
          onProgressChange={handleProgressChange(animationId)}
          onComplete={completeAnimation(animationId)}
        />
      ))}
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <button type="button" onClick={completeAll}>
          Finish all animations
        </button>
        <button type="button" onClick={resetAll}>
          Reset all animations
        </button>
      </div>
    </form>
  );
}

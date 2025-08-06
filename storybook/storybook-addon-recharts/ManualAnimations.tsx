import React, { useContext, useState } from 'react';
import { AnimationManagerControlsContext, useRechartsInspectorState } from './RechartsInspectorDecorator';
import { useAllAnimationManagers } from '../../test/animation/CompositeAnimationManager';
import { MockAnimationManager } from '../../test/animation/MockProgressAnimationManager';

function SingleAnimationControl({
  animationId,
  animationManager,
}: {
  animationId: string;
  animationManager: MockAnimationManager;
}) {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    await animationManager.setAnimationProgress(Math.min(0.999, value));
    setProgress(value);
  };

  const completeAnimation = async (e: React.MouseEvent) => {
    e.preventDefault();
    await animationManager.setAnimationProgress(1);
    setProgress(1);
  };

  const inputId = `animation-progress-${animationId}`;

  return (
    <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
      <label htmlFor={inputId}>Animation {animationId}:</label>
      <input
        type="range"
        id={inputId}
        min={0}
        max={1}
        step={0.1}
        value={progress}
        onChange={handleProgressChange}
        style={{ width: 200, marginLeft: 8 }}
      />
      <span style={{ marginLeft: 8 }}>{progress * 100}%</span>
      <button type="button" onClick={completeAnimation}>
        Finish animation
      </button>
    </div>
  );
}

export function ManualAnimations() {
  const compositeAnimationManager = useContext(AnimationManagerControlsContext);
  const allAnimationManagers = useAllAnimationManagers(compositeAnimationManager);
  const { manualAnimationsEnabled } = useRechartsInspectorState();

  if (!manualAnimationsEnabled) {
    return null;
  }

  if (allAnimationManagers.size === 0) {
    return <p>No animations are active</p>;
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h3>Manual Animations</h3>
      {Array.from(allAnimationManagers.entries()).map(([animationId, animationManager]) => (
        <SingleAnimationControl key={animationId} animationId={animationId} animationManager={animationManager} />
      ))}
    </form>
  );
}

import React, { useContext, useState } from 'react';
import { AnimationManagerControlsContext, useRechartsInspectorState } from './RechartsInspectorDecorator';

export function ManualAnimations() {
  const [progress, setProgress] = useState(0);
  const animationManager = useContext(AnimationManagerControlsContext);
  const { manualAnimationsEnabled } = useRechartsInspectorState();

  const handleProgressChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    /*
     * If we actually set the value to 1 then the animationManager automatically jumps to the next callback
     * and we can't rewind anymore so let's stop at 0.999
     */
    await animationManager.setAnimationProgress(Math.min(0.999, value));
    setProgress(value);
  };

  const completeAnimation = async (e: React.MouseEvent) => {
    e.preventDefault();
    await animationManager.setAnimationProgress(1);
    setProgress(1);
  };

  if (!manualAnimationsEnabled) {
    return null;
  }
  return (
    <form>
      <h3>Manual Animations</h3>
      <label htmlFor="animation-progress">
        Animation Progress:
        <input
          type="range"
          id="animation-progress"
          min={0}
          max={1}
          step={0.1}
          value={progress}
          onChange={handleProgressChange}
          style={{ width: 200, marginLeft: 8 }}
        />
        <span style={{ marginLeft: 8 }}>{progress * 100}%</span>
      </label>
      <button type="button" onClick={completeAnimation}>
        Finish animation
      </button>
    </form>
  );
}

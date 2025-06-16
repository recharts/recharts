import React, { useState } from 'react';
import { MockProgressAnimationManager } from '../../test/animation/MockProgressAnimationManager';
import { AnimationManager } from '../../src/animation/AnimationManager';
import { AnimationManagerContext } from '../../src/animation/Animate';

type Props = {
  isEnabled: boolean;
  children: React.ReactNode;
};

class ManualAnimationManager extends MockProgressAnimationManager implements AnimationManager {}
const animationManager = new ManualAnimationManager();

export function ManualAnimations({ isEnabled, children }: Props) {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setProgress(value);
    /*
     * If we actually set the value to 1 then the animationManager automatically jumps to the next callback
     * and we can't rewind anymore so let's stop at 0.999
     */
    animationManager.setAnimationProgress(Math.min(0.999, value));
  };

  const completeAnimation = (e: React.MouseEvent) => {
    e.preventDefault();
    setProgress(1);
    animationManager.setAnimationProgress(1);
  };

  if (!isEnabled) {
    return children;
  }
  return (
    <AnimationManagerContext.Provider value={animationManager}>
      {/* div to force vertical stacking */}
      <div>
        {children}
        <form>
          <h3>Manual Animations</h3>
          <p>
            Use the buttons below to control the animations manually. This is useful for testing and debugging
            animations in Recharts.
          </p>
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
      </div>
    </AnimationManagerContext.Provider>
  );
}

import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import {
  ReferenceLineAnimationTest,
  ReferenceAreaAnimationTest,
  CombinedReferenceAnimationTest,
} from './ReferenceAnimationComponents';

test.describe('ReferenceLine animation', () => {
  test('should render at initial position', async ({ mount }) => {
    const component = await mount(<ReferenceLineAnimationTest />);
    await expect(component).toHaveScreenshot();
  });

  test('should animate to new position after clicking move right', async ({ mount, page }) => {
    const component = await mount(<ReferenceLineAnimationTest />);

    // Initial state
    await expect(component.getByTestId('position')).toHaveText('2');

    // Click move right
    await component.getByTestId('move-right').click();
    await expect(component.getByTestId('position')).toHaveText('4');

    // Wait for animation to complete
    await page.waitForTimeout(350);
    await expect(component).toHaveScreenshot();
  });

  test('should animate to new position after clicking move left', async ({ mount, page }) => {
    const component = await mount(<ReferenceLineAnimationTest />);

    // Move right first
    await component.getByTestId('move-right').click();
    await component.getByTestId('move-right').click();
    await page.waitForTimeout(350);

    // Now move left
    await component.getByTestId('move-left').click();
    await expect(component.getByTestId('position')).toHaveText('4');

    // Wait for animation to complete
    await page.waitForTimeout(350);
    await expect(component).toHaveScreenshot();
  });
});

test.describe('ReferenceArea animation', () => {
  test('should render at initial position', async ({ mount }) => {
    const component = await mount(<ReferenceAreaAnimationTest />);
    await expect(component).toHaveScreenshot();
  });

  test('should animate when sliding right', async ({ mount, page }) => {
    const component = await mount(<ReferenceAreaAnimationTest />);

    // Initial state
    await expect(component.getByTestId('range')).toHaveText('2-5');

    // Click slide right
    await component.getByTestId('slide-right').click();
    await expect(component.getByTestId('range')).toHaveText('4-7');

    // Wait for animation to complete
    await page.waitForTimeout(350);
    await expect(component).toHaveScreenshot();
  });

  test('should animate when sliding left', async ({ mount, page }) => {
    const component = await mount(<ReferenceAreaAnimationTest />);

    // Move right first
    await component.getByTestId('slide-right').click();
    await page.waitForTimeout(350);

    // Now slide left
    await component.getByTestId('slide-left').click();

    // Wait for animation to complete
    await page.waitForTimeout(350);
    await expect(component).toHaveScreenshot();
  });
});

test.describe('Combined Reference animation with Line animationMatchBy', () => {
  test('should render at initial position', async ({ mount }) => {
    const component = await mount(<CombinedReferenceAnimationTest />);
    await expect(component).toHaveScreenshot();
  });

  test('should animate all elements together when moving', async ({ mount, page }) => {
    const component = await mount(<CombinedReferenceAnimationTest />);

    // Initial state
    await expect(component.getByTestId('position')).toHaveText('5');

    // Click move right
    await component.getByTestId('move-right').click();
    await expect(component.getByTestId('position')).toHaveText('7');

    // Wait for animation to complete
    await page.waitForTimeout(350);
    await expect(component).toHaveScreenshot();
  });

  test('should animate smoothly when moving left', async ({ mount, page }) => {
    const component = await mount(<CombinedReferenceAnimationTest />);

    // Move left
    await component.getByTestId('move-left').click();
    await expect(component.getByTestId('position')).toHaveText('3');

    // Wait for animation to complete
    await page.waitForTimeout(350);
    await expect(component).toHaveScreenshot();
  });
});

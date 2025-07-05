import React from 'react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { LineChart, Tooltip } from '../../../src';
import { TooltipSettingsState, tooltipReducer, initialState, clearClickTooltip } from '../../../src/state/tooltipSlice';

describe('Tooltip state integration', () => {
  describe('with explicit settings', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={1} height={1}>
        <Tooltip shared trigger="click" axisId="my-axis-id" active defaultIndex={4} />
        {children}
      </LineChart>
    ));

    test('should publish its settings to Redux store', () => {
      const { spy } = renderTestCase(state => state.tooltip.settings);
      const expected: TooltipSettingsState = {
        axisId: 'my-axis-id',
        shared: true,
        trigger: 'click',
        active: true,
        defaultIndex: '4',
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });
  });

  describe('with default settings', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={1} height={1}>
        <Tooltip />
        {children}
      </LineChart>
    ));

    test('should publish its settings to Redux store', () => {
      const { spy } = renderTestCase(state => state.tooltip.settings);
      const expected: TooltipSettingsState = {
        active: undefined,
        axisId: 0,
        defaultIndex: undefined,
        shared: undefined,
        trigger: 'hover',
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });
  });

  describe('with implicit settings', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={1} height={1}>
        {children}
      </LineChart>
    ));

    test('should read initial settings from Redux store', () => {
      const { spy } = renderTestCase(state => state.tooltip.settings);
      const expected: TooltipSettingsState = {
        active: false,
        axisId: 0,
        defaultIndex: undefined,
        shared: undefined,
        trigger: 'hover',
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });
  });
});

describe('tooltipSlice reducers', () => {
  it('should clear click-triggered tooltip state on clearClickTooltip', () => {
    const prevState = {
      ...initialState,
      itemInteraction: {
        ...initialState.itemInteraction,
        click: { ...initialState.itemInteraction.click, active: true },
      },
      axisInteraction: {
        ...initialState.axisInteraction,
        click: { ...initialState.axisInteraction.click, active: true },
      },
    };
    const nextState = tooltipReducer(prevState, clearClickTooltip());
    expect(nextState.itemInteraction.click.active).toBe(false);
    expect(nextState.axisInteraction.click.active).toBe(false);
  });
});

import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { NameType, Payload, ValueType } from '../component/DefaultTooltipContent';

/**
 * One Tooltip can display multiple TooltipPayloadEntries at a time.
 */
export type TooltipPayloadEntry = Payload<ValueType, NameType>;

/**
 * So what happens is that the tooltip payload is decided based on the available data, and the dataKey.
 * The dataKey can either be defined on the graphical element (like Line, or Bar)
 * or on the tooltip itself.
 *
 * The data can be defined in the chart element, or in the graphical item.
 *
 * So this type is all the settings, other than the data + dataKey complications.
 */
export type TooltipEntrySettings = Omit<TooltipPayloadEntry, 'payload' | 'value'>;

/**
 * This is what Tooltip renders.
 */
export type TooltipPayload = ReadonlyArray<TooltipPayloadEntry>;

type TooltipIndex = number;

export type TooltipPayloadConfiguration = {
  // This is the data that is the same for all tooltip payloads, regardless of activeIndex
  settings: TooltipEntrySettings;
  // This is the data that changes for each index
  dataDefinedOnItem: unknown[] | undefined;
};

export type TooltipState = {
  /**
   * This is the current data index that is set for the chart.
   * This can come from mouse events, keyboard events, or hardcoded in props
   * in property `defaultIndex` on Tooltip.
   */
  activeIndex: TooltipIndex;
  /**
   * One graphical item will have one configuration;
   * hovering over multiple of them (for example with tooltipEventType===axis)
   * may render multiple tooltip payloads.
   */
  tooltipItemPayloads: ReadonlyArray<TooltipPayloadConfiguration>;
};

const initialState: TooltipState = {
  activeIndex: -1,
  tooltipItemPayloads: [],
};

const tooltipSlice = createSlice({
  name: 'tooltip',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    addTooltipEntrySettings(state, action: PayloadAction<TooltipPayloadConfiguration>) {
      state.tooltipItemPayloads.push(action.payload);
    },
    removeTooltipEntrySettings(state, action: PayloadAction<TooltipPayloadConfiguration>) {
      const index = current(state).tooltipItemPayloads.indexOf(action.payload);
      if (index > -1) {
        state.tooltipItemPayloads.splice(index, 1);
      }
    },
    setActiveTooltipIndex(state, action: PayloadAction<TooltipIndex>) {
      state.activeIndex = action.payload;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { addTooltipEntrySettings, removeTooltipEntrySettings, setActiveTooltipIndex } = tooltipSlice.actions;

export const tooltipReducer = tooltipSlice.reducer;

import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { NameType, Payload, ValueType } from '../component/DefaultTooltipContent';
import { DataKey } from '../util/types';

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

/**
 * The tooltip interaction state stores:
 *
 * - Which graphical item is user interacting with at the moment,
 * - which axis (or, which part of chart background) is user interacting with at the moment
 * - The data that individual graphical items wish to be displayed in case the tooltip gets activated
 */
export type TooltipState = {
  /**
   * This is the state of interactions with individual graphical items.
   */
  itemInteraction: {
    /**
     * This is the current data index that is set for the chart.
     * This can come from mouse events, keyboard events, or hardcoded in props
     * in property `defaultIndex` on Tooltip.
     *
     * This is only set for mouse hover.
     *
     * If there is nothing hovering over a chart item right now then this is -1.
     */
    activeMouseOverIndex: TooltipIndex;
    /**
     * In case of multiple graphical items, this is the dataKey that is set for the item.
     * Very useful for `Tooltip.shared=false`, where activeIndex can display multiple values,
     * but we only want to display one of them.
     *
     * This is only set for mouse hover.
     *
     * If there is nothing hovering over a chart item right now then this is undefined.
     */
    activeMouseOverDataKey: DataKey<any> | undefined;
    /**
     * Same as the index above but this one only gets set by clicking on a chart item.
     */
    activeClickIndex: TooltipIndex | undefined;
    /**
     * Same as the dataKey above but this one only gets set by clicking on a chart item.
     */
    activeClickDataKey: DataKey<any> | undefined;
  };
  /**
   * This is the state of interaction with the bar background - which will get mapped
   * to the axis index.
   */
  axisInteraction: {
    activeMouseOverAxisIndex: number | undefined;
    activeMouseOverAxisDataKey: DataKey<any> | undefined;
    activeClickAxisIndex: number | undefined;
    activeClickAxisDataKey: DataKey<any> | undefined;
  };
  /**
   * One graphical item will have one configuration;
   * hovering over multiple of them (for example with tooltipEventType===axis)
   * may render multiple tooltip payloads.
   */
  tooltipItemPayloads: ReadonlyArray<TooltipPayloadConfiguration>;
};

const initialState: TooltipState = {
  itemInteraction: {
    activeMouseOverIndex: -1,
    activeMouseOverDataKey: undefined,
    activeClickIndex: -1,
    activeClickDataKey: undefined,
  },
  axisInteraction: {
    activeMouseOverAxisIndex: -1,
    activeMouseOverAxisDataKey: undefined,
    activeClickAxisIndex: -1,
    activeClickAxisDataKey: undefined,
  },
  tooltipItemPayloads: [],
};

const tooltipSlice = createSlice({
  name: 'tooltip',
  initialState,
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
    setActiveMouseOverItemIndex(
      state,
      action: PayloadAction<{ activeIndex: TooltipIndex; activeDataKey: DataKey<any> | undefined }>,
    ) {
      state.itemInteraction.activeMouseOverIndex = action.payload.activeIndex;
      state.itemInteraction.activeMouseOverDataKey = action.payload.activeDataKey;
    },
  },
});

export const { addTooltipEntrySettings, removeTooltipEntrySettings, setActiveMouseOverItemIndex } =
  tooltipSlice.actions;

export const tooltipReducer = tooltipSlice.reducer;

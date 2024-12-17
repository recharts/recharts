import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { TooltipTrigger } from '../chart/types';
import type { NameType, Payload, ValueType } from '../component/DefaultTooltipContent';
import { ChartCoordinate, DataKey } from '../util/types';
import { AxisId } from './cartesianAxisSlice';
import { SynchronisedTooltipAction } from '../synchronisation/SynchronisedAction';

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
export type TooltipEntrySettings = Omit<TooltipPayloadEntry, 'payload' | 'value'> & {
  nameKey: DataKey<any> | undefined;
};

/**
 * This is what Tooltip renders.
 */
export type TooltipPayload = ReadonlyArray<TooltipPayloadEntry>;

/**
 * null means no active index
 * string means: whichever index from the chart data it is.
 * Different charts have different requirements on data shapes,
 * and are also responsible for providing a function that will accept this index
 * and return data.
 */
export type TooltipIndex = string | null;

/**
 * Different items have different data shapes so the state has no opinion on what the data shape should be;
 * the only requirement is that the chart also provides a searcher function
 * that accepts the data, and a key, and returns whatever the payload in Tooltip should be.
 */
export type TooltipPayloadSearcher<T = unknown, R = unknown> = (
  data: T,
  index: TooltipIndex,
  computedData?: unknown,
  nameKey?: DataKey<any>,
) => R | undefined;

export type TooltipPayloadConfiguration = {
  // This is the data that is the same for all tooltip payloads, regardless of activeIndex
  settings: TooltipEntrySettings;
  /**
   * This is the data that the item has provided, all of it mixed together.
   * Later as user is interacting with the chart, a redux selector will use this
   * data + activeIndex, pass it to the TooltipPayloadSearcher, and render the result in a Tooltip.
   */
  dataDefinedOnItem: unknown;
};

export type ActiveTooltipProps = {
  activeIndex: TooltipIndex;
  activeCoordinate: ChartCoordinate | undefined;
};

export type TooltipSettingsState = {
  shared: boolean;
  trigger: TooltipTrigger;
  axisId: AxisId;
  /**
   * The `active` prop, despite its name, does not mean "always active".
   * It means "active after user interaction has ended".
   * By default, the tooltip is only active while the user is hovering over the chart.
   * With `active=true`, the tooltip will remain visible after mouse leave event.
   */
  active: boolean;
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
     * If user interaction with an item is in progress or not.
     * Why is this its own property? Why is this not computed from the index?
     * Certainly if index !== -1 then the tooltip is active, right?
     * Well not so fast. Recharts allows Tooltips can be set to `active=true`
     * which means the tooltip remains displayed after the user stops interacting.
     * - This implies that we cannot set index to -1 after interaction ends,
     *   because the chart must remember the last position just in case the `active` prop on Tooltip is set to true.
     * If we decide to change the behaviour of the tooltip in the future
     * then we might find we do not need this property but as far as keeping 2x behaviour intact, this is necessary.
     */
    activeClick: boolean;
    /**
     * The ChartCoordinate last clicked by the user. This needs saved so we can continue to render the tooltip at that point.
     */
    activeClickCoordinate: ChartCoordinate | undefined;
    /**
     * Why is hover activation separate from click activation? Because they are independent:
     * If a click is set, then mouseLeave should not clear it.
     * - the opposite is technically true too - but it's difficult to click on things without also hovering.
     */
    activeHover: boolean;
    /**
     * The ChartCoordinate last hovered by the user. Render the Tooltip at this coordinate as it updates on mouse movement.
     */
    activeMouseOverCoordinate: ChartCoordinate;
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
    activeClickIndex: TooltipIndex;
    /**
     * Same as the dataKey above but this one only gets set by clicking on a chart item.
     */
    activeClickDataKey: DataKey<any> | undefined;
  };
  /**
   * This is the state of interaction with the bar background - which will get mapped
   * to the axis index.
   *
   * Axis interaction is independent of item interaction so the state must also be independent.
   */
  axisInteraction: {
    activeClick: boolean;
    activeClickCoordinate: ChartCoordinate | undefined;
    activeHover: boolean;
    activeMouseOverCoordinate: ChartCoordinate;
    activeMouseOverAxisIndex: TooltipIndex;
    activeMouseOverAxisDataKey: DataKey<any> | undefined;
    activeClickAxisIndex: TooltipIndex;
    activeClickAxisDataKey: DataKey<any> | undefined;
  };
  /**
   * This part of the state is the information coming from other charts.
   * If there are two charts with the same syncId, events from one chart will be transferred
   * to other charts. So this is what the other charts are reporting.
   */
  syncInteraction: {
    active: boolean;
    activeCoordinate: ChartCoordinate | undefined;
    activeAxisIndex: TooltipIndex;
    activeAxisDataKey: DataKey<any> | undefined;
  };
  /**
   * One graphical item will have one configuration;
   * hovering over multiple of them (for example with tooltipEventType===axis)
   * may render multiple tooltip payloads.
   */
  tooltipItemPayloads: ReadonlyArray<TooltipPayloadConfiguration>;
  /**
   * Tooltip props or other settings that need redux access.
   * This assumes that there is always only one Tooltip. In case we want to start supporting multiple Tooltips,
   * we have to change this to an array - and update all the places reading this state too.
   */
  settings: TooltipSettingsState;
};

export const initialState: TooltipState = {
  itemInteraction: {
    activeClick: false,
    activeClickCoordinate: undefined,
    activeHover: false,
    activeMouseOverCoordinate: undefined,
    activeMouseOverIndex: null,
    activeMouseOverDataKey: undefined,
    activeClickIndex: null,
    activeClickDataKey: undefined,
  },
  axisInteraction: {
    activeClick: false,
    activeClickCoordinate: undefined,
    activeHover: false,
    activeMouseOverCoordinate: undefined,
    activeMouseOverAxisIndex: null,
    activeMouseOverAxisDataKey: undefined,
    activeClickAxisIndex: null,
    activeClickAxisDataKey: undefined,
  },
  syncInteraction: {
    active: false,
    activeCoordinate: undefined,
    activeAxisIndex: null,
    activeAxisDataKey: undefined,
  },
  tooltipItemPayloads: [],
  settings: {
    shared: false,
    trigger: 'hover',
    axisId: 0,
    active: false,
  },
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
    setTooltipSettingsState(state, action: PayloadAction<TooltipSettingsState>) {
      state.settings = action.payload;
    },
    setActiveMouseOverItemIndex(state, action: SynchronisedTooltipAction) {
      state.itemInteraction.activeHover = true;
      state.itemInteraction.activeMouseOverIndex = action.payload.activeIndex;
      state.itemInteraction.activeMouseOverDataKey = action.payload.activeDataKey;
      state.itemInteraction.activeMouseOverCoordinate = action.payload.activeCoordinate;
    },
    mouseLeaveChart(state) {
      /*
       * Clear only the active flags. Why?
       * 1. Keep Coordinate to preserve animation - next time the Tooltip appears, we want to render it from
       * the last place where it was when it disappeared.
       * 2. We want to keep all the properties anyway just in case the tooltip has `active=true` prop
       * and continues being visible even after the mouse has left the chart.
       */
      state.itemInteraction.activeHover = false;
      state.axisInteraction.activeHover = false;
    },
    mouseLeaveItem(state) {
      state.itemInteraction.activeHover = false;
    },
    setActiveClickItemIndex(state, action: SynchronisedTooltipAction) {
      state.itemInteraction.activeClick = true;
      state.itemInteraction.activeClickIndex = action.payload.activeIndex;
      state.itemInteraction.activeClickDataKey = action.payload.activeDataKey;
      state.itemInteraction.activeClickCoordinate = action.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(state, action: SynchronisedTooltipAction) {
      state.axisInteraction.activeHover = true;
      state.axisInteraction.activeMouseOverAxisIndex = action.payload.activeIndex;
      state.axisInteraction.activeMouseOverAxisDataKey = action.payload.activeDataKey;
      state.axisInteraction.activeMouseOverCoordinate = action.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(state, action: SynchronisedTooltipAction) {
      state.axisInteraction.activeClick = true;
      state.axisInteraction.activeClickAxisIndex = action.payload.activeIndex;
      state.axisInteraction.activeClickAxisDataKey = action.payload.activeDataKey;
      state.axisInteraction.activeClickCoordinate = action.payload.activeCoordinate;
    },
    setSyncInteraction(state, action: SynchronisedTooltipAction) {
      state.syncInteraction.activeCoordinate = action.payload.activeCoordinate;
      state.syncInteraction.activeAxisIndex = action.payload.activeIndex;
      state.syncInteraction.activeAxisDataKey = action.payload.activeDataKey;
    },
  },
});

export const {
  addTooltipEntrySettings,
  removeTooltipEntrySettings,
  setTooltipSettingsState,
  setActiveMouseOverItemIndex,
  mouseLeaveItem,
  mouseLeaveChart,
  setActiveClickItemIndex,
  setMouseOverAxisIndex,
  setMouseClickAxisIndex,
  setSyncInteraction,
} = tooltipSlice.actions;

export const tooltipReducer = tooltipSlice.reducer;

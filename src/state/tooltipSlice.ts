import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { TooltipTrigger } from '../chart/types';
import type { NameType, Payload, ValueType } from '../component/DefaultTooltipContent';
import { ChartCoordinate, Coordinate, DataKey } from '../util/types';
import { AxisId } from './cartesianAxisSlice';

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
export type TooltipPayloadSearcher<T = unknown, R = T> = (
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
  /**
   * Opportunity for the graphical item to define its own Tooltip coordinates
   * instead of relying on the axes.
   *
   * If undefined, then Recharts will use mouse interaction coordinates, or the axis coordinates,
   * with some defaults (like, top/left of the chart).
   */
  positions: Record<NonNullable<TooltipIndex>, Coordinate> | ReadonlyArray<Coordinate> | undefined;
};

export type ActiveTooltipProps = {
  activeIndex: TooltipIndex;
  activeCoordinate: ChartCoordinate | undefined;
};

/**
 * So this informs the "tooltip event type". Tooltip event type can be either "axis" or "item"
 * and it is used for two things:
 * 1. Sets the active area
 * 2. Sets the background and cursor highlights
 *
 * Some charts only allow to have one type of tooltip event type, some allow both.
 * Those charts that allow both will have one default, and the "shared" prop will be used to switch between them.
 * Undefined means "use the chart default".
 *
 * Charts that only allow one tooltip event type, will ignore the shared prop.
 */
export type SharedTooltipSettings = boolean | undefined;

export type TooltipSettingsState = {
  shared: SharedTooltipSettings;
  trigger: TooltipTrigger;
  axisId: AxisId;
  /**
   * The `active` prop, despite its name, does not mean "always active".
   * It means "active after user interaction has ended".
   * By default, the tooltip is only active while the user is hovering over the chart.
   * With `active=true`, the tooltip will remain visible after mouse leave event.
   *
   * If you want to see the "active before user interaction" settings, see `defaultIndex`.
   *
   * Undefined means "depends on user interactions".
   */
  active: boolean | undefined;
  /**
   * If you want to set the tooltip to be active before user interaction, you can set this property.
   */
  defaultIndex: TooltipIndex | undefined;
};

/**
 * A generic state for user interaction with the chart.
 * User interaction can come through multiple channels: mouse events, keyboard events, or hardcoded in props, or synchronised from other charts.
 *
 * Each of the interaction states is represented as TooltipInteractionState,
 * and then the selectors and Tooltip will decide which of the interaction states to use.
 */
export type TooltipInteractionState = {
  /**
   * If user interaction is in progress or not.
   * Why is this its own property? Why is this not computed from the index?
   * Certainly if index !== -1 then the tooltip is active, right?
   * Well not so fast. Recharts allows Tooltips can be set to `active=true`
   * which means the tooltip remains displayed after the user stops interacting.
   * - This implies that we cannot set index to <empty value> after interaction ends,
   *   because the chart must remember the last position just in case the `active` prop on Tooltip is set to true.
   */
  active: boolean;
  /**
   * This is the current data index that is set for the chart.
   * This can come from mouse events, keyboard events, or hardcoded in props
   * in property `defaultIndex` on Tooltip.
   */
  index: TooltipIndex | undefined;
  /**
   * DataKey filter.
   *
   * In case of multiple graphical items, this is the dataKey that is set for the item.
   * Very useful for `Tooltip.shared=false`, where activeIndex can display multiple values,
   * but we only want to display one of them.
   *
   * If we want to interact with all the graphical items, then this is undefined.
   * This is the case for eventTooltipType === 'axis' for example.
   */
  dataKey: DataKey<any> | undefined;
  /**
   * The Coordinate where user last interacted with the chart. This needs saved so we can continue to render the tooltip at that point.
   * This is undefined on several occasions:
   * - before the user started interacting with the chart,
   * - when the chart is controlled programmatically through `defaultIndex` prop
   * - when the chart is controlled using keyboard interactions
   */
  coordinate: Coordinate | undefined;
};

export type TooltipSyncState = TooltipInteractionState & {
  /**
   * Tooltip synchronization is a feature that allows multiple charts to share the same interaction state.
   * This comes with one specialty - the syncMethod. `syncMethod=value` allows the user to synchronise charts
   * based on the active label (which is rendered as the title of the Tooltip).
   * To allow that, we need the label to be stored in the sync state.
   */
  label: string | undefined;
};

export const noInteraction: TooltipInteractionState = {
  active: false,
  index: null,
  dataKey: undefined,
  coordinate: undefined,
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
    click: TooltipInteractionState;
    /**
     * Why is hover activation separate from click activation? Because they are independent:
     * If a click is set, then mouseLeave should not clear it.
     * - the opposite is technically true too - but it's difficult to click on things without also hovering.
     */
    hover: TooltipInteractionState;
  };
  /**
   * This is the state of interaction with the bar background - which will get mapped
   * to the axis index.
   *
   * Axis interaction is independent of item interaction so the state must also be independent.
   */
  axisInteraction: {
    click: TooltipInteractionState;
    hover: TooltipInteractionState;
  };
  keyboardInteraction: TooltipInteractionState;
  /**
   * This part of the state is the information coming from other charts.
   * If there are two charts with the same syncId, events from one chart will be transferred
   * to other charts. So this is what the other charts are reporting.
   */
  syncInteraction: TooltipSyncState;
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
    click: noInteraction,
    hover: noInteraction,
  },
  axisInteraction: {
    click: noInteraction,
    hover: noInteraction,
  },
  keyboardInteraction: noInteraction,
  syncInteraction: {
    active: false,
    index: null,
    dataKey: undefined,
    label: undefined,
    coordinate: undefined,
  },
  tooltipItemPayloads: [],
  settings: {
    shared: undefined,
    trigger: 'hover',
    axisId: 0,
    active: false,
    defaultIndex: undefined,
  },
};

export type TooltipActionPayload = {
  activeIndex: TooltipIndex | undefined;
  activeDataKey: DataKey<any> | undefined;
  activeCoordinate?: ChartCoordinate | undefined;
};

const tooltipSlice = createSlice({
  name: 'tooltip',
  initialState,
  reducers: {
    addTooltipEntrySettings(state, action: PayloadAction<TooltipPayloadConfiguration>) {
      state.tooltipItemPayloads.push(castDraft(action.payload));
    },
    removeTooltipEntrySettings(state, action: PayloadAction<TooltipPayloadConfiguration>) {
      const index = current(state).tooltipItemPayloads.indexOf(castDraft(action.payload));
      if (index > -1) {
        state.tooltipItemPayloads.splice(index, 1);
      }
    },
    setTooltipSettingsState(state, action: PayloadAction<TooltipSettingsState>) {
      state.settings = action.payload;
    },
    setActiveMouseOverItemIndex(state, action: PayloadAction<TooltipActionPayload>) {
      state.syncInteraction.active = false;
      state.keyboardInteraction.active = false;
      state.itemInteraction.hover.active = true;
      state.itemInteraction.hover.index = action.payload.activeIndex;
      state.itemInteraction.hover.dataKey = action.payload.activeDataKey;
      state.itemInteraction.hover.coordinate = action.payload.activeCoordinate;
    },
    mouseLeaveChart(state) {
      /*
       * Clear only the active flags. Why?
       * 1. Keep Coordinate to preserve animation - next time the Tooltip appears, we want to render it from
       * the last place where it was when it disappeared.
       * 2. We want to keep all the properties anyway just in case the tooltip has `active=true` prop
       * and continues being visible even after the mouse has left the chart.
       */
      state.itemInteraction.hover.active = false;
      state.axisInteraction.hover.active = false;
    },
    mouseLeaveItem(state) {
      state.itemInteraction.hover.active = false;
    },
    setActiveClickItemIndex(state, action: PayloadAction<TooltipActionPayload>) {
      state.syncInteraction.active = false;
      state.itemInteraction.click.active = true;
      state.keyboardInteraction.active = false;
      state.itemInteraction.click.index = action.payload.activeIndex;
      state.itemInteraction.click.dataKey = action.payload.activeDataKey;
      state.itemInteraction.click.coordinate = action.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(state, action: PayloadAction<TooltipActionPayload>) {
      state.syncInteraction.active = false;
      state.axisInteraction.hover.active = true;
      state.keyboardInteraction.active = false;
      state.axisInteraction.hover.index = action.payload.activeIndex;
      state.axisInteraction.hover.dataKey = action.payload.activeDataKey;
      state.axisInteraction.hover.coordinate = action.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(state, action: PayloadAction<TooltipActionPayload>) {
      state.syncInteraction.active = false;
      state.keyboardInteraction.active = false;
      state.axisInteraction.click.active = true;
      state.axisInteraction.click.index = action.payload.activeIndex;
      state.axisInteraction.click.dataKey = action.payload.activeDataKey;
      state.axisInteraction.click.coordinate = action.payload.activeCoordinate;
    },
    setSyncInteraction(state, action: PayloadAction<TooltipSyncState>) {
      state.syncInteraction = action.payload;
    },
    setKeyboardInteraction(state, action: PayloadAction<TooltipActionPayload & { active: boolean }>) {
      state.keyboardInteraction.active = action.payload.active;
      state.keyboardInteraction.index = action.payload.activeIndex;
      state.keyboardInteraction.coordinate = action.payload.activeCoordinate;
      state.keyboardInteraction.dataKey = action.payload.activeDataKey;
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
  setKeyboardInteraction,
} = tooltipSlice.actions;

export const tooltipReducer = tooltipSlice.reducer;

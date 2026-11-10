import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { TooltipIndex, TooltipPayloadConfiguration } from '../tooltipSlice';
import { Coordinate, DataKey } from '../../util/types';
import { selectTooltipState } from './selectTooltipState';
import { GraphicalItemId } from '../graphicalItemsSlice';

const selectAllTooltipPayloadConfiguration: (state: RechartsRootState) => ReadonlyArray<TooltipPayloadConfiguration> =
  createSelector([selectTooltipState], tooltipState => tooltipState.tooltipItemPayloads);

export const selectTooltipCoordinate: (
  state: RechartsRootState,
  tooltipIndex: TooltipIndex,
  graphicalItemId: GraphicalItemId,
) => Coordinate | undefined = createSelector(
  [
    selectAllTooltipPayloadConfiguration,
    (_state: RechartsRootState, tooltipIndex: TooltipIndex): TooltipIndex => tooltipIndex,
    (_state: RechartsRootState, _tooltipIndex: TooltipIndex, graphicalItemId: GraphicalItemId): GraphicalItemId =>
      graphicalItemId,
  ],
  (
    allTooltipConfigurations: ReadonlyArray<TooltipPayloadConfiguration>,
    tooltipIndex: TooltipIndex,
    graphicalItemId: GraphicalItemId,
  ): Coordinate | undefined => {
    if (tooltipIndex == null) {
      return undefined;
    }
    const mostRelevantTooltipConfiguration = allTooltipConfigurations.find(tooltipConfiguration => {
      return tooltipConfiguration.settings.graphicalItemId === graphicalItemId;
    });
    if (mostRelevantTooltipConfiguration == null) {
      return undefined;
    }
    const { getPosition } = mostRelevantTooltipConfiguration;
    if (getPosition == null) {
      return undefined;
    }
    return getPosition(tooltipIndex);
  },
);

export const selectTooltipDataKey: (
  state: RechartsRootState,
  graphicalItemId: GraphicalItemId,
) => DataKey<unknown> | undefined = createSelector(
  [
    selectAllTooltipPayloadConfiguration,
    (_state: RechartsRootState, graphicalItemId: GraphicalItemId): GraphicalItemId => graphicalItemId,
  ],
  (
    allTooltipConfigurations: ReadonlyArray<TooltipPayloadConfiguration>,
    graphicalItemId: GraphicalItemId,
  ): DataKey<unknown> | undefined => {
    const mostRelevantTooltipConfiguration = allTooltipConfigurations.find(
      tooltipConfiguration => tooltipConfiguration.settings.graphicalItemId === graphicalItemId,
    );
    return mostRelevantTooltipConfiguration?.settings.dataKey;
  },
);

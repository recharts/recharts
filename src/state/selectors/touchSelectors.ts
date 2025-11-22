import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { TooltipIndex, TooltipPayloadConfiguration, TooltipPayloadSearcher } from '../tooltipSlice';
import { Coordinate, DataKey } from '../../util/types';
import { GraphicalItemId } from '../graphicalItemsSlice';
import { selectTooltipPayloadSearcher } from './selectTooltipPayloadSearcher';
import { selectTooltipState } from './selectTooltipState';

const selectAllTooltipPayloadConfiguration: (state: RechartsRootState) => ReadonlyArray<TooltipPayloadConfiguration> =
  createSelector([selectTooltipState], tooltipState => tooltipState.tooltipItemPayloads);

export const selectTooltipCoordinate: (
  state: RechartsRootState,
  tooltipIndex: TooltipIndex,
  dataKey: DataKey<any> | undefined,
  graphicalItemId: GraphicalItemId | undefined,
) => Coordinate | undefined = createSelector(
  [
    selectAllTooltipPayloadConfiguration,
    selectTooltipPayloadSearcher,
    (_state: RechartsRootState, tooltipIndex: TooltipIndex, _dataKey: DataKey<any> | undefined): TooltipIndex =>
      tooltipIndex,
    (
      _state: RechartsRootState,
      _tooltipIndex: TooltipIndex,
      dataKey: DataKey<any> | undefined,
    ): DataKey<any> | undefined => dataKey,
    (
      _state: RechartsRootState,
      _tooltipIndex: TooltipIndex,
      _dataKey: DataKey<any> | undefined,
      graphicalItemId: GraphicalItemId | undefined,
    ): GraphicalItemId | undefined => graphicalItemId,
  ],
  (
    allTooltipConfigurations: ReadonlyArray<TooltipPayloadConfiguration>,
    tooltipPayloadSearcher: TooltipPayloadSearcher | undefined,
    tooltipIndex: TooltipIndex,
    dataKey,
    graphicalItemId,
  ): Coordinate | undefined => {
    let mostRelevantTooltipConfiguration =
      graphicalItemId == null
        ? undefined
        : allTooltipConfigurations.find(
            tooltipConfiguration => tooltipConfiguration.graphicalItemId === graphicalItemId,
          );

    if (mostRelevantTooltipConfiguration == null) {
      mostRelevantTooltipConfiguration = allTooltipConfigurations.find(tooltipConfiguration => {
        return tooltipConfiguration.settings.dataKey === dataKey;
      });
    }
    if (mostRelevantTooltipConfiguration == null) {
      return undefined;
    }
    const { positions } = mostRelevantTooltipConfiguration;
    if (positions == null) {
      return undefined;
    }
    // @ts-expect-error tooltipPayloadSearcher is not typed well
    const maybePosition: Coordinate | undefined = tooltipPayloadSearcher(positions, tooltipIndex);
    return maybePosition;
  },
);

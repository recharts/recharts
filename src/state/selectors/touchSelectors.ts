import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { TooltipIndex, TooltipPayloadConfiguration, TooltipPayloadSearcher } from '../tooltipSlice';
import { Coordinate } from '../../util/types';
import { selectTooltipPayloadSearcher } from './selectTooltipPayloadSearcher';
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
    selectTooltipPayloadSearcher,
    (_state: RechartsRootState, tooltipIndex: TooltipIndex): TooltipIndex => tooltipIndex,
    (_state: RechartsRootState, _tooltipIndex: TooltipIndex, graphicalItemId: GraphicalItemId): GraphicalItemId =>
      graphicalItemId,
  ],
  (
    allTooltipConfigurations: ReadonlyArray<TooltipPayloadConfiguration>,
    tooltipPayloadSearcher: TooltipPayloadSearcher | undefined,
    tooltipIndex: TooltipIndex,
    graphicalItemId: GraphicalItemId,
  ): Coordinate | undefined => {
    const mostRelevantTooltipConfiguration = allTooltipConfigurations.find(tooltipConfiguration => {
      return tooltipConfiguration.settings.graphicalItemId === graphicalItemId;
    });
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

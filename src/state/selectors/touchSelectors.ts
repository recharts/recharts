import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { TooltipEntrySettings, TooltipIndex, TooltipPayloadConfiguration } from '../tooltipSlice';
import { Coordinate } from '../../util/types';
import { selectTooltipState } from './selectTooltipState';
import { GraphicalItemId } from '../graphicalItemsSlice';

const selectAllTooltipPayloadConfiguration: (state: RechartsRootState) => ReadonlyArray<TooltipPayloadConfiguration> =
  createSelector([selectTooltipState], tooltipState => tooltipState.tooltipItemPayloads);

/**
 * Everything the touch middleware needs in order to activate a tooltip item:
 * the dataKey to filter the payload by, and the coordinate to position the tooltip at.
 */
export type TooltipItemDetails = {
  dataKey: TooltipEntrySettings['dataKey'];
  coordinate: Coordinate | undefined;
};

/**
 * Resolves the item the user is touching from the tooltip entry settings that the graphical item
 * registered, keyed by its graphicalItemId.
 *
 * Reading the settings of the tooltip entry, rather than of the graphical item, is what makes this
 * work for every item chart: some of them (Funnel, Sankey, Treemap) never register themselves as
 * graphical items because they have no axes, and would otherwise never be resolvable here.
 */
export const selectTooltipItemDetails: (
  state: RechartsRootState,
  tooltipIndex: TooltipIndex,
  graphicalItemId: GraphicalItemId,
) => TooltipItemDetails | undefined = createSelector(
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
  ): TooltipItemDetails | undefined => {
    if (tooltipIndex == null) {
      return undefined;
    }
    const mostRelevantTooltipConfiguration = allTooltipConfigurations.find(tooltipConfiguration => {
      return tooltipConfiguration.settings.graphicalItemId === graphicalItemId;
    });
    if (mostRelevantTooltipConfiguration == null) {
      return undefined;
    }
    const { getPosition, settings } = mostRelevantTooltipConfiguration;
    return {
      dataKey: settings.dataKey,
      coordinate: getPosition == null ? undefined : getPosition(tooltipIndex),
    };
  },
);

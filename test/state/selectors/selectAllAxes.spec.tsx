import { describe } from 'vitest';
import { selectAllXAxes, selectAllYAxes } from '../../../src/state/selectors/selectAllAxes';
import { shouldReturnFromInitialState, shouldReturnUndefinedOutOfContext } from '../../helper/selectorTestHelpers';

describe('selectAllXAxes', () => {
  shouldReturnUndefinedOutOfContext(selectAllXAxes);
  shouldReturnFromInitialState(selectAllXAxes, []);
});

describe('selectAllYAxes', () => {
  shouldReturnUndefinedOutOfContext(selectAllYAxes);
  shouldReturnFromInitialState(selectAllYAxes, []);
});

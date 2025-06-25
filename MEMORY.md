# Recharts Codebase Memory

## Project Overview

Recharts is a React charting library with a sophisticated state management system using Redux Toolkit. The project is written in TypeScript and uses modern React patterns.

## Key Architecture Components

### 1. State Management

- **Redux Toolkit**: Used for state management with slices for different features
- **Tooltip State**: Managed in `src/state/tooltipSlice.ts`
- **Selectors**: Comprehensive selector system for accessing state
- **Middleware**: Event handling middleware for mouse, keyboard, and touch events

### 2. Tooltip System

#### Core Files:

- `src/component/Tooltip.tsx` - Main tooltip component
- `src/state/tooltipSlice.ts` - Tooltip state management
- `src/state/selectors/tooltipSelectors.ts` - Tooltip state selectors
- `src/context/tooltipContext.tsx` - Tooltip context and hooks

#### Tooltip Triggers:

- **'hover'**: Default trigger, shows tooltip on mouse hover
- **'click'**: Shows tooltip on click and keeps it visible

#### Current Tooltip Behavior:

- **Hover trigger**: Tooltip shows on hover, hides on mouse leave
- **Click trigger**: Tooltip shows on click, but **currently has no way to close it**
- Tooltip state is managed separately for hover vs click interactions
- Click-triggered tooltips persist even after mouse leave events

#### State Structure:

```typescript
TooltipState = {
  itemInteraction: {
    click: TooltipInteractionState,
    hover: TooltipInteractionState
  },
  axisInteraction: {
    click: TooltipInteractionState,
    hover: TooltipInteractionState
  },
  keyboardInteraction: TooltipInteractionState,
  syncInteraction: TooltipSyncState,
  tooltipItemPayloads: TooltipPayloadConfiguration[],
  settings: TooltipSettingsState
}
```

### 3. Event Handling

#### Chart Wrapper (`src/chart/RechartsWrapper.tsx`):

- Handles mouse events at the chart level
- Dispatches actions to Redux store
- Currently only handles `mouseLeaveChart()` for hover interactions

#### Event Middleware:

- `src/state/mouseEventsMiddleware.ts` - Handles mouse click and move events
- `src/state/keyboardEventsMiddleware.ts` - Handles keyboard events
- `src/state/touchEventsMiddleware.ts` - Handles touch events

### 4. Current Issue with Click Tooltips

Based on the GitHub issues found:

- **Issue #3573**: "Close Tooltip with trigger=click by clicking outside"
- **Issue #1231**: "Feature Request - Programatically show/hide tooltip"

The current implementation has a gap: when `trigger="click"` is used, there's no mechanism to close the tooltip by clicking outside the chart or through other user interactions.

### 5. Key Selectors and Actions

#### Actions:

- `setActiveClickItemIndex()` - Activates tooltip on click
- `setActiveMouseOverItemIndex()` - Activates tooltip on hover
- `mouseLeaveItem()` - Deactivates hover tooltip
- `mouseLeaveChart()` - Deactivates chart-level tooltip

#### Selectors:

- `selectIsTooltipActive()` - Determines if tooltip should be visible
- `selectTooltipPayload()` - Gets tooltip content data
- `selectActiveCoordinate()` - Gets tooltip position

### 6. Testing Infrastructure

The codebase has comprehensive tests for tooltip behavior:

- `test/component/Tooltip/` - Tooltip-specific tests
- `test/component/Tooltip/tooltipEventType.spec.tsx` - Tests different trigger behaviors
- Test helpers in `test/component/Tooltip/tooltipTestHelpers.tsx`

### 7. Next Steps for Implementation

To add the ability to close click-triggered tooltips:

1. **Add new action**: Create an action to clear click-triggered tooltip state ✅
2. **Modify event handling**: Add click-outside detection in the mouse event middleware ✅
3. **Update selectors**: Ensure the new action properly updates tooltip visibility ✅
4. **Add tests**: Comprehensive test coverage for the new functionality ✅
5. **Documentation**: Update API documentation and examples

The implementation should respect the existing architecture and maintain backward compatibility.

## Implementation Details

### Performance-Optimized Approach

Instead of using `useEffect` with global event listeners (which would be less performant), the solution leverages the existing mouse event middleware:

1. **Added `clearClickTooltip` action** in `tooltipSlice.ts` ✅
2. **Modified mouse event middleware** to detect clicks on empty chart areas ✅
3. **Added tooltip closing state management** with `isClosing` flag ✅
4. **Added `handleRequestTooltipClose` callback** in `RechartsWrapper.tsx` ✅
5. **Plumbed the close callback** through to `Tooltip.tsx` ✅

### Key Components Modified:

1. **`src/state/tooltipSlice.ts`**:
   - Added `clearClickTooltip` action
   - Added `tooltipCloseStart` and `tooltipCloseEnd` actions
   - Added `isClosing` state flag

2. **`src/state/mouseEventsMiddleware.ts`**:
   - Added check for `tooltipState.isClosing` to prevent race conditions
   - Enhanced click detection to clear tooltips when clicking on empty chart areas

3. **`src/chart/RechartsWrapper.tsx`**:
   - Added `handleRequestTooltipClose` callback with 100ms timeout
   - Passed callback to children via `React.cloneElement`

4. **`src/component/Tooltip.tsx`**:
   - Added `onRequestTooltipClose` prop to `TooltipProps` and `TooltipContentProps`
   - Passed the callback to custom tooltip content

### How It Works:

1. **Click Detection**: When user clicks on empty chart areas, the middleware detects this and dispatches `clearClickTooltip()`
2. **Race Condition Prevention**: The `isClosing` flag prevents new tooltip activations during the closing process
3. **Custom Content Support**: Custom tooltip content can now receive `onRequestTooltipClose` prop to add close buttons
4. **Performance**: Zero global event listeners, leverages existing chart event handling

### Usage Example:

```tsx
// Custom tooltip content can now include close functionality
const CustomTooltip = ({ onRequestTooltipClose, ...props }) => (
  <div>
    <button onClick={onRequestTooltipClose}>×</button>
    {/* tooltip content */}
  </div>
);

<BarChart>
  <Tooltip content={<CustomTooltip />} trigger="click" />
</BarChart>;
```

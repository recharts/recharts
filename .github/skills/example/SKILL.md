---
name: example
description: Create new example charts for Recharts documentation website
---

# What is an example?

Example is a JSX component that renders a chart. It is used in guides and API documentation to demonstrate how to use Recharts features.

# Structure of an example

Recharts example is a single file. This file is meant to work as a standalone component, that demonstrates a specific feature of Recharts.
It must not import any internal Recharts components or utilities, but only use the public API of Recharts. Meaning: only imports directly from `recharts` package are allowed.

We inject certain dependencies by default, these are also allowed:

- 'react'
- 'react-dom'
- 'react-is'
- '@recharts/devtools'

`@recharts/devtools` is a variety of utilities where two are especially useful for examples:

- `generateMockData` - a function that generates random data for charts, so you don't have to hardcode any data in your example. This is optional but recommended.
- `RechartsDevtools` - child component for debugging purposes. This is strongly recommended for every chart.

The example file must export a single React component as default export.

Here is an example of a valid example file. Real example will use more Recharts components and features, but this is just to show the structure of the file and how to use the injected dependencies.:

```tsx
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { Area, AreaChart } from 'recharts';

const lengthOfData = 10;
const seed = 123; // we use seed instead of truly random data so that we have consistent data across renders and we can run VR tests
const data = generateMockData(lengthOfData, seed);

export default function Example() {
  return (
    <AreaChart width={400} height={400} data={data}>
      <Area dataKey="value" />
      <RechartsDevtools />
      {/* ... more components */}
    </AreaChart>
  );
}
```

# Using the example

Once you have created an example, you can use it in guides and API documentation.
A typical use is to provide the example as a prop to `CodeEditorWithPreview` component. This standardized editor handles rendering the example, showing the source code, and couple other things.

```tsx
// the relative paths may differ based on where your guide is located
import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import PieChartDefaultIndex from './PieChartDefaultIndex.tsx';
import PieChartDefaultIndexSource from './PieChartDefaultIndex.tsx?raw';

// code omitted for clarity ...
<CodeEditorWithPreview
  Component={PieChartDefaultIndex}
  sourceCode={PieChartDefaultIndexSource}
  stackBlitzTitle="Recharts PieChart Default Index Example"
/>;
```

# Controls / levers (optional)

Controls are a feature of the `CodeEditorWithPreview` component that allows you to change the props of the example component dynamically. This is useful for demonstrating how different props affect the chart.

The preferred implementation is **not** to export a separate `Controls` component. Instead, export:

- `defaultControlsState` - the initial serializable state object
- `levers` - an array of lever definitions

The example component should accept that state object as props (usually `Partial<T>` merged with the defaults inside the example).

Typical shape:

```tsx
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { animationDurationLever } from '../../Shared/levers/gallery/animationDurationLever.tsx';
import { replayAnimationLever } from '../../Shared/levers/gallery/replayAnimationLever.tsx';

type ControlsState = {
  animationDuration: number;
  replayKey: number;
};

export const defaultControlsState: ControlsState = {
  animationDuration: 600,
  replayKey: 0,
};

export const levers = [
  replayAnimationLever<ControlsState>(),
  animationDurationLever<ControlsState>(),
] satisfies ReadonlyArray<Lever<ControlsState>>;
```

Then pass them to `CodeEditorWithPreview`:

```tsx
<CodeEditorWithPreview
  Component={MyExample}
  sourceCode={MyExampleSource}
  defaultControlsState={defaultControlsState}
  levers={levers}
  stackBlitzTitle="Recharts example"
  defaultTool="controls"
/>
```

Prefer the predefined gallery levers in `www/src/components/Shared/levers/gallery/` when possible. If a control is likely to be reused by multiple examples, add it to the gallery instead of creating ad-hoc UI in one file.

Keep control state **serializable**. Store simple keys such as `'index' | 'append'` or `'a' | 'b'`, then map those values to runtime functions or datasets inside the example component.

Levers are optional, and not every example needs to have them.

# Visual Regression Testing

We strongly recommend to create a new VR test for every new example.
All website example VR tests are located in `test-vr/tests/www` folder. You can create a new test file there, and use existing tests as a reference on how to implement it. You can also refer to the `vr-test` skill, and `test-vr/README.md` for more information on how to implement VR tests and how to run them locally.

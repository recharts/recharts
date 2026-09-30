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

# Theming

The docs website wraps every example in a `RechartsThemeProvider`, so examples render in the site's light and dark themes.
Leave out hardcoded colors (`stroke`, `fill`, and similar) unless the example is specifically about custom colors,
so that the chart picks up the theme colors.

# Visual Regression Testing

We strongly recommend creating a VR test for every new example.
Read `.agents/skills/vr-test/SKILL.md` for the full VR setup; this section only covers what is specific to website examples.

Website example VR tests live in `test-vr/tests/www/`. Each test has two parts:

1. A story in `test-vr/tests/www/<Component>Examples.story.tsx` that renders the example. Add to the existing story file for the component if there is one.
2. A spec in the matching `test-vr/tests/www/<Component>Examples.spec-vr.tsx` that mounts the story by its id.

```tsx
// test-vr/tests/www/<Component>Examples.story.tsx
import MyExampleComponent from '../../../www/src/docs/exampleComponents/<Component>/MyExample';

export const MyExample = () => <MyExampleComponent />;
```

```tsx
// test-vr/tests/www/<Component>Examples.spec-vr.tsx
import { expect, testWithThemes } from '../fixtures';

testWithThemes('MyExample', async ({ mountStory }) => {
  const component = await mountStory('www/<Component>Examples/MyExample');
  await expect(component).toHaveScreenshot();
});
```

### Key notes for creating VR tests:

- **Story id**: the story file path under `test-vr/tests/` without `.story.tsx`, followed by the export name, e.g. `www/SunburstChartExamples/SunburstChartExample`.
- **Keep JSX in the story file**: the spec mounts by story id; do not render JSX or declare components in the spec.
- **Themes**: new specs use `testWithThemes`, which renders the legacy, light, and dark variants automatically. Do not add theme props to stories, theme names to test titles, or custom screenshot names.
- **Props**: if your example accepts props (like levers or controls state), forward them from the story and pass them as the second argument of `mountStory`, exactly as `CodeEditorWithPreview` would:

```tsx
// story
export const MyExample = (props: React.ComponentProps<typeof MyExampleComponent>) => <MyExampleComponent {...props} />;

// spec
import type { MyExample } from './<Component>Examples.story';

testWithThemes('MyExample with index', async ({ mountStory }) => {
  const component = await mountStory<typeof MyExample>('www/<Component>Examples/MyExample', { defaultIndex: 2 });
  await expect(component).toHaveScreenshot();
});
```

- **Generating screenshots**: run and update VR tests through Docker only, for example `npm run test-vr:update -- test-vr/tests/www/<Component>Examples.spec-vr.tsx`. See the vr-test skill for details. Commit the new baselines in `test-vr/__snapshots__`, but not `test-results` or `playwright-report` output.

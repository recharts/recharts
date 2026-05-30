# Goal

Storybook is a tool for developing UI components in isolation. It makes building UIs organized and efficient.
It also documents the components and their usage in an interactive way.

## API

The API section contains a single story per component. The goal is to communicate a components behaviour as concise and simple as possible.

[`storybook/stories/API/cartesian/Line.stories.tsx`](https://github.com/recharts/recharts/blob/main/storybook/stories/API/cartesian/Line.stories.tsx) can be considered a template for writing stories for the API section.

Acceptance criteria for API stories:

- Each component should be documented in a mdx file.
  - The mdx file should contain a description of the component.
  - The mdx file should list the possible parent components.
  - The mdx file should list the possible child components.
  - The mdx file should list the args in a table, grouped by category.
  - The description of each arg should ideally be auto-generated from the code - see AnimationTiming for example

  ```
     /** The type of easing function to use for animations */
     export type AnimationTiming = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
  ```

  - Some args are documented in the `storybook/stories/API/props/*.ts`.

- should default to be as simple as possible (i.e. no complex interaction effects, no custom components, no custom styling, default behaviour)

### Examples

The examples section contains stories that show how to use recharts in a real world scenario. The goal is to show how to use recharts in a complex scenario, and how to use recharts with other libraries.

A good example of an example story is `storybook/stories/Examples/Pie/PieWithNeedle.stories.tsx`
It shows an non standard usage of a PieChart, with a custom component to achieve a new chart type (Gauge).

Examples stories:

- are not necessarily tied to a single component
- use complex and realistic data
- process data (i.e. histogram, control chart, ...)
- use custom components
- use third party libraries (i.e. d3-scale)
- aim to show the best practice, and best design patterns for using recharts
- are the place to show edge cases, and how to deal with them

## Technical details

We are following the Component Story Format 3. https://storybook.js.org/blog/storybook-csf3-is-here

# Goal
Storybook is a tool for developing UI components in isolation. It makes building UIs organized and efficient.
It also documents the components and their usage in an interactive way.

We want to migrate our current documentation to Storybook.
The documentation is currently in the form of a static website, with embedded code sandboxes.

## Structure
As we want to migrate existing documentation to Storybook, we will want to reproduce the existing structure:

### API
The API section contains stories for all components. The goal is to communicate a components behaviour as concise and simple as possible.

[`storybook/stories/API/cartesian/Line.stories.tsx`](https://github.com/recharts/recharts/blob/master/storybook/stories/API/cartesian/Line.stories.tsx) can be considered a template for writing stories for the API section.

Acceptance criteria for API stories:

- Each component should be documented in a mdx file.
  - The mdx file should contain a description of the component.
  - The mdx file should list the possible parent components.
  - The mdx file should list the possible child components.
  - The mdx file should list the possible props in a table, grouped by category.
    - Categories should be: `General`, `Style`, `Animation`, `Events`, `Responsive`, `Internal`, `Deprecated`
  - Many shared props are already documented and they can be reused, as done in `storybook/stories/API/cartesian/Line.stories.tsx`
  - Shared props are documented in the `storybook/stories/API/props/*.ts` files.

- All stories for a single component are found in a single file.
- All stories for a single component should use the same data.
- should default to be as simple as possible (i.e. no complex interaction effects, no custom components, no custom styling, default behaviour)
- Each story
  - should show a selected group of props (e.g. all props related to the style of the line)
  - should have a description
  - should have controls for all props
  - Each story should have controls only for the props of that story.

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
We are using Storybook 7, and Typescript.

## Best practice
Please follow the acceptance criteria and structure laid out above.
Additionally, please follow the best practices of Storybook:
- https://storybook.js.org/docs/7.0/react/writing-stories/introduction
- https://storybook.js.org/docs/7.0/react/essentials/controls
- https://storybook.js.org/docs/7.0/react/essentials/interactions

When documenting a new component, best:
1 - add a story to the API section - Component.stories.tsx
2 - add a mdx file next to it - Component.mdx - which initially only contains
```mdxjs
import * as ComponentStories from './Component.stories';
<ArgTypes of={ComponentStories} sort={'requiredFirst'}/>
```
Thereby adding the props table to the mdx file.
3 - Add descriptions to the props in the mdx file.


We are using the storybook test runner to test our stories. https://storybook.js.org/docs/react/writing-tests/test-runner#page-top
We integrated it into our CI/CD, and it helps us test interaction effects, and other complex behaviour.

If you can, please do add interactions to the stories, because it helps add confidence to feature work, and it helps us catch bugs.

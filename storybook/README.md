We are following the Component Story Format 3.
Find more information about it here. https://storybook.js.org/blog/storybook-csf3-is-here

If you are looking for a template from which to write stories, please do align with the ComposedChart.stories.tsx

- We want to use templates for rendering, and multiple stories with different parameters, content, data.

- We want to document every single component in
-- the most simple manner
-- a complex usage
-- edge cases

- Additionally we will want to add stories that document complex usage of recharts with custom components.

Best practice: 
- A story for a LineChart should not contain a complex brush. Each story should focus on a single component and its behaviour. If the interaction with the brush is to be shown, then any other brush details should ideally be omitted. 
- Complex interaction effect between multiple component best deserve a separate story. 

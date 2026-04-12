---
name: investigate
description: Find root cause for a bug or an issue in Recharts and propose a solution
---

# How to investigate bugs?

Step number 1 is to get a clear reproduction of the bug. This is usually coming from a github issue or from existing website example or story. The example might be convoluted, that's okay - we will simplify it later.

# Test-driven investigation

Once we have a reproduction, we will write a test that reproduces the bug. This is important because it allows us to verify that we have fixed the bug later on. It also allows us to simplify the reproduction and focus on the root cause of the bug.

You can read more about various kinds of tests in DEVELOPING.md and CONTRIBUTING.md. For now we will stick with unit tests. For that please read test/README.md.

We will use `createSelectorTestCase` helper function to create our test case. This single helper allows us to reuse the same chart in multiple test cases without repeating the declaration every time. It also allows to inspect the result in DOM, and gives a window into the internal workings of Recharts by giving us access to the selector spy.

# Process

1. Put the chart that reproduces the behavior in a test case using `createSelectorTestCase`. Pick a file in the `test` folder or create a brand new file.

Pseudocode here:
```tsx
describe('pseudocode test suite', () => {
  const renderTestCase = createSelectorTestCase(({ children }) => <MyChart>{children}</MyChart>);
})
```

2. Verify that the test case reproduces the bug by inspecting the DOM. Write a new test for that:

```tsx
// import appropriate helpers or write your own if you can't find any, this is just an example
import { expectYAxisTicks } from './expectAxisTicks';

it('should render YAxis ticks correctly', () => {
  const { container } = renderTestCase();
  expectYAxisTicks(container, [/* expected ticks here */]);
})
```

If this test fails, it means that we have successfully reproduced the bug in a unit test. Then look at the implementation and see which hooks or selectors it is calling. Then add a new test:

```tsx
test('myPseudoSelector', () => {
  const { spy } = renderTestCase(myPseudoSelector);
  expectLastCalledWith(spy, /* expected value here */);
})
```

The first selector is likely to be too high level; it will be calling multiple hooks and selectors inside, so we won't be able to pinpoint the root cause of the bug. So we will need to go deeper. Look into that selector dependencies, find a more specific selector that appears to be relevant for the behavior we're seeing. Then add another test for that selector, and so on, until we find the root cause of the bug.

How to find a more "relevant" selector? You can just guess; but that may take a while. In this stage it is helpful to go back to the original chart code and remove half of its components or props. If the bug is still there, then the removed components or props are not relevant for the bug, and you can focus on the remaining ones. If the bug is gone, then one of the removed components or props is relevant for the bug, and you can focus on those. This way you can quickly narrow down the scope of your investigation and find the relevant selectors faster. Binary search works wonders. Recharts components interact with each other in complex ways, so it is often not obvious which component or prop is relevant for the bug, and which one is not. This way you can quickly find the relevant ones and focus on them.

3. Simplify the chart

Once you found the root cause of the bug, you can simplify the chart to only include the relevant components and props. This will make the test easier to understand and maintain. For unit tests it is useful to keep a minimal reproducible example.

4. Commit all the tests!

Once you are done with the investigation, you will end up with multiple tests inside a `describe` block. These tests are all related to the same bug, and they all serve as documentation for the bug and its root cause. They also serve as a safety net for future changes, ensuring that the bug does not regress.

So the final step is to commit all the tests with a clear commit message. The commit message should explain what the bug is, how we reproduced it, and what the root cause is.

Then the actual fix for the bug can be done in a separate commit, and we can verify that all the tests are passing after the fix is applied.

5. (Optional) consider variations of the same problem

Recharts has multiple components and features that are similar to each other, and they often share the same underlying logic. For example, LineChart and AreaChart share a lot of logic for rendering the lines and areas. So if we find a bug in LineChart, it is worth checking if the same bug exists in AreaChart, and if it does, we can fix it there as well. This way we can ensure that all similar components are consistent and do not have the same bug.

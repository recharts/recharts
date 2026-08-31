import { describe, it, expect } from 'vitest';
import { stripLinks, getPrimaryStoryName } from './generateStorybookArgs';

describe('stripLinks', () => {
  it('should strip <LinkToApi> tags while preserving their text content', () => {
    expect(stripLinks('Consider using the <LinkToApi>ReferenceArea</LinkToApi> component instead.')).toBe(
      'Consider using the ReferenceArea component instead.',
    );
  });

  it('should strip <LinkToApi> tags whose content spans multiple lines', () => {
    expect(stripLinks('Use <LinkToApi>Reference\nArea</LinkToApi> instead.')).toBe('Use Reference\nArea instead.');
  });

  it('should strip a mix of <a>, <Link> and <LinkToApi> tags in a single string', () => {
    const input =
      'See <a href="https://example.com">external docs</a>, ' +
      'or use <LinkToApi>useOffset</LinkToApi>, ' +
      'or read the <Link to="/guide">guide</Link>.';
    expect(stripLinks(input)).toBe('See external docs, or use useOffset, or read the guide.');
  });

  it('should leave plain text without any tags untouched', () => {
    expect(stripLinks('Margin is the empty space around the chart.')).toBe(
      'Margin is the empty space around the chart.',
    );
  });
});

describe('getPrimaryStoryName', () => {
  it('should return "API" when a story named API is exported, including typed exports', () => {
    const content = `
      export default { title: 'Rectangle' };
      export const API: StoryObj = { args: {} };
      export const CustomTickWithPadding = { args: {} };
    `;
    expect(getPrimaryStoryName(content)).toBe('API');
  });

  it('should fall back to the first exported story, in file order, when none is named API', () => {
    const content = `
      export default { title: 'Radar' };
      export const General = { args: {} };
      export const WithLabels = { args: {} };
    `;
    expect(getPrimaryStoryName(content)).toBe('General');
  });

  it('should be case-sensitive when matching the API story name', () => {
    const content = `
      export default { title: 'api' };
      export const General = { args: {} };
      export const api = { args: {} };
    `;
    expect(getPrimaryStoryName(content)).toBe('General');
  });

  it('should return undefined when the file has no named exports', () => {
    const content = `
      export default { title: 'Empty' };
    `;
    expect(getPrimaryStoryName(content)).toBeUndefined();
  });
});

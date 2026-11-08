import * as React from 'react';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { RechartsDevtools } from '@recharts/devtools';
import { LineChart } from '../../src';
import { InspectionTools } from '../../test-vr/gallery/InspectionTools';
import { renderStory } from '../../test-vr/gallery/renderer';

function InstrumentedStory() {
  return (
    <LineChart width={400} height={200}>
      <RechartsDevtools />
    </LineChart>
  );
}

afterEach(() => {
  sessionStorage.clear();
});

describe('gallery inspection tools', () => {
  it('connects the real hook inspector and annotation controls to a story chart', () => {
    render(
      <InspectionTools>
        <InstrumentedStory />
      </InspectionTools>,
    );
    act(() => vi.runOnlyPendingTimers());
    const tools = screen.getByRole('complementary', { name: 'Story inspection tools' });
    expect(within(tools).getByLabelText('Inspect Hook:')).toBeVisible();
    expect(within(tools).getByText('useChartWidth: 400')).toBeVisible();
    expect(within(tools).getByText('useChartHeight: 200')).toBeVisible();
    expect(within(tools).getByRole('button', { name: 'Horizontal Line' })).toBeVisible();
  });

  it('keeps portals separate for two independently inspected charts', () => {
    render(
      <>
        <InspectionTools>
          <InstrumentedStory />
        </InspectionTools>
        <InspectionTools>
          <InstrumentedStory />
        </InspectionTools>
      </>,
    );
    act(() => vi.runOnlyPendingTimers());
    const tools = screen.getAllByRole('complementary', { name: 'Story inspection tools' });
    tools.forEach(panel => {
      expect(within(panel).getAllByLabelText('Inspect Hook:')).toHaveLength(1);
      expect(within(panel).getAllByRole('button', { name: 'Horizontal Line' })).toHaveLength(1);
    });
  });

  it('explains how to enable the tools for a story without instrumentation', () => {
    render(
      <InspectionTools>
        <p>Uninstrumented story</p>
      </InspectionTools>,
    );
    expect(screen.getByText('Uninstrumented story')).toBeVisible();
    expect(screen.getByText('<RechartsDevtools />')).toBeVisible();
    expect(screen.queryByLabelText('Inspect Hook:')).not.toBeInTheDocument();
  });

  it('does not wrap the automated mount path, and preserves state on an update', () => {
    function StatefulStory() {
      const [count, setCount] = React.useState(0);
      return (
        <button type="button" onClick={() => setCount(current => current + 1)}>
          Count {count}
        </button>
      );
    }
    const canvas = document.createElement('div');
    document.body.append(canvas);
    const root = createRoot(canvas);
    try {
      act(() => renderStory(root, canvas, StatefulStory, {}, 'legacy'));
      expect(canvas.children).toHaveLength(1);
      expect(canvas.firstElementChild?.tagName).toBe('BUTTON');
      fireEvent.click(screen.getByRole('button', { name: 'Count 0' }));
      act(() => renderStory(root, canvas, StatefulStory, {}, 'legacy'));
      expect(screen.getByRole('button', { name: 'Count 1' })).toBeVisible();
      expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
    } finally {
      act(() => root.unmount());
      canvas.remove();
    }
  });

  it('renders inspection controls only when a wrapper is requested', () => {
    const canvas = document.createElement('div');
    document.body.append(canvas);
    const root = createRoot(canvas);
    try {
      act(() => renderStory(root, canvas, InstrumentedStory, {}, 'dark', InspectionTools));
      expect(screen.getByRole('complementary', { name: 'Story inspection tools' })).toBeVisible();
      expect(canvas.style.backgroundColor).toBe('black');
    } finally {
      act(() => root.unmount());
      canvas.remove();
    }
  });
});

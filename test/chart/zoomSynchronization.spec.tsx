import * as React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LineChart, MouseWheelZoom, useZoom, ZoomAndPan } from '../../src';
import type { UseZoomResult, ZoomAndPanProps, ZoomViewport } from '../../src';

const zoomApis = new Map<string, UseZoomResult>();

function CaptureZoom({ name }: { name: string }) {
  zoomApis.set(name, useZoom());
  return null;
}

function getZoomApi(name: string): UseZoomResult {
  const api = zoomApis.get(name);
  if (api == null) {
    throw new Error(`Expected zoom API for ${name}`);
  }
  return api;
}

function SyncedChart({ name, syncId, zoom = {} }: { name: string; syncId: string; zoom?: ZoomAndPanProps }) {
  return (
    <LineChart width={400} height={300} syncId={syncId}>
      <ZoomAndPan {...zoom} />
      <CaptureZoom name={name} />
    </LineChart>
  );
}

function GranularSyncedChart({ name, syncId }: { name: string; syncId: string }) {
  return (
    <LineChart width={400} height={300} syncId={syncId}>
      <MouseWheelZoom axis="x" />
      <CaptureZoom name={name} />
    </LineChart>
  );
}

beforeEach(() => {
  zoomApis.clear();
});

describe('zoom synchronisation', () => {
  it('synchronises the semantic viewport between charts with the same syncId', async () => {
    render(
      <>
        <SyncedChart name="source" syncId="shared-viewport" />
        <SyncedChart name="target" syncId="shared-viewport" />
      </>,
    );
    const viewport = {
      x: { start: 0.2, end: 0.6 },
      y: { start: 0.1, end: 0.7 },
    };

    act(() => getZoomApi('source').setViewport(viewport));

    await waitFor(() => expect(getZoomApi('target').viewport).toEqual(viewport));
    expect(getZoomApi('source').viewport).toEqual(viewport);
  });

  it('does not synchronise charts with a different syncId', async () => {
    render(
      <>
        <SyncedChart name="source" syncId="first-viewport" />
        <SyncedChart name="target" syncId="second-viewport" />
      </>,
    );

    act(() => getZoomApi('source').setViewport({ x: { start: 0.25, end: 0.75 } }));

    await waitFor(() => expect(getZoomApi('source').isZoomed).toBe(true));
    expect(getZoomApi('target').viewport).toEqual({
      x: { start: 0, end: 1 },
      y: { start: 0, end: 1 },
    });
  });

  it('also synchronises charts composed from granular interaction components', async () => {
    render(
      <>
        <GranularSyncedChart name="source" syncId="granular-viewport" />
        <GranularSyncedChart name="target" syncId="granular-viewport" />
      </>,
    );

    act(() => getZoomApi('source').setViewport({ x: { start: 0.3, end: 0.7 } }));

    await waitFor(() => expect(getZoomApi('target').viewport.x).toEqual({ start: 0.3, end: 0.7 }));
  });

  it('respects the receiving chart axis and zoom limits', async () => {
    render(
      <>
        <SyncedChart name="source" syncId="limited-viewport" />
        <SyncedChart name="target" syncId="limited-viewport" zoom={{ axis: 'x', maxZoom: 4 }} />
      </>,
    );

    act(() =>
      getZoomApi('source').setViewport({
        x: { start: 0.45, end: 0.55 },
        y: { start: 0.2, end: 0.4 },
      }),
    );

    await waitFor(() => {
      const target = getZoomApi('target').viewport;
      expect(target.x.end - target.x.start).toBeCloseTo(0.25);
      expect(target.y).toEqual({ start: 0, end: 1 });
    });
  });

  it('treats an incoming viewport as a controlled proposal without overriding the prop', async () => {
    const onZoomChange = vi.fn<(viewport: Required<ZoomViewport>) => void>();
    render(
      <>
        <SyncedChart name="source" syncId="controlled-viewport" />
        <SyncedChart name="target" syncId="controlled-viewport" zoom={{ viewport: {}, onZoomChange }} />
      </>,
    );
    const proposal = {
      x: { start: 0.2, end: 0.6 },
      y: { start: 0.1, end: 0.8 },
    };

    act(() => getZoomApi('source').setViewport(proposal));

    await waitFor(() => expect(onZoomChange).toHaveBeenCalledWith(proposal));
    await waitFor(() =>
      expect(getZoomApi('target').viewport).toEqual({
        x: { start: 0, end: 1 },
        y: { start: 0, end: 1 },
      }),
    );
    expect(getZoomApi('source').viewport).toEqual(proposal);
    expect(onZoomChange).toHaveBeenCalledTimes(1);
  });
});

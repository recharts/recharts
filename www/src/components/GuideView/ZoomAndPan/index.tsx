import styles from '../guideTable.module.css';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';

/**
 * Guide for the cartesian Zoom & Pan feature.
 *
 * Written in the final state (the API as it will be once the whole feature lands), as a spec to work
 * backwards from. The feature is composable: zoom is off until you opt in, by adding the interaction
 * components or hooks you want. They all share one normalized per-axis viewport.
 */
export function ZoomAndPanGuide() {
  return (
    <article>
      <h1>Zoom &amp; Pan</h1>
      <p>
        Recharts can zoom and pan a cartesian chart (<LinkToApi>LineChart</LinkToApi>, <LinkToApi>AreaChart</LinkToApi>,{' '}
        <LinkToApi>BarChart</LinkToApi>, <LinkToApi>ScatterChart</LinkToApi>, <LinkToApi>ComposedChart</LinkToApi>). It
        is <strong>off by default</strong> and fully composable: you opt in by adding the interaction components (or
        hooks) you want, and they all drive one shared, normalized viewport.
      </p>

      <h2>The viewport</h2>
      <p>
        Zoom is described by a <strong>viewport</strong>: how much of each axis is currently visible, as a fraction in{' '}
        <code>[0, 1]</code> of the axis itself.
      </p>
      <pre>{`type AxisWindow = { start: number; end: number }; // 0..1 along the axis
type Viewport = { x?: AxisWindow; y?: AxisWindow };

// the default (un-zoomed) viewport: the whole chart
{ x: { start: 0, end: 1 }, y: { start: 0, end: 1 } }

// the right third of the x axis, fully zoomed out on y
{ x: { start: 0.66, end: 1 } }`}</pre>
      <p>
        It is expressed as <strong>fractions of the axis</strong>, not pixels and not data values, on purpose: it stays
        correct across container resizes, and it applies the same way to linear, time and band (categorical) scales. A
        fraction can express &quot;show 2&frac12; categories&quot;, which a data-value window cannot, and it allows
        smooth sub-pixel panning even on a categorical axis. Note that <code>window</code> here is the visible slice of
        an axis, it has nothing to do with the browser window, and resizing the browser never zooms the chart.
      </p>

      <h2>Quick start</h2>
      <p>
        For the usual experience in one line, add <code>&lt;ZoomAndPan /&gt;</code>. It bundles the sensible defaults:
        wheel zoom, drag to pan, pinch, keyboard, double-click reset and scrollbars.
      </p>
      <pre>{`import { LineChart, XAxis, YAxis, Line, ZoomAndPan } from 'recharts';

<LineChart data={data} width={600} height={300}>
  <XAxis dataKey="date" />
  <YAxis />
  <Line dataKey="value" />
  <ZoomAndPan />
</LineChart>`}</pre>
      <p>
        It takes the same options as the individual interactions, so you can tune it or switch parts off without
        dropping to the granular components:
      </p>
      <pre>{`<ZoomAndPan axis="x" minZoom={1} maxZoom={20} pinch={false} scrollbars={false} />`}</pre>
      <p>
        Add <code>&lt;Minimap /&gt;</code> when the chart needs a persistent overview of the full data:
      </p>
      <pre>{`<LineChart data={data} width={600} height={300}>
  <XAxis dataKey="date" />
  <YAxis />
  <Line dataKey="value" />
  <ZoomAndPan axis="x" />
  <Minimap axis="x">
    <LineChart data={data}>
      <Line dataKey="value" />
    </LineChart>
  </Minimap>
</LineChart>`}</pre>

      <h2>Composing individual interactions</h2>
      <p>
        For exact control over which interactions exist (or to wire your own), drop the bundle and add just the pieces
        you want as children of the chart. Each one registers its own handlers and is independently tree-shakeable, so
        you only ship what you use. The <LinkToApi>Brush</LinkToApi> keeps its existing index-slicing behavior unless
        you explicitly switch it to <code>mode=&quot;zoom&quot;</code>.
      </p>
      <pre>{`import {
  LineChart, XAxis, YAxis, Line,
  MouseWheelZoom, PanOnDrag, DragToZoom, DragToSelect, ZoomPanKeyboard, PinchZoom, ZoomScrollbar,
} from 'recharts';

<LineChart data={data} width={600} height={300}>
  <XAxis dataKey="date" />
  <YAxis />
  <Line dataKey="value" />

  {/* opt into exactly the interactions you want */}
  <MouseWheelZoom />
  <PanOnDrag />
  <DragToZoom />
  <DragToSelect onSelect={selection => setSelectedWindow(selection)} />
  <ZoomPanKeyboard />
  <PinchZoom />
  <ZoomScrollbar axis="x" />
</LineChart>`}</pre>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Component</th>
            <th>What it does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>&lt;MouseWheelZoom /&gt;</code>
            </td>
            <td>
              Wheel / trackpad to zoom around the pointer. <code>Shift</code> pans horizontally,{' '}
              <code>Ctrl/Cmd + Shift</code> pans vertically.
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;PanOnDrag /&gt;</code>
            </td>
            <td>Drag the plot to pan.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;DragToZoom /&gt;</code>
            </td>
            <td>Drag a rectangle to zoom into it (hold a modifier, or use it without panning).</td>
          </tr>
          <tr>
            <td>
              <code>&lt;DragToSelect /&gt;</code>
            </td>
            <td>
              Drag a rectangle and receive the selected viewport window in <code>onSelect</code> without changing zoom.
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;ZoomPanKeyboard /&gt;</code>
            </td>
            <td>
              When the chart is focused: <code>+</code>/<code>-</code> zoom, arrow keys pan, <code>Shift</code>+arrows
              pan faster, <code>0</code>/<code>Esc</code> reset.
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;PinchZoom /&gt;</code>
            </td>
            <td>Touch: two-finger pinch to zoom and two-finger drag to pan.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;AxisZoom axis=&quot;x&quot; /&gt;</code>
            </td>
            <td>Wheel or drag directly on an axis band to zoom / pan only that axis.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;ZoomScrollbar axis=&quot;x&quot; /&gt;</code>
            </td>
            <td>An on-canvas scrollbar for a zoomed axis: drag the band to pan.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;Minimap /&gt;</code>
            </td>
            <td>A panorama plus an editable viewport rectangle: drag to pan, resize to zoom, click to jump.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;Brush mode=&quot;zoom&quot; /&gt;</code>
            </td>
            <td>Uses the Brush panorama and travellers to edit the zoom viewport instead of slicing data.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;DoubleClickReset /&gt;</code>
            </td>
            <td>Double-click (or double-tap) to reset to the full view.</td>
          </tr>
        </tbody>
      </table>

      <p>Common options live on the components, per interaction or shared via context:</p>
      <pre>{`<MouseWheelZoom axis="x" step={1.15} panStep={0.0015} />
<DragToZoom axis="xy" minZoom={1} maxZoom={25} modifier="shift" />
<DragToSelect onSelect={selection => setSelectedWindow(selection)} />
<PinchZoom threshold={12} touchDrag="pan" doubleTapDrag="select" onSelect={selection => setSelectedWindow(selection)} />
<ZoomPanKeyboard panStep={0.1} panFastMultiplier={2.5} />
<ZoomScrollbar axis="y" thickness={12} thumbClassName="zoom-thumb" />
<Minimap axis="x" position="bottom-right" width={180} height={80} />
<Brush mode="zoom" axis="x" autoScaleYDomain />`}</pre>
      <p>
        <code>step</code> controls zoom speed. <code>panStep</code> controls keyboard or wheel pan distance depending on
        the component. <code>threshold</code> controls how far fingers must spread before a pinch starts zooming.
        Scrollbars can be styled with <code>className</code>/<code>style</code> for the track and{' '}
        <code>thumbClassName</code>/<code>thumbStyle</code> for the thumb. The drag rectangle of{' '}
        <code>&lt;DragToZoom /&gt;</code> / <code>&lt;DragToSelect /&gt;</code> (and <code>&lt;ZoomAndPan /&gt;</code>)
        is styled the same way with <code>selectionClassName</code>/<code>selectionStyle</code>. Both keep stable{' '}
        <code>.recharts-zoom-scrollbar</code> / <code>.recharts-zoom-selection</code> classes for plain CSS or Tailwind.
      </p>
      <p>
        <code>&lt;DragToSelect /&gt;</code> is the single selection component: mouse / pen uses rectangle drag, and
        touch uses double-tap-then-drag, with both paths calling the same <code>onSelect</code>. If you use the bundled{' '}
        <code>&lt;ZoomAndPan /&gt;</code> instead, <code>touchDoubleTapDrag=&quot;zoom&quot;</code> keeps the maps-style
        mobile zoom, while <code>touchDoubleTapDrag=&quot;select&quot;</code> emits the mobile selection through{' '}
        <code>onTouchSelect</code>.
      </p>

      <h2>Controlled &amp; uncontrolled state</h2>
      <p>
        Leave it alone for an uncontrolled chart, set an initial value, or control it fully. These live on{' '}
        <code>&lt;ZoomAndPan /&gt;</code> (and any individual interaction component).
      </p>
      <pre>{`// uncontrolled, with an initial zoom
<LineChart data={data}>
  <ZoomAndPan initialZoom={{ x: { start: 0.2, end: 0.6 } }} />
</LineChart>

// controlled: you hold the viewport and update it
const [viewport, setViewport] = useState({ x: { start: 0.2, end: 0.6 } });

<LineChart data={data}>
  <ZoomAndPan viewport={viewport} onZoomChange={setViewport} />
</LineChart>`}</pre>
      <p>
        <code>onZoomChange</code> fires on every change with the new viewport. Because it is the same shape you pass
        back in, a controlled chart settles without a feedback loop, and you can sync several charts by sharing one
        viewport.
      </p>

      <h2>Auto-scaling, follow &amp; level of detail</h2>
      <p>
        A few headless helpers react to the viewport. <code>&lt;AutoScaleAxis /&gt;</code> re-fits the value axis to the
        data visible in the current window as you pan or zoom; <code>&lt;FollowSeries /&gt;</code> keeps one series
        vertically centred while panning (optionally auto-scaling the span around it); and <code>useScatterLOD</code>{' '}
        decimates dense scatter data against the zoomed scales, so you draw fewer points when zoomed out and reveal more
        detail as you zoom in.
      </p>
      <pre>{`<LineChart data={data}>
  <Line dataKey="value" />
  <MouseWheelZoom axis="x" />
  <AutoScaleAxis axis="y" />            {/* fit y to the visible x window */}
  {/* or keep one series centred: <FollowSeries dataKey="value" autoScale /> */}
</LineChart>

// dense scatter: roughly one point per cell, more as you zoom in
function Points() {
  const lod = useScatterLOD(bigData, { x: 'x', y: 'y' });
  return <Scatter data={lod} />;
}`}</pre>

      <h2>Custom UI &amp; your own gestures</h2>
      <p>
        For buttons, sliders, a minimap of your own, or a different gesture library entirely, drop down to the hooks.
        They read and write the same viewport as the components.
      </p>
      <pre>{`import { useZoom } from 'recharts';

function ZoomButtons() {
  const { zoomIn, zoomOut, reset, isZoomed } = useZoom();
  return (
    <div>
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={reset} disabled={!isZoomed}>Reset</button>
    </div>
  );
}`}</pre>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Hook</th>
            <th>For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>useZoom()</code>
            </td>
            <td>
              Read / control the viewport from your own UI:{' '}
              <code>{`{ viewport, setViewport, zoomIn, zoomOut, pan, reset, isZoomed }`}</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>useMouseWheelZoom()</code>, <code>usePinchZoom()</code>, &hellip;
            </td>
            <td>The low-level hooks the components are built on. Use them to wire a gesture onto your own element.</td>
          </tr>
        </tbody>
      </table>
      <p>
        To bring your own gesture library completely: add none of the built-in interaction components, and drive the
        viewport from your library&apos;s handlers through <code>useZoom()</code> (or a controlled{' '}
        <code>&lt;ZoomAndPan /&gt;</code>). The built-ins are then just a convenient default you can opt out of.
      </p>

      <h2>Touch</h2>
      <p>
        <code>&lt;PinchZoom /&gt;</code> uses two fingers (pinch to zoom, two-finger drag to pan), plus double-tap to
        reset. Double-tap-then-drag defaults to zooming (the &quot;maps&quot; gesture), and can instead select a window
        when configured with <code>doubleTapDrag=&quot;select&quot;</code>.
      </p>
      <p>
        By default a single finger is left to the <LinkToApi>Tooltip</LinkToApi> / cursor: dragging moves the active
        data point, and a tap sets it. Set <code>touchDrag=&quot;pan&quot;</code> (on <code>&lt;PinchZoom /&gt;</code>{' '}
        or <code>&lt;ZoomAndPan /&gt;</code>) to make a one-finger drag pan the chart instead; a plain tap still updates
        the tooltip/cursor at that position, so you never lose the ability to inspect a data point. This is useful on
        dashboards where scrolling is handled by the page and the chart needs to feel &ldquo;grabbable&rdquo;.
      </p>
      <pre>{`// default: one-finger drag moves the tooltip cursor
<PinchZoom />

// one-finger drag pans instead; tap still sets the tooltip
<PinchZoom touchDrag="pan" />

// same option on the bundle component
<ZoomAndPan touchDrag="pan" />`}</pre>
      <p>
        While you interact with the chart it takes over touch handling (<code>touch-action: none</code>) so the page
        does not scroll and the browser does not pinch-zoom; everything is opt-in, so leave{' '}
        <code>&lt;PinchZoom /&gt;</code> out and touch is untouched.
      </p>

      <h2>Accessibility</h2>
      <p>
        <code>&lt;ZoomPanKeyboard /&gt;</code> makes the chart focusable and pannable from the keyboard. When zoomed,
        data-point navigation is scoped to the visible window, so you never tab to a point that is off screen.
        Everything is reachable without a pointer.
      </p>

      <h2>How it renders</h2>
      <p>
        Recharts already maps every datum to a pixel through one per-axis scale (<code>domain → range</code>). Zoom
        hooks into that single spot: when a window is not full, the axis <strong>range</strong> (the pixel interval the
        scale maps into) is stretched by <code>1 / windowWidth</code> and shifted so the visible slice fills the plot
        area. The <strong>domain is left untouched</strong>.
      </p>
      <p>
        Every renderer (line, bar, area, scatter, grid, ticks, reference lines) asks that same scale for positions, so
        they all zoom automatically, and anything outside the plot area is hidden by the clip path Recharts already
        applies. Tooltip, cursor and keyboard use the scale&apos;s inverse, derived from the same stretched range, so
        hit-testing stays consistent. No graphical component needs to know about zoom.
      </p>

      <h2>Defaults</h2>
      <p>
        Zoom and every gesture are <strong>off until you opt in</strong> with a component, hook or prop. The existing{' '}
        <LinkToApi>Brush</LinkToApi> remains <code>mode=&quot;slice&quot;</code> by default, and zoom coupling is only
        enabled with <code>mode=&quot;zoom&quot;</code>. Enabling anything by default would be a breaking change, so it
        never happens implicitly.
      </p>
    </article>
  );
}

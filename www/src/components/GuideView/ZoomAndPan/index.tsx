import styles from '../guideTable.module.css';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import { CodeEditorWithPreview } from '../../CodeEditorWithPreview';
import QuickStartExample from './QuickStartExample';
import quickStartExampleSource from './QuickStartExample?raw';
import CustomControlsExample from './CustomControlsExample';
import customControlsExampleSource from './CustomControlsExample?raw';
import MinimapExample, { MinimapExampleControls } from './MinimapExample';
import minimapExampleSource from './MinimapExample?raw';
import ComposedInteractionsExample, { ComposedInteractionsExampleControls } from './ComposedInteractionsExample';
import composedInteractionsExampleSource from './ComposedInteractionsExample?raw';
import ControlledSyncExample from './ControlledSyncExample';
import controlledSyncExampleSource from './ControlledSyncExample?raw';
import AutoScaleFollowExample, { AutoScaleFollowExampleControls } from './AutoScaleFollowExample';
import autoScaleFollowExampleSource from './AutoScaleFollowExample?raw';
import SpecialChartsExample from './SpecialChartsExample';
import specialChartsExampleSource from './SpecialChartsExample?raw';
import BrushZoomModeExample, { BrushZoomModeExampleControls } from './BrushZoomModeExample';
import brushZoomModeExampleSource from './BrushZoomModeExample?raw';

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
        <LinkToApi>BarChart</LinkToApi>, <LinkToApi>ScatterChart</LinkToApi>, <LinkToApi>ComposedChart</LinkToApi>) in
        both horizontal and vertical layouts, and non-cartesian charts too (<LinkToApi>PieChart</LinkToApi>,{' '}
        <LinkToApi>RadarChart</LinkToApi>, <LinkToApi>RadialBarChart</LinkToApi>, <LinkToApi>FunnelChart</LinkToApi>,{' '}
        <LinkToApi>Sankey</LinkToApi>, <LinkToApi>SunburstChart</LinkToApi>, <LinkToApi>Treemap</LinkToApi> — see{' '}
        <a href="#special-charts">Polar &amp; standalone charts</a>). It is <strong>off by default</strong> and fully
        composable: you opt in by adding the interaction components (or hooks) you want, and they all drive one shared,
        normalized viewport.
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
        wheel zoom, drag to pan, pinch, keyboard, double-click reset and scrollbars. Try it: wheel over the chart, drag
        to pan, double-click to reset.
      </p>
      <CodeEditorWithPreview
        Component={QuickStartExample}
        sourceCode={quickStartExampleSource}
        stackBlitzTitle="Recharts zoom and pan quick start"
      />
      <p>
        It takes the same options as the individual interactions, so you can tune it or switch parts off without
        dropping to the granular components:
      </p>
      <pre>{`<ZoomAndPan axis="x" minZoom={1} maxZoom={20} pinch={false} scrollbars={false} />`}</pre>
      <p>
        Add <code>&lt;Minimap /&gt;</code> when the chart needs a persistent overview of the full data. Drag the
        rectangle to pan, resize its edges to zoom, click outside it to jump:
      </p>
      <CodeEditorWithPreview
        Component={MinimapExample}
        Controls={MinimapExampleControls}
        sourceCode={minimapExampleSource}
        stackBlitzTitle="Recharts zoomed chart with a Minimap"
        defaultTool="controls"
      />

      <h2>Composing individual interactions</h2>
      <p>
        For exact control over which interactions exist (or to wire your own), drop the bundle and add just the pieces
        you want as children of the chart. Each one registers its own handlers and is independently tree-shakeable, so
        you only ship what you use. The <LinkToApi>Brush</LinkToApi> keeps its existing index-slicing behavior unless
        you explicitly switch it to <code>mode=&quot;zoom&quot;</code>. Here exactly four interactions are mounted -
        wheel, drag-to-pan, axis bands and double-click reset - and nothing else (no pinch, no keyboard):
      </p>
      <CodeEditorWithPreview
        Component={ComposedInteractionsExample}
        Controls={ComposedInteractionsExampleControls}
        sourceCode={composedInteractionsExampleSource}
        stackBlitzTitle="Recharts composed zoom interactions"
        defaultTool="controls"
      />

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
            <td>
              A panorama plus an editable viewport rectangle. Its default <code>&lt;MinimapControls /&gt;</code> bundle
              can be replaced with <code>&lt;MinimapWheel /&gt;</code>, <code>&lt;MinimapDrag /&gt;</code>,{' '}
              <code>&lt;MinimapPinch /&gt;</code>, <code>&lt;MinimapKeyboard /&gt;</code>, or your own controls. The
              rectangle always shows the complete viewport; <code>axis</code> only limits what the Minimap controls
              update.
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Brush mode=&quot;zoom&quot; /&gt;</code>
            </td>
            <td>
              Uses the Brush panorama and travellers to edit the zoom viewport instead of slicing data. Its default{' '}
              <code>&lt;BrushZoomControls /&gt;</code> can be replaced with <code>&lt;BrushWheelZoom /&gt;</code>,{' '}
              <code>&lt;BrushPinchZoom /&gt;</code>, or your own controls.
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;DoubleClickReset /&gt;</code>
            </td>
            <td>Double-click to reset to the configured zoom floor.</td>
          </tr>
        </tbody>
      </table>

      <p>Common options live on the components, per interaction or shared via context:</p>
      <pre>{`<MouseWheelZoom axis="x" step={1.15} />
<DragToZoom modifier="shift" minZoom={1} maxZoom={25} />
<PinchZoom threshold={12} touchDrag="pan" />
<ZoomScrollbar axis="y" thumbClassName="zoom-thumb" />
<Minimap axis="x" position="bottom-right" width={180} />
<Minimap axis="x" controls={<><MinimapDrag /><MinimapWheel /></>} />
<Brush mode="zoom" axis="x" autoScaleYDomain />
<Brush mode="zoom" controls={<BrushZoomControls wheel={false} />} />`}</pre>
      <p>
        <code>step</code> controls zoom speed. <code>threshold</code> controls how far fingers must spread before a
        pinch starts zooming. Scrollbars can be styled with <code>className</code>/<code>style</code> for the track and{' '}
        <code>thumbClassName</code>/<code>thumbStyle</code> for the thumb. The drag rectangle of{' '}
        <code>&lt;DragToZoom /&gt;</code> / <code>&lt;DragToSelect /&gt;</code> (and <code>&lt;ZoomAndPan /&gt;</code>)
        is styled the same way with <code>selectionClassName</code>/<code>selectionStyle</code>. Both keep stable{' '}
        <code>.recharts-zoom-scrollbar</code> / <code>.recharts-zoom-selection</code> classes for plain CSS or Tailwind.
      </p>

      <h2>Controlled &amp; uncontrolled state</h2>
      <p>
        Leave it alone for an uncontrolled chart, set an initial value, or control it fully. These live on{' '}
        <code>&lt;ZoomAndPan /&gt;</code>. Individual interaction components expose gesture, axis, and limit props; use{' '}
        <code>&lt;ZoomAndPan /&gt;</code> when you need controlled viewport props.
      </p>
      <pre>{`// uncontrolled, with an initial zoom
<ZoomAndPan initialZoom={{ x: { start: 0.2, end: 0.6 } }} />

// controlled: you hold the viewport and update it
<ZoomAndPan viewport={viewport} onZoomChange={setViewport} />`}</pre>
      <p>
        <code>onZoomChange</code> fires on every change with the new viewport. Because it is the same shape you pass
        back in, a controlled chart settles without a feedback loop, and you can sync several charts by sharing one
        viewport - zoom or pan either chart below and the other follows:
      </p>
      <CodeEditorWithPreview
        Component={ControlledSyncExample}
        sourceCode={controlledSyncExampleSource}
        stackBlitzTitle="Recharts synced zoom across two charts"
      />

      <h2>Auto-scaling, follow &amp; level of detail</h2>
      <p>
        A few headless helpers react to the viewport. <code>&lt;AutoScaleAxis /&gt;</code> re-fits the value axis to the
        data visible in the current window as you pan or zoom - zoom into a slice of x below, then pan, and watch the y
        axis re-fit; <code>&lt;FollowSeries /&gt;</code> keeps one series vertically centred while panning (optionally
        auto-scaling the span around it); and <code>useScatterLOD</code> decimates dense scatter data against the zoomed
        scales, so you draw fewer points when zoomed out and reveal more detail as you zoom in.
      </p>
      <CodeEditorWithPreview
        Component={AutoScaleFollowExample}
        Controls={AutoScaleFollowExampleControls}
        sourceCode={autoScaleFollowExampleSource}
        stackBlitzTitle="Recharts auto-scaling y while zooming x"
        defaultTool="controls"
      />
      <p>
        Both helpers are layout-aware: they fit / re-centre the <em>value</em> axis, which is y in a horizontal layout
        and x in a vertical one (where the categories run along y). Pass an explicit <code>axis</code> to{' '}
        <code>&lt;AutoScaleAxis /&gt;</code> to override.
      </p>

      <h2 id="special-charts">Polar &amp; standalone charts</h2>
      <p>
        Charts without cartesian axes — <LinkToApi>PieChart</LinkToApi>, <LinkToApi>RadarChart</LinkToApi>,{' '}
        <LinkToApi>RadialBarChart</LinkToApi>, <LinkToApi>FunnelChart</LinkToApi>, <LinkToApi>Sankey</LinkToApi>,{' '}
        <LinkToApi>SunburstChart</LinkToApi> and <LinkToApi>Treemap</LinkToApi> — zoom as a <strong>camera</strong>:
        instead of stretching axis ranges, the plot content is scaled and translated under the same viewport. Centric
        and radial charts zoom uniformly so they keep their aspect ratio. The exact same gestures, options, controlled
        state and <code>useZoom()</code> hook apply.
      </p>
      <CodeEditorWithPreview
        Component={SpecialChartsExample}
        sourceCode={specialChartsExampleSource}
        stackBlitzTitle="Recharts camera zoom on polar and standalone charts"
      />
      <p>
        Tooltips stay attached to their items while zoomed (active coordinates are mapped through the same transform),
        and content outside the plot area is clipped only while actually zoomed. Axis-band gestures and scrollbars that
        require a cartesian axis are automatically disabled on these charts; everything else works unchanged.
      </p>

      <h2>Brush or ZoomAndPan?</h2>
      <p>Recharts now has two ways to show a slice of the data, and both are valid:</p>
      <ul>
        <li>
          <LinkToApi>Brush</LinkToApi> in its classic mode is <strong>domain-driven</strong>: it slices the data to an
          index window (<code>startIndex</code>/<code>endIndex</code>), the axes re-fit to the visible slice, and the
          rest of the data is simply not rendered. Whole categories enter and leave the view.
        </li>
        <li>
          <code>ZoomAndPan</code> is <strong>range-driven</strong>: the data and domain stay untouched and the axis
          range is stretched instead, so panning is continuous (including sub-category positions) and every gesture maps
          to the same normalized viewport.
        </li>
      </ul>
      <p>
        They meet in <code>&lt;Brush mode=&quot;zoom&quot;&gt;</code>: the familiar Brush UI (travellers, panorama)
        editing the range-driven viewport instead of slicing, in sync with every other zoom control. Use classic Brush
        when stepping through whole data windows is the point; use the zoom viewport when you want smooth, gesture-led
        exploration; use Brush zoom mode when you want both. Drag the travellers below, wheel over the rail, or zoom the
        plot itself - they edit the same viewport. To customize the Brush gestures, replace its default{' '}
        <code>&lt;BrushZoomControls /&gt;</code> bundle through the <code>controls</code> prop:
      </p>
      <CodeEditorWithPreview
        Component={BrushZoomModeExample}
        Controls={BrushZoomModeExampleControls}
        sourceCode={brushZoomModeExampleSource}
        stackBlitzTitle="Recharts Brush in zoom mode"
        defaultTool="controls"
      />

      <h2>Custom UI &amp; your own gestures</h2>
      <p>
        For buttons, sliders, a minimap of your own, or a different gesture library entirely, drop down to the hooks.
        They read and write the same viewport as the components: <code>useZoom()</code> gives you the viewport plus
        zoomIn/zoomOut/pan/reset helpers, and <code>useZoomState()</code> is the same state as a <code>useState</code>
        -shaped tuple (<code>const [zoom, setZoom] = useZoomState()</code>). Every built-in consumer (
        <code>ZoomAndPan</code>, the granular components, <code>Minimap</code>, <code>Brush mode=&quot;zoom&quot;</code>
        ) reads and writes that same state, so custom controls stay in sync with all of them. In this example no
        interaction component is mounted; the buttons are the only way to zoom:
      </p>
      <CodeEditorWithPreview
        Component={CustomControlsExample}
        sourceCode={customControlsExampleSource}
        stackBlitzTitle="Recharts custom zoom controls"
      />
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
              <code>useMinimapControls()</code>
            </td>
            <td>
              Build custom Minimap controls against the same viewport rectangle, hit testing, and overlay node used by
              the built-in Minimap controls.
            </td>
          </tr>
          <tr>
            <td>
              <code>useBrushZoomControls()</code>
            </td>
            <td>Build custom Brush zoom-mode gestures on top of the Brush rail geometry and shared zoom state.</td>
          </tr>
        </tbody>
      </table>
      <p>
        To bring your own gesture library completely: add none of the built-in interaction components, and drive the
        viewport from your library&apos;s handlers through <code>useZoom()</code> (or a controlled{' '}
        <code>&lt;ZoomAndPan /&gt;</code>).
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
        the tooltip/cursor at that position, so you never lose the ability to inspect a data point.
      </p>
      <pre>{`<PinchZoom touchDrag="pan" />
<ZoomAndPan touchDrag="pan" />`}</pre>
      <p>
        Pinch, axis, and scrollbar gestures prevent the browser from claiming the active gesture; one-finger plot
        scrolling is preserved unless you opt into <code>touchDrag=&quot;pan&quot;</code>. Everything is opt-in, so
        leave <code>&lt;PinchZoom /&gt;</code> out and touch is untouched.
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

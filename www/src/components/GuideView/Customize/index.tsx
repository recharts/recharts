import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import { RechartsLink } from '../../Shared/RechartsLink.tsx';
import CustomizeLabels from './CustomizeLabels.tsx';
import CustomizeLabelsSource from './CustomizeLabels.tsx?raw';
import CustomizeBarShape from './CustomizeBarShape.tsx';
import CustomizeBarShapeSource from './CustomizeBarShape.tsx?raw';
import CustomizeTooltipContent from './CustomizeTooltipContent.tsx';
import CustomizeTooltipContentSource from './CustomizeTooltipContent.tsx?raw';
import CustomizeSizeAndStroke from './CustomizeSizeAndStroke.tsx';
import CustomizeSizeAndStrokeSource from './CustomizeSizeAndStroke.tsx?raw';
import CustomizeLegendAndTooltipStyle from './CustomizeLegendAndTooltipStyle.tsx';
import CustomizeLegendAndTooltipStyleSource from './CustomizeLegendAndTooltipStyle.tsx?raw';
import CustomizeCustomElement from './CustomizeCustomElement.tsx';
import CustomizeCustomElementSource from './CustomizeCustomElement.tsx?raw';

export function Customize() {
  return (
    <article>
      <h1>Customize</h1>
      <p>A guide showing various props and Recharts customization variants.</p>
      <p>
        This guide shows customization on individual chart level. If you want to apply the same style to multiple
        charts, check out the <RechartsLink to="guide/theming">theme guide</RechartsLink>.
      </p>
      <p>
        The two compose in one direction: <strong>an explicit prop always wins over the theme</strong>. Reach for the
        theme when you are describing how your charts should look in general, and for props when you are describing this
        particular chart.
      </p>
      <p>
        Every visual detail is reachable. Presentation attributes are plain props, text goes through formatters, and
        anywhere Recharts draws something for you there is usually a <code>shape</code>, <code>content</code>, or{' '}
        <code>tick</code> prop that lets you draw it yourself instead.
      </p>

      <h2>Presentation props</h2>
      <p>
        Recharts draws SVG, and SVG presentation attributes are just props: <code>fill</code>, <code>stroke</code>,{' '}
        <code>strokeWidth</code>, <code>strokeDasharray</code>, <code>fillOpacity</code>, <code>className</code>,{' '}
        <code>style</code>, and the rest. They pass through to the underlying element, so anything you can do in SVG you
        can do from JSX.
      </p>
      <p>
        <LinkToApi>Tooltip</LinkToApi> and <LinkToApi>Legend</LinkToApi> are the exceptions: they render HTML, so they
        take CSS style objects rather than SVG attributes. Everything else in the chart is SVG.
      </p>
      <CodeEditorWithPreview
        Component={CustomizeSizeAndStroke}
        sourceCode={CustomizeSizeAndStrokeSource}
        stackBlitzTitle="Recharts Customize Size And Stroke Example"
      />
      <p>
        If you find yourself passing the same colors to every chart, that is the signal to move them into a{' '}
        <RechartsLink to="guide/theming">theme</RechartsLink> instead.
      </p>

      <h2>Labels and ticks</h2>
      <p>Text in a chart comes from three different places, and each has its own escape hatch:</p>
      <ul>
        <li>
          Axis titles are the <code>label</code> prop on <LinkToApi>XAxis</LinkToApi> and <LinkToApi>YAxis</LinkToApi>.
          Pass a string, a props object with a <code>position</code>, or your own element.
        </li>
        <li>
          Tick text goes through <code>tickFormatter</code>. For full control over how a tick is drawn - rotation,
          multiple lines, icons - pass a component to the <code>tick</code> prop. The{' '}
          <RechartsLink to="guide/axisTicks">axis ticks guide</RechartsLink> covers this in depth.
        </li>
        <li>
          Data labels come from <LinkToApi>LabelList</LinkToApi> (or the <code>label</code> prop on a graphical item,
          which is shorthand for the same thing). Use <code>formatter</code> to change the text and <code>content</code>{' '}
          to change the rendering.
        </li>
      </ul>
      <CodeEditorWithPreview
        Component={CustomizeLabels}
        sourceCode={CustomizeLabelsSource}
        stackBlitzTitle="Recharts Customize Labels Example"
      />

      <h2>Shapes</h2>
      <p>
        The <code>shape</code> prop replaces how a graphical item draws itself. It accepts a component, or a plain props
        object that gets merged into the default shape. It is available on <LinkToApi>Area</LinkToApi>,{' '}
        <LinkToApi>Bar</LinkToApi>, <LinkToApi>Line</LinkToApi>, <LinkToApi>Scatter</LinkToApi>,{' '}
        <LinkToApi>Pie</LinkToApi>, <LinkToApi>Radar</LinkToApi>, <LinkToApi>RadialBar</LinkToApi> and{' '}
        <LinkToApi>Funnel</LinkToApi>, as well as on <LinkToApi>ReferenceArea</LinkToApi>,{' '}
        <LinkToApi>ReferenceDot</LinkToApi> and <LinkToApi>ReferenceLine</LinkToApi>.
      </p>
      <p>
        Each graphical item also has an <em>active</em> variant, which applies only while the tooltip is pointing at
        that item. It takes the same forms, so a highlight can be as small as <code>{'{ fillOpacity: 0.4 }'}</code>. The
        prop name differs by component:
      </p>
      <ul>
        <li>
          <code>activeDot</code> on <LinkToApi>Line</LinkToApi>, <LinkToApi>Area</LinkToApi> and{' '}
          <LinkToApi>Radar</LinkToApi> - these highlight a point rather than the whole series.
        </li>
        <li>
          <code>activeBar</code> on <LinkToApi>Bar</LinkToApi>.
        </li>
        <li>
          <code>activeShape</code> on <LinkToApi>Scatter</LinkToApi>, <LinkToApi>Pie</LinkToApi>,{' '}
          <LinkToApi>RadialBar</LinkToApi> and <LinkToApi>Funnel</LinkToApi>.
        </li>
      </ul>
      <p>
        To keep things simple you can also read the <code>isActive</code> prop inside the shape. Set{' '}
        <code>activeBar={true}</code> on the Bar component so that React creates event handlers in a BarChart.
      </p>
      <CodeEditorWithPreview
        Component={CustomizeBarShape}
        sourceCode={CustomizeBarShapeSource}
        stackBlitzTitle="Recharts Customize Bar Shape Example"
      />
      <p>
        A shape component receives the resolved geometry <em>and</em> the resolved styles, theme included, so it can
        honour the surrounding theme or ignore it. If you only want rounded corners, <LinkToApi>Bar</LinkToApi> has a{' '}
        <code>radius</code> prop and no custom shape is needed - see the{' '}
        <RechartsLink to="guide/roundedBars">rounded bars guide</RechartsLink>.
      </p>

      <h2>Tooltip and Legend content</h2>
      <p>
        The <code>content</code> prop on <LinkToApi>Tooltip</LinkToApi> and <LinkToApi>Legend</LinkToApi> hands you the
        whole thing: the active payload, the label, and whether it is currently visible. Return any React you like. The
        payload carries your original data point, so anything in your data - not just the plotted value - is available.
      </p>
      <CodeEditorWithPreview
        Component={CustomizeTooltipContent}
        sourceCode={CustomizeTooltipContentSource}
        stackBlitzTitle="Recharts Customize Tooltip Content Example"
      />
      <p>
        For smaller adjustments you rarely need <code>content</code> at all: <code>formatter</code>,{' '}
        <code>labelFormatter</code>, <code>itemSorter</code> and <code>separator</code> cover most of what people
        actually want to change.
      </p>

      <h2>Tooltip and Legend styling</h2>
      <p>
        Because they are HTML, these two take style objects rather than SVG attributes - and they have more than one
        slot:
      </p>
      <ul>
        <li>
          <LinkToApi>Tooltip</LinkToApi>: <code>wrapperStyle</code> positions the floating box,{' '}
          <code>contentStyle</code> paints it, <code>labelStyle</code> is the header and <code>itemStyle</code> is one
          data row.
        </li>
        <li>
          <LinkToApi>Legend</LinkToApi>: <code>wrapperStyle</code> is the box and <code>labelStyle</code> is an
          individual entry. Beware the naming: <code>labelStyle</code> means the header on Tooltip and the entries on
          Legend.
        </li>
      </ul>
      <CodeEditorWithPreview
        Component={CustomizeLegendAndTooltipStyle}
        sourceCode={CustomizeLegendAndTooltipStyleSource}
        stackBlitzTitle="Recharts Customize Legend And Tooltip Style Example"
      />

      <h2>Your own elements inside the chart</h2>
      <p>
        Since Recharts 3, a chart renders arbitrary children. Your own component can sit next to{' '}
        <LinkToApi>Bar</LinkToApi> and <LinkToApi>XAxis</LinkToApi> and draw whatever it wants. The old{' '}
        <LinkToApi>Customized</LinkToApi> wrapper is no longer needed and is deprecated - render your component
        directly.
      </p>
      <p>
        What makes this useful is that chart state is available through hooks. <LinkToApi>usePlotArea</LinkToApi> tells
        you where the drawable area ended up after axes and legends took their space;{' '}
        <LinkToApi>useActiveTooltipDataPoints</LinkToApi>, <LinkToApi>useActiveTooltipLabel</LinkToApi> and{' '}
        <LinkToApi>useActiveTooltipCoordinate</LinkToApi> follow the pointer; <LinkToApi>useChartWidth</LinkToApi>,{' '}
        <LinkToApi>useChartHeight</LinkToApi>, <LinkToApi>useMargin</LinkToApi> and <LinkToApi>useOffset</LinkToApi>{' '}
        describe the layout. Recharts exports scale and domain hooks too, so a custom element can convert data values to
        pixels exactly the way the built-in components do.
      </p>
      <CodeEditorWithPreview
        Component={CustomizeCustomElement}
        sourceCode={CustomizeCustomElementSource}
        stackBlitzTitle="Recharts Customize Custom Element Example"
      />
      <p>
        Custom elements are yours, which means the theme does not style them. If you want them to follow the active
        theme, read it with <code>useRechartsTheme</code> - see the{' '}
        <RechartsLink to="guide/theming">theming guide</RechartsLink>. To control what draws on top of what, see the{' '}
        <RechartsLink to="guide/zIndex">z-index guide</RechartsLink>.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <RechartsLink to="guide/theming">Theming</RechartsLink> - set defaults for every chart at once instead of
          repeating props.
        </li>
        <li>
          <RechartsLink to="guide/axisTicks">Axis ticks</RechartsLink> - custom tick components, rotation and spacing.
        </li>
        <li>
          <RechartsLink to="guide/domainAndTicks">Domain and ticks</RechartsLink> - control which values an axis covers.
        </li>
        <li>
          <RechartsLink to="guide/animations">Animation</RechartsLink> - easing, matching strategies and fully custom
          interpolation.
        </li>
        <li>
          <RechartsLink to="guide/zIndex">Z-index and layers</RechartsLink> - decide what renders in front.
        </li>
        <li>
          <RechartsLink to="guide/roundedBars">Rounded bar corners</RechartsLink> and{' '}
          <RechartsLink to="guide/barAlignment">bar alignment</RechartsLink> - bar-specific geometry.
        </li>
        <li>
          <RechartsLink to="guide/cell">Migrating from Cell</RechartsLink> - per-data-point styling now goes through{' '}
          <code>shape</code>.
        </li>
        <li>
          <RechartsLink to="guide/sizes">Chart size</RechartsLink> - responsive sizing, which the theme deliberately
          does not control.
        </li>
      </ul>
    </article>
  );
}

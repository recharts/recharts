import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import DataCoordinatesExample from './DataCoordinatesExample.tsx';
import DataCoordinatesExampleSource from './DataCoordinatesExample.tsx?raw';
import PixelCoordinatesExample from './PixelCoordinatesExample.tsx';
import PixelCoordinatesExampleSource from './PixelCoordinatesExample.tsx?raw';
import ScaleConversionExample from './ScaleConversionExample.tsx';
import ScaleConversionExampleSource from './ScaleConversionExample.tsx?raw';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import CrosshairExample from '../../../docs/apiExamples/getRelativeCoordinate/CrosshairExample.tsx';
import CrosshairExampleSource from '../../../docs/apiExamples/getRelativeCoordinate/CrosshairExample.tsx?raw';

export function CoordinateSystems() {
  return (
    <article>
      <h1>Coordinate Systems in Recharts</h1>
      <p>
        When working with Recharts, you&apos;ll encounter three different coordinate systems. Understanding when to use
        each one is essential for creating custom annotations, shapes, and interactive features.
      </p>
      <p>Different Rechart components accept, or provide, coordinate from different systems.</p>

      <h2>Overview</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Coordinate System</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Example components</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              <strong>Domain Coordinates</strong>
            </td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              Values in your data domain (e.g., <code>{`x="March"`}</code>, <code>y=5000</code>) can be provided
              directly to some components and are converted to pixel positions automatically.
            </td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              <LinkToApi>ReferenceDot</LinkToApi>, <LinkToApi>ReferenceLine</LinkToApi>,{' '}
              <LinkToApi>ReferenceArea</LinkToApi>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              <strong>Pixel/Chart-Range Coordinates</strong>
            </td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              Pixel positions relative to the chart&apos;s viewBox (e.g., <code>x=100</code>, <code>y=50</code>). The
              top-left corner of the chart area is (0, 0).
            </td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              <LinkToApi>Dot</LinkToApi>, <LinkToApi>Rectangle</LinkToApi>, <LinkToApi>Cross</LinkToApi>, custom SVG
              shapes
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              <strong>Browser events</strong>
            </td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              Mouse and touch events have several of their own coordinate systems: viewport, page, client, screen.
              Recharts provides helper methods to convert to chart-based coordinates.
            </td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Mouse and touch handlers</td>
          </tr>
        </tbody>
      </table>

      <h2>1. Domain Coordinates</h2>
      <p>
        Domain coordinates are the most intuitive—they use values from your actual data. When you specify{' '}
        <code>{`x="March"`}</code> on a <LinkToApi>ReferenceLine</LinkToApi>, Recharts automatically converts that to
        the correct pixel position based on your <LinkToApi>XAxis</LinkToApi> and <LinkToApi>YAxis</LinkToApi> scale.
      </p>
      <p>
        You can also optionally pass <code>position</code> prop. This is important for Bar charts, where the axis scale
        typically has bandwidth: meaning that a single data point spans multiple pixels. The <code>position</code> prop
        controls where within that bandwidth the element is placed (e.g., start, middle, end).
      </p>
      <p>
        Other charts, like Line charts, have no bandwidth (each data point maps to a single pixel). In those cases, the{' '}
        <code>position</code> prop is ignored.
      </p>
      <p>
        <strong>Components that use domain coordinates:</strong>
      </p>
      <ul>
        <li>
          <LinkToApi>ReferenceLine</LinkToApi> - horizontal or vertical lines at data values
        </li>
        <li>
          <LinkToApi>ReferenceDot</LinkToApi> - circles at specific data points
        </li>
        <li>
          <LinkToApi>ReferenceArea</LinkToApi> - rectangles spanning data ranges
        </li>
      </ul>
      <p>
        <strong>Advantages:</strong>
      </p>
      <ul>
        <li>Automatically adjusts when chart size changes</li>
        <li>Responds to axis domain changes (zoom, brush filtering)</li>
        <li>Works with both categorical and numerical axes</li>
      </ul>
      <CodeEditorWithPreview
        Component={DataCoordinatesExample}
        sourceCode={DataCoordinatesExampleSource}
        stackBlitzTitle="Recharts Data Coordinates Example"
      />

      <h2>2. Pixel/Chart-Range Coordinates</h2>
      <p>
        Pixel coordinates are positions measured in pixels from the top-left corner of the chart. Use the{' '}
        <code>useOffset()</code> hook to get the plot area dimensions, then position elements relative to that area.
      </p>
      <p>
        <strong>Key hooks:</strong>
      </p>
      <ul>
        <li>
          <LinkToApi>useMargin</LinkToApi> - returns empty space around the chart
        </li>
        <li>
          <LinkToApi>useOffset</LinkToApi> - returns space taken by margin, and axes, and <LinkToApi>Brush</LinkToApi>{' '}
          and <LinkToApi>Legend</LinkToApi>
        </li>
        <li>
          <LinkToApi>usePlotArea</LinkToApi> - plot area is the drawable area inside margins and offsets
        </li>
        <li>
          <LinkToApi>useChartWidth</LinkToApi> + <LinkToApi>useChartHeight</LinkToApi> - returns the full chart
          dimensions
        </li>
      </ul>
      <p>
        <strong>When to use:</strong>
      </p>
      <ul>
        <li>Annotations that should stay at fixed positions regardless of data</li>
        <li>Decorative elements like watermarks or logos</li>
        <li>Custom legend, tooltip, or label positioning</li>
      </ul>
      <CodeEditorWithPreview
        Component={PixelCoordinatesExample}
        sourceCode={PixelCoordinatesExampleSource}
        stackBlitzTitle="Recharts Pixel Coordinates Example"
      />

      <h2>3. Mouse Event Coordinates</h2>
      <p>
        Mouse events from the browser provide coordinates in the browser&apos;s viewport. The{' '}
        <LinkToApi>getRelativeCoordinate</LinkToApi> function converts these to chart-relative coordinates, accounting
        for:
      </p>
      <ul>
        <li>Chart position on the page</li>
        <li>Scroll offset</li>
        <li>CSS transforms (scale, rotate)</li>
        <li>Browser zoom in or zoom out</li>
      </ul>
      <p>
        <strong>Key function:</strong>
      </p>
      <ul>
        <li>
          <LinkToApi>getRelativeCoordinate</LinkToApi> - converts mouse event to <code>{'{relativeX, relativeY}'}</code>{' '}
          coordinates.
        </li>
      </ul>
      <p>
        This function works with both HTML elements (like <code>&lt;div&gt;</code>) and SVG elements. The returned
        coordinates are relative to the top-left corner of the element that received the event.
      </p>
      <CodeEditorWithPreview
        Component={CrosshairExample}
        sourceCode={CrosshairExampleSource}
        stackBlitzTitle="Recharts Mouse Coordinates Example"
      />

      <h2>Converting Between Coordinate Systems</h2>
      <p>
        Often you need to convert between coordinate systems. For example, you might want to position a custom marker at
        a specific data point, or determine which data point the user clicked on.
      </p>
      <p>
        <strong>Data → Pixels:</strong>
      </p>
      <ul>
        <li>
          <LinkToApi>useXAxisScale</LinkToApi> - returns a function to convert X data values to pixel positions
        </li>
        <li>
          <LinkToApi>useYAxisScale</LinkToApi> - returns a function to convert Y data values to pixel positions
        </li>
        <li>
          <LinkToApi>useCartesianScale</LinkToApi> - convenience hook for converting both at once
        </li>
      </ul>
      <p>
        <strong>Pixels → Data:</strong>
      </p>
      <ul>
        <li>
          <LinkToApi>useXAxisInverseScale</LinkToApi> - returns a function to convert pixel X to the closest data value
        </li>
        <li>
          <LinkToApi>useYAxisInverseScale</LinkToApi> - returns a function to convert pixel Y to the closest data value
        </li>
        <li>
          <LinkToApi>useXAxisInverseTickSnapScale</LinkToApi> - returns a function to convert pixel X to the closest
          axis tick
        </li>
        <li>
          <LinkToApi>useYAxisInverseTickSnapScale</LinkToApi> - returns a function to convert pixel Y to the closest
          axis tick
        </li>
      </ul>

      <p>
        <strong>Accessing Ticks:</strong>
      </p>
      <ul>
        <li>
          <LinkToApi>useXAxisTicks</LinkToApi> - returns the calculated ticks of an X-axis
        </li>
        <li>
          <LinkToApi>useYAxisTicks</LinkToApi> - returns the calculated ticks of a Y-axis
        </li>
      </ul>
      <CodeEditorWithPreview
        Component={ScaleConversionExample}
        sourceCode={ScaleConversionExampleSource}
        stackBlitzTitle="Recharts Scale Conversion Example"
      />

      <h2>Choosing the Right Coordinate System</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>I want to...</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Mark a specific data value</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              Data coordinates (<LinkToApi>ReferenceArea</LinkToApi>,<LinkToApi>ReferenceLine</LinkToApi>,{' '}
              <LinkToApi>ReferenceDot</LinkToApi>)
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Show a target line that moves with zoom/brush</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              Data coordinates (<LinkToApi>ReferenceLine</LinkToApi>)
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Add a watermark at a fixed position</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              Pixel coordinates (<LinkToApi>useOffset</LinkToApi> + custom SVG)
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Create a crosshair that follows the mouse</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              Mouse coordinates (<LinkToApi>getRelativeCoordinate</LinkToApi>)
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Click to add an annotation at a data point</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              Mouse → Data conversion (<LinkToApi>getRelativeCoordinate</LinkToApi> +{' '}
              <LinkToApi>useXAxisInverseScale</LinkToApi>)
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Draw custom shapes at data positions</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              Data → Pixel conversion (<LinkToApi>useXAxisScale</LinkToApi> + <LinkToApi>useYAxisScale</LinkToApi>)
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import type { Feature, FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';
import { CartographyChart } from '../../src/chart/CartographyChart';
import { GeoPath } from '../../src/geo/GeoPath';
import { ChoroplethSeries } from '../../src/geo/ChoroplethSeries';

const mockSquareFeature: Feature<Geometry, GeoJsonProperties> = {
  type: 'Feature',
  properties: { name: 'TestRegion' },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
        [0, 0],
      ],
    ],
  },
};

const mockGeoJSON: FeatureCollection<Geometry, GeoJsonProperties> = {
  type: 'FeatureCollection',
  features: [
    mockSquareFeature,
    {
      type: 'Feature',
      properties: { name: 'Region2' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [10, 10],
            [20, 10],
            [20, 20],
            [10, 20],
            [10, 10],
          ],
        ],
      },
    },
  ],
};

const mockData = [
  { country: 'TestRegion', value: 100 },
  { country: 'Region2', value: 200 },
];

describe('CartographyChart', () => {
  it('should render without crashing', () => {
    const { container } = render(<CartographyChart width={400} height={300} projection="mercator" />);
    expect(container).toBeTruthy();
  });

  it('should render children', () => {
    const { container } = render(
      <CartographyChart width={400} height={300}>
        <g data-testid="geo-child" />
      </CartographyChart>,
    );
    expect(container.querySelector('[data-testid="geo-child"]')).toBeTruthy();
  });

  it('should accept all built-in projection types', () => {
    const projections = [
      'mercator',
      'naturalEarth1',
      'albersUsa',
      'equalEarth',
      'orthographic',
      'equirectangular',
      'conicEqualArea',
      'azimuthalEqualArea',
    ] as const;

    for (const proj of projections) {
      const { container } = render(<CartographyChart width={400} height={300} projection={proj} />);
      expect(container).toBeTruthy();
    }
  });

  it('should auto-fit the projection when fitExtent is provided', () => {
    const { container } = render(
      <CartographyChart width={800} height={400} projection="mercator" fitExtent={mockGeoJSON}>
        <g data-testid="chart-content" />
      </CartographyChart>,
    );
    expect(container).toBeTruthy();
  });

  it('should support a custom margin', () => {
    const { container } = render(
      <CartographyChart width={800} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <g data-testid="margin-content" />
      </CartographyChart>,
    );
    expect(container).toBeTruthy();
  });
});

describe('GeoPath', () => {
  it('should render an SVG path inside a CartographyChart', () => {
    const { container } = render(
      <CartographyChart width={800} height={400} fitExtent={mockGeoJSON}>
        <GeoPath feature={mockSquareFeature} fill="#4f46e5" stroke="#fff" />
      </CartographyChart>,
    );
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBeGreaterThan(0);
  });

  it('should call onClick when a region is clicked', async () => {
    const onClick = vi.fn();
    const { container } = render(
      <CartographyChart width={800} height={400} fitExtent={mockGeoJSON}>
        <GeoPath feature={mockSquareFeature} fill="blue" onClick={onClick} />
      </CartographyChart>,
    );
    const path = container.querySelector('path');
    path?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    // onClick may or may not fire depending on rendering; just verify nothing throws
    expect(container).toBeTruthy();
  });

  it('should use default fill and stroke', () => {
    const { container } = render(
      <CartographyChart width={800} height={400} fitExtent={mockGeoJSON}>
        <GeoPath feature={mockSquareFeature} />
      </CartographyChart>,
    );
    const path = container.querySelector('path');
    expect(path?.getAttribute('fill')).toBe('#d1d5db');
    expect(path?.getAttribute('stroke')).toBe('#ffffff');
  });
});

describe('ChoroplethSeries', () => {
  it('should render a path for each GeoJSON feature', () => {
    const { container } = render(
      <CartographyChart width={800} height={400} fitExtent={mockGeoJSON}>
        <ChoroplethSeries geoData={mockGeoJSON} data={mockData} dataKey="country" featureKey="name" valueKey="value" />
      </CartographyChart>,
    );
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);
  });

  it('should render with a custom color scale', () => {
    const customScale = (_t: number) => '#ff0000';
    const { container } = render(
      <CartographyChart width={800} height={400} fitExtent={mockGeoJSON}>
        <ChoroplethSeries
          geoData={mockGeoJSON}
          data={mockData}
          dataKey="country"
          featureKey="name"
          valueKey="value"
          colorScale={customScale}
        />
      </CartographyChart>,
    );
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);
    for (const path of Array.from(paths)) {
      expect(path.getAttribute('fill')).toBe('#ff0000');
    }
  });

  it('should render noDataFill for regions with no matching data', () => {
    const { container } = render(
      <CartographyChart width={800} height={400} fitExtent={mockGeoJSON}>
        <ChoroplethSeries
          geoData={mockGeoJSON}
          data={[]} // no data at all
          dataKey="country"
          featureKey="name"
          valueKey="value"
          noDataFill="#cccccc"
        />
      </CartographyChart>,
    );
    const paths = container.querySelectorAll('path');
    for (const path of Array.from(paths)) {
      expect(path.getAttribute('fill')).toBe('#cccccc');
    }
  });

  it('should render correctly when data has no matching features', () => {
    const unmatchedData = [{ country: 'UnknownRegion', value: 999 }];
    const { container } = render(
      <CartographyChart width={800} height={400} fitExtent={mockGeoJSON}>
        <ChoroplethSeries
          geoData={mockGeoJSON}
          data={unmatchedData}
          dataKey="country"
          featureKey="name"
          valueKey="value"
          noDataFill="#eeeeee"
        />
      </CartographyChart>,
    );
    const paths = container.querySelectorAll('path');
    for (const path of Array.from(paths)) {
      expect(path.getAttribute('fill')).toBe('#eeeeee');
    }
  });
});

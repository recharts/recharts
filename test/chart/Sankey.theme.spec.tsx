import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import {
  RechartsTheme,
  RechartsThemeProvider,
  Sankey,
  SankeyData,
  SankeyLinkProps,
  SankeyNodeProps,
  Tooltip,
} from '../../src';
import { THEMED_LINK_STROKE_OPACITY } from '../../src/chart/Sankey';
import { emptyTheme } from '../../src/theme/emptyTheme';
import { lightTheme } from '../../src/theme/lightTheme';
import { showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import {
  sankeyLinkMouseHoverTooltipSelector,
  sankeyNodeMouseHoverTooltipSelector,
} from '../component/Tooltip/tooltipMouseHoverSelectors';
import { assertNotNull } from '../helper/assertNotNull';

const data: SankeyData = {
  nodes: [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
  links: [
    { source: 0, target: 1, value: 10 },
    { source: 0, target: 2, value: 5 },
    { source: 1, target: 2, value: 10 },
  ],
};

const theme: RechartsTheme = {
  graphicalItems: [
    { fill: 'red', stroke: 'darkred', fillOpacity: 0.5 },
    { fill: 'green', stroke: 'darkgreen', fillOpacity: 0.5 },
  ],
};

function getAttributes(element: Element) {
  return {
    fill: element.getAttribute('fill'),
    fillOpacity: element.getAttribute('fill-opacity'),
    stroke: element.getAttribute('stroke'),
    strokeOpacity: element.getAttribute('stroke-opacity'),
  };
}

function getNodes(container: Element) {
  return Array.from(container.querySelectorAll('.recharts-sankey-nodes .recharts-rectangle')).map(getAttributes);
}

function getLinks(container: Element) {
  return Array.from(container.querySelectorAll('.recharts-sankey-link')).map(getAttributes);
}

function renderSankey(
  activeTheme: RechartsTheme | undefined,
  props: Partial<React.ComponentProps<typeof Sankey>> = {},
  children: React.ReactNode = null,
) {
  return render(
    <RechartsThemeProvider value={activeTheme}>
      <Sankey width={400} height={300} data={data} {...props}>
        {children}
      </Sankey>
    </RechartsThemeProvider>,
  );
}

const legacyNode = { fill: '#0088fe', fillOpacity: '0.8', stroke: null, strokeOpacity: null };
const legacyLink = { fill: 'none', fillOpacity: null, stroke: '#333', strokeOpacity: '0.2' };
/**
 * With a theme, none of the legacy styles apply. Links keep `fill="none"` because they are drawn as a stroke.
 */
const unstyledNode = { fill: null, fillOpacity: null, stroke: null, strokeOpacity: null };
const unstyledLink = { fill: 'none', fillOpacity: null, stroke: null, strokeOpacity: null };
const redNode = { fill: 'red', fillOpacity: '0.5', stroke: 'darkred', strokeOpacity: null };
const greenNode = { fill: 'green', fillOpacity: '0.5', stroke: 'darkgreen', strokeOpacity: null };
const themedLinkOpacity = String(THEMED_LINK_STROKE_OPACITY);

describe('<Sankey /> theme', () => {
  it('keeps the legacy colors without a theme', () => {
    const { container } = renderSankey(undefined);
    expect(getNodes(container)).toEqual([legacyNode, legacyNode, legacyNode]);
    expect(getLinks(container)).toEqual([legacyLink, legacyLink, legacyLink]);
  });

  it('applies styles from data without a theme, over the legacy colors', () => {
    const { container } = renderSankey(undefined, {
      data: {
        nodes: [{ name: 'A', fill: 'blue' }, { name: 'B' }, { name: 'C' }],
        links: [{ source: 0, target: 1, value: 10, stroke: 'blue' }, ...data.links.slice(1)],
      },
    });
    expect(getNodes(container)).toEqual([{ ...legacyNode, fill: 'blue' }, legacyNode, legacyNode]);
    expect(getLinks(container)).toEqual([{ ...legacyLink, stroke: 'blue' }, legacyLink, legacyLink]);
  });

  describe.each([
    ['without a theme', undefined, legacyNode, legacyLink],
    ['with a theme', theme, redNode, { ...unstyledLink, stroke: 'red', strokeOpacity: themedLinkOpacity }],
  ])('nullish styles in data %s', (_, activeTheme, expectedNode, expectedLink) => {
    it('keeps the fallback styles', () => {
      const { container } = renderSankey(activeTheme, {
        data: {
          nodes: [{ name: 'A', fill: undefined, stroke: null }, { name: 'B' }, { name: 'C' }],
          links: [{ source: 0, target: 1, value: 10, stroke: undefined }, ...data.links.slice(1)],
        },
      });
      expect(getNodes(container)[0]).toEqual(expectedNode);
      expect(getLinks(container)[0]).toEqual(expectedLink);
    });
  });

  it('accepts SVG props in typed link entries', () => {
    const typedData: SankeyData = {
      nodes: data.nodes,
      links: [
        { source: 0, target: 1, value: 10, className: 'typed', opacity: 0.5, style: { cursor: 'help' } },
        ...data.links.slice(1),
      ],
    };
    const { container } = renderSankey(undefined, { data: typedData });
    const link = container.querySelector('.recharts-sankey-link');
    assertNotNull(link);
    expect(link.classList).toContain('typed');
    expect(link.getAttribute('opacity')).toBe('0.5');
  });

  it('does not let targetX and targetY from link data move the link', () => {
    const { container: expected } = renderSankey(undefined);
    const linkEntryProps: Record<string, unknown> = { targetX: 0, targetY: 0 };
    const { container } = renderSankey(undefined, {
      data: {
        nodes: data.nodes,
        links: [{ source: 0, target: 1, value: 10, ...linkEntryProps }, ...data.links.slice(1)],
      },
    });
    const getPath = (element: Element) => element.querySelector('.recharts-sankey-link')?.getAttribute('d');
    expect(getPath(container)).toBe(getPath(expected));
    expect(container.querySelector('.recharts-sankey-link')?.hasAttribute('targetX')).toBe(false);
  });

  it('merges styles from data with explicit node and link props without a theme', () => {
    const { container } = renderSankey(undefined, {
      node: { stroke: 'black', fill: 'purple' },
      link: { stroke: 'orange', strokeOpacity: 0.7 },
      data: {
        nodes: [{ name: 'A', fill: 'blue' }, { name: 'B' }, { name: 'C' }],
        links: [{ source: 0, target: 1, value: 10, strokeOpacity: 1 }, ...data.links.slice(1)],
      },
    });
    expect(getNodes(container)).toEqual([
      { ...legacyNode, fill: 'blue', stroke: 'black' },
      { ...legacyNode, fill: 'purple', stroke: 'black' },
      { ...legacyNode, fill: 'purple', stroke: 'black' },
    ]);
    expect(getLinks(container)).toEqual([
      { ...legacyLink, stroke: 'orange', strokeOpacity: '1' },
      { ...legacyLink, stroke: 'orange', strokeOpacity: '0.7' },
      { ...legacyLink, stroke: 'orange', strokeOpacity: '0.7' },
    ]);
  });

  describe.each([
    ['without a theme', undefined],
    ['with a theme', theme],
  ])('SVG props from data %s', (_, activeTheme) => {
    const entryProps = {
      opacity: 0.5,
      strokeDasharray: '3 3',
      className: 'from-data',
      style: { cursor: 'help' },
      'data-test': 'from-data',
      notAnSvgProp: 'ignored',
    };

    // `LinkDataItem` only types the theme styles, but Sankey reads every SVG prop from the entry at runtime
    const linkEntryProps: Record<string, unknown> = { id: 'link-id', d: 'M0,0', ...entryProps };

    function renderWithEntryProps() {
      return renderSankey(activeTheme, {
        data: {
          nodes: [{ name: 'A', id: 'node-id', ...entryProps }, { name: 'B' }, { name: 'C' }],
          links: [{ source: 0, target: 1, value: 10, ...linkEntryProps }, ...data.links.slice(1)],
        },
      });
    }

    function getShapes(container: Element) {
      const node = container.querySelector('.recharts-sankey-nodes .recharts-rectangle');
      const link = container.querySelector('.recharts-sankey-link');
      assertNotNull(node);
      assertNotNull(link);
      return { node, link };
    }

    it('spreads valid SVG props on the node and the link', () => {
      const { container } = renderWithEntryProps();
      const { node, link } = getShapes(container);
      [node, link].forEach(element => {
        expect(element.getAttribute('opacity')).toBe('0.5');
        expect(element.getAttribute('stroke-dasharray')).toBe('3 3');
        expect(element.getAttribute('data-test')).toBe('from-data');
        expect(element.getAttribute('style')).toBe('cursor: help;');
        expect(element.classList).toContain('from-data');
        expect(element.hasAttribute('notAnSvgProp')).toBe(false);
      });
    });

    it('removes id from data, and does not let data change the link path or set the link target', () => {
      const { container } = renderWithEntryProps();
      const { node, link } = getShapes(container);
      expect(node.hasAttribute('id')).toBe(false);
      expect(link.hasAttribute('id')).toBe(false);
      expect(link.hasAttribute('target')).toBe(false);
      expect(link.getAttribute('d')).not.toBe('M0,0');
    });
  });

  it('colors nodes by their index in data, and repeats the theme colors', () => {
    const { container } = renderSankey(theme);
    expect(getNodes(container)).toEqual([redNode, greenNode, redNode]);
  });

  it('colors links with the color of their source node', () => {
    const { container } = renderSankey(theme);
    expect(getLinks(container)).toEqual([
      { fill: 'none', fillOpacity: null, stroke: 'red', strokeOpacity: themedLinkOpacity },
      { fill: 'none', fillOpacity: null, stroke: 'red', strokeOpacity: themedLinkOpacity },
      { fill: 'none', fillOpacity: null, stroke: 'green', strokeOpacity: themedLinkOpacity },
    ]);
  });

  it('uses the palette of the built-in theme', () => {
    const { container } = renderSankey(lightTheme);
    const nodes = getNodes(container);
    expect(nodes.map(node => node.fill)).toEqual([
      lightTheme.graphicalItems[0]?.fill,
      lightTheme.graphicalItems[1]?.fill,
      lightTheme.graphicalItems[2]?.fill,
    ]);
    expect(new Set(nodes.map(node => node.fill)).size).toBe(3);
  });

  it('applies no styles at all with the empty theme, which has no colors', () => {
    const { container } = renderSankey(emptyTheme);
    expect(getNodes(container)).toEqual([unstyledNode, unstyledNode, unstyledNode]);
    expect(getLinks(container)).toEqual([unstyledLink, unstyledLink, unstyledLink]);
  });

  it('ignores the theme colors for nodes with explicit colors, and lets explicit link props override the theme', () => {
    const { container } = renderSankey(theme, {
      node: { fill: 'blue', fillOpacity: 1 },
      link: { stroke: 'orange', strokeOpacity: 0.7 },
    });
    expect(getNodes(container)).toEqual([
      { ...unstyledNode, fill: 'blue', fillOpacity: '1' },
      { ...unstyledNode, fill: 'blue', fillOpacity: '1' },
      { ...unstyledNode, fill: 'blue', fillOpacity: '1' },
    ]);
    expect(getLinks(container)).toEqual([
      { ...unstyledLink, stroke: 'orange', strokeOpacity: '0.7' },
      { ...unstyledLink, stroke: 'orange', strokeOpacity: '0.7' },
      { ...unstyledLink, stroke: 'orange', strokeOpacity: '0.7' },
    ]);
  });

  it('keeps the themed link opacity when the link prop only sets a stroke', () => {
    const { container } = renderSankey(theme, { link: { stroke: 'orange' } });
    expect(getLinks(container)).toEqual([
      { ...unstyledLink, stroke: 'orange', strokeOpacity: themedLinkOpacity },
      { ...unstyledLink, stroke: 'orange', strokeOpacity: themedLinkOpacity },
      { ...unstyledLink, stroke: 'orange', strokeOpacity: themedLinkOpacity },
    ]);
  });

  it('colors links with the explicit node fill', () => {
    const { container } = renderSankey(theme, { node: { fill: 'blue' } });
    expect(getLinks(container).map(link => link.stroke)).toEqual(['blue', 'blue', 'blue']);
  });

  it('ignores the theme colors for nodes and links that define their own colors in data', () => {
    const { container } = renderSankey(theme, {
      data: {
        nodes: [{ name: 'A', fill: 'blue' }, { name: 'B', stroke: 'black' }, { name: 'C' }],
        links: [{ source: 0, target: 1, value: 10, stroke: 'orange' }, ...data.links.slice(1)],
      },
    });
    // the other theme styles still apply
    expect(getNodes(container)).toEqual([
      { ...unstyledNode, fill: 'blue', fillOpacity: '0.5' },
      { ...unstyledNode, stroke: 'black', fillOpacity: '0.5' },
      redNode,
    ]);
    expect(getLinks(container)).toEqual([
      { ...unstyledLink, stroke: 'orange', strokeOpacity: themedLinkOpacity },
      // the link does not define its own styles, so it follows its source node, including the color from data
      { ...unstyledLink, stroke: 'blue', strokeOpacity: themedLinkOpacity },
      // the source node has no fill, so the link falls back to its stroke
      { ...unstyledLink, stroke: 'black', strokeOpacity: themedLinkOpacity },
    ]);
  });

  it('merges styles without a color with the theme', () => {
    const { container } = renderSankey(theme, {
      node: { strokeDasharray: '4 2' },
      data: {
        nodes: [{ name: 'A', strokeWidth: 3 }, { name: 'B' }, { name: 'C' }],
        links: data.links,
      },
    });
    const nodes = Array.from(container.querySelectorAll('.recharts-sankey-nodes .recharts-rectangle'));
    expect(nodes.map(getAttributes)).toEqual([redNode, greenNode, redNode]);
    expect(nodes.map(node => node.getAttribute('stroke-dasharray'))).toEqual(['4 2', '4 2', '4 2']);
    expect(nodes.map(node => node.getAttribute('stroke-width'))).toEqual(['3', null, null]);
  });

  it('keeps styles from link data when the source node is not painted', () => {
    const { container } = renderSankey(emptyTheme, {
      data: {
        nodes: data.nodes,
        links: [{ source: 0, target: 1, value: 10, strokeDasharray: '3 3' }, ...data.links.slice(1)],
      },
    });
    const link = container.querySelector('.recharts-sankey-link');
    assertNotNull(link);
    expect(link.getAttribute('stroke-dasharray')).toBe('3 3');
  });

  it('lets styles from data override explicit props', () => {
    const { container } = renderSankey(theme, {
      node: { fill: 'purple' },
      data: {
        nodes: [{ name: 'A', fill: 'blue' }, { name: 'B' }, { name: 'C' }],
        links: data.links,
      },
    });
    expect(getNodes(container).map(node => node.fill)).toEqual(['blue', 'purple', 'purple']);
  });

  it('passes the theme styles to custom node and link renderers', () => {
    const nodeFills: Array<unknown> = [];
    const linkStrokes: Array<unknown> = [];
    renderSankey(theme, {
      node: props => {
        nodeFills.push(props.fill);
        return <rect />;
      },
      link: props => {
        linkStrokes.push(props.stroke);
        return <path />;
      },
    });
    expect(nodeFills).toEqual(['red', 'green', 'red']);
    expect(linkStrokes).toEqual(['red', 'red', 'green']);
  });

  it.each([
    ['without a theme', undefined],
    ['with a theme', theme],
  ])('passes styles from data and the full payload to custom node and link renderers %s', (_, activeTheme) => {
    const nodeProps: Array<SankeyNodeProps> = [];
    const linkProps: Array<SankeyLinkProps> = [];
    renderSankey(activeTheme, {
      data: {
        nodes: [{ name: 'A', fill: 'blue', id: 'node-id', extra: 1 }, { name: 'B' }, { name: 'C' }],
        links: [{ source: 0, target: 1, value: 10, stroke: 'orange' }, ...data.links.slice(1)],
      },
      node: props => {
        nodeProps.push(props);
        return <rect />;
      },
      link: props => {
        linkProps.push(props);
        return <path />;
      },
    });
    expect(nodeProps[0]?.fill).toBe('blue');
    expect(nodeProps[0]).not.toHaveProperty('id');
    expect(nodeProps[0]?.payload).toMatchObject({ name: 'A', fill: 'blue', id: 'node-id', extra: 1 });
    expect(linkProps[0]?.stroke).toBe('orange');
    expect(linkProps[0]?.payload).toMatchObject({ value: 10, stroke: 'orange' });
  });

  it('colors links with the inline style fill of the source node, which wins over the fill attribute', () => {
    const { container } = renderSankey(theme, { node: { style: { fill: 'blue' } } });
    expect(getLinks(container).map(link => link.stroke)).toEqual(['blue', 'blue', 'blue']);
  });

  it('does not color links when the source node is painted with none', () => {
    const { container } = renderSankey(theme, { node: { style: { fill: 'none', stroke: 'none' } } });
    expect(getLinks(container)).toEqual([unstyledLink, unstyledLink, unstyledLink]);
  });

  describe('Tooltip', () => {
    function getTooltipItemColor(container: Element): string | undefined {
      const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
      assertNotNull(item);
      return item.style.color;
    }

    it('uses the color of the hovered node', () => {
      const { container } = renderSankey(theme, {}, <Tooltip />);
      showTooltip(container, sankeyNodeMouseHoverTooltipSelector);
      expect(getTooltipItemColor(container)).toBe('red');
    });

    it('uses the color of the hovered link', () => {
      const { container } = renderSankey(theme, { node: { fill: 'blue' } }, <Tooltip />);
      showTooltip(container, sankeyLinkMouseHoverTooltipSelector);
      expect(getTooltipItemColor(container)).toBe('blue');
    });

    it('uses the inline style fill of the hovered node', () => {
      const { container } = renderSankey(theme, { node: { style: { fill: 'blue' } } }, <Tooltip />);
      showTooltip(container, sankeyNodeMouseHoverTooltipSelector);
      expect(getTooltipItemColor(container)).toBe('blue');
    });

    it('uses the inline style stroke of the hovered link', () => {
      const { container } = renderSankey(theme, { link: { style: { stroke: 'orange' } } }, <Tooltip />);
      showTooltip(container, sankeyLinkMouseHoverTooltipSelector);
      expect(getTooltipItemColor(container)).toBe('orange');
    });

    it('keeps the legacy color without a theme', () => {
      const { container } = renderSankey(undefined, { fill: 'purple' }, <Tooltip />);
      showTooltip(container, sankeyNodeMouseHoverTooltipSelector);
      expect(getTooltipItemColor(container)).toBe('purple');
    });
  });
});

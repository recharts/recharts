import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { RechartsTheme, RechartsThemeProvider, Sankey, SankeyData, Tooltip } from '../../src';
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

  it('ignores styles in data without a theme', () => {
    const { container } = renderSankey(undefined, {
      data: {
        nodes: [{ name: 'A', fill: 'blue' }, { name: 'B' }, { name: 'C' }],
        links: [{ source: 0, target: 1, value: 10, stroke: 'blue' }, ...data.links.slice(1)],
      },
    });
    expect(getNodes(container)).toEqual([legacyNode, legacyNode, legacyNode]);
    expect(getLinks(container)).toEqual([legacyLink, legacyLink, legacyLink]);
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

  it('lets explicit node and link props override the theme', () => {
    const { container } = renderSankey(theme, {
      node: { fill: 'blue', fillOpacity: 1 },
      link: { stroke: 'orange', strokeOpacity: 0.7 },
    });
    expect(getNodes(container)).toEqual([
      { ...redNode, fill: 'blue', fillOpacity: '1' },
      { ...greenNode, fill: 'blue', fillOpacity: '1' },
      { ...redNode, fill: 'blue', fillOpacity: '1' },
    ]);
    expect(getLinks(container)).toEqual([
      { ...unstyledLink, stroke: 'orange', strokeOpacity: '0.7' },
      { ...unstyledLink, stroke: 'orange', strokeOpacity: '0.7' },
      { ...unstyledLink, stroke: 'orange', strokeOpacity: '0.7' },
    ]);
  });

  it('colors links with the explicit node fill', () => {
    const { container } = renderSankey(theme, { node: { fill: 'blue' } });
    expect(getLinks(container).map(link => link.stroke)).toEqual(['blue', 'blue', 'blue']);
  });

  it('ignores the theme for nodes and links that define their own styles in data', () => {
    const { container } = renderSankey(theme, {
      data: {
        nodes: [{ name: 'A', fill: 'blue' }, { name: 'B', stroke: 'black' }, { name: 'C' }],
        links: [{ source: 0, target: 1, value: 10, stroke: 'orange' }, ...data.links.slice(1)],
      },
    });
    expect(getNodes(container)).toEqual([
      { ...unstyledNode, fill: 'blue' },
      { ...unstyledNode, stroke: 'black' },
      redNode,
    ]);
    expect(getLinks(container)).toEqual([
      { ...unstyledLink, stroke: 'orange' },
      // the link does not define its own styles, so it follows its source node, including the color from data
      { ...unstyledLink, stroke: 'blue', strokeOpacity: themedLinkOpacity },
      // the source node has no fill, so the link falls back to its stroke
      { ...unstyledLink, stroke: 'black', strokeOpacity: themedLinkOpacity },
    ]);
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

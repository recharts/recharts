import { useState } from 'react';
import { ResponsiveContainer, Treemap, SunburstChart, Tooltip, type TreemapNode } from 'recharts';
import bundleData from './bundle-data.json';

// ─── Types ───────────────────────────────────────────────────────────────────

interface BundleNode {
  name: string;
  /** Size in bytes (leaf nodes and pre-computed branch totals). */
  value: number;
  children?: BundleNode[];
}

interface BundleData {
  components: string[];
  generatedAt: string;
  totalSize: number;
  tree: BundleNode;
}

// ─── Colour palette ──────────────────────────────────────────────────────────

const PALETTE = [
  '#61dafb', // cyan (recharts blue)
  '#a78bfa', // violet
  '#34d399', // emerald
  '#f59e0b', // amber
  '#f87171', // red
  '#60a5fa', // blue
  '#fb923c', // orange
  '#c084fc', // purple
  '#4ade80', // green
  '#38bdf8', // sky
  '#e879f9', // fuchsia
  '#facc15', // yellow
];

function colorForIndex(i: number): string {
  return PALETTE[i % PALETTE.length] ?? PALETTE[0];
}

// ─── Data helpers ─────────────────────────────────────────────────────────────

const data = bundleData as BundleData;

/** Top-level directory groups (children of the root). */
const topLevelGroups = data.tree.children ?? [];

/** Assign a stable colour to each top-level directory group. */
const groupColor = new Map<string, string>(topLevelGroups.map((g, i) => [g.name, colorForIndex(i)]));

/**
 * Walk the tree and assign `fill` to every node based on its top-level ancestor.
 * Returns a new tree — does not mutate the original.
 */
function colorize(node: BundleNode, topName?: string): BundleNode & { fill?: string } {
  const name = topName ?? node.name;
  const fill = groupColor.get(name);
  return {
    ...node,
    fill,
    children: node.children?.map(child => colorize(child, name)),
  };
}

const colorizedTree = colorize(data.tree);

// ─── Custom Treemap cell ──────────────────────────────────────────────────────

const COLORS = PALETTE;

function CustomTreemapCell(props: {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  name?: string;
  value?: number;
  depth?: number;
  root?: TreemapNode;
}) {
  const { x = 0, y = 0, width = 0, height = 0, index = 0, name, value, depth = 0 } = props;
  const fill = COLORS[index % COLORS.length] ?? COLORS[0];
  const opacity = 1 - depth * 0.18;

  // Don't render tiny cells or branch containers
  if (width < 4 || height < 4) return null;

  const showLabel = width > 50 && height > 24;
  const kB = value != null ? `${(value / 1024).toFixed(1)} kB` : '';

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        fillOpacity={opacity}
        stroke="#141414"
        strokeWidth={depth === 0 ? 2 : 1}
      />
      {showLabel && (
        <text
          x={x + width / 2}
          y={y + height / 2 - (kB ? 8 : 0)}
          textAnchor="middle"
          fill="#fff"
          fontSize={Math.min(14, width / 8)}
          fontFamily="monospace"
          pointerEvents="none"
        >
          {name}
        </text>
      )}
      {showLabel && kB && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 10}
          textAnchor="middle"
          fill="#ffffffaa"
          fontSize={Math.min(11, width / 10)}
          fontFamily="monospace"
          pointerEvents="none"
        >
          {kB}
        </text>
      )}
    </g>
  );
}

// ─── Tooltip formatter ────────────────────────────────────────────────────────

function formatTooltip(value: number | string | Array<number | string>) {
  const num = typeof value === 'number' ? value : Number(value);
  return [`${(num / 1024).toFixed(2)} kB`, 'Size'];
}

// ─── Tab button ───────────────────────────────────────────────────────────────

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 24px',
        background: active ? '#61dafb' : '#2a2a2a',
        color: active ? '#141414' : '#aaa',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontFamily: 'monospace',
        fontSize: 14,
        fontWeight: active ? 700 : 400,
        transition: 'background 0.15s',
      }}
    >
      {label}
    </button>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        gap: 12,
        color: '#666',
      }}
    >
      <div style={{ fontSize: 40 }}>📦</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: '#aaa' }}>No bundle data yet</div>
      <div style={{ fontSize: 13, textAlign: 'center', maxWidth: 440, lineHeight: 1.6 }}>
        Run the data generation script from the repo root, then refresh:
        <br />
        <code
          style={{
            display: 'block',
            marginTop: 10,
            padding: '8px 16px',
            background: '#1e1e1e',
            borderRadius: 6,
            color: '#61dafb',
            fontSize: 13,
          }}
        >
          npm run generate-bundle-data
        </code>
      </div>
    </div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────

function Legend() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 20px',
        marginTop: 12,
        padding: '12px 16px',
        background: '#1e1e1e',
        borderRadius: 8,
      }}
    >
      {topLevelGroups.map((g, i) => (
        <span key={g.name} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 2,
              background: colorForIndex(i),
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span style={{ color: '#ccc', fontFamily: 'monospace' }}>
            {g.name}
            <span style={{ color: '#666', marginLeft: 4 }}>({(g.value / 1024).toFixed(1)} kB)</span>
          </span>
        </span>
      ))}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

type ChartView = 'treemap' | 'sunburst';

export default function App() {
  const [view, setView] = useState<ChartView>('treemap');

  const isEmpty = data.totalSize === 0;
  const totalKb = (data.totalSize / 1024).toFixed(2);
  const componentSummary =
    data.components.length <= 5
      ? data.components.join(', ')
      : `${data.components.slice(0, 5).join(', ')} … +${data.components.length - 5} more`;

  return (
    <div style={{ minHeight: '100vh', padding: '24px 32px', background: '#141414' }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#61dafb', fontFamily: 'monospace' }}>
          📦 Recharts Bundle Visualization
        </h1>
        {!isEmpty && (
          <p style={{ color: '#888', fontSize: 12, marginTop: 4, fontFamily: 'monospace' }}>
            {data.generatedAt ? `Generated: ${new Date(data.generatedAt).toLocaleString()}` : ''}
          </p>
        )}
      </div>

      {/* Stats row */}
      {!isEmpty && (
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          {[
            { label: 'Total size', value: `${totalKb} kB` },
            { label: 'Modules', value: String(topLevelGroups.reduce((s, g) => s + countLeaves(g), 0)) },
            { label: 'Directories', value: String(topLevelGroups.length) },
          ].map(stat => (
            <div
              key={stat.label}
              style={{
                background: '#1e1e1e',
                borderRadius: 8,
                padding: '12px 20px',
                minWidth: 120,
              }}
            >
              <div style={{ fontSize: 11, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#61dafb', fontFamily: 'monospace' }}>
                {stat.value}
              </div>
            </div>
          ))}
          <div
            style={{
              background: '#1e1e1e',
              borderRadius: 8,
              padding: '12px 20px',
              flex: 1,
              minWidth: 200,
            }}
          >
            <div style={{ fontSize: 11, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Components
            </div>
            <div style={{ fontSize: 13, color: '#ccc', fontFamily: 'monospace', marginTop: 4 }}>{componentSummary}</div>
          </div>
        </div>
      )}

      {/* Chart type tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <TabButton label="Treemap" active={view === 'treemap'} onClick={() => setView('treemap')} />
        <TabButton label="Sunburst" active={view === 'sunburst'} onClick={() => setView('sunburst')} />
      </div>

      {/* Chart area */}
      {isEmpty ? (
        <EmptyState />
      ) : (
        <>
          {view === 'treemap' && (
            <div style={{ background: '#1a1a1a', borderRadius: 10, padding: 8 }}>
              <ResponsiveContainer width="100%" height={520}>
                <Treemap
                  data={colorizedTree.children}
                  dataKey="value"
                  nameKey="name"
                  isAnimationActive={false}
                  content={<CustomTreemapCell />}
                >
                  <Tooltip formatter={formatTooltip} />
                </Treemap>
              </ResponsiveContainer>
            </div>
          )}

          {view === 'sunburst' && (
            <div style={{ background: '#1a1a1a', borderRadius: 10, padding: 8 }}>
              <ResponsiveContainer width="100%" height={520}>
                <SunburstChart data={colorizedTree} dataKey="value" nameKey="name" isAnimationActive={false}>
                  <Tooltip formatter={formatTooltip} />
                </SunburstChart>
              </ResponsiveContainer>
            </div>
          )}

          <Legend />
        </>
      )}
    </div>
  );
}

function countLeaves(node: BundleNode): number {
  if (!node.children || node.children.length === 0) return 1;
  return node.children.reduce((sum, child) => sum + countLeaves(child), 0);
}

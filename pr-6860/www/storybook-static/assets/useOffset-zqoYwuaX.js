import{j as e}from"./jsx-runtime-BgZXjikH.js";import{useMDXComponents as i}from"./index-wIJN22E_.js";import{M as o,C as s}from"./blocks-hPe4haHs.js";import{C as h,U as d}from"./useOffset.stories-C7MLEEhH.js";import"./iframe-VZdOSrkq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BmO0aGXh.js";import"./OffsetShower-kLJdjlLh.js";import"./ChartSizeDimensions-D3Cff-Ry.js";import"./arrayEqualityCheck-Ba8aNuDT.js";import"./resolveDefaultProps-CnCOAE1M.js";import"./PolarUtils-CC6VYEjV.js";import"./hooks-5m2MLZXp.js";import"./axisSelectors-BKO4jsPN.js";import"./ComposedChart-BhKILeAz.js";import"./RechartsWrapper-Dvu2t6Ac.js";import"./zIndexSlice-C3gfI6wW.js";import"./CartesianChart-BoW6sGG3.js";import"./chartDataContext-B6oCj1lT.js";import"./CategoricalChart-Cp_1f-8v.js";import"./Line-BUVcTQnC.js";import"./Layer-BsibGM2g.js";import"./ReactUtils-CxvXJs5p.js";import"./Label-wuhIVgaJ.js";import"./Text-C2K_oBbR.js";import"./DOMUtils-CnMWRd9H.js";import"./ZIndexLayer-G2n4L0mz.js";import"./ActivePoints-DULV1Jjf.js";import"./Dot-DlPbxCPd.js";import"./types-pQqJf-MX.js";import"./RegisterGraphicalItemId-CqL-lSFz.js";import"./ErrorBarContext-d23jDSCo.js";import"./GraphicalItemClipPath-BKYgv61x.js";import"./SetGraphicalItem-B3ZhK10N.js";import"./useAnimationId-DK5gOqc4.js";import"./getRadiusAndStrokeWidthFromDot--5FFHNy4.js";import"./ActiveShapeUtils-k9tVA3cu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CC7CQlR8.js";import"./Trapezoid-DZdQIPsQ.js";import"./Sector-BFy_SoTX.js";import"./Symbols-C6oyye2I.js";import"./Curve-Drsk9B8o.js";import"./XAxis-CUPjg_0f.js";import"./CartesianAxis-dyxsJwQR.js";import"./YAxis-BxbT09X2.js";import"./Legend-hM_Y2pNk.js";import"./useElementOffset-B4L3s4Wg.js";import"./iteratee-CZcmoo0F.js";import"./Page-DPte-9pC.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:h}),`
`,e.jsx(n.h1,{id:"useoffset",children:e.jsx(n.code,{children:"useOffset"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useOffset } from 'recharts';

function MyChart() {
  const offset = useOffset();
  return; // ...
}
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useOffset"})," hook returns the offset of the chart in pixels."]}),`
`,e.jsx(n.p,{children:"The offset is the distance from the edges of the chart to the edges of the plot area."}),`
`,e.jsx(n.p,{children:"Plot area is the area where the data is rendered, and shows the actual data points, bars, lines, etc."}),`
`,e.jsx(n.p,{children:"The space between the plot area and the edges of the chart is used for axes, legends, and other supporting elements."}),`
`,e.jsx(n.p,{children:"The offset includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Margins"}),`
`,e.jsx(n.li,{children:"Width and height of the axes"}),`
`,e.jsx(n.li,{children:"Width and height of the legend"}),`
`,e.jsx(n.li,{children:"Brush height"}),`
`]}),`
`,e.jsxs(n.p,{children:["(If you are only interested in the margins, use the ",e.jsx(n.code,{children:"useMargin"})," hook instead.)"]}),`
`,e.jsx(n.p,{children:"The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or resized."}),`
`,e.jsx(n.p,{children:`It is also independent of the scale and zoom, meaning that as the user zooms in and out,
the numbers will not change as the chart gets visually larger or smaller.`}),`
`,e.jsx(s,{of:d,layout:"padded"}),`
`,e.jsx(n.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(n.p,{children:"This hook can be used within any chart:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<AreaChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<BarChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<LineChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<PieChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<RadarChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<Sankey/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<Treemap/>"})}),`
`]})]})}function oe(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{oe as default};

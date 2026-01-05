import{j as e}from"./jsx-runtime-Di49CTLo.js";import{useMDXComponents as i}from"./index-3OFKXj_J.js";import{M as o,C as s}from"./blocks-DIxPh6fY.js";import{C as h,U as d}from"./useOffset.stories-DlE-7P88.js";import"./iframe-Da-M2bw_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CVXS9YKr.js";import"./OffsetShower-OU7b25r_.js";import"./ChartSizeDimensions-BESje7nE.js";import"./arrayEqualityCheck-Bu1fao9w.js";import"./resolveDefaultProps-BfdPYxPL.js";import"./PolarUtils-vOe5pdek.js";import"./hooks-CxpugqLJ.js";import"./axisSelectors-B_bauGo8.js";import"./ComposedChart-BwnVRCzC.js";import"./RechartsWrapper-BUepfen4.js";import"./zIndexSlice-CMfC5ktf.js";import"./CartesianChart-DRzmZtVl.js";import"./chartDataContext-Cwbia7-m.js";import"./CategoricalChart-Cqbm4wFz.js";import"./Line-gMk0LR0R.js";import"./Layer-DzGabtm5.js";import"./ReactUtils-y3IAuRLl.js";import"./Label-C4t1wGEU.js";import"./Text-BD5t_Wg6.js";import"./DOMUtils-CQPgEqmB.js";import"./ZIndexLayer-C6AjQfxY.js";import"./ActivePoints-C9RhecIz.js";import"./Dot-Ce2UrvYJ.js";import"./types-D0tWu2Rj.js";import"./RegisterGraphicalItemId-Bh4GNlAN.js";import"./ErrorBarContext-CgzPxaLF.js";import"./GraphicalItemClipPath-qobx4hps.js";import"./SetGraphicalItem-BUDso82t.js";import"./useAnimationId-DW2lwLzx.js";import"./getRadiusAndStrokeWidthFromDot-tRJ-ENaO.js";import"./ActiveShapeUtils-Dg-wD9Xs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQYy-QO.js";import"./Trapezoid-Dm562TU6.js";import"./Sector-CemvM92K.js";import"./Symbols-0qrr4MxV.js";import"./Curve-D038hXOJ.js";import"./XAxis-CFyYvsY3.js";import"./CartesianAxis-CVwu7qOc.js";import"./YAxis-u8ljMyRk.js";import"./Legend-BtpSwi4J.js";import"./useElementOffset-CJciGcgD.js";import"./iteratee-BEvwa0tL.js";import"./Page-DPte-9pC.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:h}),`
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

import{j as e}from"./jsx-runtime-DOsH3U8W.js";import{useMDXComponents as i}from"./index-C7hWJ8Hn.js";import{M as o,C as s}from"./blocks-7uwDcvn3.js";import{C as h,U as d}from"./useOffset.stories-CNxaiXw0.js";import"./iframe-C75Mon5f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B1HMmzG7.js";import"./OffsetShower-C98qoUcb.js";import"./ChartSizeDimensions-DU3pXVrB.js";import"./arrayEqualityCheck-CCinF1xg.js";import"./resolveDefaultProps-DdslWj5k.js";import"./PolarUtils-gc7ouCGw.js";import"./hooks-CF17bvZj.js";import"./axisSelectors-DwNVm2PQ.js";import"./ComposedChart-ZGVCoeE1.js";import"./RechartsWrapper-DtD9QMMH.js";import"./zIndexSlice-Ch2lslkG.js";import"./CartesianChart-BO0IyvRA.js";import"./chartDataContext-CSddlAqh.js";import"./CategoricalChart-CjaXzYYa.js";import"./Line-C-l_POkv.js";import"./Layer-DOYjA-jF.js";import"./ReactUtils-D5lwbz2E.js";import"./Label-BHT6Zr6z.js";import"./Text-s5ZlGFzn.js";import"./DOMUtils-Bv5mFBkh.js";import"./ZIndexLayer-1hGb0ezX.js";import"./ActivePoints-wA62MW9B.js";import"./Dot-BY3Oxjgr.js";import"./types-CgyKhdli.js";import"./RegisterGraphicalItemId-6Y3WjFD5.js";import"./ErrorBarContext-Dgxj0rk9.js";import"./GraphicalItemClipPath-CJQxttXy.js";import"./SetGraphicalItem-CMCPtKvr.js";import"./useAnimationId-BM6GD1p3.js";import"./getRadiusAndStrokeWidthFromDot-ChRl9x7G.js";import"./ActiveShapeUtils-PNhhpaVz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTY1SpY4.js";import"./Trapezoid-D1lAuCqF.js";import"./Sector-PYXr-REd.js";import"./Symbols-BKwRHYAq.js";import"./Curve-uThrsaDe.js";import"./XAxis-D7rtUFHm.js";import"./CartesianAxis-DsQ2XPjm.js";import"./YAxis-BkOESioE.js";import"./Legend-v-Y19GZ-.js";import"./useElementOffset-BDHVYPHz.js";import"./iteratee-CYzyPxOs.js";import"./Page-Cj8EiXz7.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:h}),`
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

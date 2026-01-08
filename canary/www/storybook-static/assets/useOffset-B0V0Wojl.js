import{j as e}from"./jsx-runtime-DBOLHys8.js";import{useMDXComponents as i}from"./index-DT2aohkI.js";import{M as o,C as s}from"./blocks-DXULnVIG.js";import{C as h,U as d}from"./useOffset.stories-ptN7xKMb.js";import"./iframe-D9q7UUmi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-YTWFD20P.js";import"./OffsetShower-D7RAK20_.js";import"./ChartSizeDimensions-CGOPgU1Q.js";import"./arrayEqualityCheck-CJJXJ9Rv.js";import"./resolveDefaultProps-D-3coS0e.js";import"./PolarUtils-cf4CEJPT.js";import"./hooks-b1KD0qBL.js";import"./axisSelectors-DCJHWbvW.js";import"./ComposedChart-BrSXjugh.js";import"./RechartsWrapper-8_jXv7hz.js";import"./zIndexSlice-CxekzBSL.js";import"./CartesianChart-B58H7xZp.js";import"./chartDataContext-C5vcePQl.js";import"./CategoricalChart-ak-_6B9f.js";import"./Line-BGi21o2A.js";import"./Layer-CUKLQgPC.js";import"./ReactUtils-CfRgqXT5.js";import"./Label-CDSn628C.js";import"./Text-CLmUy_On.js";import"./DOMUtils-BXuH-NK6.js";import"./ZIndexLayer-CtgCGO4x.js";import"./ActivePoints-B6AA5Rbz.js";import"./Dot-CrGRPD2L.js";import"./types-FPdAMXDy.js";import"./RegisterGraphicalItemId-B8upk-8m.js";import"./ErrorBarContext-D_fOmF9j.js";import"./GraphicalItemClipPath-CYdNpZeU.js";import"./SetGraphicalItem-DllIbSlC.js";import"./useAnimationId-DeN0uxUI.js";import"./getRadiusAndStrokeWidthFromDot-Ct_S_qD5.js";import"./ActiveShapeUtils-Cf3wP9DQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aQPjrzEG.js";import"./Trapezoid-CrYCphId.js";import"./Sector-BIUbLnT5.js";import"./Symbols-B3oT9PiF.js";import"./Curve-DEESCjbc.js";import"./XAxis-Dxn9Zo0N.js";import"./CartesianAxis-DBnbCnpE.js";import"./YAxis-Ds2QNT8w.js";import"./Legend-D31ymzRq.js";import"./useElementOffset-D1mKrQqH.js";import"./iteratee-JJOOie1Z.js";import"./Page-DPte-9pC.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:h}),`
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

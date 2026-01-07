import{j as e}from"./jsx-runtime-BUqLxhfW.js";import{useMDXComponents as i}from"./index-3yQx4Dwj.js";import{M as o,C as s}from"./blocks-CRI9MmjV.js";import{C as h,U as d}from"./useOffset.stories-Db2kg7oN.js";import"./iframe-BzK4IM4O.js";import"./preload-helper-Dp1pzeXC.js";import"./index-977mc2AH.js";import"./OffsetShower-0fHUvhro.js";import"./ChartSizeDimensions-D2LiT7mU.js";import"./arrayEqualityCheck-DntSlYRe.js";import"./resolveDefaultProps-DxvkoyFj.js";import"./PolarUtils-CkcjhAmg.js";import"./hooks-VI0oeyv4.js";import"./axisSelectors-FRDErLTA.js";import"./ComposedChart-DeS0V09V.js";import"./RechartsWrapper-G-7uZuvB.js";import"./zIndexSlice-CDkWNK3b.js";import"./CartesianChart-LpoIcLQ4.js";import"./chartDataContext-DMRgNTR6.js";import"./CategoricalChart-DIHkHBGg.js";import"./Line-BDor0g31.js";import"./Layer-D3djBZrj.js";import"./ReactUtils-BdJFLjIw.js";import"./Label-Cw9dZn4K.js";import"./Text-2hmmkMzb.js";import"./DOMUtils-DhJGRkcK.js";import"./ZIndexLayer-CvqQuagi.js";import"./ActivePoints-Dcm7tES9.js";import"./Dot-CeVvwLNa.js";import"./types-CR25OGX1.js";import"./RegisterGraphicalItemId-BlwXRQ76.js";import"./ErrorBarContext-DVva_-TX.js";import"./GraphicalItemClipPath-C1-ivBuq.js";import"./SetGraphicalItem-DxeqcNbM.js";import"./useAnimationId-BpCcKQdg.js";import"./getRadiusAndStrokeWidthFromDot-XEghJGNu.js";import"./ActiveShapeUtils-CRuw5H-2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CHjVgmr4.js";import"./Trapezoid-BORiQi9t.js";import"./Sector-BXKtHGMH.js";import"./Symbols-C_2JILz4.js";import"./Curve-Cez8Njk6.js";import"./XAxis-BEioX7l9.js";import"./CartesianAxis-Bvc9afGW.js";import"./YAxis-FFHKkbRQ.js";import"./Legend-BSKRxihT.js";import"./useElementOffset-a9sy_bGO.js";import"./iteratee-D-fyWy_G.js";import"./Page-DPte-9pC.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:h}),`
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

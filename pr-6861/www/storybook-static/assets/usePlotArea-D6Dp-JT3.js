import{j as e}from"./jsx-runtime-BUqLxhfW.js";import{useMDXComponents as o}from"./index-3yQx4Dwj.js";import{M as i,C as s}from"./blocks-CRI9MmjV.js";import{C as a,U as h}from"./usePlotArea.stories-DM11GU9X.js";import"./iframe-BzK4IM4O.js";import"./preload-helper-Dp1pzeXC.js";import"./index-977mc2AH.js";import"./PlotAreaShower-DvSB-8u7.js";import"./ChartSizeDimensions-D2LiT7mU.js";import"./arrayEqualityCheck-DntSlYRe.js";import"./resolveDefaultProps-DxvkoyFj.js";import"./PolarUtils-CkcjhAmg.js";import"./hooks-VI0oeyv4.js";import"./axisSelectors-FRDErLTA.js";import"./ComposedChart-DeS0V09V.js";import"./RechartsWrapper-G-7uZuvB.js";import"./zIndexSlice-CDkWNK3b.js";import"./CartesianChart-LpoIcLQ4.js";import"./chartDataContext-DMRgNTR6.js";import"./CategoricalChart-DIHkHBGg.js";import"./Line-BDor0g31.js";import"./Layer-D3djBZrj.js";import"./ReactUtils-BdJFLjIw.js";import"./Label-Cw9dZn4K.js";import"./Text-2hmmkMzb.js";import"./DOMUtils-DhJGRkcK.js";import"./ZIndexLayer-CvqQuagi.js";import"./ActivePoints-Dcm7tES9.js";import"./Dot-CeVvwLNa.js";import"./types-CR25OGX1.js";import"./RegisterGraphicalItemId-BlwXRQ76.js";import"./ErrorBarContext-DVva_-TX.js";import"./GraphicalItemClipPath-C1-ivBuq.js";import"./SetGraphicalItem-DxeqcNbM.js";import"./useAnimationId-BpCcKQdg.js";import"./getRadiusAndStrokeWidthFromDot-XEghJGNu.js";import"./ActiveShapeUtils-CRuw5H-2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CHjVgmr4.js";import"./Trapezoid-BORiQi9t.js";import"./Sector-BXKtHGMH.js";import"./Symbols-C_2JILz4.js";import"./Curve-Cez8Njk6.js";import"./XAxis-BEioX7l9.js";import"./CartesianAxis-Bvc9afGW.js";import"./YAxis-FFHKkbRQ.js";import"./Legend-BSKRxihT.js";import"./useElementOffset-a9sy_bGO.js";import"./iteratee-D-fyWy_G.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(r.h1,{id:"useplotarea",children:e.jsx(r.code,{children:"usePlotArea"})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { usePlotArea } from 'recharts';

function MyChart() {
  const plotArea = usePlotArea();
  return; // ...
}
`})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"usePlotArea"})," hook returns the dimensions of the plot area in pixels."]}),`
`,e.jsx(r.p,{children:"The plot area is the area where the data is rendered, and shows the actual data points, bars, lines, etc."}),`
`,e.jsxs(r.p,{children:["Plot area ",e.jsx(r.code,{children:"width"})," and ",e.jsx(r.code,{children:"height"}),` are the dimensions in pixels;
`,e.jsx(r.code,{children:"x"})," and ",e.jsx(r.code,{children:"y"})," are the coordinates of the top-left corner of the plot area relative to the chart container."]}),`
`,e.jsx(r.p,{children:"All of these values are independent of the chart's position on the page, meaning they do not change as the chart is scrolled or resized."}),`
`,e.jsx(r.p,{children:`They are also independent of the scale and zoom, meaning that as the user zooms in and out,
the plot area dimensions will not change as the chart gets visually larger or smaller.`}),`
`,e.jsx(s,{of:h,layout:"padded"}),`
`,e.jsx(r.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(r.p,{children:"This hook can be used within any chart:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<AreaChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<BarChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<LineChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<PieChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<RadarChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<Sankey/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"<Treemap/>"})}),`
`]})]})}function ie(t={}){const{wrapper:r}={...o(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{ie as default};

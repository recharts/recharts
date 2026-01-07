import{j as e}from"./jsx-runtime-1oiwLJYL.js";import{useMDXComponents as o}from"./index-L-hbxmsA.js";import{M as i,C as s}from"./blocks-OMVIYdq0.js";import{C as a,U as h}from"./usePlotArea.stories-6jsi63Ox.js";import"./iframe-2t9JIeSz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUuuQEHh.js";import"./PlotAreaShower-D4PK9QSt.js";import"./ChartSizeDimensions-DxYmbnCC.js";import"./arrayEqualityCheck-Ne24Ckb0.js";import"./resolveDefaultProps-CwSOlvvS.js";import"./PolarUtils-Bz6vuuVH.js";import"./hooks-DDv3wssX.js";import"./axisSelectors-ELUvGx1F.js";import"./ComposedChart-CKj3iGz6.js";import"./RechartsWrapper-C_G63Drq.js";import"./zIndexSlice-CQpntV3l.js";import"./CartesianChart-DBgS_hM4.js";import"./chartDataContext-CjpiQJqz.js";import"./CategoricalChart-f3TADWMW.js";import"./Line-BuJmFTie.js";import"./Layer-CYDA86pH.js";import"./ReactUtils-3f6_sZO7.js";import"./Label-D1Z20PQg.js";import"./Text-QtvFI3Y4.js";import"./DOMUtils-BaCwwoZ6.js";import"./ZIndexLayer-B4A1m3pC.js";import"./ActivePoints-DcFveFLp.js";import"./Dot-Cgrjcqkr.js";import"./types-D5gHJUP5.js";import"./RegisterGraphicalItemId-DXz7HuqF.js";import"./ErrorBarContext-BR1ah_yR.js";import"./GraphicalItemClipPath-D7leeg0p.js";import"./SetGraphicalItem-BT3CB0sc.js";import"./useAnimationId-BJoNxofQ.js";import"./getRadiusAndStrokeWidthFromDot-Xho2r0bU.js";import"./ActiveShapeUtils-CFUB8TRB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C8Ra0xJ2.js";import"./Trapezoid-BU2FReUY.js";import"./Sector-BmtUKRUo.js";import"./Symbols-CU3qyqsb.js";import"./Curve-DIMaTG8J.js";import"./XAxis-RUsgvceF.js";import"./CartesianAxis-nSSqg5TL.js";import"./YAxis-DOtUVqzp.js";import"./Legend-BBddR5ra.js";import"./useElementOffset-Dgi8y477.js";import"./iteratee-BMq1dSJo.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

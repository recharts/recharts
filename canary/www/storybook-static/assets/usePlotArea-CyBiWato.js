import{j as e}from"./jsx-runtime-C8Off1Wo.js";import{useMDXComponents as o}from"./index-D548ORSe.js";import{M as i,C as s}from"./blocks-DxnYakJ1.js";import{C as a,U as h}from"./usePlotArea.stories-yZekLBws.js";import"./iframe-BlK4-FEU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4rQ1OLH.js";import"./PlotAreaShower-C8cqHodv.js";import"./ChartSizeDimensions-DNL5OR5F.js";import"./arrayEqualityCheck-D3CpbvMw.js";import"./resolveDefaultProps-CZGT4OJp.js";import"./PolarUtils-Bw67yi1j.js";import"./hooks-CsC49iNH.js";import"./axisSelectors-t10Pjb8y.js";import"./ComposedChart-B-MlCPo2.js";import"./RechartsWrapper-CfP2CNrR.js";import"./zIndexSlice-BTFlkBrM.js";import"./CartesianChart-BYkRfU90.js";import"./chartDataContext-_WqeN7e1.js";import"./CategoricalChart-CsSPHay3.js";import"./Line-V5hq-jRR.js";import"./Layer-1XFlzVag.js";import"./ReactUtils-CLW_TYB_.js";import"./Label-B5t3anSs.js";import"./Text-BHa3XVhG.js";import"./DOMUtils-DL2vfQ8H.js";import"./ZIndexLayer-BXfqJV7n.js";import"./ActivePoints-Ub5O0fxy.js";import"./Dot-Ci8eNhkT.js";import"./types-nGVhtMBW.js";import"./RegisterGraphicalItemId-Co3MVnsu.js";import"./ErrorBarContext-Kty8e015.js";import"./GraphicalItemClipPath-P9ZnzsFU.js";import"./SetGraphicalItem-DuRVqxef.js";import"./useAnimationId-H0jghrnG.js";import"./getRadiusAndStrokeWidthFromDot-BZzhWtQa.js";import"./ActiveShapeUtils-BFViKF1F.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9j2f9q.js";import"./Trapezoid-DhJdPhvd.js";import"./Sector-6gruqe2O.js";import"./Symbols-7-jwnY-l.js";import"./Curve-CwI3FqjW.js";import"./XAxis-XTRCC8r6.js";import"./CartesianAxis-D9Vnd4ZX.js";import"./YAxis-Bo0KVWV0.js";import"./Legend-DQGbZjVc.js";import"./useElementOffset-J2oJ6_h-.js";import"./iteratee-BN3ptu_5.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

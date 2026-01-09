import{j as e}from"./jsx-runtime-CvihQpZW.js";import{useMDXComponents as o}from"./index-CBraCJla.js";import{M as i,C as s}from"./blocks-C0Afsd3b.js";import{C as a,U as h}from"./usePlotArea.stories-CvNEMmba.js";import"./iframe-cTJex_Gl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuBUoeGC.js";import"./PlotAreaShower-D22yshvn.js";import"./ChartSizeDimensions-tHZb_dEK.js";import"./arrayEqualityCheck-D0_WBn0Z.js";import"./resolveDefaultProps-GZGysWVv.js";import"./PolarUtils-B2tM_qUT.js";import"./hooks-JY4JcvJg.js";import"./axisSelectors-DKP4jhQb.js";import"./ComposedChart-vrFxLduB.js";import"./RechartsWrapper-Bm4mCVnL.js";import"./zIndexSlice-o0TZ72x9.js";import"./CartesianChart-sbYYv-2G.js";import"./chartDataContext-CUgM-3fT.js";import"./CategoricalChart-czES7GN9.js";import"./Line-CvV577lQ.js";import"./Layer-BMdqJaf7.js";import"./ReactUtils-BpjLVHCA.js";import"./Label-BuzFvabn.js";import"./Text-BHjkvtN0.js";import"./DOMUtils-CszyQhOM.js";import"./ZIndexLayer-H4Ow-AJr.js";import"./ActivePoints-WYLnnU_j.js";import"./Dot-DR5Pj5g1.js";import"./types-Gt1xRz9Z.js";import"./RegisterGraphicalItemId-aixP5EwM.js";import"./ErrorBarContext-BLazH71_.js";import"./GraphicalItemClipPath-CJqMx8GZ.js";import"./SetGraphicalItem-H24PzumZ.js";import"./useAnimationId-DmLtCxti.js";import"./getRadiusAndStrokeWidthFromDot-TSbsRtbT.js";import"./ActiveShapeUtils-Bs6rxUQM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D12YpzZT.js";import"./Trapezoid-Cffv8lrQ.js";import"./Sector-D24ZdNmK.js";import"./Symbols-DkoAz0u2.js";import"./Curve-Lpz0qnxX.js";import"./XAxis-KlGsegds.js";import"./CartesianAxis-BrBc_oiZ.js";import"./YAxis-e82ZV-al.js";import"./Legend-D7Vk6Xng.js";import"./useElementOffset-CkWr2du7.js";import"./iteratee-CiYVsTGX.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

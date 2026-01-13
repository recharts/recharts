import{j as e}from"./jsx-runtime-qHHqZ6O1.js";import{useMDXComponents as o}from"./index-CaMXYL6o.js";import{M as i,C as s}from"./blocks-DWO8jNKw.js";import{C as a,U as h}from"./usePlotArea.stories-2uoPL_Dx.js";import"./iframe-ZLLTs1L2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CuDIHWly.js";import"./PlotAreaShower-Caaac_r-.js";import"./ChartSizeDimensions-P7hJmoJ7.js";import"./arrayEqualityCheck-DulyWTfD.js";import"./resolveDefaultProps-EUJ6_KoJ.js";import"./PolarUtils-B9p_wTge.js";import"./hooks-hqrrPiBI.js";import"./axisSelectors-Cv0R_3oc.js";import"./ComposedChart-I5bjg5En.js";import"./RechartsWrapper-Bhfb6Tks.js";import"./zIndexSlice-CBRMfbRc.js";import"./CartesianChart-Ck4WnZ-P.js";import"./chartDataContext-nQ2-yRIQ.js";import"./CategoricalChart-CbG3DQY1.js";import"./Line-BN6F4eoo.js";import"./Layer-Z1TeMr3K.js";import"./ReactUtils-WSqE_xht.js";import"./Label-B7ECka5v.js";import"./Text-BKG1mCXc.js";import"./DOMUtils-CjGF8Xv9.js";import"./ZIndexLayer-C8fNtv4Q.js";import"./ActivePoints-BwYfd7gv.js";import"./Dot-DSdrQqBD.js";import"./types-DBavnEN9.js";import"./RegisterGraphicalItemId-l1uOO4MI.js";import"./ErrorBarContext-ByATrnH8.js";import"./GraphicalItemClipPath-BLImpVHN.js";import"./SetGraphicalItem-D8kwoYfk.js";import"./useAnimationId-BvHzHoR_.js";import"./getRadiusAndStrokeWidthFromDot-Vw-0YA6V.js";import"./ActiveShapeUtils-DYOPRKym.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CUa7ysAN.js";import"./Trapezoid-qhd__VDX.js";import"./Sector-C6G3hgjU.js";import"./Symbols-CzmBRPG3.js";import"./Curve-F2oZRqDm.js";import"./XAxis-CHTCY5Jh.js";import"./CartesianAxis-C0wXEvxF.js";import"./YAxis-BCMoz5bl.js";import"./Legend-Dqil_PZE.js";import"./useElementOffset-C-GQABMK.js";import"./iteratee-DOdS9XFe.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

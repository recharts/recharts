import{j as e}from"./jsx-runtime-B-ytI12q.js";import{useMDXComponents as o}from"./index-DfSDI3cj.js";import{M as i,C as s}from"./blocks-BNfaU0_P.js";import{C as a,U as h}from"./usePlotArea.stories-iUV-hJxN.js";import"./iframe-CnJUGyj2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CeIzyUzp.js";import"./PlotAreaShower-CTJ4RF1E.js";import"./ChartSizeDimensions-CoD815Xi.js";import"./arrayEqualityCheck-DS-98WmY.js";import"./resolveDefaultProps-BzjH9Fll.js";import"./PolarUtils-DUXYMnUd.js";import"./hooks-DtPou_4w.js";import"./axisSelectors-B3UBVlXk.js";import"./ComposedChart-CfffBHBx.js";import"./RechartsWrapper-CvN69gVe.js";import"./zIndexSlice-BtlphbRl.js";import"./CartesianChart-DarKL8UC.js";import"./chartDataContext-BL3jGdF-.js";import"./CategoricalChart-3iTekVlo.js";import"./Line-LC_xllE3.js";import"./Layer-BsUJcQkF.js";import"./ReactUtils-BNR-lOsN.js";import"./Label-DpPDMM47.js";import"./Text-sLuusAcx.js";import"./DOMUtils-CjNSxgDj.js";import"./ZIndexLayer-Dc_RcEv2.js";import"./ActivePoints-Z1vNPH_9.js";import"./Dot-BlTBScXS.js";import"./types-D9HbD0yL.js";import"./RegisterGraphicalItemId-BM4OoSas.js";import"./ErrorBarContext-5qx9m8qh.js";import"./GraphicalItemClipPath-FClbaDV6.js";import"./SetGraphicalItem-BuXMx1_s.js";import"./useAnimationId-CPv9iP46.js";import"./getRadiusAndStrokeWidthFromDot-A9oPyYzt.js";import"./ActiveShapeUtils-DTauRdeB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DAmamxSx.js";import"./Trapezoid-B9_fPQiM.js";import"./Sector-CiIkZPTJ.js";import"./Symbols-kQyDCWDP.js";import"./Curve-B_FGldsa.js";import"./XAxis-BXjKhibu.js";import"./CartesianAxis-DVo4bkjd.js";import"./YAxis-BOMJi5bn.js";import"./Legend-Bicnpt6O.js";import"./useElementOffset-D0YfL9KH.js";import"./iteratee-DiQ7weWT.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

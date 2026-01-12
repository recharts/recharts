import{j as e}from"./jsx-runtime-BB_Cjikc.js";import{useMDXComponents as o}from"./index-ChX_CDXf.js";import{M as i,C as s}from"./blocks-Xd20E6Wn.js";import{C as a,U as h}from"./usePlotArea.stories-BnqylYWx.js";import"./iframe-DS-q9W3A.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BR8_Xxtj.js";import"./PlotAreaShower-Dt6Ccckl.js";import"./ChartSizeDimensions-DRXNeAaP.js";import"./arrayEqualityCheck-uWyKn9kd.js";import"./resolveDefaultProps-DgJToWvf.js";import"./PolarUtils-COCiu7Zk.js";import"./hooks-CZGKc29x.js";import"./axisSelectors-CEsznBop.js";import"./ComposedChart-yx9oYSVL.js";import"./RechartsWrapper-DIeOkYNI.js";import"./zIndexSlice-B8xvBtUi.js";import"./CartesianChart-BrZvalbT.js";import"./chartDataContext-CBbbKlpZ.js";import"./CategoricalChart-KA7oDakA.js";import"./Line-CZlEDQOa.js";import"./Layer-DiJfTFFC.js";import"./ReactUtils-W1w-s9kx.js";import"./Label-C1I_KKaa.js";import"./Text-BKgeGCuD.js";import"./DOMUtils-BrAhpHFL.js";import"./ZIndexLayer-DOFsbkoZ.js";import"./ActivePoints-BgvnRHn_.js";import"./Dot-Bw_DwRx9.js";import"./types-COe7SjWu.js";import"./RegisterGraphicalItemId-taQunXs-.js";import"./ErrorBarContext-BpDrXqd4.js";import"./GraphicalItemClipPath-gv1wFvhy.js";import"./SetGraphicalItem-nVnJshTd.js";import"./useAnimationId-T15aFfwj.js";import"./getRadiusAndStrokeWidthFromDot-dgaMSbQl.js";import"./ActiveShapeUtils-BebX3teJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DbmbV7wJ.js";import"./Trapezoid-Durh076j.js";import"./Sector-Dl9Lnkss.js";import"./Symbols-CinIOzBd.js";import"./Curve-MfRfs5dU.js";import"./XAxis-B6LMs64M.js";import"./CartesianAxis-X7LfxDL5.js";import"./YAxis-Dl_2Ddpc.js";import"./Legend-BCirtqrw.js";import"./useElementOffset-D8o8xmBk.js";import"./iteratee-B2_klWfa.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

import{j as e}from"./jsx-runtime-CGrw2_80.js";import{useMDXComponents as o}from"./index-B6HImlvj.js";import{M as i,C as s}from"./blocks-CZe6niEg.js";import{C as a,U as h}from"./usePlotArea.stories-W-_cXS5b.js";import"./iframe-tCRQIxYB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CkWn_0P6.js";import"./PlotAreaShower-R2kW5Azb.js";import"./ChartSizeDimensions-BUG6iQR7.js";import"./arrayEqualityCheck-DFgE1twh.js";import"./resolveDefaultProps-D2e6YxB0.js";import"./PolarUtils-BLxmkcH1.js";import"./hooks-Simc1mEI.js";import"./axisSelectors-DzjYUh9I.js";import"./ComposedChart-B_kjiHsD.js";import"./RechartsWrapper-Bp9yhMvy.js";import"./zIndexSlice-IJ_zl8YN.js";import"./CartesianChart-Dy39hE-Z.js";import"./chartDataContext-NlnzkvR2.js";import"./CategoricalChart-BbdLegKy.js";import"./Line-BVHIm-vM.js";import"./Layer-Okfcyfin.js";import"./ReactUtils-CF2khIYu.js";import"./Label-JD75mQPI.js";import"./Text-DOFY9JIO.js";import"./DOMUtils-fQQV3uNK.js";import"./ZIndexLayer-DZ5tWnEb.js";import"./ActivePoints-BVkf9rZJ.js";import"./Dot-DRKOPpIx.js";import"./types-CbdV4-dc.js";import"./RegisterGraphicalItemId-CFqAxJ1Q.js";import"./ErrorBarContext-B8Ubbuxs.js";import"./GraphicalItemClipPath-D1JoWQAT.js";import"./SetGraphicalItem-DozJQrmf.js";import"./useAnimationId-D2oVQKnr.js";import"./getRadiusAndStrokeWidthFromDot-BKo_PtlD.js";import"./ActiveShapeUtils-B61GuIrI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BUsvopn3.js";import"./Trapezoid-hUxVvC3O.js";import"./Sector-DQ482-FH.js";import"./Symbols-DwIizSNL.js";import"./Curve-NiEgXiq2.js";import"./XAxis-o_gppMSb.js";import"./CartesianAxis-ipmvl_eK.js";import"./YAxis-C5YEwPYl.js";import"./Legend-CKbr3K0E.js";import"./useElementOffset-D0-uD3Uj.js";import"./iteratee-QAA3_HSJ.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

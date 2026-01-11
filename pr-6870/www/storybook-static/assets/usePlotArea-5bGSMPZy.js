import{j as e}from"./jsx-runtime-u5f48wR-.js";import{useMDXComponents as o}from"./index-Bk1C_FEo.js";import{M as i,C as s}from"./blocks-BSYExoj0.js";import{C as a,U as h}from"./usePlotArea.stories-EdLBx7eb.js";import"./iframe-D2G3HIAp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BwQRywFC.js";import"./PlotAreaShower-8nMbOvlD.js";import"./ChartSizeDimensions-C1G0XugS.js";import"./arrayEqualityCheck-D7f_pFRZ.js";import"./resolveDefaultProps-DUSJViu-.js";import"./PolarUtils-Dps0SkyA.js";import"./hooks-sNKmgtMM.js";import"./axisSelectors-276H6COd.js";import"./ComposedChart-B3gygK9L.js";import"./RechartsWrapper-CZfXu9Bm.js";import"./zIndexSlice-DJ_SqHH-.js";import"./CartesianChart-Cd_D9K81.js";import"./chartDataContext-BdGyYEQ1.js";import"./CategoricalChart-DtaGr5KL.js";import"./Line-CnFjL8nQ.js";import"./Layer--_yZLHYD.js";import"./ReactUtils-BiGt9Rwl.js";import"./Label-Dmvkas3w.js";import"./Text-BktKgt0G.js";import"./DOMUtils-CXrXcMzN.js";import"./ZIndexLayer-CUBtDPQX.js";import"./ActivePoints-BghVk57_.js";import"./Dot-C5hzWh_I.js";import"./types-DJ8_iZaM.js";import"./RegisterGraphicalItemId-Dydu6q-y.js";import"./ErrorBarContext-BXYRXGCk.js";import"./GraphicalItemClipPath-Ct9ZNJk2.js";import"./SetGraphicalItem-4DzlkcSy.js";import"./useAnimationId-P64LV0gd.js";import"./getRadiusAndStrokeWidthFromDot-C1YLbI6G.js";import"./ActiveShapeUtils-D_-w_v2b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNNRRaL-.js";import"./Trapezoid-BPu8z8Hk.js";import"./Sector-CkVMFxgw.js";import"./Symbols-CdOOLS_O.js";import"./Curve-DwXIRY2H.js";import"./XAxis-Cv05-S4d.js";import"./CartesianAxis-4WuYgukg.js";import"./YAxis-C4SLmRp0.js";import"./Legend-PqwLEj3K.js";import"./useElementOffset-DjRuwiqo.js";import"./iteratee-BWz_WTT_.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

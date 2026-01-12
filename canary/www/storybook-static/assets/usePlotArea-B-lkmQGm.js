import{j as e}from"./jsx-runtime-CfsmIDB7.js";import{useMDXComponents as o}from"./index-LN0qjp-O.js";import{M as i,C as s}from"./blocks-D_f4Tl-K.js";import{C as a,U as h}from"./usePlotArea.stories-Ca03AKs5.js";import"./iframe-CsBbFWpF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-30ex7hAw.js";import"./PlotAreaShower-CYw1ViUZ.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./arrayEqualityCheck-jcy1YLjA.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./PolarUtils-DudrDAyL.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./ComposedChart-BxAEf0za.js";import"./RechartsWrapper-M1yD5X0u.js";import"./zIndexSlice-CXgHVliP.js";import"./CartesianChart-DlU5PpKX.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./Line-8NeaciPU.js";import"./Layer-B5pUJ7d6.js";import"./ReactUtils-B73M-NEp.js";import"./Label-vO0tFBMQ.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./ZIndexLayer-DoHUAHyH.js";import"./ActivePoints-BtxRiwR-.js";import"./Dot-pAY9JTIt.js";import"./types-DZkoNYJ-.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./ErrorBarContext-UJH6PLVM.js";import"./GraphicalItemClipPath-BGGubKyF.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./useAnimationId-DQyCpAJd.js";import"./getRadiusAndStrokeWidthFromDot-Dzk2HrW3.js";import"./ActiveShapeUtils-Cp7opGs8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRfJXidx.js";import"./Trapezoid-CqG9LomH.js";import"./Sector-DZ4anR9n.js";import"./Symbols-GutgQl5i.js";import"./Curve-BV6casI8.js";import"./XAxis-n00lD-aM.js";import"./CartesianAxis-DTyJ3mcB.js";import"./YAxis-Ctuh_Y30.js";import"./Legend-BwPUQflq.js";import"./useElementOffset-DKVHg2OE.js";import"./iteratee-DG0CEwld.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

import{j as e}from"./jsx-runtime-Cl9X46qc.js";import{useMDXComponents as o}from"./index-D7ZLyEZA.js";import{M as i,C as s}from"./blocks-C3R8AcfA.js";import{C as a,U as h}from"./usePlotArea.stories-TT7nOcoS.js";import"./iframe-CKmpfOpL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-moZvkop3.js";import"./PlotAreaShower-C7JeV-Sm.js";import"./ChartSizeDimensions-DFNYoe11.js";import"./arrayEqualityCheck-CGTamc7H.js";import"./resolveDefaultProps-C7FTbt6F.js";import"./PolarUtils-BmD-XZwK.js";import"./hooks-BGbqk51h.js";import"./axisSelectors-Bt4_ZMoO.js";import"./ComposedChart-CicuSwT1.js";import"./RechartsWrapper-D1NbH_UG.js";import"./zIndexSlice-CQqF6s7B.js";import"./CartesianChart-B2JPCr5o.js";import"./chartDataContext-CLpm-ufS.js";import"./CategoricalChart-CCPcc9Jc.js";import"./Line-DaQHc97g.js";import"./Layer-DhYkCEVl.js";import"./ReactUtils-BXryAzdD.js";import"./Label-DnuO6Rjq.js";import"./Text-DsSpVH1-.js";import"./DOMUtils-Bi3DtBC5.js";import"./ZIndexLayer-B_sQwTbu.js";import"./ActivePoints-ClWX87Gp.js";import"./Dot-CHqdM_F0.js";import"./types-BLY5tRwt.js";import"./RegisterGraphicalItemId-wa1Otpvd.js";import"./ErrorBarContext-gRwVRTek.js";import"./GraphicalItemClipPath-78XXJvtR.js";import"./SetGraphicalItem-DSgpGKPf.js";import"./useAnimationId-DzZ8q-8e.js";import"./getRadiusAndStrokeWidthFromDot-DvxIC_MO.js";import"./ActiveShapeUtils-DCJZv5Uu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_zs00yx.js";import"./Trapezoid-PdOQHAco.js";import"./Sector-DbmZtSEy.js";import"./Symbols-CFHhg7rN.js";import"./Curve-Bys97J5V.js";import"./XAxis-BBRqfJxe.js";import"./CartesianAxis-DmTSqBS2.js";import"./YAxis-ho-us9Q5.js";import"./Legend-CE_Ff5Rx.js";import"./useElementOffset-BBYrqTei.js";import"./iteratee-DYyig2D7.js";import"./Page-Cj8EiXz7.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

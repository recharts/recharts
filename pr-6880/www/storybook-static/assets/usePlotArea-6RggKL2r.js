import{j as e}from"./jsx-runtime-B4Xm1Fq2.js";import{useMDXComponents as o}from"./index-ZiZVVl9w.js";import{M as i,C as s}from"./blocks-mWmsLBj_.js";import{C as a,U as h}from"./usePlotArea.stories-YyToybg0.js";import"./iframe-Cwpfa-aU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-KilI1ssy.js";import"./PlotAreaShower-DvkDcG7R.js";import"./ChartSizeDimensions-BzGykHcH.js";import"./arrayEqualityCheck-4s7O9CHw.js";import"./resolveDefaultProps-Bl1VkIJn.js";import"./PolarUtils-D6OsdRao.js";import"./hooks-Bu64bUH6.js";import"./axisSelectors-CkO9segl.js";import"./ComposedChart-Bjflq6a1.js";import"./RechartsWrapper-DV1HqoPP.js";import"./zIndexSlice-IilHGL9E.js";import"./CartesianChart-B8cIlo8Y.js";import"./chartDataContext-BoIsIy8h.js";import"./CategoricalChart-yeCIXBUW.js";import"./Line-BcB5oLqM.js";import"./Layer-C5Up6lye.js";import"./ReactUtils-DiD0pNfa.js";import"./Label-BkH8bmvn.js";import"./Text-DG71k7CA.js";import"./DOMUtils-DpdULDT0.js";import"./ZIndexLayer-MboeMBT5.js";import"./ActivePoints-Dbd50Xfv.js";import"./Dot-BVCmMmNN.js";import"./types-C0n05tvQ.js";import"./RegisterGraphicalItemId-BzYcbqE1.js";import"./ErrorBarContext-BLvMse44.js";import"./GraphicalItemClipPath-BWumZjSv.js";import"./SetGraphicalItem-CnrbgEG2.js";import"./useAnimationId-BNxZGCVU.js";import"./getRadiusAndStrokeWidthFromDot-C-Fw1e1x.js";import"./ActiveShapeUtils-CwrCrcpP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpUAVjZ.js";import"./Trapezoid-DIkxpdcS.js";import"./Sector-DE839nPA.js";import"./Symbols-4LuKRow4.js";import"./Curve-Bv3AqiO6.js";import"./XAxis-UZUbrGY6.js";import"./CartesianAxis-BJ_Cxbna.js";import"./YAxis-BUkK3ftj.js";import"./Legend-CDhhebxP.js";import"./useElementOffset-D4wGVCo_.js";import"./iteratee-eijgeMa6.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

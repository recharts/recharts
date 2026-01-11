import{j as e}from"./jsx-runtime-B9kJaras.js";import{useMDXComponents as o}from"./index-DjfdFFla.js";import{M as i,C as s}from"./blocks-9E-X6-DO.js";import{C as a,U as h}from"./usePlotArea.stories-DfV_nJ9e.js";import"./iframe-YjsnRhKk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D4ADZzYF.js";import"./PlotAreaShower-B40cJmGZ.js";import"./ChartSizeDimensions-pADZR5mB.js";import"./arrayEqualityCheck-BJwRC6MI.js";import"./resolveDefaultProps-Z_TS6-YD.js";import"./PolarUtils-CY6yHRxS.js";import"./hooks-ybSWjp7E.js";import"./axisSelectors-DDrqqiFr.js";import"./ComposedChart-DHA8rPkN.js";import"./RechartsWrapper-D804dJFF.js";import"./zIndexSlice-CrYhtLvr.js";import"./CartesianChart-BXbZQS9i.js";import"./chartDataContext-DdZy89Ic.js";import"./CategoricalChart-DshWcI8J.js";import"./Line-qgNAtcDf.js";import"./Layer-B5j-14SA.js";import"./ReactUtils-DPXAlJoJ.js";import"./Label-CLhSutXl.js";import"./Text-B-IGFYif.js";import"./DOMUtils-B8xMLIPn.js";import"./ZIndexLayer-B9GJT-1H.js";import"./ActivePoints-DAneNfUf.js";import"./Dot-CkNBEorS.js";import"./types-B3ZyTjxE.js";import"./RegisterGraphicalItemId-iR66q9wz.js";import"./ErrorBarContext-wiTCAurl.js";import"./GraphicalItemClipPath-Ctr3letV.js";import"./SetGraphicalItem-CpQPspCO.js";import"./useAnimationId-BZSEvVKv.js";import"./getRadiusAndStrokeWidthFromDot-frfqIR4_.js";import"./ActiveShapeUtils-BoZeuq2S.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DuxV1NLN.js";import"./Trapezoid-CBkMiRG-.js";import"./Sector-COEdyvE7.js";import"./Symbols-BEUnwuzy.js";import"./Curve-C9YHabA2.js";import"./XAxis-B2tLltrx.js";import"./CartesianAxis-B3Ooqwxn.js";import"./YAxis-Dkcj0U0j.js";import"./Legend-BJ9mKJX0.js";import"./useElementOffset-BorWrtVN.js";import"./iteratee-BmPeyMV0.js";import"./Page-DPte-9pC.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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

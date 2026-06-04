import{u as n,j as e}from"./index-CDHlBbmy.js";import{M as o,C as h}from"./blocks-iwVwRW8o.js";import{C as d,W as s}from"./dimensions.stories-CkByx2o1.js";import"./iframe-DeM0Qb4B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BsvTaB6O.js";import"./index-BeHf8kjF.js";import"./index-B-tkzYsG.js";import"./ChartSizeDimensions-CRTm2rU7.js";import"./zIndexSlice-CiNLGVRc.js";import"./immer-CXrDBfBc.js";import"./get-CMIg51n-.js";import"./resolveDefaultProps-CHkmO4Nn.js";import"./isWellBehavedNumber-Dt1ZDNIe.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Q8wzdF4e.js";import"./RechartsWrapper-Bw4I8ksO.js";import"./index-D_HWn2_u.js";import"./renderedTicksSlice-l4NOSov1.js";import"./axisSelectors-DWmGSiam.js";import"./d3-scale-BzB7iPcR.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Bfusz6lr.js";import"./chartDataContext-HoVJk3bG.js";import"./CategoricalChart-nLEaw9lU.js";import"./Page-Cj8EiXz7.js";import"./Line-DTawiR2y.js";import"./Layer-B3W7tn4T.js";import"./Curve-DAs23S9W.js";import"./types-C10ohCRK.js";import"./step-B11PQnh8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-q3oAcZv4.js";import"./Label-C5gMwwTi.js";import"./Text-BRAU_A6N.js";import"./DOMUtils-D2W98joL.js";import"./ZIndexLayer-DorZCPdG.js";import"./useAnimationId-PwiLcg7B.js";import"./ActivePoints-B-QpMSVH.js";import"./Dot-DnzKtKhK.js";import"./RegisterGraphicalItemId-CqW9ab1A.js";import"./ErrorBarContext-Cu0ArMmH.js";import"./GraphicalItemClipPath-BHo-wJHw.js";import"./SetGraphicalItem-zGGg2ijs.js";import"./getRadiusAndStrokeWidthFromDot-DKEbDMSV.js";import"./ActiveShapeUtils-BOazUucV.js";import"./XAxis-D6dtEk3_.js";import"./CartesianAxis-C8MJ9nCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-GdnxXDj_.js";import"./Legend-DJEBJ8rg.js";import"./Symbols-DxhCsT3e.js";import"./symbol-B23EaThe.js";import"./useElementOffset-CjQbRS76.js";import"./uniqBy-QJuJHQUa.js";import"./iteratee-DGbnOAAX.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsxs(i.h1,{id:"usechartwidth-usechartheight",children:[e.jsx(i.code,{children:"useChartWidth"}),", ",e.jsx(i.code,{children:"useChartHeight"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"useChartWidth"})," hook returns the width of the chart in pixels. ",e.jsx(i.code,{children:"useChartHeight"})," returns the height of the chart in pixels."]}),`
`,e.jsxs(i.p,{children:["If you are using chart with hardcoded ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` props, then the width returned will be the same
as the `,e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"})," prop on the main chart element."]}),`
`,e.jsxs(i.p,{children:["If you are using a chart with a ",e.jsx(i.code,{children:"ResponsiveContainer"}),`, the width and height will be the size of the chart
as the ResponsiveContainer has decided it would be.`]}),`
`,e.jsxs(i.p,{children:["If the chart has any axes or legend, the ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` will be the size of the chart
including the axes and legend.`]}),`
`,e.jsx(i.p,{children:`The dimensions do not scale, meaning as user zoom in and out, the width/height number will not change
as the chart gets visually larger or smaller.`}),`
`,e.jsx(h,{of:s,layout:"padded"}),`
`,e.jsx(i.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(i.p,{children:"The hooks can be used within any chart:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<AreaChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<BarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<LineChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<PieChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Sankey/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Treemap/>"})}),`
`]})]})}function ae(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{ae as default};

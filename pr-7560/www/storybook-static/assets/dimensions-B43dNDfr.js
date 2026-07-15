import{u as n,j as e}from"./index-CLXCu7YU.js";import{M as o,C as h}from"./blocks-KMAxfcdU.js";import{C as d,W as s}from"./dimensions.stories-Bd_DJt6B.js";import"./iframe-CkvJyCps.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BX-3EqNW.js";import"./index-BsiD65Ad.js";import"./index-D8Jo1LfZ.js";import"./ChartSizeDimensions-LykABy-w.js";import"./zIndexSlice-Ui89VFRT.js";import"./throttle-DgDNnF1i.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DCKyJEY4.js";import"./isWellBehavedNumber-DqH8GE3H.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-B_G7W1UH.js";import"./RechartsWrapper-CjY8J2vT.js";import"./index-Cjf8FZO7.js";import"./renderedTicksSlice-BMi6DZwf.js";import"./axisSelectors-CC2H0zuo.js";import"./d3-scale-Crqr5kEu.js";import"./CartesianChart-DFWFnz0T.js";import"./chartDataContext-BT6jQe_1.js";import"./CategoricalChart-E0pKYNLO.js";import"./Page-Cj8EiXz7.js";import"./Line-BWXEwsOW.js";import"./Layer-C4byj5K8.js";import"./Curve-OKr52WO3.js";import"./types-CzkLD6k1.js";import"./step-KO3U5RtM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CNADXJdo.js";import"./Label-BMESeQSE.js";import"./Text-R9sJDfcz.js";import"./DOMUtils-CxWIP_C8.js";import"./ZIndexLayer-t0g3b6Ty.js";import"./useAnimationId-jBCdM9CL.js";import"./ActivePoints-D5IySJuv.js";import"./Dot-CltbR6Uk.js";import"./RegisterGraphicalItemId-p5LXpBOx.js";import"./ErrorBarContext-CbXX-ZBj.js";import"./GraphicalItemClipPath-Ci1KSEKS.js";import"./SetGraphicalItem-BSfhP0b_.js";import"./getRadiusAndStrokeWidthFromDot-BhqCzyG1.js";import"./ActiveShapeUtils-DlrbS-G4.js";import"./XAxis-Cs2owod8.js";import"./CartesianAxis-mgc-X0Bi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DiR5kzGo.js";import"./Legend-BSm1HiW3.js";import"./Symbols-BWAxmpkp.js";import"./symbol-C7v9Wwia.js";import"./useElementOffset-cxxtLqzc.js";import"./uniqBy-BHjvX3lg.js";import"./iteratee-DA1LVjZi.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function le(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{le as default};

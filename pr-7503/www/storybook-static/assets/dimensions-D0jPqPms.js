import{u as n,j as e}from"./index-5F0NVgdM.js";import{M as o,C as h}from"./blocks-uMSzpzAL.js";import{C as d,W as s}from"./dimensions.stories-BjitnHcC.js";import"./iframe-yOPx9Gik.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DJygjR8e.js";import"./index-gBURTRbi.js";import"./index-CyWWVFG2.js";import"./ChartSizeDimensions-Cbe7LOHm.js";import"./zIndexSlice-D67vVDIo.js";import"./immer-MwiuxAbo.js";import"./get-BfHGT2kl.js";import"./resolveDefaultProps-DB1B-raE.js";import"./isWellBehavedNumber-X6n-T2Sz.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CNKZcRKd.js";import"./RechartsWrapper-BCqwcFHc.js";import"./index-C-1T0p6G.js";import"./renderedTicksSlice-ClbKT4Vz.js";import"./axisSelectors-BcCjx1Bb.js";import"./d3-scale-BQYCkYi4.js";import"./CartesianChart-tj_Q7LqM.js";import"./chartDataContext-CIZm0aW3.js";import"./CategoricalChart-C2Hn6eQd.js";import"./Page-Cj8EiXz7.js";import"./Line-C0Fqz3BG.js";import"./Layer-Bwtnd2Qr.js";import"./Curve-CyG3DmyO.js";import"./types-BJAf4K7V.js";import"./step-Bnv-0_8B.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CE38GYBB.js";import"./Label-BqUT8U7H.js";import"./Text-BYswpnhx.js";import"./DOMUtils-Cu0iYWZD.js";import"./ZIndexLayer-B4R3RCf9.js";import"./useAnimationId-D3arzwOC.js";import"./ActivePoints-BnyIHKN-.js";import"./Dot-BOZFOnSK.js";import"./RegisterGraphicalItemId-DtIIsDtI.js";import"./ErrorBarContext-qp41ygoF.js";import"./GraphicalItemClipPath-ByZKWDCp.js";import"./SetGraphicalItem-Bb0dcZso.js";import"./getRadiusAndStrokeWidthFromDot-pUt3tlnV.js";import"./ActiveShapeUtils-BD3mqbS1.js";import"./XAxis-CJ8HGhD8.js";import"./CartesianAxis-C7MTbV32.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-CkktISrz.js";import"./Legend-D02SZGli.js";import"./Symbols-DEw2IZw_.js";import"./symbol-DX-jtzBs.js";import"./useElementOffset-DPzY_T8I.js";import"./uniqBy-B8wALonH.js";import"./iteratee-C7Rvqn86.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

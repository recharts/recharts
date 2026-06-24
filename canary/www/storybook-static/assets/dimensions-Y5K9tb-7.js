import{u as n,j as e}from"./index-BnmCKo1D.js";import{M as o,C as h}from"./blocks-DEjG56tT.js";import{C as d,W as s}from"./dimensions.stories-CWX_gFab.js";import"./iframe-NH2HoEvn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C8dhIkrl.js";import"./index-B6meFPDo.js";import"./index-KEn5cK9h.js";import"./ChartSizeDimensions-B0JLqL_Y.js";import"./zIndexSlice-CCMkrqvp.js";import"./immer-SVzhbtzF.js";import"./get-Bo5cNVvp.js";import"./resolveDefaultProps-BGihd8_H.js";import"./isWellBehavedNumber-DL2i4yQU.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BnMLy3JL.js";import"./RechartsWrapper-DYZBcomz.js";import"./index-DwDUEQ_a.js";import"./renderedTicksSlice-C1ge3ajN.js";import"./axisSelectors-BVEg60Nu.js";import"./d3-scale-BOfgX5mI.js";import"./CartesianChart-n5KlOJWr.js";import"./chartDataContext-DOG-KHg0.js";import"./CategoricalChart-r18o97_M.js";import"./Page-Cj8EiXz7.js";import"./Line-B-WZkr-r.js";import"./Layer-CmQSLVxb.js";import"./Curve-7UCJoGzD.js";import"./types-CyGlxecW.js";import"./step-D8rYwkpZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-GETRY_YP.js";import"./Label-DT7zDdgZ.js";import"./Text-Dxh69SU_.js";import"./DOMUtils-DIF_Gs9K.js";import"./ZIndexLayer-4vtT6ix2.js";import"./useAnimationId-BkMnFoWD.js";import"./ActivePoints-DP4Q2WUd.js";import"./Dot-4iBWGC61.js";import"./RegisterGraphicalItemId-QTMlMqrn.js";import"./ErrorBarContext-DlMVuBVO.js";import"./GraphicalItemClipPath-C94rECFA.js";import"./SetGraphicalItem-DpdjJmMm.js";import"./getRadiusAndStrokeWidthFromDot-DfNtTuJE.js";import"./ActiveShapeUtils-C_uRJL3Z.js";import"./XAxis-CWamoSoZ.js";import"./CartesianAxis-BKNqtnIf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-DayohGi9.js";import"./Legend-Kz0f1qHr.js";import"./Symbols-BMA4KExo.js";import"./symbol-CAZ7nIX0.js";import"./useElementOffset-dSnxC0p_.js";import"./uniqBy-Bxb6tPL4.js";import"./iteratee-B0XxpJgf.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

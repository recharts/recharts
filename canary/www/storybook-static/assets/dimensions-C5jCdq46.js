import{u as n,j as e}from"./index-BmK7qHNc.js";import{M as o,C as h}from"./blocks-CVM2SLK_.js";import{C as d,W as s}from"./dimensions.stories-l2yHZvmy.js";import"./iframe-DLBrGVIL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B7CtExx5.js";import"./index-DQTJ-3mG.js";import"./index-C5Iik6-v.js";import"./ChartSizeDimensions-BNqPyQeL.js";import"./zIndexSlice-D04f94zz.js";import"./resolveDefaultProps-DCNaX0Un.js";import"./get-CjriyByo.js";import"./throttle-Csq4RHLA.js";import"./ComposedChart-B19GUyoN.js";import"./RechartsWrapper-CQD9R6Ch.js";import"./axisSelectors-e5FgB8sH.js";import"./polarAxisSelectors-5dY8QunD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7f23rgt.js";import"./index-wzkov3Za.js";import"./renderedTicksSlice-C3k9zhPb.js";import"./index-71o-Y0_J.js";import"./fillDefinitions-3l2D0OPm.js";import"./CartesianChart-DqjyD4mn.js";import"./chartDataContext-Xl7iaHZA.js";import"./CategoricalChart-D7HNeFeV.js";import"./Page-Cj8EiXz7.js";import"./Line-Dp11xR-K.js";import"./getRadiusAndStrokeWidthFromDot-XT9ud7Ex.js";import"./Layer-fmxJ3YOZ.js";import"./Curve-COZ7WQ5e.js";import"./types-Bhx-lAgy.js";import"./step-Rw1feLL3.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-C-aMudj3.js";import"./Label-B42eZj7W.js";import"./Text-3dSBCvrE.js";import"./ZIndexLayer-R8fInGM9.js";import"./ActivePoints-9q7wkDTC.js";import"./Dot-DOIYCHL9.js";import"./activeStyles-DixW-39S.js";import"./useAnimationId-UzUbsW_e.js";import"./Symbols-CwwyfWDy.js";import"./symbol-CTUGUG7K.js";import"./ErrorBarContext-5vBRFIsn.js";import"./SetGraphicalItem-mnwtfu-X.js";import"./ActiveShapeUtils-BggRH-Y1.js";import"./useEffectiveDataKey-CzXzkxYB.js";import"./XAxis-CeLc4bEQ.js";import"./CartesianAxis-DwNRBXKt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-BYVuK0Yz.js";import"./Legend-rYKJOgHs.js";import"./useElementOffset-CivVGgp9.js";import"./uniqBy-ConzCxl5.js";import"./iteratee-BL4ehpYl.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function me(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{me as default};

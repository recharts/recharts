import{j as e}from"./jsx-runtime-Blm06YUH.js";import{useMDXComponents as n}from"./index-Cu534Gea.js";import{M as o,C as h}from"./blocks-Dli9oGMQ.js";import{C as d,W as s}from"./dimensions.stories-BXfOZWaZ.js";import"./iframe-DUQ2rD4k.js";import"./preload-helper-Dp1pzeXC.js";import"./index-mcEQG0VX.js";import"./ChartSizeDimensions-vnbsz8Dv.js";import"./arrayEqualityCheck-BBPGZIUg.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRDb4LtS.js";import"./immer-CXKbBCwk.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BTcaBYEi.js";import"./RechartsWrapper-rIHkV1_R.js";import"./index-B0EPCnDB.js";import"./hooks-HXjvsCy4.js";import"./axisSelectors-D2XTxCjc.js";import"./d3-scale-PQ3Jd5dr.js";import"./zIndexSlice-D6ARQVQn.js";import"./renderedTicksSlice-CW_OarVn.js";import"./CartesianChart-CMhPpmfP.js";import"./chartDataContext-DyVaFi3Q.js";import"./CategoricalChart-CK6_FENE.js";import"./Line-DqtbRix_.js";import"./Layer-7WkqLLbY.js";import"./ReactUtils-BJlu3yfQ.js";import"./Label-C0FJwtOT.js";import"./Text-C5kR-_Zz.js";import"./DOMUtils-D_ZO6wl2.js";import"./ZIndexLayer-59Hqjxa2.js";import"./ActivePoints-CO4Xi39k.js";import"./Dot-DZAiuKz5.js";import"./types-SmO60qvE.js";import"./RegisterGraphicalItemId-rMFg-mKG.js";import"./ErrorBarContext-Clyukq3z.js";import"./GraphicalItemClipPath-Bn8yfwfV.js";import"./SetGraphicalItem-DM9xQ_4_.js";import"./useAnimationId-yl6yHjaO.js";import"./getRadiusAndStrokeWidthFromDot-Dds1z6ov.js";import"./ActiveShapeUtils-D6xDWETw.js";import"./isPlainObject-B0Jm4UnE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bo_Jblzr.js";import"./Trapezoid-C7HKi7wc.js";import"./Sector-CmPACNI3.js";import"./Symbols-B9RWw_WA.js";import"./symbol-BY9-nPyZ.js";import"./step-DYxjvIwM.js";import"./Curve-CF17Mcfw.js";import"./XAxis-Dj-mbvwT.js";import"./CartesianAxis-CJmVZJSG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CeQ3Mvu1.js";import"./Legend-BngZp2RN.js";import"./useElementOffset-DFPgklPm.js";import"./uniqBy-CSy55f1Z.js";import"./iteratee-C2OKAmKf.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};

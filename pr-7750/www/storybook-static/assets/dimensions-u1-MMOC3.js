import{u as n,j as e}from"./index-B2LYVtwB.js";import{M as o,C as h}from"./blocks-BkUqMZiT.js";import{C as d,W as s}from"./dimensions.stories-BcUxcf7z.js";import"./iframe-s76JLJT4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D791KxLc.js";import"./index-u4HpiE5R.js";import"./index-5KrtyyBx.js";import"./ChartSizeDimensions-DgYFI72o.js";import"./zIndexSlice-BAzWj5Bm.js";import"./throttle-DlYzKYH1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BacpidNF.js";import"./isWellBehavedNumber-BfAJeodP.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CrJ4dqI5.js";import"./RechartsWrapper-CzmQgFdw.js";import"./axisSelectors-BVRh__it.js";import"./d3-scale-3iO39mKP.js";import"./index-BP9e58dC.js";import"./renderedTicksSlice-YO-Fp9Ef.js";import"./index-v7GV83G6.js";import"./CartesianChart-BHvBdOos.js";import"./chartDataContext-heFiBO7H.js";import"./CategoricalChart-Bnpv8dk8.js";import"./Page-Cj8EiXz7.js";import"./Line-cLMgFbkH.js";import"./Layer-S_x0F8ws.js";import"./Curve-q_CY-4KJ.js";import"./types-B1A5enlV.js";import"./step-zmbHrnqa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJi7GpYq.js";import"./Label-BK0AZvtz.js";import"./Text-B6LThSxq.js";import"./DOMUtils-duej-PH-.js";import"./useId-DWgk4q6e.js";import"./useBackwardsCompatibleTheme-C6S0KGB6.js";import"./ZIndexLayer-RER6T0Dj.js";import"./useAnimationId-Co4tnqM8.js";import"./ActivePoints-DcCT_xea.js";import"./Dot-bQR7q4wH.js";import"./RegisterGraphicalItemId-CojxeIbK.js";import"./ErrorBarContext-DjrrsITr.js";import"./GraphicalItemClipPath-4yehoiu3.js";import"./SetGraphicalItem-jdZDqL_N.js";import"./getRadiusAndStrokeWidthFromDot-DDb6xR6G.js";import"./ActiveShapeUtils-CMuKiAIO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-oY-MxrDT.js";import"./CartesianAxis-wofyjDXK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-Dp0QA8yk.js";import"./Legend-0Fenf7tV.js";import"./Symbols-DXxFQ5Re.js";import"./symbol-Bivf0Ccg.js";import"./useElementOffset-BEqwyN49.js";import"./uniqBy-Cdtb4h_K.js";import"./iteratee-C2acX8LZ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{je as default};

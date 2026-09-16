import{u as n,j as e}from"./index-DgA99EQx.js";import{M as o,C as h}from"./blocks-CHhxR_rk.js";import{C as d,W as s}from"./dimensions.stories-C5mKq7yf.js";import"./iframe-BBXYJHV9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKKng9rb.js";import"./index-DD1sJSjK.js";import"./index-DaLQCs1D.js";import"./ChartSizeDimensions-DW8XhaAz.js";import"./zIndexSlice-DeV5nVkQ.js";import"./throttle-D_5C5TP0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cuufas3t.js";import"./isWellBehavedNumber-Df9i-Xuh.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CI6CKZVa.js";import"./RechartsWrapper--QMYLh37.js";import"./axisSelectors-ldrqaVXy.js";import"./d3-scale-Cim9t_7k.js";import"./index-C1POlg4L.js";import"./renderedTicksSlice-D2BRqvUe.js";import"./index-CyGTPXip.js";import"./CartesianChart-Sq09cuqY.js";import"./chartDataContext-CvGK2QEJ.js";import"./CategoricalChart-BQqZpjdB.js";import"./Page-Cj8EiXz7.js";import"./Line-BXAC9OJ9.js";import"./Layer-CLVZjsru.js";import"./Curve-D-Wgwm0-.js";import"./types-Bf4vH5cc.js";import"./step-CPCTXlnC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Szq-E2F-.js";import"./Label-lRXxfB4K.js";import"./Text-D82BKuR8.js";import"./DOMUtils-CzO3u12F.js";import"./useId-B4ofBqjM.js";import"./useBackwardsCompatibleTheme-DCcJalTw.js";import"./ZIndexLayer-DTr1Fcax.js";import"./useAnimationId-CBIZAPE4.js";import"./ActivePoints-ogH_t-gd.js";import"./Dot-CeQpq0Ml.js";import"./RegisterGraphicalItemId-B-07fAKx.js";import"./ErrorBarContext-CrrVco2B.js";import"./GraphicalItemClipPath-h1d35KAS.js";import"./SetGraphicalItem-Dp4v1WTr.js";import"./getRadiusAndStrokeWidthFromDot-BRVPa3kE.js";import"./ActiveShapeUtils-DcqMOZEc.js";import"./useGraphicalItemIdentity-DpGCweuE.js";import"./XAxis-OTNhB7fI.js";import"./CartesianAxis-a8cTgv_e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BTJMRiMh.js";import"./Legend-B0OYWchs.js";import"./Symbols-BkHE8TEA.js";import"./symbol-CFAfa1rt.js";import"./useElementOffset-DEgSccfA.js";import"./uniqBy-CSB_7q17.js";import"./iteratee--uwqTho3.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-CxoK4-9h.js";import{M as o,C as h}from"./blocks-DyORa5DM.js";import{C as d,W as s}from"./dimensions.stories-BymiIhuy.js";import"./iframe-DiQxFPiD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-gf7fYE_b.js";import"./index-B_6w02dr.js";import"./index-DXMpEhi9.js";import"./ChartSizeDimensions-Db_XTqPJ.js";import"./zIndexSlice-CbAjIrOk.js";import"./immer-DosMXF92.js";import"./get-Dz6QpTIZ.js";import"./resolveDefaultProps-BZylAH88.js";import"./isWellBehavedNumber-BHg_3JmY.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-CxyGmExL.js";import"./RechartsWrapper-BvKHUawi.js";import"./index-DEHTfYnV.js";import"./renderedTicksSlice-CVnOD3jK.js";import"./axisSelectors-BmcnLQg7.js";import"./d3-scale-DQujxaME.js";import"./CartesianChart-j347tMAF.js";import"./chartDataContext-sNW_KTv-.js";import"./CategoricalChart-1umVaoo6.js";import"./Page-Cj8EiXz7.js";import"./Line-sGvSTEOh.js";import"./Layer-DW7oRwXF.js";import"./Curve-B6Y4ZTmR.js";import"./types-3xORkcTs.js";import"./step-C72WQite.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BWXZdjgl.js";import"./Label-DzhDJono.js";import"./Text-BktdaDV_.js";import"./DOMUtils-C48HdCx5.js";import"./ZIndexLayer-CyWmE1eJ.js";import"./useAnimationId-BBPLHSdH.js";import"./ActivePoints-CDvTrnjr.js";import"./Dot-DDdvkJOK.js";import"./RegisterGraphicalItemId-CwapTkk7.js";import"./ErrorBarContext-CkyyD-i0.js";import"./GraphicalItemClipPath-B5HruHls.js";import"./SetGraphicalItem-glSzG2Ws.js";import"./getRadiusAndStrokeWidthFromDot-lcmD8n15.js";import"./ActiveShapeUtils-CPs_mOyJ.js";import"./XAxis-EdXvGrQH.js";import"./CartesianAxis-BIrMP5Fh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./YAxis-Djww7T90.js";import"./Legend-BnuCy5C8.js";import"./Symbols-CEFSVf8K.js";import"./symbol-C9m5SbLS.js";import"./useElementOffset-BvonADWO.js";import"./uniqBy-BRng3TIU.js";import"./iteratee-BdJ_-fKl.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

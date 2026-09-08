import{u as n,j as e}from"./index-DvgqsbRM.js";import{M as o,C as h}from"./blocks-Dedm3gHq.js";import{C as d,W as s}from"./dimensions.stories-Doh-P2Dp.js";import"./iframe-Cohm3Mgw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7CetYi-.js";import"./index-S5rsC3Tw.js";import"./index-BauJCgFC.js";import"./ChartSizeDimensions-BDsofTiu.js";import"./zIndexSlice-B9ueg08S.js";import"./throttle-yX9WQlUu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C0M5TZCe.js";import"./isWellBehavedNumber-gcpDVDB0.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-NgaAeXu7.js";import"./RechartsWrapper-BRBo2AAI.js";import"./axisSelectors-CjhsklJ0.js";import"./d3-scale-DvRyM4Sf.js";import"./index-DvtaYKH7.js";import"./renderedTicksSlice-BCr9iPCV.js";import"./index-Cm_kbqdK.js";import"./CartesianChart-Cpw2D3LX.js";import"./chartDataContext-H3bm4v7q.js";import"./CategoricalChart-Df9xH4Hr.js";import"./Page-Cj8EiXz7.js";import"./Line-CSUvTs5t.js";import"./Layer-0g-9u_Rw.js";import"./Curve-BoBL6qva.js";import"./types-DRz-ZInT.js";import"./step-DcnLL6eP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CnXe2R42.js";import"./Label-CjpZErbZ.js";import"./Text-YiVIU37_.js";import"./DOMUtils-txvPDt5R.js";import"./useId-C6wOq3r0.js";import"./useBackwardsCompatibleTheme-VM02li75.js";import"./ZIndexLayer-CYwij2WM.js";import"./useAnimationId-Cli-i2xG.js";import"./ActivePoints-D3t_JlJ4.js";import"./Dot-bF3RsuDa.js";import"./RegisterGraphicalItemId-zE1kxnUQ.js";import"./ErrorBarContext-CroV_pde.js";import"./GraphicalItemClipPath-C_0K_X_g.js";import"./SetGraphicalItem-Cu_GzdoF.js";import"./getRadiusAndStrokeWidthFromDot-BzpvHiho.js";import"./ActiveShapeUtils-Vqel86XU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-CVOvqpzX.js";import"./CartesianAxis-ayk5133x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CL7XnP-K.js";import"./Legend-DdnPtxq-.js";import"./Symbols-TKWw2euB.js";import"./symbol-DN1AI-xQ.js";import"./useElementOffset-CIa7YSgL.js";import"./uniqBy-DMinejVi.js";import"./iteratee-Cno2h-aJ.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-CmuSIgN_.js";import{M as o,C as h}from"./blocks-CW6iAIay.js";import{C as d,W as s}from"./dimensions.stories-_CWBY5UJ.js";import"./iframe-DmOC-Kec.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8dvCc79.js";import"./index-B0Er-kke.js";import"./index-FaI1Rch4.js";import"./ChartSizeDimensions-DldPnHEL.js";import"./zIndexSlice-Dnmn7sAe.js";import"./throttle-26j8lv8v.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-4b8FSqHP.js";import"./isWellBehavedNumber-CieT4pBa.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BkZrMH3I.js";import"./RechartsWrapper-BAE5OfjG.js";import"./axisSelectors-BhU9IBL9.js";import"./d3-scale-BzcnxCkj.js";import"./index-DauADrzh.js";import"./renderedTicksSlice-BbRk6kVT.js";import"./index-D-7FIJbH.js";import"./CartesianChart-AsMQKsVq.js";import"./chartDataContext-CyP3b76p.js";import"./CategoricalChart-D6inGbGf.js";import"./Page-Cj8EiXz7.js";import"./Line-DKDIyTAQ.js";import"./Layer-DqeA_nA2.js";import"./Curve-Dsy708jZ.js";import"./types-Bi5NSMkf.js";import"./step-BqN3jYrj.js";import"./path-DyVhHtw_.js";import"./activeStyles-CHqa9trn.js";import"./Label-Dya5Ed-c.js";import"./Text-CTMopfR1.js";import"./pageBackground--_ixwiIK.js";import"./useId-BuaxFojz.js";import"./useBackwardsCompatibleTheme-BIerM7O_.js";import"./ZIndexLayer-CPUam-Va.js";import"./dataEntryStyles-CeCSWdpc.js";import"./useAnimationId-BrR1kfhy.js";import"./ActivePoints-BeW2RHR2.js";import"./Dot-Ck4Vihzk.js";import"./RegisterGraphicalItemId-CjMER2_v.js";import"./ErrorBarContext-CznJE672.js";import"./GraphicalItemClipPath-a-_vkjmo.js";import"./SetGraphicalItem-DTnHHD7N.js";import"./getRadiusAndStrokeWidthFromDot-CG4C4UUI.js";import"./ActiveShapeUtils-tFB41mpm.js";import"./useEffectiveDataKey-DpBICXZ6.js";import"./XAxis-ByYBkyBH.js";import"./CartesianAxis-D2u0I9ER.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./YAxis-CcRfM4MH.js";import"./Legend-BuMlXU6a.js";import"./Symbols-DkIZTGNL.js";import"./symbol-G7578D_G.js";import"./useElementOffset-ZDsHkVD5.js";import"./uniqBy-BV3xScZI.js";import"./iteratee-M-5VHa93.js";import"./isArguments-yB-y1yaH.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function Ce(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{Ce as default};

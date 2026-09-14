import{u as n,j as e}from"./index-Dt4H9FJn.js";import{M as o,C as h}from"./blocks-CCLSKeXS.js";import{C as d,W as s}from"./dimensions.stories-DE6987RI.js";import"./iframe-C079Nsfx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DexGzJ_q.js";import"./index-zk8Wcx4z.js";import"./index-CQ3I_J9a.js";import"./ChartSizeDimensions-ij1Xyglr.js";import"./zIndexSlice-DLciVaZw.js";import"./throttle-D3s_o_Wq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CabyU6Oc.js";import"./isWellBehavedNumber-CDqNrIr8.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BOV6wT6A.js";import"./RechartsWrapper-BrZlEkAN.js";import"./axisSelectors-BAri39V9.js";import"./d3-scale-BHoY9dLJ.js";import"./index-DADriLAa.js";import"./renderedTicksSlice-DVdEowfn.js";import"./index-Duc3f3M9.js";import"./CartesianChart-BZirPUWR.js";import"./chartDataContext-VWCZx3p0.js";import"./CategoricalChart-DwP_vuON.js";import"./Page-Cj8EiXz7.js";import"./Line-D_FKsDxM.js";import"./Layer-Kj8YrSbz.js";import"./Curve-iBp1fVgP.js";import"./types-CUH5bwnf.js";import"./step-Chg4DONu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DS39RbqN.js";import"./Label-DC63Ta0S.js";import"./Text-6vWGAU42.js";import"./DOMUtils-L7J-bYO6.js";import"./useId-DU03E5LM.js";import"./useBackwardsCompatibleTheme-DGGDmwyU.js";import"./ZIndexLayer-IY8xHCFB.js";import"./useAnimationId-MWHCnbEb.js";import"./ActivePoints-D6LcUBQa.js";import"./Dot-mGzGAe7T.js";import"./RegisterGraphicalItemId-jBLm1jna.js";import"./ErrorBarContext-DRwIAR_a.js";import"./GraphicalItemClipPath-BbWylYdQ.js";import"./SetGraphicalItem-CzroE857.js";import"./getRadiusAndStrokeWidthFromDot-CGqoDsan.js";import"./ActiveShapeUtils-DRAmEoLS.js";import"./useGraphicalItemIdentity-D2ZyzXPv.js";import"./XAxis-De-1mJNj.js";import"./CartesianAxis-KliPXgnc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CLt4nzsu.js";import"./Legend-CD3bvqs8.js";import"./Symbols-B6mwN2Qu.js";import"./symbol-8JioVXKY.js";import"./useElementOffset-CMlcetBv.js";import"./uniqBy-BY9dT-HT.js";import"./iteratee-DCZNy5jY.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{u as n,j as e}from"./index-DW25f8QW.js";import{M as o,C as h}from"./blocks-Cnf-TiFp.js";import{C as d,W as s}from"./dimensions.stories-sZ8H2miH.js";import"./iframe-14XWblZL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoYHIswN.js";import"./index-CyB2tElA.js";import"./index-CT88W_qc.js";import"./ChartSizeDimensions-CWUvmDSn.js";import"./zIndexSlice-bTipO816.js";import"./throttle-BdJ0G1gd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CeALBfEq.js";import"./isWellBehavedNumber-MwCzfGE9.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BWmJnIiB.js";import"./RechartsWrapper-DCy9svnE.js";import"./axisSelectors-CIwAjqs7.js";import"./d3-scale-Do0_JEbV.js";import"./index-kqeHVlrV.js";import"./renderedTicksSlice-MhpbyeSe.js";import"./index-0t1fABOK.js";import"./CartesianChart-CccXTSFB.js";import"./chartDataContext-TCJzUoES.js";import"./CategoricalChart-BYZHR-yl.js";import"./Page-Cj8EiXz7.js";import"./Line-CWtoKG_V.js";import"./Layer-DfNVM8Fr.js";import"./Curve-CiXwsAAl.js";import"./types-DUuownuR.js";import"./step-JufzNNlH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dweh6qvQ.js";import"./Label-CvRLouIN.js";import"./Text-DR2swdHV.js";import"./DOMUtils-BDBx2TYe.js";import"./useId-B0oD1V4p.js";import"./useBackwardsCompatibleTheme-CUWKt_Td.js";import"./ZIndexLayer-BpIepiPk.js";import"./useAnimationId-BF3NsOWV.js";import"./ActivePoints-CmDJ2stf.js";import"./Dot-CVbI_zwl.js";import"./RegisterGraphicalItemId-Bdmh3jKn.js";import"./ErrorBarContext-B0Gjb9Ej.js";import"./GraphicalItemClipPath-7jxlsFlx.js";import"./SetGraphicalItem-DlBXFH4y.js";import"./getRadiusAndStrokeWidthFromDot-CkcS_CHs.js";import"./ActiveShapeUtils-qHfZYwQx.js";import"./useGraphicalItemIdentity-QKGsdlin.js";import"./XAxis-C7X69uLj.js";import"./CartesianAxis-CBKTwxf2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-B3LGD4EX.js";import"./Legend-BErzQH-F.js";import"./Symbols-VjYZPiRG.js";import"./symbol-BSOWQiAM.js";import"./useElementOffset-cDBpeZWA.js";import"./uniqBy-BGqFg_4C.js";import"./iteratee-CcTmIxFv.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

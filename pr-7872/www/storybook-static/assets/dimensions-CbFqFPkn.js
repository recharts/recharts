import{u as n,j as e}from"./index-C4TwJQyp.js";import{M as o,C as h}from"./blocks-BjxKjI_0.js";import{C as d,W as s}from"./dimensions.stories-q7rVrFDA.js";import"./iframe-C_uZmGJ0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPNGFjKX.js";import"./index-C_Xrr1JY.js";import"./index-D4BdbP-V.js";import"./ChartSizeDimensions-D7WfGEFX.js";import"./zIndexSlice-DLwc6L6K.js";import"./throttle-ssm5i5NQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-qk1iWAfg.js";import"./isWellBehavedNumber-bflz4OY5.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-Bj6W4vsF.js";import"./RechartsWrapper-CXap3oDx.js";import"./axisSelectors-Bynx2pvt.js";import"./d3-scale-qCFWvZmx.js";import"./index-i5xBuxs4.js";import"./renderedTicksSlice-DdBaQZqr.js";import"./index-DmhH5Xz3.js";import"./CartesianChart-RcuLD4DP.js";import"./chartDataContext-DAujoSs5.js";import"./CategoricalChart-BSnQBJZ3.js";import"./Page-Cj8EiXz7.js";import"./Line-5Ky_uooe.js";import"./Layer-FqzZic0p.js";import"./Curve-DrCVQ1z_.js";import"./types-mc5h_EFw.js";import"./step-d36cIwmk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bdmry8Nm.js";import"./Label-fJXJ83zZ.js";import"./Text-gzTYclIX.js";import"./DOMUtils-D581TnDq.js";import"./useId-CAahTF3z.js";import"./useBackwardsCompatibleTheme-Dcj-aUF4.js";import"./ZIndexLayer-WWept0wS.js";import"./useAnimationId-DVpik13A.js";import"./ActivePoints-C2NAg-mW.js";import"./Dot-BxKfnRiv.js";import"./RegisterGraphicalItemId-BuMk-4uG.js";import"./ErrorBarContext-CukgZUAO.js";import"./GraphicalItemClipPath-CZ-MeeIA.js";import"./SetGraphicalItem-CizKrbKK.js";import"./getRadiusAndStrokeWidthFromDot-Cu-dtnOu.js";import"./ActiveShapeUtils-DegrRRKp.js";import"./useGraphicalItemIdentity-BVAmN--h.js";import"./XAxis-YZBSNmPV.js";import"./CartesianAxis-Dw4Yg42W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CCpz6f2F.js";import"./Legend-BX2c5Cl-.js";import"./Symbols-BBRAm-fV.js";import"./symbol-DCSp5Nqc.js";import"./useElementOffset-C3oK5LdM.js";import"./uniqBy-CEi0ISro.js";import"./iteratee-QMsHInH6.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

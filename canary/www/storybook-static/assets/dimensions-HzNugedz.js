import{u as n,j as e}from"./index-CF-PsePi.js";import{M as o,C as h}from"./blocks-C2Bxr74N.js";import{C as d,W as s}from"./dimensions.stories-Do3-pnob.js";import"./iframe-CeCOqiJm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B9TMiPeS.js";import"./index-Dpi_zLnO.js";import"./index-DrQMD2ku.js";import"./ChartSizeDimensions-DRHGzUO1.js";import"./zIndexSlice-DdaMb5XG.js";import"./throttle-Bex5NkUv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CkuoYXav.js";import"./isWellBehavedNumber-B7aD_M3c.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-DgluM-g0.js";import"./RechartsWrapper-DkI5rWg4.js";import"./axisSelectors-DY_V65z5.js";import"./d3-scale-Cd6mqy1G.js";import"./index-D0EsppEB.js";import"./renderedTicksSlice-Bncz9dIB.js";import"./index-DRO0vfdx.js";import"./CartesianChart-DsDUvZ6B.js";import"./chartDataContext-CJlR_4xR.js";import"./CategoricalChart-DiPqSwwe.js";import"./Page-Cj8EiXz7.js";import"./Line-C5ZRb_5H.js";import"./Layer-DpcMSheP.js";import"./Curve-ig6Db0bN.js";import"./types-m_9hz0N1.js";import"./step-D1fpC4Ci.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Di-68duO.js";import"./Label-Xd_rxrmK.js";import"./Text-DDswsbtv.js";import"./DOMUtils-BCUi_GUC.js";import"./useId-Bah-b0hR.js";import"./useBackwardsCompatibleTheme-C_9NEiLi.js";import"./ZIndexLayer-BQtw6wpF.js";import"./useAnimationId-CPtx5Z6n.js";import"./ActivePoints-BK3_tt-0.js";import"./Dot-DoByF9sv.js";import"./RegisterGraphicalItemId-BNFTgn8t.js";import"./ErrorBarContext-C_Gf5gdw.js";import"./GraphicalItemClipPath-CNDfJ_fQ.js";import"./SetGraphicalItem-DcgFqiOy.js";import"./getRadiusAndStrokeWidthFromDot-r7hnUPNX.js";import"./ActiveShapeUtils-FS6Mn2Zl.js";import"./useGraphicalItemIdentity-BZQpyUJc.js";import"./XAxis-C64KB_q-.js";import"./CartesianAxis-VCLAEQIg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-A7bYD_ch.js";import"./Legend-NBKfN6k5.js";import"./Symbols-DQqX5H-U.js";import"./symbol-DkOFKYHt.js";import"./useElementOffset-CZclPecY.js";import"./uniqBy-BFlog4hA.js";import"./iteratee-DngjopU3.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

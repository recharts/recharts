import{u as n,j as e}from"./index-CWC8rhTI.js";import{M as o,C as h}from"./blocks-Blta5sis.js";import{C as d,W as s}from"./dimensions.stories-30MT87P3.js";import"./iframe-DwQ960mE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-934SWzTj.js";import"./index-BoR0gZ14.js";import"./index-Dhp6LnMJ.js";import"./ChartSizeDimensions-DaUXeEp6.js";import"./zIndexSlice-CRshAYou.js";import"./throttle-CBpng8v-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-yLRPEvQ6.js";import"./isWellBehavedNumber-C8IRNLp2.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-njiJAHmg.js";import"./RechartsWrapper-CV7KCZiE.js";import"./axisSelectors-BuM-hXsR.js";import"./d3-scale-CB-MSXXc.js";import"./index-D_T8BRhY.js";import"./renderedTicksSlice-ByN1eXqa.js";import"./index-Cfk5_Nje.js";import"./CartesianChart-D1gjFL-f.js";import"./chartDataContext-XXv1Y0Lr.js";import"./CategoricalChart-puUF4rGm.js";import"./Page-Cj8EiXz7.js";import"./Line-BsyPe3kF.js";import"./Layer-nbNG3urG.js";import"./Curve-DlR_mCFH.js";import"./types-BF5horUV.js";import"./step-fQiYLSQ2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems--DCjDL7v.js";import"./Label-BnvMog58.js";import"./Text-D31azkqa.js";import"./DOMUtils-jWrmId9V.js";import"./useId-Do6UThpj.js";import"./useBackwardsCompatibleTheme-1nd_EnAF.js";import"./ZIndexLayer-CNwoXSbx.js";import"./useAnimationId-CgdCBqIf.js";import"./ActivePoints-Dl85NR7O.js";import"./Dot-B_Wd5Y7s.js";import"./RegisterGraphicalItemId-zN7Xc-Dd.js";import"./ErrorBarContext-C6-51rId.js";import"./GraphicalItemClipPath-BwWJK4tk.js";import"./SetGraphicalItem-DQfhPOxL.js";import"./getRadiusAndStrokeWidthFromDot-Bgbvlm_y.js";import"./ActiveShapeUtils-DQGjc9Is.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./XAxis-C3ApfTuq.js";import"./CartesianAxis-B1j0Zzpr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-BMPG6Jn9.js";import"./Legend-Br1vdSSz.js";import"./Symbols-rsnYG1uV.js";import"./symbol-B7Cm16Cp.js";import"./useElementOffset-Btc2x5AZ.js";import"./uniqBy-B5k5jdGw.js";import"./iteratee-C7BmF6bi.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

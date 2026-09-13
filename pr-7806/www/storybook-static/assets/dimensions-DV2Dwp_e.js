import{u as n,j as e}from"./index-CnQwrylo.js";import{M as o,C as h}from"./blocks-DzfV5lGR.js";import{C as d,W as s}from"./dimensions.stories-B9DQ6wf7.js";import"./iframe-DMwBeJR9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-W8It9SHe.js";import"./index-CW9TVSnL.js";import"./index-KvfSCZEN.js";import"./ChartSizeDimensions-CcYRE14V.js";import"./zIndexSlice-BP1SI4lk.js";import"./throttle-JhdtWwel.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-FbHkIvMQ.js";import"./isWellBehavedNumber-BWBsnwkO.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-C1dXdi20.js";import"./RechartsWrapper-DQf4ekbV.js";import"./axisSelectors-BzRm_10h.js";import"./d3-scale-CTZXeK9y.js";import"./index-C4TxoYVJ.js";import"./renderedTicksSlice-Dl_Tlvvx.js";import"./index-CR-86fOk.js";import"./CartesianChart-C4QG-pAm.js";import"./chartDataContext-ClQA_jr_.js";import"./CategoricalChart-BZsjmvUf.js";import"./Page-Cj8EiXz7.js";import"./Line-D-0E5tR7.js";import"./Layer-DMhp_Srr.js";import"./Curve-BLRaA_Xy.js";import"./types-CMazcurm.js";import"./step-DujtKqi5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-H6knMzOg.js";import"./Label-B67df_fL.js";import"./Text-BAFoSTNm.js";import"./DOMUtils-DtiMQzYq.js";import"./useId-BlKh4dfu.js";import"./useBackwardsCompatibleTheme-ujSziCXW.js";import"./ZIndexLayer-CFNoJ68M.js";import"./useAnimationId-1Z-BMfjp.js";import"./ActivePoints-BaKtG9_T.js";import"./Dot-CC7p1g3t.js";import"./RegisterGraphicalItemId-D2Rdl-pC.js";import"./ErrorBarContext-DyCS0eIu.js";import"./GraphicalItemClipPath-DH2vwsgS.js";import"./SetGraphicalItem-BmbkJBqp.js";import"./getRadiusAndStrokeWidthFromDot-MjPGd6X0.js";import"./ActiveShapeUtils-D9qWvVvy.js";import"./useGraphicalItemIdentity-1ETpT5kl.js";import"./XAxis-CXH1fd9N.js";import"./CartesianAxis-BJRJUBpp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./YAxis-CzX5Dj-l.js";import"./Legend-CQzlz703.js";import"./Symbols-tCjh6GHl.js";import"./symbol-C5kjLuRU.js";import"./useElementOffset-BgsP0NQQ.js";import"./uniqBy-BrSK9-IV.js";import"./iteratee-IvuUwhdK.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
